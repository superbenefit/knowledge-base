<%*
// T04-Fix-Artifact-Links.md
// Fixes remaining link issues in artifact files after bulk conversion
// Handles: angle brackets, relative paths, Obsidian URIs, anchor spaces

const file = tp.config.active_file;

// Only process files in artifacts folder
if (!file.path.startsWith("artifacts/")) {
    new Notice("This template only works on files in the artifacts folder");
    return;
}

// Configuration
const processFile = true; // Set to false for dry run
const showDetails = true; // Show detailed change log

// Initialize counters
let changes = {
    angleBrackets: 0,
    relativePaths: 0,
    obsidianUris: 0,
    anchorSpaces: 0,
    total: 0
};

// Get file content
let content = await app.vault.read(file);
const originalContent = content;

// Store changes for reporting
let changeLog = [];

try {
    // 1. Fix angle bracket links with spaces in anchors
    // Pattern: [text](<path#anchor with spaces>)
    content = content.replace(/\[([^\]]+)\]\(<([^#>]+)(#[^>]+)?>\)/g, (match, linkText, path, anchor) => {
        let newPath = path;
        let newAnchor = anchor || '';
        
        // Add leading slash if it's a relative internal path
        if (!path.startsWith('/') && !path.startsWith('http') && !path.startsWith('#')) {
            newPath = '/' + path;
        }
        
        // Fix spaces in anchor
        if (newAnchor) {
            const originalAnchor = newAnchor;
            newAnchor = newAnchor.replace(/\s+/g, '-').toLowerCase();
            if (originalAnchor !== newAnchor) {
                changes.anchorSpaces++;
            }
        }
        
        const result = `[${linkText}](${newPath}${newAnchor})`;
        changes.angleBrackets++;
        changeLog.push(`Angle bracket: "${match}" → "${result}"`);
        return result;
    });
    
    // 2. Fix relative paths (add leading slash)
    // Pattern: [text](path/to/file.md) where path doesn't start with special characters
    content = content.replace(/\[([^\]]+)\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g, (match, linkText, path, rest) => {
        const result = `[${linkText}](/${path}${rest})`;
        changes.relativePaths++;
        changeLog.push(`Relative path: "${match}" → "${result}"`);
        return result;
    });
    
    // 3. Fix Obsidian URI links
    // Pattern: obsidian://open?vault=sb-knowledge-base&file=...
    content = content.replace(/obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g, (match, encodedPath) => {
        // Decode the URL-encoded path
        let decodedPath = decodeURIComponent(encodedPath);
        
        // Add .md extension if missing
        if (!decodedPath.endsWith('.md')) {
            decodedPath += '.md';
        }
        
        // Ensure leading slash
        if (!decodedPath.startsWith('/')) {
            decodedPath = '/' + decodedPath;
        }
        
        changes.obsidianUris++;
        changeLog.push(`Obsidian URI: "${match}" → "${decodedPath}"`);
        return decodedPath;
    });
    
    // 4. Additional fix for links with spaces in anchors (without angle brackets)
    // Pattern: [text](path#anchor with spaces)
    content = content.replace(/\[([^\]]+)\]\(([^#)]+)(#[^)]+)\)/g, (match, linkText, path, anchor) => {
        // Check if anchor has spaces
        if (anchor.includes(' ')) {
            const newAnchor = anchor.replace(/\s+/g, '-').toLowerCase();
            const result = `[${linkText}](${path}${newAnchor})`;
            changes.anchorSpaces++;
            changeLog.push(`Anchor spaces: "${match}" → "${result}"`);
            return result;
        }
        return match;
    });
    
    // Calculate total changes
    changes.total = changes.angleBrackets + changes.relativePaths + changes.obsidianUris + changes.anchorSpaces;
    
    // Apply changes if any were made
    if (changes.total > 0 && processFile) {
        await app.vault.modify(file, content);
        
        // Create summary
        let summary = `# Link Fix Summary for ${file.basename}\n\n`;
        
        // Re-check for remaining issues
        const remainingIssues = {
            angleBrackets: (content.match(/\[[^\]]+\]\(<[^>]+>\)/g) || []).length,
            relativePaths: (content.match(/\[[^\]]+\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g) || []).length,
            obsidianUris: (content.match(/obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g) || []).length,
            anchorSpaces: (content.match(/\[[^\]]+\]\(([^#)]+)(#[^)]*\s[^)]*)\)/g) || []).length
        };
        
        const totalRemaining = remainingIssues.angleBrackets + remainingIssues.relativePaths + 
                               remainingIssues.obsidianUris + remainingIssues.anchorSpaces;
        
        // Add status indicator at the top
        if (totalRemaining === 0) {
            summary += `## ✅ STATUS: ALL LINKS FIXED\n\n`;
            summary += `All problematic links have been successfully converted.\n\n`;
        } else {
            summary += `## ⚠️ STATUS: ${totalRemaining} LINKS NEED MANUAL ATTENTION\n\n`;
            summary += `**Remaining Issues:**\n`;
            if (remainingIssues.angleBrackets > 0) summary += `- Angle bracket links: ${remainingIssues.angleBrackets}\n`;
            if (remainingIssues.relativePaths > 0) summary += `- Relative paths: ${remainingIssues.relativePaths}\n`;
            if (remainingIssues.obsidianUris > 0) summary += `- Obsidian URIs: ${remainingIssues.obsidianUris}\n`;
            if (remainingIssues.anchorSpaces > 0) summary += `- Anchor spaces: ${remainingIssues.anchorSpaces}\n`;
            summary += `\nThese may require manual fixing or a different approach.\n\n`;
        }
        
        summary += `**File**: ${file.path}\n`;
        summary += `**Timestamp**: ${new Date().toISOString()}\n`;
        summary += `**Total Changes Made**: ${changes.total}\n\n`;
        
        summary += `## Changes by Type\n\n`;
        summary += `- Angle bracket links fixed: ${changes.angleBrackets}\n`;
        summary += `- Relative paths made absolute: ${changes.relativePaths}\n`;
        summary += `- Obsidian URIs converted: ${changes.obsidianUris}\n`;
        summary += `- Anchor spaces replaced: ${changes.anchorSpaces}\n\n`;
        
        if (showDetails && changeLog.length > 0) {
            summary += `## Detailed Changes\n\n`;
            changeLog.forEach((change, i) => {
                summary += `${i + 1}. ${change}\n`;
            });
        }
        
        // Show results
        new Notice(`Fixed ${changes.total} links in ${file.basename}`);
        
        // Return summary for insertion
        tR = summary;
        
    } else if (changes.total === 0) {
        new Notice(`No problematic links found in ${file.basename}`);
        tR = `# No Changes Needed\n\n**File**: ${file.path}\n**Status**: All links are properly formatted.`;
    } else {
        // Dry run mode
        let preview = `# Link Fix Preview for ${file.basename}\n\n`;
        preview += `**Mode**: DRY RUN (no changes applied)\n`;
        preview += `**Potential Changes**: ${changes.total}\n\n`;
        preview += changeLog.join('\n');
        tR = preview;
    }
    
} catch (error) {
    console.error("Error processing links:", error);
    new Notice(`Error: ${error.message}`);
    tR = `# Error\n\nFailed to process links: ${error.message}`;
}
%>
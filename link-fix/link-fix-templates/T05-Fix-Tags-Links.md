<%*
// T05-Fix-Tags-Links.md
// Batch processes all tag files with problematic links
// Handles: angle brackets, relative paths, Obsidian URIs, anchor spaces, claude.ai links

console.log("Starting batch processing of tags directory...");

// Configuration
const processFiles = true; // Set to false for dry run
const tagsPath = "tags/";

// Patterns to fix
const patterns = {
    angleBrackets: /\[([^\]]+)\]\(<([^>]+)>\)/g,
    relativePaths: /\[([^\]]+)\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g,
    obsidianUris: /obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g,
    anchorSpaces: /\[([^\]]+)\]\(([^#)]+)(#[^)]*\s[^)]*)\)/g,
    claudeAiLinks: /https:\/\/claude\.ai\/chat\//g
};

// Get all markdown files in tags folder
const allFiles = app.vault.getMarkdownFiles().filter(f => f.path.startsWith(tagsPath));

console.log(`Found ${allFiles.length} files to process in tags/`);

// Initialize summary data
let processedFiles = [];
let skippedFiles = [];
let errorFiles = [];
let totalChanges = 0;

// Process each file
for (const file of allFiles) {
    try {
        let content = await app.vault.read(file);
        const originalContent = content;
        
        // Check if file has any issues
        let hasIssues = false;
        for (const [name, pattern] of Object.entries(patterns)) {
            if (content.match(pattern)) {
                hasIssues = true;
                break;
            }
        }
        
        if (!hasIssues) {
            skippedFiles.push({
                path: file.path,
                reason: "No problematic links found"
            });
            continue;
        }
        
        // Initialize change tracking for this file
        let fileChanges = {
            angleBrackets: 0,
            relativePaths: 0,
            obsidianUris: 0,
            anchorSpaces: 0,
            claudeAiLinks: 0,
            total: 0
        };
        
        // Fix angle bracket links
        content = content.replace(/\[([^\]]+)\]\(<([^#>]+)(#[^>]+)?>\)/g, (match, linkText, path, anchor) => {
            let newPath = path;
            let newAnchor = anchor || '';
            
            if (!path.startsWith('/') && !path.startsWith('http') && !path.startsWith('#')) {
                newPath = '/' + path;
            }
            
            if (newAnchor) {
                newAnchor = newAnchor.replace(/\s+/g, '-').toLowerCase();
            }
            
            fileChanges.angleBrackets++;
            return `[${linkText}](${newPath}${newAnchor})`;
        });
        
        // Fix relative paths
        content = content.replace(patterns.relativePaths, (match, linkText, path, rest) => {
            fileChanges.relativePaths++;
            return `[${linkText}](/${path}${rest})`;
        });
        
        // Fix Obsidian URIs
        content = content.replace(patterns.obsidianUris, (match, encodedPath) => {
            let decodedPath = decodeURIComponent(encodedPath);
            if (!decodedPath.endsWith('.md')) {
                decodedPath += '.md';
            }
            if (!decodedPath.startsWith('/')) {
                decodedPath = '/' + decodedPath;
            }
            fileChanges.obsidianUris++;
            return decodedPath;
        });
        
        // Fix anchor spaces
        content = content.replace(/\[([^\]]+)\]\(([^#)]+)(#[^)]+)\)/g, (match, linkText, path, anchor) => {
            if (anchor.includes(' ')) {
                const newAnchor = anchor.replace(/\s+/g, '-').toLowerCase();
                fileChanges.anchorSpaces++;
                return `[${linkText}](${path}${newAnchor})`;
            }
            return match;
        });
        
        // Fix Claude.ai links
        content = content.replace(patterns.claudeAiLinks, (match) => {
            fileChanges.claudeAiLinks++;
            return '/';
        });
        
        // Calculate total changes
        fileChanges.total = fileChanges.angleBrackets + fileChanges.relativePaths + 
                           fileChanges.obsidianUris + fileChanges.anchorSpaces + 
                           fileChanges.claudeAiLinks;
        
        if (fileChanges.total > 0 && processFiles) {
            await app.vault.modify(file, content);
            processedFiles.push({
                path: file.path,
                changes: fileChanges
            });
            totalChanges += fileChanges.total;
        } else if (fileChanges.total > 0) {
            processedFiles.push({
                path: file.path,
                changes: fileChanges,
                dryRun: true
            });
        }
        
    } catch (error) {
        errorFiles.push({
            path: file.path,
            error: error.message
        });
    }
}

// Generate comprehensive report
let report = `# Tags Directory Link Fix Report\n\n`;
report += `**Generated**: ${new Date().toISOString()}\n`;
report += `**Mode**: ${processFiles ? 'PRODUCTION' : 'DRY RUN'}\n`;
report += `**Scope**: All files in tags/ directory\n\n`;

report += `## Summary\n\n`;
report += `- **Files Checked**: ${allFiles.length}\n`;
report += `- **Files Fixed**: ${processedFiles.length}\n`;
report += `- **Files Skipped**: ${skippedFiles.length} (already clean)\n`;
report += `- **Files with Errors**: ${errorFiles.length}\n`;
report += `- **Total Changes Made**: ${totalChanges}\n\n`;

if (processedFiles.length > 0) {
    report += `## Files Fixed\n\n`;
    report += `| File | Changes | Details |\n`;
    report += `|------|---------|----------|\n`;
    
    processedFiles.forEach(file => {
        const details = [];
        if (file.changes.angleBrackets > 0) details.push(`${file.changes.angleBrackets} angle brackets`);
        if (file.changes.relativePaths > 0) details.push(`${file.changes.relativePaths} relative paths`);
        if (file.changes.obsidianUris > 0) details.push(`${file.changes.obsidianUris} Obsidian URIs`);
        if (file.changes.anchorSpaces > 0) details.push(`${file.changes.anchorSpaces} anchor spaces`);
        if (file.changes.claudeAiLinks > 0) details.push(`${file.changes.claudeAiLinks} Claude.ai links`);
        
        report += `| ${file.path} | ${file.changes.total} | ${details.join(', ')} |\n`;
    });
}

if (skippedFiles.length > 0) {
    report += `\n## Clean Files (No Changes Needed)\n\n`;
    skippedFiles.forEach(file => {
        report += `- ${file.path}\n`;
    });
}

if (errorFiles.length > 0) {
    report += `\n## ⚠️ Errors\n\n`;
    errorFiles.forEach(file => {
        report += `- **${file.path}**: ${file.error}\n`;
    });
}

report += `\n## Next Steps\n\n`;
if (processFiles) {
    report += `1. ✅ All tags directory files have been processed\n`;
    report += `2. Run T05-Scan-Reference-Content to verify tags are clean\n`;
    report += `3. Proceed to Step 5.2: Convert Root Files\n`;
    report += `4. Create a git commit to save progress\n`;
} else {
    report += `1. Review the dry run results above\n`;
    report += `2. Set processFiles = true to apply changes\n`;
    report += `3. Run the template again\n`;
}

// Show notification
if (processFiles) {
    new Notice(`Fixed ${totalChanges} links across ${processedFiles.length} tags files!`);
} else {
    new Notice(`DRY RUN: Would fix ${totalChanges} links across ${processedFiles.length} files`);
}

// Return the report
tR = report;
%>
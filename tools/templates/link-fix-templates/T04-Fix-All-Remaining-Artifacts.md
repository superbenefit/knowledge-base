<%*
// T04-Fix-All-Remaining-Artifacts.md
// Batch processes all remaining artifact files with problematic links
// Handles: angle brackets, relative paths, Obsidian URIs, anchor spaces

console.log("Starting batch processing of remaining artifact files...");

// Configuration
const processFiles = true; // Set to false for dry run
const artifactsPath = "artifacts/";
const skipPaths = [
    // Final cleanup - no skips needed since we're processing remaining files
    // Previous broad exclusions removed to allow processing of:
    // - artifacts/articles/governance-for-better-futures/
    // - artifacts/articles/network-evolution/ 
    // - artifacts/guides/dao-primitives-framework/ (specific files)
];

// Patterns to fix
const patterns = {
    angleBrackets: /\[[^\]]+\]\(<[^>]+>\)/g,
    relativePaths: /\[[^\]]+\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g,
    obsidianUris: /obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g,
    anchorSpaces: /\[[^\]]+\]\(([^#)]+)(#[^)]*\s[^)]*)\)/g,
    claudeAiLinks: /https:\/\/claude\.ai\/chat\//g
};

// Get all markdown files in artifacts folder
const allFiles = app.vault.getMarkdownFiles().filter(f => f.path.startsWith(artifactsPath));

// Filter out already processed directories
const filesToProcess = allFiles.filter(file => {
    return !skipPaths.some(skip => file.path.startsWith(skip));
});

console.log(`Found ${filesToProcess.length} files to check in artifacts/ folder`);

// Initialize summary data
let processedFiles = [];
let skippedFiles = [];
let errorFiles = [];
let totalChanges = 0;

// Process each file
for (const file of filesToProcess) {
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
        content = content.replace(patterns.angleBrackets, (match, linkText, path, anchor) => {
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
        content = content.replace(patterns.anchorSpaces, (match, linkText, path, anchor) => {
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
let report = `# Batch Link Fix Report - Remaining Artifacts\n\n`;
report += `**Generated**: ${new Date().toISOString()}\n`;
report += `**Mode**: ${processFiles ? 'PRODUCTION' : 'DRY RUN'}\n`;
report += `**Scope**: All remaining artifact files with link issues\n\n`;

report += `## Summary\n\n`;
report += `- **Files Checked**: ${filesToProcess.length}\n`;
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
    report += `1. ✅ All remaining artifact files have been processed\n`;
    report += `2. Run T04-Find-Problem-Links to verify all issues are resolved\n`;
    report += `3. Test a few links to ensure they work correctly\n`;
    report += `4. Create a git commit to save progress\n`;
} else {
    report += `1. Review the dry run results above\n`;
    report += `2. Set processFiles = true to apply changes\n`;
    report += `3. Run the template again\n`;
}

// Show notification
if (processFiles) {
    new Notice(`Fixed ${totalChanges} links across ${processedFiles.length} files!`);
} else {
    new Notice(`DRY RUN: Would fix ${totalChanges} links across ${processedFiles.length} files`);
}

// Return the report
tR = report;
%>
<%*
// T05-Fix-Root-Files.md
// Processes root files (README.md, index.md, CONTRIBUTING.md) with problematic links
// Handles: angle brackets, relative paths, Obsidian URIs, anchor spaces, claude.ai links

console.log("Starting processing of root files...");

// Configuration
const processFiles = true; // Set to false for dry run
const rootFiles = ["README.md", "index.md", "CONTRIBUTING.md"];

// Patterns to fix
const patterns = {
    angleBrackets: /\[([^\]]+)\]\(<([^>]+)>\)/g,
    relativePaths: /\[([^\]]+)\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g,
    obsidianUris: /obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g,
    anchorSpaces: /\[([^\]]+)\]\(([^#)]+)(#[^)]*\s[^)]*)\)/g,
    claudeAiLinks: /https:\/\/claude\.ai\/chat\//g
};

// Get root files (files in vault root with specific names)
const allFiles = app.vault.getMarkdownFiles().filter(f => 
    rootFiles.includes(f.name) && !f.path.includes("/")
);

console.log(`Found ${allFiles.length} root files: ${allFiles.map(f => f.name).join(", ")}`);

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
        
        // Store specific changes for detailed logging
        let changeLog = [];
        
        // Fix angle bracket links
        content = content.replace(/\[([^\]]+)\]\(<([^#>]+)(#[^>]+)?>\)/g, (match, linkText, path, anchor) => {
            let newPath = path;
            let newAnchor = anchor || '';
            
            if (!path.startsWith('/') && !path.startsWith('http') && !path.startsWith('#')) {
                newPath = '/' + path;
            }
            
            if (newAnchor) {
                const originalAnchor = newAnchor;
                newAnchor = newAnchor.replace(/\s+/g, '-').toLowerCase();
                if (originalAnchor !== newAnchor) {
                    changeLog.push(`${file.name}: Fixed anchor spaces in "${match}"`);
                }
            }
            
            const result = `[${linkText}](${newPath}${newAnchor})`;
            fileChanges.angleBrackets++;
            changeLog.push(`${file.name}: Angle bracket fix: "${match}" → "${result}"`);
            return result;
        });
        
        // Fix relative paths
        content = content.replace(patterns.relativePaths, (match, linkText, path, rest) => {
            const result = `[${linkText}](/${path}${rest})`;
            fileChanges.relativePaths++;
            changeLog.push(`${file.name}: Relative path fix: "${match}" → "${result}"`);
            return result;
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
            changeLog.push(`${file.name}: Obsidian URI fix: "${match}" → "${decodedPath}"`);
            return decodedPath;
        });
        
        // Fix anchor spaces
        content = content.replace(/\[([^\]]+)\]\(([^#)]+)(#[^)]+)\)/g, (match, linkText, path, anchor) => {
            if (anchor.includes(' ')) {
                const newAnchor = anchor.replace(/\s+/g, '-').toLowerCase();
                const result = `[${linkText}](${path}${newAnchor})`;
                fileChanges.anchorSpaces++;
                changeLog.push(`${file.name}: Anchor spaces fix: "${match}" → "${result}"`);
                return result;
            }
            return match;
        });
        
        // Fix Claude.ai links
        content = content.replace(patterns.claudeAiLinks, (match) => {
            fileChanges.claudeAiLinks++;
            changeLog.push(`${file.name}: Claude.ai link removed: "${match}"`);
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
                changes: fileChanges,
                changeLog: changeLog
            });
            totalChanges += fileChanges.total;
        } else if (fileChanges.total > 0) {
            processedFiles.push({
                path: file.path,
                changes: fileChanges,
                changeLog: changeLog,
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
let report = `# Root Files Link Fix Report\n\n`;
report += `**Generated**: ${new Date().toISOString()}\n`;
report += `**Mode**: ${processFiles ? 'PRODUCTION' : 'DRY RUN'}\n`;
report += `**Scope**: Critical root files (README.md, index.md, CONTRIBUTING.md)\n\n`;

report += `## Summary\n\n`;
report += `- **Files Checked**: ${allFiles.length} / ${rootFiles.length} expected\n`;
report += `- **Files Fixed**: ${processedFiles.length}\n`;
report += `- **Files Skipped**: ${skippedFiles.length} (already clean)\n`;
report += `- **Files with Errors**: ${errorFiles.length}\n`;
report += `- **Total Changes Made**: ${totalChanges}\n\n`;

// Check for missing files
const foundFileNames = allFiles.map(f => f.name);
const missingFiles = rootFiles.filter(name => !foundFileNames.includes(name));
if (missingFiles.length > 0) {
    report += `## ⚠️ Missing Expected Files\n\n`;
    missingFiles.forEach(name => {
        report += `- **${name}**: Not found in vault root\n`;
    });
    report += `\n`;
}

if (processedFiles.length > 0) {
    report += `## Files Fixed\n\n`;
    
    processedFiles.forEach(file => {
        report += `### ${file.path}\n`;
        report += `**Changes**: ${file.changes.total}\n`;
        
        const details = [];
        if (file.changes.angleBrackets > 0) details.push(`${file.changes.angleBrackets} angle brackets`);
        if (file.changes.relativePaths > 0) details.push(`${file.changes.relativePaths} relative paths`);
        if (file.changes.obsidianUris > 0) details.push(`${file.changes.obsidianUris} Obsidian URIs`);
        if (file.changes.anchorSpaces > 0) details.push(`${file.changes.anchorSpaces} anchor spaces`);
        if (file.changes.claudeAiLinks > 0) details.push(`${file.changes.claudeAiLinks} Claude.ai links`);
        
        report += `**Types**: ${details.join(', ')}\n\n`;
        
        // Show detailed changes for root files (they're critical)
        if (file.changeLog && file.changeLog.length > 0) {
            report += `**Detailed Changes**:\n`;
            file.changeLog.forEach((change, i) => {
                report += `${i + 1}. ${change}\n`;
            });
            report += `\n`;
        }
    });
}

if (skippedFiles.length > 0) {
    report += `## ✅ Clean Files (No Changes Needed)\n\n`;
    skippedFiles.forEach(file => {
        report += `- **${file.path}**: ${file.reason}\n`;
    });
    report += `\n`;
}

if (errorFiles.length > 0) {
    report += `## ⚠️ Errors\n\n`;
    errorFiles.forEach(file => {
        report += `- **${file.path}**: ${file.error}\n`;
    });
    report += `\n`;
}

report += `## Next Steps\n\n`;
if (processFiles) {
    report += `1. ✅ All root files have been processed\n`;
    report += `2. Verify critical navigation links work correctly\n`;
    report += `3. Phase 5 complete - ready for Phase 6\n`;
    report += `4. Update processing order checklist\n`;
    report += `5. Create a git commit to save progress\n`;
} else {
    report += `1. Review the dry run results above\n`;
    report += `2. Pay special attention to changes in critical files\n`;
    report += `3. Set processFiles = true to apply changes\n`;
    report += `4. Run the template again\n`;
}

// Show notification
if (processFiles) {
    new Notice(`Fixed ${totalChanges} links across ${processedFiles.length} root files!`);
} else {
    new Notice(`DRY RUN: Would fix ${totalChanges} links across ${processedFiles.length} root files`);
}

// Return the report
tR = report;
%>
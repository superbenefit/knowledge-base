<%*
// T04-Find-Problem-Links.md
// Scans artifacts folder for files with problematic link patterns
// Use this to identify which files need T04-Fix-Artifact-Links applied

// Configuration
const searchPath = "artifacts/";
const showFileContents = false; // Set to true to show example problems from each file

// Link patterns to search for
const patterns = {
    angleBrackets: /\[([^\]]+)\]\(<([^>]+)>\)/g,
    relativePathsInternal: /\[([^\]]+)\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g,
    obsidianUris: /obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g,
    anchorSpaces: /\[([^\]]+)\]\(([^#)]+)(#[^)]*\s[^)]*)\)/g,
    claudeAiLinks: /https:\/\/claude\.ai\//g
};

// Get all markdown files in artifacts folder
const files = app.vault.getMarkdownFiles().filter(f => f.path.startsWith(searchPath));

let problemFiles = [];
let totalProblems = 0;

// Check each file
for (const file of files) {
    const content = await app.vault.read(file);
    let fileProblems = {
        path: file.path,
        problems: {},
        examples: {},
        total: 0
    };
    
    // Check each pattern
    for (const [patternName, pattern] of Object.entries(patterns)) {
        const matches = content.match(pattern);
        if (matches && matches.length > 0) {
            fileProblems.problems[patternName] = matches.length;
            fileProblems.examples[patternName] = matches.slice(0, 2); // Store first 2 examples
            fileProblems.total += matches.length;
        }
    }
    
    if (fileProblems.total > 0) {
        problemFiles.push(fileProblems);
        totalProblems += fileProblems.total;
    }
}

// Sort by number of problems (descending)
problemFiles.sort((a, b) => b.total - a.total);

// Generate report
let report = `# Artifact Links Scan Report\n\n`;
report += `**Generated**: ${new Date().toISOString()}\n`;
report += `**Scanned**: ${files.length} files in ${searchPath}\n`;
report += `**Files with issues**: ${problemFiles.length}\n`;
report += `**Total problematic links**: ${totalProblems}\n\n`;

if (problemFiles.length === 0) {
    report += `## ✅ No Issues Found\n\nAll links in the artifacts folder appear to be properly formatted.`;
} else {
    report += `## Files Requiring Attention\n\n`;
    report += `Use **T04-Fix-Artifact-Links** template on these files:\n\n`;
    
    for (const file of problemFiles) {
        report += `### ${file.path}\n`;
        report += `**Total issues**: ${file.total}\n\n`;
        
        // Show breakdown by type
        for (const [type, count] of Object.entries(file.problems)) {
            const typeLabel = {
                angleBrackets: "Angle bracket links",
                relativePathsInternal: "Relative paths (need /)",
                obsidianUris: "Obsidian URI links",
                anchorSpaces: "Anchors with spaces",
                claudeAiLinks: "Claude.ai links (mistakes)"
            }[type];
            
            report += `- ${typeLabel}: ${count}\n`;
            
            if (showFileContents && file.examples[type]) {
                report += `  Examples:\n`;
                file.examples[type].forEach(ex => {
                    report += `  - \`${ex.substring(0, 60)}${ex.length > 60 ? '...' : ''}\`\n`;
                });
            }
        }
        report += `\n`;
    }
    
    report += `## How to Fix\n\n`;
    report += `1. Open each file listed above in Obsidian\n`;
    report += `2. Run the **T04-Fix-Artifact-Links** template\n`;
    report += `3. Review the changes summary\n`;
    report += `4. The template will automatically fix:\n`;
    report += `   - Angle bracket links\n`;
    report += `   - Relative paths (adds leading /)\n`;
    report += `   - Obsidian URIs\n`;
    report += `   - Spaces in anchors\n`;
    report += `   - Claude.ai links (removes/replaces)\n`;
}

// Add quick command for copying file paths
if (problemFiles.length > 0) {
    report += `\n## File List for Quick Processing\n\n`;
    report += `\`\`\`\n`;
    problemFiles.forEach(f => report += `${f.path}\n`);
    report += `\`\`\``;
}

new Notice(`Found ${problemFiles.length} files with link issues`);
tR = report;
%>
<%*
// T05-Scan-Reference-Content.md
// Scans /tags/ directory and root files for link issues
// Modified version of T04-Find-Problem-Links for Phase 5 scope

console.log("Scanning reference content (tags + root files)...");

// Configuration
const searchPaths = ["tags/", ""]; // tags folder + root files
const rootFiles = ["README.md", "index.md", "CONTRIBUTING.md"];

// Link patterns to search for
const patterns = {
    angleBrackets: /\[([^\]]+)\]\(<([^>]+)>\)/g,
    relativePathsInternal: /\[([^\]]+)\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g,
    obsidianUris: /obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g,
    anchorSpaces: /\[([^\]]+)\]\(([^#)]+)(#[^)]*\s[^)]*)\)/g,
    claudeAiLinks: /https:\/\/claude\.ai\//g
};

let allProblemFiles = [];
let totalProblems = 0;
let scopeResults = {
    tags: { files: 0, issues: 0, problemFiles: [] },
    root: { files: 0, issues: 0, problemFiles: [] }
};

// Function to analyze files
async function analyzeFiles(files, scope) {
    let problemFiles = [];
    
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
                fileProblems.examples[patternName] = matches.slice(0, 2);
                fileProblems.total += matches.length;
            }
        }
        
        if (fileProblems.total > 0) {
            problemFiles.push(fileProblems);
            totalProblems += fileProblems.total;
            scopeResults[scope].issues += fileProblems.total;
            scopeResults[scope].problemFiles.push(fileProblems);
        }
        scopeResults[scope].files++;
    }
    
    return problemFiles;
}

// Get tags files
const tagsFiles = app.vault.getMarkdownFiles().filter(f => f.path.startsWith("tags/"));
console.log(`Found ${tagsFiles.length} files in tags/`);

// Get root files
const rootFilesFound = app.vault.getMarkdownFiles().filter(f => 
    rootFiles.includes(f.name) && !f.path.includes("/")
);
console.log(`Found ${rootFilesFound.length} root files: ${rootFilesFound.map(f => f.name).join(", ")}`);

// Analyze tags directory
await analyzeFiles(tagsFiles, "tags");

// Analyze root files  
await analyzeFiles(rootFilesFound, "root");

// Sort all problems by severity
allProblemFiles = [...scopeResults.tags.problemFiles, ...scopeResults.root.problemFiles];
allProblemFiles.sort((a, b) => b.total - a.total);

// Generate report
let report = `# Reference Content Link Scan\n\n`;
report += `**Generated**: ${new Date().toISOString()}\n`;
report += `**Scope**: Tags directory + Root files\n`;
report += `**Total files scanned**: ${scopeResults.tags.files + scopeResults.root.files}\n`;
report += `**Files with issues**: ${allProblemFiles.length}\n`;
report += `**Total problematic links**: ${totalProblems}\n\n`;

// Scope breakdown
report += `## Scope Breakdown\n\n`;
report += `| Scope | Files Scanned | Files with Issues | Total Issues |\n`;
report += `|-------|---------------|-------------------|---------------|\n`;
report += `| Tags Directory | ${scopeResults.tags.files} | ${scopeResults.tags.problemFiles.length} | ${scopeResults.tags.issues} |\n`;
report += `| Root Files | ${scopeResults.root.files} | ${scopeResults.root.problemFiles.length} | ${scopeResults.root.issues} |\n`;
report += `| **TOTAL** | **${scopeResults.tags.files + scopeResults.root.files}** | **${allProblemFiles.length}** | **${totalProblems}** |\n\n`;

if (allProblemFiles.length === 0) {
    report += `## ✅ No Issues Found\n\nAll reference content appears to have properly formatted links.`;
} else {
    report += `## Files Requiring Attention\n\n`;
    
    for (const file of allProblemFiles) {
        const scope = file.path.startsWith("tags/") ? "📚 TAGS" : "🏠 ROOT";
        report += `### ${scope}: ${file.path}\n`;
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
        }
        report += `\n`;
    }
    
    report += `## Recommended Processing Order\n\n`;
    report += `### 1. Root Files (Priority: HIGH)\n`;
    if (scopeResults.root.problemFiles.length > 0) {
        scopeResults.root.problemFiles.forEach(f => {
            report += `- **${f.path}** (${f.total} issues) - Critical entry point\n`;
        });
    } else {
        report += `- ✅ All root files are clean\n`;
    }
    
    report += `\n### 2. Tags Directory (Priority: MEDIUM)\n`;
    if (scopeResults.tags.problemFiles.length > 0) {
        // Show top 10 most problematic tags files
        const topTagsProblems = scopeResults.tags.problemFiles.slice(0, 10);
        topTagsProblems.forEach(f => {
            report += `- ${f.path} (${f.total} issues)\n`;
        });
        if (scopeResults.tags.problemFiles.length > 10) {
            report += `- ... and ${scopeResults.tags.problemFiles.length - 10} more files\n`;
        }
    } else {
        report += `- ✅ All tags files are clean\n`;
    }
    
    report += `\n## How to Fix\n\n`;
    report += `**For Individual Files:**\n`;
    report += `1. Open the file in Obsidian\n`;
    report += `2. Run **T04-Fix-Artifact-Links** template\n`;
    report += `3. Review changes\n\n`;
    
    report += `**For Batch Processing:**\n`;
    report += `1. Modify **T04-Fix-All-Remaining-Artifacts** template scope\n`;
    report += `2. Change searchPath to "tags/" for tags directory\n`;
    report += `3. Run batch processing\n`;
}

// File list for processing
if (allProblemFiles.length > 0) {
    report += `\n## File List for Processing\n\n`;
    report += `\`\`\`\n`;
    allProblemFiles.forEach(f => report += `${f.path}\n`);
    report += `\`\`\``;
}

new Notice(`Scanned reference content: ${allProblemFiles.length} files need attention`);
tR = report;
%>
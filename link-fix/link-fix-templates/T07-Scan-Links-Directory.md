<%*
// T07-Scan-Links-Directory.md
// Scanner for /links/ directory - external resource collection
// Final phase completion analysis

console.log("Starting scan of links directory...");

// Configuration
const linksPath = "links/";
const showExamples = false; // Set to true to see example problems

// Link patterns to search for
const patterns = {
    angleBrackets: /\[([^\]]+)\]\(<([^>]+)>\)/g,
    relativePathsInternal: /\[([^\]]+)\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g,
    obsidianUris: /obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g,
    anchorSpaces: /\[([^\]]+)\]\(([^#)]+)(#[^)]*\s[^)]*)\)/g,
    claudeAiLinks: /https:\/\/claude\.ai\//g
};

// Get all markdown files in links directory
const allLinksFiles = app.vault.getMarkdownFiles().filter(f => f.path.startsWith(linksPath));
console.log(`Found ${allLinksFiles.length} total files in links/ directory`);

// Function to analyze files
async function analyzeLinksDirectory(files) {
    let problemFiles = [];
    let dirStats = {
        totalFiles: files.length,
        filesWithIssues: 0,
        totalIssues: 0,
        issuesByType: {
            angleBrackets: 0,
            relativePathsInternal: 0,
            obsidianUris: 0,
            anchorSpaces: 0,
            claudeAiLinks: 0
        },
        topProblemFiles: []
    };
    
    for (const file of files) {
        try {
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
                    dirStats.issuesByType[patternName] += matches.length;
                }
            }
            
            if (fileProblems.total > 0) {
                problemFiles.push(fileProblems);
                dirStats.filesWithIssues++;
                dirStats.totalIssues += fileProblems.total;
            }
        } catch (error) {
            console.error(`Error reading file ${file.path}:`, error);
        }
    }
    
    // Sort problem files by issue count
    problemFiles.sort((a, b) => b.total - a.total);
    dirStats.topProblemFiles = problemFiles.slice(0, 10);
    
    return { dirStats, problemFiles };
}

// Analyze links directory
const { dirStats, problemFiles } = await analyzeLinksDirectory(allLinksFiles);

// Generate comprehensive report
let report = `# Links Directory Scan Report\n\n`;
report += `**Generated**: ${new Date().toISOString()}\n`;
report += `**Scope**: Complete /links/ directory analysis\n`;
report += `**Files Scanned**: ${dirStats.totalFiles}\n`;
report += `**Files with Issues**: ${dirStats.filesWithIssues}\n`;
report += `**Total Problematic Links**: ${dirStats.totalIssues}\n\n`;

// Executive Summary
report += `## Executive Summary\n\n`;
report += `**Phase 6.7 Scope Confirmed:**\n`;
report += `- **Total Processing Required**: ${dirStats.filesWithIssues} files, ${dirStats.totalIssues} links\n`;
report += `- **Clean Files**: ${dirStats.totalFiles - dirStats.filesWithIssues} (no changes needed)\n`;
report += `- **Content Type**: External resource collection (links to external tools, resources, handbooks)\n`;
report += `- **Priority**: LOW (final phase completion)\n\n`;

// Compare to original plan prediction
const originalPrediction = { files: 30, links: 417 };
report += `**Plan vs. Reality Check:**\n`;
report += `- **Predicted Files**: ${originalPrediction.files} → **Actual Files**: ${dirStats.totalFiles}\n`;
report += `- **Predicted Links**: ${originalPrediction.links} → **Actual Issues**: ${dirStats.totalIssues}\n`;
report += `- **Prediction Accuracy**: Files ${((dirStats.totalFiles / originalPrediction.files) * 100).toFixed(1)}%, Issues ${dirStats.totalIssues > 0 ? ((dirStats.totalIssues / originalPrediction.links) * 100).toFixed(1) : '0'}%\n\n`;

if (dirStats.totalIssues === 0) {
    report += `## ✅ No Issues Found\n\n`;
    report += `**Excellent News**: All files in the links directory already have properly formatted links!\n\n`;
    report += `**Project Status**: With links directory clean, **ALL PHASES COMPLETE**\n`;
    report += `- Phase 4: ✅ Artifacts (published content)\n`;
    report += `- Phase 5: ✅ Reference content (tags + root files)\n`;
    report += `- Phase 6: ✅ Notes directory (internal documents)\n`;
    report += `- Phase 6.7: ✅ Links directory (external resources)\n\n`;
    report += `**🎉 PROJECT COMPLETE**: Link normalization successful across entire vault!\n`;
} else {
    // Issue Type Breakdown
    report += `## Issue Type Analysis\n\n`;
    report += `| Issue Type | Count | % of Total |\n`;
    report += `|------------|-------|-----------|\n`;
    Object.entries(dirStats.issuesByType).forEach(([type, count]) => {
        if (count > 0) {
            const percentage = ((count / dirStats.totalIssues) * 100).toFixed(1);
            const typeLabel = {
                angleBrackets: "Angle bracket links",
                relativePathsInternal: "Relative paths (need /)",
                obsidianUris: "Obsidian URI links", 
                anchorSpaces: "Anchors with spaces",
                claudeAiLinks: "Claude.ai links"
            }[type];
            report += `| ${typeLabel} | ${count} | ${percentage}% |\n`;
        }
    });
    report += `| **TOTAL** | **${dirStats.totalIssues}** | **100%** |\n\n`;

    // Processing Strategy
    if (dirStats.totalIssues < 50) {
        report += `## Recommended Processing Strategy\n\n`;
        report += `### 🚀 Single Operation (Recommended)\n`;
        report += `**Rationale**: Small volume (${dirStats.totalIssues} issues) perfect for single batch\n`;
        report += `**Method**: Use T07-Fix-Links-Directory on entire /links/ directory\n`;
        report += `**Time Estimate**: 5-10 minutes\n`;
        report += `**Final Step**: This completes the entire link normalization project\n\n`;
    } else {
        report += `## Recommended Processing Strategy\n\n`;
        report += `### 📦 Careful Processing\n`;
        report += `**Rationale**: Higher volume requires attention to external links\n`;
        report += `**Method**: Use T07-Fix-Links-Directory with validation\n`;
        report += `**Time Estimate**: 10-15 minutes\n\n`;
    }

    // Files Requiring Attention
    report += `## Files Requiring Attention\n\n`;
    if (problemFiles.length > 0) {
        problemFiles.forEach((file, index) => {
            report += `### ${index + 1}. ${file.path}\n`;
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
                
                // Show examples if requested
                if (showExamples && file.examples[type]) {
                    report += `  Examples:\n`;
                    file.examples[type].forEach(ex => {
                        report += `  - \`${ex.substring(0, 60)}${ex.length > 60 ? '...' : ''}\`\n`;
                    });
                }
            }
            report += `\n`;
        });
    }

    // How to Fix
    report += `## How to Fix\n\n`;
    report += `1. **Copy Template**: T07-Fix-Links-Directory to /link-fix/\n`;
    report += `2. **Execute**: Run template to process all issues\n`;
    report += `3. **Validate**: Re-scan to confirm completion\n`;
    report += `4. **Project Complete**: Final phase of link normalization\n\n`;
}

// File listing
if (dirStats.totalFiles > 0) {
    report += `## Complete File List\n\n`;
    allLinksFiles.forEach(file => {
        const hasIssues = problemFiles.some(pf => pf.path === file.path);
        const issueCount = hasIssues ? problemFiles.find(pf => pf.path === file.path).total : 0;
        const status = hasIssues ? `⚠️ ${issueCount} issues` : '✅ Clean';
        report += `- **${file.path}** - ${status}\n`;
    });
    report += `\n`;
}

// Next Steps
report += `## Next Steps\n\n`;
if (dirStats.totalIssues === 0) {
    report += `1. ✅ Links directory is already clean\n`;
    report += `2. 🎉 **PROJECT COMPLETE** - All phases finished\n`;
    report += `3. Create final project summary\n`;
    report += `4. Update all tracking to show 100% completion\n`;
    report += `5. Create final git commit for completed project\n`;
} else {
    report += `1. **Process Links**: Use T07-Fix-Links-Directory template\n`;
    report += `2. **Final Validation**: Re-scan to confirm 0 issues\n`;
    report += `3. **Project Completion**: Mark all phases complete\n`;
    report += `4. **Final Documentation**: Create project completion summary\n`;
}

// Project completion context
report += `\n## Project Completion Context\n\n`;
report += `**Links Directory Status**: ${dirStats.totalIssues === 0 ? 'Complete' : 'Final processing needed'}\n`;
report += `**Major Phases Complete**:\n`;
report += `- ✅ Phase 4: 62 artifacts files (2,500+ links)\n`;
report += `- ✅ Phase 5: 89 reference files (487 links)\n`;
report += `- ✅ Phase 6: 1,680 notes files (2,907 links)\n`;
report += `- ${dirStats.totalIssues === 0 ? '✅' : '📋'} Phase 6.7: ${dirStats.totalFiles} links files (${dirStats.totalIssues} issues)\n\n`;

const totalProcessed = 62 + 89 + 1680 + dirStats.totalFiles;
const totalIssuesFixed = 2500 + 487 + 2907 + dirStats.totalIssues;
report += `**Cumulative Project**: ${totalProcessed} files, ~${totalIssuesFixed} links processed\n`;

// Show notification
new Notice(`Links directory scan: ${dirStats.filesWithIssues} files, ${dirStats.totalIssues} issues found`);
console.log(`Links analysis complete: ${dirStats.totalFiles} files scanned`);

tR = report;
%>
<%*
// T06-Scan-Notes-Directory.md
// Comprehensive scanner for /notes/ directory and all subdirectories
// Provides detailed analysis for Phase 6 planning

console.log("Starting comprehensive scan of notes directory...");

// Configuration
const notesPath = "notes/";
const showExamples = false; // Set to true to see example problems

// Link patterns to search for
const patterns = {
    angleBrackets: /\[([^\]]+)\]\(<([^>]+)>\)/g,
    relativePathsInternal: /\[([^\]]+)\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g,
    obsidianUris: /obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g,
    anchorSpaces: /\[([^\]]+)\]\(([^#)]+)(#[^)]*\s[^)]*)\)/g,
    claudeAiLinks: /https:\/\/claude\.ai\//g
};

// Get all markdown files in notes directory
const allNotesFiles = app.vault.getMarkdownFiles().filter(f => f.path.startsWith(notesPath));
console.log(`Found ${allNotesFiles.length} total files in notes/ directory`);

// Identify subdirectories
const subdirectories = {};
allNotesFiles.forEach(file => {
    // Extract first subdirectory from path (notes/subdirectory/...)
    const pathParts = file.path.split('/');
    if (pathParts.length > 2) {
        const subdir = pathParts[1]; // First level after notes/
        if (!subdirectories[subdir]) {
            subdirectories[subdir] = [];
        }
        subdirectories[subdir].push(file);
    } else if (pathParts.length === 2) {
        // Files directly in notes/ root
        if (!subdirectories['_root']) {
            subdirectories['_root'] = [];
        }
        subdirectories['_root'].push(file);
    }
});

console.log(`Found ${Object.keys(subdirectories).length} subdirectories:`, Object.keys(subdirectories));

// Function to analyze files in a subdirectory
async function analyzeSubdirectory(files, subdirName) {
    let problemFiles = [];
    let subdirStats = {
        name: subdirName,
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
                subdirectory: subdirName,
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
                    subdirStats.issuesByType[patternName] += matches.length;
                }
            }
            
            if (fileProblems.total > 0) {
                problemFiles.push(fileProblems);
                subdirStats.filesWithIssues++;
                subdirStats.totalIssues += fileProblems.total;
            }
        } catch (error) {
            console.error(`Error reading file ${file.path}:`, error);
        }
    }
    
    // Sort problem files by issue count and get top 5
    problemFiles.sort((a, b) => b.total - a.total);
    subdirStats.topProblemFiles = problemFiles.slice(0, 5);
    
    return { subdirStats, problemFiles };
}

// Analyze each subdirectory
let allSubdirStats = [];
let allProblemFiles = [];
let grandTotals = {
    totalFiles: 0,
    filesWithIssues: 0,
    totalIssues: 0,
    issuesByType: {
        angleBrackets: 0,
        relativePathsInternal: 0,
        obsidianUris: 0,
        anchorSpaces: 0,
        claudeAiLinks: 0
    }
};

for (const [subdirName, files] of Object.entries(subdirectories)) {
    console.log(`Analyzing ${subdirName}: ${files.length} files`);
    const { subdirStats, problemFiles } = await analyzeSubdirectory(files, subdirName);
    
    allSubdirStats.push(subdirStats);
    allProblemFiles.push(...problemFiles);
    
    // Update grand totals
    grandTotals.totalFiles += subdirStats.totalFiles;
    grandTotals.filesWithIssues += subdirStats.filesWithIssues;
    grandTotals.totalIssues += subdirStats.totalIssues;
    Object.keys(grandTotals.issuesByType).forEach(type => {
        grandTotals.issuesByType[type] += subdirStats.issuesByType[type];
    });
}

// Sort subdirectories by issue count (highest first)
allSubdirStats.sort((a, b) => b.totalIssues - a.totalIssues);

// Sort all problem files by issue count
allProblemFiles.sort((a, b) => b.total - a.total);

// Generate comprehensive report
let report = `# Notes Directory Comprehensive Scan\n\n`;
report += `**Generated**: ${new Date().toISOString()}\n`;
report += `**Scope**: Complete /notes/ directory analysis\n`;
report += `**Files Scanned**: ${grandTotals.totalFiles}\n`;
report += `**Files with Issues**: ${grandTotals.filesWithIssues}\n`;
report += `**Total Problematic Links**: ${grandTotals.totalIssues}\n\n`;

// Executive Summary
report += `## Executive Summary\n\n`;
report += `**Phase 6 Scope Confirmed:**\n`;
report += `- **Total Processing Required**: ${grandTotals.filesWithIssues} files, ${grandTotals.totalIssues} links\n`;
report += `- **Clean Files**: ${grandTotals.totalFiles - grandTotals.filesWithIssues} (no changes needed)\n`;
report += `- **Subdirectories**: ${Object.keys(subdirectories).length} distinct areas\n`;
report += `- **Largest Challenges**: ${allSubdirStats.slice(0, 3).map(s => `${s.name} (${s.totalIssues} issues)`).join(', ')}\n\n`;

// Issue Type Breakdown
report += `## Issue Type Analysis\n\n`;
report += `| Issue Type | Count | % of Total |\n`;
report += `|------------|-------|-----------|\n`;
Object.entries(grandTotals.issuesByType).forEach(([type, count]) => {
    const percentage = ((count / grandTotals.totalIssues) * 100).toFixed(1);
    const typeLabel = {
        angleBrackets: "Angle bracket links",
        relativePathsInternal: "Relative paths (need /)",
        obsidianUris: "Obsidian URI links", 
        anchorSpaces: "Anchors with spaces",
        claudeAiLinks: "Claude.ai links"
    }[type];
    report += `| ${typeLabel} | ${count} | ${percentage}% |\n`;
});
report += `| **TOTAL** | **${grandTotals.totalIssues}** | **100%** |\n\n`;

// Subdirectory Breakdown
report += `## Subdirectory Analysis\n\n`;
report += `| Subdirectory | Files | Issues | Files w/ Issues | Avg Issues/File | Priority |\n`;
report += `|--------------|-------|--------|-----------------|-----------------|----------|\n`;

allSubdirStats.forEach((stats, index) => {
    const avgIssues = stats.filesWithIssues > 0 ? (stats.totalIssues / stats.filesWithIssues).toFixed(1) : '0';
    const priority = index < 3 ? '🔥 HIGH' : index < 6 ? '📋 MEDIUM' : '✅ LOW';
    const displayName = stats.name === '_root' ? 'notes/ (root)' : `notes/${stats.name}/`;
    
    report += `| ${displayName} | ${stats.totalFiles} | ${stats.totalIssues} | ${stats.filesWithIssues} | ${avgIssues} | ${priority} |\n`;
});

report += `\n## Recommended Processing Strategy\n\n`;

// Strategy recommendations
if (grandTotals.totalIssues < 500) {
    report += `### 🚀 Single Batch Approach (Recommended)\n`;
    report += `**Rationale**: Total issues (${grandTotals.totalIssues}) manageable for single batch\n`;
    report += `**Method**: Use T06-Fix-Notes-Links on entire /notes/ directory\n`;
    report += `**Time Estimate**: 15-30 minutes\n\n`;
} else {
    report += `### 📦 Subdirectory Batch Approach (Recommended)\n`;
    report += `**Rationale**: Large volume (${grandTotals.totalIssues} issues) benefits from subdirectory processing\n`;
    report += `**Method**: Process subdirectories individually with T06-Fix-Notes-Links\n`;
    report += `**Time Estimate**: 1-2 hours\n\n`;
}

report += `### Processing Order (by Priority)\n\n`;
allSubdirStats.slice(0, 6).forEach((stats, index) => {
    const displayName = stats.name === '_root' ? 'notes/ (root files)' : `notes/${stats.name}/`;
    report += `${index + 1}. **${displayName}** - ${stats.totalIssues} issues (${stats.filesWithIssues} files)\n`;
});

if (allSubdirStats.length > 6) {
    report += `... and ${allSubdirStats.length - 6} smaller subdirectories\n`;
}

// Top Problematic Files (across all subdirectories)
if (allProblemFiles.length > 0) {
    report += `\n## Top 15 Most Problematic Files\n\n`;
    report += `| Rank | File | Subdirectory | Issues | Types |\n`;
    report += `|------|------|--------------|--------|-------|\n`;
    
    allProblemFiles.slice(0, 15).forEach((file, index) => {
        const types = Object.entries(file.problems).map(([type, count]) => {
            const shortType = {
                angleBrackets: "AB",
                relativePathsInternal: "RP", 
                obsidianUris: "OU",
                anchorSpaces: "AS",
                claudeAiLinks: "CL"
            }[type];
            return `${shortType}:${count}`;
        }).join(', ');
        
        const displaySubdir = file.subdirectory === '_root' ? 'root' : file.subdirectory;
        report += `| ${index + 1} | ${file.path} | ${displaySubdir} | ${file.total} | ${types} |\n`;
    });
}

// Detailed Subdirectory Breakdown
report += `\n## Detailed Subdirectory Reports\n\n`;
allSubdirStats.forEach(stats => {
    const displayName = stats.name === '_root' ? 'notes/ (root files)' : `notes/${stats.name}/`;
    report += `### ${displayName}\n`;
    report += `- **Files**: ${stats.totalFiles} total, ${stats.filesWithIssues} with issues\n`;
    report += `- **Issues**: ${stats.totalIssues} total\n`;
    
    // Issue type breakdown for this subdirectory
    const subdirIssueTypes = Object.entries(stats.issuesByType)
        .filter(([type, count]) => count > 0)
        .map(([type, count]) => {
            const typeLabel = {
                angleBrackets: "Angle brackets",
                relativePathsInternal: "Relative paths",
                obsidianUris: "Obsidian URIs",
                anchorSpaces: "Anchor spaces", 
                claudeAiLinks: "Claude.ai links"
            }[type];
            return `${typeLabel}: ${count}`;
        });
    
    if (subdirIssueTypes.length > 0) {
        report += `- **Issue Types**: ${subdirIssueTypes.join(', ')}\n`;
    }
    
    if (stats.topProblemFiles.length > 0) {
        report += `- **Top Problem Files**:\n`;
        stats.topProblemFiles.forEach(file => {
            report += `  - ${file.path} (${file.total} issues)\n`;
        });
    }
    report += `\n`;
});

// Next Steps
report += `## Next Steps\n\n`;
report += `1. **Review Analysis**: Confirm processing strategy based on volume\n`;
report += `2. **Choose Approach**: Single batch vs. subdirectory processing\n`;
report += `3. **Execute Processing**: Use T06-Fix-Notes-Links template\n`;
report += `4. **Validate Results**: Re-scan after processing\n`;
report += `5. **Update Tracking**: Mark Phase 6 progress in dashboard\n\n`;

// Processing Commands
report += `## Template Usage Commands\n\n`;
if (grandTotals.totalIssues < 500) {
    report += `**Single Batch Processing:**\n`;
    report += `1. Copy T06-Fix-Notes-Links to /link-fix/\n`;
    report += `2. Set targetPath = "notes/" (process entire directory)\n`;
    report += `3. Execute template\n\n`;
} else {
    report += `**Subdirectory Processing (Recommended):**\n`;
    allSubdirStats.slice(0, 3).forEach((stats, index) => {
        const path = stats.name === '_root' ? 'notes/' : `notes/${stats.name}/`;
        report += `${index + 1}. Set targetPath = "${path}" → Execute T06-Fix-Notes-Links\n`;
    });
    report += `... continue for remaining subdirectories\n\n`;
}

// File lists for batch processing
if (grandTotals.filesWithIssues > 0) {
    report += `## Summary Statistics\n\n`;
    report += `**Files Requiring Processing**: ${grandTotals.filesWithIssues} / ${grandTotals.totalFiles}\n`;
    report += `**Estimated Completion Time**: ${Math.ceil(grandTotals.totalIssues / 200)} - ${Math.ceil(grandTotals.totalIssues / 100)} minutes\n`;
    report += `**Success Rate Expected**: 100% (based on Phases 4-5 results)\n`;
}

// Show notification
new Notice(`Notes scan complete: ${grandTotals.filesWithIssues} files, ${grandTotals.totalIssues} issues found`);
console.log(`Analysis complete: ${Object.keys(subdirectories).length} subdirectories analyzed`);

tR = report;
%>
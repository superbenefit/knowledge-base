---
purpose: Analyze leading slash patterns and create pre-processing priority list
inputs:
  - 02-link-inventory.csv
outputs:
  - 04-leading-slash-analysis.md
rollback: Delete generated output file
---

# Leading Slash Analysis - Execution Log

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Executed By**: <% tp.user.name || "User" %>

## Execution Results

<%*
// T02-Leading-Slash-Analyzer
// Purpose: Detailed analysis of leading slash patterns
// Creates a priority list for pre-processing

const OUTPUT_DIR = 'link-fix';
const INPUT_CSV = '02-link-inventory.csv';
const OUTPUT_FILE = '04-leading-slash-analysis.md';

// Pattern definitions for analysis
const LEADING_SLASH_PATTERNS = {
    wikilinkWithLeadingSlash: /\[\[\/([^\]]+?)\]\]/g,
    markdownLinkWithLeadingSlash: /\[([^\]]*?)\]\(\/([^)]+?)\)/g
};

// Storage for analysis results
let analysisResults = {
    totalFiles: 0,
    filesWithIssues: [],
    patternBreakdown: {
        wikilink: 0,
        markdown: 0
    },
    byDirectory: {},
    examples: [],
    estimatedTime: 0
};

// Rollback function
const rollback = async () => {
    try {
        const outputPath = `${OUTPUT_DIR}/${OUTPUT_FILE}`;
        
        if (await app.vault.adapter.exists(outputPath)) {
            await app.vault.adapter.remove(outputPath);
            console.log(`Deleted ${OUTPUT_FILE}`);
            new Notice("Rollback completed - analysis file deleted");
        }
    } catch (error) {
        console.error("Rollback error:", error);
        new Notice("Rollback failed: " + error.message);
    }
};

// Parse CSV file
const parseCSV = async () => {
    const csvPath = `${OUTPUT_DIR}/${INPUT_CSV}`;
    
    if (!await app.vault.adapter.exists(csvPath)) {
        throw new Error(`Input file ${INPUT_CSV} not found. Please run T01-Link-Inventory-Analyzer first.`);
    }
    
    const csvContent = await app.vault.adapter.read(csvPath);
    const lines = csvContent.split('\n');
    const headers = lines[0].split(',');
    
    const data = [];
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim()) {
            const values = lines[i].match(/(".*?"|[^,]+)/g);
            if (values) {
                const row = {};
                headers.forEach((header, index) => {
                    row[header] = values[index] ? values[index].replace(/^"|"$/g, '') : '';
                });
                data.push(row);
            }
        }
    }
    
    return data;
};

// Analyze file content for patterns
const analyzeFilePatterns = async (filePath) => {
    try {
        const file = app.vault.getAbstractFileByPath(filePath);
        if (!file || !(file instanceof TFile)) return null;
        
        const content = await app.vault.read(file);
        const patterns = [];
        const examples = [];
        
        // Check wikilink patterns
        const wikiMatches = content.match(LEADING_SLASH_PATTERNS.wikilinkWithLeadingSlash) || [];
        if (wikiMatches.length > 0) {
            patterns.push({
                type: 'wikilink',
                count: wikiMatches.length,
                examples: wikiMatches.slice(0, 3)
            });
            analysisResults.patternBreakdown.wikilink += wikiMatches.length;
        }
        
        // Check markdown link patterns
        const mdMatches = content.match(LEADING_SLASH_PATTERNS.markdownLinkWithLeadingSlash) || [];
        if (mdMatches.length > 0) {
            patterns.push({
                type: 'markdown',
                count: mdMatches.length,
                examples: mdMatches.slice(0, 3)
            });
            analysisResults.patternBreakdown.markdown += mdMatches.length;
        }
        
        // Extract unique target paths
        const targetPaths = new Set();
        [...wikiMatches, ...mdMatches].forEach(match => {
            const pathMatch = match.match(/\/([^\]|\)]+)/);
            if (pathMatch) {
                targetPaths.add(pathMatch[1].split('|')[0].split('#')[0]);
            }
        });
        
        return {
            patterns,
            targetPaths: Array.from(targetPaths)
        };
    } catch (error) {
        console.error(`Error analyzing ${filePath}:`, error);
        return null;
    }
};

// Group files by directory
const groupByDirectory = (files) => {
    const groups = {};
    
    files.forEach(file => {
        const dir = file.path.includes('/') ? file.path.split('/')[0] : 'root';
        if (!groups[dir]) {
            groups[dir] = {
                files: [],
                totalLinks: 0
            };
        }
        groups[dir].files.push(file);
        groups[dir].totalLinks += file.linkCount;
    });
    
    return groups;
};

// Generate priority score
const calculatePriority = (file) => {
    // Priority factors:
    // 1. Published content (artifacts) gets highest priority
    // 2. Number of leading slash links
    // 3. File visibility (tags, root files)
    
    let score = file.linkCount;
    
    if (file.path.startsWith('artifacts/')) score *= 3;
    else if (file.path.startsWith('tags/')) score *= 2;
    else if (!file.path.includes('/')) score *= 2; // Root files
    
    return score;
};

// Generate the analysis report
const generateReport = () => {
    // Sort files by priority
    const prioritizedFiles = analysisResults.filesWithIssues
        .sort((a, b) => b.priority - a.priority);
    
    // Group by directory
    const directoryGroups = groupByDirectory(analysisResults.filesWithIssues);
    
    const report = `# Leading Slash Analysis Report

Generated: ${new Date().toISOString()}

## Executive Summary

- **Total Files with Leading Slashes**: ${analysisResults.filesWithIssues.length}
- **Total Leading Slash Links**: ${analysisResults.patternBreakdown.wikilink + analysisResults.patternBreakdown.markdown}
- **Wikilinks with Leading Slashes**: ${analysisResults.patternBreakdown.wikilink}
- **Markdown Links with Leading Slashes**: ${analysisResults.patternBreakdown.markdown}
- **Estimated Processing Time**: ${analysisResults.estimatedTime} minutes

## Pattern Analysis

### Link Type Distribution

| Pattern Type | Count | Percentage |
|--------------|-------|------------|
| Wikilinks `[/path](/path)` | ${analysisResults.patternBreakdown.wikilink} | ${((analysisResults.patternBreakdown.wikilink / (analysisResults.patternBreakdown.wikilink + analysisResults.patternBreakdown.markdown)) * 100).toFixed(1)}% |
| Markdown `[text](/path)` | ${analysisResults.patternBreakdown.markdown} | ${((analysisResults.patternBreakdown.markdown / (analysisResults.patternBreakdown.wikilink + analysisResults.patternBreakdown.markdown)) * 100).toFixed(1)}% |

### Common Target Patterns

${analysisResults.examples.slice(0, 10).map(ex => `- \`${ex.target}\` (${ex.count} occurrences)`).join('\n')}

## Directory Breakdown

| Directory | Files | Total Links |
|-----------|-------|-------------|
${Object.entries(directoryGroups)
    .sort((a, b) => b[1].totalLinks - a[1].totalLinks)
    .map(([dir, data]) => `| ${dir} | ${data.files.length} | ${data.totalLinks} |`)
    .join('\n')}

## Pre-Processing Priority List

### High Priority (Published Content)
${prioritizedFiles
    .filter(f => f.path.startsWith('artifacts/'))
    .map((f, i) => `${i + 1}. \`${f.path}\` (${f.linkCount} links, priority: ${f.priority})`)
    .join('\n')}

### Medium Priority (Reference Content)
${prioritizedFiles
    .filter(f => f.path.startsWith('tags/') || !f.path.includes('/'))
    .map((f, i) => `${i + 1}. \`${f.path}\` (${f.linkCount} links, priority: ${f.priority})`)
    .join('\n')}

### Standard Priority (Notes)
${prioritizedFiles
    .filter(f => f.path.startsWith('notes/') || f.path.startsWith('links/'))
    .map((f, i) => `${i + 1}. \`${f.path}\` (${f.linkCount} links, priority: ${f.priority})`)
    .join('\n')}

## Processing Recommendations

1. **Batch Processing**: Process files in priority order, high priority first
2. **Time Estimate**: Allow ~30 seconds per file for verification
3. **Backup Strategy**: Create full backup before processing
4. **Validation**: Re-scan after each batch to ensure complete removal

## Sample Patterns Found

### Wikilink Examples
${analysisResults.examples
    .filter(ex => ex.type === 'wikilink')
    .slice(0, 5)
    .map(ex => `- \`${ex.example}\` in ${ex.file}`)
    .join('\n')}

### Markdown Link Examples
${analysisResults.examples
    .filter(ex => ex.type === 'markdown')
    .slice(0, 5)
    .map(ex => `- \`${ex.example}\` in ${ex.file}`)
    .join('\n')}

## Next Steps

1. Review this analysis and confirm the priority order
2. Create backup using T07-Create-Full-Backup
3. Execute T03-Remove-Leading-Slashes on high-priority files first
4. Validate results after each batch

---

*Generated by T02-Leading-Slash-Analyzer*`;
    
    return report;
};

// Main execution
try {
    console.log("Starting leading slash analysis...");
    tR += "Starting analysis...\n\n";
    
    // Parse the CSV data
    const csvData = await parseCSV();
    const filesWithSlashes = csvData.filter(row => row['Has Leading Slash Issues'] === 'YES');
    
    console.log(`Found ${filesWithSlashes.length} files with leading slash issues`);
    tR += `Found ${filesWithSlashes.length} files with leading slash issues\n\n`;
    
    // Create progress indicator
    const progressNotice = new Notice("Analyzing patterns...", 0);
    
    // Analyze each file
    for (let i = 0; i < filesWithSlashes.length; i++) {
        const row = filesWithSlashes[i];
        const filePath = row['File Path'];
        const linkCount = parseInt(row['Wikilinks with Leading Slash']) + parseInt(row['Markdown Links with Leading Slash']);
        
        progressNotice.setMessage(`Analyzing patterns... ${i + 1}/${filesWithSlashes.length}`);
        
        const analysis = await analyzeFilePatterns(filePath);
        
        if (analysis) {
            const fileData = {
                path: filePath,
                linkCount: linkCount,
                priority: calculatePriority({ path: filePath, linkCount }),
                patterns: analysis.patterns,
                targetPaths: analysis.targetPaths
            };
            
            analysisResults.filesWithIssues.push(fileData);
            
            // Collect examples
            analysis.patterns.forEach(pattern => {
                pattern.examples.forEach(ex => {
                    analysisResults.examples.push({
                        type: pattern.type,
                        example: ex,
                        file: filePath,
                        target: ex.match(/\/([^\]|\)]+)/)?.[1] || ''
                    });
                });
            });
        }
    }
    
    progressNotice.hide();
    
    // Calculate estimated time (30 seconds per file)
    analysisResults.estimatedTime = Math.ceil((analysisResults.filesWithIssues.length * 30) / 60);
    
    // Count unique targets
    const targetCounts = {};
    analysisResults.examples.forEach(ex => {
        const target = ex.target.split('|')[0].split('#')[0];
        targetCounts[target] = (targetCounts[target] || 0) + 1;
    });
    
    // Update examples with counts
    analysisResults.examples = Object.entries(targetCounts)
        .map(([target, count]) => ({ target, count }))
        .sort((a, b) => b.count - a.count);
    
    // Generate and save report
    const report = generateReport();
    await app.vault.adapter.write(`${OUTPUT_DIR}/${OUTPUT_FILE}`, report);
    
    tR += `✅ Created ${OUTPUT_FILE}\n\n`;
    tR += `## Summary\n`;
    tR += `- Files analyzed: ${analysisResults.filesWithIssues.length}\n`;
    tR += `- Total leading slash links: ${analysisResults.patternBreakdown.wikilink + analysisResults.patternBreakdown.markdown}\n`;
    tR += `- Estimated processing time: ${analysisResults.estimatedTime} minutes\n`;
    
    new Notice("Leading slash analysis completed!");
    
} catch (error) {
    console.error("Analysis error:", error);
    tR += `\n❌ ERROR: ${error.message}\n`;
    
    if (await tp.system.prompt("Error occurred. Run rollback?", "", ["Yes", "No"]) === "Yes") {
        await rollback();
        tR += "\n🔄 Rollback executed\n";
    }
}
%>

## Rollback Function

To rollback this operation and delete the generated file:

```javascript
(async () => {
    const file = 'link-fix/04-leading-slash-analysis.md';
    if (await app.vault.adapter.exists(file)) {
        await app.vault.adapter.remove(file);
        console.log(`Deleted ${file}`);
        new Notice("Rollback completed");
    }
})();
```

---

*Template: T02-Leading-Slash-Analyzer*  
*Location: /tools/templates/link-fix-templates/*

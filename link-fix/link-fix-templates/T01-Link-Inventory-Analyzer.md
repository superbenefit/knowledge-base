---
purpose: Analyze vault for all link types
outputs: 
  - 02-link-inventory.csv
  - 03-link-inventory-summary.md
rollback: Delete generated output files
---

# Link Inventory Analysis - Execution Log

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Executed By**: <% tp.user.name || "User" %>

## Execution Results

<%*
// T01-Link-Inventory-Analyzer
// Purpose: Comprehensive analysis of all links in the vault
// This template scans the entire vault and creates detailed reports

const VAULT_ROOT = app.vault.adapter.basePath;
const EXCLUDE_DIRS = ['drafts', 'tools', 'enveloppe', '.git', '.obsidian', '.smart-env', '.trash', 'link-fix'];
const OUTPUT_DIR = 'link-fix';
const CSV_FILE = '02-link-inventory.csv';
const SUMMARY_FILE = '03-link-inventory-summary.md';

// Link patterns
const PATTERNS = {
    wikilink: /\[\[([^\]]+?)\]\]/g,
    wikilinkWithAlias: /\[\[([^|\]]+?)\|([^\]]+?)\]\]/g,
    wikilinkWithPath: /\[\[([^/\]]*?\/[^\]]+?)\]\]/g,
    wikilinkWithLeadingSlash: /\[\[\/([^\]]+?)\]\]/g,
    markdownLink: /\[([^\]]*?)\]\(([^)]+?)\)/g,
    markdownLinkWithLeadingSlash: /\[([^\]]*?)\]\(\/([^)]+?)\)/g,
    externalLink: /\[([^\]]*?)\]\((https?:\/\/[^)]+?)\)/g
};

// Results storage
let results = {
    files: [],
    totalLinks: 0,
    linkTypes: {
        wikilink: 0,
        wikilinkWithAlias: 0,
        wikilinkWithPath: 0,
        wikilinkWithLeadingSlash: 0,
        markdownLink: 0,
        markdownLinkWithLeadingSlash: 0,
        externalLink: 0
    },
    filesWithLeadingSlashes: [],
    filesByLinkCount: []
};

// Rollback function
const rollback = async () => {
    try {
        const csvPath = `${OUTPUT_DIR}/${CSV_FILE}`;
        const summaryPath = `${OUTPUT_DIR}/${SUMMARY_FILE}`;
        
        if (await app.vault.adapter.exists(csvPath)) {
            await app.vault.adapter.remove(csvPath);
            console.log(`Deleted ${CSV_FILE}`);
        }
        
        if (await app.vault.adapter.exists(summaryPath)) {
            await app.vault.adapter.remove(summaryPath);
            console.log(`Deleted ${SUMMARY_FILE}`);
        }
        
        new Notice("Rollback completed - output files deleted");
    } catch (error) {
        console.error("Rollback error:", error);
        new Notice("Rollback failed: " + error.message);
    }
};

// Helper function to check if path should be excluded
const shouldExclude = (path) => {
    return EXCLUDE_DIRS.some(dir => path.includes(`/${dir}/`) || path.startsWith(`${dir}/`));
};

// Analyze a single file
const analyzeFile = async (file) => {
    if (shouldExclude(file.path)) return;
    
    try {
        const content = await app.vault.read(file);
        
        const fileData = {
            path: file.path,
            links: {
                wikilink: 0,
                wikilinkWithAlias: 0,
                wikilinkWithPath: 0,
                wikilinkWithLeadingSlash: 0,
                markdownLink: 0,
                markdownLinkWithLeadingSlash: 0,
                externalLink: 0,
                total: 0
            },
            hasLeadingSlashes: false,
            leadingSlashDetails: []
        };
        
        // Count each type of link
        for (const [type, pattern] of Object.entries(PATTERNS)) {
            const matches = content.match(pattern) || [];
            fileData.links[type] = matches.length;
            fileData.links.total += matches.length;
            results.linkTypes[type] += matches.length;
            
            // Track leading slash issues
            if (type === 'wikilinkWithLeadingSlash' || type === 'markdownLinkWithLeadingSlash') {
                if (matches.length > 0) {
                    fileData.hasLeadingSlashes = true;
                    fileData.leadingSlashDetails.push(...matches.slice(0, 3));
                }
            }
        }
        
        // Adjust for double-counting of aliases
        if (fileData.links.wikilinkWithAlias > 0) {
            fileData.links.wikilink = Math.max(0, fileData.links.wikilink - fileData.links.wikilinkWithAlias);
            results.linkTypes.wikilink = Math.max(0, results.linkTypes.wikilink - fileData.links.wikilinkWithAlias);
            fileData.links.total -= fileData.links.wikilinkWithAlias;
        }
        
        // Track files with leading slashes
        if (fileData.hasLeadingSlashes) {
            results.filesWithLeadingSlashes.push({
                path: file.path,
                count: fileData.links.wikilinkWithLeadingSlash + fileData.links.markdownLinkWithLeadingSlash,
                examples: fileData.leadingSlashDetails
            });
        }
        
        results.totalLinks += fileData.links.total;
        results.files.push(fileData);
        
    } catch (error) {
        console.error(`Error analyzing ${file.path}:`, error.message);
    }
};

// Generate CSV content
const generateCSV = () => {
    const headers = [
        'File Path',
        'Total Links',
        'Wikilinks',
        'Wikilinks with Alias',
        'Wikilinks with Path',
        'Wikilinks with Leading Slash',
        'Markdown Links',
        'Markdown Links with Leading Slash',
        'External Links',
        'Has Leading Slash Issues'
    ];
    
    let csv = headers.join(',') + '\n';
    
    for (const file of results.files) {
        const row = [
            `"${file.path}"`,
            file.links.total,
            file.links.wikilink,
            file.links.wikilinkWithAlias,
            file.links.wikilinkWithPath,
            file.links.wikilinkWithLeadingSlash,
            file.links.markdownLink,
            file.links.markdownLinkWithLeadingSlash,
            file.links.externalLink,
            file.hasLeadingSlashes ? 'YES' : 'NO'
        ];
        csv += row.join(',') + '\n';
    }
    
    return csv;
};

// Generate directory breakdown
const generateDirectoryBreakdown = () => {
    const dirStats = {};
    
    for (const file of results.files) {
        const dir = file.path.split('/')[0] || 'root';
        if (!dirStats[dir]) {
            dirStats[dir] = { files: 0, links: 0 };
        }
        dirStats[dir].files++;
        dirStats[dir].links += file.links.total;
    }
    
    return Object.entries(dirStats)
        .sort((a, b) => b[1].links - a[1].links)
        .map(([dir, stats]) => `${dir}: ${stats.files} files, ${stats.links} links`)
        .join('\n');
};

// Generate summary content
const generateSummary = () => {
    // Sort files by link count
    results.filesByLinkCount = results.files
        .filter(f => f.links.total > 0)
        .sort((a, b) => b.links.total - a.links.total)
        .slice(0, 20);
    
    const summary = `# SUPERBENEFIT KNOWLEDGE BASE - LINK INVENTORY SUMMARY

Generated: ${new Date().toISOString()}

## OVERALL STATISTICS

- **Total Files Scanned**: ${results.files.length}
- **Total Links Found**: ${results.totalLinks}
- **Files with Links**: ${results.files.filter(f => f.links.total > 0).length}
- **Files with Leading Slash Issues**: ${results.filesWithLeadingSlashes.length}

## LINK TYPE BREAKDOWN

| Link Type | Count |
|-----------|-------|
| Wikilinks (standard) | ${results.linkTypes.wikilink} |
| Wikilinks with Alias | ${results.linkTypes.wikilinkWithAlias} |
| Wikilinks with Path | ${results.linkTypes.wikilinkWithPath} |
| Wikilinks with Leading Slash | ${results.linkTypes.wikilinkWithLeadingSlash} |
| Markdown Links | ${results.linkTypes.markdownLink} |
| Markdown Links with Leading Slash | ${results.linkTypes.markdownLinkWithLeadingSlash} |
| External Links | ${results.linkTypes.externalLink} |

## LEADING SLASH ISSUES

- **Total Links with Leading Slashes**: ${results.linkTypes.wikilinkWithLeadingSlash + results.linkTypes.markdownLinkWithLeadingSlash}
- **Files Affected**: ${results.filesWithLeadingSlashes.length}

### Top 5 Files with Leading Slash Issues:
${results.filesWithLeadingSlashes.slice(0, 5).map(f => 
    `1. \`${f.path}\` (${f.count} links)\n   - Examples: ${f.examples.slice(0, 2).map(e => `\`${e}\``).join(', ')}`
).join('\n')}

## TOP 20 FILES BY LINK COUNT

| # | File | Links |
|---|------|-------|
${results.filesByLinkCount.map((f, i) => 
    `| ${i + 1} | ${f.path} | ${f.links.total} |`
).join('\n')}

## DIRECTORY BREAKDOWN

\`\`\`
${generateDirectoryBreakdown()}
\`\`\`

## RECOMMENDATIONS

1. Pre-process **${results.filesWithLeadingSlashes.length} files** to remove leading slashes
2. Convert **${results.linkTypes.wikilink + results.linkTypes.wikilinkWithAlias + results.linkTypes.wikilinkWithPath} wikilinks** to markdown format
3. Process files in order of link density for efficiency
4. External links (${results.linkTypes.externalLink}) will be preserved as-is

---

*Generated by T01-Link-Inventory-Analyzer*`;
    
    return summary;
};

// Main execution
try {
    console.log("Starting link inventory analysis...");
    tR += "Starting analysis...\n\n";
    
    // Get all markdown files
    const files = app.vault.getMarkdownFiles();
    const eligibleFiles = files.filter(f => !shouldExclude(f.path));
    
    console.log(`Found ${eligibleFiles.length} files to analyze`);
    tR += `Found ${eligibleFiles.length} files to analyze\n\n`;
    
    // Create progress indicator
    let processed = 0;
    const progressNotice = new Notice("Analyzing files...", 0);
    
    // Analyze each file
    for (const file of eligibleFiles) {
        await analyzeFile(file);
        processed++;
        
        // Update progress every 10 files
        if (processed % 10 === 0) {
            progressNotice.setMessage(`Analyzing files... ${processed}/${eligibleFiles.length}`);
        }
    }
    
    progressNotice.hide();
    
    // Generate outputs
    const csvContent = generateCSV();
    const summaryContent = generateSummary();
    
    // Save CSV file
    await app.vault.adapter.write(`${OUTPUT_DIR}/${CSV_FILE}`, csvContent);
    tR += `✅ Created ${CSV_FILE}\n`;
    
    // Save summary file
    await app.vault.adapter.write(`${OUTPUT_DIR}/${SUMMARY_FILE}`, summaryContent);
    tR += `✅ Created ${SUMMARY_FILE}\n\n`;
    
    // Add key statistics to the execution log
    tR += `## Summary Statistics\n\n`;
    tR += `- Total files analyzed: ${results.files.length}\n`;
    tR += `- Total links found: ${results.totalLinks}\n`;
    tR += `- Files with leading slash issues: ${results.filesWithLeadingSlashes.length}\n`;
    tR += `- Wikilinks to convert: ${results.linkTypes.wikilink + results.linkTypes.wikilinkWithAlias + results.linkTypes.wikilinkWithPath}\n`;
    
    new Notice("Link inventory analysis completed!");
    
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

To rollback this operation and delete the generated files, run the following in the console:

```javascript
// Paste this in the console or create a button
(async () => {
    const files = ['link-fix/02-link-inventory.csv', 'link-fix/03-link-inventory-summary.md'];
    for (const file of files) {
        if (await app.vault.adapter.exists(file)) {
            await app.vault.adapter.remove(file);
            console.log(`Deleted ${file}`);
        }
    }
    new Notice("Rollback completed");
})();
```

---

*Template: T01-Link-Inventory-Analyzer*  
*Location: /tools/templates/link-fix-templates/*

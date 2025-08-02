---
purpose: Comprehensive link analysis - Ultra simplified
outputs:
  - 42-comprehensive-link-analysis.md
  - 44-link-type-inventory.csv
---

# Link Analysis - Ultra Simplified

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>

<%*
// Ultra-simplified version to avoid parsing errors
const OUTPUT_DIR = 'link-fix';

// Initialize counters
let totalFiles = 0;
let filesWithLinks = 0;
let fileData = [];

// Link type counts
let linkCounts = {
    wikilinks: 0,
    wikilinksWithSlash: 0,
    embeds: 0,
    markdownLinks: 0,
    markdownLinksWithSlash: 0,
    externalLinks: 0,
    fragmentLinks: 0,
    relativeLinks: 0
};

// Process each file
const files = app.vault.getMarkdownFiles();
const notice = new Notice('Analyzing...', 0);

for (let i = 0; i < files.length; i++) {
    const file = files[i];
    
    // Skip certain directories
    if (file.path.includes('/tools/') || 
        file.path.includes('/drafts/') || 
        file.path.includes('/.obsidian/') ||
        file.path.includes('/link-fix/')) {
        continue;
    }
    
    notice.setMessage(`Processing: ${i}/${files.length}`);
    
    try {
        const content = await app.vault.read(file);
        let fileLinkCount = 0;
        
        // Count basic patterns using simple string operations
        
        // Wikilinks
        const wikiMatches = content.split('[[').length - 1;
        if (wikiMatches > 0) {
            linkCounts.wikilinks += wikiMatches;
            fileLinkCount += wikiMatches;
            
            // Check for leading slashes
            const wikiSlashMatches = content.split('[[/').length - 1;
            linkCounts.wikilinksWithSlash += wikiSlashMatches;
        }
        
        // Embeds
        const embedMatches = content.split('![[').length - 1;
        if (embedMatches > 0) {
            linkCounts.embeds += embedMatches;
            fileLinkCount += embedMatches;
        }
        
        // Markdown links - count ]( patterns
        const mdLinkMatches = content.split('](').length - 1;
        if (mdLinkMatches > 0) {
            // Rough count - will include all markdown links
            linkCounts.markdownLinks += mdLinkMatches;
            fileLinkCount += mdLinkMatches;
            
            // Check for various patterns
            if (content.includes('](http')) {
                linkCounts.externalLinks += content.split('](http').length - 1;
            }
            if (content.includes('](/')) {
                linkCounts.markdownLinksWithSlash += content.split('](/').length - 1;
            }
            if (content.includes('](#')) {
                linkCounts.fragmentLinks += content.split('](#').length - 1;
            }
            if (content.includes('](../') || content.includes('](./')) {
                linkCounts.relativeLinks += 1; // Just flag that file has relative links
            }
        }
        
        if (fileLinkCount > 0) {
            filesWithLinks++;
            fileData.push({
                path: file.path,
                count: fileLinkCount,
                hasRelative: content.includes('](../') || content.includes('](./'),
                hasFragment: content.includes('#') && (content.includes('[[') || content.includes(']('))
            });
        }
        
        totalFiles++;
        
    } catch (error) {
        console.error(`Error with ${file.path}: ${error.message}`);
    }
}

notice.hide();

// Sort files by link count
fileData.sort((a, b) => b.count - a.count);

// Generate report
let report = `# Comprehensive Link Type Analysis

**Generated**: ${new Date().toISOString()}

## Summary

- **Total Files Scanned**: ${totalFiles}
- **Files with Links**: ${filesWithLinks}

## Link Type Overview

| Type | Count (Approximate) |
|------|---------------------|
| Wikilinks (total) | ${linkCounts.wikilinks} |
| Wikilinks with leading slash | ${linkCounts.wikilinksWithSlash} |
| Embedded content | ${linkCounts.embeds} |
| Markdown links (total) | ${linkCounts.markdownLinks} |
| Markdown with leading slash | ${linkCounts.markdownLinksWithSlash} |
| External links | ${linkCounts.externalLinks} |
| Fragment links (#) | ${linkCounts.fragmentLinks} |
| Files with relative paths | ${linkCounts.relativeLinks} |

## Special Patterns Detected

### Files with Relative Links
`;

let relativeLinkFiles = fileData.filter(f => f.hasRelative).slice(0, 10);
if (relativeLinkFiles.length > 0) {
    report += '\n';
    relativeLinkFiles.forEach(f => {
        report += `- ${f.path}\n`;
    });
} else {
    report += '\nNo relative links detected.\n';
}

report += '\n### Files with Fragment Links\n';
let fragmentFiles = fileData.filter(f => f.hasFragment).slice(0, 10);
if (fragmentFiles.length > 0) {
    fragmentFiles.forEach(f => {
        report += `- ${f.path}\n`;
    });
} else {
    report += 'No fragment links detected.\n';
}

report += '\n## Top 20 Files by Link Count\n\n';
report += '| File | Approximate Links |\n';
report += '|------|------------------|\n';

fileData.slice(0, 20).forEach(f => {
    report += `| ${f.path} | ${f.count} |\n`;
});

// Generate CSV
let csv = '"File Path","Link Count","Has Relative Links","Has Fragment Links"\n';
fileData.forEach(f => {
    csv += `"${f.path}",${f.count},${f.hasRelative ? 'YES' : 'NO'},${f.hasFragment ? 'YES' : 'NO'}\n`;
});

// Save files
try {
    await app.vault.adapter.write(`${OUTPUT_DIR}/42-comprehensive-link-analysis.md`, report);
    await app.vault.adapter.write(`${OUTPUT_DIR}/44-link-type-inventory.csv`, csv);
    
    tR += '## Analysis Complete\n\n';
    tR += `Files analyzed: ${totalFiles}\n`;
    tR += `Files with links: ${filesWithLinks}\n\n`;
    tR += 'Outputs created:\n';
    tR += '- 42-comprehensive-link-analysis.md\n';
    tR += '- 44-link-type-inventory.csv\n';
    
} catch (error) {
    tR += `Error saving files: ${error.message}\n`;
}

new Notice('Analysis complete!');
%>

---

*Analysis complete*
---
purpose: Analyze leading slash patterns from inventory CSV
inputs:
  - 02-link-inventory.csv
outputs:
  - 04-leading-slash-analysis.md
---

# Leading Slash Analysis - Execution Log

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>

## Analysis Results

<%*
// T02-Leading-Slash-Analyzer - Simplified Version
// Read CSV and analyze leading slash patterns

const OUTPUT_DIR = 'link-fix';
const INPUT_CSV = '02-link-inventory.csv';
const OUTPUT_FILE = '04-leading-slash-analysis.md';

try {
    // Read the CSV file
    const csvPath = `${OUTPUT_DIR}/${INPUT_CSV}`;
    const csvContent = await app.vault.adapter.read(csvPath);
    const lines = csvContent.split('\n');
    
    // Parse CSV to find files with leading slashes
    const filesWithSlashes = [];
    let totalWikiSlashes = 0;
    let totalMdSlashes = 0;
    
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() && lines[i].includes('YES')) {
            // Parse the CSV line
            const parts = lines[i].match(/(".*?"|[^,]+)/g);
            if (parts && parts.length >= 10) {
                const filePath = parts[0].replace(/"/g, '');
                const wikiSlashes = parseInt(parts[5]) || 0;
                const mdSlashes = parseInt(parts[7]) || 0;
                const total = wikiSlashes + mdSlashes;
                
                if (total > 0) {
                    filesWithSlashes.push({
                        path: filePath,
                        wikiSlashes: wikiSlashes,
                        mdSlashes: mdSlashes,
                        total: total
                    });
                    
                    totalWikiSlashes += wikiSlashes;
                    totalMdSlashes += mdSlashes;
                }
            }
        }
    }
    
    // Sort by total slashes (descending)
    filesWithSlashes.sort((a, b) => b.total - a.total);
    
    // Group by directory
    const byDirectory = {};
    filesWithSlashes.forEach(file => {
        const dir = file.path.includes('/') ? file.path.split('/')[0] : 'root';
        if (!byDirectory[dir]) {
            byDirectory[dir] = { count: 0, files: 0 };
        }
        byDirectory[dir].count += file.total;
        byDirectory[dir].files++;
    });
    
    // Generate the report
    let report = `# Leading Slash Analysis Report

Generated: ${new Date().toISOString()}

## Summary

- **Files with Leading Slashes**: ${filesWithSlashes.length}
- **Total Leading Slash Links**: ${totalWikiSlashes + totalMdSlashes}
  - Wikilinks: ${totalWikiSlashes}
  - Markdown links: ${totalMdSlashes}

## Files by Directory

| Directory | Files | Total Links |
|-----------|-------|-------------|
`;

    Object.entries(byDirectory)
        .sort((a, b) => b[1].count - a[1].count)
        .forEach(([dir, data]) => {
            report += `| ${dir} | ${data.files} | ${data.count} |\n`;
        });

    report += `\n## All Files with Leading Slashes

| File | Wiki | MD | Total |
|------|------|-----|-------|
`;

    filesWithSlashes.forEach(file => {
        report += `| ${file.path} | ${file.wikiSlashes} | ${file.mdSlashes} | ${file.total} |\n`;
    });

    report += `\n## Processing Priority

### High Priority (artifacts/)
`;

    filesWithSlashes
        .filter(f => f.path.startsWith('artifacts/'))
        .forEach((f, i) => {
            report += `${i + 1}. \`${f.path}\` - ${f.total} links\n`;
        });

    report += `\n### Medium Priority (tags/ and root)
`;

    filesWithSlashes
        .filter(f => f.path.startsWith('tags/') || !f.path.includes('/'))
        .forEach((f, i) => {
            report += `${i + 1}. \`${f.path}\` - ${f.total} links\n`;
        });

    report += `\n### Standard Priority (notes/ and links/)
`;

    filesWithSlashes
        .filter(f => f.path.startsWith('notes/') || f.path.startsWith('links/'))
        .forEach((f, i) => {
            report += `${i + 1}. \`${f.path}\` - ${f.total} links\n`;
        });

    // Save the report
    await app.vault.adapter.write(`${OUTPUT_DIR}/${OUTPUT_FILE}`, report);
    
    // Update execution log
    tR += `✅ Analysis completed successfully!\n\n`;
    tR += `**Files with slashes**: ${filesWithSlashes.length}\n`;
    tR += `**Total links to fix**: ${totalWikiSlashes + totalMdSlashes}\n\n`;
    tR += `Report saved to: ${OUTPUT_FILE}`;
    
    new Notice("Leading slash analysis completed!");

} catch (error) {
    console.error("Error:", error);
    tR += `❌ Error: ${error.message}`;
    new Notice("Analysis failed: " + error.message);
}
%>

---

*Template: T02-Leading-Slash-Analyzer*

---
purpose: Comprehensive analysis of ALL link types in the vault (simplified)
outputs:
  - 42-comprehensive-link-analysis.md
  - 44-link-type-inventory.csv
rollback: Delete generated analysis files
---

# Comprehensive Link Type Analysis - Simplified

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T05-Comprehensive-Link-Analyzer (v2)

## Analysis Results

<%*
// T05-Comprehensive-Link-Analyzer v2 - Simplified for reliability
// Purpose: Detect ALL link types in vault
// Outputs: 42-comprehensive-link-analysis.md, 44-link-type-inventory.csv

const OUTPUT_DIR = 'link-fix';
const EXCLUDE_DIRS = ['drafts', 'tools', 'enveloppe', '.obsidian', '.trash', 'link-fix'];

// Initialize results
const results = {
    totalFiles: 0,
    filesWithLinks: 0,
    fileDetails: [],
    linkTypeCounts: {
        wikilink_basic: 0,
        wikilink_alias: 0,
        wikilink_heading: 0,
        wikilink_block: 0,
        wikilink_leading_slash: 0,
        embed_basic: 0,
        embed_heading: 0,
        embed_block: 0,
        markdown_internal: 0,
        markdown_internal_md: 0,
        markdown_heading: 0,
        markdown_heading_only: 0,
        markdown_leading_slash: 0,
        markdown_relative_parent: 0,
        markdown_relative_current: 0,
        external_links: 0
    },
    examples: {},
    edgeCases: []
};

// Helper functions
const shouldExclude = (path) => {
    return EXCLUDE_DIRS.some(dir => 
        path.includes('/' + dir + '/') || 
        path.startsWith(dir + '/')
    );
};

const addExample = (type, text, file) => {
    if (!results.examples[type]) {
        results.examples[type] = [];
    }
    if (results.examples[type].length < 3) {
        results.examples[type].push({text: text, file: file});
    }
};

// Count link patterns in content
const analyzeContent = (content, filePath) => {
    const counts = {};
    
    // Basic wikilinks [page](page)
    const wikiBasic = content.match(/\[\[([^\[\]|#\^\/]+?)\]\]/g) || [];
    counts.wikilink_basic = wikiBasic.length;
    if (wikiBasic.length > 0) addExample('wikilink_basic', wikiBasic[0], filePath);
    
    // Wikilinks with alias [alias](page)
    const wikiAlias = content.match(/\[\[([^\[\]#\^]+?)\|([^\[\]]+?)\]\]/g) || [];
    counts.wikilink_alias = wikiAlias.length;
    if (wikiAlias.length > 0) addExample('wikilink_alias', wikiAlias[0], filePath);
    
    // Wikilinks with heading [](page#heading)
    const wikiHeading = content.match(/\[\[([^\[\]|]+?)#([^\[\]|]+?)\]\]/g) || [];
    counts.wikilink_heading = wikiHeading.length;
    if (wikiHeading.length > 0) addExample('wikilink_heading', wikiHeading[0], filePath);
    
    // Wikilinks with block [page^block](page^block)
    const wikiBlock = content.match(/\[\[([^\[\]|#]+?)\^([^\[\]|]+?)\]\]/g) || [];
    counts.wikilink_block = wikiBlock.length;
    if (wikiBlock.length > 0) addExample('wikilink_block', wikiBlock[0], filePath);
    
    // Wikilinks with leading slash [/path](/path)
    const wikiSlash = content.match(/\[\[\/([^\[\]]+?)\]\]/g) || [];
    counts.wikilink_leading_slash = wikiSlash.length;
    if (wikiSlash.length > 0) addExample('wikilink_leading_slash', wikiSlash[0], filePath);
    
    // Embedded content ![file](file)
    const embedBasic = content.match(/!\[\[([^\[\]#\^]+?)\]\]/g) || [];
    counts.embed_basic = embedBasic.length;
    if (embedBasic.length > 0) addExample('embed_basic', embedBasic[0], filePath);
    
    // Embedded with heading ![](file#heading)
    const embedHeading = content.match(/!\[\[([^\[\]]+?)#([^\[\]]+?)\]\]/g) || [];
    counts.embed_heading = embedHeading.length;
    if (embedHeading.length > 0) addExample('embed_heading', embedHeading[0], filePath);
    
    // Embedded with block ![file^block](file^block)
    const embedBlock = content.match(/!\[\[([^\[\]]+?)\^([^\[\]]+?)\]\]/g) || [];
    counts.embed_block = embedBlock.length;
    if (embedBlock.length > 0) addExample('embed_block', embedBlock[0], filePath);
    
    // Markdown internal links without .md extension
    const mdInternal = content.match(/\[([^\]]*?)\]\((?!https?:\/\/)(?!mailto:)(?!#)([^)#]+?)(?<!\.md)\)/g) || [];
    counts.markdown_internal = mdInternal.length;
    if (mdInternal.length > 0) addExample('markdown_internal', mdInternal[0], filePath);
    
    // Markdown internal links with .md extension
    const mdInternalMd = content.match(/\[([^\]]*?)\]\((?!https?:\/\/)([^)#]+?\.md)\)/g) || [];
    counts.markdown_internal_md = mdInternalMd.length;
    if (mdInternalMd.length > 0) addExample('markdown_internal_md', mdInternalMd[0], filePath);
    
    // Markdown links with heading [text](page#heading)
    const mdHeading = content.match(/\[([^\]]*?)\]\(([^)]+?)#([^)]+?)\)/g) || [];
    counts.markdown_heading = mdHeading.length;
    if (mdHeading.length > 0) addExample('markdown_heading', mdHeading[0], filePath);
    
    // Markdown heading only [text](#heading)
    const mdHeadingOnly = content.match(/\[([^\]]*?)\]\(#([^)]+?)\)/g) || [];
    counts.markdown_heading_only = mdHeadingOnly.length;
    if (mdHeadingOnly.length > 0) addExample('markdown_heading_only', mdHeadingOnly[0], filePath);
    
    // Markdown with leading slash [text](/path)
    const mdSlash = content.match(/\[([^\]]*?)\]\(\/([^)]+?)\)/g) || [];
    counts.markdown_leading_slash = mdSlash.length;
    if (mdSlash.length > 0) addExample('markdown_leading_slash', mdSlash[0], filePath);
    
    // Relative parent paths [text](../path)
    const mdRelParent = content.match(/\[([^\]]*?)\]\(\.\.\/([^)]+?)\)/g) || [];
    counts.markdown_relative_parent = mdRelParent.length;
    if (mdRelParent.length > 0) addExample('markdown_relative_parent', mdRelParent[0], filePath);
    
    // Relative current paths [text](./path)
    const mdRelCurrent = content.match(/\[([^\]]*?)\]\(\.\/([^)]+?)\)/g) || [];
    counts.markdown_relative_current = mdRelCurrent.length;
    if (mdRelCurrent.length > 0) addExample('markdown_relative_current', mdRelCurrent[0], filePath);
    
    // External links
    const external = content.match(/\[([^\]]*?)\]\((https?:\/\/[^)]+?)\)/g) || [];
    counts.external_links = external.length;
    if (external.length > 0) addExample('external_links', external[0], filePath);
    
    // Check for edge cases
    if (content.includes('<<<<<<<')) {
        results.edgeCases.push({
            file: filePath,
            issue: 'Git merge conflict markers'
        });
    }
    
    if (content.includes('<%') && content.includes('%>')) {
        results.edgeCases.push({
            file: filePath,
            issue: 'Contains Templater syntax'
        });
    }
    
    return counts;
};

// Process files
const processFiles = async () => {
    const files = app.vault.getMarkdownFiles();
    const notice = new Notice('Analyzing vault links...', 0);
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        if (!shouldExclude(file.path)) {
            notice.setMessage(`Analyzing ${i + 1}/${files.length}: ${file.name}`);
            
            try {
                const content = await app.vault.read(file);
                const counts = analyzeContent(content, file.path);
                
                // Calculate total links for this file
                let totalLinks = 0;
                Object.values(counts).forEach(count => {
                    totalLinks += count;
                });
                
                if (totalLinks > 0) {
                    results.filesWithLinks++;
                    results.fileDetails.push({
                        path: file.path,
                        counts: counts,
                        total: totalLinks
                    });
                    
                    // Add to global counts
                    Object.entries(counts).forEach(([type, count]) => {
                        results.linkTypeCounts[type] += count;
                    });
                }
                
                results.totalFiles++;
                
            } catch (error) {
                console.error(`Error processing ${file.path}:`, error);
                results.edgeCases.push({
                    file: file.path,
                    issue: 'Processing error: ' + error.message
                });
            }
        }
    }
    
    notice.hide();
};

// Generate markdown report
const generateReport = () => {
    let md = '# Comprehensive Link Type Analysis\n\n';
    md += `**Generated**: ${new Date().toISOString()}\n`;
    md += `**Analyzer**: T05-Comprehensive-Link-Analyzer v2\n\n`;
    
    md += '## Summary Statistics\n\n';
    md += `- **Total Files Scanned**: ${results.totalFiles}\n`;
    md += `- **Files Containing Links**: ${results.filesWithLinks}\n`;
    
    let totalLinks = 0;
    Object.values(results.linkTypeCounts).forEach(count => {
        totalLinks += count;
    });
    md += `- **Total Links Found**: ${totalLinks}\n\n`;
    
    md += '## Link Type Breakdown\n\n';
    md += '| Link Type | Count | Description |\n';
    md += '|-----------|-------|-------------|\n';
    
    const typeDescriptions = {
        wikilink_basic: 'Standard wikilinks [page](page)',
        wikilink_alias: 'Wikilinks with alias [display](page)',
        wikilink_heading: 'Wikilinks with heading [](page#heading)',
        wikilink_block: 'Wikilinks with block [page^block](page^block)',
        wikilink_leading_slash: 'Wikilinks with leading slash [/path](/path)',
        embed_basic: 'Embedded content ![file](file)',
        embed_heading: 'Embedded with heading ![](file#heading)',
        embed_block: 'Embedded with block ![file^block](file^block)',
        markdown_internal: 'Markdown internal links [text](page)',
        markdown_internal_md: 'Markdown internal with .md [text](page.md)',
        markdown_heading: 'Markdown with heading [text](page#heading)',
        markdown_heading_only: 'Markdown heading only [text](#heading)',
        markdown_leading_slash: 'Markdown with leading slash [text](/path)',
        markdown_relative_parent: 'Relative parent paths [text](../path)',
        markdown_relative_current: 'Relative current paths [text](./path)',
        external_links: 'External HTTP/HTTPS links'
    };
    
    Object.entries(results.linkTypeCounts).forEach(([type, count]) => {
        if (count > 0) {
            md += `| ${typeDescriptions[type]} | ${count} | ✓ Found |\n`;
        }
    });
    
    md += '\n### Link Types Not Found\n\n';
    Object.entries(results.linkTypeCounts).forEach(([type, count]) => {
        if (count === 0) {
            md += `- ${typeDescriptions[type]}\n`;
        }
    });
    
    md += '\n## Examples Found\n\n';
    Object.entries(results.examples).forEach(([type, examples]) => {
        if (examples && examples.length > 0) {
            md += `### ${typeDescriptions[type]}\n\n`;
            examples.forEach((ex, i) => {
                md += `${i + 1}. \`${ex.text}\` - Found in: ${ex.file}\n`;
            });
            md += '\n';
        }
    });
    
    if (results.edgeCases.length > 0) {
        md += '## Edge Cases\n\n';
        results.edgeCases.forEach(edge => {
            md += `- **${edge.file}**: ${edge.issue}\n`;
        });
    }
    
    md += '\n## Top Files by Link Count\n\n';
    const topFiles = results.fileDetails
        .sort((a, b) => b.total - a.total)
        .slice(0, 10);
    
    md += '| File | Total Links |\n';
    md += '|------|-------------|\n';
    topFiles.forEach(file => {
        md += `| ${file.path} | ${file.total} |\n`;
    });
    
    return md;
};

// Generate CSV
const generateCSV = () => {
    const headers = ['File Path', 'Total Links', 
        'Wikilink Basic', 'Wikilink Alias', 'Wikilink Heading', 'Wikilink Block', 'Wikilink Leading Slash',
        'Embed Basic', 'Embed Heading', 'Embed Block',
        'Markdown Internal', 'Markdown Internal .md', 'Markdown Heading', 'Markdown Heading Only', 'Markdown Leading Slash',
        'Relative Parent', 'Relative Current', 'External Links'
    ];
    
    let csv = headers.map(h => `"${h}"`).join(',') + '\n';
    
    results.fileDetails
        .sort((a, b) => b.total - a.total)
        .forEach(file => {
            const row = [`"${file.path}"`, file.total];
            
            // Add counts in order
            ['wikilink_basic', 'wikilink_alias', 'wikilink_heading', 'wikilink_block', 'wikilink_leading_slash',
             'embed_basic', 'embed_heading', 'embed_block',
             'markdown_internal', 'markdown_internal_md', 'markdown_heading', 'markdown_heading_only', 'markdown_leading_slash',
             'markdown_relative_parent', 'markdown_relative_current', 'external_links'
            ].forEach(type => {
                row.push(file.counts[type] || 0);
            });
            
            csv += row.join(',') + '\n';
        });
    
    return csv;
};

// Main execution
try {
    await processFiles();
    
    const report = generateReport();
    const csv = generateCSV();
    
    // Save outputs
    await app.vault.adapter.write(`${OUTPUT_DIR}/42-comprehensive-link-analysis.md`, report);
    await app.vault.adapter.write(`${OUTPUT_DIR}/44-link-type-inventory.csv`, csv);
    
    // Display summary
    tR += '## Analysis Complete\n\n';
    tR += `- **Files Analyzed**: ${results.totalFiles}\n`;
    tR += `- **Files with Links**: ${results.filesWithLinks}\n\n`;
    
    tR += '### Link Types Found:\n';
    Object.entries(results.linkTypeCounts).forEach(([type, count]) => {
        if (count > 0) {
            tR += `- ${type.replace(/_/g, ' ')}: ${count}\n`;
        }
    });
    
    tR += '\n### Outputs Created:\n';
    tR += '- `link-fix/42-comprehensive-link-analysis.md`\n';
    tR += '- `link-fix/44-link-type-inventory.csv`\n';
    
    new Notice('Analysis complete! Check outputs in link-fix folder.');
    
} catch (error) {
    console.error('Analysis failed:', error);
    tR += `\n## Error\n\n${error.message}`;
    new Notice('Analysis failed: ' + error.message);
}
%>

---

*Template execution complete*
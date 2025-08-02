---
purpose: Comprehensive analysis of ALL link types in the vault
outputs:
  - 42-comprehensive-link-analysis.md
  - 44-link-type-inventory.csv
rollback: Delete generated analysis files
---

# Comprehensive Link Type Analysis

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T05-Comprehensive-Link-Analyzer

## Analysis Configuration

<%*
// T05-Comprehensive-Link-Analyzer
// Purpose: Detect and categorize ALL link types in the vault
// Outputs: 42-comprehensive-link-analysis.md, 44-link-type-inventory.csv

const OUTPUT_DIR = 'link-fix';
const EXCLUDE_DIRS = ['drafts', 'tools', 'enveloppe', '.obsidian', '.trash', 'link-fix'];

// Comprehensive link patterns
const LINK_PATTERNS = {
    // Wikilinks
    wikilink_standard: {
        regex: /\[\[([^\[\]|#^]+?)\]\]/g,
        name: 'Wikilink (standard)',
        example: '[[page]]'
    },
    wikilink_alias: {
        regex: /\[\[([^\[\]#^]+?)\|([^\[\]]+?)\]\]/g,
        name: 'Wikilink with alias',
        example: '[[page|display text]]'
    },
    wikilink_heading: {
        regex: /\[\[([^\[\]|^]+?)#([^\[\]|^]+?)\]\]/g,
        name: 'Wikilink with heading',
        example: '[[page#heading]]'
    },
    wikilink_block: {
        regex: /\[\[([^\[\]|#]+?)\^([^\[\]|#]+?)\]\]/g,
        name: 'Wikilink with block',
        example: '[[page^block-id]]'
    },
    wikilink_heading_alias: {
        regex: /\[\[([^\[\]|^]+?)#([^\[\]|^]+?)\|([^\[\]]+?)\]\]/g,
        name: 'Wikilink heading + alias',
        example: '[[page#heading|alias]]'
    },
    wikilink_block_alias: {
        regex: /\[\[([^\[\]|#]+?)\^([^\[\]|#]+?)\|([^\[\]]+?)\]\]/g,
        name: 'Wikilink block + alias',
        example: '[[page^block|alias]]'
    },
    
    // Embedded content
    embed_standard: {
        regex: /!\[\[([^\[\]]+?)\]\]/g,
        name: 'Embedded content',
        example: '![[file]]'
    },
    embed_heading: {
        regex: /!\[\[([^\[\]]+?)#([^\[\]]+?)\]\]/g,
        name: 'Embedded with heading',
        example: '![[file#heading]]'
    },
    embed_block: {
        regex: /!\[\[([^\[\]]+?)\^([^\[\]]+?)\]\]/g,
        name: 'Embedded with block',
        example: '![[file^block]]'
    },
    
    // Markdown links
    markdown_internal: {
        regex: /\[([^\]]*?)\]\((?!https?:\/\/)([^)#]+?)(?<!\.md)\)/g,
        name: 'Markdown internal (no .md)',
        example: '[text](page)'
    },
    markdown_internal_md: {
        regex: /\[([^\]]*?)\]\((?!https?:\/\/)([^)#]+?\.md)\)/g,
        name: 'Markdown internal (.md)',
        example: '[text](page.md)'
    },
    markdown_heading: {
        regex: /\[([^\]]*?)\]\(([^)]+?)#([^)]+?)\)/g,
        name: 'Markdown with heading',
        example: '[text](page#heading)'
    },
    markdown_internal_only_heading: {
        regex: /\[([^\]]*?)\]\(#([^)]+?)\)/g,
        name: 'Markdown internal heading only',
        example: '[text](#heading)'
    },
    
    // Relative paths
    relative_parent: {
        regex: /\[([^\]]*?)\]\(\.\.\/([^)]+?)\)/g,
        name: 'Relative parent path',
        example: '[text](../parent/file)'
    },
    relative_current: {
        regex: /\[([^\]]*?)\]\(\.\/([^)]+?)\)/g,
        name: 'Relative current path',
        example: '[text](./sibling)'
    },
    
    // Leading slashes (problematic)
    leading_slash_wiki: {
        regex: /\[\[\/([^\]]+?)\]\]/g,
        name: 'Wikilink leading slash',
        example: '[[/path]]'
    },
    leading_slash_md: {
        regex: /\[([^\]]*?)\]\(\/([^)]+?)\)/g,
        name: 'Markdown leading slash',
        example: '[text](/path)'
    },
    
    // External links
    external_http: {
        regex: /\[([^\]]*?)\]\((https?:\/\/[^)]+?)\)/g,
        name: 'External HTTP/HTTPS',
        example: '[text](https://example.com)'
    },
    
    // Special patterns
    query_params: {
        regex: /\[([^\]]*?)\]\(([^)]+?)\?([^)]+?)\)/g,
        name: 'Links with query params',
        example: '[text](page?param=value)'
    }
};

// Results storage
const results = {
    totalFiles: 0,
    filesWithLinks: 0,
    linksByType: {},
    fileDetails: [],
    examplesByType: {},
    edgeCases: []
};

// Initialize counters
Object.keys(LINK_PATTERNS).forEach(type => {
    results.linksByType[type] = 0;
    results.examplesByType[type] = new Set();
});

// Helper to check if path should be excluded
const shouldExclude = (path) => {
    return EXCLUDE_DIRS.some(dir => path.includes(`/${dir}/`) || path.startsWith(`${dir}/`));
};

// Collect unique examples (max 3 per type)
const collectExample = (type, match, filePath) => {
    if (results.examplesByType[type].size < 3) {
        results.examplesByType[type].add({
            text: match,
            file: filePath
        });
    }
};

// Process a single file
const processFile = async (file) => {
    try {
        const content = await app.vault.read(file);
        const fileResult = {
            path: file.path,
            linkCounts: {},
            totalLinks: 0
        };
        
        // Check each pattern
        for (const [type, pattern] of Object.entries(LINK_PATTERNS)) {
            const matches = [...content.matchAll(pattern.regex)];
            fileResult.linkCounts[type] = matches.length;
            fileResult.totalLinks += matches.length;
            results.linksByType[type] += matches.length;
            
            // Collect examples
            matches.slice(0, 3).forEach(match => {
                collectExample(type, match[0], file.path);
            });
        }
        
        // Check for edge cases
        if (content.includes('<<<<<<<')) {
            results.edgeCases.push({
                file: file.path,
                issue: 'Git merge conflict markers',
                line: content.split('\n').findIndex(line => line.includes('<<<<<<<')) + 1
            });
        }
        
        if (content.includes('<%') && content.includes('%>')) {
            const templaterCount = (content.match(/<%[\s\S]*?%>/g) || []).length;
            if (templaterCount > 0) {
                results.edgeCases.push({
                    file: file.path,
                    issue: `Templater syntax (${templaterCount} blocks)`,
                    concern: 'May interfere with link parsing'
                });
            }
        }
        
        if (fileResult.totalLinks > 0) {
            results.filesWithLinks++;
            results.fileDetails.push(fileResult);
        }
        
    } catch (error) {
        console.error(`Error processing ${file.path}:`, error);
        results.edgeCases.push({
            file: file.path,
            issue: 'Processing error',
            error: error.message
        });
    }
};

// Generate comprehensive analysis markdown
const generateAnalysis = () => {
    let md = `# Comprehensive Link Type Analysis\n\n`;
    md += `**Generated**: ${new Date().toISOString()}\n`;
    md += `**Analyzer**: T05-Comprehensive-Link-Analyzer\n\n`;
    
    md += `## Summary Statistics\n\n`;
    md += `- **Total Files Scanned**: ${results.totalFiles}\n`;
    md += `- **Files Containing Links**: ${results.filesWithLinks}\n`;
    md += `- **Total Links Found**: ${Object.values(results.linksByType).reduce((a, b) => a + b, 0)}\n\n`;
    
    md += `## Link Type Breakdown\n\n`;
    md += `| Pattern Type | Count | Example | Description |\n`;
    md += `|--------------|-------|---------|-------------|\n`;
    
    Object.entries(LINK_PATTERNS).forEach(([type, pattern]) => {
        const count = results.linksByType[type];
        if (count > 0) {
            const example = [...results.examplesByType[type]][0];
            md += `| ${pattern.name} | ${count} | \`${pattern.example}\` | ${example ? `Found in: ${example.file}` : ''} |\n`;
        }
    });
    
    md += `\n### Link Types Not Found\n\n`;
    Object.entries(LINK_PATTERNS).forEach(([type, pattern]) => {
        if (results.linksByType[type] === 0) {
            md += `- **${pattern.name}**: \`${pattern.example}\` - Not detected in vault\n`;
        }
    });
    
    md += `\n## Pattern Examples\n\n`;
    Object.entries(LINK_PATTERNS).forEach(([type, pattern]) => {
        const examples = [...results.examplesByType[type]];
        if (examples.length > 0) {
            md += `### ${pattern.name}\n\n`;
            examples.forEach((ex, i) => {
                md += `${i + 1}. \`${ex.text}\` - ${ex.file}\n`;
            });
            md += `\n`;
        }
    });
    
    md += `## Edge Cases and Concerns\n\n`;
    if (results.edgeCases.length > 0) {
        md += `Found ${results.edgeCases.length} files with special considerations:\n\n`;
        results.edgeCases.forEach(edge => {
            md += `- **${edge.file}**: ${edge.issue}`;
            if (edge.concern) md += ` (${edge.concern})`;
            if (edge.line) md += ` at line ${edge.line}`;
            md += `\n`;
        });
    } else {
        md += `No edge cases detected.\n`;
    }
    
    md += `\n## Files with Most Complex Link Patterns\n\n`;
    const complexFiles = results.fileDetails
        .filter(f => {
            const typeCount = Object.values(f.linkCounts).filter(c => c > 0).length;
            return typeCount >= 3;
        })
        .sort((a, b) => {
            const aTypes = Object.values(a.linkCounts).filter(c => c > 0).length;
            const bTypes = Object.values(b.linkCounts).filter(c => c > 0).length;
            return bTypes - aTypes;
        })
        .slice(0, 10);
    
    if (complexFiles.length > 0) {
        md += `| File | Link Types | Total Links |\n`;
        md += `|------|------------|-------------|\n`;
        complexFiles.forEach(file => {
            const types = Object.entries(file.linkCounts)
                .filter(([_, count]) => count > 0)
                .length;
            md += `| ${file.path} | ${types} | ${file.totalLinks} |\n`;
        });
    }
    
    md += `\n---\n\n*Analysis complete. See CSV for detailed file-by-file breakdown.*`;
    
    return md;
};

// Generate CSV
const generateCSV = () => {
    const headers = ['File Path', 'Total Links'];
    Object.values(LINK_PATTERNS).forEach(pattern => {
        headers.push(pattern.name);
    });
    
    let csv = headers.map(h => `"${h}"`).join(',') + '\n';
    
    results.fileDetails
        .sort((a, b) => b.totalLinks - a.totalLinks)
        .forEach(file => {
            const row = [`"${file.path}"`, file.totalLinks];
            Object.keys(LINK_PATTERNS).forEach(type => {
                row.push(file.linkCounts[type] || 0);
            });
            csv += row.join(',') + '\n';
        });
    
    return csv;
};

// Main execution
try {
    const progressNotice = new Notice('Analyzing vault for all link types...', 0);
    
    // Get all markdown files
    const files = app.vault.getMarkdownFiles();
    let processed = 0;
    
    for (const file of files) {
        if (!shouldExclude(file.path)) {
            progressNotice.setMessage(`Analyzing ${processed}/${files.length}: ${file.name}`);
            await processFile(file);
            results.totalFiles++;
            processed++;
        }
    }
    
    progressNotice.hide();
    
    // Generate outputs
    const analysisContent = generateAnalysis();
    const csvContent = generateCSV();
    
    // Save files
    await app.vault.adapter.write(
        `${OUTPUT_DIR}/42-comprehensive-link-analysis.md`,
        analysisContent
    );
    
    await app.vault.adapter.write(
        `${OUTPUT_DIR}/44-link-type-inventory.csv`,
        csvContent
    );
    
    // Display results
    tR += `## Analysis Complete\n\n`;
    tR += `- **Files Analyzed**: ${results.totalFiles}\n`;
    tR += `- **Files with Links**: ${results.filesWithLinks}\n`;
    tR += `- **Total Links**: ${Object.values(results.linksByType).reduce((a, b) => a + b, 0)}\n\n`;
    
    tR += `### Link Types Found:\n`;
    Object.entries(LINK_PATTERNS).forEach(([type, pattern]) => {
        const count = results.linksByType[type];
        if (count > 0) {
            tR += `- ${pattern.name}: ${count}\n`;
        }
    });
    
    tR += `\n### Outputs Created:\n`;
    tR += `- \`${OUTPUT_DIR}/42-comprehensive-link-analysis.md\`\n`;
    tR += `- \`${OUTPUT_DIR}/44-link-type-inventory.csv\`\n`;
    
    new Notice('Comprehensive link analysis complete!');
    
} catch (error) {
    console.error('Analysis error:', error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Error: ${error.message}`);
}
%>

## Rollback Function

To remove generated analysis files:

```javascript
(async () => {
    const files = [
        'link-fix/42-comprehensive-link-analysis.md',
        'link-fix/44-link-type-inventory.csv'
    ];
    
    for (const file of files) {
        try {
            await app.vault.adapter.remove(file);
            console.log(`Removed: ${file}`);
        } catch (e) {
            console.log(`File not found: ${file}`);
        }
    }
    
    new Notice('Analysis files removed');
})();
```

---

*Template: T05-Comprehensive-Link-Analyzer*
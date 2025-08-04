<%*
// T14-Cross-Reference-Validator
// Purpose: Verify link consistency and find orphaned/unreferenced files
// Catches files that might have been missed in conversion

const OUTPUT_DIR = 'link-fix';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");

const analysis = {
    startTime: Date.now(),
    files: {
        total: 0,
        withOutgoingLinks: 0,
        withIncomingLinks: 0,
        orphaned: [],
        unreferenced: []
    },
    links: {
        bidirectionalPairs: [],
        unidirectional: []
    },
    inconsistencies: []
};

// ONLY scan these directories (from the normalization plan)
const PROJECT_SCOPE = ['artifacts/', 'notes/', 'links/', 'tags/'];

// EXCLUDE these directories (from T12 validator)
const EXCLUDED_DIRS = [
    'notes/general-circle/',
    'notes/archive/',
    'notes/wp/',
    'notes/dao-primitives/primitives-archive/',
    'notes/rpp/rpp-archive/',
    'notes/ics/ccc/archive/',
    '/archive/',
    '-archive/'
];

// Build link graph
const buildLinkGraph = async () => {
    const linkGraph = new Map(); // file -> { outgoing: Set, incoming: Set }
    
    const files = app.vault.getMarkdownFiles().filter(f => {
        // Check if file should be excluded
        for (const excludeDir of EXCLUDED_DIRS) {
            if (f.path.includes(excludeDir)) {
                return false;
            }
        }
        
        // Check if in project scope
        return PROJECT_SCOPE.some(dir => f.path.startsWith(dir));
    });
    
    analysis.files.total = files.length;
    
    // Initialize graph
    files.forEach(f => {
        linkGraph.set(f.path, { 
            outgoing: new Set(), 
            incoming: new Set(),
            file: f
        });
    });
    
    // Build relationships
    for (const file of files) {
        const content = await app.vault.read(file);
        const node = linkGraph.get(file.path);
        
        // Find all internal markdown links
        const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
        let match;
        
        while ((match = linkRegex.exec(content)) !== null) {
            const [fullMatch, text, url] = match;
            
            // Skip external links and fragments
            if (!url.startsWith('http') && !url.startsWith('#')) {
                const targetPath = url.split('#')[0];
                
                if (targetPath && linkGraph.has(targetPath)) {
                    node.outgoing.add(targetPath);
                    linkGraph.get(targetPath).incoming.add(file.path);
                } else if (targetPath) {
                    // Check if target is in excluded directory
                    let targetExcluded = false;
                    for (const excludeDir of EXCLUDED_DIRS) {
                        if (targetPath.includes(excludeDir)) {
                            targetExcluded = true;
                            break;
                        }
                    }
                    
                    if (!targetExcluded) {
                        // Track links to non-existent files only if not in excluded dirs
                        analysis.inconsistencies.push({
                            source: file.path,
                            target: targetPath,
                            issue: 'Target file not found in active content'
                        });
                    }
                }
            }
        }
    }
    
    return linkGraph;
};

// Analyze link patterns
const analyzeLinkPatterns = (linkGraph) => {
    // Find orphaned files (no incoming or outgoing links)
    for (const [path, node] of linkGraph) {
        if (node.outgoing.size > 0) {
            analysis.files.withOutgoingLinks++;
        }
        if (node.incoming.size > 0) {
            analysis.files.withIncomingLinks++;
        }
        
        if (node.outgoing.size === 0 && node.incoming.size === 0) {
            analysis.files.orphaned.push(path);
        } else if (node.incoming.size === 0 && !path.includes('index')) {
            analysis.files.unreferenced.push(path);
        }
    }
    
    // Find bidirectional vs unidirectional links
    const checkedPairs = new Set();
    
    for (const [source, node] of linkGraph) {
        for (const target of node.outgoing) {
            const pairKey = [source, target].sort().join('::');
            
            if (!checkedPairs.has(pairKey)) {
                checkedPairs.add(pairKey);
                
                const targetNode = linkGraph.get(target);
                if (targetNode && targetNode.outgoing.has(source)) {
                    analysis.links.bidirectionalPairs.push({ source, target });
                } else {
                    analysis.links.unidirectional.push({ from: source, to: target });
                }
            }
        }
    }
};

// Check for link format consistency
const checkLinkConsistency = async (linkGraph) => {
    for (const [path, node] of linkGraph) {
        const content = await app.vault.read(node.file);
        
        // Check for mixed link formats
        const wikilinks = content.match(/\[\[([^\]]+)\]\]/g) || [];
        const markdownLinks = content.match(/\[([^\]]*)\]\(([^)]+)\)/g) || [];
        
        if (wikilinks.length > 0) {
            analysis.inconsistencies.push({
                file: path,
                issue: `Contains ${wikilinks.length} unconverted wikilinks`,
                samples: wikilinks.slice(0, 3)
            });
        }
        
        // Check for potential duplicate links (same target, different format)
        const linkTargets = new Map();
        const duplicates = [];
        
        const mdLinkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
        let match;
        while ((match = mdLinkRegex.exec(content)) !== null) {
            const [fullMatch, text, url] = match;
            const target = url.split('#')[0];
            
            if (!linkTargets.has(target)) {
                linkTargets.set(target, []);
            }
            linkTargets.get(target).push({ text, full: fullMatch });
        }
        
        for (const [target, links] of linkTargets) {
            if (links.length > 1) {
                const uniqueTexts = new Set(links.map(l => l.text));
                if (uniqueTexts.size > 1) {
                    duplicates.push({
                        target,
                        count: links.length,
                        variations: links
                    });
                }
            }
        }
        
        if (duplicates.length > 0) {
            analysis.inconsistencies.push({
                file: path,
                issue: 'Multiple links to same target with different text',
                duplicates
            });
        }
    }
};

// Generate report
const generateReport = () => {
    const duration = ((Date.now() - analysis.startTime) / 1000).toFixed(1);
    let report = `# Cross-Reference Validation Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Duration**: ${duration} seconds\n\n`;
    
    report += `## Overview\n\n`;
    report += `- **Total Files**: ${analysis.files.total}\n`;
    report += `- **Files with Outgoing Links**: ${analysis.files.withOutgoingLinks}\n`;
    report += `- **Files with Incoming Links**: ${analysis.files.withIncomingLinks}\n`;
    report += `- **Orphaned Files**: ${analysis.files.orphaned.length}\n`;
    report += `- **Unreferenced Files**: ${analysis.files.unreferenced.length}\n\n`;
    
    report += `## Link Relationships\n\n`;
    report += `- **Bidirectional Link Pairs**: ${analysis.links.bidirectionalPairs.length}\n`;
    report += `- **Unidirectional Links**: ${analysis.links.unidirectional.length}\n`;
    report += `- **Inconsistencies Found**: ${analysis.inconsistencies.length}\n\n`;
    
    if (analysis.files.orphaned.length > 0) {
        report += `## Orphaned Files (No Links)\n\n`;
        report += `These files have no incoming or outgoing links:\n\n`;
        analysis.files.orphaned.forEach(f => {
            report += `- ${f}\n`;
        });
        report += `\n`;
    }
    
    if (analysis.files.unreferenced.length > 0) {
        report += `## Unreferenced Files\n\n`;
        report += `These files have outgoing links but no incoming links:\n\n`;
        analysis.files.unreferenced.slice(0, 20).forEach(f => {
            report += `- ${f}\n`;
        });
        if (analysis.files.unreferenced.length > 20) {
            report += `*... and ${analysis.files.unreferenced.length - 20} more*\n`;
        }
        report += `\n`;
    }
    
    if (analysis.inconsistencies.length > 0) {
        report += `## Inconsistencies\n\n`;
        analysis.inconsistencies.slice(0, 10).forEach(issue => {
            if (issue.source) {
                report += `### ${issue.source} → ${issue.target}\n`;
            } else {
                report += `### ${issue.file}\n`;
            }
            report += `- **Issue**: ${issue.issue}\n`;
            if (issue.samples) {
                report += `- **Samples**: ${issue.samples.join(', ')}\n`;
            }
            report += `\n`;
        });
        if (analysis.inconsistencies.length > 10) {
            report += `*... and ${analysis.inconsistencies.length - 10} more issues*\n`;
        }
    }
    
    return report;
};

// Main execution
try {
    const notice = new Notice("Building link graph...", 0);
    const linkGraph = await buildLinkGraph();
    
    notice.setMessage("Analyzing link patterns...");
    analyzeLinkPatterns(linkGraph);
    
    notice.setMessage("Checking consistency...");
    await checkLinkConsistency(linkGraph);
    
    const report = generateReport();
    const reportPath = `${OUTPUT_DIR}/71-cross-reference-validation.md`;
    await app.vault.adapter.write(reportPath, report);
    
    notice.hide();
    new Notice(`Cross-reference validation complete`, 5000);
    
    tR += `## Cross-Reference Validation\n\n`;
    tR += `- **Files Analyzed**: ${analysis.files.total}\n`;
    tR += `- **Orphaned Files**: ${analysis.files.orphaned.length}\n`;
    tR += `- **Unreferenced**: ${analysis.files.unreferenced.length}\n`;
    tR += `- **Inconsistencies**: ${analysis.inconsistencies.length}\n`;
    tR += `\nReport saved to: \`${reportPath}\``;
    
} catch (error) {
    console.error("Cross-reference error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
}
%>
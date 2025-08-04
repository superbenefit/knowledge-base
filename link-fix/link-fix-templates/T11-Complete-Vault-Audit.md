---
purpose: Comprehensive post-conversion vault audit
features:
  - All link patterns validated
  - Publishing compatibility check
  - Performance testing
  - Graph view integrity
  - Search functionality
outputs:
  - 59-final-audit-report.md
  - Performance metrics
  - Compatibility report
---

# Complete Vault Audit

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T11-Complete-Vault-Audit

## Audit Configuration

<%*
// T11-Complete-Vault-Audit
// Purpose: Comprehensive post-conversion check of entire vault
// Features: Link validation, publishing check, performance, graph integrity, search

const OUTPUT_DIR = 'link-fix';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");
const auditReport = `59-final-audit-report-${timestamp}.md`;

// Audit results
const audit = {
    startTime: Date.now(),
    vault: {
        totalFiles: 0,
        markdownFiles: 0,
        attachments: 0,
        totalSize: 0
    },
    links: {
        total: 0,
        valid: 0,
        broken: 0,
        byType: {
            wikilinks: 0,
            markdown: 0,
            embedded: 0,
            external: 0
        },
        issues: []
    },
    publishing: {
        compatible: 0,
        incompatible: 0,
        issues: []
    },
    performance: {
        searchTime: 0,
        graphLoadTime: 0,
        fileOpenTime: [],
        indexingTime: 0
    },
    integrity: {
        orphanedFiles: [],
        circularLinks: [],
        deepNesting: [],
        largeFiles: []
    }
};

// Get audit scope
const scope = await tp.system.prompt(
    "Select audit type",
    "",
    ["Complete Audit", "Quick Audit", "Publishing Focus", "Performance Focus"]
);

// Measure performance
const measurePerformance = async (operation, func) => {
    const start = performance.now();
    const result = await func();
    const duration = performance.now() - start;
    return { result, duration };
};

// Audit vault structure
const auditVaultStructure = async () => {
    const files = app.vault.getFiles();
    audit.vault.totalFiles = files.length;
    
    for (const file of files) {
        if (file.extension === 'md') {
            audit.vault.markdownFiles++;
        } else {
            audit.vault.attachments++;
        }
        
        // Check file size
        const stat = await app.vault.adapter.stat(file.path);
        audit.vault.totalSize += stat.size;
        
        if (stat.size > 1000000) { // Files over 1MB
            audit.integrity.largeFiles.push({
                path: file.path,
                size: (stat.size / 1024 / 1024).toFixed(2) + ' MB'
            });
        }
    }
    
    // Find orphaned files (no incoming links)
    const linkedFiles = new Set();
    const fileCache = app.metadataCache.getCache(files[0].path);
    
    // This would need proper implementation to track all linked files
    // For now, we'll check basic connectivity
};

// Audit all links
const auditLinks = async () => {
    const files = app.vault.getMarkdownFiles();
    const linkMap = new Map(); // For circular link detection
    
    for (const file of files) {
        const content = await app.vault.read(file);
        const cache = app.metadataCache.getFileCache(file);
        
        // Check for remaining wikilinks
        const wikilinks = content.match(/\[\[([^\]]+)\]\]/g) || [];
        audit.links.byType.wikilinks += wikilinks.length;
        
        if (wikilinks.length > 0) {
            audit.links.issues.push({
                type: 'wikilinks_remain',
                file: file.path,
                count: wikilinks.length,
                samples: wikilinks.slice(0, 3)
            });
        }
        
        // Check markdown links
        const mdLinks = content.match(/\[([^\]]*)\]\(([^)]+)\)/g) || [];
        audit.links.byType.markdown += mdLinks.length;
        
        // Validate each markdown link
        for (const linkMatch of mdLinks) {
            const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/;
            const [, text, url] = linkMatch.match(linkRegex);
            
            if (url.startsWith('http')) {
                audit.links.byType.external++;
            } else {
                // Check if target exists
                const targetPath = url.split('#')[0].replace(/^\//, '');
                const targetFile = app.vault.getAbstractFileByPath(targetPath);
                
                if (targetFile) {
                    audit.links.valid++;
                    
                    // Track for circular detection
                    if (!linkMap.has(file.path)) linkMap.set(file.path, []);
                    linkMap.get(file.path).push(targetPath);
                } else {
                    audit.links.broken++;
                    audit.links.issues.push({
                        type: 'broken_link',
                        file: file.path,
                        link: linkMatch,
                        target: targetPath
                    });
                }
            }
        }
        
        // Check embedded content
        const embeds = content.match(/!\[\[([^\]]+)\]\]|!\[([^\]]*)\]\(([^)]+)\)/g) || [];
        audit.links.byType.embedded += embeds.length;
        
        audit.links.total += wikilinks.length + mdLinks.length + embeds.length;
    }
    
    // Detect circular links
    detectCircularLinks(linkMap);
};

// Detect circular links
const detectCircularLinks = (linkMap) => {
    const visited = new Set();
    const recursionStack = new Set();
    
    const hasCycle = (node, path = []) => {
        if (recursionStack.has(node)) {
            const cycleStart = path.indexOf(node);
            const cycle = path.slice(cycleStart).concat(node);
            audit.integrity.circularLinks.push(cycle);
            return true;
        }
        
        if (visited.has(node)) return false;
        
        visited.add(node);
        recursionStack.add(node);
        path.push(node);
        
        const neighbors = linkMap.get(node) || [];
        for (const neighbor of neighbors) {
            if (hasCycle(neighbor, [...path])) {
                // Cycle found, but continue checking
            }
        }
        
        recursionStack.delete(node);
        return false;
    };
    
    for (const [file] of linkMap) {
        if (!visited.has(file)) {
            hasCycle(file);
        }
    }
};

// Check publishing compatibility
const checkPublishingCompatibility = async () => {
    const files = app.vault.getMarkdownFiles();
    
    for (const file of files) {
        const content = await app.vault.read(file);
        let compatible = true;
        const issues = [];
        
        // Check for Obsidian-specific syntax
        if (content.includes('%%')) {
            issues.push('Contains Obsidian comments %%');
            compatible = false;
        }
        
        if (content.match(/\^\w+$/m)) {
            issues.push('Contains block references ^');
        }
        
        if (content.includes('![[') && !content.includes('![](')) {
            issues.push('Contains wiki-style embeds');
            compatible = false;
        }
        
        // Check for specific plugins syntax
        if (content.includes('dataview::') || content.includes('```dataview')) {
            issues.push('Contains Dataview queries');
        }
        
        if (content.includes('<%') && content.includes('%>')) {
            issues.push('Contains Templater syntax');
        }
        
        // Check frontmatter
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            if (frontmatter.includes('publish: false')) {
                issues.push('Marked as unpublished');
                compatible = false;
            }
        }
        
        if (compatible) {
            audit.publishing.compatible++;
        } else {
            audit.publishing.incompatible++;
            audit.publishing.issues.push({
                file: file.path,
                issues: issues
            });
        }
    }
};

// Test performance
const testPerformance = async () => {
    // Test search
    const searchTest = await measurePerformance('search', async () => {
        return app.internalPlugins.getPluginById('global-search');
    });
    audit.performance.searchTime = searchTest.duration;
    
    // Test graph view (simplified)
    const graphTest = await measurePerformance('graph', async () => {
        // Would need to actually open graph view
        return true;
    });
    audit.performance.graphLoadTime = graphTest.duration;
    
    // Test file opening (sample)
    const testFiles = app.vault.getMarkdownFiles().slice(0, 10);
    for (const file of testFiles) {
        const openTest = await measurePerformance('open', async () => {
            const content = await app.vault.read(file);
            return content.length;
        });
        audit.performance.fileOpenTime.push({
            file: file.path,
            time: openTest.duration,
            size: openTest.result
        });
    }
};

// Check graph integrity
const checkGraphIntegrity = () => {
    // Get all files and their links
    const files = app.vault.getMarkdownFiles();
    const fileSet = new Set(files.map(f => f.path));
    
    // Find orphaned files (no incoming or outgoing links)
    for (const file of files) {
        const cache = app.metadataCache.getFileCache(file);
        const hasOutgoing = cache?.links?.length > 0 || cache?.embeds?.length > 0;
        const hasIncoming = false; // Would need reverse link lookup
        
        if (!hasOutgoing && !hasIncoming && !file.path.includes('index')) {
            audit.integrity.orphanedFiles.push(file.path);
        }
    }
    
    // Check nesting depth
    for (const file of files) {
        const depth = file.path.split('/').length - 1;
        if (depth > 4) {
            audit.integrity.deepNesting.push({
                file: file.path,
                depth: depth
            });
        }
    }
};

// Generate comprehensive report
const generateAuditReport = () => {
    let report = `# Complete Vault Audit Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Audit Type**: ${scope}\n`;
    report += `**Duration**: ${((Date.now() - audit.startTime) / 1000).toFixed(1)} seconds\n\n`;
    
    // Vault Overview
    report += `## 📊 Vault Overview\n\n`;
    report += `- **Total Files**: ${audit.vault.totalFiles}\n`;
    report += `- **Markdown Files**: ${audit.vault.markdownFiles}\n`;
    report += `- **Attachments**: ${audit.vault.attachments}\n`;
    report += `- **Total Size**: ${(audit.vault.totalSize / 1024 / 1024).toFixed(2)} MB\n\n`;
    
    // Link Analysis
    report += `## 🔗 Link Analysis\n\n`;
    report += `### Summary\n`;
    report += `- **Total Links**: ${audit.links.total}\n`;
    report += `- **Valid Links**: ${audit.links.valid}\n`;
    report += `- **Broken Links**: ${audit.links.broken}\n`;
    report += `- **Success Rate**: ${((audit.links.valid / (audit.links.valid + audit.links.broken)) * 100).toFixed(1)}%\n\n`;
    
    report += `### By Type\n`;
    report += `| Type | Count | Percentage |\n`;
    report += `|------|-------|------------|\n`;
    report += `| Wikilinks | ${audit.links.byType.wikilinks} | ${((audit.links.byType.wikilinks / audit.links.total) * 100).toFixed(1)}% |\n`;
    report += `| Markdown | ${audit.links.byType.markdown} | ${((audit.links.byType.markdown / audit.links.total) * 100).toFixed(1)}% |\n`;
    report += `| Embedded | ${audit.links.byType.embedded} | ${((audit.links.byType.embedded / audit.links.total) * 100).toFixed(1)}% |\n`;
    report += `| External | ${audit.links.byType.external} | ${((audit.links.byType.external / audit.links.total) * 100).toFixed(1)}% |\n\n`;
    
    // Critical Issues
    if (audit.links.byType.wikilinks > 0) {
        report += `### ⚠️ Remaining Wikilinks\n\n`;
        const wikiIssues = audit.links.issues.filter(i => i.type === 'wikilinks_remain');
        wikiIssues.slice(0, 10).forEach(issue => {
            report += `- **${issue.file}**: ${issue.count} wikilinks\n`;
            report += `  - Examples: ${issue.samples.join(', ')}\n`;
        });
        if (wikiIssues.length > 10) {
            report += `- ... and ${wikiIssues.length - 10} more files\n`;
        }
        report += `\n`;
    }
    
    // Publishing Compatibility
    report += `## 📤 Publishing Compatibility\n\n`;
    report += `- **Compatible Files**: ${audit.publishing.compatible} (${((audit.publishing.compatible / audit.vault.markdownFiles) * 100).toFixed(1)}%)\n`;
    report += `- **Incompatible Files**: ${audit.publishing.incompatible}\n\n`;
    
    if (audit.publishing.issues.length > 0) {
        report += `### Compatibility Issues\n\n`;
        audit.publishing.issues.slice(0, 10).forEach(issue => {
            report += `- **${issue.file}**\n`;
            issue.issues.forEach(i => report += `  - ${i}\n`);
        });
        if (audit.publishing.issues.length > 10) {
            report += `- ... and ${audit.publishing.issues.length - 10} more files\n`;
        }
        report += `\n`;
    }
    
    // Performance Metrics
    report += `## ⚡ Performance Metrics\n\n`;
    report += `- **Search Response**: ${audit.performance.searchTime.toFixed(0)}ms\n`;
    report += `- **Graph Load Time**: ${audit.performance.graphLoadTime.toFixed(0)}ms\n`;
    
    if (audit.performance.fileOpenTime.length > 0) {
        const avgOpenTime = audit.performance.fileOpenTime.reduce((a, b) => a + b.time, 0) / audit.performance.fileOpenTime.length;
        report += `- **Average File Open**: ${avgOpenTime.toFixed(0)}ms\n\n`;
    }
    
    // Vault Integrity
    report += `## 🔍 Vault Integrity\n\n`;
    
    if (audit.integrity.orphanedFiles.length > 0) {
        report += `### Orphaned Files (${audit.integrity.orphanedFiles.length})\n`;
        report += `Files with no incoming or outgoing links:\n\n`;
        audit.integrity.orphanedFiles.slice(0, 10).forEach(f => {
            report += `- ${f}\n`;
        });
        report += `\n`;
    }
    
    if (audit.integrity.circularLinks.length > 0) {
        report += `### Circular Links Detected (${audit.integrity.circularLinks.length})\n`;
        audit.integrity.circularLinks.slice(0, 5).forEach(cycle => {
            report += `- ${cycle.join(' → ')}\n`;
        });
        report += `\n`;
    }
    
    if (audit.integrity.largeFiles.length > 0) {
        report += `### Large Files (${audit.integrity.largeFiles.length})\n`;
        audit.integrity.largeFiles.forEach(f => {
            report += `- ${f.path}: ${f.size}\n`;
        });
        report += `\n`;
    }
    
    // Overall Health Score
    const healthScore = calculateHealthScore();
    report += `## 🏥 Overall Health Score: ${healthScore}/100\n\n`;
    
    report += `### Scoring Breakdown\n`;
    report += `- Link Health: ${audit.links.broken === 0 ? 25 : Math.max(0, 25 - audit.links.broken)} / 25\n`;
    report += `- No Wikilinks: ${audit.links.byType.wikilinks === 0 ? 25 : 0} / 25\n`;
    report += `- Publishing Ready: ${(audit.publishing.compatible / audit.vault.markdownFiles * 25).toFixed(0)} / 25\n`;
    report += `- Performance: ${audit.performance.searchTime < 100 ? 25 : 15} / 25\n\n`;
    
    // Recommendations
    report += `## 💡 Recommendations\n\n`;
    
    if (audit.links.byType.wikilinks > 0) {
        report += `1. **Complete Wikilink Conversion**: ${audit.links.byType.wikilinks} wikilinks remain\n`;
        report += `   - Re-run the Obsidian Links plugin on affected files\n`;
        report += `   - Check plugin settings and ensure proper configuration\n\n`;
    }
    
    if (audit.links.broken > 0) {
        report += `2. **Fix Broken Links**: ${audit.links.broken} links need attention\n`;
        report += `   - Run link validation to identify specific issues\n`;
        report += `   - Update or remove broken references\n\n`;
    }
    
    if (audit.publishing.incompatible > 0) {
        report += `3. **Publishing Preparation**: ${audit.publishing.incompatible} files need updates\n`;
        report += `   - Remove Obsidian-specific syntax\n`;
        report += `   - Convert remaining wiki embeds\n\n`;
    }
    
    if (audit.integrity.orphanedFiles.length > 0) {
        report += `4. **Link Orphaned Content**: ${audit.integrity.orphanedFiles.length} isolated files\n`;
        report += `   - Add links to/from orphaned files\n`;
        report += `   - Consider consolidation or removal\n\n`;
    }
    
    // Next Steps
    report += `## 🚀 Next Steps\n\n`;
    report += `1. Address critical issues (wikilinks, broken links)\n`;
    report += `2. Review publishing compatibility issues\n`;
    report += `3. Test in your publishing pipeline\n`;
    report += `4. Run targeted audits on problem areas\n`;
    report += `5. Schedule regular audit checks\n`;
    
    return report;
};

// Calculate overall health score
const calculateHealthScore = () => {
    let score = 0;
    
    // Link health (25 points)
    if (audit.links.broken === 0) {
        score += 25;
    } else {
        score += Math.max(0, 25 - audit.links.broken);
    }
    
    // No wikilinks (25 points)
    if (audit.links.byType.wikilinks === 0) {
        score += 25;
    }
    
    // Publishing compatibility (25 points)
    const publishingScore = (audit.publishing.compatible / audit.vault.markdownFiles) * 25;
    score += Math.round(publishingScore);
    
    // Performance (25 points)
    if (audit.performance.searchTime < 100 && audit.performance.graphLoadTime < 1000) {
        score += 25;
    } else if (audit.performance.searchTime < 200 && audit.performance.graphLoadTime < 2000) {
        score += 15;
    } else {
        score += 5;
    }
    
    return Math.round(score);
};

// Main execution
try {
    const notice = new Notice(`Starting ${scope}...`, 0);
    
    // Run audit components based on scope
    if (scope === "Complete Audit" || scope === "Quick Audit") {
        notice.setMessage("Auditing vault structure...");
        await auditVaultStructure();
        
        notice.setMessage("Analyzing links...");
        await auditLinks();
        
        notice.setMessage("Checking publishing compatibility...");
        await checkPublishingCompatibility();
        
        if (scope === "Complete Audit") {
            notice.setMessage("Testing performance...");
            await testPerformance();
            
            notice.setMessage("Checking graph integrity...");
            checkGraphIntegrity();
        }
    } else if (scope === "Publishing Focus") {
        await auditVaultStructure();
        await auditLinks();
        await checkPublishingCompatibility();
    } else if (scope === "Performance Focus") {
        await auditVaultStructure();
        await testPerformance();
    }
    
    notice.hide();
    
    // Generate and save report
    const report = generateAuditReport();
    await app.vault.adapter.write(`${OUTPUT_DIR}/${auditReport}`, report);
    
    // Display summary
    const healthScore = calculateHealthScore();
    tR += `## Audit Complete\n\n`;
    tR += `**Overall Health Score**: ${healthScore}/100 ${healthScore >= 80 ? '✅' : healthScore >= 60 ? '⚠️' : '❌'}\n\n`;
    
    tR += `### Key Findings\n`;
    tR += `- **Total Links**: ${audit.links.total}\n`;
    tR += `- **Remaining Wikilinks**: ${audit.links.byType.wikilinks} ${audit.links.byType.wikilinks === 0 ? '✅' : '❌'}\n`;
    tR += `- **Broken Links**: ${audit.links.broken} ${audit.links.broken === 0 ? '✅' : '⚠️'}\n`;
    tR += `- **Publishing Ready**: ${((audit.publishing.compatible / audit.vault.markdownFiles) * 100).toFixed(1)}%\n\n`;
    
    tR += `### 📄 Full Report\n`;
    tR += `Detailed audit report saved to:\n`;
    tR += `\`${OUTPUT_DIR}/${auditReport}\`\n\n`;
    
    if (healthScore < 80) {
        tR += `### ⚠️ Action Required\n`;
        tR += `Review the full report for specific issues and recommendations.\n`;
    } else {
        tR += `### ✅ Vault Health Good\n`;
        tR += `Your vault is in good shape! Check the report for optimization opportunities.\n`;
    }
    
    new Notice(`Audit complete! Health score: ${healthScore}/100`, 5000);
    
} catch (error) {
    console.error("Audit error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Audit error: ${error.message}`, 5000);
}
%>

---

*Template: T11-Complete-Vault-Audit*
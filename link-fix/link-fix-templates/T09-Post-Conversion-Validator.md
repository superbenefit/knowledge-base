---
purpose: Validate all links after conversion
outputs:
  - 55-validation-results.md
  - Broken links CSV
  - Missing targets list
  - Fragment validation report
---

# Post-Conversion Link Validator

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T09-Post-Conversion-Validator

## Validation Configuration

<%*
// T09-Post-Conversion-Validator
// Purpose: Comprehensive link validation after conversion
// Features: Target existence check, .md extension verification, fragment validation

const OUTPUT_DIR = 'link-fix';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");
const resultsFile = `55-validation-results-${timestamp}.md`;
const brokenLinksCSV = `55-broken-links-${timestamp}.csv`;
const missingTargetsFile = `55-missing-targets-${timestamp}.md`;

// Results tracking
const results = {
    totalFiles: 0,
    totalLinks: 0,
    validLinks: 0,
    brokenLinks: [],
    missingTargets: new Set(),
    fragmentIssues: [],
    extensionIssues: [],
    externalLinks: 0,
    statistics: {
        byType: {
            wikilinks: { total: 0, valid: 0 },
            markdown: { total: 0, valid: 0 },
            embedded: { total: 0, valid: 0 }
        },
        byDirectory: {}
    }
};

// Get validation scope
const scope = await tp.system.prompt(
    "Select validation scope",
    "",
    ["Full Vault", "Specific Directory", "Single File", "High-Risk Files Only"]
);

// Normalize path for checking
const normalizePath = (path) => {
    // Remove leading slash if present
    path = path.startsWith('/') ? path.substring(1) : path;
    
    // Handle relative references
    if (path.startsWith('#')) return { isFragment: true, path: path };
    
    // Clean up the path
    path = path.replace(/\/+/g, '/').replace(/\/$/, '');
    
    // Add .md if missing and not an asset
    if (!path.match(/\.(md|png|jpg|jpeg|gif|svg|pdf|docx?)$/i)) {
        path += '.md';
    }
    
    return { isFragment: false, path: path };
};

// Check if file exists
const fileExists = (path) => {
    try {
        const file = app.vault.getAbstractFileByPath(path);
        return file !== null;
    } catch {
        return false;
    }
};

// Validate fragment in file
const validateFragment = async (filePath, fragment) => {
    try {
        const file = app.vault.getAbstractFileByPath(filePath);
        if (!file || !(file instanceof TFile)) return false;
        
        const content = await app.vault.read(file);
        const cleanFragment = fragment.substring(1); // Remove #
        
        // Check for heading
        const headingRegex = new RegExp(`^#{1,6}\\s+.*${cleanFragment}.*$`, 'mi');
        if (content.match(headingRegex)) return true;
        
        // Check for block reference
        if (cleanFragment.startsWith('^')) {
            const blockId = cleanFragment.substring(1);
            return content.includes(`^${blockId}`);
        }
        
        return false;
    } catch {
        return false;
    }
};

// Validate single link
const validateLink = async (link, linkType, sourceFile) => {
    const linkInfo = {
        source: sourceFile,
        link: link.original,
        type: linkType,
        target: null,
        valid: false,
        issue: null
    };
    
    // Extract path and fragment
    let targetPath = link.path;
    let fragment = '';
    
    const fragmentIndex = targetPath.indexOf('#');
    if (fragmentIndex !== -1) {
        fragment = targetPath.substring(fragmentIndex);
        targetPath = targetPath.substring(0, fragmentIndex);
    }
    
    // Skip external links
    if (targetPath.startsWith('http://') || targetPath.startsWith('https://')) {
        results.externalLinks++;
        linkInfo.valid = true;
        linkInfo.issue = 'external';
        return linkInfo;
    }
    
    // Normalize the path
    const normalized = normalizePath(targetPath);
    
    if (normalized.isFragment) {
        // Internal fragment link
        linkInfo.target = sourceFile;
        linkInfo.valid = await validateFragment(sourceFile, normalized.path);
        if (!linkInfo.valid) {
            linkInfo.issue = 'fragment-not-found';
            results.fragmentIssues.push(linkInfo);
        }
    } else {
        linkInfo.target = normalized.path;
        
        // Check if target exists
        if (!fileExists(normalized.path)) {
            linkInfo.valid = false;
            linkInfo.issue = 'target-missing';
            results.missingTargets.add(normalized.path);
            results.brokenLinks.push(linkInfo);
        } else {
            linkInfo.valid = true;
            
            // Check fragment if present
            if (fragment) {
                const fragmentValid = await validateFragment(normalized.path, fragment);
                if (!fragmentValid) {
                    linkInfo.valid = false;
                    linkInfo.issue = 'fragment-invalid';
                    results.fragmentIssues.push(linkInfo);
                }
            }
            
            // Check for .md extension in markdown links
            if (linkType === 'markdown' && !link.original.includes('.md') && !link.original.startsWith('#')) {
                results.extensionIssues.push({
                    source: sourceFile,
                    link: link.original,
                    suggestion: link.original.replace(/(\#.*)$/, '.md$1')
                });
            }
        }
    }
    
    // Update statistics
    results.statistics.byType[linkType].total++;
    if (linkInfo.valid) {
        results.statistics.byType[linkType].valid++;
        results.validLinks++;
    }
    
    return linkInfo;
};

// Process a single file
const processFile = async (filePath) => {
    try {
        const file = app.vault.getAbstractFileByPath(filePath);
        if (!file || !(file instanceof TFile)) return;
        
        const content = await app.vault.read(file);
        const links = [];
        
        // Find all wikilinks
        const wikilinks = content.matchAll(/\[\[([^\]]+)\]\]/g);
        for (const match of wikilinks) {
            const parts = match[1].split('|');
            links.push({
                type: 'wikilinks',
                original: match[0],
                path: parts[0],
                alias: parts[1] || null
            });
        }
        
        // Find all markdown links
        const mdLinks = content.matchAll(/\[([^\]]*)\]\(([^)]+)\)/g);
        for (const match of mdLinks) {
            links.push({
                type: 'markdown',
                original: match[0],
                text: match[1],
                path: match[2]
            });
        }
        
        // Find embedded content
        const embeds = content.matchAll(/!\[\[([^\]]+)\]\]/g);
        for (const match of embeds) {
            links.push({
                type: 'embedded',
                original: match[0],
                path: match[1]
            });
        }
        
        // Validate each link
        for (const link of links) {
            results.totalLinks++;
            await validateLink(link, link.type, filePath);
        }
        
        // Track by directory
        const dir = filePath.substring(0, filePath.lastIndexOf('/')) || 'root';
        if (!results.statistics.byDirectory[dir]) {
            results.statistics.byDirectory[dir] = { files: 0, links: 0, broken: 0 };
        }
        results.statistics.byDirectory[dir].files++;
        results.statistics.byDirectory[dir].links += links.length;
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
};

// Generate broken links CSV
const generateBrokenLinksCSV = () => {
    const headers = ['Source File', 'Link Type', 'Original Link', 'Target Path', 'Issue', 'Line Number'];
    let csv = headers.join(',') + '\n';
    
    const allIssues = [
        ...results.brokenLinks,
        ...results.fragmentIssues
    ];
    
    allIssues.forEach(issue => {
        const row = [
            `"${issue.source}"`,
            issue.type,
            `"${issue.link}"`,
            `"${issue.target || 'N/A'}"`,
            issue.issue,
            'N/A' // Line number would require additional parsing
        ];
        csv += row.join(',') + '\n';
    });
    
    return csv;
};

// Generate validation report
const generateReport = () => {
    let report = `# Post-Conversion Validation Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Scope**: ${scope}\n\n`;
    
    // Summary
    report += `## Summary\n\n`;
    report += `- **Total files scanned**: ${results.totalFiles}\n`;
    report += `- **Total links found**: ${results.totalLinks}\n`;
    report += `- **Valid links**: ${results.validLinks} (${((results.validLinks/results.totalLinks)*100).toFixed(1)}%)\n`;
    report += `- **Broken links**: ${results.brokenLinks.length}\n`;
    report += `- **Fragment issues**: ${results.fragmentIssues.length}\n`;
    report += `- **Missing .md extensions**: ${results.extensionIssues.length}\n`;
    report += `- **External links**: ${results.externalLinks}\n\n`;
    
    // Link type breakdown
    report += `## Link Type Analysis\n\n`;
    report += `| Type | Total | Valid | Success Rate |\n`;
    report += `|------|-------|-------|-------------|\n`;
    
    for (const [type, stats] of Object.entries(results.statistics.byType)) {
        const rate = stats.total > 0 ? ((stats.valid/stats.total)*100).toFixed(1) : '0.0';
        report += `| ${type} | ${stats.total} | ${stats.valid} | ${rate}% |\n`;
    }
    
    // Directory breakdown
    report += `\n## Directory Analysis\n\n`;
    report += `| Directory | Files | Links | Broken |\n`;
    report += `|-----------|-------|-------|--------|\n`;
    
    const sortedDirs = Object.entries(results.statistics.byDirectory)
        .sort((a, b) => b[1].broken - a[1].broken);
    
    for (const [dir, stats] of sortedDirs) {
        const broken = results.brokenLinks.filter(l => l.source.startsWith(dir)).length;
        report += `| ${dir} | ${stats.files} | ${stats.links} | ${broken} |\n`;
    }
    
    // Critical issues
    if (results.brokenLinks.length > 0) {
        report += `\n## 🔴 Broken Links (${results.brokenLinks.length})\n\n`;
        
        // Group by source file
        const bySource = {};
        results.brokenLinks.forEach(link => {
            if (!bySource[link.source]) bySource[link.source] = [];
            bySource[link.source].push(link);
        });
        
        for (const [source, links] of Object.entries(bySource)) {
            report += `### ${source}\n`;
            links.forEach(link => {
                report += `- \`${link.link}\` → Missing: \`${link.target}\`\n`;
            });
            report += `\n`;
        }
    }
    
    // Fragment issues
    if (results.fragmentIssues.length > 0) {
        report += `\n## 🟡 Fragment Issues (${results.fragmentIssues.length})\n\n`;
        results.fragmentIssues.forEach(issue => {
            report += `- **${issue.source}**: \`${issue.link}\` - Fragment not found in target\n`;
        });
    }
    
    // Extension issues
    if (results.extensionIssues.length > 0) {
        report += `\n## 🟠 Missing .md Extensions (${results.extensionIssues.length})\n\n`;
        report += `These markdown links may not work correctly in some contexts:\n\n`;
        results.extensionIssues.forEach(issue => {
            report += `- **${issue.source}**: \`${issue.link}\`\n`;
            report += `  - Suggested: \`${issue.suggestion}\`\n`;
        });
    }
    
    // Missing targets
    if (results.missingTargets.size > 0) {
        report += `\n## 📄 Missing Target Files (${results.missingTargets.size})\n\n`;
        const sorted = Array.from(results.missingTargets).sort();
        sorted.forEach(target => {
            report += `- \`${target}\`\n`;
        });
    }
    
    // Recommendations
    report += `\n## 📋 Recommendations\n\n`;
    
    if (results.brokenLinks.length > 0) {
        report += `### Fixing Broken Links\n\n`;
        report += `1. **Review missing targets**: Check if files were moved or renamed\n`;
        report += `2. **Use search**: Find the correct paths for moved content\n`;
        report += `3. **Update or remove**: Fix links or remove if content no longer exists\n`;
        report += `4. **Consider redirects**: For moved content, consider alias/redirect notes\n\n`;
    }
    
    if (results.fragmentIssues.length > 0) {
        report += `### Fixing Fragment Issues\n\n`;
        report += `1. **Verify headings**: Ensure target headings match exactly (case-sensitive)\n`;
        report += `2. **Check block IDs**: Verify ^block-id references are present in targets\n`;
        report += `3. **Update fragments**: Correct spelling or formatting of heading references\n\n`;
    }
    
    if (results.extensionIssues.length > 0) {
        report += `### Adding Missing Extensions\n\n`;
        report += `Run a find/replace to add .md extensions to internal markdown links.\n\n`;
    }
    
    // Next steps
    report += `## Next Steps\n\n`;
    report += `1. Review the broken links CSV: \`${brokenLinksCSV}\`\n`;
    report += `2. Address critical broken links first\n`;
    report += `3. Run fragment validation on high-traffic pages\n`;
    report += `4. Test in your publishing pipeline\n`;
    report += `5. Re-run validation after fixes\n`;
    
    return report;
};

// Main execution
try {
    let targetFiles = [];
    
    // Get files based on scope
    if (scope === "Full Vault") {
        targetFiles = app.vault.getMarkdownFiles()
            .filter(f => !f.path.startsWith('tools/templates/'))
            .map(f => f.path);
            
    } else if (scope === "Specific Directory") {
        const dir = await tp.system.prompt("Enter directory path:");
        targetFiles = app.vault.getMarkdownFiles()
            .filter(f => f.path.startsWith(dir))
            .map(f => f.path);
            
    } else if (scope === "Single File") {
        const filePath = await tp.system.prompt("Enter file path:");
        if (filePath) targetFiles = [filePath];
        
    } else if (scope === "High-Risk Files Only") {
        // Read from high-risk files list if it exists
        const highRiskPath = `${OUTPUT_DIR}/10-high-risk-files.md`;
        if (await app.vault.adapter.exists(highRiskPath)) {
            const content = await app.vault.adapter.read(highRiskPath);
            // Extract file paths from the document
            const matches = content.matchAll(/- \[\[(.*?)\]\]/g);
            for (const match of matches) {
                targetFiles.push(match[1]);
            }
        }
    }
    
    if (targetFiles.length === 0) {
        throw new Error("No files selected for validation");
    }
    
    // Process files
    const notice = new Notice(`Validating ${targetFiles.length} files...`, 0);
    
    for (let i = 0; i < targetFiles.length; i++) {
        if (i % 10 === 0) {
            notice.setMessage(`Validating ${i + 1}/${targetFiles.length} files...`);
        }
        await processFile(targetFiles[i]);
        results.totalFiles++;
        
        // Update directory broken count
        const dir = targetFiles[i].substring(0, targetFiles[i].lastIndexOf('/')) || 'root';
        if (results.statistics.byDirectory[dir]) {
            const brokenInFile = results.brokenLinks.filter(l => l.source === targetFiles[i]).length;
            results.statistics.byDirectory[dir].broken += brokenInFile;
        }
    }
    
    notice.hide();
    
    // Generate outputs
    const report = generateReport();
    await app.vault.adapter.write(`${OUTPUT_DIR}/${resultsFile}`, report);
    
    if (results.brokenLinks.length > 0 || results.fragmentIssues.length > 0) {
        const csv = generateBrokenLinksCSV();
        await app.vault.adapter.write(`${OUTPUT_DIR}/${brokenLinksCSV}`, csv);
    }
    
    // Generate missing targets list
    if (results.missingTargets.size > 0) {
        let missingList = `# Missing Target Files\n\n`;
        missingList += `Found ${results.missingTargets.size} unique missing targets:\n\n`;
        
        const sorted = Array.from(results.missingTargets).sort();
        sorted.forEach(target => {
            missingList += `- [ ] \`${target}\`\n`;
        });
        
        await app.vault.adapter.write(`${OUTPUT_DIR}/${missingTargetsFile}`, missingList);
    }
    
    // Display results
    tR += `## Validation Complete\n\n`;
    tR += `- **Files validated**: ${results.totalFiles}\n`;
    tR += `- **Total links checked**: ${results.totalLinks}\n`;
    tR += `- **Valid links**: ${results.validLinks} ✅\n`;
    tR += `- **Issues found**: ${results.brokenLinks.length + results.fragmentIssues.length} ⚠️\n\n`;
    
    tR += `### 📁 Generated Reports\n\n`;
    tR += `- Main report: \`${OUTPUT_DIR}/${resultsFile}\`\n`;
    
    if (results.brokenLinks.length > 0) {
        tR += `- Broken links CSV: \`${OUTPUT_DIR}/${brokenLinksCSV}\`\n`;
    }
    
    if (results.missingTargets.size > 0) {
        tR += `- Missing targets: \`${OUTPUT_DIR}/${missingTargetsFile}\`\n`;
    }
    
    const issueCount = results.brokenLinks.length + results.fragmentIssues.length + results.extensionIssues.length;
    if (issueCount > 0) {
        new Notice(`Validation complete: ${issueCount} issues found. See report for details.`, 5000);
    } else {
        new Notice(`Validation complete: All links are valid! 🎉`, 5000);
    }
    
} catch (error) {
    console.error("Validation error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Validation error: ${error.message}`, 5000);
}
%>

---

*Template: T09-Post-Conversion-Validator*
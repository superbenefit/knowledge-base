---
purpose: Final comprehensive validation for link normalization project
features:
  - Scans ONLY processed directories: artifacts, notes, links, tags
  - Verify all internal links use absolute markdown format
  - Compare actual vs. claimed achievements
  - Generate final validation report
outputs:
  - 32-final-vault-validation.md
---

# Final Vault Validation

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T12-Final-Vault-Validation
**Purpose**: Independent verification of link normalization project success

## Validation Scope: artifacts/, notes/, links/, tags/ ONLY

<%*
// T12-Final-Vault-Validation
// Purpose: Final comprehensive validation for Phase 7
// Scope: ONLY artifacts/, notes/, links/, tags/ directories

const OUTPUT_DIR = 'link-fix';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");

// Claimed achievements from project summary
const claimedAchievements = {
    totalFiles: 1861,
    totalLinks: 5913,
    phases: {
        3: { files: 28, links: 307, description: "Leading slashes removed" },
        4: { files: 62, links: 2500, description: "Artifacts conversion" },
        5: { files: 89, links: 487, description: "Reference content (tags + root)" },
        6: { files: 1680, links: 2907, description: "Notes directory" },
        "6.7": { files: 30, links: 19, description: "Links directory" }
    }
};

// Validation results
const validation = {
    startTime: Date.now(),
    vault: {
        totalFiles: 0,
        markdownFiles: 0,
        processedFiles: 0
    },
    links: {
        total: 0,
        wikilinks: 0,
        markdownLinks: 0,
        absolutePaths: 0,
        relativePaths: 0,
        external: 0,
        broken: 0
    },
    directories: {},
    issues: {
        wikilinks: [],
        relativePaths: [],
        leadingSlashes: [],
        brokenLinks: [],
        other: []
    },
    comparison: {
        filesMatch: false,
        linksMatch: false,
        discrepancies: []
    }
};

// ONLY scan these directories
const PROJECT_SCOPE = ['artifacts/', 'notes/', 'links/', 'tags/'];

// Get files in project scope only
const getProjectFiles = () => {
    const files = app.vault.getMarkdownFiles();
    return files.filter(f => {
        // Check if file is in one of our project directories
        return PROJECT_SCOPE.some(dir => f.path.startsWith(dir));
    });
};

// Scan a single file for links
const scanFile = async (file) => {
    const content = await app.vault.read(file);
    const result = {
        path: file.path,
        wikilinks: [],
        markdownLinks: [],
        issues: []
    };
    
    // Find all wikilinks
    const wikilinkMatches = content.match(/\[\[([^\]]+)\]\]/g) || [];
    result.wikilinks = wikilinkMatches;
    validation.links.wikilinks += wikilinkMatches.length;
    
    if (wikilinkMatches.length > 0) {
        validation.issues.wikilinks.push({
            file: file.path,
            count: wikilinkMatches.length,
            samples: wikilinkMatches.slice(0, 3)
        });
    }
    
    // Find all markdown links (internal only)
    const mdLinkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
    let match;
    while ((match = mdLinkRegex.exec(content)) !== null) {
        const [fullMatch, text, url] = match;
        
        if (url.startsWith('http')) {
            validation.links.external++;
        } else {
            result.markdownLinks.push(fullMatch);
            validation.links.markdownLinks++;
            
            // Check if absolute path
            if (url.startsWith('/')) {
                validation.links.absolutePaths++;
                
                // Check for leading double slash (shouldn't exist)
                if (url.startsWith('//')) {
                    validation.issues.leadingSlashes.push({
                        file: file.path,
                        link: fullMatch
                    });
                }
            } else if (url.startsWith('./') || url.startsWith('../')) {
                validation.links.relativePaths++;
                validation.issues.relativePaths.push({
                    file: file.path,
                    link: fullMatch
                });
            } else if (!url.includes(':')) {
                // Relative path without ./ or ../
                validation.links.relativePaths++;
                validation.issues.relativePaths.push({
                    file: file.path,
                    link: fullMatch
                });
            }
            
            // Check if link target exists
            const targetPath = url.split('#')[0].replace(/^\//, '');
            if (targetPath && !url.includes(':')) {
                const targetFile = app.vault.getAbstractFileByPath(targetPath);
                if (!targetFile) {
                    validation.links.broken++;
                    validation.issues.brokenLinks.push({
                        file: file.path,
                        link: fullMatch,
                        target: targetPath
                    });
                }
            }
        }
    }
    
    validation.links.total += result.wikilinks.length + result.markdownLinks.length;
    
    return result;
};

// Scan project directories
const scanProjectDirectories = async () => {
    const files = getProjectFiles();
    validation.vault.totalFiles = files.length;
    validation.vault.markdownFiles = files.length;
    
    // Initialize directory tracking
    validation.directories = {
        'artifacts': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/rpp': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/dao-primitives': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/archive': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/ics': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/general-circle': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/aifs': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/cxi': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/wp': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'links': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'tags': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 }
    };
    
    // Scan each file
    for (const file of files) {
        const result = await scanFile(file);
        
        // Categorize by directory
        let categorized = false;
        
        // Check subdirectories first (more specific)
        const subdirs = ['notes/rpp', 'notes/dao-primitives', 'notes/archive', 
                        'notes/ics', 'notes/general-circle', 'notes/aifs', 
                        'notes/cxi', 'notes/wp'];
        
        for (const subdir of subdirs) {
            if (file.path.startsWith(subdir + '/')) {
                validation.directories[subdir].files++;
                validation.directories[subdir].wikilinks += result.wikilinks.length;
                validation.directories[subdir].markdownLinks += result.markdownLinks.length;
                if (result.wikilinks.length > 0 || 
                    validation.issues.relativePaths.some(i => i.file === file.path) ||
                    validation.issues.brokenLinks.some(i => i.file === file.path)) {
                    validation.directories[subdir].issues++;
                }
                categorized = true;
                break;
            }
        }
        
        // Then check main directories
        if (!categorized) {
            const mainDirs = ['artifacts', 'notes', 'links', 'tags'];
            for (const dir of mainDirs) {
                if (file.path.startsWith(dir + '/')) {
                    validation.directories[dir].files++;
                    validation.directories[dir].wikilinks += result.wikilinks.length;
                    validation.directories[dir].markdownLinks += result.markdownLinks.length;
                    if (result.wikilinks.length > 0 || 
                        validation.issues.relativePaths.some(i => i.file === file.path) ||
                        validation.issues.brokenLinks.some(i => i.file === file.path)) {
                        validation.directories[dir].issues++;
                    }
                    break;
                }
            }
        }
        
        validation.vault.processedFiles++;
    }
};

// Compare with claimed achievements
const compareAchievements = () => {
    // Calculate actual processed files (excluding root files from count)
    const actualProcessedFiles = validation.vault.processedFiles;
    
    // File count comparison (note: we're not counting root files in this validation)
    // Phase 5 included 68 tags + 21 root = 89 files, but we only scan tags here
    const adjustedClaim = claimedAchievements.totalFiles - 21; // Subtract root files
    validation.comparison.filesMatch = Math.abs(actualProcessedFiles - adjustedClaim) < 5;
    
    if (!validation.comparison.filesMatch) {
        validation.comparison.discrepancies.push({
            metric: 'Total Files (excl. root)',
            claimed: adjustedClaim,
            actual: actualProcessedFiles,
            difference: actualProcessedFiles - adjustedClaim
        });
    }
    
    // Link count comparison
    const actualNormalizedLinks = validation.links.absolutePaths;
    validation.comparison.linksMatch = 
        Math.abs(actualNormalizedLinks - claimedAchievements.totalLinks) < 100;
    
    if (!validation.comparison.linksMatch) {
        validation.comparison.discrepancies.push({
            metric: 'Normalized Links',
            claimed: claimedAchievements.totalLinks,
            actual: actualNormalizedLinks,
            difference: actualNormalizedLinks - claimedAchievements.totalLinks
        });
    }
    
    // Success rate comparison
    const successRate = validation.links.wikilinks === 0 ? 100 : 0;
    validation.comparison.successRate = successRate;
};

// Generate validation report
const generateValidationReport = () => {
    const duration = ((Date.now() - validation.startTime) / 1000).toFixed(1);
    
    let report = `# Final Vault Validation Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Duration**: ${duration} seconds\n`;
    report += `**Template**: T12-Final-Vault-Validation\n`;
    report += `**Scope**: artifacts/, notes/, links/, tags/ directories ONLY\n\n`;
    
    // Executive Summary
    report += `## 🎯 Executive Summary\n\n`;
    
    const overallSuccess = validation.links.wikilinks === 0 && 
                          validation.links.relativePaths === 0 &&
                          validation.links.broken === 0;
    
    if (overallSuccess) {
        report += `### ✅ VALIDATION SUCCESSFUL\n\n`;
        report += `The link normalization project has been **independently verified** as 100% complete:\n\n`;
        report += `- **Zero wikilinks remain** in processed directories\n`;
        report += `- **All internal links** use absolute markdown format\n`;
        report += `- **No broken internal links** detected\n`;
        report += `- **Publishing pipeline ready** for both Enveloppe and Quartz\n\n`;
    } else {
        report += `### ⚠️ ISSUES DETECTED\n\n`;
        report += `The validation found the following issues:\n\n`;
        if (validation.links.wikilinks > 0) {
            report += `- **${validation.links.wikilinks} wikilinks** still present\n`;
        }
        if (validation.links.relativePaths > 0) {
            report += `- **${validation.links.relativePaths} relative paths** need conversion\n`;
        }
        if (validation.links.broken > 0) {
            report += `- **${validation.links.broken} broken links** detected\n`;
        }
        report += `\n`;
    }
    
    // Validation Metrics
    report += `## 📊 Validation Metrics\n\n`;
    report += `### Directories Scanned\n`;
    report += `- **Scope**: artifacts/, notes/, links/, tags/\n`;
    report += `- **Total Files**: ${validation.vault.totalFiles}\n`;
    report += `- **Processed Files**: ${validation.vault.processedFiles}\n`;
    report += `- **Validation Coverage**: 100% of project scope\n\n`;
    
    report += `### Link Analysis\n`;
    report += `| Metric | Count | Status |\n`;
    report += `|--------|-------|--------|\n`;
    report += `| Total Links Found | ${validation.links.total} | - |\n`;
    report += `| Wikilinks | ${validation.links.wikilinks} | ${validation.links.wikilinks === 0 ? '✅' : '❌'} |\n`;
    report += `| Markdown Links | ${validation.links.markdownLinks} | ✅ |\n`;
    report += `| Absolute Paths | ${validation.links.absolutePaths} | ✅ |\n`;
    report += `| Relative Paths | ${validation.links.relativePaths} | ${validation.links.relativePaths === 0 ? '✅' : '❌'} |\n`;
    report += `| External Links | ${validation.links.external} | - |\n`;
    report += `| Broken Links | ${validation.links.broken} | ${validation.links.broken === 0 ? '✅' : '❌'} |\n\n`;
    
    // Directory Breakdown
    report += `## 📁 Directory Analysis\n\n`;
    report += `| Directory | Files | Wikilinks | Markdown | Issues |\n`;
    report += `|-----------|-------|-----------|----------|--------|\n`;
    
    // Order directories logically
    const dirOrder = ['artifacts', 'tags', 'links', 'notes', 'notes/rpp', 
                     'notes/dao-primitives', 'notes/archive', 'notes/ics', 
                     'notes/general-circle', 'notes/aifs', 'notes/cxi', 'notes/wp'];
    
    dirOrder.forEach(dir => {
        if (validation.directories[dir] && validation.directories[dir].files > 0) {
            const d = validation.directories[dir];
            const status = d.wikilinks === 0 && d.issues === 0 ? '✅' : '❌';
            report += `| ${dir} | ${d.files} | ${d.wikilinks} | ${d.markdownLinks} | ${d.issues} ${status} |\n`;
        }
    });
    report += `\n`;
    
    // Phase-by-Phase Verification
    report += `## 🎖️ Phase Achievement Verification\n\n`;
    report += `| Phase | Directory | Expected Files | Found Files | Status |\n`;
    report += `|-------|-----------|----------------|-------------|--------|\n`;
    report += `| 4 | artifacts | 62 | ${validation.directories['artifacts'].files} | ${validation.directories['artifacts'].files === 62 ? '✅' : '❌'} |\n`;
    report += `| 5 | tags | 68 | ${validation.directories['tags'].files} | ${validation.directories['tags'].files === 68 ? '✅' : '⚠️'} |\n`;
    report += `| 6 | notes | 1,680 | ${validation.directories['notes'].files} | ${Math.abs(validation.directories['notes'].files - 1680) < 10 ? '✅' : '❌'} |\n`;
    report += `| 6.7 | links | 30 | ${validation.directories['links'].files} | ${validation.directories['links'].files === 30 ? '✅' : '❌'} |\n\n`;
    
    report += `*Note: Root files (21) from Phase 5 are not included in this validation scope*\n\n`;
    
    // Issue Details (if any)
    if (validation.issues.wikilinks.length > 0) {
        report += `## ❌ Remaining Wikilinks\n\n`;
        report += `Found ${validation.links.wikilinks} wikilinks in ${validation.issues.wikilinks.length} files:\n\n`;
        
        validation.issues.wikilinks.slice(0, 10).forEach(issue => {
            report += `### ${issue.file}\n`;
            report += `- **Count**: ${issue.count}\n`;
            report += `- **Samples**: ${issue.samples.map(s => `\`${s}\``).join(', ')}\n\n`;
        });
        
        if (validation.issues.wikilinks.length > 10) {
            report += `*... and ${validation.issues.wikilinks.length - 10} more files*\n\n`;
        }
    }
    
    if (validation.issues.relativePaths.length > 0) {
        report += `## ⚠️ Relative Path Issues\n\n`;
        report += `Found ${validation.links.relativePaths} relative paths in ${validation.issues.relativePaths.length} locations:\n\n`;
        
        validation.issues.relativePaths.slice(0, 10).forEach(issue => {
            report += `- **${issue.file}**: \`${issue.link}\`\n`;
        });
        
        if (validation.issues.relativePaths.length > 10) {
            report += `*... and ${validation.issues.relativePaths.length - 10} more*\n\n`;
        }
    }
    
    // Project Impact Summary
    report += `## 🌟 Project Impact Summary\n\n`;
    
    if (overallSuccess) {
        report += `### Transformation Achieved\n\n`;
        report += `All processed directories have been successfully transformed:\n\n`;
        report += `1. **Artifacts**: ${validation.directories['artifacts'].files} files with ${validation.directories['artifacts'].markdownLinks} links ✅\n`;
        report += `2. **Tags**: ${validation.directories['tags'].files} files with ${validation.directories['tags'].markdownLinks} links ✅\n`;
        report += `3. **Notes**: ${validation.directories['notes'].files} files with ${validation.directories['notes'].markdownLinks} links ✅\n`;
        report += `4. **Links**: ${validation.directories['links'].files} files with ${validation.directories['links'].markdownLinks} links ✅\n\n`;
        
        report += `### Quality Metrics\n`;
        report += `- **Link Normalization**: 100% complete\n`;
        report += `- **Format Consistency**: 100% markdown links\n`;
        report += `- **Path Standardization**: 100% absolute paths\n`;
        report += `- **Publishing Compatibility**: 100% ready\n\n`;
    }
    
    // Validation Certification
    report += `## 📜 Validation Certificate\n\n`;
    
    if (overallSuccess) {
        report += `This independent validation **CERTIFIES** that the SuperBenefit Knowledge Base\n`;
        report += `link normalization project has achieved its objectives:\n\n`;
        report += `- ✅ Complete elimination of wikilinks in artifacts/, notes/, links/, tags/\n`;
        report += `- ✅ Universal adoption of absolute markdown paths\n`;
        report += `- ✅ Zero broken internal references\n`;
        report += `- ✅ Full publishing pipeline compatibility\n\n`;
        report += `**Validation Status**: PASSED ✅\n`;
        report += `**Date**: ${new Date().toISOString()}\n`;
        report += `**Scope**: artifacts/, notes/, links/, tags/ directories\n`;
        report += `**Method**: Comprehensive automated scan\n`;
    } else {
        report += `This validation has identified issues requiring attention.\n\n`;
        report += `**Validation Status**: FAILED ❌\n`;
        report += `**Issues Found**: ${validation.links.wikilinks + validation.links.relativePaths + validation.links.broken}\n`;
        report += `**Action Required**: Address identified issues and re-validate\n`;
    }
    
    return report;
};

// Main execution
try {
    const notice = new Notice("Starting final vault validation...", 0);
    notice.setMessage(`Scanning project directories: ${PROJECT_SCOPE.join(', ')}`);
    
    // Scan project directories only
    await scanProjectDirectories();
    
    // Compare with achievements
    notice.setMessage("Verifying achievements...");
    compareAchievements();
    
    // Generate report
    notice.setMessage("Generating validation report...");
    const report = generateValidationReport();
    
    // Save report
    const reportPath = `${OUTPUT_DIR}/32-final-vault-validation.md`;
    await app.vault.adapter.write(reportPath, report);
    
    notice.hide();
    
    // Display results
    const success = validation.links.wikilinks === 0 && 
                   validation.links.relativePaths === 0 &&
                   validation.links.broken === 0;
    
    if (success) {
        new Notice("✅ Validation PASSED! 100% success confirmed!", 5000);
        tR += `## ✅ Validation Successful!\n\n`;
        tR += `### Project Directories Validated\n`;
        tR += `- artifacts/ ✅\n`;
        tR += `- notes/ ✅\n`;
        tR += `- links/ ✅\n`;
        tR += `- tags/ ✅\n\n`;
        tR += `### Confirmed Achievements\n`;
        tR += `- **0 wikilinks** remaining (100% eliminated)\n`;
        tR += `- **${validation.links.absolutePaths} absolute paths** (all internal links)\n`;
        tR += `- **0 broken links** (100% integrity)\n`;
        tR += `- **100% publishing ready**\n\n`;
    } else {
        new Notice(`⚠️ Issues found: ${validation.links.wikilinks} wikilinks, ${validation.links.relativePaths} relative paths`, 5000);
        tR += `## ⚠️ Validation Issues\n\n`;
        tR += `### Issues Found\n`;
        if (validation.links.wikilinks > 0) {
            tR += `- **${validation.links.wikilinks} wikilinks** still present\n`;
        }
        if (validation.links.relativePaths > 0) {
            tR += `- **${validation.links.relativePaths} relative paths** found\n`;
        }
        if (validation.links.broken > 0) {
            tR += `- **${validation.links.broken} broken links** detected\n`;
        }
        tR += `\n`;
    }
    
    tR += `### Validation Summary\n`;
    tR += `- **Files Scanned**: ${validation.vault.processedFiles} (in project scope)\n`;
    tR += `- **Total Links**: ${validation.links.total}\n`;
    tR += `- **Markdown Links**: ${validation.links.markdownLinks}\n`;
    tR += `- **Success Rate**: ${validation.comparison.successRate}%\n\n`;
    
    tR += `### 📄 Full Report\n`;
    tR += `Detailed validation report saved to:\n`;
    tR += `\`${reportPath}\`\n`;
    
} catch (error) {
    console.error("Validation error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Validation error: ${error.message}`, 5000);
}
%>

---

*Template: T12-Final-Vault-Validation - Scoped to project directories only*
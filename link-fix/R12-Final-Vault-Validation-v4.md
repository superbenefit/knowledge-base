---
purpose: Final comprehensive validation for link normalization project
features:
  - Scans ONLY processed directories: artifacts, notes, links, tags
  - IGNORES all archive directories
  - Verifies Obsidian absolute paths (NO leading slashes)
  - Compare actual vs. claimed achievements
outputs:
  - 32-final-vault-validation.md
---

# Final Vault Validation

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T12-Final-Vault-Validation (v4 - Ignoring Archives)
**Purpose**: Verify links outside of archive directories

## Validation Scope

<%*
// T12-Final-Vault-Validation v4 - Ignoring all archives
// Obsidian absolute paths do NOT have leading slashes
// Correct: [text](artifacts/file.md)
// Wrong: [text](/artifacts/file.md)

const OUTPUT_DIR = 'link-fix';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");

// Validation results
const validation = {
    startTime: Date.now(),
    vault: {
        totalFiles: 0,
        markdownFiles: 0,
        processedFiles: 0,
        excludedFiles: 0
    },
    links: {
        total: 0,
        wikilinks: 0,
        markdownLinks: 0,
        correctPaths: 0,  
        leadingSlashPaths: 0,  
        relativePaths: 0,
        external: 0,
        broken: 0
    },
    directories: {},
    issues: {
        wikilinks: [],
        leadingSlashPaths: [],
        relativePaths: [],
        brokenLinks: [],
        other: []
    }
};

// ONLY scan these directories
const PROJECT_SCOPE = ['artifacts/', 'notes/', 'links/', 'tags/'];

// EXCLUDE these directories (expanded to include all archives)
const EXCLUDED_DIRS = [
    'notes/general-circle/',
    'notes/archive/',
    'notes/wp/',
    'notes/dao-primitives/primitives-archive/',
    'notes/rpp/rpp-archive/',
    'notes/ics/ccc/archive/',
    '/archive/',  // Any path containing archive
    '-archive/'   // Any path containing -archive
];

// Get files in project scope only
const getProjectFiles = () => {
    const files = app.vault.getMarkdownFiles();
    const included = [];
    
    files.forEach(f => {
        // Check if file should be excluded
        let exclude = false;
        
        // Check against excluded directories
        for (const excludeDir of EXCLUDED_DIRS) {
            if (f.path.includes(excludeDir)) {
                exclude = true;
                validation.vault.excludedFiles++;
                break;
            }
        }
        
        // Check if in project scope
        if (!exclude) {
            const inScope = PROJECT_SCOPE.some(dir => f.path.startsWith(dir));
            if (inScope) {
                included.push(f);
            }
        }
    });
    
    return included;
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
            
            // Check path format
            if (url.startsWith('/')) {
                // Leading slash = INCORRECT for Obsidian/Enveloppe
                validation.links.leadingSlashPaths++;
                validation.issues.leadingSlashPaths.push({
                    file: file.path,
                    link: fullMatch,
                    issue: 'Leading slash will cause Enveloppe issues'
                });
            } else if (url.startsWith('./') || url.startsWith('../')) {
                // Relative paths with ./ or ../
                validation.links.relativePaths++;
                validation.issues.relativePaths.push({
                    file: file.path,
                    link: fullMatch
                });
            } else if (!url.includes(':') && !url.startsWith('#')) {
                // This is a correct Obsidian absolute path (no leading slash)
                validation.links.correctPaths++;
                
                // Check if link target exists (but skip if it's in an excluded directory)
                const targetPath = url.split('#')[0];
                let targetExcluded = false;
                
                for (const excludeDir of EXCLUDED_DIRS) {
                    if (targetPath.includes(excludeDir)) {
                        targetExcluded = true;
                        break;
                    }
                }
                
                if (!targetExcluded && targetPath) {
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
        'notes/ics': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/aifs': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'notes/cxi': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'links': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 },
        'tags': { files: 0, wikilinks: 0, markdownLinks: 0, issues: 0 }
    };
    
    // Scan each file
    for (const file of files) {
        const result = await scanFile(file);
        
        // Categorize by directory
        let categorized = false;
        
        // Check subdirectories first (more specific)
        const subdirs = ['notes/rpp', 'notes/dao-primitives', 'notes/ics', 
                        'notes/aifs', 'notes/cxi'];
        
        for (const subdir of subdirs) {
            if (file.path.startsWith(subdir + '/')) {
                validation.directories[subdir].files++;
                validation.directories[subdir].wikilinks += result.wikilinks.length;
                validation.directories[subdir].markdownLinks += result.markdownLinks.length;
                if (result.wikilinks.length > 0 || 
                    validation.issues.leadingSlashPaths.some(i => i.file === file.path) ||
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
                        validation.issues.leadingSlashPaths.some(i => i.file === file.path) ||
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

// Generate validation report
const generateValidationReport = () => {
    const duration = ((Date.now() - validation.startTime) / 1000).toFixed(1);
    
    let report = `# Final Vault Validation Report (v4 - Excluding Archives)\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Duration**: ${duration} seconds\n`;
    report += `**Template**: T12-Final-Vault-Validation v4\n`;
    report += `**Scope**: artifacts/, notes/, links/, tags/ (excluding ALL archive directories)\n\n`;
    
    report += `## ⚠️ IMPORTANT: Archive Exclusion\n\n`;
    report += `This validation EXCLUDES all archive directories:\n`;
    EXCLUDED_DIRS.forEach(dir => {
        report += `- ${dir}\n`;
    });
    report += `\n**Files Excluded**: ${validation.vault.excludedFiles}\n\n`;
    
    // Executive Summary
    report += `## 🎯 Executive Summary\n\n`;
    
    const overallSuccess = validation.links.wikilinks === 0 && 
                          validation.links.leadingSlashPaths === 0 &&
                          validation.links.relativePaths === 0 &&
                          validation.links.broken === 0;
    
    if (overallSuccess) {
        report += `### ✅ VALIDATION SUCCESSFUL\n\n`;
        report += `The link normalization project has been **verified** as complete:\n\n`;
        report += `- **Zero wikilinks remain** in non-archive directories\n`;
        report += `- **All internal links** use correct Obsidian absolute format\n`;
        report += `- **No broken internal links** to non-archive content\n`;
        report += `- **Publishing pipeline ready** for active content\n\n`;
    } else {
        report += `### ⚠️ ISSUES DETECTED\n\n`;
        report += `The validation found the following issues:\n\n`;
        if (validation.links.wikilinks > 0) {
            report += `- **${validation.links.wikilinks} wikilinks** still present\n`;
        }
        if (validation.links.leadingSlashPaths > 0) {
            report += `- **${validation.links.leadingSlashPaths} paths with leading slashes**\n`;
        }
        if (validation.links.relativePaths > 0) {
            report += `- **${validation.links.relativePaths} relative paths** found\n`;
        }
        if (validation.links.broken > 0) {
            report += `- **${validation.links.broken} broken links** (excluding archive targets)\n`;
        }
        report += `\n`;
    }
    
    // Validation Metrics
    report += `## 📊 Validation Metrics\n\n`;
    report += `### Files Scanned\n`;
    report += `- **Total Files**: ${validation.vault.totalFiles} (excluding archives)\n`;
    report += `- **Processed Files**: ${validation.vault.processedFiles}\n`;
    report += `- **Excluded Files**: ${validation.vault.excludedFiles}\n\n`;
    
    report += `### Link Analysis\n`;
    report += `| Metric | Count | Status |\n`;
    report += `|--------|-------|--------|\n`;
    report += `| Total Links Found | ${validation.links.total} | - |\n`;
    report += `| Wikilinks | ${validation.links.wikilinks} | ${validation.links.wikilinks === 0 ? '✅' : '❌'} |\n`;
    report += `| Markdown Links | ${validation.links.markdownLinks} | ✅ |\n`;
    report += `| Correct Obsidian Paths | ${validation.links.correctPaths} | ✅ |\n`;
    report += `| Paths with Leading Slash | ${validation.links.leadingSlashPaths} | ${validation.links.leadingSlashPaths === 0 ? '✅' : '❌'} |\n`;
    report += `| Relative Paths | ${validation.links.relativePaths} | ${validation.links.relativePaths === 0 ? '✅' : '❌'} |\n`;
    report += `| External Links | ${validation.links.external} | - |\n`;
    report += `| Broken Links | ${validation.links.broken} | ${validation.links.broken === 0 ? '✅' : '❌'} |\n\n`;
    
    // Directory Breakdown
    report += `## 📁 Directory Analysis\n\n`;
    report += `| Directory | Files | Wikilinks | Markdown | Issues |\n`;
    report += `|-----------|-------|-----------|----------|--------|\n`;
    
    const dirOrder = ['artifacts', 'tags', 'links', 'notes', 'notes/rpp', 
                     'notes/dao-primitives', 'notes/ics', 'notes/aifs', 'notes/cxi'];
    
    dirOrder.forEach(dir => {
        if (validation.directories[dir] && validation.directories[dir].files > 0) {
            const d = validation.directories[dir];
            const status = d.wikilinks === 0 && d.issues === 0 ? '✅' : '❌';
            report += `| ${dir} | ${d.files} | ${d.wikilinks} | ${d.markdownLinks} | ${d.issues} ${status} |\n`;
        }
    });
    report += `\n`;
    
    // Issue Details (limited to top 10 of each type)
    if (validation.issues.leadingSlashPaths.length > 0) {
        report += `## ❌ Paths with Leading Slashes\n\n`;
        report += `Found ${validation.links.leadingSlashPaths} paths with leading slashes:\n\n`;
        
        validation.issues.leadingSlashPaths.slice(0, 10).forEach(issue => {
            report += `- **${issue.file}**: \`${issue.link}\`\n`;
        });
        
        if (validation.issues.leadingSlashPaths.length > 10) {
            report += `*... and ${validation.issues.leadingSlashPaths.length - 10} more*\n`;
        }
        report += `\n`;
    }
    
    if (validation.issues.wikilinks.length > 0) {
        report += `## ❌ Remaining Wikilinks\n\n`;
        report += `Found ${validation.links.wikilinks} wikilinks in ${validation.issues.wikilinks.length} files:\n\n`;
        
        validation.issues.wikilinks.slice(0, 5).forEach(issue => {
            report += `### ${issue.file}\n`;
            report += `- **Count**: ${issue.count}\n`;
            report += `- **Samples**: ${issue.samples.map(s => `\`${s}\``).join(', ')}\n\n`;
        });
        
        if (validation.issues.wikilinks.length > 5) {
            report += `*... and ${validation.issues.wikilinks.length - 5} more files*\n\n`;
        }
    }
    
    // Validation Summary
    report += `## 📜 Validation Summary\n\n`;
    
    if (overallSuccess) {
        report += `### ✅ ACTIVE CONTENT VALIDATED\n\n`;
        report += `All non-archive content meets link normalization standards:\n`;
        report += `- No wikilinks in active content\n`;
        report += `- Correct Obsidian path format (no leading slashes)\n`;
        report += `- Publishing-ready for Enveloppe\n\n`;
        report += `**Status**: PASSED ✅\n`;
    } else {
        report += `### ❌ ISSUES IN ACTIVE CONTENT\n\n`;
        const totalIssues = validation.links.wikilinks + 
                           validation.links.leadingSlashPaths + 
                           validation.links.relativePaths;
        report += `**Issues Found**: ${totalIssues} (excluding archives)\n`;
        report += `**Status**: NEEDS ATTENTION ❌\n`;
    }
    
    return report;
};

// Main execution
try {
    const notice = new Notice("Validating non-archive content...", 0);
    notice.setMessage(`Scanning active directories only...`);
    
    // Scan project directories only
    await scanProjectDirectories();
    
    // Generate report
    notice.setMessage("Generating validation report...");
    const report = generateValidationReport();
    
    // Save report
    const reportPath = `${OUTPUT_DIR}/32-final-vault-validation.md`;
    await app.vault.adapter.write(reportPath, report);
    
    notice.hide();
    
    // Display results
    const success = validation.links.wikilinks === 0 && 
                   validation.links.leadingSlashPaths === 0 &&
                   validation.links.relativePaths === 0 &&
                   validation.links.broken === 0;
    
    if (success) {
        new Notice("✅ Validation PASSED! Active content is clean!", 5000);
        tR += `## ✅ Validation Successful!\n\n`;
        tR += `### Active Content Validated\n`;
        tR += `All non-archive content meets standards:\n`;
        tR += `- **0 wikilinks** remaining\n`;
        tR += `- **0 leading slash paths**\n`;
        tR += `- **${validation.links.correctPaths} correct paths**\n`;
        tR += `- **Files excluded**: ${validation.vault.excludedFiles}\n\n`;
    } else {
        new Notice(`⚠️ Issues found in active content`, 5000);
        tR += `## ⚠️ Validation Issues\n\n`;
        tR += `### Issues in Active Content\n`;
        if (validation.links.wikilinks > 0) {
            tR += `- **${validation.links.wikilinks} wikilinks** found\n`;
        }
        if (validation.links.leadingSlashPaths > 0) {
            tR += `- **${validation.links.leadingSlashPaths} paths with leading slashes**\n`;
        }
        if (validation.links.relativePaths > 0) {
            tR += `- **${validation.links.relativePaths} relative paths**\n`;
        }
        if (validation.links.broken > 0) {
            tR += `- **${validation.links.broken} broken links** (excluding archive targets)\n`;
        }
        tR += `\n`;
    }
    
    tR += `### Summary\n`;
    tR += `- **Active Files**: ${validation.vault.processedFiles}\n`;
    tR += `- **Excluded Files**: ${validation.vault.excludedFiles}\n`;
    tR += `- **Total Links**: ${validation.links.total}\n`;
    tR += `- **Correct Format**: ${validation.links.correctPaths}\n\n`;
    
    tR += `### 📄 Full Report\n`;
    tR += `Validation report saved to:\n`;
    tR += `\`${reportPath}\`\n`;
    
} catch (error) {
    console.error("Validation error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Validation error: ${error.message}`, 5000);
}
%>

---

*Template: T12-Final-Vault-Validation v4 - Excludes all archive directories*
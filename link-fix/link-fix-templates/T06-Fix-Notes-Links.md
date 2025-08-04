<%*
// T06-Fix-Notes-Links.md
// Configurable batch processor for /notes/ directory or subdirectories
// Handles: angle brackets, relative paths, Obsidian URIs, anchor spaces, claude.ai links

console.log("Starting batch processing of notes directory...");

// ========== CONFIGURATION ==========
const processFiles = true; // Set to false for dry run
const targetPath = "notes/"; // Options: "notes/" (all), "notes/dao-primitives/", "notes/rpp/", etc.
const batchSize = 50; // Process files in batches for progress feedback

// Link patterns to fix
const patterns = {
    angleBrackets: /\[([^\]]+)\]\(<([^>]+)>\)/g,
    relativePaths: /\[([^\]]+)\]\((?!\/|http|https|#|mailto:|obsidian:|\.\.\/|\.\/|[a-zA-Z]+:)([a-zA-Z][^)]+\.md)([^)]*)\)/g,
    obsidianUris: /obsidian:\/\/open\?vault=sb-knowledge-base&file=([^)\s]+)/g,
    anchorSpaces: /\[([^\]]+)\]\(([^#)]+)(#[^)]*\s[^)]*)\)/g,
    claudeAiLinks: /https:\/\/claude\.ai\/chat\//g
};

// Determine processing scope
const isFullNotes = targetPath === "notes/";
const isSubdirectory = targetPath.startsWith("notes/") && targetPath.length > 6;
const scopeName = isFullNotes ? "entire notes directory" : 
                 isSubdirectory ? `${targetPath} subdirectory` : "specified path";

console.log(`Target: ${targetPath} (${scopeName})`);

// Get target files
const allFiles = app.vault.getMarkdownFiles().filter(f => {
    if (isFullNotes) {
        return f.path.startsWith("notes/");
    } else {
        return f.path.startsWith(targetPath);
    }
});

console.log(`Found ${allFiles.length} files to process in ${targetPath}`);

if (allFiles.length === 0) {
    new Notice(`No files found in ${targetPath}`);
    tR = `# No Files Found\n\n**Target Path**: ${targetPath}\n**Result**: No markdown files found in specified path.`;
    throw new Error("No files to process");
}

// Initialize tracking
let processedFiles = [];
let skippedFiles = [];
let errorFiles = [];
let totalChanges = 0;
let currentBatch = 0;
let subdirectoryStats = {};

// Function to get subdirectory from path
function getSubdirectory(filePath) {
    const parts = filePath.split('/');
    if (parts.length <= 2) return '_root';
    return parts[1]; // First level after notes/
}

// Function to process a single file
async function processFile(file) {
    try {
        let content = await app.vault.read(file);
        const originalContent = content;
        const subdir = getSubdirectory(file.path);
        
        // Initialize subdirectory stats if needed
        if (!subdirectoryStats[subdir]) {
            subdirectoryStats[subdir] = {
                filesProcessed: 0,
                filesSkipped: 0,
                totalChanges: 0
            };
        }
        
        // Check if file has any issues
        let hasIssues = false;
        for (const [name, pattern] of Object.entries(patterns)) {
            if (content.match(pattern)) {
                hasIssues = true;
                break;
            }
        }
        
        if (!hasIssues) {
            skippedFiles.push({
                path: file.path,
                subdirectory: subdir,
                reason: "No problematic links found"
            });
            subdirectoryStats[subdir].filesSkipped++;
            return;
        }
        
        // Initialize change tracking for this file
        let fileChanges = {
            angleBrackets: 0,
            relativePaths: 0,
            obsidianUris: 0,
            anchorSpaces: 0,
            claudeAiLinks: 0,
            total: 0
        };
        
        // Fix angle bracket links
        content = content.replace(/\[([^\]]+)\]\(<([^#>]+)(#[^>]+)?>\)/g, (match, linkText, path, anchor) => {
            let newPath = path;
            let newAnchor = anchor || '';
            
            if (!path.startsWith('/') && !path.startsWith('http') && !path.startsWith('#')) {
                newPath = '/' + path;
            }
            
            if (newAnchor) {
                newAnchor = newAnchor.replace(/\s+/g, '-').toLowerCase();
            }
            
            fileChanges.angleBrackets++;
            return `[${linkText}](${newPath}${newAnchor})`;
        });
        
        // Fix relative paths
        content = content.replace(patterns.relativePaths, (match, linkText, path, rest) => {
            fileChanges.relativePaths++;
            return `[${linkText}](/${path}${rest})`;
        });
        
        // Fix Obsidian URIs
        content = content.replace(patterns.obsidianUris, (match, encodedPath) => {
            let decodedPath = decodeURIComponent(encodedPath);
            if (!decodedPath.endsWith('.md')) {
                decodedPath += '.md';
            }
            if (!decodedPath.startsWith('/')) {
                decodedPath = '/' + decodedPath;
            }
            fileChanges.obsidianUris++;
            return decodedPath;
        });
        
        // Fix anchor spaces
        content = content.replace(/\[([^\]]+)\]\(([^#)]+)(#[^)]+)\)/g, (match, linkText, path, anchor) => {
            if (anchor.includes(' ')) {
                const newAnchor = anchor.replace(/\s+/g, '-').toLowerCase();
                fileChanges.anchorSpaces++;
                return `[${linkText}](${path}${newAnchor})`;
            }
            return match;
        });
        
        // Fix Claude.ai links
        content = content.replace(patterns.claudeAiLinks, (match) => {
            fileChanges.claudeAiLinks++;
            return '/';
        });
        
        // Calculate total changes
        fileChanges.total = fileChanges.angleBrackets + fileChanges.relativePaths + 
                           fileChanges.obsidianUris + fileChanges.anchorSpaces + 
                           fileChanges.claudeAiLinks;
        
        if (fileChanges.total > 0 && processFiles) {
            await app.vault.modify(file, content);
            processedFiles.push({
                path: file.path,
                subdirectory: subdir,
                changes: fileChanges
            });
            totalChanges += fileChanges.total;
            subdirectoryStats[subdir].filesProcessed++;
            subdirectoryStats[subdir].totalChanges += fileChanges.total;
        } else if (fileChanges.total > 0) {
            processedFiles.push({
                path: file.path,
                subdirectory: subdir,
                changes: fileChanges,
                dryRun: true
            });
        }
        
    } catch (error) {
        errorFiles.push({
            path: file.path,
            subdirectory: getSubdirectory(file.path),
            error: error.message
        });
    }
}

// Process files in batches with progress feedback
console.log(`Processing ${allFiles.length} files in batches of ${batchSize}...`);
for (let i = 0; i < allFiles.length; i += batchSize) {
    currentBatch++;
    const batch = allFiles.slice(i, i + batchSize);
    const batchEnd = Math.min(i + batchSize, allFiles.length);
    
    console.log(`Processing batch ${currentBatch}: files ${i + 1}-${batchEnd} of ${allFiles.length}`);
    
    // Process batch
    for (const file of batch) {
        await processFile(file);
    }
    
    // Progress notification
    if (processFiles) {
        new Notice(`Batch ${currentBatch} complete: ${batchEnd}/${allFiles.length} files processed`);
    }
}

// Generate comprehensive report
let report = `# Notes Directory Link Fix Report\n\n`;
report += `**Generated**: ${new Date().toISOString()}\n`;
report += `**Mode**: ${processFiles ? 'PRODUCTION' : 'DRY RUN'}\n`;
report += `**Scope**: ${scopeName} (${targetPath})\n`;
report += `**Processing Method**: Batch processing (${batchSize} files per batch)\n\n`;

report += `## Executive Summary\n\n`;
report += `- **Files Checked**: ${allFiles.length}\n`;
report += `- **Files Fixed**: ${processedFiles.length}\n`;
report += `- **Files Skipped**: ${skippedFiles.length} (already clean)\n`;
report += `- **Files with Errors**: ${errorFiles.length}\n`;
report += `- **Total Changes Made**: ${totalChanges}\n`;
report += `- **Batches Processed**: ${currentBatch}\n\n`;

// Subdirectory breakdown if processing multiple subdirectories
if (Object.keys(subdirectoryStats).length > 1) {
    report += `## Subdirectory Breakdown\n\n`;
    report += `| Subdirectory | Files Processed | Files Skipped | Changes Made |\n`;
    report += `|--------------|-----------------|---------------|--------------|\n`;
    
    Object.entries(subdirectoryStats).forEach(([subdir, stats]) => {
        const displayName = subdir === '_root' ? 'notes/ (root)' : `notes/${subdir}/`;
        report += `| ${displayName} | ${stats.filesProcessed} | ${stats.filesSkipped} | ${stats.totalChanges} |\n`;
    });
    report += `\n`;
}

// Change type analysis
if (processedFiles.length > 0) {
    const changesByType = {
        angleBrackets: 0,
        relativePaths: 0,
        obsidianUris: 0,
        anchorSpaces: 0,
        claudeAiLinks: 0
    };
    
    processedFiles.forEach(file => {
        Object.keys(changesByType).forEach(type => {
            changesByType[type] += file.changes[type] || 0;
        });
    });
    
    report += `## Change Type Analysis\n\n`;
    report += `| Change Type | Count | % of Total |\n`;
    report += `|-------------|-------|-----------|\n`;
    
    Object.entries(changesByType).forEach(([type, count]) => {
        if (count > 0) {
            const percentage = ((count / totalChanges) * 100).toFixed(1);
            const typeLabel = {
                angleBrackets: "Angle bracket links",
                relativePaths: "Relative paths (added /)",
                obsidianUris: "Obsidian URI links",
                anchorSpaces: "Anchor spaces fixed",
                claudeAiLinks: "Claude.ai links removed"
            }[type];
            report += `| ${typeLabel} | ${count} | ${percentage}% |\n`;
        }
    });
    report += `\n`;
}

// Top processed files (if many)
if (processedFiles.length > 10) {
    const topFiles = [...processedFiles].sort((a, b) => b.changes.total - a.changes.total).slice(0, 10);
    report += `## Top 10 Files by Changes Made\n\n`;
    report += `| File | Subdirectory | Changes | Types |\n`;
    report += `|------|--------------|---------|-------|\n`;
    
    topFiles.forEach(file => {
        const types = Object.entries(file.changes)
            .filter(([type, count]) => type !== 'total' && count > 0)
            .map(([type, count]) => {
                const shortType = {
                    angleBrackets: "AB",
                    relativePaths: "RP",
                    obsidianUris: "OU", 
                    anchorSpaces: "AS",
                    claudeAiLinks: "CL"
                }[type];
                return `${shortType}:${count}`;
            }).join(', ');
            
        const displaySubdir = file.subdirectory === '_root' ? 'root' : file.subdirectory;
        report += `| ${file.path} | ${displaySubdir} | ${file.changes.total} | ${types} |\n`;
    });
    report += `\n`;
} else if (processedFiles.length > 0) {
    report += `## All Files Fixed\n\n`;
    report += `| File | Subdirectory | Changes | Details |\n`;
    report += `|------|--------------|---------|----------|\n`;
    
    processedFiles.forEach(file => {
        const details = [];
        if (file.changes.angleBrackets > 0) details.push(`${file.changes.angleBrackets} angle brackets`);
        if (file.changes.relativePaths > 0) details.push(`${file.changes.relativePaths} relative paths`);
        if (file.changes.obsidianUris > 0) details.push(`${file.changes.obsidianUris} Obsidian URIs`);
        if (file.changes.anchorSpaces > 0) details.push(`${file.changes.anchorSpaces} anchor spaces`);
        if (file.changes.claudeAiLinks > 0) details.push(`${file.changes.claudeAiLinks} Claude.ai links`);
        
        const displaySubdir = file.subdirectory === '_root' ? 'root' : file.subdirectory;
        report += `| ${file.path} | ${displaySubdir} | ${file.changes.total} | ${details.join(', ')} |\n`;
    });
    report += `\n`;
}

// Clean files summary (if many)
if (skippedFiles.length > 20) {
    report += `## Clean Files Summary\n\n`;
    const cleanBySubdir = {};
    skippedFiles.forEach(file => {
        const subdir = file.subdirectory;
        cleanBySubdir[subdir] = (cleanBySubdir[subdir] || 0) + 1;
    });
    
    Object.entries(cleanBySubdir).forEach(([subdir, count]) => {
        const displayName = subdir === '_root' ? 'notes/ (root)' : `notes/${subdir}/`;
        report += `- **${displayName}**: ${count} files already clean\n`;
    });
    report += `\n`;
} else if (skippedFiles.length > 0) {
    report += `## Clean Files (No Changes Needed)\n\n`;
    skippedFiles.forEach(file => {
        report += `- ${file.path}\n`;
    });
    report += `\n`;
}

// Errors (if any)
if (errorFiles.length > 0) {
    report += `## ⚠️ Errors\n\n`;
    errorFiles.forEach(file => {
        report += `- **${file.path}**: ${file.error}\n`;
    });
    report += `\n`;
}

// Next steps
report += `## Next Steps\n\n`;
if (processFiles) {
    if (isFullNotes) {
        report += `1. ✅ Entire notes directory has been processed\n`;
        report += `2. Run T06-Scan-Notes-Directory to verify all issues resolved\n`;
        report += `3. Phase 6 complete - ready for Phase 7\n`;
        report += `4. Update processing order checklist\n`;
        report += `5. Create Phase 6 summary\n`;
    } else {
        report += `1. ✅ ${targetPath} subdirectory has been processed\n`;
        report += `2. Continue with remaining subdirectories if needed\n`;
        report += `3. Run validation scan after all subdirectories complete\n`;
    }
    report += `6. Create a git commit to save progress\n`;
} else {
    report += `1. Review the dry run results above\n`;
    report += `2. Pay attention to subdirectory breakdown and change types\n`;
    report += `3. Set processFiles = true to apply changes\n`;
    report += `4. Run the template again\n`;
}

// Performance metrics
const processingTime = Date.now();
report += `\n## Processing Metrics\n\n`;
report += `- **Files per batch**: ${batchSize}\n`;
report += `- **Total batches**: ${currentBatch}\n`;
report += `- **Average changes per file**: ${processedFiles.length > 0 ? (totalChanges / processedFiles.length).toFixed(1) : '0'}\n`;
report += `- **Processing efficiency**: ${((processedFiles.length / allFiles.length) * 100).toFixed(1)}% of files required changes\n`;

// Show notification
const mode = processFiles ? 'Fixed' : 'DRY RUN - Would fix';
new Notice(`${mode} ${totalChanges} links across ${processedFiles.length} files in ${scopeName}!`);

// Return the report
tR = report;
%>
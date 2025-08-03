<%*
// T15-Historical-Comparison-Validator
// Purpose: Compare current state with original inventory to verify all changes
// Ensures no files or links were missed during conversion

const OUTPUT_DIR = 'link-fix';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");

const comparison = {
    startTime: Date.now(),
    inventory: {
        original: null,
        loadError: null
    },
    files: {
        expected: new Set(),
        current: new Set(),
        missing: [],
        unexpected: []
    },
    conversion: {
        expectedWikilinks: 0,
        currentWikilinks: 0,
        unconverted: []
    }
};

// Load original inventory
const loadOriginalInventory = async () => {
    try {
        // Try to load the integrated inventory first
        const inventoryPath = `${OUTPUT_DIR}/64-integrated-link-inventory.md`;
        const inventoryFile = app.vault.getAbstractFileByPath(inventoryPath);
        
        if (!inventoryFile) {
            // Fallback to basic inventory
            const basicPath = `${OUTPUT_DIR}/03-link-inventory-summary.md`;
            const basicFile = app.vault.getAbstractFileByPath(basicPath);
            if (basicFile) {
                comparison.inventory.original = await app.vault.read(basicFile);
                return true;
            }
        } else {
            comparison.inventory.original = await app.vault.read(inventoryFile);
            return true;
        }
        
        comparison.inventory.loadError = "No inventory file found";
        return false;
    } catch (error) {
        comparison.inventory.loadError = error.message;
        return false;
    }
};

// Parse inventory data
const parseInventoryData = () => {
    if (!comparison.inventory.original) return;
    
    // Extract file paths and wikilink counts from inventory
    const lines = comparison.inventory.original.split('\n');
    let inDataSection = false;
    
    for (const line of lines) {
        // Look for data tables or lists
        if (line.includes('|') && line.includes('.md')) {
            const parts = line.split('|').map(p => p.trim());
            if (parts.length >= 2) {
                const filePath = parts[0].replace(/`/g, '');
                if (filePath.endsWith('.md')) {
                    comparison.files.expected.add(filePath);
                    
                    // Try to extract wikilink count
                    for (const part of parts) {
                        if (part.match(/\d+/) && !part.includes('.md')) {
                            const count = parseInt(part);
                            if (!isNaN(count)) {
                                comparison.conversion.expectedWikilinks += count;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
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

// Scan current state
const scanCurrentState = async () => {
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
    
    for (const file of files) {
        comparison.files.current.add(file.path);
        
        const content = await app.vault.read(file);
        const wikilinks = content.match(/\[\[([^\]]+)\]\]/g) || [];
        
        comparison.conversion.currentWikilinks += wikilinks.length;
        
        if (wikilinks.length > 0) {
            comparison.conversion.unconverted.push({
                file: file.path,
                count: wikilinks.length,
                samples: wikilinks.slice(0, 3)
            });
        }
    }
};

// Compare states
const compareStates = () => {
    // Find missing files (in original but not current)
    for (const file of comparison.files.expected) {
        if (!comparison.files.current.has(file)) {
            comparison.files.missing.push(file);
        }
    }
    
    // Find unexpected files (in current but not original)
    for (const file of comparison.files.current) {
        if (!comparison.files.expected.has(file)) {
            comparison.files.unexpected.push(file);
        }
    }
};

// Random sampling check
const performRandomSampling = async () => {
    const sampleSize = 10;
    const files = Array.from(comparison.files.current);
    const samples = [];
    
    // Get random sample
    const shuffled = files.sort(() => 0.5 - Math.random());
    const selectedFiles = shuffled.slice(0, sampleSize);
    
    for (const filePath of selectedFiles) {
        const file = app.vault.getAbstractFileByPath(filePath);
        if (file) {
            const content = await app.vault.read(file);
            
            // Check various link patterns
            const checks = {
                wikilinks: (content.match(/\[\[([^\]]+)\]\]/g) || []).length,
                markdownLinks: (content.match(/\[([^\]]*)\]\(([^)]+)\)/g) || []).length,
                leadingSlashes: (content.match(/\]\(\/[^)]+\)/g) || []).length,
                relativePaths: (content.match(/\]\(\.\.?\/[^)]+\)/g) || []).length
            };
            
            samples.push({
                file: filePath,
                checks
            });
        }
    }
    
    return samples;
};

// Generate report
const generateReport = async () => {
    const duration = ((Date.now() - comparison.startTime) / 1000).toFixed(1);
    let report = `# Historical Comparison Validation Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Duration**: ${duration} seconds\n\n`;
    
    if (comparison.inventory.loadError) {
        report += `## ⚠️ Inventory Load Error\n\n`;
        report += `Could not load original inventory: ${comparison.inventory.loadError}\n\n`;
    }
    
    report += `## File Comparison\n\n`;
    report += `- **Expected Files**: ${comparison.files.expected.size}\n`;
    report += `- **Current Files**: ${comparison.files.current.size}\n`;
    report += `- **Missing Files**: ${comparison.files.missing.length}\n`;
    report += `- **Unexpected Files**: ${comparison.files.unexpected.length}\n\n`;
    
    if (comparison.files.missing.length > 0) {
        report += `### Missing Files\n\n`;
        report += `Files in original inventory but not found:\n\n`;
        comparison.files.missing.forEach(f => {
            report += `- ${f}\n`;
        });
        report += `\n`;
    }
    
    report += `## Wikilink Conversion\n\n`;
    if (comparison.conversion.expectedWikilinks > 0) {
        const conversionRate = ((1 - comparison.conversion.currentWikilinks / comparison.conversion.expectedWikilinks) * 100).toFixed(1);
        report += `- **Original Wikilinks**: ~${comparison.conversion.expectedWikilinks}\n`;
        report += `- **Current Wikilinks**: ${comparison.conversion.currentWikilinks}\n`;
        report += `- **Conversion Rate**: ${conversionRate}%\n\n`;
    } else {
        report += `- **Current Wikilinks**: ${comparison.conversion.currentWikilinks}\n\n`;
    }
    
    if (comparison.conversion.unconverted.length > 0) {
        report += `### Unconverted Wikilinks\n\n`;
        comparison.conversion.unconverted.forEach(item => {
            report += `- **${item.file}**: ${item.count} wikilinks\n`;
            report += `  - Samples: ${item.samples.join(', ')}\n`;
        });
        report += `\n`;
    }
    
    // Add random sampling results
    const samples = await performRandomSampling();
    report += `## Random Sample Validation\n\n`;
    report += `Checked ${samples.length} random files:\n\n`;
    
    let allClean = true;
    samples.forEach(sample => {
        const issues = [];
        if (sample.checks.wikilinks > 0) issues.push(`${sample.checks.wikilinks} wikilinks`);
        if (sample.checks.leadingSlashes > 0) issues.push(`${sample.checks.leadingSlashes} leading slashes`);
        if (sample.checks.relativePaths > 0) issues.push(`${sample.checks.relativePaths} relative paths`);
        
        if (issues.length > 0) {
            allClean = false;
            report += `- ❌ **${sample.file}**: ${issues.join(', ')}\n`;
        } else {
            report += `- ✅ **${sample.file}**: Clean (${sample.checks.markdownLinks} markdown links)\n`;
        }
    });
    
    if (allClean) {
        report += `\n✅ All sampled files are clean!\n`;
    }
    
    return report;
};

// Main execution
try {
    const notice = new Notice("Loading original inventory...", 0);
    const inventoryLoaded = await loadOriginalInventory();
    
    if (inventoryLoaded) {
        notice.setMessage("Parsing inventory data...");
        parseInventoryData();
    }
    
    notice.setMessage("Scanning current state...");
    await scanCurrentState();
    
    notice.setMessage("Comparing states...");
    compareStates();
    
    const report = await generateReport();
    const reportPath = `${OUTPUT_DIR}/72-historical-comparison.md`;
    await app.vault.adapter.write(reportPath, report);
    
    notice.hide();
    new Notice(`Historical comparison complete`, 5000);
    
    tR += `## Historical Comparison\n\n`;
    tR += `- **Current Files**: ${comparison.files.current.size}\n`;
    tR += `- **Missing Files**: ${comparison.files.missing.length}\n`;
    tR += `- **Current Wikilinks**: ${comparison.conversion.currentWikilinks}\n`;
    tR += `\nReport saved to: \`${reportPath}\``;
    
} catch (error) {
    console.error("Comparison error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
}
%>
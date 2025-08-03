---
purpose: Fix the final 6 remaining wikilinks
features:
  - Converts URL wikilink to markdown format
  - Handles broken reference wikilinks
  - Targets specific files identified
outputs:
  - Fixed wikilinks
  - Summary report
---

# Fix Final Wikilinks

**Template**: T19-Fix-Final-Wikilinks
**Purpose**: Fix the last 6 wikilinks in active content

<%*
// T19-Fix-Final-Wikilinks
// Fix the remaining 6 wikilinks identified in validation

const OUTPUT_DIR = 'link-fix';

// The specific files and wikilinks to fix
const targetFixes = [
    {
        file: 'tags/consensus.md',
        fixes: [
            {
                original: '[[https://en.wikipedia.org/wiki/Consensus_decision-making]]',
                replacement: '[Consensus decision-making](https://en.wikipedia.org/wiki/Consensus_decision-making)',
                type: 'url'
            }
        ]
    },
    {
        file: 'notes/rpp/rpp-playbooks/playbook-working-docs/07-resource-audit.md',
        fixes: [
            {
                original: '[[Community Governance]]',
                replacement: 'Community Governance',  // Just remove brackets since file doesn't exist
                type: 'broken-reference'
            },
            {
                original: '[[Operational Governance]]',
                replacement: 'Operational Governance',
                type: 'broken-reference'
            },
            {
                original: '[[Peer to Peer Payments]]',
                replacement: 'Peer to Peer Payments',
                type: 'broken-reference'
            },
            {
                original: '[[Participatory Governance]]',
                replacement: 'Participatory Governance',
                type: 'broken-reference'
            },
            {
                original: '[[Local Nodes]]',
                replacement: 'Local Nodes',
                type: 'broken-reference'
            }
        ]
    }
];

// Process fixes
const processFixes = async () => {
    const results = [];
    let totalFixed = 0;
    
    for (const target of targetFixes) {
        try {
            const file = app.vault.getAbstractFileByPath(target.file);
            if (!file) {
                results.push({
                    file: target.file,
                    status: 'File not found',
                    fixed: 0
                });
                continue;
            }
            
            let content = await app.vault.read(file);
            const originalContent = content;
            let fixedCount = 0;
            
            // Apply each fix
            for (const fix of target.fixes) {
                if (content.includes(fix.original)) {
                    content = content.replace(fix.original, fix.replacement);
                    fixedCount++;
                    totalFixed++;
                }
            }
            
            if (fixedCount > 0) {
                // Create backup
                const backupPath = `${OUTPUT_DIR}/backups/wikilink-fixes/${target.file}`;
                const backupDir = backupPath.substring(0, backupPath.lastIndexOf('/'));
                
                if (!await app.vault.adapter.exists(backupDir)) {
                    await app.vault.adapter.mkdir(backupDir);
                }
                
                await app.vault.adapter.write(backupPath, originalContent);
                
                // Write fixed content
                await app.vault.modify(file, content);
                
                results.push({
                    file: target.file,
                    status: 'Fixed',
                    fixed: fixedCount,
                    fixes: target.fixes
                });
            } else {
                results.push({
                    file: target.file,
                    status: 'No changes needed',
                    fixed: 0
                });
            }
            
        } catch (error) {
            results.push({
                file: target.file,
                status: `Error: ${error.message}`,
                fixed: 0
            });
        }
    }
    
    return { results, totalFixed };
};

// Generate report
const generateReport = (results, totalFixed) => {
    let report = `# Final Wikilinks Fix Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n\n`;
    
    report += `## Summary\n\n`;
    report += `- **Total Wikilinks Fixed**: ${totalFixed}\n`;
    report += `- **Files Modified**: ${results.filter(r => r.status === 'Fixed').length}\n\n`;
    
    report += `## Details\n\n`;
    
    results.forEach(result => {
        report += `### ${result.file}\n`;
        report += `- **Status**: ${result.status}\n`;
        
        if (result.fixed > 0 && result.fixes) {
            report += `- **Fixes Applied**:\n`;
            result.fixes.forEach(fix => {
                report += `  - Type: ${fix.type}\n`;
                report += `  - Before: \`${fix.original}\`\n`;
                report += `  - After: \`${fix.replacement}\`\n\n`;
            });
        }
        report += `\n`;
    });
    
    report += `## Notes\n\n`;
    report += `- URL wikilink converted to proper markdown link\n`;
    report += `- Broken references converted to plain text (files don't exist)\n`;
    report += `- Backups created in: \`${OUTPUT_DIR}/backups/wikilink-fixes/\`\n`;
    
    return report;
};

// Main execution
try {
    const confirmMsg = `This will fix the final 6 wikilinks:\n\n` +
                      `1. Convert URL wikilink to markdown link\n` +
                      `2. Convert broken reference wikilinks to plain text\n\n` +
                      `Proceed?`;
    
    if (!confirm(confirmMsg)) {
        tR += `## Operation Cancelled\n\nNo changes made.`;
        return;
    }
    
    const { results, totalFixed } = await processFixes();
    
    // Generate and save report
    const report = generateReport(results, totalFixed);
    const reportPath = `${OUTPUT_DIR}/39-final-wikilinks-fix-report.md`;
    await app.vault.adapter.write(reportPath, report);
    
    // Display results
    tR += `## ✅ Final Wikilinks Fixed\n\n`;
    tR += `### Summary\n`;
    tR += `- **Wikilinks Fixed**: ${totalFixed}\n`;
    tR += `- **Files Modified**: ${results.filter(r => r.status === 'Fixed').length}\n\n`;
    
    tR += `### Results by File\n`;
    results.forEach(result => {
        tR += `- **${result.file}**: ${result.status}`;
        if (result.fixed > 0) {
            tR += ` (${result.fixed} fixes)`;
        }
        tR += `\n`;
    });
    
    tR += `\n### Report\n`;
    tR += `Full details saved to: \`${reportPath}\`\n\n`;
    
    tR += `### Next Step\n`;
    tR += `Run validation again to confirm all wikilinks are resolved!`;
    
    new Notice(`Fixed ${totalFixed} wikilinks!`, 3000);
    
} catch (error) {
    console.error("Error:", error);
    tR += `## ❌ Error\n\n${error.message}`;
    new Notice(`Error: ${error.message}`, 5000);
}
%>

---

*Fix the final 6 wikilinks*
<%*
// T18-Fragment-Fix-Rollback
// Purpose: Rollback fragment link fixes if needed
// Restores files from backup created by T17

const OUTPUT_DIR = 'link-fix';

const rollback = {
    startTime: Date.now(),
    stats: {
        filesRestored: 0,
        filesSkipped: 0,
        errors: []
    }
};

// List available backups
const listBackups = async () => {
    const backupRoot = `${OUTPUT_DIR}/backups`;
    try {
        const backups = await app.vault.adapter.list(backupRoot);
        return backups.folders
            .filter(f => f.startsWith(`${backupRoot}/fragment-fix-`))
            .sort()
            .reverse();
    } catch (error) {
        return [];
    }
};

// Restore from backup
const restoreFromBackup = async (backupDir) => {
    const files = await app.vault.adapter.list(backupDir);
    
    for (const backupPath of files.files) {
        try {
            // Extract original path from backup path
            const relativePath = backupPath.replace(`${backupDir}/`, '');
            
            // Read backup content
            const backupContent = await app.vault.adapter.read(backupPath);
            
            // Get original file
            const originalFile = app.vault.getAbstractFileByPath(relativePath);
            
            if (originalFile && originalFile instanceof tp.obsidian.TFile) {
                // Restore content
                await app.vault.modify(originalFile, backupContent);
                rollback.stats.filesRestored++;
            } else {
                rollback.stats.filesSkipped++;
                rollback.stats.errors.push({
                    file: relativePath,
                    error: 'Original file not found'
                });
            }
        } catch (error) {
            rollback.stats.errors.push({
                file: backupPath,
                error: error.message
            });
        }
    }
};

// Generate rollback report
const generateReport = (backupDir) => {
    const duration = ((Date.now() - rollback.startTime) / 1000).toFixed(1);
    let report = `# Fragment Fix Rollback Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Duration**: ${duration} seconds\n`;
    report += `**Backup Used**: ${backupDir}\n\n`;
    
    report += `## Summary\n\n`;
    report += `- **Files Restored**: ${rollback.stats.filesRestored}\n`;
    report += `- **Files Skipped**: ${rollback.stats.filesSkipped}\n`;
    report += `- **Errors**: ${rollback.stats.errors.length}\n\n`;
    
    if (rollback.stats.errors.length > 0) {
        report += `## Errors\n\n`;
        rollback.stats.errors.forEach(err => {
            report += `- **${err.file}**: ${err.error}\n`;
        });
        report += `\n`;
    }
    
    if (rollback.stats.filesRestored > 0) {
        report += `## ✅ Rollback Successful\n\n`;
        report += `Successfully restored ${rollback.stats.filesRestored} files from backup.\n`;
    } else {
        report += `## ⚠️ No Files Restored\n\n`;
        report += `No files were restored. Check the errors above.\n`;
    }
    
    return report;
};

// Main execution
try {
    // List available backups
    const backups = await listBackups();
    
    if (backups.length === 0) {
        tR += `## ❌ No Backups Found\n\n`;
        tR += `No fragment fix backups found in ${OUTPUT_DIR}/backups/\n`;
        new Notice("No backups found!", 3000);
        return;
    }
    
    // Show backup selection
    tR += `## Available Backups\n\n`;
    backups.forEach((backup, index) => {
        const timestamp = backup.split('fragment-fix-')[1];
        tR += `${index + 1}. ${timestamp}\n`;
    });
    tR += `\n`;
    
    // Use most recent backup (index 0)
    const selectedBackup = backups[0];
    
    const confirmMsg = `Rollback from ${selectedBackup}?\n\nThis will restore all files modified by the fragment fix.`;
    if (!confirm(confirmMsg)) {
        tR += `\n## Rollback Cancelled\n`;
        return;
    }
    
    const notice = new Notice("Rolling back fragment fixes...", 0);
    
    // Perform rollback
    await restoreFromBackup(selectedBackup);
    
    // Generate report
    const report = generateReport(selectedBackup);
    const reportPath = `${OUTPUT_DIR}/76-fragment-rollback-report.md`;
    await app.vault.adapter.write(reportPath, report);
    
    notice.hide();
    
    if (rollback.stats.filesRestored > 0) {
        new Notice(`✅ Restored ${rollback.stats.filesRestored} files`, 5000);
        tR += `\n## ✅ Rollback Complete\n\n`;
        tR += `- **Files Restored**: ${rollback.stats.filesRestored}\n`;
        tR += `- **From Backup**: ${selectedBackup}\n\n`;
    } else {
        new Notice(`⚠️ No files restored`, 5000);
        tR += `\n## ⚠️ Rollback Issues\n\n`;
        tR += `- **Errors**: ${rollback.stats.errors.length}\n`;
    }
    
    tR += `Report saved to: \`${reportPath}\``;
    
} catch (error) {
    console.error("Rollback error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    new Notice(`Rollback error: ${error.message}`, 5000);
}
%>
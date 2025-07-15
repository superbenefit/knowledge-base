<%*
// Filename Normalization Rollback Script
// This script can undo renames using a rename log file

// Find rename log files
const logFiles = app.vault.getFiles()
  .filter(f => f.name.startsWith('rename-log-') && f.name.endsWith('.json'))
  .sort((a, b) => b.stat.mtime - a.stat.mtime);

if (logFiles.length === 0) {
  new Notice("❌ No rename log files found");
  tR = `# ❌ No Rollback Files Found\n\n`;
  tR += `No rename log files found in the vault.\n\n`;
  tR += `Rollback requires a \`rename-log-*.json\` file from a previous rename operation.\n\n`;
  tR += `If you renamed files using the script, check if the log file was created.`;
  return;
}

// Let user select which log to use
const selectedLog = await tp.system.suggester(
  logFiles.map(f => `📄 ${f.name} (${new Date(f.stat.mtime).toLocaleString()})`),
  logFiles,
  false,
  "Select rename log to rollback:"
);

if (!selectedLog) {
  tR = "❌ Rollback cancelled";
  return;
}

// Read the log file
const logContent = await app.vault.read(selectedLog);
const renameLog = JSON.parse(logContent);

// Confirm rollback
const confirmRollback = await tp.system.suggester(
  ["✅ Yes, rollback these renames", "❌ No, cancel"],
  [true, false],
  false,
  `⚠️ Rollback ${renameLog.length} file renames from ${selectedLog.name}?`
);

if (!confirmRollback) {
  tR = "❌ Rollback cancelled";
  return;
}

// Perform rollback
let report = `# 🔄 Filename Normalization Rollback\n\n`;
report += `📄 Rolling back changes from: \`${selectedLog.name}\`\n`;
report += `📊 Total files to rollback: **${renameLog.length}**\n`;
report += `📅 Date: ${new Date().toLocaleString()}\n\n`;
report += `---\n\n`;

let successCount = 0;
let errorCount = 0;
let skipCount = 0;

const successes = [];
const errors = [];
const skips = [];

// Group by folder for organized output
const folderGroups = {};
renameLog.forEach(entry => {
  if (!folderGroups[entry.folder]) {
    folderGroups[entry.folder] = [];
  }
  folderGroups[entry.folder].push(entry);
});

for (const [folder, entries] of Object.entries(folderGroups)) {
  report += `## 📁 ${folder}\n\n`;
  
  const folderSuccesses = [];
  const folderErrors = [];
  const folderSkips = [];
  
  for (const entry of entries) {
    try {
      // Find the file by its new name
      const currentPath = entry.path.substring(0, entry.path.lastIndexOf('/')) + '/' + entry.newName;
      const file = app.vault.getAbstractFileByPath(currentPath);
      
      if (file) {
        // Check if old name would conflict
        const oldPath = entry.path.substring(0, entry.path.lastIndexOf('/')) + '/' + entry.oldName;
        const conflictFile = app.vault.getAbstractFileByPath(oldPath);
        
        if (conflictFile) {
          folderSkips.push({
            new: entry.newName,
            old: entry.oldName,
            reason: 'target exists'
          });
          skipCount++;
          continue;
        }
        
        // Rename back to original
        await app.fileManager.renameFile(file, entry.oldName);
        folderSuccesses.push({
          new: entry.newName,
          old: entry.oldName
        });
        successCount++;
      } else {
        folderErrors.push({
          new: entry.newName,
          old: entry.oldName,
          reason: 'file not found'
        });
        errorCount++;
      }
    } catch (error) {
      folderErrors.push({
        new: entry.newName,
        old: entry.oldName,
        reason: error.message
      });
      errorCount++;
    }
  }
  
  // Output folder results
  if (folderSuccesses.length > 0) {
    report += `### ✅ Successfully restored: ${folderSuccesses.length}\n\n`;
    folderSuccesses.forEach(item => {
      report += `- 📝 \`${item.new}\`\n`;
      report += `  ⬅️  \`${item.old}\`\n`;
    });
    report += '\n';
  }
  
  if (folderSkips.length > 0) {
    report += `### ⏭️ Skipped: ${folderSkips.length}\n\n`;
    folderSkips.forEach(item => {
      report += `- ⚠️ \`${item.new}\` → \`${item.old}\` (${item.reason})\n`;
    });
    report += '\n';
  }
  
  if (folderErrors.length > 0) {
    report += `### ❌ Errors: ${folderErrors.length}\n\n`;
    folderErrors.forEach(item => {
      report += `- 🚨 \`${item.new}\` (${item.reason})\n`;
    });
    report += '\n';
  }
  
  report += `---\n\n`;
}

// Final summary
report += `## 📊 ROLLBACK SUMMARY\n\n`;

const summaryTable = `| Result | Count | Status |
|--------|-------|--------|
| ✅ Successfully restored | **${successCount}** | ${successCount > 0 ? '🟢' : '⚪'} |
| ⏭️ Skipped (conflicts) | ${skipCount} | ${skipCount > 0 ? '🟡' : '⚪'} |
| ❌ Errors | ${errorCount} | ${errorCount > 0 ? '🔴' : '⚪'} |
| 📊 **Total** | **${renameLog.length}** | |`;

report += summaryTable + '\n\n';

// Save rollback report
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const reportName = `rollback-report-${timestamp}.md`;
await app.vault.create(reportName, report);

report += `### 💾 Report Saved\n`;
report += `Rollback report saved to: \`${reportName}\`\n\n`;

// Next steps
report += `### 🎯 Next Steps\n\n`;
if (successCount === renameLog.length) {
  report += `✅ All files successfully restored to original names!\n`;
  report += `You can now:\n`;
  report += `1. Delete the rollback report if everything looks good\n`;
  report += `2. Try the rename process again with different settings\n`;
} else {
  report += `⚠️ Partial rollback completed.\n`;
  report += `- ${successCount} files restored\n`;
  report += `- ${skipCount + errorCount} files could not be restored\n\n`;
  report += `Check the details above for specific issues.`;
}

new Notice(`🔄 Rollback complete: ${successCount} files restored`);

tR = report;
-%>
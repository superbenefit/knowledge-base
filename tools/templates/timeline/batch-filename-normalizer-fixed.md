<%*
// Automated Filename Normalization Script - FIXED VERSION
// This script will rename meeting files to follow the standard format
// KEEPING THEM IN THEIR ORIGINAL DIRECTORIES

const dryRun = await tp.system.suggester(
  ["🧪 Test Mode (Show what would change)", "🚀 Execute Renames (Actually rename files)"],
  [true, false],
  false,
  "Choose execution mode:"
);

const folders = [
  { path: 'notes/rpp/rpp-archive/rpp-meetings/stakeholder-meetings/', prefix: 'RPP Stakeholder', icon: '👥' },
  { path: 'notes/aifs/aifs-meetings/', prefix: 'AIFS', icon: '⚽' },
  { path: 'notes/wp/wp-meetings/', prefix: 'WP', icon: '💨' },
  { path: 'notes/dao-primitives/primitives-archive/primitives-meetings/', prefix: 'DAO Primitives', icon: '🔧' },
  { path: 'notes/rpp/rpp-archive/rpp-meetings/core-team-meetings/', prefix: 'RPP Core Team', icon: '💪' },
  { path: 'notes/rpp/rpp-archive/rpp-meetings/os-steward-meetings/', prefix: 'RPP OS Steward', icon: '🛡️' },
  { path: 'notes/general-circle/old-gc-meetings/', prefix: 'GC', icon: '🎯' }
];

// Select which folders to process
const selectedFolders = await tp.system.suggester(
  folders.map(f => `${f.icon} ${f.prefix} (${f.path})`),
  folders,
  true,
  "Select folders to process (ESC to select all):"
);

const foldersToProcess = selectedFolders && selectedFolders.length > 0 ? selectedFolders : folders;

// Files to skip
const skipPatterns = [
  'template',
  'meetings.md',
  'meeting-notes.md',
  'overview',
  'index',
  'clarity-meeting-notes'
];

// Function to parse compressed dates
function parseCompressedDate(dateStr, frontmatterDate) {
  // Remove parentheses and spaces
  dateStr = dateStr.replace(/[\(\)\s]/g, '');
  
  // If we have frontmatter date, use it
  if (frontmatterDate && frontmatterDate.match(/\d{2}-\d{2}-\d{4}/)) {
    return frontmatterDate;
  }
  
  // Handle different compressed formats
  if (dateStr.length === 4) {
    // Format: MDDYY (4324 = 04-03-2024)
    const month = dateStr.substring(0, 1).padStart(2, '0');
    const day = dateStr.substring(1, 2).padStart(2, '0');
    const year = '20' + dateStr.substring(2, 4);
    return `${day}-${month}-${year}`;
  } else if (dateStr.length === 5) {
    // Could be MDDYY or DDMYY
    const firstTwo = parseInt(dateStr.substring(0, 2));
    
    if (dateStr.startsWith('0') || firstTwo > 12) {
      // DDMYY format (15824 = 15-08-2024)
      const day = dateStr.substring(0, 2);
      const month = dateStr.substring(2, 3).padStart(2, '0');
      const year = '20' + dateStr.substring(3, 5);
      return `${day}-${month}-${year}`;
    } else {
      // MDDYY format (12324 = 01-23-2024)
      const month = dateStr.substring(0, 1).padStart(2, '0');
      const day = dateStr.substring(1, 3);
      const year = '20' + dateStr.substring(3, 5);
      return `${day}-${month}-${year}`;
    }
  } else if (dateStr.length === 6) {
    // MMDDYY or DDMMYY format
    const part1 = dateStr.substring(0, 2);
    const part2 = dateStr.substring(2, 4);
    const year = '20' + dateStr.substring(4, 6);
    
    // For consistency, assume DD-MM-YY
    return `${part1}-${part2}-${year}`;
  }
  
  return null;
}

// Function to convert MM-DD-YYYY to DD-MM-YYYY
function convertDateFormat(dateStr) {
  const match = dateStr.match(/(\d{2})-(\d{2})-(\d{4})/);
  if (match) {
    const month = parseInt(match[1]);
    const day = parseInt(match[2]);
    
    // Check if it's likely MM-DD-YYYY (month <= 12 and day > 12 is definitive)
    if (month <= 12 && (day > 12 || month < day)) {
      return `${match[2]}-${match[1]}-${match[3]}`;
    }
  }
  return dateStr;
}

// Process files
let report = dryRun ? 
  '# 🧪 Filename Normalization - TEST MODE\n\n' : 
  '# 🚀 Filename Normalization - EXECUTION LOG\n\n';

report += `📁 Processing **${foldersToProcess.length}** folders\n`;
report += `⚙️ Mode: **${dryRun ? 'Test (preview only)' : 'Execute (renaming files)'}**\n`;
report += `📅 Date: ${new Date().toLocaleString()}\n\n`;

report += '---\n\n';

let totalRenamed = 0;
let totalSkipped = 0;
let totalErrors = 0;
let totalNoDate = 0;
const renameLog = [];

for (const folder of foldersToProcess) {
  const files = app.vault.getMarkdownFiles().filter(f => f.path.startsWith(folder.path));
  
  report += `## ${folder.icon} ${folder.prefix} Meetings\n\n`;
  report += `📍 Path: \`${folder.path}\`\n`;
  report += `📊 Files found: **${files.length}**\n\n`;
  
  let folderRenamed = 0;
  let folderSkipped = 0;
  let folderNoDate = 0;
  let folderErrors = 0;
  
  // Group changes for better readability
  const changes = [];
  const skips = [];
  const noDateFiles = [];
  const errors = [];
  
  for (const file of files) {
    // Skip template/index files
    if (skipPatterns.some(pattern => file.name.toLowerCase().includes(pattern))) {
      skips.push(file.name);
      folderSkipped++;
      continue;
    }
    
    try {
      // Get frontmatter date if available
      const cache = app.metadataCache.getFileCache(file);
      const frontmatterDate = cache?.frontmatter?.date;
      
      let newName = null;
      let dateStr = null;
      
      // Extract date from filename
      const parenthesesMatch = file.name.match(/\(([^)]+)\)/);
      if (parenthesesMatch) {
        const dateCandidate = parenthesesMatch[1];
        
        // Check if it's already a proper date
        if (dateCandidate.match(/\d{2}-\d{2}-\d{4}/)) {
          // Convert MM-DD-YYYY to DD-MM-YYYY if needed
          dateStr = convertDateFormat(dateCandidate);
        } else if (dateCandidate.match(/\d{4,6}/)) {
          // Compressed date
          dateStr = parseCompressedDate(dateCandidate, frontmatterDate);
        }
      } else if (frontmatterDate && frontmatterDate.match(/\d{2}-\d{2}-\d{4}/)) {
        // Use frontmatter date if no date in filename
        dateStr = frontmatterDate;
      }
      
      // Generate new name if we have a date
      if (dateStr) {
        // Special handling for WP/WREEP files
        const prefix = file.name.toLowerCase().includes('wreep') ? 'WP' : folder.prefix;
        newName = `${prefix} Meeting (${dateStr}).md`;
        
        // Only rename if different
        if (newName !== file.name) {
          if (!dryRun) {
            // CRITICAL FIX: Keep file in same directory
            const folderPath = file.parent.path;
            const newPath = folderPath + '/' + newName;
            
            // Check if target already exists
            const targetExists = app.vault.getAbstractFileByPath(newPath);
            if (targetExists) {
              skips.push(`${file.name} (target exists)`);
              folderSkipped++;
              continue;
            }
            
            // Perform the rename - FIXED to include path
            await app.fileManager.renameFile(file, file.parent.path + '/' + newName);
          }
          
          changes.push({
            old: file.name,
            new: newName
          });
          
          folderRenamed++;
          totalRenamed++;
          
          renameLog.push({
            folder: folder.prefix,
            oldName: file.name,
            newName: newName,
            path: file.path
          });
        } else {
          skips.push(file.name);
          folderSkipped++;
        }
      } else {
        noDateFiles.push(file.name);
        folderNoDate++;
        totalNoDate++;
      }
    } catch (error) {
      errors.push(`${file.name}: ${error.message}`);
      folderErrors++;
      totalErrors++;
    }
  }
  
  // Output organized results
  if (changes.length > 0) {
    report += `### ✅ Files ${dryRun ? 'to rename' : 'renamed'}: ${changes.length}\n\n`;
    changes.forEach(change => {
      report += `- 📝 \`${change.old}\`\n`;
      report += `  ➡️  \`${change.new}\`\n`;
    });
    report += '\n';
  }
  
  if (noDateFiles.length > 0) {
    report += `### 📅 No date found: ${noDateFiles.length}\n\n`;
    noDateFiles.forEach(file => {
      report += `- ⚠️ \`${file}\`\n`;
    });
    report += '\n';
  }
  
  if (skips.length > 0) {
    report += `<details>\n<summary>⏭️ Skipped: ${skips.length}</summary>\n\n`;
    skips.forEach(file => {
      report += `- \`${file}\`\n`;
    });
    report += '\n</details>\n\n';
  }
  
  if (errors.length > 0) {
    report += `### ❌ Errors: ${errors.length}\n\n`;
    errors.forEach(error => {
      report += `- 🚨 ${error}\n`;
    });
    report += '\n';
  }
  
  // Folder summary
  report += `**Summary**: `;
  if (folderRenamed > 0) report += `✅ ${folderRenamed} renamed `;
  if (folderSkipped > 0) report += `⏭️ ${folderSkipped} skipped `;
  if (folderNoDate > 0) report += `📅 ${folderNoDate} no date `;
  if (folderErrors > 0) report += `❌ ${folderErrors} errors`;
  report += '\n\n---\n\n';
  
  totalSkipped += folderSkipped;
}

// Final summary with visual indicators
report += `## 📊 FINAL SUMMARY\n\n`;

const summaryTable = `| Metric | Count | Status |
|--------|-------|--------|
| 📁 Total files processed | ${totalRenamed + totalSkipped + totalNoDate + totalErrors} | |
| ✅ Files ${dryRun ? 'to rename' : 'renamed'} | **${totalRenamed}** | ${totalRenamed > 0 ? '🟢' : '⚪'} |
| ⏭️ Files skipped | ${totalSkipped} | ${totalSkipped > 0 ? '🔵' : '⚪'} |
| 📅 Files without dates | ${totalNoDate} | ${totalNoDate > 0 ? '🟡' : '⚪'} |
| ❌ Errors | ${totalErrors} | ${totalErrors > 0 ? '🔴' : '⚪'} |`;

report += summaryTable + '\n\n';

if (renameLog.length > 0 && !dryRun) {
  // Save rename log for potential rollback
  const logContent = JSON.stringify(renameLog, null, 2);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const logFileName = `rename-log-${timestamp}.json`;
  await app.vault.create(logFileName, logContent);
  report += `### 💾 Backup Created\n`;
  report += `Rename log saved to: \`${logFileName}\`\n`;
  report += `Use this file with the rollback script if needed.\n\n`;
}

// Next steps
report += `### 🎯 Next Steps\n\n`;
if (dryRun) {
  report += `1. Review the changes above\n`;
  report += `2. If everything looks good, run the script again in **Execute** mode\n`;
  report += `3. The script will rename the files and create a backup log\n`;
} else {
  report += `1. ✅ Renaming complete!\n`;
  report += `2. Check a few files to verify links still work\n`;
  report += `3. If any issues, use the rollback script with \`${logFileName ?? 'the log file'}\`\n`;
  report += `4. Create timeline pages to see your clean, normalized filenames\n`;
}

// Output report
tR = report;

// Show summary notification
if (!dryRun) {
  new Notice(`✅ Renamed ${totalRenamed} files successfully!`);
} else {
  new Notice(`🧪 Test complete: ${totalRenamed} files would be renamed`);
}
-%>
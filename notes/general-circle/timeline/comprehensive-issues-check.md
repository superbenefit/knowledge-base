# Comprehensive Issues Check

This script checks all meeting folders for remaining issues including:
- Meeting numbers incorrectly parsed as dates
- Invalid dates
- Duplicate files
- Unusual patterns
- Files still needing normalization

```javascript
<%*
const folders = [
  { path: 'notes/general-circle/old-gc-meetings', name: 'GC', prefix: 'GC Meeting' },
  { path: 'notes/dao-primitives/primitives-archive/primitives-meetings', name: 'DAO Primitives', prefix: 'DAO Primitives Meeting' },
  { path: 'notes/rpp/rpp-archive/rpp-meetings/core-team-meetings', name: 'RPP Core Team', prefix: 'RPP Core Team Meeting' },
  { path: 'notes/rpp/rpp-archive/rpp-meetings/os-steward-meetings', name: 'RPP OS Steward', prefix: 'RPP OS Steward Meeting' },
  { path: 'notes/rpp/rpp-archive/rpp-meetings/stakeholder-meetings', name: 'RPP Stakeholder', prefix: 'RPP Stakeholder Meeting' },
  { path: 'notes/wp/wp-meetings', name: 'WP', prefix: 'WP Meeting' },
  { path: 'notes/aifs/aifs-meetings', name: 'AIFS', prefix: 'AIFS Meeting' }
];

const issues = {
  invalidDates: [],
  meetingNumberPatterns: [],
  duplicates: [],
  unnormalized: [],
  specialCases: []
};

// Check each folder
for (const folder of folders) {
  const files = app.vault.getFiles()
    .filter(f => f.path.startsWith(folder.path))
    .filter(f => !f.name.includes('template') && !f.name.endsWith('meetings.md'));
  
  // Track seen names for duplicates
  const seenNames = new Map();
  
  for (const file of files) {
    // Check for meeting number patterns (like OS Steward issue)
    const meetingNumMatch = file.name.match(/(?:meeting|steward|stakeholder|cell)\s*#?(\d+)\s+(\d+)/i);
    if (meetingNumMatch && !file.name.includes('(')) {
      issues.meetingNumberPatterns.push({
        file: file.name,
        folder: folder.name,
        meetingNum: meetingNumMatch[1],
        dateStr: meetingNumMatch[2]
      });
    }
    
    // Check for invalid dates in normalized files
    const dateMatch = file.name.match(/\((\d{2})-(\d{2})-(\d{4})\)/);
    if (dateMatch) {
      const day = parseInt(dateMatch[1]);
      const month = parseInt(dateMatch[2]);
      if (day > 31 || day === 0 || month > 12 || month === 0) {
        issues.invalidDates.push({
          file: file.name,
          folder: folder.name,
          date: dateMatch[0],
          issue: `Day: ${day}, Month: ${month}`
        });
      }
    }
    
    // Check for duplicates (similar names or numbers)
    const baseName = file.name.replace(/\s*\(\d+\)\s*/, '').replace(/\.md$/, '');
    if (seenNames.has(baseName)) {
      issues.duplicates.push({
        file1: seenNames.get(baseName),
        file2: file.name,
        folder: folder.name
      });
    } else {
      seenNames.set(baseName, file.name);
    }
    
    // Check for unnormalized files
    if (!file.name.match(/^[A-Z].* Meeting \(\d{2}-\d{2}-\d{4}\)\.md$/)) {
      // Skip known non-meeting files
      if (!file.name.includes('Gathering') && 
          !file.name.includes('Working Session') &&
          !file.name.includes('Call with') &&
          !file.name.includes('Discussion') &&
          !file.name.includes('Sync') &&
          !file.name.includes('Status') &&
          !file.name.includes('Onboarding')) {
        issues.unnormalized.push({
          file: file.name,
          folder: folder.name,
          pattern: detectPattern(file.name)
        });
      }
    }
    
    // Special cases
    if (file.name.includes('Weekly') || file.name.includes('WREEP') || file.name.includes('Cell')) {
      issues.specialCases.push({
        file: file.name,
        folder: folder.name,
        issue: 'Contains legacy naming'
      });
    }
  }
}

// Pattern detection helper
function detectPattern(filename) {
  if (filename.match(/\d{1,2}(st|nd|rd|th)/)) return 'Ordinal number';
  if (filename.match(/\d{4,6}(?:\)|\.md)/)) return 'Compressed date';
  if (filename.match(/Week of/i)) return 'Week of date';
  if (filename.match(/\d{2}-\d{2}-\d{4}/)) return 'MM-DD-YYYY format';
  if (filename.match(/meeting\s+\d+/i)) return 'Meeting number + date';
  return 'Other';
}

// Generate comprehensive report
tR = `# Comprehensive Issues Report\n`;
tR += `Generated: ${new Date().toLocaleDateString()}\n\n`;

// Summary
tR += `## Summary\n\n`;
tR += `- **Invalid dates found**: ${issues.invalidDates.length}\n`;
tR += `- **Meeting number patterns**: ${issues.meetingNumberPatterns.length}\n`;
tR += `- **Duplicate files**: ${issues.duplicates.length}\n`;
tR += `- **Files needing normalization**: ${issues.unnormalized.length}\n`;
tR += `- **Special cases**: ${issues.specialCases.length}\n\n`;

// Invalid Dates
if (issues.invalidDates.length > 0) {
  tR += `## 🚨 Invalid Dates (Fix First!)\n\n`;
  tR += `| Folder | File | Invalid Date | Issue |\n`;
  tR += `|--------|------|--------------|-------|\n`;
  issues.invalidDates.forEach(item => {
    tR += `| ${item.folder} | ${item.file} | ${item.date} | ${item.issue} |\n`;
  });
  tR += `\n`;
}

// Meeting Number Patterns
if (issues.meetingNumberPatterns.length > 0) {
  tR += `## 📊 Meeting Number Patterns (Like OS Steward)\n\n`;
  tR += `These files have meeting numbers that might be misparsed as dates:\n\n`;
  tR += `| Folder | File | Meeting # | Date String |\n`;
  tR += `|--------|------|-----------|-------------|\n`;
  issues.meetingNumberPatterns.forEach(item => {
    tR += `| ${item.folder} | ${item.file} | #${item.meetingNum} | ${item.dateStr} |\n`;
  });
  tR += `\n`;
}

// Duplicates
if (issues.duplicates.length > 0) {
  tR += `## 👥 Duplicate Files\n\n`;
  tR += `| Folder | File 1 | File 2 |\n`;
  tR += `|--------|--------|--------|\n`;
  issues.duplicates.forEach(item => {
    tR += `| ${item.folder} | ${item.file1} | ${item.file2} |\n`;
  });
  tR += `\n`;
}

// Unnormalized by folder
if (issues.unnormalized.length > 0) {
  tR += `## 📝 Files Still Needing Normalization\n\n`;
  
  // Group by folder
  const byFolder = {};
  issues.unnormalized.forEach(item => {
    if (!byFolder[item.folder]) byFolder[item.folder] = [];
    byFolder[item.folder].push(item);
  });
  
  for (const [folderName, items] of Object.entries(byFolder)) {
    tR += `### ${folderName} (${items.length} files)\n\n`;
    
    // Group by pattern
    const byPattern = {};
    items.forEach(item => {
      if (!byPattern[item.pattern]) byPattern[item.pattern] = [];
      byPattern[item.pattern].push(item.file);
    });
    
    for (const [pattern, files] of Object.entries(byPattern)) {
      tR += `**${pattern}**:\n`;
      files.slice(0, 5).forEach(f => tR += `- ${f}\n`);
      if (files.length > 5) tR += `- ... and ${files.length - 5} more\n`;
      tR += `\n`;
    }
  }
}

// Special Cases
if (issues.specialCases.length > 0) {
  tR += `## ⚠️ Special Cases\n\n`;
  tR += `Files with legacy naming that need attention:\n\n`;
  tR += `| Folder | File | Issue |\n`;
  tR += `|--------|------|-------|\n`;
  issues.specialCases.forEach(item => {
    tR += `| ${item.folder} | ${item.file} | ${item.issue} |\n`;
  });
}

tR += `\n## Recommended Action Order\n\n`;
tR += `1. **Fix invalid dates first** - These will break timeline views\n`;
tR += `2. **Handle meeting number patterns** - Especially in OS Steward folder\n`;
tR += `3. **Remove duplicates** - Check content and keep best version\n`;
tR += `4. **Normalize remaining files** - Work by pattern type\n`;
tR += `5. **Address special cases** - Remove "Weekly", fix "WREEP", etc.\n`;

-%>
```

## Quick Fixes

### For Invalid Dates
1. Open each file with invalid date
2. Check frontmatter for correct date
3. Rename using F2

### For Meeting Number Patterns  
1. Use the OS Steward parser for those files
2. Similar patterns in other folders need same treatment

### For Duplicates
1. Open both files
2. Compare content
3. Keep the more complete version
4. Delete the duplicate

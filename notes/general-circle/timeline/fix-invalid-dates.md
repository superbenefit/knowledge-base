# Fix Invalid Dates Script

Use this Templater script to identify files with invalid dates and check their frontmatter for correct dates.

```javascript
<%*
// Find files with invalid dates
const invalidDatePatterns = [
  /\((\d{2})-(\d{2})-(\d{4})\)/g  // DD-MM-YYYY format
];

const meetingFolders = [
  'notes/rpp/rpp-archive/rpp-meetings/stakeholder-meetings',
  'notes/rpp/rpp-archive/rpp-meetings/os-steward-meetings'
];

let invalidFiles = [];

for (const folder of meetingFolders) {
  const files = app.vault.getFiles().filter(f => f.path.startsWith(folder));
  
  for (const file of files) {
    const match = file.name.match(/\((\d{2})-(\d{2})-(\d{4})\)/);
    if (match) {
      const day = parseInt(match[1]);
      const month = parseInt(match[2]);
      
      // Check for invalid dates
      if (day > 31 || month > 12 || month === 0 || day === 0) {
        const cache = app.metadataCache.getFileCache(file);
        const correctDate = cache?.frontmatter?.date || 'No date in frontmatter';
        
        invalidFiles.push({
          file: file.path,
          invalidDate: `${match[1]}-${match[2]}-${match[3]}`,
          correctDate: correctDate,
          newName: file.name.replace(match[0], `(${correctDate})`).replace(/\((\d{2})-(\d{2})-(\d{4})\)/, '($1-$2-$3)')
        });
      }
    }
  }
}

// Generate report
tR = `# Invalid Dates Found\n\n`;
tR += `Total files with invalid dates: ${invalidFiles.length}\n\n`;
tR += `| File | Invalid Date | Correct Date | Action Needed |\n`;
tR += `|------|--------------|--------------|---------------|\n`;

for (const item of invalidFiles) {
  tR += `| ${item.file.split('/').pop()} | ${item.invalidDate} | ${item.correctDate} | Rename to: ${item.newName} |\n`;
}

tR += `\n## Manual Fix Instructions\n\n`;
tR += `1. For each file above:\n`;
tR += `   - Right-click → Rename (or press F2)\n`;
tR += `   - Replace the invalid date with the correct date from frontmatter\n`;
tR += `   - If no frontmatter date, check the file content\n`;
-%>
```

## Files to Check Manually:

Based on the post-incident report, these files have invalid dates:

### RPP Stakeholder
- `RPP Stakeholder Meeting (14-20-2024).md` → Check frontmatter
- `RPP Stakeholder Meeting (65-20-2024).md` → Check frontmatter

### RPP OS Steward  
- `RPP OS Steward Meeting (51-01-2024).md` → Check frontmatter
- `RPP OS Steward Meeting (81-00-2024).md` → Check frontmatter

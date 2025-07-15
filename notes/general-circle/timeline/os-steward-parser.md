# OS Steward Meeting Parser Helper

This script helps correctly parse OS Steward meeting filenames that contain meeting numbers.

```javascript
<%*
// Pattern: "OS Stewards meeting [NUMBER] [DATE].md"
// Example: "OS Stewards meeting 36 22425.md" = Meeting #36 on 22-04-2025

const osFiles = app.vault.getFiles()
  .filter(f => f.path.includes('os-steward-meetings'))
  .filter(f => !f.name.includes('RPP OS Steward Meeting'));

const parseResults = [];

for (const file of osFiles) {
  // Match patterns like "meeting 36 22425" or "Meeting 40 20525"
  const match = file.name.match(/meeting (\d+) (\d+)/i);
  
  if (match) {
    const meetingNum = match[1];
    const dateStr = match[2];
    let parsedDate = null;
    
    // Parse date string
    if (dateStr.length === 5) {
      // Format: DMMYY or DDMYY
      if (dateStr[0] === '0' || parseInt(dateStr.substring(0,2)) <= 31) {
        // DDMYY format
        const day = dateStr.substring(0,2);
        const month = dateStr.substring(2,3).padStart(2, '0');
        const year = '20' + dateStr.substring(3,5);
        parsedDate = `${day}-${month}-${year}`;
      } else {
        // DMMYY format
        const day = dateStr.substring(0,1).padStart(2, '0');
        const month = dateStr.substring(1,3);
        const year = '20' + dateStr.substring(3,5);
        parsedDate = `${day}-${month}-${year}`;
      }
    } else if (dateStr.length === 6) {
      // Format: DDMMYY
      const day = dateStr.substring(0,2);
      const month = dateStr.substring(2,4);
      const year = '20' + dateStr.substring(4,6);
      parsedDate = `${day}-${month}-${year}`;
    }
    
    // Check frontmatter for verification
    const cache = app.metadataCache.getFileCache(file);
    const frontmatterDate = cache?.frontmatter?.date;
    
    parseResults.push({
      oldName: file.name,
      meetingNum: meetingNum,
      extractedDate: parsedDate,
      frontmatterDate: frontmatterDate,
      newName: `RPP OS Steward Meeting (${parsedDate || frontmatterDate || 'CHECK-DATE'}).md`,
      needsCheck: !parsedDate || (frontmatterDate && parsedDate !== frontmatterDate)
    });
  }
}

// Generate report
tR = `# OS Steward Meeting Parsing Results\n\n`;
tR += `Files to process: ${parseResults.length}\n\n`;

// Files that need manual checking
const needsCheck = parseResults.filter(r => r.needsCheck);
if (needsCheck.length > 0) {
  tR += `## ⚠️ Files Needing Manual Check\n\n`;
  tR += `| Current Name | Meeting # | Parsed Date | Frontmatter | Issue |\n`;
  tR += `|--------------|-----------|-------------|-------------|-------|\n`;
  needsCheck.forEach(r => {
    const issue = !r.extractedDate ? 'Could not parse' : 'Date mismatch';
    tR += `| ${r.oldName} | #${r.meetingNum} | ${r.extractedDate || 'Failed'} | ${r.frontmatterDate || 'None'} | ${issue} |\n`;
  });
  tR += `\n`;
}

// Files ready to rename
const ready = parseResults.filter(r => !r.needsCheck);
if (ready.length > 0) {
  tR += `## ✅ Ready to Rename\n\n`;
  tR += `| Current Name | Meeting # | Date | New Name |\n`;
  tR += `|--------------|-----------|------|----------|\n`;
  ready.forEach(r => {
    tR += `| ${r.oldName} | #${r.meetingNum} | ${r.extractedDate} | ${r.newName} |\n`;
  });
}

tR += `\n## Date Parsing Examples\n\n`;
tR += `- \`22425\` → 22-04-2025 (April 22, 2025)\n`;
tR += `- \`1425\` → 01-04-2025 (April 1, 2025)\n`;
tR += `- \`101224\` → 10-12-2024 (December 10, 2024)\n`;
tR += `- \`20525\` → 20-05-2025 (May 20, 2025)\n`;

-%>
```

## Manual Instructions

1. Run this template to see parsing results
2. Check any files marked as needing manual review
3. For each file:
   - Verify the parsed date is correct
   - Use F2 to rename to the new name
   - Remove the meeting number from the filename

The meeting numbers are just sequential counters and don't need to be preserved in the normalized filenames.

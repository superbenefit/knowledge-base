# AIFS Files Processing Script - Updated with Database Dates

Based on the database export, we now have dates for ALL AIFS files!

```javascript
<%*
// Complete AIFS date mapping from database export
const aifsDateMapping = {
  // Gatherings (from database)
  "AIFS Gathering #0.md": "13-11-2024",
  "AIFS Gathering #1.md": "11-12-2024",
  "AIFS Gathering #2.md": "08-01-2025",
  "AIFS Gathering #3.md": "22-01-2025",
  "AIFS Gathering #4.md": "05-02-2025",
  "AIFS Gathering #5.md": "19-02-2025",
  
  // Other meetings without dates (from database)
  "Call with Love Futbol.md": "15-10-2024",
  "Community Weaver Role Discussion.md": "21-10-2024",
  "Gatherings Working Session.md": "25-11-2024",
  "AIFS Working Session.md": "15-01-2025",
  "AIFS Working Session (1).md": "15-01-2025", // Same date - duplicate meeting
  "Discord Onboarding.md": "17-02-2025",
  "Future of AIFS Gatherings.md": "17-02-2025",
  "IOC Explore 365 QF Ideation.md": "17-02-2025",
  "AIFS Weekly Check-in.md": "19-03-2025",
  "AIFS Status Meeting.md": "26-03-2025",
  "AIFS Meeting with Chiliz.md": "31-03-2025",
  "Love Futbol x AIFS.md": "30-05-2025",
  
  // Files with compressed dates (parse from filename)
  "AIFS Weekly Meeting (11625).md": "11-06-2025",
  "AIFS Weekly Meeting (18625).md": "18-06-2025",
  "Community Experience Meeting (15824).md": "15-08-2024",
  "Community Experience Meeting (5924).md": "05-09-2024",
  "Community Experience Meeting (25924).md": "25-09-2024",
  "Community Experience Meeting (300924).md": "30-09-2024",
  "Community Experience Weekly Sync (21024).md": "02-10-2024",
  "Community Experience Weekly Sync (91024).md": "09-10-2024",
  "Community Experience Weekly Sync (161024).md": "16-10-2024",
  "Community Experience Weekly Sync (231024).md": "23-10-2024",
  "CX Weekly Sync (301024).md": "30-10-2024",
  "Gatherings Sync (201124).md": "20-11-2024"
};

// Files to skip (not meetings)
const skipFiles = [
  "AIFS Gathering.md", // Template
  "aifs-meetings.md", // Index
  "Community Experience Weekly Sync.md" // Template
];

// Process all AIFS files
const aifsPath = 'notes/aifs/aifs-meetings';
const files = app.vault.getFiles().filter(f => f.path.startsWith(aifsPath));

const results = {
  needsDateAndRename: [],
  alreadyProcessed: [],
  skipped: []
};

for (const file of files) {
  if (skipFiles.includes(file.name)) {
    results.skipped.push(file.name);
    continue;
  }
  
  const mappedDate = aifsDateMapping[file.name];
  if (mappedDate) {
    // Determine new name
    let newName = `AIFS Meeting (${mappedDate}).md`;
    
    // Check if already has correct name
    if (file.name === newName) {
      results.alreadyProcessed.push(file.name);
    } else {
      results.needsDateAndRename.push({
        currentName: file.name,
        date: mappedDate,
        newName: newName,
        path: file.path
      });
    }
  }
}

// Generate report
tR = `# AIFS Complete Processing Report\n\n`;
tR += `Based on database export analysis\n\n`;

tR += `## Summary\n`;
tR += `- Files needing processing: ${results.needsDateAndRename.length}\n`;
tR += `- Already processed: ${results.alreadyProcessed.length}\n`;
tR += `- Skipped (templates/index): ${results.skipped.length}\n\n`;

tR += `## Files to Process\n\n`;
tR += `| Current Name | Date to Add | New Name |\n`;
tR += `|--------------|-------------|----------|\n`;

results.needsDateAndRename.forEach(item => {
  tR += `| ${item.currentName} | ${item.date} | ${item.newName} |\n`;
});

tR += `\n## Processing Instructions\n\n`;
tR += `1. For each file above:\n`;
tR += `   - Open the file\n`;
tR += `   - Add frontmatter:\n`;
tR += `     \`\`\`yaml\n`;
tR += `     tags: meetings\n`;
tR += `     date: DD-MM-YYYY\n`;
tR += `     \`\`\`\n`;
tR += `   - Save the file\n`;
tR += `   - Press F2 to rename\n\n`;

tR += `## Batch Frontmatter Script\n\n`;
tR += `Run this to add frontmatter to all files at once:\n\n`;

// Generate batch script
const batchScript = `
// Add frontmatter to all AIFS files
const updates = ${JSON.stringify(results.needsDateAndRename.map(item => ({
  path: item.path,
  date: item.date
})), null, 2)};

for (const update of updates) {
  const file = app.vault.getAbstractFileByPath(update.path);
  if (file) {
    const content = await app.vault.read(file);
    const newContent = \`---
tags: meetings
date: \${update.date}
---
\${content.startsWith('---') ? content.substring(content.indexOf('---', 3) + 3).trim() : content}\`;
    await app.vault.modify(file, newContent);
    console.log(\`Updated: \${file.name}\`);
  }
}
console.log('Frontmatter added to all files!');
`;

tR += `\`\`\`javascript\n${batchScript}\n\`\`\`\n`;

tR += `\n## Notes\n\n`;
tR += `- All AIFS Gatherings now have specific dates from the database\n`;
tR += `- Files marked "AIFS Working Session" on same date are likely the same meeting\n`;
tR += `- Some files on 17-02-2025 appear to be related sessions on the same day\n`;

-%>
```

## Key Findings from Database Export

1. **All AIFS Gatherings have dates!**
   - Gathering #0: 13-11-2024
   - Gathering #1: 11-12-2024
   - Gathering #2: 08-01-2025
   - Gathering #3: 22-01-2025
   - Gathering #4: 05-02-2025
   - Gathering #5: 19-02-2025

2. **All dateless files now have dates** from the database export

3. **No more guesswork** - every AIFS meeting can be properly dated and normalized

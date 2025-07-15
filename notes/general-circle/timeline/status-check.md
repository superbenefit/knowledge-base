# Current Normalization Status Check

Run this Templater script to get an exact count of what still needs to be normalized.

```javascript
<%*
const folders = [
  { path: 'notes/general-circle/old-gc-meetings', name: 'GC' },
  { path: 'notes/dao-primitives/primitives-archive/primitives-meetings', name: 'DAO Primitives' },
  { path: 'notes/rpp/rpp-archive/rpp-meetings/core-team-meetings', name: 'RPP Core Team' },
  { path: 'notes/rpp/rpp-archive/rpp-meetings/os-steward-meetings', name: 'RPP OS Steward' },
  { path: 'notes/rpp/rpp-archive/rpp-meetings/stakeholder-meetings', name: 'RPP Stakeholder' },
  { path: 'notes/wp/wp-meetings', name: 'WP' },
  { path: 'notes/aifs/aifs-meetings', name: 'AIFS' }
];

const normalizedPattern = /^[A-Z].* Meeting \(\d{2}-\d{2}-\d{4}\)\.md$/;
const invalidDatePattern = /\((\d{2})-(\d{2})-(\d{4})\)/;

let report = [];

for (const folder of folders) {
  const files = app.vault.getFiles().filter(f => f.path.startsWith(folder.path));
  const meetingFiles = files.filter(f => 
    !f.name.includes('template') && 
    !f.name.endsWith('meetings.md') &&
    f.name !== folder.name + '.md'
  );
  
  let normalized = 0;
  let needsWork = [];
  let invalidDates = [];
  
  for (const file of meetingFiles) {
    if (normalizedPattern.test(file.name)) {
      // Check for invalid dates
      const match = file.name.match(invalidDatePattern);
      if (match) {
        const day = parseInt(match[1]);
        const month = parseInt(match[2]);
        if (day > 31 || month > 12 || month === 0 || day === 0) {
          invalidDates.push(file.name);
        } else {
          normalized++;
        }
      }
    } else {
      needsWork.push(file.name);
    }
  }
  
  report.push({
    folder: folder.name,
    total: meetingFiles.length,
    normalized: normalized,
    needsWork: needsWork.length,
    invalidDates: invalidDates.length,
    status: normalized === meetingFiles.length ? '✅' : 
            needsWork.length > 20 ? '❌' : '⚠️',
    examples: needsWork.slice(0, 3)
  });
}

// Generate report
tR = `# Normalization Status Report\n`;
tR += `Generated: ${new Date().toLocaleDateString()}\n\n`;

tR += `## Summary\n\n`;
tR += `| Folder | Status | Total | Normalized | Needs Work | Invalid Dates |\n`;
tR += `|--------|--------|-------|------------|------------|---------------|\n`;

for (const item of report) {
  tR += `| ${item.folder} | ${item.status} | ${item.total} | ${item.normalized} | ${item.needsWork} | ${item.invalidDates} |\n`;
}

tR += `\n## Details\n\n`;

for (const item of report) {
  if (item.needsWork > 0 || item.invalidDates > 0) {
    tR += `### ${item.folder}\n\n`;
    
    if (item.invalidDates > 0) {
      tR += `**Invalid dates to fix:**\n`;
      tR += `- Check frontmatter for correct dates\n\n`;
    }
    
    if (item.needsWork > 0) {
      tR += `**Files needing normalization:** ${item.needsWork}\n`;
      tR += `**Examples:**\n`;
      item.examples.forEach(ex => {
        tR += `- ${ex}\n`;
      });
      tR += `\n`;
    }
  }
}

tR += `## Priority Order\n\n`;
tR += `1. Fix invalid dates first (critical)\n`;
tR += `2. Small folders: WP, DAO Primitives\n`;
tR += `3. Medium folders: RPP Stakeholder\n`;
tR += `4. Large folders: RPP OS Steward\n`;
tR += `5. AIFS: Most files don't have dates (optional)\n`;

-%>
```

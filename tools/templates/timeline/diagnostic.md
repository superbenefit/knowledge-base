<%*
// Timeline Diagnostic Tool
// Helps troubleshoot common timeline issues
-%>
# Timeline System Diagnostic

Run Time: <%= tp.date.now("YYYY-MM-DD HH:mm") %>

## Plugin Check

Templater: <%= tp.user ? "✅ Installed" : "❌ Not found" %>
Dataview: <%= app.plugins.enabledPlugins.has("dataview") ? "✅ Enabled" : "❌ Not enabled" %>

## Meeting Files Overview

Total files with #meetings tag: `$= dv.pages("#meetings").length`
Files with valid dates: `$= dv.pages("#meetings").where(p => p.date).length`
Files missing dates: `$= dv.pages("#meetings").where(p => !p.date).length`

## Date Format Check

### Valid Dates (Sample)
```dataview
TABLE date
FROM #meetings
WHERE date != null
LIMIT 5
```

### Invalid/Missing Dates (Sample)
```dataview
TABLE file.folder as "Location"
FROM #meetings
WHERE date = null
LIMIT 10
```

## Timeline Structure

Timeline folder exists: <%= app.vault.getAbstractFileByPath("notes/general-circle/timeline") ? "✅ Yes" : "❌ No" %>

### Existing Timeline Pages
```dataview
LIST file.name
FROM "notes/general-circle/timeline"
WHERE file.name =~ /^\d{4}-\d{2}$/
SORT file.name DESC
LIMIT 10
```

## Common Issues & Solutions

<% 
const issues = [];
const dv = app.plugins.plugins.dataview?.api;

// Check for meetings without dates
const meetingsWithoutDates = dv?.pages("#meetings").where(p => !p.date).length || 0;
if (meetingsWithoutDates > 0) {
    issues.push(`**${meetingsWithoutDates} meetings missing dates**\n   → Run batch-date-updater-enhanced on affected folders`);
}

// Check for timeline folder
if (!app.vault.getAbstractFileByPath("notes/general-circle/timeline")) {
    issues.push(`**Timeline folder missing**\n   → Create folder: notes/general-circle/timeline/`);
}

// Check for very old date formats
const oldDates = dv?.pages("#meetings").where(p => p.date && p.date.year < 2020).length || 0;
if (oldDates > 0) {
    issues.push(`**${oldDates} meetings with dates before 2020**\n   → Verify these dates are correct (might be parsing errors)`);
}

if (issues.length === 0) {
    issues.push("✅ No issues detected! System appears ready.");
}

tR += issues.map((issue, i) => `${i + 1}. ${issue}`).join("\n\n");
%>

## Quick Actions

1. **Run batch date updater**: Fix missing dates
2. **Create timeline index**: `notes/general-circle/timeline/timeline.md`
3. **Create a test timeline**: Try `2024-01.md` to verify system works
4. **Check coverage**: Run coverage-analyzer template

---
*This diagnostic updates each time you run it. Save results if needed for comparison.*
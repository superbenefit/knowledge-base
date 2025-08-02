# Link Normalization Progress Dashboard

**Project Start**: 2025-08-01  
**Current Phase**: Phase 3 Ready to Begin

## Checklist Progress

```dataview
TABLE WITHOUT ID
  file.link as "File",
  length(filter(file.lists.text, (x) => contains(x, "[x]"))) as "✓",
  length(filter(file.lists.text, (x) => contains(x, "[ ]"))) as "☐",
  round((length(filter(file.lists.text, (x) => contains(x, "[x]"))) / (length(filter(file.lists.text, (x) => contains(x, "[x]"))) + length(filter(file.lists.text, (x) => contains(x, "[ ]"))))) * 100, 0) + "%" as "%"
FROM "link-fix"
WHERE contains(file.lists.text, "[ ]") OR contains(file.lists.text, "[x]")
```

## Recent Activity (Last 3 Days)

```dataview
TABLE WITHOUT ID
  file.link as "File",
  file.mtime as "Modified"
FROM "" AND -"link-fix" AND -"tools/templates"
WHERE file.mtime > date(today) - dur(3 days)
SORT file.mtime DESC
LIMIT 10
```

## Phase Summaries

```dataview
LIST WITHOUT ID file.link
FROM "link-fix"
WHERE contains(file.name, "-summary")
SORT file.name ASC
```

## Log Files

```dataview
TABLE WITHOUT ID
  file.link as "Log",
  file.size as "Size"
FROM "link-fix"
WHERE contains(file.name, "-log") OR contains(file.name, "-tracking")
SORT file.name ASC
```

## Link Processing Progress

```dataviewjs
// Initialize totals from Phase 1 analysis
const totals = {
  totalLinks: 15982,
  wikilinks: 6627,
  leadingSlash: 307,
  byPhase: {
    "Phase 3 (Pre-process)": { files: 28, links: 307 },
    "Phase 4 (Artifacts)": { files: 62, links: 3751 },
    "Phase 5 (Tags/Root)": { files: 89, links: 854 },
    "Phase 6 (Notes)": { files: 1680, links: 10957 },
    "Phase 6.7 (Links)": { files: 30, links: 417 }
  }
};

// Try to read CSV logs to get actual progress
let processed = {
  leadingSlashFixed: 0,
  wikilinksConverted: 0,
  byPhase: {}
};

// Read all phase logs
const logFiles = [
  { path: "link-fix/08-phase3-preprocessing-log.csv", type: "leadingSlash" },
  { path: "link-fix/08-phase4-artifacts-log.csv", type: "wikilink" },
  { path: "link-fix/08-phase5-reference-log.csv", type: "wikilink" },
  { path: "link-fix/08-phase6-notes-log.csv", type: "wikilink" }
];

for (const log of logFiles) {
  try {
    const csvData = await dv.io.csv(log.path);
    if (csvData) {
      const count = csvData.length;
      if (log.type === "leadingSlash") {
        processed.leadingSlashFixed += count;
      } else {
        processed.wikilinksConverted += count;
      }
      // Extract phase name from filename
      const phaseName = log.path.match(/phase\d+/)[0];
      processed.byPhase[phaseName] = count;
    }
  } catch (e) {
    // File doesn't exist yet, skip
  }
}

// Display progress table
const rows = [];

// Leading slash progress
rows.push([
  "Leading Slashes",
  processed.leadingSlashFixed + " / " + totals.leadingSlash,
  Math.round((processed.leadingSlashFixed / totals.leadingSlash) * 100) + "%"
]);

// Wikilinks progress
rows.push([
  "Wikilinks → Markdown",
  processed.wikilinksConverted + " / " + totals.wikilinks,
  Math.round((processed.wikilinksConverted / totals.wikilinks) * 100) + "%"
]);

// Overall progress
const totalProcessed = processed.leadingSlashFixed + processed.wikilinksConverted;
const totalToProcess = totals.totalLinks;
rows.push([
  "**Total Progress**",
  "**" + totalProcessed + " / " + totalToProcess + "**",
  "**" + Math.round((totalProcessed / totalToProcess) * 100) + "%**"
]);

dv.table(["Type", "Progress", "%"], rows);

// Phase breakdown
dv.header(3, "Progress by Phase");
const phaseRows = [];
for (const [phase, data] of Object.entries(totals.byPhase)) {
  const phaseKey = phase.match(/Phase \d+/)?.[0]?.toLowerCase().replace(' ', '');
  const filesProcessed = processed.byPhase[phaseKey] || 0;
  phaseRows.push([
    phase, 
    filesProcessed + " / " + data.files + " files",
    data.links + " links"
  ]);
}
dv.table(["Phase", "Files Processed", "Total Links"], phaseRows);
```

---

*Dashboard auto-updates. Refresh to see changes.*
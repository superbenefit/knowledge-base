<%*
// Timeline Index Template
// Automatically generates an index of all timeline pages
-%>
# Meeting Timeline Index

## Overview

This timeline tracks all meetings across the various groups and teams in the knowledge base.

```dataview
TABLE WITHOUT ID
  length(rows) as "Total Timeline Pages",
  min(rows.file.name) as "Earliest",
  max(rows.file.name) as "Latest"
FROM "notes/general-circle/timeline"
WHERE file.name != "timeline"
```

## Timeline by Year

```dataview
TABLE WITHOUT ID
  link(file.link, dateformat(date(file.name + "-01"), "MMMM yyyy")) as Month,
  choice(summary, summary, "") as Summary
FROM "notes/general-circle/timeline"
WHERE file.name != "timeline"
SORT file.name DESC
GROUP BY substring(file.name, 0, 4) as Year
```

## Quick Navigation

### 2025
```dataview
LIST WITHOUT ID link(file.link, dateformat(date(file.name + "-01"), "MMMM"))
FROM "notes/general-circle/timeline"
WHERE file.name != "timeline" AND startswith(file.name, "2025")
SORT file.name ASC
```

### 2024
```dataview
LIST WITHOUT ID link(file.link, dateformat(date(file.name + "-01"), "MMMM"))
FROM "notes/general-circle/timeline"
WHERE file.name != "timeline" AND startswith(file.name, "2024")
SORT file.name ASC
```

### 2023
```dataview
LIST WITHOUT ID link(file.link, dateformat(date(file.name + "-01"), "MMMM"))
FROM "notes/general-circle/timeline"
WHERE file.name != "timeline" AND startswith(file.name, "2023")
SORT file.name ASC
```

### 2022
```dataview
LIST WITHOUT ID link(file.link, dateformat(date(file.name + "-01"), "MMMM"))
FROM "notes/general-circle/timeline"
WHERE file.name != "timeline" AND startswith(file.name, "2022")
SORT file.name ASC
```

### 2021
```dataview
LIST WITHOUT ID link(file.link, dateformat(date(file.name + "-01"), "MMMM"))
FROM "notes/general-circle/timeline"
WHERE file.name != "timeline" AND startswith(file.name, "2021")
SORT file.name ASC
```

## Statistics

```dataview
TABLE WITHOUT ID
  length(rows) as "Total Meetings",
  min(date) as "First Meeting",
  max(date) as "Last Meeting"
FROM #meetings
WHERE date != null
```

## Historical Meeting Archives

These consolidated files contain meeting history that has been extracted into individual meeting files:

- [[notes/dao-primitives/primitives-archive/primitives-docs/2022-04-19 - Weekly Meeting Notes - DAO Primitives|DAO Primitives Weekly Notes (2022-2024)]]
- [[notes/rpp/rpp-archive/rpp-docs/old-rpp-docs/2023-08-08 - [TO MOVE] Meeting Notes - RP Planning Workstream|RPP Planning Workstream Notes (2023)]]
- [[notes/wp/wp-meetings/wp-clarity-meeting-notes|WP/WREEP Clarity Meeting Notes]]

---
Created: <% tp.date.now("YYYY-MM-DD") %>
Template: [[tools/templates/timeline/timeline-index]]
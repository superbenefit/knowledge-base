<%*
// Timeline Index Template (Improved)
// A clean, efficient index of timeline pages
-%>
# Meeting Timeline

Navigate monthly meeting timelines across all projects and teams.

## Timeline Pages

```dataview
TABLE WITHOUT ID
  link(file.link, dateformat(date(file.name + "-01"), "MMMM yyyy")) as Month,
  length(filter(this.file.outlinks, (l) => contains(meta(l).tags, "meetings"))) as "Meetings"
FROM "notes/general-circle/timeline"
WHERE file.name =~ /^\d{4}-\d{2}$/
SORT file.name DESC
```

## Coverage

First Timeline: `$= dv.pages('"notes/general-circle/timeline"').where(p => p.file.name.match(/^\d{4}-\d{2}$/)).sort(p => p.file.name)[0]?.file.name || "None yet"`
Latest Timeline: `$= dv.pages('"notes/general-circle/timeline"').where(p => p.file.name.match(/^\d{4}-\d{2}$/)).sort(p => p.file.name, 'desc')[0]?.file.name || "None yet"`

Total Meeting Files: `$= dv.pages("#meetings").where(p => p.date).length`
Date Range: `$= dv.pages("#meetings").where(p => p.date).sort(p => p.date)[0]?.date || "Unknown"` to `$= dv.pages("#meetings").where(p => p.date).sort(p => p.date, 'desc')[0]?.date || "Unknown"`

## Historical Archives

Original consolidated meeting files (preserved for reference):
- [[2022-04-19 - Weekly Meeting Notes - DAO Primitives|DAO Primitives Weekly Notes]]
- [[2023-08-08 - [TO MOVE] Meeting Notes - RP Planning Workstream|RPP Planning Notes]]
- [[wp-clarity-meeting-notes|WP/WREEP Clarity Notes]]

---
*Use timeline pages to explore meetings by month. Create new timeline pages as needed using the monthly template.*
<%*
// Timeline Coverage Analyzer
// Helps identify gaps and validate timeline completeness
-%>
# Timeline Coverage Analysis

Generated: `= dateformat(date(now), "yyyy-MM-dd HH:mm")`

## Meeting Files Status

```dataview
TABLE WITHOUT ID
  file.folder as "Folder",
  length(rows) as "Total",
  length(filter(rows, (r) => r.date != null)) as "With Dates",
  length(filter(rows, (r) => r.date = null)) as "Missing Dates"
FROM #meetings
GROUP BY file.folder
SORT "Total" DESC
```

## Date Coverage by Month

```dataview
TABLE WITHOUT ID
  dateformat(date(this.month + "-01"), "MMMM yyyy") as "Month",
  length(rows) as "Meetings",
  join(map(groupBy(rows, (r) => meta(r.file.folder).aliases[0] || substring(r.file.folder, strlength(r.file.folder) - 20)), (g) => g.key + ": " + length(g.rows)), ", ") as "By Project"
FROM #meetings
WHERE date != null
FLATTEN dateformat(date, "yyyy-MM") as month
GROUP BY month
SORT month DESC
LIMIT 24
```

## Timeline Pages Created

```dataview
LIST "[[" + file.link + "|" + dateformat(date(file.name + "-01"), "MMMM yyyy") + "]]" + " (" + length(filter(this.file.outlinks, (l) => contains(meta(l).tags, "meetings"))) + " meetings)"
FROM "notes/general-circle/timeline"
WHERE file.name =~ /^\d{4}-\d{2}$/
SORT file.name DESC
```

## Gaps Analysis

### Months Without Timeline Pages
```dataview
TABLE WITHOUT ID
  dateformat(date(month + "-01"), "MMMM yyyy") as "Month",
  meetings as "Meeting Count"
WHERE month != null AND !any(dv.pages('"notes/general-circle/timeline"').file.name, (n) => n = month)
FROM (
  dv.pages("#meetings")
    .where(p => p.date)
    .groupBy(p => p.date.toFormat("yyyy-MM"))
    .map(g => ({ month: g.key, meetings: g.rows.length }))
    .sort(g => g.month, 'desc')
    .limit(12)
)
```

### Files Needing Attention
```dataview
TABLE file.folder as "Location"
FROM #meetings
WHERE date = null
SORT file.folder ASC
LIMIT 20
```

## Quick Actions

1. **Create missing timelines**: Use the months listed above to create timeline pages
2. **Fix missing dates**: Run `batch-date-updater` on folders with missing dates
3. **Split consolidated files**: Check if multi-meeting files need splitting
4. **Validate dates**: Look for files with unusual date formats

---
*This analysis updates automatically as you add dates and create timeline pages.*
<%*
// Timeline Year Template
// Annual overview of meetings
const filename = tp.config.target_file.basename;
const year = filename.match(/^(\d{4})$/)?.[1];

if (!year) {
    tR = "Error: File must be named YYYY format (e.g., 2023.md)";
    return;
}

const prevYear = String(parseInt(year) - 1);
const nextYear = String(parseInt(year) + 1);

// Generate month list
const months = [];
for (let m = 1; m <= 12; m++) {
    const monthStr = String(m).padStart(2, '0');
    const monthName = moment(`${year}-${monthStr}-01`).format("MMMM");
    months.push(`[[${year}-${monthStr}|${monthName}]]`);
}
-%>
# <%= year %> Meeting Timeline

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <span>[[<%= prevYear %>|← <%= prevYear %>]]</span>
  <span>[[timeline|Timeline Index]]</span>
  <span>[[<%= nextYear %>|<%= nextYear %> →]]</span>
</div>

## Months
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
<% months.forEach(month => { %>
  <div><%= month %></div>
<% }) %>
</div>

## Summary

```dataview
TABLE WITHOUT ID
  choice(meta(link(file.folder + "/" + this.year + "-" + string(this.month))).file, 
    link(file.folder + "/" + this.year + "-" + string(this.month), dateformat(date(this.year + "-" + string(this.month) + "-01"), "MMMM")),
    dateformat(date(this.year + "-" + string(this.month) + "-01"), "MMMM")) as Month,
  length(rows) as Meetings
FROM #meetings
WHERE date >= date("<%= year %>-01-01") AND date <= date("<%= year %>-12-31")
GROUP BY dateformat(date, "MM") as month
SORT month ASC
```

---
<div style="text-align: center; color: var(--text-muted);">
  <small>Total: `$= dv.pages("#meetings").where(p => p.date >= dv.date("<%= year %>-01-01") && p.date <= dv.date("<%= year %>-12-31")).length` meetings in <%= year %></small>
</div>
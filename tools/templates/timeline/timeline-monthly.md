<%*
// Timeline Monthly Template
// Creates a clean monthly view of meetings
const filename = tp.config.target_file.basename;
const yearMonth = filename.match(/^(\d{4})-(\d{2})$/);

if (!yearMonth) {
    tR = "Error: File must be named YYYY-MM format (e.g., 2023-11.md)";
    return;
}

const [_, year, month] = yearMonth;
const monthName = moment(`${year}-${month}-01`).format("MMMM YYYY");
const prevMonth = moment(`${year}-${month}-01`).subtract(1, 'month').format("YYYY-MM");
const nextMonth = moment(`${year}-${month}-01`).add(1, 'month').format("YYYY-MM");

// Helper to get week number
function getWeekOfMonth(date) {
    const d = moment(date, "DD-MM-YYYY");
    const firstDay = d.clone().startOf('month');
    return Math.ceil((d.date() + firstDay.day()) / 7);
}
-%>
# <%= monthName %> Meetings

[[<%= prevMonth %>|← Previous]] | [[timeline|Index]] | [[<%= nextMonth %>|Next →]]

```dataview
TABLE WITHOUT ID
  "Week " + choice(dateformat(date, "W") != null, dateformat(date, "W"), "?") as Week,
  link(file.link, file.name) as Meeting,
  choice(length(file.tags) > 1, join(filter(file.tags, (t) => t != "meetings"), ", "), "") as Project
FROM #meetings
WHERE date >= date("<%= year %>-<%= month %>-01") 
  AND date <= date("<%= year %>-<%= month %>-31")
SORT date ASC
```

---
*Total meetings this month:* `$= dv.pages("#meetings").where(p => p.date && p.date >= dv.date("<%= year %>-<%= month %>-01") && p.date <= dv.date("<%= year %>-<%= month %>-31")).length`
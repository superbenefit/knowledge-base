<%*
// Timeline Monthly Template (Simplified)
// A cleaner approach with better week grouping
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
-%>
# <%= monthName %>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <span>[[<%= prevMonth %>|← <%= moment(prevMonth + "-01").format("MMM YYYY") %>]]</span>
  <span>[[timeline|Timeline Index]]</span>
  <span>[[<%= nextMonth %>|<%= moment(nextMonth + "-01").format("MMM YYYY") %> →]]</span>
</div>

```dataview
LIST item.file.link + " · " + join(filter(item.file.tags, (t) => t != "meetings"), ", ")
FROM #meetings
WHERE date >= date("<%= year %>-<%= month %>-01") AND date <= date("<%= year %>-<%= month %>-31")
GROUP BY "Week " + dateformat(date, "W") + " (" + dateformat(date, "MMM d") + " - " + dateformat(dateadd(date, 6, "days"), "d") + ")"
SORT date ASC
```

---
<div style="text-align: center; color: var(--text-muted);">
  <small>`$= dv.pages("#meetings").where(p => p.date >= dv.date("<%= year %>-<%= month %>-01") && p.date <= dv.date("<%= year %>-<%= month %>-31")).length` meetings in <%= monthName %></small>
</div>
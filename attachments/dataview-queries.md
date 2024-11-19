# Dataview Reference Documentation

## Overview of Query Methods

Dataview offers four different ways to query and display data from your vault, each written directly in Markdown and live-reloaded when your vault changes.

### 1. Dataview Query Language (DQL)

DQL is a SQL-like language forming Dataview's core functionality. It supports four Query Types with various data commands for refining, resorting, or grouping results.

To create a DQL query, use a codeblock with the `dataview` type:

```dataview
TABLE rating AS "Rating", summary AS "Summary" 
FROM #games
SORT rating DESC
```

> **Note**: Codeblocks must use backticks (`), not apostrophes (')

### 2. Inline DQL

Uses an inline block format with configurable prefix:

```markdown
Today is `= date(today)` - `= [[exams]].deadline - date(today)` until exams!
```

Characteristics:
- Uses `=` prefix (configurable in settings)
- Can only query one value
- Accesses current page via `this.` prefix
- Accesses other pages via `[[linkToPage]]`

Examples:
```markdown
`= this.file.name`
`= this.file.mtime`
`= this.someMetadataField`
`= [[secondPage]].someMetadataField`
```

### 3. Dataview JavaScript (DataviewJS)

Provides full JavaScript capabilities plus a DSL for pulling Dataview data. Create JS blocks using the `dataviewjs` codeblock type:

```dataviewjs
let pages = dv.pages("#books and -#books/finished").where(b => b.rating >= 7);
for (let group of pages.groupBy(b => b.genre)) {
   dv.header(3, group.key);
   dv.list(group.rows.file.name);
}
```

> **Warning**: JavaScript queries have file system access. Be cautious with third-party JS queries.

### 4. Inline DataviewJS

Similar to inline DQL but with full JavaScript capabilities:

```markdown
`$= dv.current().file.mtime`
```

Key differences:
- Uses `$=` prefix (configurable)
- Has access to full DataviewJS capabilities
- Can query and output multiple pages
- Uses the `dv` variable for API access

## Query Structure

### General Format
```dataview
<QUERY-TYPE> <fields>
FROM <source>
<DATA-COMMAND> <expression>
<DATA-COMMAND> <expression>
```

Only the Query Type is mandatory. The query is executed top-to-bottom with each line processing the previous result set.

### Query Types

#### TABLE

TABLE queries render a tabular view of any number of metadata values or calculations. Column headers can be specified via AS <header>.

Basic example:
```dataview
TABLE
```

With fields:
```dataview
TABLE started, file.folder, file.etags
FROM #games
```

Custom column headers:
```dataview
TABLE started, file.folder AS Path, file.etags AS "File Tags"
FROM #games
```

TABLE WITHOUT ID option:
```dataview
TABLE WITHOUT ID
steamid,
file.etags AS "File Tags"
FROM #games
```

#### LIST

LIST outputs a bullet point list of page links or Group keys. You can specify one additional information to show for each result.

Basic example:
```dataview 
LIST
```

With source filtering:
```dataview
LIST 
FROM #games/mobas OR #games/crpg
```

With additional information:
```dataview 
LIST file.folder
```

LIST WITHOUT ID option:
```dataview
LIST WITHOUT ID type
```

#### TASK

TASK queries render an interactive list of tasks. These operate at task level rather than page level.

Basic example:
```dataview
TASK
```

With filtering:
```dataview
TASK
WHERE !completed AND contains(tags, "#shopping")
```

With grouping:
```dataview
TASK
WHERE !completed
GROUP BY file.link
```

#### CALENDAR

CALENDAR queries display results on a monthly calendar, requiring a date field.

Example:
```dataview
CALENDAR file.ctime
```

With date validation:
```dataview
CALENDAR due
WHERE typeof(due) = "date"
```

## Data Commands

### FROM
Determines what pages will be collected:
- Tags: `FROM #tag`
- Folders: `FROM "folder"`
- Single Files: `FROM "path/to/file"`
- Links: `FROM [[note]]` or `FROM outgoing([[note]])`

Combining sources:
- AND: `#tag and "folder"`
- OR: `[[Food]] or [[Exercise]]`
- Negation: `-#tag`

### WHERE
Filters pages on fields:
```dataview
LIST 
WHERE file.mtime >= date(today) - dur(1 day)
```

### SORT
Orders results:
```dataview
SORT date [ASCENDING|DESCENDING|ASC|DESC]
```

### GROUP BY
Groups results by field:
```dataview
GROUP BY field
GROUP BY (computed_field) AS name
```

### FLATTEN
Flattens arrays in rows:
```dataview
FLATTEN field
FLATTEN (computed_field) AS name
```

### LIMIT
Restricts results:
```dataview
LIMIT 5
```

## Expressions

### Literals
```markdown
1                   (number)
true/false          (boolean)
"text"              (text)
date(2021-04-18)    (date)
dur(1 day)          (duration)
[[Link]]            (link)
[1, 2, 3]           (list)
{ a: 1, b: 2 }      (object)
```

### Lambdas
```markdown
(x1, x2) => ...     (lambda)
```

### References
```markdown
field               (field reference)
simple-field        (sanitized field reference)
a.b                 (object field access)
a[expr]             (array/object indexing)
f(a, b, ...)        (function call)
```

### Operators
```markdown
a + b               (addition)
a - b               (subtraction)
a * b               (multiplication)
a / b               (division)
a % b               (modulo)
a > b               (greater than)
a < b               (less than)
a = b               (equals)
a != b              (not equals)
a <= b              (less than or equals)
a >= b              (greater than or equals)
```

## Functions

### Constructors
- `object(key1, value1, ...)`: Creates object
- `list(value1, value2, ...)`: Creates array
- `date(any)`: Parses date
- `dur(any)`: Parses duration
- `number(string)`: Extracts number
- `string(any)`: Converts to string
- `link(path, [display])`: Creates link
- `embed(link, [embed?])`: Creates embed
- `elink(url, [display])`: Creates external link
- `typeof(any)`: Gets type

### Numeric Operations
- `round(number, [digits])`
- `trunc(number)`
- `floor(number)`
- `ceil(number)`
- `min(a, b, ..)`
- `max(a, b, ...)`
- `sum(array)`
- `product(array)`
- `average(array)`
- `minby(array, function)`
- `maxby(array, function)`

### String Operations
- `regextest(pattern, string)`
- `regexmatch(pattern, string)`
- `regexreplace(string, pattern, replacement)`
- `replace(string, pattern, replacement)`
- `lower(string)`
- `upper(string)`
- `split(string, delimiter, [limit])`
- `startswith(string, prefix)`
- `endswith(string, suffix)`
- `padleft(string, length, [padding])`
- `padright(string, length, [padding])`
- `substring(string, start, [end])`
- `truncate(string, length, [suffix])`

### Container Operations
- `contains()` variations:
  - `contains(object|list|string, value)`
  - `icontains(object|list|string, value)`
  - `econtains(object|list|string, value)`
  - `containsword(list|string, value)`
- `extract(object, key1, key2, ...)`
- `sort(list)`
- `reverse(list)`
- `length(object|array)`
- `nonnull(array)`
- `all(array)`
- `any(array)`
- `none(array)`
- `join(array, [delimiter])`
- `filter(array, predicate)`
- `map(array, func)`
- `flat(array, [depth])`
- `slice(array, [start, [end]])`

### Utility Functions
- `default(field, value)`
- `choice(bool, left, right)`
- `hash(seed, [text], [variant])`
- `striptime(date)`
- `dateformat(date|datetime, string)`
- `durationformat(duration, string)`
- `currencyformat(number, [currency])`
- `localtime(date)`
- `meta(link)` with properties:
  - `display`
  - `embed`
  - `path`
  - `subpath`
  - `type`

## Working with Types

### Dates
```markdown
date(2021-11-11)
date(2021-09-20T20:17)
date(today)
date(now)
date(tomorrow)
date(yesterday)
date(sow)
date(eow)
date(som)
date(eom)
date(soy)
date(eoy)
```

### Durations
Supported units:
- Seconds: `s`, `sec`, `secs`, `second`, `seconds`
- Minutes: `m`, `min`, `mins`, `minute`, `minutes`
- Hours: `h`, `hr`, `hrs`, `hour`, `hours`
- Days: `d`, `day`, `days`
- Weeks: `w`, `wk`, `wks`, `week`, `weeks`
- Months: `mo`, `month`, `months`
- Years: `yr`, `yrs`, `year`, `years`

Examples:
```markdown
dur(1 s)
dur(3 minutes)
dur(1 day)
dur(2 weeks)
dur(1 year)
dur(1s 2m 3h)
```

## Best Practices

1. Start with basic queries before adding complexity
2. Use WHERE clauses to filter results early
3. Group results for better organization
4. Use appropriate query types for different data views
5. Verify date fields before comparison
6. Handle null values with default()
7. Use appropriate functions for data type manipulation
8. Consider performance with large vaults

## Error Handling

1. Check data types with typeof()
2. Use default() for null values
3. Validate dates before comparison
4. Handle empty arrays appropriately
5. Use try/catch in DataviewJS when needed

---

*This reference documentation aims to be comprehensive but may be updated as Dataview evolves. Always refer to the [official Dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/) for the latest information.*


---
title: DataviewJS API Reference
type: link
source: https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/
tags:
  - dataview
  - javascript
  - reference
  - documentation
---

# DataviewJS API Reference

A comprehensive reference for the DataviewJS code block query API.

## Codeblock Basics

Dataview JavaScript Codeblocks are created using the dataviewjs language specification:

```javascript
```dataviewjs
dv.table([], ...)
```

The API is available through the implicitly provided `dv` (or `dataview`) variable.

## Core API Methods

### Query Methods

Methods for querying the Dataview index for page metadata.

#### Basic Queries

- `dv.current()`: Get current page information 
- `dv.pages(source)`: Query pages by source pattern
- `dv.pagePaths(source)`: Get paths of matching pages
- `dv.page(path)`: Get full page object by path

#### Render Methods

Methods for rendering content:

- `dv.el(element, text)`: Render HTML elements
- `dv.header(level, text)`: Render headers
- `dv.paragraph(text)`: Render paragraphs
- `dv.span(text)`: Render spans
- `dv.execute(source)`: Execute Dataview queries 
- `dv.executeJs(source)`: Execute DataviewJS
- `dv.view(path, input)`: Load custom views

### Dataview Renderers

Methods for rendering formatted data:

- `dv.list(elements)`: Render lists
- `dv.taskList(tasks, groupByFile)`: Render task lists
- `dv.table(headers, elements)`: Render tables

### Markdown Methods

Methods that return markdown strings:

- `dv.markdownTable(headers, values)`
- `dv.markdownList(values)` 
- `dv.markdownTaskList(tasks)`

### Utility Methods

Helper functions:

- `dv.array(value)`: Convert to Dataview array
- `dv.isArray(value)`: Check if value is array
- `dv.fileLink(path, [embed?], [display-name])`: Create file links
- `dv.sectionLink(path, section, [embed?], [display?])`: Create section links
- `dv.blockLink(path, blockId, [embed?], [display?])`: Create block links
- `dv.date(text)`: Parse dates
- `dv.duration(text)`: Parse durations
- `dv.compare(a, b)`: Compare values
- `dv.equal(a, b)`: Check equality
- `dv.clone(value)`: Deep clone values
- `dv.parse(value)`: Parse Dataview types

### File I/O

Asynchronous file operations:

- `dv.io.csv(path, [origin-file])`: Load CSV files
- `dv.io.load(path, [origin-file])`: Load file contents
- `dv.io.normalize(path, [origin-file])`: Normalize paths

### Query Evaluation 

Methods for executing queries:

- `dv.query(source, [file, settings])`: Execute Dataview query
- `dv.tryQuery(source, [file, settings])`: Execute with error handling
- `dv.queryMarkdown(source, [file], [settings])`: Execute to markdown
- `dv.tryQueryMarkdown(source, [file], [settings])`: Execute to markdown with errors
- `dv.tryEvaluate(expression, [context])`: Evaluate expressions
- `dv.evaluate(expression, [context])`: Evaluate with result object

## Example Usage

### Basic Table
```javascript
dv.table(["File", "Genre", "Rating"], 
  dv.pages("#book")
    .sort(b => b.rating)
    .map(b => [b.file.link, b.genre, b.rating])
)
```

### Task List
```javascript
dv.taskList(dv.pages("#project").file.tasks
  .where(t => !t.completed))
```

### Custom View
```javascript
await dv.view("scripts/custom-view", {
  arg1: "value1",
  arg2: "value2"
})
```

For more details on specific methods and advanced usage, refer to the [official Dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/).


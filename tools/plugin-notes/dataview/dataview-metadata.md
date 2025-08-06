---
title: Adding Metadata to your Pages
type: link
source: https://blacksmithgu.github.io/obsidian-dataview/
tags:
  - dataview
  - metadata
  - documentation
  - reference
---

# Adding Metadata to your Pages

Dataview cannot query all content of your vault. Content must be indexed to be searchable, filterable and displayable. Some content (Implicit fields) is indexed automatically, like bullet points or task lists. Other data needs to be saved in metadata fields to be accessible through dataview.

## What is a "field"?

A metadata field is a key-value pair. The value has a data type that determines its query behavior. You can add any number of fields to a note, list item, or task.

## Adding Fields

Three ways to add fields to notes. Task/list items can use YAML Frontmatter info but cannot add fields to specific items - use Inline Fields for that.

### Frontmatter

YAML Frontmatter adds metadata at the page top. Natively supported by Obsidian. Example:

```markdown
---
alias: "document"
last-reviewed: 2021-08-17
thoughts:
  rating: 8
  reviewable: false
---
```

This creates fields with different data types:
- `alias`: text (wrapped in quotes)
- `last-reviewed`: date (ISO format)
- `thoughts`: object (YAML object syntax)

Example query:
```dataview
LIST
WHERE thoughts.rating = 8
```

### Inline Fields

Natural-looking annotations using `Key:: Value` syntax anywhere in the file. For standalone fields:

```markdown
# Markdown Page

Basic Field:: Some random Value
**Bold Field**:: Nice!
```

Content after `::` becomes the value until the next line break.

> **Note**: Inline fields require double colon `::`, unlike YAML Frontmatter's single colon.

For embedded metadata, use bracket syntax:

```markdown
I would rate this a [rating:: 9]! It was [mood:: acceptable].
```

### Fields on List Items and Tasks

Tasks/list items must use bracket syntax for metadata:

```markdown
- [ ] Send an mail to David about the deadline [due:: 2022-04-05].
```

Alternative parenthesis syntax hides key in Reader mode:

```markdown
This will not show the (longKeyIDontNeedWhenReading:: key).
```

You can mix YAML Frontmatter and Inline fields in the same file.

## Field Names

Sample metadata keys and their representation:

| Metadata Key | Sanitized Key | Value | Data Type |
|--------------|---------------|--------|------------|
| Basic Field | basic-field | Some random Value | Text |
| Bold Field | bold-field | Nice! | Text |
| rating | - | 9 | Number |
| mood | - | acceptable | Text |
| due | - | Date Object for 2022-04-05 | Date |
| longKeyIDontNeedWhenReading | longkeyidontneedwhenreading | key | Text |

Notes on keys:
- Spaces/capitals in keys create sanitized versions (lowercase, dashes for spaces)
- Use sanitized names or row variables in queries
- Formatting tokens (**, ~~) are stripped from keys
- Can use capitalized keys, but sanitized version allows case-insensitive queries

### Special Characters

UTF-8 characters supported in field names:

```markdown
Noël:: Un jeu de console
クリスマス:: 家庭用ゲーム機
[🎅:: a console game]
[xmas🎄:: a console game]
```

Emojis in field names:
- Must use square brackets
- May have OS compatibility issues
- Task shorthands exempt from bracketing requirement

# Field Types

All fields in dataview have a type, which determines how dataview will render, sort, and operate on that field. Read more about how to create fields on "Adding metadata" and which information you have automatically available on metadata on pages and metadata on tasks and lists.

## Why does the type matter?

Dataview provides functions you can use to modify your metadata and allows you to write all sorts of complex queries. Specific functions need specific data types to work correctly. That means the data type of your field determines which functions you can use on these fields and how the functions behave. Furthermore, depending on the type, the output dataview renders can be different.

Most of the time you do not need to worry too much about the type of your fields, but if you want to perform calculations and other magical operations on your data, you should be aware of them.

### Different rendering based on type

If you have this file:

date1:: 2021-02-26T15:15
date2:: 2021-04-17 18:00

```dataview
TABLE date1, date2
WHERE file = this.file
```

You'll see the following output (depending on your Date + Time Format Setting for dataview):
File (1) | date1 | date2
---------|-------|-------
Untitled 2 | 3:15 PM - February 26, 2021 | 2021-04-17 18:00

date1 is recognized as a Date while date2 is a normal Text to dataview, that's why date1 is parsed differently for you.

## Available Field Types

Dataview knows several field types to cover common use cases.

### Text

The default catch-all. If a field doesn't match a more specific type, it is plain text.

Example:: This is some normal text.

### Multiline text

Multiline text as a value is only possible via YAML Frontmatter and the pipe operator:

```markdown
---
poem: |
  Because I could not stop for Death,
  He kindly stopped for me;
  The carriage held but just ourselves
  And Immortality.
author: "[Emily Dickinson](Emily%20Dickinson)"
title: "Because I could not stop for Death"
---
```

For inline fields, a line break means the end of the value.

### Number

Numbers like '6' and '3.6'.

Example:: 6
Example:: 2.4
Example:: -80

In YAML Frontmatter, you write a number without surrounding quotes:

```markdown
---
rating: 8
description: "A nice little horror movie"
---
```

### Boolean

Boolean only knows two values: true or false, as the programming concept.

Example:: true
Example:: false

### Date

Text that matches the ISO8601 notation will be automatically transformed into a date object. ISO8601 follows the format YYYY-MM[-DDTHH:mm:ss.nnn+ZZ]. Everything after the month is optional.

Example:: 2021-04 
Example:: 2021-04-18
Example:: 2021-04-18T04:19:35.000
Example:: 2021-04-18T04:19:35.000+06:30

When querying for these dates, you can access properties that give you a certain portion of your date back:

- field.year
- field.month
- field.weekyear
- field.week
- field.weekday
- field.day
- field.hour
- field.minute
- field.second
- field.millisecond

For example, if you're interested in which month your date lies, you can access it via datefield.month:

birthday:: 2001-06-11

```dataview
LIST birthday
WHERE birthday.month = date(now).month
```

gives you back all birthdays happening this month.

### Duration

Durations are text of the form <time> <unit>, like 6 hours or 4 minutes. Common English abbreviations like 6hrs or 2m are accepted. You can specify multiple units in one field, i.e. 6hr 4min, optionally with comma separator: 6 hours, 4 minutes

Example:: 7 hours
Example:: 16days
Example:: 4min
Example:: 6hr7min
Example:: 9 years, 8 months, 4 days, 16 hours, 2 minutes
Example:: 9 yrs 8 min

### Link

Obsidian links like [Page](Page) or [Page Display](Page).

Example:: [A Page](A%20Page)
Example:: [Render Text](Some%20Other%20Page)

Links in YAML Frontmatter need to be quoted: `key: "[link](tools/types/link.md)"`. This is default Obsidian-supported behavior. Unquoted links lead to invalid YAML frontmatter.

### List

Lists are multi-value fields. In YAML, these are defined as normal YAML lists:

```markdown
---
key3: [one, two, three]
key4:
 - four
 - five
 - six
---
```

In inline fields, they are comma-separated lists values:

Example1:: 1, 2, 3
Example2:: "yes", "or", "no"

Please be aware that in Inline fields, you need to wrap text values into quotes to be recognized as a list (see Example2). yes, or, no is recognized as plain text.

### Object

Objects are a map of multiple fields under one parent field. These can only be defined in YAML frontmatter, using the YAML object syntax:

```markdown
---
obj:
  key1: "Val"
  key2: 3
  key3: 
    - "List1"
    - "List2"
    - "List3"
---
```

# Metadata on Pages

You can add fields to a markdown page (a note) in three different ways - via Frontmatter, Inline fields and Implicit fields. Read more about the first two possibilities in "how to add metadata".

## Implicit Fields

Dataview automatically adds a large amount of metadata to each page. These implicit and automatically added fields are collected under the field `file`. Following are available:

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| `file.name` | Text | The file name as seen in Obsidians sidebar. |
| `file.folder` | Text | The path of the folder this file belongs to. |
| `file.path` | Text | The full file path, including the files name. |
| `file.ext` | Text | The extension of the file type; generally `md`. |
| `file.link` | Link | A link to the file. |
| `file.size` | Number | The size (in bytes) of the file. |
| `file.ctime` | Date with Time | The date that the file was created. |
| `file.cday` | Date | The date that the file was created. |
| `file.mtime` | Date with Time | The date that the file was last modified. |
| `file.mday` | Date | The date that the file was last modified. |
| `file.tags` | List | A list of all unique tags in the note. Subtags are broken down by each level, so `#Tag/1/A` will be stored in the list as `[#Tag, #Tag/1, #Tag/1/A]`. |
| `file.etags` | List | A list of all explicit tags in the note; unlike `file.tags`, does not break subtags down, i.e. `[#Tag/1/A]` |
| `file.inlinks` | List | A list of all incoming links to this file, meaning all files that contain a link to this file. |
| `file.outlinks` | List | A list of all outgoing links from this file, meaning all links the file contains. |
| `file.aliases` | List | A list of all aliases for the note as defined via the YAML frontmatter. |
| `file.tasks` | List | A list of all tasks (I.e., `| [ ] some task`) in this file. |
| `file.lists` | List | A list of all list elements in the file (including tasks); these elements are effectively tasks and can be rendered in task views. |
| `file.frontmatter` | List | Contains the raw values of all frontmatter in form of `key | value` text values; mainly useful for checking raw frontmatter values or for dynamically listing frontmatter keys. |
| `file.day` | Date | Only available if the file has a date inside its file name (of form `yyyy-mm-dd` or `yyyymmdd`), or has a `Date` field/inline field. |
| `file.starred` | Boolean | If this file has been bookmarked via the Obsidian Core Plugin "Bookmarks". |

### Example page

This is a small Markdown page which includes both user-defined ways to add metadata:

```markdown
---
genre: "action"
reviewed: false
---
# Movie X
#movies

**Thoughts**:: It was decent.
**Rating**:: 6

[mood:: okay] | [length:: 2 hours]
```

In addition to the values you see here, the page has also all keys listed above available.

### Example Query

You can query part of the above information with following query, for example:

```dataview
TABLE file.ctime, length, rating, reviewed
FROM #movies
```

# Metadata on Tasks and Lists

Just like pages, you can also add fields on list item and task level to bind it to a specific task as context. For this you need to use the inline field syntax:

```markdown
- [ ] Hello, this is some [metadata:: value]!
- [X] I finished this on [completion:: 2021-08-15].
```

Tasks and list items are the same data wise, so all your bullet points have all the information described here available, too.

## Field Shorthands

The Tasks plugin introduced a different notation by using Emoji to configure the different dates related to a task. In the context of Dataview, this notation is called Field Shorthands. The current version of Dataview only support the dates shorthands as shown below. The priorities and recurrence shorthands are not supported.

Example:
- Due this Saturday 🗓️2021-08-29
- Completed last Saturday ✅2021-08-22
- I made this on ➕1990-06-14
- Task I can start this weekend 🛫2021-08-29
- Task I finished ahead of schedule ⏳2021-08-29 ✅2021-08-22

Field name | Short hand syntax
-----------|------------------
due | 🗓️YYYY-MM-DD
completion | ✅YYYY-MM-DD
created | ➕YYYY-MM-DD
start | 🛫YYYY-MM-DD
scheduled | ⏳YYYY-MM-DD

This means if you want to query for all tasks that are completed 2021-08-22, you'll write:

```dataview
TASK
WHERE completion = date("2021-08-22")
```

## Implicit Fields

Tasks inherit all fields from their parent page and have these additional implicit fields:

| Field name | Data Type | Description |
|------------|-----------|-------------|
| status | Text | The completion status of this task, as determined by the character inside the [ ] brackets. Generally a space " " for incomplete tasks and an "x" for completed tasks, but allows for plugins which support alternative task statuses. |
| checked | Boolean | Whether or not this task's status is not empty, meaning it has some status character (which may or may not be "x") instead of a space in its [ ] brackets. |
| completed | Boolean | Whether or not this specific task has been completed; this does not consider the completion or non-completion of any child tasks. A task is explicitly considered "completed" if it has been marked with an "x". If you use a custom status, e.g. [-], checked will be true, whereas completed will be false. |
| fullyCompleted | Boolean | Whether or not this task and all of its subtasks are completed. |
| text | Text | The plain text of this task, including any metadata field annotations. |
| visual | Text | The text of this task, which is rendered by Dataview. This field can be overriden in DataviewJS to allow for different task text to be rendered than the regular task text, while still allowing the task to be checked (since Dataview validation logic normally checks the text against the text in-file). |
| line | Number | The line of the file this task shows up on. |
| lineCount | Number | The number of Markdown lines that this task takes up. |
| path | Text | The full path of the file this task is in. Equals to file.path for pages. |
| section | Link | Link to the section this task is contained in. |
| tags | List | Any tags inside the task text. |
| outlinks | List | Any links defined in this task. |
| link | Link | Link to the closest linkable block near this task; useful for making links which go to the task. |
| children | List | Any subtasks or sublists of this task. |
| task | Boolean | If true, this is a task; otherwise, it is a regular list element. |
| annotated | Boolean | True if the task text contains any metadata fields, false otherwise. |
| parent | Number |
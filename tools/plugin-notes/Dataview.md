# Dataview

A database-like tool for making advanced queries in Obsidian that enables powerful data organization, filtering, and visualization across your vault.

[dataview-metadata](attachments/dataview-metadata.md)
[dataview-queries](attachments/dataview-queries.md)
[dataviewjs-reference](attachments/dataviewjs-reference.md)

Dataview transforms your Obsidian vault into a queryable knowledge base, allowing you to create dynamic views, track information across notes, and build complex data relationships. It acts as both a metadata index and a query engine, making it possible to surface and organize information in ways that basic linking can't achieve.

![](https://youtu.be/JTObSymEvWA)

Dataview can be complicated to use, and requires a bit of learning. Check out the [official documentation](https://blacksmithgu.github.io/obsidian-dataview/) before attempting to build or work with queries in this vault.

---

# Dataview Overview

Dataview is a live index and query engine for personal knowledge bases. It enables metadata querying, filtering, sorting and grouping of notes through the Dataview Query Language.

## Key Capabilities

- Track and aggregate data from daily notes
- Automatically collect and sort tagged content
- Find pages by date associations
- Identify untagged pages for followup
- Create dynamic views of events and data
- Scale to hundreds of thousands of notes
- Run custom JavaScript against the Dataview API

## Important Note: Display vs Editing
Dataview is focused on displaying and calculating data, not editing notes/metadata (with the exception of task completion).

## Core Components

### 1. Data Indexing

Dataview indexes specific metadata in Markdown files:
- Automatic indexing: tags, bullet points, tasks
- Manual fields via:
  - YAML Frontmatter at file top
  - Inline Fields using `[key:: value]` syntax

Example using Frontmatter:
```markdown
---
author: "Edgar Allan Poe"
published: 1845
tags: poems
---

# The Raven
```

Example using Inline Fields:
```markdown
#poems

# The Raven

From [author:: Edgar Allan Poe], written in (published:: 1845)
```

**Important**: Only indexed data is queryable - regular paragraph text is not indexed.

### 2. Data Querying

Three query methods available:

1. **Dataview Query Language (DQL)**
   - Most common approach
   - Powerful built-in toolset
   - Clear syntax structure

2. **Inline Statements**
   - Display single values
   - Perform calculations
   - Embed within text

3. **JavaScript Queries**
   - Most flexible
   - Most complex
   - For advanced customization

#### DQL Query Structure

Basic components:
- One Query Type (required)
- Optional FROM statement
- Optional Data Commands

Simple example:
```dataview
LIST
```

More complex example:
```dataview
TABLE author, published, file.inlinks AS "Mentions"
FROM #poems
```

#### Data Operations

Queries can perform calculations without modifying source data:
```dataview
TABLE author, date(now).year - published AS "Age in Yrs", length(file.inlinks) AS "Counts of Mentions"
FROM #poems
```

## Best Practices

1. Think about data structure before implementing
2. Use consistent metadata formats
3. Understand what data is automatically indexed
4. Start with simple queries before complex ones
5. Consider query performance in large vaults

For additional support and resources, refer to the [official Dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/).
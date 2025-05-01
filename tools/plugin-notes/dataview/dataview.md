This repository uses Dataview, a powerful query engine for Obsidian, to create dynamic views and analyze information across notes.  Unlike basic linking, Dataview allows for complex data relationships, filtering, and aggregation.  Within this repository, Dataview is used extensively to:

*   **Index and Query Metadata:**  Dataview indexes metadata from YAML frontmatter and inline fields, enabling sophisticated queries to retrieve and organize information.  This includes automatic indexing of tags, bullet points, and tasks.

*   **Create Dynamic Views:**  Dataview generates dynamic views of data, such as tables and lists, that automatically update as the underlying notes change.  This allows for the creation of interactive dashboards and summaries of information.

*   **Aggregate and Analyze Data:**  Dataview facilitates data aggregation and analysis across multiple notes, enabling the tracking of information, identification of trends, and the creation of insightful summaries.

*   **Leverage the Dataview Query Language (DQL):**  This repository utilizes DQL for creating complex queries, filtering data, sorting results, and grouping information.  This allows for highly customized views and analyses.

*   **Utilize Inline Statements and JavaScript Queries:**  In addition to DQL, inline statements and JavaScript queries are employed for more flexible and customized data manipulation and display.

This documentation provides examples and best practices for using Dataview within this specific repository.  For a comprehensive understanding of Dataview's capabilities, refer to the [official documentation](https://blacksmithgu.github.io/obsidian-dataview/).  This repository's use of Dataview is documented in detail in the following files:

*   [Metadata](attachments/dataview-metadata.md):  Explains how to add metadata to your notes for querying.
*   [Queries](attachments/dataview-queries.md):  Provides examples of Dataview Query Language (DQL) and other query methods.
*   [JavaScript API](attachments/dataviewjs-reference.md):  Details the JavaScript API for advanced customization.

---

## Important Note: Display vs Editing
Dataview is focused on displaying and calculating data, not editing notes/metadata (with the exception of task completion).

---

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

---

## Best Practices

1. Think about data structure before implementing
2. Use consistent metadata formats
3. Understand what data is automatically indexed
4. Start with simple queries before complex ones
5. Consider query performance in large vaults

For additional support and resources, refer to the [official Dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/).
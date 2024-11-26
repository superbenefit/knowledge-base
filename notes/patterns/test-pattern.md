---
title: Test Pattern
description: This is a test pattern
url: 
tags:
  - patterns
publish: "false"
type: pattern
primitives: test-primitive
scale:
  - collaboration
  - constituency
  - coordination
  - network
phase:
  - conversation
  - coordination
  - formation
  - organization
functions:
  - governance
  - grants
qualities:
  - autonomy
  - decentralization
---

This pattern is a test

%% Introduce the pattern here %%

---

%% Add your content here %%

---

## Elements of Test Pattern

%% Introduce the tools, rules and practices used in this pattern here %%

### Test Pattern Primitives

```dataviewjs
const ext = dv.pages('"tools/types"')
    .where(t => t.extends === "primitive")
    .map(t => t.file.name);

dv.table(
    ["Primitive", "Description"],
    dv.pages()
        .where(p => 
            p.type && 
            (p.type.includes("primitive") || ext.some(n => p.type.includes(n))) &&
            dv.current().primitives && dv.current().primitives.includes(p.file.name) &&
            !p.file.path.startsWith("tools/") && 
            !p.file.path.startsWith("drafts/")
        )
        .sort(p => p.title, 'asc')
        .map(p => [
            `**[${p.title}](${p.file.path})**`,  
            p.description
        ])
);
```

%%
Here's the query, fully-annotated:
```dataviewjs
// This query generates a table listing pages with a `type` that includes `"primitive"` or extends it indirectly, displaying only pages in the current file's `primitives` array, excluding those in `tools` and `drafts`, and showing each page's title as a clickable link alongside its description.
//
// Step 1: Retrieve filenames in 'tools/types' where 'extends' is set to "primitive"
// This creates an array of names to match against later in the main query
const ext = dv.pages('"tools/types"')
    .where(t => t.extends === "primitive")
    .map(t => t.file.name);

// Step 2: Define the main table and query criteria
dv.table(
    ["Primitive", "Description"],  // Column headers with "Primitive" instead of "Title"
    
    dv.pages()
        .where(p => 
            // Check if 'type' exists and includes "primitive" or matches any name in 'ext'
            p.type && 
            (p.type.includes("primitive") || ext.some(n => p.type.includes(n))) &&

            // Ensure the current page's 'primitives' array includes this page's filename
            dv.current().primitives && dv.current().primitives.includes(p.file.name) &&

            // Exclude pages in 'tools' and 'drafts' directories and their subfolders
            !p.file.path.startsWith("tools/") && 
            !p.file.path.startsWith("drafts/")
        )
        
        .sort(p => p.title, 'asc')  // Sort results alphabetically by 'title' in ascending order

        .map(p => [
            // Display page title as a bold clickable markdown link with format: **[Title](file path)**
            `**[${p.title}](${p.file.path})**`,  
            p.description  // Display the 'description' field in the second column
        ])
);
```

Here's a dataview version. It's not future-proof because the values for `primitive` fileclass extensions are hard-coded. Maybe there's a more elegant way to do this but idk.
```dataview
LIST description
WHERE (contains(type, "primitive") 
    OR contains(type, "module") 
    OR contains(type, "practice") 
    OR contains(type, "protocol"))
AND contains(this.primitives, file.name)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
SORT title
```
 %%

---

## Test Pattern Strategies

%% Describe how this Pattern is used in strategies/playbooks here %%

```dataview
LIST description
WHERE contains(patterns, this.file.name)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```

---

The provided Dataview query attempts to dynamically determine which types extend "primitive" from a "tools/types" file.  However, it relies on `dv.current().primitives`, which is context-dependent and might not always be available.  The query also includes several filters that may not be relevant to the core request.

To directly address the request for pages with a `type` extending "primitives" and a `scale` of "collaboration," a simpler and more robust query is preferable.  This assumes that `type` and `scale` are properties within the page's metadata (e.g., in YAML frontmatter).

Here are two versions: one that uses a direct `includes` check for "primitives" in the `type` field, and another that uses a more flexible approach to handle variations in how "primitives" might be specified (e.g., "base-primitives", "advanced-primitives").

**Version 1: Direct "primitives" check (case-sensitive):**

```dataviewjs
dv.table(
  ["Page Title", "Type", "Scale"],
  dv.pages()
    .where(p => p.type && p.type.includes("primitives") && p.scale === "collaboration")
    .map(p => [
      `**[${p.file.name}](${p.file.path})**`,
      p.type,
      p.scale
    ])
);
```

**Version 2: Flexible "primitives" check (case-insensitive):**

```dataviewjs
dv.table(
  ["Page Title", "Type", "Scale"],
  dv.pages()
    .where(p => p.type && p.type.toLowerCase().includes("primitives") && p.scale === "collaboration")
    .map(p => [
      `**[${p.file.name}](${p.file.path})**`,
      p.type,
      p.scale
    ])
);
```

**Explanation:**

*   `dv.pages()` selects all pages in your vault.
*   `.where(p => ...)` filters the pages based on the conditions:
    *   `p.type && p.type.includes("primitives")`: Checks if the page has a `type` property and if it includes "primitives" (case-sensitive in Version 1, case-insensitive in Version 2).
    *   `p.scale === "collaboration"`: Checks if the page has a `scale` property with the value "collaboration".
*   `.map(p => [...])` transforms each matching page into a table row with the page title (as a link), type, and scale.


Remember to replace `"primitives"` and `"collaboration"` with the actual values if they differ in your notes.  If the `type` and `scale` properties are located within a YAML frontmatter block, you'll need to adjust the query accordingly (e.g., `p.file.frontmatter.type` and `p.file.frontmatter.scale`).  If the `type` property is a nested object, you'll need to adjust the query to access the correct property.  For example, if `type` is an object with a `name` property, you would use `p.type.name`.

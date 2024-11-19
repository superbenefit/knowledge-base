---
title: Test Pattern
description: This is a test pattern
url: 
tags:
  - patterns
publish: "false"
type: pattern
primitives:
  - test-primitive
scale: 
phase: 
functions: 
qualities: 
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
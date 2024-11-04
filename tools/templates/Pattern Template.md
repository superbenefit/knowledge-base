---
title: 
description: 
url: 
tags:
  - patterns
publish: "false"
type: pattern
functions: 
qualities: 
scale: 
phase: 
primitives:
---

<% tp.frontmatter.description %>

%% Introduce the pattern here %%

---

%% Add your content here %%

---

## Elements of <% tp.frontmatter.title %>

%% Introduce the tools, rules and practices used in this pattern here %%

### <% tp.frontmatter.title %> Primitives

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
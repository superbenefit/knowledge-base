---
title: 
description: 
url: 
tags:
  - primitives
publish: "false"
type: primitive
functions: 
qualities: 
scale: 
phase:
---

<% tp.frontmatter.description %>

%% Introduce the primitive here %%

---

%% Add your content here %%

---

## Patterns Using <% tp.frontmatter.title %>

%% Describe how this primitive is used in patterns here %%

```dataview
LIST description
WHERE contains(primitives, "<% tp.file.title %>") 
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```
---
title: Completion Phase 
description: 
url: 
tags:
  - primitives
publish: "false"
type: note
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
WHERE contains(primitives, this.file.name)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```
---
title: Coordination Scale
tags: 
aliases: []
description: ""
publish: "true"
---

Coordination Scale (A type of [[notes/dao-primitives/framework/scale/scale|group scale]]) will be defined soon... ^e8603e

---

## Coordination Scale Patterns



%% This query is busted af. Please replace with a better one if you can.  %%
```
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        (p.scale === "coordination" || (Array.isArray(p.scale) && p.scale.includes("coordination")))
    )
    .map(p => dv.fileLink(p.file.path, p.title))
)

```
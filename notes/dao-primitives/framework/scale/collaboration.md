---
title: Collaboration Scale
tags: 
aliases: []
description: ""
publish: "true"
---

**Collaboration Scale** is a level of [[notes/dao-primitives/framework/scale/scale|group scale]].. ^c0c7b2

---

## Collaboration Scale Patterns



%% This query is busted af. Please replace with a better one if you can.  %%
```
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        (p.scale === "collaboration" || (Array.isArray(p.scale) && p.scale.includes("collaboration")))
    )
    .map(p => dv.fileLink(p.file.path, p.title))
)

```
---
title: Network Scale
tags: 
aliases: []
description: ""
publish: "true"
---

Network Scale will be defined soon... ^4e39bd

---

## Network Scale Patterns



%% This query is busted af. Please replace with a better one if you can.  %%
```
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        (p.scale === "network" || (Array.isArray(p.scale) && p.scale.includes("network"))) &&
        !p.file.path.startsWith("tools/") &&
        !p.file.path.startsWith("drafts/")
    )
    .map(p => `[[${p.file.path}|${p.title}]]`)
)
```
---
title: Organization Phase
author: 
harvester: 
tags: 
aliases: []
description: ""
publish: "true"
---

Intro coming soon..

---

## Organization Phase Patterns

%% This query is busted af. Please replace with a better one if you can.  %%
```
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        (p.phase === "organization" || (Array.isArray(p.scale) && p.phase.includes("organization"))) &&
        !p.file.path.startsWith("tools/") &&
        !p.file.path.startsWith("drafts/")
    )
    .map(p => `[[${p.file.path}|${p.title}]]`)
)
```
---
title: Conversation Phase
author: 
harvester: 
tags: 
aliases: []
description: ""
publish: "true"
---



---

## Conversation Phase Patterns

%% This query is busted af. Please replace with a better one if you can.  %%
```
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        (p.phase === "conversation" || (Array.isArray(p.scale) && p.phase.includes("conversation")))
    )
    .map(p => dv.fileLink(p.file.path, p.title))
)

```
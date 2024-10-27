---
title: Constituency Scale
description: ""
publish: "true"
---

A type of [[notes/primitives/framework/scale/scale|scale]] characterized by the participation of a broader constituency of stakeholders who enjoy the services of the organization as members, often supporting its purpose by contributing their resources. ^8bc4c3

Organizations often operate at constituency scale in order to establish consensus across multiple  [Collaboration Scale](tags/groups/scale/Collaboration%20Scale.md) Scale groups, or to facilitate collective #decisions in groups which exceed [Coordination Scale](tags/groups/scale/Coordination%20Scale.md).

---

## Constituency Scale Patterns



%% This query is busted af. Please replace with a better one if you can.  %%
```
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        (p.scale === "constituency" || (Array.isArray(p.scale) && p.scale.includes("constituency"))) &&
        !p.file.path.startsWith("tools/") &&
        !p.file.path.startsWith("drafts/")
    )
    .map(p => `[[${p.file.path}|${p.title}]]`)
)
```
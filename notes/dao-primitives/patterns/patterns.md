---
title: Pattern Library
description: A library of patterns
publish: "true"
type: index
---

**Patterns** are combinations of [practices](notes/dao-primitives/Practices.md), [primitives](tags/primitives.md) and [protocols](tags/protocols.md) used, often according to [frameworks](tags/frameworks.md), to compose implementations of organizational tooling. ^152f26

---

## Patterns in this repo

```
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        !p.file.path.startsWith("tools/") &&
        !p.file.path.startsWith("drafts/")
    )
.map(p => `[[${p.file.path}|${p.title}]]`)
)
```
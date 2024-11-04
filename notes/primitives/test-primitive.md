---
title: Test Primitive
url: https://www.example.com
description: This is a test primitive
harvester: 
curator: 
publish: "false"
type: primitive
scale:
  - collaboration
  - constituency
  - coordination
  - network
phase:
  - conversation
  - coordination
  - formation
  - organization
functions:
  - governance
  - grants
qualities:
  - autonomy
  - decentralization
---

This is a test primitive

Here is where I would introduce the primitive

---

Here is where I would add info about the primitive.

---

## Patterns Using Test Primitive

Here is where I would describe how this primitive is used in various patterns.

```dataview
LIST description
WHERE contains(primitives, this.file.name)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```
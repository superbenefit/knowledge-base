---
title: Test Practice
url: https://www.example.com
description: This is a test practice
harvester: 
curator: 
publish: "false"
type: practice
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

This is a test practice

Here is where I would introduce the practice

---

Here is where I would add info about the practice.

---

## Patterns Using Test Practice

Here is where I would describe how this practice is used in various patterns.

```dataview
LIST description
WHERE contains(primitives, "test-practice") 
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```
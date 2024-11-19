---
title: Test Module
url: https://www.example.com
description: This is a test module
harvester: 
curator: 
publish: "false"
type: primitive, module
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

This is a test module

Here is where I would introduce the module

---

Here is where I would add info about the module.

---

## Patterns Using Test Module

Here is where I would describe how this module is used in various patterns.

```dataview
LIST description
WHERE contains(primitives, "test-module") 
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```
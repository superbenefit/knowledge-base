---
title: Test Protocol
url: https://www.example.com
description: This is a test protocol
harvester: 
curator: 
publish: "false"
type: protocol
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

This is a test protocol

Here is where I would introduce the protocol

---

Here is where I would add info about the protocol.

---

## Patterns Using Test Protocol

Here is where I would describe how this protocol is used in various patterns.

```dataview
LIST description
WHERE contains(primitives, "test-protocol") 
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```
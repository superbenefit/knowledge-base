---
title: SuperBenefit Playbooks
description: Actionable guides for organizational success
publish: false
type: index
---

This directory contains practical guides for building and managing effective organizations.  Each playbook combines organizational patterns and primitives into a comprehensive resource.


## Playbooks: Patterns and Primitives in Action

Playbooks build upon the foundational elements found in other parts of this knowledge base:

* **Primitives:** Playbooks utilize core organizational building blocks (governance mechanisms, operational functions, etc.) described in the [Primitives directory](notes/dao-primitives/readme.md).

* **Patterns:** Playbooks leverage proven solutions to common organizational challenges (documented in the [Patterns directory](artifacts/patterns/readme.md)).  They show how to combine primitives effectively to achieve specific goals.

Playbooks, therefore, provide practical, step-by-step guidance for implementing the strategies and solutions outlined in the patterns and built from primitives.

---

## How to Use the Playbook Library

To effectively use this library, start by identifying the specific organizational challenge or area of interest you're exploring. Consider the following:

* **Organizational Context:** What type of organization is involved?  What is its size and structure?
* **Specific Challenges:** What problems or opportunities are addressed in the case study?
* **Methods and Approaches:** What strategies and techniques were employed?
* **Outcomes and Results:** What were the successes and challenges encountered?

### Querying Playbooks

```dataviewjs
dv.list(
    dv.pages()
        .where(p => 
            p.type?.includes("playbook") &&
            !p.file.path.includes("tools/") &&
            !p.file.path.includes("drafts/")
        )
        .map(p => p.file.name)
);
```


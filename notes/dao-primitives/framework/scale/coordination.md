---
title: Coordination Scale
tags: 
aliases: []
description: "Characteristics and considerations for groups operating at the Coordination Scale"
publish: "true"
---

The Coordination Scale represents a larger and more complex level of group organization than the Collaboration Scale.  It involves multiple teams or smaller groups working together towards a shared goal, requiring more sophisticated coordination mechanisms and communication strategies.  

While the exact upper limit of group size is flexible, Coordination Scale groups typically range from 10 to 100 individuals, although this can vary depending on the complexity of the task and the effectiveness of coordination mechanisms.  Beyond this range, the challenges of coordination often necessitate a transition to the Constituency Scale.

---

## Key Characteristics

* **Multiple Teams:**  Coordination Scale groups consist of multiple teams or smaller groups working together.
* **Shared Goal:**  A clearly defined, shared goal unites the various teams and provides a focus for coordination.
* **Delegation:**  Tasks and responsibilities are delegated to different teams or individuals.
* **Formal Structure:**  A more formal structure and set of processes are typically required to manage the complexity of multiple teams.
* **Communication Channels:**  Multiple communication channels are used to facilitate information sharing and coordination.
* **Interdependence:**  Teams are interdependent, requiring effective communication and coordination to achieve the shared goal.

### Challenges at the Coordination Scale

* **Communication Complexity:**  The increased number of individuals and teams makes communication more complex and prone to breakdowns.
* **Coordination Overhead:**  Coordinating the activities of multiple teams requires significant overhead.
* **Conflicting Priorities:**  Different teams may have conflicting priorities, requiring careful negotiation and compromise.
* **Resource Allocation:**  Allocating resources effectively across multiple teams can be challenging.
* **Maintaining Alignment:**  Ensuring that all teams remain aligned with the shared goal is crucial.

---

## Tools and Practices for Coordination Scale

* **Project Management Software:**  Tools for managing tasks, tracking progress, and coordinating activities across multiple teams.
* **Communication Platforms:**  Platforms for facilitating communication and collaboration among teams.
* **Governance Structures:**  Formal governance structures are often necessary to guide decision-making and ensure accountability.
* **Workflow Management Systems:**  Systems for managing workflows and ensuring that tasks are completed efficiently.
* **Reporting Mechanisms:**  Mechanisms for reporting progress and identifying potential problems.

### Coordination Scale Patterns

```dataviewjs
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        (p.scale === "coordination" || (Array.isArray(p.scale) && p.scale.includes("coordination"))) &&
        !p.file.path.startsWith("tools/") &&
        !p.file.path.startsWith("drafts/")
    )
    .map(p => `[[${p.file.path}|${p.title}]]`)
)
```

### Coordination Scale Primitives

```dataviewjs
const ext = dv.pages('"tools/types"')
  .where(t => t.file.frontmatter?.extends === "primitive")
  .map(t => t.file.name);

$= dv.list(
  dv.pages()
    .where(p =>
      (p.type === "primitive" || (Array.isArray(p.type) && p.type.includes("primitive"))) &&
      (p.scale && p.scale.some(s => s.includes("coordination"))) &&
      (p.type.includes("primitive") || ext.some(n => p.type.toLowerCase().includes(n))) &&
      !p.file.path.startsWith("tools/") &&
      !p.file.path.startsWith("drafts/")
    )
    .map(p => `[[${p.file.path}|${p.title}]]`)
);
```

---

## Successful Coordination Scale Outcomes

A successful Coordination Scale group exhibits:

* Effective communication and collaboration among teams.
* Efficient allocation and utilization of resources.
* Clear processes for decision-making and conflict resolution.
* Alignment with the shared goal and priorities.
* Successful achievement of the shared goal.

The Coordination Scale represents a significant step up in organizational complexity.  Understanding its characteristics and challenges is crucial for building effective and sustainable large-scale groups.
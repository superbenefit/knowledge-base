---
title: Coordination Scale
tags: 
aliases: []
description: "Characteristics and considerations for groups operating at the Coordination Scale"
publish: "true"
---


Coordination Scale represents a larger level of group organization than [collaboration scale](notes/dao-primitives/framework/group-scale/collaboration.md)Collaboration Scale.  It involves larger groups or multiple groups working together towards a shared goal, requiring more sophisticated coordination mechanisms and communication strategies.  

While the exact upper limit of group size is flexible, Coordination Scale groups typically range from 10 to 150 individuals.  

Coordination scale is too large to afford the nuanced sense-making, creativity and conflict management that [Collaboration Scale](notes/dao-primitives/framework/group-scale/collaboration.md) groups are capable of, but are still small enough to be effective at delivering well scoped and planned activities. Beyond its limits (roughly 150 members - see [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number)), coordination becomes too costly and difficult and should be either broken into smaller coordination efforts or transitioned to a [Constituency Scale](notes/dao-primitives/framework/group-scale/constituency.md) approach.

While [[notes/dao-primitives/framework/group-scale/collaboration|collaboration]] scale outlines small, high-context, high-trust group formation, coordination scale can leverage groups of a similar size as part of it's operational structure. The difference here is that these groups will be more purely functional, efficiently delivering on known processes to achieve predictable results. Whereas a collaboration scale group will exhibit properties like autonomy, sense-making, creativity and adaptability as a result of it's less constrained design.




---

## Key Characteristics

* **Shared Goal:**  A clearly defined, shared goal unites the various teams and provides a focus for coordination.
* **Strategy**: Coordination scale groups need to be collectively working towards a clear strategy that breaks complex components into smaller chunks that can be managed as smaller scales.
* **Governing Constraints:**  A more formal structure and sets of processes are typically required to reduce complexity in coordination scale groups, where larger numbers of people are required to work as a collective. See the [Cynefin Framework](https://thecynefin.co/about-us/about-cynefin-framework/#:~:text=Cynefin%2C%20pronounced%20kuh%2Dnev%2D,we%20can%20never%20fully%20understand.) for description of governing constraints  
* **Multiple Teams:**  Coordination Scale groups often consist of multiple teams working together. This allows for nuanced (complex) decision-making to be pushed to smaller groups. 
* **Delegation:**  Tasks and responsibilities are delegated to different teams or individuals.
* **Communication Channels:**  Multiple communication channels are used to facilitate information sharing and coordination.
* **Interdependence:**  Teams are interdependent, requiring effective communication and coordination to achieve the shared goal.

### Challenges at the Coordination Scale

* **Communication Complexity:**  Conflict,  disagreement and ambiguity is difficult to process and manage in coordination scale groups and need to me managed through clear processes and policies. 
* **Coordination Overwhelm :**  Coordinating the activities of multiple teams can require significant overhead. This needs to be designed to be a simple as possible to not create a bureaucratic nightmare. 
* **Maintaining Alignment:**  Different teams may develop conflicting priorities. Clear agreements between teams and transparency what they are doing and how they are doing it (via group state)  is needed to ensure larger group coherence 
* **Resource Allocation:**  Allocating resources effectively across multiple teams can be challenging. Clear agreements and accountabilities governing resource allocation is important.

---

## Tools and Practices for Coordination Scale


* **Communication Platforms:**  Platforms for facilitating communication and collaboration among teams including gauging sentiment from across the wider group.   
* **Governance Structures:**  Formal governance tooling to guide decision-making and ensure accountability.
* **Onchain Tools:**  Where practical, onchain tools allow for coordination without centralization of authority. 
* **Group State**: Using onchain trust mechanism that connect back to [[notes/dao-primitives/framework/group-state|group state]] documentation allow groups to participate in coordination scale structures without blowing out the coordination overhead. 
* **Reporting Mechanisms:**  Mechanisms for reporting progress and impact allow for coordination scale structures to manage and allocate resources effectively.   
* **Project Management Software:**  Tools for managing tasks, tracking progress, and coordinating activities across multiple teams.

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

* Effective mechanisms to surface intelligence from across the group and feed it into group decision-making
* Free flow of communication and resources among teams.
* Efficient allocation and utilization of resources.
* Clear processes for decision-making and conflict resolution.
* Alignment with the shared goal and priorities.
* Effective mechanisms for engaging with [[notes/dao-primitives/framework/group-scale/constituency|constituency]]  and [[network ]] scales.


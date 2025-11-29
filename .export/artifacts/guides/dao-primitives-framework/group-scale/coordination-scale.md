---
title: Coordination Scale
description: Characteristics and considerations for groups operating at the Coordination Scale
tags:
  - dao-primitives
  - framework
aliases: 
publish: true
---
# Coordination Scale

Coordination Scale represents a larger level of group organization than [collaboration scale](artifacts/guides/dao-primitives-framework/group-scale/collaboration-scale.md). It involves larger [groups](tags/groups.md) or multiple groups working together towards a shared goal, requiring more sophisticated [coordination](tags/coordination.md) mechanisms and communication strategies.

While the exact upper limit of group size is flexible, Coordination Scale groups typically range from 10 to 150 individuals.

Coordination scale is too large to afford the nuanced sense-making, creativity, and conflict management that [Collaboration Scale](artifacts/guides/dao-primitives-framework/group-scale/collaboration-scale.md) groups are capable of, but are still small enough to be effective at delivering well-scoped and planned activities. Beyond its limits (roughly 150 members - see [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number)), [coordination](tags/coordination.md) becomes too costly and difficult and should be either broken into smaller coordination efforts or transitioned to a [Constituency Scale](artifacts/guides/dao-primitives-framework/group-scale/constituency-scale.md) approach.

While [collaboration-scale](artifacts/guides/dao-primitives-framework/group-scale/collaboration-scale.md) scale outlines small, high-context, high-trust group formation, coordination scale can leverage groups of a similar size as part of its operational structure. The difference here is that these groups will be more purely functional, efficiently delivering on known processes to achieve predictable results. Whereas a collaboration scale group will exhibit properties like autonomy, sense-making, creativity, and adaptability as a result of its less constrained design.

---

## Key Characteristics

- **Shared Goal:** A clearly defined, shared goal unites the various teams and provides a focus for [coordination](tags/coordination.md).
- **Strategy**: Coordination scale groups need to be collectively working towards a clear strategy that breaks complex components into smaller chunks that can be managed at smaller scales.
- **Governing Constraints:** A more formal structure and sets of processes are typically required to reduce complexity in coordination scale groups, where larger numbers of people are required to work as a collective. See the [Cynefin Framework](https://thecynefin.co/about-us/about-cynefin-framework/#:~:text=Cynefin%2C%20pronounced%20kuh%2Dnev%2D,we%20can%20never%20fully%20understand.) for description of governing constraints.
- **Multiple Teams:** Coordination Scale groups often consist of multiple teams working together. This allows for nuanced (complex) [decision-making](tags/decisions.md) to be pushed to smaller groups.
- **Delegation:** [Tasks](tags/tasks.md) and [responsibilities](tags/responsibilities.md) are delegated to different teams or individuals.
- **Communication Channels:** Multiple communication channels are used to facilitate information sharing and [coordination](tags/coordination.md).
- **Interdependence:** Teams are interdependent, requiring effective communication and coordination to achieve the shared goal.

### Challenges at the Coordination Scale

- **Communication Complexity:** Conflict, disagreement, and ambiguity are difficult to process and manage in coordination scale groups and need to be managed through clear processes and policies.
- **Coordination Overwhelm:** Coordinating the activities of multiple teams can require significant overhead. This needs to be designed to be as simple as possible to not create a bureaucratic nightmare.
- **Maintaining Alignment:** Different teams may develop conflicting priorities. Clear [agreements](tags/agreements.md) between teams and [transparency](tags/transparency.md) about what they are doing and how they are doing it (via group state) is needed to ensure the larger group coherence.
- **[Resource](tags/resources.md) Allocation:** Allocating [resources](tags/resources.md) effectively across multiple teams can be challenging. Clear [agreements](tags/agreements.md) and accountabilities governing resource allocation are important.

---

## Tools and Practices for Coordination Scale

- **Communication Platforms:** Platforms for facilitating communication and collaboration among teams including gauging sentiment from across the wider group.
- **[Governance](tags/governance.md) Structures:** Formal governance tooling to guide [decision-making](tags/decisions.md) and ensure accountability.
- **Onchain Tools:** Where practical, onchain tools allow for [coordination](tags/coordination.md) without centralization of authority.
- **Group State**: Using onchain trust mechanisms that connect back to [group state](artifacts/guides/dao-primitives-framework/group-state.md) documentation allow groups to participate in coordination scale structures without overwhelming the coordination overhead.
- **Reporting Mechanisms:** Mechanisms for reporting [progress](tags/progress.md) and impact allow for coordination scale structures to manage and allocate [resources](tags/resources.md) effectively.
- **Project Management Software:** Tools for managing [tasks](tags/tasks.md), tracking progress, and coordinating activities across multiple teams.

### Coordination Scale Patterns

dataviewjs

```dataviewjs
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        (p.scale === "coordination" || (Array.isArray(p.scale) && p.scale.includes("coordination"))) &&
        !p.file.path.startsWith("tools/") &&
        !p.file.path.startsWith("drafts/")
    )
    .map(p => `${p.title}`)
)
```



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
    .map(p => `${p.title}`)
);
```

---

## Successful Coordination Scale Outcomes

A successful Coordination Scale group exhibits:

- Effective mechanisms to surface intelligence from across the group and feed it into group [decision-making](tags/decisions.md).
- Free flow of communication and [resources](tags/resources.md) among teams.
- Efficient allocation and utilization of [resources](tags/resources.md).
- Clear processes for [decision-making](tags/decisions.md) and conflict resolution.
- Alignment with the shared goal and priorities.
- Effective mechanisms for engaging with [constituency-scale](artifacts/guides/dao-primitives-framework/group-scale/constituency-scale.md) and [network](tags/networks.md) scales.




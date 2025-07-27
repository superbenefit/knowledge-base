---
title: Coordination Scale
description: Characteristics and considerations for groups operating at the Coordination Scale
tags:
  - dao-primitives
  - framework
aliases: 
publish: "true"
---
# Coordination Scale

Coordination Scale represents a larger level of group organization than [collaboration scale](artifacts/guides/dao-primitives-framework/group-scale/collaboration-scale.md). It involves larger [[tags/groups|groups]] or multiple groups working together towards a shared goal, requiring more sophisticated [[tags/coordination|coordination]] mechanisms and communication strategies.

While the exact upper limit of group size is flexible, Coordination Scale groups typically range from 10 to 150 individuals.

Coordination scale is too large to afford the nuanced sense-making, creativity, and conflict management that [Collaboration Scale](artifacts/guides/dao-primitives-framework/group-scale/collaboration-scale.md) groups are capable of, but are still small enough to be effective at delivering well-scoped and planned activities. Beyond its limits (roughly 150 members - see [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number)), [[tags/coordination|coordination]] becomes too costly and difficult and should be either broken into smaller coordination efforts or transitioned to a [Constituency Scale](artifacts/guides/dao-primitives-framework/group-scale/constituency-scale.md) approach.

While [[artifacts/guides/dao-primitives-framework/group-scale/collaboration-scale|collaboration-scale]] scale outlines small, high-context, high-trust group formation, coordination scale can leverage groups of a similar size as part of its operational structure. The difference here is that these groups will be more purely functional, efficiently delivering on known processes to achieve predictable results. Whereas a collaboration scale group will exhibit properties like autonomy, sense-making, creativity, and adaptability as a result of its less constrained design.

---

## Key Characteristics

- **Shared Goal:** A clearly defined, shared goal unites the various teams and provides a focus for [[tags/coordination|coordination]].
- **Strategy**: Coordination scale groups need to be collectively working towards a clear strategy that breaks complex components into smaller chunks that can be managed at smaller scales.
- **Governing Constraints:** A more formal structure and sets of processes are typically required to reduce complexity in coordination scale groups, where larger numbers of people are required to work as a collective. See the [Cynefin Framework](https://thecynefin.co/about-us/about-cynefin-framework/#:~:text=Cynefin%2C%20pronounced%20kuh%2Dnev%2D,we%20can%20never%20fully%20understand.) for description of governing constraints.
- **Multiple Teams:** Coordination Scale groups often consist of multiple teams working together. This allows for nuanced (complex) [[tags/decisions|decision-making]] to be pushed to smaller groups.
- **Delegation:** [[tags/tasks|Tasks]] and [[tags/responsibilities|responsibilities]] are delegated to different teams or individuals.
- **Communication Channels:** Multiple communication channels are used to facilitate information sharing and [[tags/coordination|coordination]].
- **Interdependence:** Teams are interdependent, requiring effective communication and coordination to achieve the shared goal.

### Challenges at the Coordination Scale

- **Communication Complexity:** Conflict, disagreement, and ambiguity are difficult to process and manage in coordination scale groups and need to be managed through clear processes and policies.
- **Coordination Overwhelm:** Coordinating the activities of multiple teams can require significant overhead. This needs to be designed to be as simple as possible to not create a bureaucratic nightmare.
- **Maintaining Alignment:** Different teams may develop conflicting priorities. Clear [[tags/agreements|agreements]] between teams and [[tags/transparency|transparency]] about what they are doing and how they are doing it (via group state) is needed to ensure the larger group coherence.
- **[[tags/resources|Resource]] Allocation:** Allocating [[tags/resources|resources]] effectively across multiple teams can be challenging. Clear [[tags/agreements|agreements]] and accountabilities governing resource allocation are important.

---

## Tools and Practices for Coordination Scale

- **Communication Platforms:** Platforms for facilitating communication and collaboration among teams including gauging sentiment from across the wider group.
- **[[tags/governance|Governance]] Structures:** Formal governance tooling to guide [[tags/decisions|decision-making]] and ensure accountability.
- **Onchain Tools:** Where practical, onchain tools allow for [[tags/coordination|coordination]] without centralization of authority.
- **Group State**: Using onchain trust mechanisms that connect back to [[artifacts/guides/dao-primitives-framework/group-state|group state]] documentation allow groups to participate in coordination scale structures without overwhelming the coordination overhead.
- **Reporting Mechanisms:** Mechanisms for reporting [[tags/progress|progress]] and impact allow for coordination scale structures to manage and allocate [[tags/resources|resources]] effectively.
- **Project Management Software:** Tools for managing [[tags/tasks|tasks]], tracking progress, and coordinating activities across multiple teams.

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
    .map(p => `[[${p.file.path}|${p.title}]]`)
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
    .map(p => `[[${p.file.path}|${p.title}]]`)
);
```

---

## Successful Coordination Scale Outcomes

A successful Coordination Scale group exhibits:

- Effective mechanisms to surface intelligence from across the group and feed it into group [[tags/decisions|decision-making]].
- Free flow of communication and [[tags/resources|resources]] among teams.
- Efficient allocation and utilization of [[tags/resources|resources]].
- Clear processes for [[tags/decisions|decision-making]] and conflict resolution.
- Alignment with the shared goal and priorities.
- Effective mechanisms for engaging with [[artifacts/guides/dao-primitives-framework/group-scale/constituency-scale|constituency-scale]] and [[tags/networks|network]] scales.







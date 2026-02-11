---
group: dao-primitives
type: note
title: Coordination Scale
description: Characteristics and considerations for groups operating at the Coordination Scale
tags:
  - dao-primitives
  - framework
aliases: 
publish: true
---

Coordination Scale represents a larger level of group organization than [collaboration scale](docs/dao-primitives/primitives-framework/concepts/group-scale/collaboration-scale.md). It involves larger [groups](data/concepts/groups.md) or multiple groups working together towards a shared goal, requiring more sophisticated [coordination](data/concepts/coordination.md) mechanisms and communication strategies.

While the exact upper limit of group size is flexible, Coordination Scale groups typically range from 10 to 150 individuals.

Coordination scale is too large to afford the nuanced sense-making, creativity, and conflict management that [Collaboration Scale](docs/dao-primitives/primitives-framework/concepts/group-scale/collaboration-scale.md) groups are capable of, but are still small enough to be effective at delivering well-scoped and planned activities. Beyond its limits (roughly 150 members - see [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number)), [coordination](data/concepts/coordination.md) becomes too costly and difficult and should be either broken into smaller coordination efforts or transitioned to a [Constituency Scale](docs/dao-primitives/primitives-framework/concepts/group-scale/constituency-scale.md) approach.

While [collaboration-scale](docs/dao-primitives/primitives-framework/concepts/group-scale/collaboration-scale.md) scale outlines small, high-context, high-trust group formation, coordination scale can leverage groups of a similar size as part of its operational structure. The difference here is that these groups will be more purely functional, efficiently delivering on known processes to achieve predictable results. Whereas a collaboration scale group will exhibit properties like autonomy, sense-making, creativity, and adaptability as a result of its less constrained design.

## When This Scale Applies

This scale is appropriate for your organization when you observe:

**Size Indicators:**
- Your organization has 10-150 people working toward shared goals
- Multiple teams or working groups need to coordinate activities
- Not everyone can maintain direct relationships with everyone else

**Coordination Needs:**
- Work requires multiple teams operating in parallel with interdependencies
- Clear strategy and work breakdown allows delegation to smaller groups
- More formal processes are needed to maintain alignment across teams
- Resource allocation must be managed across multiple initiatives

**Structural Implications:**
- Formal [governance](data/concepts/governance.md) structures guide [decision-making](data/concepts/decisions.md) and accountability
- Multiple teams (often [Cells](data/resources/patterns/cells.md)) with defined [roles](data/concepts/roles.md) and [responsibilities](data/concepts/responsibilities.md)
- [Group state](docs/dao-primitives/primitives-framework/concepts/group-state.md) documentation provides [transparency](data/concepts/transparency.md) across teams
- Reporting mechanisms track [progress](data/concepts/progress.md) and enable resource allocation
- Communication platforms support asynchronous coordination alongside synchronous meetings

**When to Transition:**
- Growth beyond ~150 people makes coordination overhead unsustainable
- Broader [community](data/concepts/community.md) participation in [governance](data/concepts/governance.md) becomes necessary
- The need shifts from operational coordination to constituency-level governance

---

## Key Characteristics

- **Shared Goal:** A clearly defined, shared goal unites the various teams and provides a focus for [coordination](data/concepts/coordination.md).
- **Strategy**: Coordination scale groups need to be collectively working towards a clear strategy that breaks complex components into smaller chunks that can be managed at smaller scales.
- **Governing Constraints:** A more formal structure and sets of processes are typically required to reduce complexity in coordination scale groups, where larger numbers of people are required to work as a collective. See the [Cynefin Framework](https://thecynefin.co/about-us/about-cynefin-framework/#:~:text=Cynefin%2C%20pronounced%20kuh%2Dnev%2D,we%20can%20never%20fully%20understand.) for description of governing constraints.
- **Multiple Teams:** Coordination Scale groups often consist of multiple teams working together. This allows for nuanced (complex) [decision-making](data/concepts/decisions.md) to be pushed to smaller groups.
- **Delegation:** [Tasks](data/concepts/tasks.md) and [responsibilities](data/concepts/responsibilities.md) are delegated to different teams or individuals.
- **Communication Channels:** Multiple communication channels are used to facilitate information sharing and [coordination](data/concepts/coordination.md).
- **Interdependence:** Teams are interdependent, requiring effective communication and coordination to achieve the shared goal.

### Challenges at the Coordination Scale

- **Communication Complexity:** Conflict, disagreement, and ambiguity are difficult to process and manage in coordination scale groups and need to be managed through clear processes and policies.
- **Coordination Overwhelm:** Coordinating the activities of multiple teams can require significant overhead. This needs to be designed to be as simple as possible to not create a bureaucratic nightmare.
- **Maintaining Alignment:** Different teams may develop conflicting priorities. Clear [agreements](data/concepts/agreements.md) between teams and [transparency](data/concepts/transparency.md) about what they are doing and how they are doing it (via group state) is needed to ensure the larger group coherence.
- **[Resource](data/concepts/resources.md) Allocation:** Allocating [resources](data/concepts/resources.md) effectively across multiple teams can be challenging. Clear [agreements](data/concepts/agreements.md) and accountabilities governing resource allocation are important.

---

## Tools and Practices for Coordination Scale

- **Communication Platforms:** Platforms for facilitating communication and collaboration among teams including gauging sentiment from across the wider group.
- **[Governance](data/concepts/governance.md) Structures:** Formal governance tooling to guide [decision-making](data/concepts/decisions.md) and ensure accountability.
- **Onchain Tools:** Where practical, onchain tools allow for [coordination](data/concepts/coordination.md) without centralization of authority.
- **Group State**: Using onchain trust mechanisms that connect back to [group state](docs/dao-primitives/primitives-framework/concepts/group-state.md) documentation allow groups to participate in coordination scale structures without overwhelming the coordination overhead.
- **Reporting Mechanisms:** Mechanisms for reporting [progress](data/concepts/progress.md) and impact allow for coordination scale structures to manage and allocate [resources](data/concepts/resources.md) effectively.
- **Project Management Software:** Tools for managing [tasks](data/concepts/tasks.md), tracking progress, and coordinating activities across multiple teams.

### Coordination Scale Patterns

Related patterns and resources for coordination scale organizations can be found in the [Pattern Library](docs/dao-primitives/implementation/patterns/index.md).

---

## Successful Coordination Scale Outcomes

A successful Coordination Scale group exhibits:

- Effective mechanisms to surface intelligence from across the group and feed it into group [decision-making](data/concepts/decisions.md).
- Free flow of communication and [resources](data/concepts/resources.md) among teams.
- Efficient allocation and utilization of [resources](data/concepts/resources.md).
- Clear processes for [decision-making](data/concepts/decisions.md) and conflict resolution.
- Alignment with the shared goal and priorities.
- Effective mechanisms for engaging with [constituency-scale](docs/dao-primitives/primitives-framework/concepts/group-scale/constituency-scale.md) and [network](data/concepts/networks.md) scales.




---

## Related Concepts

- [Scale](data/concepts/scale.md) - Organizational size and coordination approaches
- [DAOs](data/concepts/daos.md) - Organizations operating at different scales
- [Coordination](data/concepts/coordination.md) - Scale-appropriate coordination mechanisms
- [Teams](data/concepts/teams.md) - Small-scale coordination units
- [DAO Primitives Framework](docs/dao-primitives/index.md) - Framework for scale-based coordination

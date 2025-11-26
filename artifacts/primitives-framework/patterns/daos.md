---
title: DAOs (organizational pattern)
description: Decentralized Autonomous Organizations as networks of small autonomous teams
author:
  - yeoro.eth
tags:
  - patterns
  - daos
  - organizational-patterns
publish: true
type: pattern
---


See [DAO](tags/daos.md)

## Definition

DAOs within the Primitives Framework are defined as **purpose-aligned [networks](tags/networks.md) of small autonomous teams** that coordinate through transparent [agreements](tags/agreements.md), rather than hierarchical management structures. They represent the highest-scale organizational pattern that encompasses and coordinates other patterns (Cells, Roles, Tasks) to create coherent collective action. They can also coordinate at network scale with other DAOs, organizations, and stakeholders.

> **Pattern vs Primitive**: DAOs are an organizational pattern - a network structure for coordinating autonomous teams. Technical primitives (governance protocols, treasury systems, token contracts) are used to implement DAO operations.

## Core Characteristics

**Contain a Network**: DAOs contain a [network](tags/networks.md) of groups operating at different levels of [index](artifacts/primitives-framework/group-scale/index.md) and stages of [index](artifacts/primitives-framework/group-phase/index.md). By coordinating this network, DAOs create flexible, adaptive organizational forms that can evolve organically without requiring a top-down structure.

**Purpose-Aligned [Coordination](tags/coordination.md)**: DAOs maintain coherence through shared network [purpose](tags/purpose.md) that enables autonomous teams to coordinate and make aligned [decisions](tags/decisions.md) without central authority. Purpose serves as the gravitational center that guides decentralized DAO decision-making.

**Emergent Collective Intelligence**: By distributing authority and enabling permissionless innovation, DAOs aim to harness collective intelligence and potentially outperform traditional organizational models, while maintaining adaptability to changing conditions.

**Transparent Operations**: DAOs operate through documented state, visible [agreements](tags/agreements.md), and clear interfaces that build trust and enable [coordination](tags/coordination.md) across autonomous teams without requiring traditional management hierarchies. This allows the DAO to manifest as a coherent whole, while allowing for autonomy for the entities that make it up.

## DAO State

DAOs document their state using the **[Purpose/Practice/Progress framework](group-state.md)**: Purpose (foundational why and goals), Practice (governance and coordination protocols), Progress (network activities and achievements). This comprehensive state documentation creates coherence and enables successful coordination across the network.

See [Group State Pattern](group-state.md) for detailed guidance.

## When to Use DAOs

**Use DAOs when:**
- Coordinating multiple autonomous teams toward shared purpose
- Need transparent governance across diverse stakeholders
- Work spans multiple scales (collaboration → coordination → constituency)
- Want to enable permissionless innovation within boundaries
- Require trust-minimized coordination infrastructure

**Don't use DAOs when:**
- A single team can accomplish the purpose (use a [Cell](cells.md) instead)
- Central coordination is more efficient and stakeholders accept it
- Complexity and coordination overhead exceed benefits
- Stakeholders lack capacity for participatory governance
- Purpose and boundaries are too vague to guide autonomous teams

**Common Anti-Patterns:**
- **DAO for everything**: Using DAO structure when simpler patterns would work
- **Premature DAOification**: Creating DAO before clarity on purpose and community
- **Governance theater**: Complex governance without actual decision-making needs
- **Undefined purpose**: DAOs without clear purpose lose coherence quickly
- **Coordination gaps**: Cells operating without effective DAO-level coordination

## Phase & Scale Considerations

**Phase Evolution**: DAOs typically begin as a collection of individuals/early [community](tags/community.md) in Conversation/Formation phases, then evolve through Organization (establishing [governance](tags/governance.md) frameworks) to Coordination (operating and evolving) and potentially Completion (transforming or dissolving when [purpose](tags/purpose.md) is achieved).

**Multi-Scale Operation**: DAOs coordinate across the framework's four scales - from Collaboration Scale (harnessing individual teams) through Coordination Scale ([networks](tags/networks.md) of teams) to Constituency Scale (large stakeholder communities) and Network Scale (inter-DAO collaboration).

**Flexible Configuration**: DAOs can configure their entities and [agreements](tags/agreements.md) for different phases and scales depending on the purposes that they serve - some teams/networks of teams could be structured for operational efficiency, others for creative exploration, with [governance](tags/governance.md) mechanisms appropriate to their current phase and scale needs.

## Network Relationships

**Cell [Coordination](tags/coordination.md)**: DAOs serve as the convening context for coordinating Cells, providing shared infrastructure, [resource](tags/resources.md) flows, and [governance](tags/governance.md) frameworks that enable independent teams to work together effectively.

**Role Integration**: DAOs establish the [governance](tags/governance.md) context within which [Roles](tags/roles.md) operate - defining how roles are created, assigned, held accountable at the highest level of the network, while creating flexibility for specific role definition at smaller scales in the network.

**Task Orchestration**: DAOs coordinate [Tasks](tags/tasks.md) across teams through transparent workflows, [resource](tags/resources.md) allocation mechanisms, and accountability systems that enable complex collective action without centralized micromanagement.

**Delegation**: DAOs at the highest level of the network (constituency scale) often opt to delegate operational activities to a [network](tags/networks.md) of Cells (coordination scale). This can provide a good foundation for strategy development and efficient management of operations, while keeping the network decentralized and purpose-aligned at the highest level.

**Inter-DAO [Networks](tags/networks.md)**: DAOs can connect with other DAOs, networks, and organizations to form larger networks, enabling [resource](tags/resources.md) sharing, knowledge exchange, and coordinated action across organizational boundaries while maintaining their distinct purposes and [governance](tags/governance.md).

## Implementation Patterns

**Group State Documentation**: DAOs implement systematic documentation of [Purpose](tags/purpose.md)/[Practice](tags/practices.md)/[Progress](tags/progress.md) across all constituent teams, creating the [transparency](tags/transparency.md) needed for decentralized [coordination](tags/coordination.md) and accountability. See [dao-state](notes/dao-primitives/implementation/patterns/dao-patterns/dao-state.md)

**Facilitation Frameworks**: DAOs often employ structured approaches to group development and organizational design, helping teams navigate phases and scales while maintaining network coherence. See [notes/dao-primitives/implementation/guides/governance/index](notes/dao-primitives/implementation/guides/governance/index.md)

**[Governance](tags/governance.md) [Primitives](tags/primitives.md)**: In the DAO Primitives Framework, DAOs utilize the other 3 [index](artifacts/primitives-framework/org-elements/index.md) to implement their governance and operational design:

- [Cells](artifacts/primitives-framework/patterns/cells.md) - The autonomous teams that comprise DAO networks
- [Roles](artifacts/primitives-framework/patterns/roles.md) - Specialized functions within DAO coordination systems
- [Tasks](artifacts/primitives-framework/patterns/tasks.md) - Coordinated actions across DAO networks

**Permissionless Innovation**: DAOs establish lightweight processes for new team formation, experimental initiatives, and proposal development that enable innovation without requiring centralized permission or oversight. But then have decentralized mechanisms for approving permissions and [resource](tags/resources.md) allocation to these new teams as they evolve.

## Examples in Practice

**All in for Sport**: The DAO primitives framework has been applied to design the AIFS [governance](tags/governance.md) model and partnership with SuperBenefit. More can be read about this example here: [index](notes/rpp/rpp-experiments/all-in-for-sport/index.md).

**RPP [Governance](tags/governance.md)**: This project is a good example of how a larger DAO structure (SuperBenefit) can support multi-stakeholder partnerships within its broad [community](tags/community.md) governance umbrella. This shows how complex governance and operations can be made simple and effective while maintaining appropriate levels of high-level governance. See [artifacts/primitives-framework/rpp-governance-case-study](artifacts/primitives-framework/rpp-governance-case-study.md)

---

## Related Concepts

- [Cells](artifacts/primitives-framework/patterns/cells.md) - The autonomous teams that comprise DAO networks
- [Roles](artifacts/primitives-framework/patterns/roles.md) - Specialized functions within DAO coordination systems
- [Tasks](artifacts/primitives-framework/patterns/tasks.md) - Coordinated actions across DAO networks
- [Agreements](tags/agreements.md) - The relationship infrastructure that enables DAO coordination
- [Purpose](tags/purpose.md) - The shared vision that creates DAO network alignment
- [Coordination](tags/coordination.md) - The mechanisms through which DAO networks align activities
- [Group State](artifacts/primitives-framework/patterns/group-state.md) - The transparency framework that enables DAO coordination



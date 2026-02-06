---
title: Cells (organizational pattern)
description: Small autonomous teams that form the basic organizational units in DAO networks
author:
  - yeoro.eth
tags:
  - patterns
  - cells
  - organizational-patterns
publish: true
type: pattern
functions:
  - governance
qualities:
  - decentralization
  - autonomy
  - decision-making
scale:
  - collaboration
  - coordination
phase:
  - organization
  - coordination
---

*A pattern for creating working groups that can reliably govern themselves and coordinate with other working groups and DAO-like structures.*

## Problem / Solution Context

DAOs and other decentralized forms of organizing enable more flexible, powerful and inclusive group coordination patterns by utilizing small autonomous teams in place of rigid top-down hierarchies. However without the rigid rulesets and chains of command typical in traditional organizations these small autonomous teams often fall victim to group dynamic dysfunctions that undermine the potential that decentralized organizing holds (see [The Tyranny of Structurelessness](https://en.wikipedia.org/wiki/The_Tyranny_of_Structurelessness))

The Cell pattern provides teams with enough scaffolding to function as dynamic, autonomous units, avoiding bureaucratic overhead while protecting against group dysfunction. Additionally, Cells establish clear interfaces that enable trust-based coordination between groups and individuals across a broader DAO network. This balanced approach to structure helps realize the benefits of decentralized organization while mitigating common failure modes.

---

## Definition

Cells are **small autonomous teams** of 10 or fewer people (typically 3-8 people) that function as the basic organizational units within DAO networks. They operate through high-bandwidth, synchronous interaction while maintaining "networked autonomy" - making independent decisions about how to achieve their purpose while coordinating with other Cells and the broader network through transparent state documentation.

> **Pattern vs Primitive**: Cells are an organizational pattern - a proven structure for coordinating small teams. When implementing a Cell, you'll use technical primitives (tools like chat platforms, project management systems, governance protocols) to support the Cell's operations.

---

## Core Characteristics

**Multi-Scale Operation**: Cells operate internally at [collaboration scale](artifacts/primitives-framework/guides/discovery/group-scale/collaboration-scale.md) within their core team (high-bandwidth communication among fewer than 10 people) while simultaneously operating at [coordination scale](artifacts/primitives-framework/guides/discovery/group-scale/coordination-scale.md) as they coordinate with contributors, partners, and the larger [DAO network](artifacts/primitives-framework/patterns/daos.md). This dual-scale capability enables both intimate collaboration and broader network coordination.

**Balanced Structure**: The Cell pattern provides a "balanced approach to structure" that helps "realize the benefits of decentralized organization while mitigating common failure modes." Unlike rigid hierarchies or completely unstructured groups, Cells offer sufficient organization to function effectively while maintaining the [autonomy](tags/autonomy.md) and adaptability that make decentralized coordination powerful.

**Clear Network Interfaces**: Cells establish "clear interfaces that enable trust-based [coordination](tags/coordination.md) between groups and individuals across a broader [DAO network](artifacts/primitives-framework/patterns/daos.md)." Through their [Cell State](artifacts/primitives-framework/guides/design/group-state.md) documentation, they create [transparency](tags/transparency.md) about their [Purpose](tags/purpose.md), [Practice](tags/practices.md), and [Progress](tags/progress.md), enabling other entities to understand and coordinate with them without requiring hierarchical oversight.

**Dynamic Autonomous Units**: Cells function as "dynamic, autonomous units, avoiding bureaucratic overhead while protecting against group dysfunction." With fewer than 10 people, they provide enough scaffolding to enable effective self-governance while maintaining the flexibility needed for complex, evolving contexts without falling victim to the [coordination](tags/coordination.md) failures common in unstructured groups.

**Flexible Operation**: Cells have a high degree of flexibility in how they can operate. At creation, the Cell can define its governance structure and agreements with other entities in the network to form whatever structure its creators want.

## When to Use Cells

**Use Cells when:**
- Work requires ongoing coordination among 3-10 people
- Team needs autonomy in HOW but alignment on WHAT
- Activities are complex enough to need a dedicated team
- High-bandwidth, synchronous communication is beneficial
- Work spans weeks to months (or longer) rather than days

**Don't use Cells when:**
- Work is a straightforward task taking less than a week (use [Tasks](tasks.md) instead)
- Only 1-2 people are needed (use [Roles](roles.md) instead)
- Team would need more than 10 people (consider splitting into multiple Cells)
- Coordination overhead exceeds value created
- Work is purely individual contribution without coordination needs

**Common Anti-Patterns:**
- **Cells for everything**: Creating Cells for every small task adds unnecessary overhead
- **Oversized Cells**: Cells with >10 people lose the high-bandwidth coordination benefits
- **Undersized Cells**: 1-2 person "Cells" should typically be Roles instead
- **Zombie Cells**: Keeping Cells active when their purpose is complete
- **Unclear purpose**: Cells without clear, documented purpose struggle to maintain coherence

## Cell State

Cells document their state using the **[Purpose/Practice/Progress framework](artifacts/primitives-framework/guides/design/group-state.md)**: Purpose (why the Cell exists and what it aims to achieve), Practice (how decisions are made and work is coordinated), Progress (what's been accomplished and current status). This transparent documentation enables both internal coherence and external coordination across the network.

See [Group State Pattern](artifacts/primitives-framework/guides/design/group-state.md) for detailed guidance on state documentation.

## Phase & Scale Considerations

**Phase Evolution**: Cells typically begin in Conversation Phase (exploring possibilities), evolve through Formation Phase (establishing structure), mature in Organization Phase (operating effectively), and integrate in Iteration Phase (ongoing execution and evolution). They may also reach Completion Phase when their purpose is fulfilled.

**Collaboration Scale Focus**: Cells are specifically designed for collaboration scale of 10 or fewer people (typically 3-8 people) where coordination can happen through direct relationships and shared context. This scale enables the high-bandwidth interaction necessary for effective autonomous operation.

**Coordination Scale**: Cells develop coordination relationships with other Cells and the broader DAO network, creating fractal organizational structures that can scale both efficiency and innovation simultaneously.

## Network Relationships

**DAO Integration**: Cells function as the fundamental operational units of DAO networks, providing the autonomous teams that enable distributed decision-making while maintaining collective coherence through shared purpose and transparent coordination.

**Inter-Cell Coordination**: Cells coordinate with other Cells through transparent state documentation and formal agreements rather than strict hierarchical relationships. This creates flexible network structures that can adapt and evolve organically.

**Role Distribution**: Cells define internal Roles that handle specialized functions within the Cell. They may also create roles that are shared between Cells as part of coordinating across the network towards shared goals. These roles enable coordination and accountability within the Cell as well as supporting broader network coordination.

**Task Execution**: Cells coordinate Tasks both internally and with other Cells through transparent workflows and accountability systems, enabling complex collective action without centralized micromanagement.

## Implementation Patterns

**Cell Formation Patterns**: The cell-working-group pattern identifies four primary ways new Cells form within [DAO networks](artifacts/primitives-framework/patterns/daos.md), each with different implications for how the Cell develops through the [group phases](artifacts/primitives-framework/guides/discovery/group-phase/index.md):

- **Operational Scaling**: An existing Cell creates a new Cell when operational needs extend beyond its current scope, either delegating to existing Cells or creating new ones to handle expanded [responsibilities](tags/responsibilities.md)
- **Community Operationalization**: A community forms a Cell when it needs to execute on plans, such as when funding is approved for specific activities that require coordinated implementation
- **Partnership Implementation**: Cells form as collaborations when two entities want to work together on shared objectives
- **Permissionless Formation**: Groups within a [DAO](artifacts/primitives-framework/patterns/daos.md) or network form Cells without requiring approval, demonstrating value through trusted [governance](tags/governance.md) and effective execution

**Operationalization Methods**: Cells implement their [purpose](tags/purpose.md) through three primary operational approaches:

- **Core Team Execution**: Members of the core team directly carry out the activities needed to achieve the Cell's objectives
- **Cell Coordination**: The Cell acts as a coordinating body for other Cells, creating or connecting with additional Cells to accomplish larger initiatives
- **Contributor Coordination**: The Cell engages external contributors to execute work, often using [roles](artifacts/primitives-framework/patterns/roles.md) and [tasks](artifacts/primitives-framework/patterns/tasks.md) as coordination mechanisms

**[State](artifacts/primitives-framework/guides/design/group-state.md) Implementation**: Cells use the [state](artifacts/primitives-framework/guides/design/group-state.md) pattern as their core structural foundation, working through and defining their [Purpose](tags/purpose.md), [Practice](tags/practices.md), and [Progress](tags/progress.md) to create the documentation that enables both internal self-management and external [coordination](tags/coordination.md) within the [DAO network](artifacts/primitives-framework/patterns/daos.md).

**Phase-Adaptive Structure**: Because Cells can form through different pathways, they move through [development phases](artifacts/primitives-framework/guides/discovery/group-phase/index.md) in varied ways. Cells created for specific operational functions may move quickly through [Conversation](artifacts/primitives-framework/guides/discovery/group-phase/conversation-phase.md) and [Formation](artifacts/primitives-framework/guides/discovery/group-phase/formation-phase.md) phases, while autonomous Cells emerging from community conversations may take longer to develop through these phases organically.

## Examples in Practice

**Cell Working Groups**: Teams using the Cell working group pattern to operate as autonomous units within larger DAO networks, maintaining internal cohesion while contributing to collective outcomes.

**Project-Based Cells**: Cells formed around specific initiatives or opportunities that require focused collaboration, with clear boundaries and deliverables that contribute to broader network goals.

**Function-Based Cells**: Cells organized around specific organizational functions (like communications, development, or governance) that provide specialized services to the broader network while maintaining operational autonomy.

**All in for Sport**: The DAO primitives framework has been applied to design the AIFS governance model and partnership with SuperBenefit. This governance model features a larger DAO (All in for Sport) which provides a community governance wrapper for an operational structure of coordinating Cells. More can be read about this example here: [index](notes/rpp/rpp-experiments/all-in-for-sport/index.md).

**RPP Governance**: This project is a good example of a multi-stakeholder partnership within a community governance wrapper, utilizing a network of coordinating Cells to deliver the strategy and operations for a complex project. This shows how a network of autonomous Cells can be used to create a complex operations structure. See [artifacts/primitives-framework/studies/rpp-governance-case-study](artifacts/primitives-framework/studies/rpp-governance-case-study.md).

---

## Related Concepts

- [DAOs](artifacts/primitives-framework/patterns/daos.md) - The network context within which Cells operate
- [Roles](artifacts/primitives-framework/patterns/roles.md) - Specialized functions within Cell structures
- [Tasks](artifacts/primitives-framework/patterns/tasks.md) - Coordinated actions within and between Cells
- [Autonomy](tags/autonomy.md) - The self-governance capacity that defines Cell operation
- [Coordination](tags/coordination.md) - The mechanisms through which Cells align with networks
- [Scale](tags/scale.md) - The collaboration scale at which Cells operate
- [Group State](artifacts/primitives-framework/guides/design/group-state.md) - The transparency framework that enables Cell coordination
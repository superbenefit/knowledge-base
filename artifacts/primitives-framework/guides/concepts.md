---
title: DAO Primitives Conceptual Framework
description: A comprehensive framework for designing decentralized organizations as networks of small autonomous teams
publish: true
type: guide
tags:
  - cell
  - dao
  - roles
  - tasks
  - group-phase
  - group-state
---

The Primitives Framework provides a systematic approach to designing and implementing decentralized organizations as purpose-aligned networks. Building on the overview provided in the [DAO Primitives Project](notes/dao-primitives/index.md), this framework offers a deeper exploration of the key concepts, dimensions, and components that enable effective decentralized coordination.

Our current organizational models were optimized for an era of industrial production and hierarchical management, creating structures that excel at efficiency but struggle with complexity, adaptability, and equitable value distribution. As our societal challenges grow increasingly complex and interconnected—from climate change to economic inequality—we need [coordination](tags/coordination.md) systems that can harness diverse perspectives, adapt quickly to emerging conditions, and align human activity with regenerative outcomes. 

We developed the DAO Primitives project around **[purpose](tags/purpose.md)-aligned networks of small autonomous [teams](tags/teams.md)** as a conceptual starting point for designing decentralized organizations. The DAO primitives allow communities of all kinds to build their own purpose aligned networks that can act in deliberate coherent ways to create better futures for everyone who participates in them.

## Understanding the Framework

The Primitives Framework helps organizations design coordination systems by providing **organizational patterns** (structural building blocks like DAOs, Cells, Roles, Tasks) and **contextual lenses** (assessment tools for Phase, Scale, and State). These are un-opinionated components that can be combined and configured to create governance and operational systems tailored to specific contexts and needs.

Unlike prescriptive frameworks that dictate how organizations should be structured, this approach offers maximum flexibility while maintaining coherence and interoperability. It enables experimentation with novel forms of [coordination](tags/coordination.md) that can potentially outperform traditional organizational models.

The framework addresses a crucial challenge: **how can decentralized networks scale while balancing efficiency with innovation, autonomy with alignment, and flexibility with coherence?**


### Framework Components

At its core, the Primitives Framework is built around two complementary elements:

1. **Organizational Context**: The various datapoints and conceptual dimensions through which we measure and make sense of an organizational entity/group. We express a group's organizational context as its "group state". Group State allows us to effectively communicate and evaluate a group's important properties both internally and to the wider network.
2. **Patterns & Primitives**: Fundamental building blocks - Primitives are practices, protocols and software modules used to implement systems. Patterns organize primitives into use case categories, which allow us to communicate effectively about complex solution landscapes (especially where a single modular primitive, like Safe, might be used in hundreds of configurations and for thousands of different purposes.)

---

## Organizational Context

Based on a group's organizational context, we can better recommend patterns and primitives to serve arbitrary needs the user may bring, using any number of frameworks and toolkits for evaluation and selection. 

### Contextual Lenses

#### [Group Scale](artifacts/primitives-framework/guides/discovery/group-scale/index.md)
Group Scale acknowledges that the size and complexity of a group fundamentally affects how it functions. Different scales require different approaches to communication, decision-making, and coordination.

The framework identifies four distinct scales:

- **[Collaboration Scale](artifacts/primitives-framework/guides/discovery/group-scale/collaboration-scale.md)** (sub 10 people): High-bandwidth, synchronous communication with direct relationships
- **[Coordination Scale](artifacts/primitives-framework/guides/discovery/group-scale/coordination-scale.md)** (10-150 people): Multiple teams or structured working relationships requiring explicit coordination mechanisms
- **[Constituency Scale](artifacts/primitives-framework/guides/discovery/group-scale/constituency-scale.md)** (100s +): Broader communities requiring large scale governance mechanisms
- **[Network Scale](artifacts/primitives-framework/guides/discovery/group-scale/network-scale.md)** Interconnected networks of organizations

Most contexts require organizations operate at multiple scales simultaneously, with different functions happening at different scales. The DAO primitives framework helps design appropriate coordination mechanisms for each scale.

Learn more about [Group Scale](artifacts/primitives-framework/guides/discovery/group-scale/index.md)

#### [Group Phase](artifacts/primitives-framework/guides/discovery/group-phase/index.md)

Group Phase recognizes that organizations evolve through distinct developmental stages, each with its own characteristics and needs. Understanding where a group is in its journey helps select appropriate tools, practices, and structures.

The framework identifies five key phases:
- **[Conversation Phase](artifacts/primitives-framework/guides/discovery/group-phase/conversation-phase.md)**: Initial exploration and idea generation focus on open dialogue, relationship building, and establishing shared vision before formal structures emerge
- **[Formation Phase](artifacts/primitives-framework/guides/discovery/group-phase/formation-phase.md)**: Establishing basic structure and roles with minimal formality, emphasizing trust-building and defining initial procedures for group operation
- **[Organization Phase](artifacts/primitives-framework/guides/discovery/group-phase/organization-phase.md)**: Implementing formal structures, defined processes, and governance mechanisms to create sustainable and scalable organizational systems
- **[Iteration Phase](artifacts/primitives-framework/guides/discovery/group-phase/iteration-phase.md)**: Ongoing execution and evolution, with groups operating at full capacity while iterating and improving based on feedback
- **[Completion Phase](artifacts/primitives-framework/guides/discovery/group-phase/completion-phase.md)**: Concluding initiatives, capturing learnings, and transitioning resources when projects or groups reach their natural conclusion

Learn more about [Group Phase](artifacts/primitives-framework/guides/discovery/group-phase/index.md)

#### [Group Values](artifacts/primitives-framework/guides/discovery/group-values.md)

Group Values represents the priorities by which groups make decisions when navigating challenging trade-offs between different qualities. Every organization faces tensions—balancing inclusion with efficiency, transparency with privacy, autonomy with alignment. Values clarify which qualities take precedence when these tensions arise, helping groups make consistent decisions that reflect their core commitments rather than defaulting to expedience or individual preference.

Understanding a group's values is essential for selecting appropriate governance patterns and primitives. A group that values radical transparency over operational efficiency will choose different coordination tools than one that prioritizes speed of execution. The [Blockchain Governance Toolkit](links/The%20Blockchain%20Governance%20Toolkit.md) provides helpful frameworks for articulating these values and understanding their implications for governance design.

### [Group State](artifacts/primitives-framework/guides/design/group-state.md)

Group State focuses on how having a transparent organizational state for each entity in a network, enables effective coordination in decentralized systems. For groups to interact effectively without centralized control, they need clear interfaces that make them interoperable and universally addressable.

In the DAO primitives framework Group state consists of three core components:

- **Purpose**: Why the group exists and what it aims to achieve
- **Practice**: How the group operates and makes decisions
- **Progress**: How the group tracks, measures, and communicates its activities

This state documentation serves as a "public interface" that enables both internal coherence and external coordination. It allows groups to have an existence that is both independent from the larger network and integrated into it through agreements with other entities.

Learn more about [Group State](artifacts/primitives-framework/guides/design/group-state.md)


## Patterns & Primitives

Building on these contextual lenses, the framework identifies fundamental building blocks that can be combined to create organizational systems:

### 1. Core Conceptual Primitives


At the highest level, three foundational organizational primitives:

- **Agents**: Individuals, teams, or organizations with animating purpose and internal agreements
- **Agreements**: Commitments within and between entities that enable coordination
- **Networks**: Clusters of entities animated by shared purpose and common agreements

### 2. Organizational Components (Trust Zones)

Although the above conceptual framework could be used to design a wide range of different governance and operational structures, the Primitives Framework leans heavily on the following 4 organizational patterns:

1. **[DAOs](tags/daos.md)**: Purpose-aligned networks of small autonomous teams
2. **[Cells](tags/cells.md)**: Teams of fewer than 10 people collaborating on specific ongoing activities
3. **[Roles](tags/roles.md)**: Sets of responsibilities, permissions, and accountabilities held by individuals or entities
4. **[Tasks](tags/tasks.md)**: Defined pieces of work with clear deliverables delivered by individuals or entities

These patterns can be combined in various ways to create organizational systems tailored to specific contexts and needs. Their power lies in their flexibility and composability while maintaining coherence that enables interoperability. When ready for implementation, these patterns are realized using technical primitives like smart contracts, governance protocols, and coordination tools.


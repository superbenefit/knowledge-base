---
title: DAO Primitives Conceptual Framework
description: A comprehensive framework for designing decentralized organizations as networks of small autonomous teams
publish: "true"
type: guide
tags:
  - cell
  - dao
  - roles
  - tasks
  - group-phase
  - group-state
---

# DAO Primitives Conceptual Framework

The DAO Primitives Framework provides a systematic approach to designing and implementing decentralized organizations as purpose-aligned networks. Building on the overview provided in the [DAO Primitives Project](notes/dao-primitives/dao-primitives.md), this framework offers a deeper exploration of the key concepts, dimensions, and components that enable effective decentralized coordination.

%% Begin Waypoint %%

- **[[framework]]**
  - [[group-facilitation|group facilitation]]
  - **[[group-phase]]**
    - [[completion|Completion Phase]]
    - [[conversation|Conversation Phase]]
    - [[coordination]]
    - [[formation]]
    - [[organization]]
  - **[[group-primitives]]**
  - **[[group-scale]]**
    - [[collaboration|Collaboration Scale]]
    - [[constituency|Constituency Scale]]
    - [[coordination|Coordination Scale]]
    - [[network|Network Scale]]
  - [[group-state|group state]]

%% End Waypoint %%

## Framework Overview

At its core, the DAO Primitives Framework is built around two complementary elements:

1. **Dimensional Lenses**: Three key perspectives - Group Phase, Group Scale, and Group State - that help assess and understand organizational contexts
2. **Organizational Primitives**: Fundamental building blocks - DAOs, Cells, Roles, and Tasks - that can be combined to create tailored organizational systems

Together, these elements provide a flexible yet coherent approach to designing decentralized organizations that can harness collective intelligence while maintaining purpose alignment across diverse and distributed teams.

## Dimensional Lenses

The framework uses three primary lenses to understand and navigate organizational complexity:

### 1. [Group Phase](notes/dao-primitives/framework/group-phase/group-phase.md)

Group Phase recognizes that organizations evolve through distinct developmental stages, each with its own characteristics and needs. Understanding where a group is in its journey helps select appropriate tools, practices, and structures.

The framework identifies five key phases:

- **[Conversation Phase](notes/dao-primitives/framework/group-phase/conversation.md)**: Initial exploration and idea generation focused on open dialogue, relationship building, and establishing shared vision before formal structures emerge
- **[Formation Phase](notes/dao-primitives/framework/group-phase/formation.md)**: Establishing basic structure and roles with minimal formality, emphasizing trust-building and defining initial procedures for group operation
- **[Organization Phase](notes/dao-primitives/framework/group-phase/organization.md)**: Implementing formal structures, defined processes, and governance mechanisms to create sustainable and scalable organizational systems
- **[Coordination Phase](notes/dao-primitives/framework/group-phase/coordination.md)**: Integrating with broader networks and collaborating with other groups, shifting focus from internal organization to external relationships
- **[Completion Phase](completion.md)**: Concluding initiatives, capturing learnings, and transitioning resources when projects or groups reach their natural conclusion

Learn more about [Group Phase](notes/dao-primitives/framework/group-phase/group-phase.md)

### 2. [Group Scale](notes/dao-primitives/framework/group-scale/group-scale.md)

Group Scale acknowledges that the size and complexity of a group fundamentally affects how it functions. Different scales require different approaches to communication, decision-making, and coordination.

The framework identifies four distinct scales:

- **[Collaboration Scale](notes/dao-primitives/framework/group-scale/Collaboration%20Scale.md)** (sub 10 people): High-bandwidth, synchronous communication with direct relationships
- **[Coordination Scale](notes/dao-primitives/framework/group-scale/Coordination%20Scale.md)** (10-150 people): Multiple teams or structured working relationships requiring explicit coordination mechanisms
- **[Constituency Scale](notes/dao-primitives/framework/group-scale/Constituency%20Scale.md)** (100s +): Broader communities requiring large scale governance mechanisms
- **[Network Scale](notes/dao-primitives/framework/group-scale/Network%20Scale.md)** Interconnected networks of organizations

Most contexts require organizations operate at multiple scales simultaneously, with different functions happening at different scales. The DAO primitives framework helps design appropriate coordination mechanisms for each scale.

Learn more about [Group Scale](notes/dao-primitives/framework/group-scale/group-scale.md)

### 3. [Group State](notes/dao-primitives/framework/group-state.md)

Group State focuses on how having a transparent organizational state for each entity in a network, enables effective coordination in decentralized systems. For groups to interact effectively without centralized control, they need clear interfaces that make them interoperable and universally addressable.

In the DAO primitives framework Group state consists of three core components:

- **Purpose**: Why the group exists and what it aims to achieve
- **Practice**: How the group operates and makes decisions
- **Progress**: How the group tracks, measures, and communicates its activities

This state documentation serves as a "public interface" that enables both internal coherence and external coordination. It allows groups to have an existence that is both independent from the larger network and integrated into it through agreements with other entities.

Learn more about [Group State](notes/dao-primitives/framework/group-state.md)

## Organizational Primitives

Building on these dimensional lenses, the framework identifies fundamental building blocks that can be combined to create organizational systems:

### 1. Core Conceptual Primitives

At the highest level, three foundational organizational primitives:

- **Entities/Groups**: Individuals, teams, or organizations with animating purpose and internal agreements
- **Networks**: Clusters of entities animated by shared purpose and common agreements
- **Agreements**: Commitments within and between entities that enable coordination

### 2. Operational Primitives

Although the above conceptual framework could be used to design a wide range of different governance and operational structures, the DAO Primitives framework leans heavily on the following 4 organizational structures:

1. **[DAOs](notes/dao-primitives/framework/organizational-primitives/daos.md)**: Purpose-aligned networks of small autonomous teams
2. **[Cells](notes/dao-primitives/framework/organizational-primitives/cells.md)**: Teams of fewer than 10 people collaborating on specific ongoing activities
3. **[Roles](notes/dao-primitives/framework/organizational-primitives/roles.md)**: Sets of responsibilities, permissions, and accountabilities held by individuals or entities
4. **[Tasks](notes/dao-primitives/framework/organizational-primitives/tasks.md)**: Defined pieces of work with clear deliverables delivered by individuals or entities

These primitives can be combined in various ways to create organizational systems tailored to specific contexts and needs. Their power lies in their flexibility and composability while maintaining coherent patterns that enable interoperability.

## Group Facilitation - A Framework for Implementation

The framework is designed to be practical and applicable. The [Group Facilitation Guide](notes/dao-primitives/framework/group-facilitation.md) provides a structured methodology for applying these concepts to real-world organizational challenges.

The facilitation process typically involves:

1. **Assessing Context**: Understanding the group's current phase, scale, and state
2. **Identifying Needs**: Determining the most pressing challenges and opportunities
3. **Selecting Patterns**: Choosing appropriate organizational patterns from the [Pattern Library](notes/dao-primitives/implementation/patterns/patterns.md)
4. **Implementing Solutions**: Adapting and applying these patterns to the specific context
5. **Evolving & Iterating**: Continuously refining the approach based on feedback

## Framework Applications

The DAO Primitives Framework can be applied to diverse organizational contexts:

### New Organization Design

For groups creating new decentralized organizations, the framework provides:

- A structured approach to designing governance and operational systems
- Guidance on selecting appropriate patterns for the group's phase and scale
- Templates and tools for implementing key organizational components

### Existing Organization Evolution

For established organizations looking to become more decentralized, the framework offers:

- Diagnostic tools for assessing current structures and practices
- Incremental pathways for transitioning toward more distributed models
- Compatible patterns that can be integrated with existing systems

### Inter-organizational Coordination

For networks of organizations working together, the framework provides:

- Shared language and concepts for designing collaborative structures
- Interoperability standards that enable effective coordination
- Scalable governance patterns for managing network-level decisions
- See [RPP Governance Design Case Study](rpp-governance-design-study.md)

## Enabling Collective Intelligence

A central goal of the framework is to enable emergent collective intelligence in decentralized networks. This is achieved through several key mechanisms:

### Permissionless Network Access

As outlined in [Minimum Viable Permissionless-ness](artifacts/articles/network-evolution%201/Minimum%20Viable%20Permissionless-ness.md), the framework emphasizes three essential freedoms:

1. The freedom to work on something without requiring permission
2. The ability to attract others to work on a project
3. The right to put up proposals to the broader network

These freedoms enable knowledge and insights from individuals working "close to reality" to influence strategy and resource allocation using decentralized governance mechanisms, rather than relying on centralized decision-making.

### Transparent State Documentation

Clear and accessible documentation of group state creates the transparency needed for decentralized coordination. By making purpose, practices, and progress visible, organizations enable:

- Self-organization around emerging opportunities
- Autonomous yet aligned decision-making
- Effective collaboration across different teams and entities

### Multi-scale Governance

The framework's attention to different scales enables organizations to implement governance mechanisms appropriate to each context, combining:

- High-context, relationship-based collaboration at small scales
- Explicit agreements and role-based coordination at medium scales
- Democratic, representative and delegated governance at larger scales
- Inter-network partnerships and coordination

This multi-scale approach allows organizations to achieve:

- Both the efficiency benefits of structured coordination and the innovation benefits of autonomous experimentation
- Capture resistance as there are fewer governance concentrations points in the system
- Flexibility to respond to changing contexts

## Further Exploration

The framework is supported by a rich ecosystem of related resources:

- The [Pattern Library](notes/dao-primitives/implementation/patterns/patterns.md) provides reusable solutions to common organizational challenges
- The [Implementation](notes/dao-primitives/implementation/implementation.md) section offers practical guides and case studies
- The [Resources](notes/dao-primitives/resources/resources.md) section provides templates and tools for implementation

Together, these resources form a comprehensive toolkit for designing, implementing, and evolving decentralized organizations that can effectively harness collective intelligence while maintaining purpose alignment.

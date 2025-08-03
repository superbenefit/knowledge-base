---
title: Roles (Primitive)
description: Sets of responsibilities, permissions, and accountabilities that enable coordination and specialization
author:
  - yeoro.eth
tags:
  - primitives
  - roles
publish: true
type: note
---

# Roles

## Definition

Roles within the DAO Primitives Framework function as **agreement primitives** that establish formalized commitments about [responsibilities](/tags/responsibilities.md), [permissions](/tags/permissions.md), and [authorities](/tags/authorities.md) between [agents](/tags/agents.md) and [entities](/artifacts/guides/dao-primitives-framework/group-primitives/cells.md) in the network. As defined in [our lexicon](/tags/roles.md), Roles are "defined sets of responsibilities, permissions, and accountabilities that enable coordination and specialization within decentralized systems" - serving as the relationship infrastructure that connects autonomous actors across [DAO networks](/artifacts/guides/dao-primitives-framework/group-primitives/daos.md).

---

## Core Characteristics

**Agreements-Based Primitive**: Unlike [Cells](/artifacts/guides/dao-primitives-framework/group-primitives/cells.md) and [DAOs](/artifacts/guides/dao-primitives-framework/group-primitives/daos.md) which function as entities (network nodes), Roles serve as [agreements](/tags/agreements.md) (network edges) that define the "commitments and [responsibilities](/tags/responsibilities.md) that are agreed upon between autonomous actors in the network."

**Relationship Infrastructure**: Roles create the connective tissue between entities by establishing clear [agreements](/tags/agreements.md) about "who is responsible for what" while maintaining [transparent](/tags/transparency.md) interfaces that enable effective [coordination](/tags/coordination.md) across the network without requiring hierarchical management.

**Ongoing Activities**: Roles enable "[coordination](/tags/coordination.md) and specialization" for ongoing activities (as opposed to [tasks](/drafts/framework backup/group-primitives/tasks.md)). They create defined sets of [responsibilities](/tags/responsibilities.md) and [permissions](/tags/permissions.md) that persist until they are either relinquished by the role owner or removed by a person or entity that holds authority over the role.

**Flexible Implementation**: Roles can be implemented across different contexts as highly flexible ongoing mechanisms to manage responsibilities - e.g., in [Cells](/artifacts/guides/dao-primitives-framework/group-primitives/cells.md) defining internal and external roles for specialized functions, to [DAO](/artifacts/guides/dao-primitives-framework/group-primitives/daos.md) networks establishing roles for cross-entity [coordination](/tags/coordination.md), to technical systems implementing role-based access control.

## Role State

**Role State** documentation enables Roles to function effectively as [agreements](/tags/agreements.md) primitives across [DAO networks](/artifacts/guides/dao-primitives-framework/group-primitives/daos.md). Transparent state documentation is maintained for each role. This captures the essential information needed for both role fulfillment and network [coordination](/tags/coordination.md).

This [transparent](/tags/transparency.md) role state makes a role addressable and understandable across the wider network, not just internally to the [entity](/artifacts/guides/dao-primitives-framework/group-primitives/cells.md) that created the role. By documenting role state in accessible formats, other [Cells](/artifacts/guides/dao-primitives-framework/group-primitives/cells.md), [agents](/tags/agents.md), and network entities can discover, understand, and coordinate with roles directly, enabling the decentralized collaboration that characterizes effective [DAO](/artifacts/guides/dao-primitives-framework/group-primitives/daos.md) networks.

Role State consists of three core components:

**[Purpose](/tags/purpose.md)**: Documents the specific outcomes, [responsibilities](/tags/responsibilities.md), and [authorities](/tags/authorities.md) that the role is designed to fulfill within the network context. This creates clarity about the role's function and enables other network participants to understand when and how to engage with the role.

**[Practice](/tags/practices.md)**: Establishes the operational [agreements](/tags/agreements.md) about how [responsibilities](/tags/responsibilities.md) will be fulfilled, what [permissions](/tags/permissions.md) and [authorities](/tags/authorities.md) are granted, and how the role interfaces with other roles and entities in the network.

**[Progress](/tags/progress.md)**: Maintains documentation of role performance and activities against defined [responsibilities](/tags/responsibilities.md), creating [transparency](/tags/transparency.md) that supports both individual [accountability](/tags/accountability.md) and enables other network participants to assess role effectiveness and identify collaboration opportunities.

Together, these three dimensions create comprehensive role state documentation that enables roles to function as effective [agreements](/tags/agreements.md) primitives while maintaining the [transparency](/tags/transparency.md) needed for network-wide [coordination](/tags/coordination.md).

## Phase & Scale Considerations

**Cross-Phase Adaptability**: Roles evolve through [group phases](/artifacts/guides/dao-primitives-framework/group-phase/group-phase.md) as entities mature - from informal role emergence in [Conversation Phase](/artifacts/guides/dao-primitives-framework/group-phase/conversation-phase.md) to formalized role structures in [Organization Phase](/artifacts/guides/dao-primitives-framework/group-phase/organization-phase.md) to network-integrated roles in [Coordination Phase](/artifacts/guides/dao-primitives-framework/group-phase/coordination-phase.md).

**Scale-Appropriate Complexity**: Role definition and management mechanisms adapt to scale requirements - simple, relationship-based roles at collaboration scale versus formal, documented roles with explicit [permissions](/tags/permissions.md) systems at coordination and constituency scales.

## Network Relationships

**Entity-Role Integration**: Roles are one of the functional interfaces between [Cells](/artifacts/guides/dao-primitives-framework/group-primitives/cells.md) and [DAOs](/artifacts/guides/dao-primitives-framework/group-primitives/daos.md), enabling entities to coordinate effectively by establishing clear [agreements](/tags/agreements.md) about [responsibilities](/tags/responsibilities.md), [authorities](/tags/authorities.md), and [accountability](/tags/accountability.md) across the network. For example, a Cell can be created to perform an established role. The role defines clear resource allocation, deliverables, etc. for the Cell. But the Cell retains autonomy as to how it does this. It also is free to engage in other activities across the network that are independent of the particular role it is committed to.

**Role-Task Coordination**: Roles work in conjunction with [Tasks](/artifacts/guides/dao-primitives-framework/group-primitives/tasks.md) (another agreements primitive) to operationalize network coordination - Roles defining "who" has responsibility and authority, while Tasks define "what" specific actions and deliverables need to be accomplished.

**Network-Wide Coherence**: Through documented role [agreements](/tags/agreements.md), the network creates [transparency](/tags/transparency.md) about [responsibilities](/tags/responsibilities.md) and [authorities](/tags/authorities.md) that enables decentralized [coordination](/tags/coordination.md) while maintaining overall coherence and [accountability](/tags/accountability.md).

## Implementation Patterns

**Cell-Internal Roles**: [Cells](/artifacts/guides/dao-primitives-framework/group-primitives/cells.md) define internal roles that handle specialized functions while maintaining clear interfaces with other Cells, creating "[transparent](/tags/transparency.md) [agreements](/tags/agreements.md) about who is responsible for what" within a team.

**Cross-Cell Coordination Roles**: Roles that span multiple [Cells](/artifacts/guides/dao-primitives-framework/group-primitives/cells.md) or interface between Cells and the broader [DAO](/artifacts/guides/dao-primitives-framework/group-primitives/daos.md) network, enabling coordination without hierarchical management structures.

**Technical Role Implementation**: In web3 contexts, roles often manifest as cryptographically secured [permissions](/tags/permissions.md) systems through smart contracts, multi-signature wallets, and role-based access control that "distribute control across multiple stakeholders while maintaining [transparent](/tags/transparency.md), verifiable permission structures."

## Examples in Practice

**SuperBenefit**: has implemented roles to perform community governance functions. We do this using Hats Protocol: [https://app.hatsprotocol.xyz/trees/10/30](https://app.hatsprotocol.xyz/trees/10/30)

**All in for Sport**: has likewise implemented a roles structure using Hats Protocol: [https://app.hatsprotocol.xyz/trees/10/78](https://app.hatsprotocol.xyz/trees/10/78)

---

## Related Concepts

- [Roles](/tags/roles.md) - Comprehensive definition and usage contexts
- [Tasks](/artifacts/guides/dao-primitives-framework/group-primitives/tasks.md) - The complementary agreements primitive
- [Cells](/artifacts/guides/dao-primitives-framework/group-primitives/cells.md) - Entities that implement and coordinate through roles
- [DAOs](/artifacts/guides/dao-primitives-framework/group-primitives/daos.md) - Network entities that establish role frameworks
- [Agreements](/tags/agreements.md) - The broader category of relationship infrastructure
- [Responsibilities](/tags/responsibilities.md) - The duties and obligations assigned to roles
- [Authorities](/tags/authorities.md) - The decision-making capacities granted to roles
- [Accountability](/tags/accountability.md) - The mechanisms through which roles are held responsible



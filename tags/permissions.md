---
title: Permissions 
description: The structured allocation of rights and access controls that define what actions different participants can perform within a system, enabling secure and calibrated coordination in decentralized environments. 
harvester: rathermercurial.eth
tags:
- governance
- functions
- primitives 
aliases:
- "#permissions"
publish: "true"
type: tag
---

_Permissions are formalized rights and access controls that determine which agents can perform specific actions within a system, enabling secure [coordination](coordination.md) by balancing [autonomy](autonomy.md) with accountability across [decentralized](decentralization.md) networks._

Permissions serve as the foundational infrastructure for coordination in decentralized systems, establishing boundaries that both enable and constrain participant actions. Unlike traditional permissions that enforce rigid hierarchies, web3 permission systems create dynamic, contextual access patterns that can evolve with the needs of the organization. When thoughtfully designed, permissions create the conditions for appropriate decentralization - distributing authority without sacrificing coherence or security.

In complex coordination systems, permissions operate at multiple levels simultaneously: technical permissions enforce rules through code and cryptography, while social permissions establish norms and expectations through [governance](governance.md) processes and agreements. The interplay between these layers determines how [power](power.md) flows throughout a system and shapes both its operational effectiveness and its resilience against capture or misuse.

---

## Uses of "Permissions"

### Permissions in DAO [Primitives](primitives.md)

In the [DAO Primitives framework](../artifacts/guides/dao-primitives-framework/index.md), permissions function as a core mechanism for coordinating autonomous teams (Cells) within a larger network. The framework treats permissions not as static assignments but as relational agreements between network participants that determine how resources, decisions, and responsibilities are distributed across the system.

As [DAOs](daos.md) scale through fractal structures of interconnected Cells, permissions enable what [Minimum Viable Permissionless-ness](../artifacts/dao-primitives-framework/network-evolution/Minimum Viable Permissionless-ness.md) describes as "permissionless access to the network" while still providing necessary constraints on resource allocation. This distinction is crucial - while anyone can see opportunities and start working, permissions govern who can access treasuries, make binding decisions, or modify shared infrastructure.

This approach creates what might be called "calibrated permissioning" - deliberately designing where authority lies to achieve appropriate decentralization without sacrificing coordination capacity or security.

### Permissions in Technical Infrastructure

At the technical level, permissions are encoded directly into [blockchain](blockchain.md) protocols, smart contracts, and governance mechanisms. These programmatic permissions establish cryptographically secured rights that determine who can interact with contracts, trigger governance processes, or access protected resources.

Unlike traditional database access controls, on-chain permissions are publicly verifiable, immutable unless explicitly designed to be modified, and enforced without the need for trusted intermediaries. This creates strong guarantees around permission execution that can serve as the foundation for complex coordination systems.

Technical implementations include:

- Multi-signature wallets requiring approval from multiple keyholders
- Role-based access control in smart contracts
- Token-gated permissions where ownership of specific tokens grants access rights
- Time-locked or condition-based permissions that activate under specific circumstances

### Permissions in Governance Systems

In governance contexts, permissions define who can participate in different aspects of [decision-making](decision-making.md) and under what conditions. This includes rights to create proposals, vote on decisions, delegate authority, or implement approved changes.

Permissions in governance typically operate across multiple scales, with different decision types requiring different permission structures. As described in Building DAOs as scalable networks, a two-house governance structure might separate permission systems:

- **[Community](community.md) Governance** permissions focus on long-term, high-stakes decisions about purpose and treasury management, often requiring broader stakeholder [participation](participation.md)
- **Operational Governance** permissions address day-to-day implementation and tactical decisions, distributed across autonomous teams in a sociocratic structure

This multi-scale approach allows permissions to be calibrated to the specific nature and impact of different decision types.

### Permissions and Permissionless-ness

A key tension in web3 systems exists between permissioned access and "permissionless-ness" - the ability to participate without requiring approval from gatekeepers. As explored in Minimum Viable Permissionless-ness, effective DAOs must balance open participation with structured coordination.

The solution proposed involves distinguishing between "access to the network" (which should be permissionless) and "access to resources" (which requires appropriate permissions). This approach enables three essential freedoms:

1. The freedom to work on something without requiring permission
2. The ability to attract others to work on a project
3. The right to put up proposals to the broader network

By structuring permissions this way, networks can harness collective intelligence through permissionless exploration while maintaining appropriate controls around resource allocation and implementation.

## Related Concepts

- Autonomy: Permissions define the boundaries within which autonomous agents can operate
- Delegation: The process of transferring permissions from one agent to another
- Decisions: Permission systems determine who can make which types of decisions
- Agents: The individuals or entities that receive and exercise permissions
- Governance: Systems that establish and modify permissions across organizations
- Resources: Assets and capabilities that permission systems regulate access to
- Protocols: Standardized rules that often encode permission structures
- Policies: Formalized rules that establish parameters for permissions

## References and Resources

- Minimum Viable Permissionless-ness: Explores the balance between permissions and permissionless access
- Building DAOs as scalable networks: Discusses permission structures across governance scales
- DAO Primitives Project: Framework for understanding permissions in decentralized organizations
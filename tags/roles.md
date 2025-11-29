---
title: Roles
description: Defined sets of responsibilities, permissions, and accountabilities that enable coordination and specialization within decentralized systems
harvester: rathermercurial.eth
tags:
- agreements
- resources
aliases:
- "#roles"
publish: true
---

_Roles are defined sets of responsibilities, permissions, and accountabilities assigned to individuals or entities within a system, enabling specialized contributions while creating clear interfaces for [coordination](coordination.md) across [decentralized](decentralization.md) networks._

Roles serve as fundamental coordination mechanisms in decentralized systems, creating clarity about expected contributions without requiring hierarchical management. Unlike traditional job descriptions that often focus on compliance with predetermined processes, roles in [DAOs](daos.md) and web3 organizations typically emphasize outcomes and boundaries while leaving space for [autonomy](autonomy.md) in implementation. This balance between clarity and flexibility allows for specialized contributions while maintaining coherence across distributed networks.

In the context of decentralized coordination, well-designed roles create "minimum viable structure" - providing enough definition to enable effective collaboration without imposing unnecessary rigidity. They establish clear interfaces between contributors, clarifying who is responsible for what without prescribing exactly how those responsibilities must be fulfilled. This approach supports both individual agency and system-wide alignment, allowing complex organizations to function without centralized control.

---

## Uses of "Roles"

### Roles in DAO [Governance](governance.md)

In DAO governance systems, roles provide specialized functions that distribute [decision-making](decision-making.md) authority and operational responsibilities across the network. Rather than concentrating [power](power.md) in management hierarchies, DAOs typically implement constellations of roles with specific domains of authority and accountability.

These governance roles might include treasury signers who manage collective resources, facilitators who guide decision processes, delegates who represent stakeholder interests, or specialized domain experts who provide input on technical decisions. As described in various governance artifacts, these roles often operate within multi-scale systems where different responsibilities are handled at the appropriate level of the organization.

### Roles in Cell-Based Organizations

<<<<<<< HEAD
Within cell-based organizational models like those described in the [Primitives Framework](artifacts/primitives-framework/index.md), roles function as **agreement patterns** that establish formalized commitments about responsibilities, permissions, and authorities between agents and entities in the network. In these systems, cells (small autonomous teams) define internal roles that handle specialized functions while maintaining clear interfaces with other cells in the network.
=======
Within cell-based organizational models like those described in the [DAO Primitives framework](../artifacts/guides/dao-primitives-framework/index.md), roles "contain and manage specific responsibilities and sets of permissions." In these systems, cells (small autonomous teams) define internal roles that handle specialized functions while maintaining clear interfaces with other cells in the network.
>>>>>>> f0cebfda2a6f6cb818dc70d708ddc5b83bc34361

Roles serve as the relationship infrastructure that connects autonomous actors across DAO networks, enabling coordination and specialization for ongoing activities. As noted in papers like "Building DAOs as scalable networks," these roles enable autonomous teams to coordinate effectively by creating transparent agreements about who is responsible for what. Cell documentation typically includes explicit role definitions as part of their state, making these agreements visible to both team members and external stakeholders.

Unlike cells and DAOs which function as entities (network nodes), roles serve as agreements (network edges) that define the commitments and responsibilities agreed upon between autonomous actors in the network.

### Roles in Technical Systems

In technical implementations, roles often manifest as permission systems that control access to various functions and resources. Smart contracts, multi-signature wallets, and other web3 infrastructure frequently implement role-based access control (RBAC) to manage who can perform specific actions within the system.

These technical roles establish cryptographically secured boundaries that determine who can modify parameters, execute transactions, or access protected resources. Unlike traditional access control that relies on central authorities, web3 role implementations often distribute control across multiple stakeholders while maintaining transparent, verifiable permission structures.

## Related Concepts

- **[Agents](tags/agents.md)**: The individuals or entities that fulfill roles within a system
- **[Agreements](tags/agreements.md)**: Formal or informal understandings that define roles and their relationships
- **[Responsibilities](tags/responsibilities.md)**: The specific duties and obligations assigned to a role
- **[Authorities](tags/authorities.md)**: The authorized capabilities that enable role-holders to fulfill their responsibilities
- **[Eligibility](tags/eligibility.md)**: The criteria and qualifications that determine who can fulfill specific roles
- **[Accountability](tags/accountability.md)**: The obligation to account for activities, accept responsibility, and disclose results

## References and Resources

- DAO Primitives Framework - Provides context for roles as fundamental organizational primitives
- Building DAOs as scalable networks - Discusses role distribution across governance scales
- Cell Working Group pattern - Explores roles within autonomous team structures
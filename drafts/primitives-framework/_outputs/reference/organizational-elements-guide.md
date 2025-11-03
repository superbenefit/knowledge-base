---
title: Organizational Elements Quick Reference
description: Quick lookup guide for the fundamental building blocks of decentralized organizations
author:
  - yeoro.eth
tags:
  - organizational-elements
  - dao
  - cells
  - roles
  - tasks
  - reference
publish: true
type: reference
---

# Organizational Elements Quick Reference

This guide provides quick reference information for the four fundamental **organizational elements** that form the conceptual building blocks of decentralized organizations. These elements represent the entities and agreements that exist in any organization, regardless of the technical tools used to coordinate them.

---

## Understanding Organizational Elements

**Organizational elements** are the conceptual structures—entities and agreements—that exist in organizations as part of the **territory** of organizational reality. They describe how people organize, coordinate, and work together.

This distinguishes them from **DAO primitives** (the technical implementation tools like smart contracts, multisigs, and token systems) which create digital twins of these organizational elements.

---

## The Four Elements

### 1. DAOs (Decentralized Autonomous Organizations)

**Type**: Organizational Entity

**Definition**: Purpose-aligned networks of autonomous teams coordinating through transparent governance and shared infrastructure.

**Key Characteristics**:
- Provide network-level coordination and resource management
- Establish shared purpose and values across distributed teams
- Enable permissionless participation and transparent operations
- Scale through nested networks of smaller autonomous units

**Common Use Cases**:
- Community governance wrappers for operational networks
- Multi-stakeholder partnerships requiring transparent coordination
- Networks coordinating multiple projects toward shared goals
- Ecosystems enabling permissionless innovation

**Related Concepts**: Network Scale, Coordination Phase, Governance

**Framework Reference**: [DAOs](../framework/group-primitives/daos.md)

---

### 2. Cells

**Type**: Organizational Entity

**Definition**: Small autonomous teams of 10 or fewer people (typically 3-8) that function as the basic operational units within DAO networks.

**Key Characteristics**:
- Operate at collaboration scale with high-bandwidth communication
- Maintain "networked autonomy" - independent yet coordinated
- Document state through Purpose, Practice, Progress framework
- Form through various pathways: operational scaling, community operationalization, partnerships, or permissionless formation

**Common Use Cases**:
- Core operational teams executing specific initiatives
- Function-based teams (communications, development, governance)
- Project-based teams with defined deliverables
- Coordinating bodies managing other Cells

**Related Concepts**: Collaboration Scale, Cell State, Organization Phase

**Framework Reference**: [Cells](../cells.md)

---

### 3. Roles

**Type**: Organizational Agreement

**Definition**: Defined sets of responsibilities, authorities, and accountabilities that structure how work is distributed and coordinated within and between teams.

**Key Characteristics**:
- Distribute specialized functions within Cells
- Enable coordination across organizational boundaries
- Clarify authority and accountability structures
- Adapt dynamically as organizational needs evolve

**Common Use Cases**:
- Internal Cell roles (facilitator, secretary, operational leader)
- Cross-Cell coordination roles (delegates, liaisons)
- Specialized function roles (developer, designer, community manager)
- Governance roles (steward, validator, proposal reviewer)

**Related Concepts**: Practice, Collaboration Scale, Governance

**Framework Reference**: [Roles](../framework/group-primitives/roles.md)

---

### 4. Tasks

**Type**: Organizational Agreement

**Definition**: Discrete units of work with defined scope, deliverables, and accountability that enable coordinated action within and between organizational entities.

**Key Characteristics**:
- Provide granular work coordination mechanisms
- Enable transparent workflow and progress tracking
- Facilitate distributed contribution and accountability
- Support both internal and cross-team collaboration

**Common Use Cases**:
- Bounties for open contribution opportunities
- Project milestones and deliverables
- Recurring operational responsibilities
- Cross-team collaboration activities

**Related Concepts**: Progress, Coordination Scale, Project Management

**Framework Reference**: [Tasks](../framework/group-primitives/tasks.md)

---

## Element Relationships

### Nesting and Composition

Organizational elements combine in hierarchical and networked structures:

- **DAOs** coordinate networks of **Cells**
- **Cells** define internal **Roles** and coordinate **Tasks**
- **Roles** span across Cells to enable network coordination
- **Tasks** flow between Roles within and across Cells

### Scale Relationships

Elements operate at different organizational scales:

- **DAOs**: Network Scale and Constituency Scale
- **Cells**: Collaboration Scale and Coordination Scale
- **Roles**: Primarily Collaboration Scale
- **Tasks**: Collaboration Scale (internal) and Coordination Scale (cross-team)

### Lifecycle Integration

Elements evolve through developmental phases:

- **Conversation Phase**: Informal exploration of purpose and relationships
- **Formation Phase**: Basic structure emerges, initial roles and agreements
- **Organization Phase**: Formal definition of Cells, Roles, Tasks within DAOs
- **Coordination Phase**: Network-level integration and cross-entity coordination
- **Completion Phase**: Conclusion, transition, learning capture

---

## From Elements to Implementation

### The Mapping Process

Organizational elements exist conceptually first. The journey to implementation follows:

1. **Territory**: Live organizational reality - relationships, workflows, agreements as practiced
2. **Map**: Documentation through frameworks like Group State (Purpose, Practice, Progress)
3. **Graph**: Structured digital representation using DAO primitives (smart contracts, tokens, etc.)

### Choosing DAO Primitives

Different technical tools implement these conceptual elements:

- **DAOs**: Implemented via governance frameworks (Aragon, DAOstack), treasuries (Gnosis Safe), token systems
- **Cells**: Implemented via multisigs, sub-DAOs, documented group state
- **Roles**: Implemented via Hats Protocol, token-gated permissions, on-chain attestations
- **Tasks**: Implemented via Coordinape, Charmverse, Dework, bounty platforms

The organizational elements remain constant; the technical primitives are chosen based on context, scale, and needs.

---

## Design Principles

When working with organizational elements:

1. **Start with Territory**: Understand lived organizational reality before imposing structure
2. **Document Intentionally**: Map only what provides coordination value
3. **Implement Incrementally**: Move to technical implementation when coordination benefits justify complexity
4. **Maintain Human Agency**: Keep elements adaptable and responsive to human needs
5. **Enable Evolution**: Design for change as organizations grow and contexts shift

---

## Quick Comparison Table

| Element | Type | Scale | Primary Function | Key Tool |
|---------|------|-------|------------------|----------|
| **DAO** | Entity | Network/Constituency | Network coordination & governance | Governance framework |
| **Cell** | Entity | Collaboration/Coordination | Autonomous team operations | Group State documentation |
| **Role** | Agreement | Collaboration | Work distribution & accountability | Permission systems |
| **Task** | Agreement | Collaboration/Coordination | Work coordination & tracking | Project management tools |

---

## Next Steps

### For Concept Learners
Explore the dimensional lenses that help assess organizational contexts:
- [Group Phase](../framework/group-phase/index.md) - Developmental stages
- [Group Scale](../framework/group-scale/index.md) - Size and coordination patterns
- [Group State](../framework/group-state.md) - Documentation framework

### For Practitioners
See implementation guides for applying these elements:
- [Implementation Guide: Community Governance](../framework/dao-primitives-implementation/implementation-guide-community-governance.md)
- [Implementation Guide: Operational Governance](../framework/dao-primitives-implementation/implementation-guide-operational-governance.md)
- [Implementation Guide: Multi-Stakeholder Governance](../framework/dao-primitives-implementation/implementation-guide-multi-stakeholder-governance.md)

### For Technical Implementers
Review the DAO Primitives Catalog for technical tools that create digital twins of these organizational elements:
- [DAO Primitives Catalog](dao-primitives-catalog.md) *(coming soon)*

---

## Related Resources

- [DAO Primitives Framework Overview](../framework/index.md)
- [Group Facilitation Guide](../framework/group-facilitation.md)
- [Sense-Making Facilitation Tools](../sense-making-facilitation-tools.md)

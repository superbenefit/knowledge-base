---
title: DAO Primitives Catalog
description: Comprehensive listing of technical tools for implementing decentralized organizational structures
author:
  - yeoro.eth
tags:
  - dao-primitives
  - technical-tools
  - implementation
  - smart-contracts
  - reference
publish: true
type: reference
---

# DAO Primitives Catalog

This catalog provides a comprehensive overview of **DAO primitives**—the technical implementation tools that enable organizational elements to function in decentralized environments. These primitives create **digital twins** of conceptual organizational structures, translating entities and agreements into on-chain coordination systems.

---

## Understanding DAO Primitives

**DAO primitives** are technical tools—smart contracts, protocols, and platforms—that implement organizational elements on blockchain infrastructure. They transform conceptual organizational structures into executable, transparent, and trustless coordination systems.

**Key Distinction**:
- **Organizational Elements** (DAOs, Cells, Roles, Tasks) = Conceptual building blocks
- **DAO Primitives** (tools below) = Technical implementation layer

Together, they enable the **organizational graph**—a structured digital representation that serves as a digital twin for coordinating human activity.

---

## Primitive Categories

### 1. Governance Frameworks
Technical systems for decision-making, proposal management, and collective coordination.

### 2. Treasury Management
Tools for managing shared resources, funds, and financial operations.

### 3. Identity & Access
Systems for managing organizational identity, membership, and permissions.

### 4. Coordination & Work Management
Platforms for task allocation, progress tracking, and contribution coordination.

### 5. Token Infrastructure
Systems for creating, distributing, and managing digital assets and incentives.

### 6. Voting & Signaling
Mechanisms for collective decision-making and preference aggregation.

---

## Primitive Directory

### Governance Frameworks

#### Aragon
**Category**: Governance Framework
**Implements**: DAO governance, proposals, voting
**Key Features**:
- Modular DAO creation and management
- App-based extensibility
- On-chain voting and execution
- Treasury integration

**Best For**: DAOs needing customizable governance with plug-and-play modules

**Links**: [aragon.org](https://aragon.org)

---

#### DAOstack
**Category**: Governance Framework
**Implements**: Holographic consensus, reputation-based governance
**Key Features**:
- Reputation-weighted voting
- Predictive proposal boosting
- Scalable decision-making
- Modular architecture

**Best For**: Large-scale DAOs managing high proposal volumes

**Links**: [daostack.io](https://daostack.io)

---

#### Moloch
**Category**: Governance Framework
**Implements**: Minimum viable DAO, grant coordination
**Key Features**:
- Simple membership and voting
- Rage quit functionality
- Grant-focused design
- Lightweight implementation

**Best For**: Grant DAOs, funding coordination, simple membership organizations

**Links**: [molochdao.com](https://molochdao.com)

---

### Treasury Management

#### Gnosis Safe
**Category**: Treasury Management
**Implements**: Multi-signature wallet, asset management
**Key Features**:
- Multi-signature security
- Transaction batching
- Module extensibility
- Asset management interface

**Best For**: Cell-level treasuries, operational fund management

**Links**: [safe.global](https://safe.global)

---

#### Llama
**Category**: Treasury Management
**Implements**: On-chain treasury management, policy automation
**Key Features**:
- Automated treasury operations
- Policy enforcement
- Multi-chain support
- Analytics and reporting

**Best For**: Protocol treasuries, automated fund management

**Links**: [llama.xyz](https://llama.xyz)

---

### Identity & Access

#### Hats Protocol
**Category**: Identity & Access
**Implements**: Role-based access control, organizational charts
**Key Features**:
- Hierarchical role structures
- Dynamic permissions
- Delegation and revocation
- On-chain organizational graphs

**Best For**: Implementing Roles across organizational structures

**Links**: [hatsprotocol.xyz](https://hatsprotocol.xyz)

---

#### ENS (Ethereum Name Service)
**Category**: Identity
**Implements**: Human-readable identifiers, subdomains
**Key Features**:
- Readable wallet addresses
- Subdomain creation for organizational units
- Record storage
- Cross-platform integration

**Best For**: DAO and Cell identity, readable addressing

**Links**: [ens.domains](https://ens.domains)

---

#### Sismo
**Category**: Identity & Access
**Implements**: Zero-knowledge credentials, privacy-preserving access
**Key Features**:
- Privacy-preserving attestations
- Badge-based access control
- Aggregated identity
- Decentralized verification

**Best For**: Privacy-sensitive role assignment, credential verification

**Links**: [sismo.io](https://sismo.io)

---

### Coordination & Work Management

#### Charmverse
**Category**: Coordination Platform
**Implements**: Task management, documentation, proposals
**Key Features**:
- Workspace organization
- Task and bounty management
- Proposal workflows
- Collaborative documentation

**Best For**: Cell-level coordination, project management

**Links**: [charmverse.io](https://charmverse.io)

---

#### Dework
**Category**: Work Management
**Implements**: Task bounties, contribution tracking
**Key Features**:
- Bounty creation and management
- Contributor onboarding
- Payment automation
- Integration ecosystem

**Best For**: Task-based contribution, open bounties

**Links**: [dework.xyz](https://dework.xyz)

---

#### Coordinape
**Category**: Coordination & Rewards
**Implements**: Peer allocation, contribution recognition
**Key Features**:
- Circle-based contribution tracking
- Peer-to-peer allocation (GIVE)
- Reputation building
- Reward distribution

**Best For**: Recognizing contributions within Cells, retroactive rewards

**Links**: [coordinape.com](https://coordinape.com)

---

#### Wonder
**Category**: Task & Project Management
**Implements**: Workflow automation, bounties, milestones
**Key Features**:
- Automated task workflows
- Multi-chain payments
- Proposal integration
- Milestone tracking

**Best For**: Complex project coordination, automated workflows

**Links**: [wonder.xyz](https://wonder.xyz)

---

### Token Infrastructure

#### Superfluid
**Category**: Token Infrastructure
**Implements**: Continuous token streaming, programmable cash flows
**Key Features**:
- Real-time token streaming
- Programmable distributions
- Subscription models
- Automated vesting

**Best For**: Continuous compensation, automated distributions

**Links**: [superfluid.finance](https://superfluid.finance)

---

#### Colony
**Category**: Token Infrastructure & Reputation
**Implements**: Reputation mining, payment routing
**Key Features**:
- Reputation-based rewards
- Payment distribution
- Domain-based organization
- Dispute resolution

**Best For**: Reputation-weighted coordination, hierarchical DAOs

**Links**: [colony.io](https://colony.io)

---

### Voting & Signaling

#### Snapshot
**Category**: Voting & Signaling
**Implements**: Off-chain voting, gasless proposals
**Key Features**:
- Gas-free voting
- Multiple voting strategies
- Flexible proposal types
- Integration ecosystem

**Best For**: Community signaling, preliminary decisions, gas-efficient governance

**Links**: [snapshot.org](https://snapshot.org)

---

#### Tally
**Category**: Voting & Governance Dashboard
**Implements**: On-chain governance visualization, voting interface
**Key Features**:
- Governance dashboard
- Proposal tracking
- Delegation management
- Analytics and insights

**Best For**: Governor-based DAOs, governance transparency

**Links**: [tally.xyz](https://tally.xyz)

---

## Implementation Patterns

### Composing Primitives

Most organizations combine multiple primitives to implement their organizational graph:

**Example: Operational Cell**
- **Treasury**: Gnosis Safe (multisig)
- **Roles**: Hats Protocol (permissions)
- **Tasks**: Charmverse (coordination)
- **Identity**: ENS subdomain

**Example: Community DAO**
- **Governance**: Snapshot (signaling) + Aragon (execution)
- **Treasury**: Gnosis Safe (operations) + Llama (automation)
- **Voting**: Tally (interface) + token-weighted voting
- **Identity**: ENS + Sismo (credentials)

**Example: Grant Program**
- **Governance**: Moloch (membership + voting)
- **Work**: Dework (bounties)
- **Rewards**: Coordinape (allocation) + Superfluid (streaming)
- **Treasury**: Gnosis Safe

---

## Selection Criteria

### Choosing DAO Primitives

Consider these factors when selecting technical tools:

1. **Organizational Phase**: Different phases require different technical maturity
   - Conversation/Formation: Minimal tooling (Snapshot, simple multisig)
   - Organization: More structure (Governance framework, Hats, Charmverse)
   - Coordination: Network integration (Cross-DAO tools, reputation systems)

2. **Scale Requirements**: Match tools to organizational scale
   - Collaboration Scale (Cells): Lightweight tools, low overhead
   - Coordination Scale: Integration capabilities, cross-team features
   - Network Scale: Scalable governance, automated operations

3. **Technical Capacity**: Assess team's ability to implement and maintain
   - Low technical capacity: User-friendly platforms (Snapshot, Charmverse)
   - High technical capacity: Composable primitives, custom implementations

4. **Decentralization Goals**: Balance convenience with trustlessness
   - Full decentralization: On-chain everything, no dependencies
   - Pragmatic approach: Off-chain signaling, on-chain execution

5. **Cost Considerations**: Balance functionality with gas costs and fees
   - High-frequency operations: Off-chain or L2 solutions
   - Critical operations: On-chain with proper security

---

## Territory → Map → Graph

### Implementation Journey

Organizations evolve through formalization stages:

**Territory Stage**: Informal coordination, minimal tooling
- Communication: Discord, Telegram
- Documentation: Notion, Google Docs
- Payments: Manual, ad-hoc

**Map Stage**: Documented processes, hybrid systems
- Add: Snapshot (signaling), shared multisig
- Maintain: Documentation of Purpose, Practice, Progress
- Formalize: Clear roles and responsibilities

**Graph Stage**: Structured digital twin, on-chain coordination
- Implement: Full governance framework, permission systems
- Automate: Treasury operations, task workflows
- Integrate: Cross-organization coordination

**Key Principle**: Move incrementally—only formalize what provides clear coordination value.

---

## Emerging Primitives

### Innovation Areas

The DAO primitive ecosystem continues evolving:

- **Modular Governance**: Composable governance building blocks
- **Cross-Chain Coordination**: Multi-chain organizational structures
- **AI-Augmented Coordination**: Intelligence-assisted decision-making
- **Reputation Portability**: Cross-platform reputation systems
- **Privacy-Preserving Governance**: Zero-knowledge voting and credentials

---

## Integration Resources

### Implementation Guides

Apply these primitives through structured implementation patterns:
- [Community Governance Implementation](./implementation-guide-community-governance.md)
- [Operational Governance Implementation](./implementation-guide-operational-governance.md)
- [Multi-Stakeholder Governance Implementation](./implementation-guide-multi-stakeholder-governance.md)

### Conceptual Foundation

Understand the organizational elements these primitives implement:
- [Organizational Elements Quick Reference](organizational-elements-guide.md)
- [DAO Primitives Framework](../../1-framework-foundation/index.md)

---

## Contributing

This catalog is maintained as part of the DAO Primitives Framework project. To suggest additions or updates:
- Submit primitive suggestions with: name, category, key features, use cases
- Share implementation patterns and case studies
- Report outdated or deprecated tools

---

## Related Resources

- [DAO Primitives Framework Overview](../../1-framework-foundation/index.md)
- [Group State Documentation](../../1-framework-foundation/dimensional-lenses/group-state.md)
- [Implementation Guides Index](./index.md)

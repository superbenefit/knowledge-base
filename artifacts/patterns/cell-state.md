---
title: Cell state (pattern)
description: A pattern for creating and managing group state for purpose aligned networks of small autonomous teams
tags:
  - patterns
  - group
  - group-state
  - cell
publish: true
type: pattern
aliases:
  - "#group-state"
primitives:
  - nucleus
  - circle
scale:
  - collaboration
  - coordination
phase:
  - formation
  - organisation
  - coordination
  - completion
---

_A pattern for creating and managing group state for purpose aligned networks of small autonomous teams_

---

## Problem / Solution Context

This pattern is designed to be used in the creation of [cells](artifacts/guides/dao-primitives-framework/group-primitives/cells.md) as [collaboration](artifacts/guides/dao-primitives-framework/group-scale/collaboration-scale.md) scale teams as described in the [DAO Primitives Framework](artifacts/guides/dao-primitives-framework/index.md)

Capturing and maintaining a cell's state is fundamental to enabling both autonomous operation and effective network coordination within DAOs. A clear and consistent cell state document serves as a living state that enables the cell to maintain coherence while evolving and provides transparency for network-level coordination. Without documented state, Cells risk falling into internal dysfunction and lack of effectiveness. They also fail to fully leverage the value of coordination and efficient resource and information flows across the network.

**The need for a consistent state template**

Unless a team is highly skilled in organizational design, implementing the cell state primitive to create a useful group-state will be difficult and time consuming. On top of this, if teams are required to develop their own cell state document without additional supporting structure, there is a risk that there will not be enough consistency between the ways different teams document their state. This can prevent many of the interoperability benefits that the [DAO Primitives Framework](artifacts/guides/dao-primitives-framework/index.md) promises from being realized.

To prevent this from happening we have developed this pattern as a template for teams to develop a simple and consistent cell state document to capture their group-state.

Note: It is still recommended that teams have access to skilled facilitation support to help them quickly lay out their group state.

---

## How the Cell State Pattern Works

The Cell State Pattern captures a DAO Cell's dynamic state through three core dimensions:

**Purpose (Why)**
The cell's vision, mission, and goals - defining its reason for existence and unique contribution to the network.

**Practice (How)**
The cell's operating model - including its practices, protocols, roles, and cultural norms for transforming purpose into action.

**Progress (What)**
The cell's actual achievements and impact - tracking initiatives, metrics, and value creation to enable accountability and adaptation.

**Phase**
The cell state document can serve 5 different purposes depending on the [phase](artifacts/guides/dao-primitives-framework/group-phase/index.md) a group is at in its lifecycle:

1. As a collaborative document to start to gather thoughts and intentions for the group in the [conversation](artifacts/guides/dao-primitives-framework/group-phase/conversation-phase.md) phase
2. As a proposal template for a formal proposal to approve the establishment of the team in the [formation](artifacts/guides/dao-primitives-framework/group-phase/formation-phase.md)
3. As the structure within which to develop and record the team's specific agreements and plans during [organization](artifacts/guides/dao-primitives-framework/group-phase/organization-phase.md) phase
4. As the capture of the ongoing evolving current state of the operating group. Visible, public (to the extent that this is practical) interface for those coordinating with the group through [coordination](artifacts/guides/dao-primitives-framework/group-phase/coordination-phase.md)phase
5. As the final record that archives what the group has achieved and who contributed to these achievements through[completion](artifacts/guides/dao-primitives-framework/group-phase/completion-phase.md) phase

## Components of group state

**Interoperability**
A group-state doc can include anything that a group wants, but in order for Cells to coordinate successfully, it is important to have consistency in the layout and contents of group-state.
The following is a recommended set of components designed to provide the key information needed for both internal Cell collaboration and inter-Cell coordination.

### Purpose

- **High-level purpose/problem** - a clear purpose statement for the Cell - including the problem that is being addressed
- **Genesis of the Cell** - detail of how this purpose connects to the vision, purpose and goals of the larger network and why this Cell is being created
- **Goals** - any specific goals that have been defined for the Cell e.g linking to the proposal that was passed to create the Cell etc
- **Design/intentions** - high-level description of what the Cell will do/is doing

### Practice

- **Relationships**
  - Details of relationship to the larger DAO/network. Including commitments/compliance to/with the larger network, e.g adherence to a DAO wide code of conduct
  - Details of formal agreements with other Cells/entities in the larger DAO/network
- **Formal structure** - legal or onchain formal structure of the group e.g a UNA, DUNA, Moloch DAO, including details of legal compliance/obligations
- **Team agreements** -
  - Team make-up - members of the Cell and the roles they hold e.g: core team members, contributors, specific execution and stewardship roles etc
  - Team commitments - team agreements that cover availability, the types of work team members agree to do, minimum agreements for contributions
- **Decision-making**
  - Simple decisions in the team. Being clear about making and recording decisions as part of your meetings and other interactions
  - Formal decisions - including treasury decisions and making changes to your Cell state
  - Dispute resolutions - agreements about how you will approach disputes and conflict within your team
  - [Decision-log](notes/dao-primitives/implementation/patterns/collaboration-scale-patterns/decision-log.md) - recording important decisions in a secure way
  - Tools
    - Record keeping - tools for keeping records of decisions that the team makes
    - Decision protocols - e.g adopting something like decider as a shared standard for decision-making
- **Treasury management**
  - Multisig
    - Treasury multisig configuration
    - Active signers and roles
    - Backup security measures in place
  - Contributor rewards
    - Mechanisms for rewarding different types of contributions, e.g salaries, task or role based compensation, allocation tools such as coordinape
  - Tokens & badges
    - Onchain mechanisms for managing authorities, compensation, decision-making etc e.g Hats protocol
  - Financial records
    - Transparent mechanism for recording treasury transactions and recording balances for compliance purposes

### Progress

The tools and practices by which the team achieves and demonstrates progress. These provide internal structure for the team and external transparency for coordinating entities outside the team:

- **Communication**
  - Shared comms platforms
  - Meeting schedules, structure and notes/recordings
- **Strategy/planning** - ongoing planning documentation
- **Project/progress management**
  - Task management - project management for core team and contributors
  - Role management - visibility over crafted and assigned roles

## Affordances

**Internal collaboration** - developing and maintaining a well defined group-state causes a team to reach agreement on important aspects of the groups purpose, goals and strategy, as well as internal processes for decision-making, resource allocation, compensation etc. This intentional alignment enhances the team's capability to navigate complex challenges while maintaining coherent action toward shared objectives.

**External coordination** - the group-state nucleus document allows coordinating entities (other Cells, partners, [community governance](artifacts/patterns/community-governance.md) etc) to easily understand what a Cell is trying to achieve, how it is operating internally and what work it is doing. This allows these external entities to make informed decisions about resource allocation and partnership opportunities based on the effectiveness and trustworthiness of the Cell.

**Network scale transparency and intelligence** - A larger network view and collective intelligence can emerge based on Cells utilizing a consistent interoperable schema and tooling for group state.

## Risks and Opportunities

### Considerations

**Balancing costs & benefits**
A careful balancing of the cost of creating and maintaining cell state vs the gains from better collaboration and coordination is required. If too much emphasis is put on creating and maintaining group-state then it can become overly burdensome and counter productive. But if group-state is not sufficiently detailed it will fail to offer the collaboration and coordination benefits desired.

### Risks

**State-bloat** - Teams can over-index on process related to state creating unnecessary operational overhead

**State-decay** - Failure to prioritize maintaining group-state causes it become outdated and unreliable

**Box ticking** - Teams may engage in superficial reporting that doesn't reflect real activities or progress. This risks creating a culture of checkbox compliance rather than meaningful documentation

**Storytelling theatre** - Teams can over-index on narrative in their group-state in order to tell a positive story about the group, but provide little solid foundation for outside entities to judge the quality of their internal practices or material progress.

### Solution opportunities

**More onchain data**

- Increasing the amount of group-state that is linked to onchain data (or other forms of linked data) can reduce the requirement for updating state and increase the accuracy and trust others can place in a group-state document

- Onchain data, via the use of crypto primitives, also allows for more automation, trustless interoperability and potential collective intelligence across the larger network that the group is coordinating inside.

---

## Implementation

### Template

[Cell State Template](artifacts/patterns/cell-state-template.md): Use this template as a starting point for designing an appropriate cell state document for a team. Select categories to include from the Components of Cell State section and base

There are several variables that will influence what and how much detail a team will choose to include in it's group state. These can include:

- **Phase of development** - a Cell in an early [phase](artifacts/guides/dao-primitives-framework/group-phase/index.md) of development may require less specific detail, reflecting its lack of formal structure, compared to an mature operational Cell.
- **Responsibilities to outside entities** - Cells may require specific information to be included in their group-state based on agreements they have with entities they are coordinating with.
- **Amount of resources managed** - a Cell with a large treasury would likely require more rigorous decision-making and treasury management practices to be included in its group-state

- If available, ask for facilitation support to help decide what to include and the level of depth/detail to include based on the cell's phase and the coordination requirements of the network that the group will operate in.

### Technical implementation

In the early phases of development of a Cell ([conversation-phase](artifacts/guides/dao-primitives-framework/group-phase/conversation-phase.md) & [formation-phase](artifacts/guides/dao-primitives-framework/group-phase/formation-phase.md)] phase) the Cell's state can stored informally in a simple document editor. However as the group implements its formal structure and agreements with other entities in the network, it enters the [organization-phase](artifacts/guides/dao-primitives-framework/group-phase/organization-phase.md) phase, and its cell state will need to be stored in a way that produces:

- **Transparency** - the ability for others in the network to assess the groups state information
- Trust - the ability for others to trust the provenance, accuracy and currency of information in **the** group's state
- **A single point of of access** - the ability for others to be able to access all of the relevant state information from a single document (as a starting point)

To deliver the above, ideally a Cell's state will be stored in a digital platform that offers:

- **Token gated access control** - granular control over who can view and edit the content. Ensuring that only key team members can edit the group state document, but also ensure that the state document is visible to the wider network/community.
- **Version control and attribution** - the ability to see past versions of the document and potentially roll back changes made to it. Seeing the evolution of decisions and changes made to the group over time is important for audit-ability of the group state. It also ensure that the document can be reverted if it includes accidental on deliberate errors occur.
- **Links to specific documents and applications** - rather than trying to include large amounts of operational information, the group state document should list and link to the different applications that the group is using to manage its work. E.g project management, treasury management, comms platforms etc

```dataview
LIST description
WHERE (
    (contains(patterns, this.file.name) OR patterns = this.file.name)
)
AND (
    contains(type, "study") OR type = "study"
)
AND (
    !contains(file.path, "tools/")
    AND !contains(file.path, "drafts/")
)
```

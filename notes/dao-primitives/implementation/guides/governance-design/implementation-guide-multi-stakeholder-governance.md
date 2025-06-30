---
title: title
description: description
author: 
tags: 
harvester: 
curator: 
publish: "false"
type: note
---

description

%% Introduce your note here. %%

---

# Implementation Guide: Multi-Stakeholder Governance Using the DAO Primitives Framework

  

## Introduction

Crypto primitives give us the opportunity to fundamentally redesign organizational and financial models in ways that are better for individuals, communities and society. This opportunity to reimagine organizations brings with it complexity, as structures and practices that were once fixed become flexible and adaptable. As a result, we need to lean on primitives, and patterns for combining these primitives, that we can use to reliably produce organizational structures with the features we want.

At SuperBenefit we have developed the DAO primitives framework to provide a set of primitives and patterns with which these new organizational structures can be composed.

We have identified and experimented with using the DAO primitives framework to produce governance systems based on 3 interlocking governance structures: Community Governance, Operational Governance and Multi-Stakeholder Governance.

Guides to setting up these 3 interlocking governance structures can can be found here:
- [Implementation-guide-operational-governance](implementation-guide-operational-governance.md)
- [Implementation-guide-multi-stakeholder-governance](implementation-guide-multi-stakeholder-governance.md)  (this guide)
- [Implementation-guide-community-governance](implementation-guide-community-governance.md) 

There are many different ways to think about how to implement effective multi-stakeholder governance. This approach is built around experiments that SuperBenefit has done in creating multi-stakeholder partnerships between web3 and non-web3 organizations to experiment on new governance structures and approaches. 

This governance model creates a way for stakeholders to come together to support and fund a project while maintaining a clear separation between high-level governance and operational execution. This separation allows stakeholders to guide purpose and goals without micromanaging, preserving autonomy for those doing the work.

This implementation guide provides a comprehensive framework for designing, implementing, and evolving multi-stakeholder governance structures using the DAO primitives approach. By breaking down governance into fundamental building blocks (primitives), organizations can create customized, effective structures that align with their unique needs and values.

## Context & Orientation

### Problem Space This Governance Structure Addresses
Traditional funding relationships create problematic power dynamics where funders (often inadvertently) exert excessive control over operational decisions while lacking the contextual understanding needed to make strategic decisions, resulting in misalignment, inefficiency, and limited innovation. These dynamics include:

- **Power Imbalances**: Traditional funding models often give disproportionate control to capital providers, limiting operational autonomy
- **Accountability Mismatches**: Operational teams often feel accountable to satisfying the needs of the funders and not the needs of the project or it's constituents 
- **Decision Bottlenecks**: Momentum can be squandered when operational teams need to wait for funder stakeholders to weigh-in on decisions 
- **Context Gaps**: Those making decisions may lack critical context from the ground level leading to poor strategy decisions
- **Capture Risk**: Single stakeholder groups can dominate decision-making the the detriment of the project
- **Risk Mismatches**: Funders often perceive risk of bad publicity outweighing risk of low innovation and low success
- **Adaptability Constraints**: Rigid governance structures often fail to evolve with changing conditions

This multi-stakeholder governance model addresses this by creating a clear separation between stakeholder stewardship of purpose and resources and the operational autonomy of execution teams. This enables more balanced power relationships where each group contributes their unique value without undermining the other's effectiveness.

### Key Opportunities

Effective multi-stakeholder governance enables:
- **Balanced Power**: Neither capital providers nor operational teams have undue control
- **Collective Intelligence**: Decision-making leverages context from all network levels
- **Operational Autonomy**: Execution teams maintain freedom to adapt and innovate, driving motivation and engagement. 
- **Resource Alignment**: Funding and efforts align with a collectively defined purpose and set of goals
- **Organizational Evolution**: The governance model can evolve and change over time as the project the environment changes

### Purpose of This Guide
This guide will help you:
1. Understand the partnership model of multi-stakeholder governance
2. Design a governance structure using the DAO primitives framework
3. Implement appropriate governance processes and mechanisms
4. Establish paths for evolution and adaptation

### Intended Audience and Prerequisites
This guide is designed for:
- **Funders and Investors**: Seeking to support projects with more collaborative governance
- **DAOs and Web3 Projects**: Looking to implement more balanced stakeholder relationships
- **Traditional Organizations**: Exploring transition to more decentralized decision-making
- **Governance Designers**: Building systems for complex multi-stakeholder ecosystems

Prerequisites for effective use include:
- Familiarity with basic web3 concepts and terminology
- Understanding of organizational governance fundamentals
- Commitment to experimenting with new power dynamics
- Willingness to evolve governance based on feedback

### Key Terminology and Concepts
To effectively work with this guide, it's important to understand these key terms:

- **Stakeholder Group (SHG)**: A collective of individuals or organizations with financial or strategic interest in the project who provide high-level stewardship
- **Purpose**: The shared high-level intention that guides the partnership's activities and decision-making
- **Top Level Cell (TLC)**: The highest operational coordination point that interacts with the Stakeholder Group
- **Cell**: An autonomous team (fewer than 10 people) who collectively define and execute their work
- **Operational Autonomy**: The principle that execution teams have freedom to determine how they achieve objectives
- **Optimistic Governance**: A mechanism where proposals automatically pass unless explicitly rejected
- **Cell State**: A formal declaration of a Cell's purpose, strategy, agreements, and other properties
- **Exit Rights**: The ability for stakeholders to withdraw uncommitted resources if they choose to leave
- **Contribution**: Resources (financial, labor, social capital, etc.) provided to the common pool
- **Proposals**: Formal recommendations for action or resource allocation requiring approval


### Fundamental Principles Informing This Approach
The following principles guide effective multi-stakeholder governance design:
1. **Purpose Alignment**: Stakeholders unite around shared purpose rather than controlling operations
2. **Separation of Powers**: Clear distinction between stewardship (Stakeholder Group) and execution (Operational Structure)
3. **Subsidiarity**: Decisions should be made at the lowest appropriate level with required context
4. **Progressive Decentralization**: Governance evolves toward greater distribution of power over time
5. **Autonomous Coordination**: Small teams self-organize while maintaining network relationships
6. **Checks and Balances**: Preventing any single group from capturing excessive control
7. **Transparency**: Making processes, decisions, and resources visible to all participants
8. **Exit Rights**: Ensuring stakeholders can withdraw support if values or direction misalign



## The DAO Primitives Framework for Multi-Stakeholder Governance

### DAO Primitives Overview

  
The DAO primitives framework provides fundamental building blocks for creating effective decentralized organizations. You can use it to compose different organizational primitives together to create the decentralized organizational structure you want. 

The framework defines 4 organizational primitive structures:
1. **DAOs** - the larger constituency scale community container that the operational governance operates inside
2. **[[notes/dao-primitives/framework/group-primitives/cells|cells]]** - the basic operational unit in a DAO - a small autonomous team
3. **Roles** - which contain and manage specific responsibilities and sets of permissions
4. **Tasks** - which are defined pieces of work/deliverable that individuals or teams can commit to delivering

The framework considers three dimensions:
- **Phase** - each DAO, Cell, Role or Task can move through a group phase lifecycle
- **Scale** - different organizational levels from collaboration to coordination to constituency to network
- **State** - an articulation of the core relevant information about each primitive that allows it to be addressable across the network

The goal of the DAO primitives framework is to allow us to compose governance systems that can produce purpose aligned networks of small autonomous teams that have powerful organizational dynamics making these networks effective in solving important problems.

To do this we compose together organizational infrastructures (social and technical) with the goal of producing positive organizational dynamics that will in turn produce powerful system properties (outlined above). These are the powerful forces that will allow us to solve complex problems and build a more resilient world.

### Multi-Stakeholder Governance Overview: Three-Layer Structure

Using the DAO primitives framework to create a purpose aligned network of small autonomous teams, there tend to be three layers of governance structure. 
1. **Community Governance**: constituency scale governance that guides and protects the network
2. **Operational Governance**: coordination and collaboration scale governance that effectively executes on the purpose and goals of the community governance
3. **Multi-Stakeholder Governance**: the mechanism by which the network can connect to and partner with other organizations and networks (network scale)

The multi-stakeholder governance model effectively creates a small version (a fractal) of a DAO within another DAO network. I has the same properties as a larger DAO and attempts to provide the same powerful organizational dynamics, but allows for smaller projects and partnerships to be easily spun up in flexible ways. Creating connections between partners and allowing traditional organizations to gain the benefits of operating in a decentralized web3 enabled context. 

The partnership governance model consists of three interconnected layers:
1. **Stakeholder Governance**: The high-level stakeholder group (SHG) that (like community governance for a DAO) defines purpose of the partnership, provides resources and backstops the operational governance in case it becomes dysfunctional or captured 
2. **Operational Governance**: The Top Level Cell (TLC) that interfaces with the stakeholder group and creates and coordinates the Cells, partners and contributors that make up the operational structure.  
3. **Cell-Level Governance**: Individual autonomous small teams working on specific roles and tasks outlined by the TLC or other Cells in the operational structure


This three-layer approach creates clear boundaries between different governance functions while maintaining connections between them through well-defined interfaces.

  

## Designing Your Governance Structure

### 1. Define Purpose and High-Level Goals
Begin by articulating why your stakeholders are coming together and what they aim to achieve collectively.

#### Activity: Purpose Statement Development
Gather key stakeholders and address these questions:
1. What shared intention brings this group of stakeholders together?
2. What impact do we collectively wish to create in the world?
3. What high-level values should guide our collaborative work?
4. What would success look like for our stakeholder partnership?
Document this in a clear purpose statement that will guide all governance decisions.

**Example:** *"Our stakeholder group exists to steward resources and maintain purpose alignment for advancing regenerative finance solutions, while enabling operational autonomy for execution teams."*


#### Activity High-Level Goals Development
Based on your purpose statement, define 3-5 high-level goals for your governance structure. These goals should be specific enough to guide design choices while remaining broad enough to accommodate various implementation approaches.

**Example goals might include:**
- Create balanced power relationships between capital providers and operational teams
- Ensure decisions are made at appropriate levels with necessary context
- Build transparent processes for resource allocation and accountability
- Establish clear boundaries between stakeholder oversight and operational autonomy
- Enable evolution toward broader community ownership over time

  

#### Impact Model
You may want to or have already created an impact model (or theory of change) to describe how you want your network to have positive impact on the world. It is not necessary to do this right away, as in the early phases (conversation and formation phases) of developing your governance structure these details may still be emerging. But it is recommended to have a clearly articulated impact model as you move into coordination and organization phases. This will ensure that you have a solid coherent and testable foundation to connect your network's purpose to actual measurable change in the world.

### 2. Define Requirements
With your purpose and goals established, the next step is defining specific requirements your governance structure must fulfill.

#### Activity: Requirements Mapping
Based on the purpose and high-level goals for the multi-stakeholder governance, map the requirement of the system:

1. **Decision Scope**: What types of decisions will be made at which level of governance and with what consultation?
- Purpose definition and evolution
- Resource allocation
- Changes to fundamental agreements
- Conflict resolution 

1. **Stakeholder Inclusion**: Who needs representation in the stakeholder group?
- Financial contributors
- Strategic partners
- Domain experts
- Community representatives

1. **Time Horizons**: What timeframes must governance address and at which levels of governance?
- Long-term purpose stewardship (years)
- Medium-term strategic cycles (quarters)
- Short-term operational decisions (weeks/months)

1. **Resource Considerations**: What resources will governance manage and at which levels of governance?
- Financial treasury
- Reputation and social capital
- Network relationships
- Intellectual property
- Technical infrastructure

5. **Technical Constraints**: What technical factors shape implementation options?
- Web3 literacy of participants
- On-chain vs. off-chain governance components
- Integration requirements with existing systems
- Security and access control needs

Document these requirements in a structured format that can be referenced throughout the design process.

### Define Governance Boundaries
Clearly delineate which decisions belong to each governance layer:
*(Note - these are guidelines only you may want to formulate this differently)*

**Stakeholder Group Responsibilities:**
- Purpose definition and evolution
- High-level resource allocation approval
- Optimistic review of operational proposals
- Fundamental agreement changes

**Top Level Cell Responsibilities:**
- Strategy development
- Operational structure design
- Resource allocation within approved budgets
- Prioritization and coordination

**Cell-Level Responsibilities:**
- Task execution approaches
- Internal Cell organization
- Local resource utilization
- Contribution tracking and recognition

  

### 3. Design Core Structures 

#### Stakeholder Group Formation
1. Define membership criteria (contribution thresholds, expertise requirements)
2. Establish decision-making process (consent, voting, etc.)
3. Create roles (facilitator, liaison to TLC, etc.)
4. Document meeting cadence and communication channels
5. Define funding agreements - who will contribute funding and what rights will they have?

#### Top Level Cell Structure
1. Define core team composition based on needed expertise and interest
2. Create treasury management and resource allocation processes
3. Create communication protocols with SHG and other cells
4. Document strategic planning and review cycles
5. Document core information in a [Cell state](cell-state.md)

#### Stakeholder Group and TLC Coordination
1. Set up [[optimistic-governance]] agreements and processes 
	- Create standardized proposal template
	- Set review period, feedback process, quorum etc
	- Define valid rejection criteria
	- Establish escalation path for disputed proposals
2. Set up agreements and processes for treasury management and token transfers

#### Cell Network Design
1. Define cell formation process
2. Establish cell coordination mechanisms
3. Create resource request protocols
4. Set up shared tools
	- Inter-cell communication channels
	- Document repositories
	- Treasury management tools


#### Activity: Governance Structure Documentation
Take the above design and create a comprehensive document outlining your governance structure, including:
1. **Core Components**: The specific patterns and primitives that will form your governance system and how they fit together
2. **Decision Processes**: How different types of decisions will flow through governance
3. **Roles and Responsibilities**: Key functions within the governance system
4. **Resource Allocation**: How governance will manage organizational resources
5. **Boundaries and Constraints**: Limits on governance authority
6. **Evolution Mechanisms**: How governance can be updated over time

This document will serve as the blueprint for your implementation phase.

## Implementation Steps

Implementation should follow a phased approach that allows for learning and adaptation.

#### Phase 1: Conversation
- Early informal conversation between core stakeholder participants 
- Align on purpose and values
- Define overview of governance structure
- Document preliminary agreements
- Establish communication channels

#### Phase 2: Formation 
- Formalize Stakeholder Group
	- Define purpose and high-level goals
	- Create initial proposal process
	- Establish Top Level Cell - core agreements between SHG and TLC
	- Set up SHG treasury management and processes

#### Phase 3: Organization
- Formalize Top Level Cell
	- TLC develops strategy
	- Implements operational structure - creates first operational Cells in the network
	- Establishes treasury management and resource allocation processes
	- Formalize documentation and processes in Cell state
	- Establish communication channels and other coordination tooling

#### Phase 4: Coordination
- SHG and TLC ongoing cadence of meetings for updates and collaboration
- TLC expands the operational structure as needed
- Ongoing budget proposals put up by TLC to SHG
- Operational network recruits contributors and partners from across wider community network
- Ongoing review and evolution of both stakeholder group and operational governance as the partnership progresses


### State Documentation
Throughout implementation, document the current state of governance to provide clarity and enable effective participation.
Guidlines on what should go into a state document can be found in the [cell state template](cell-state-template.md) and [cell state pattern](cell-state.md).
Following some simple principles in how you document the design on the multi-stakeholder governance structure will help people to engage in coherent useful ways

**Documentation Principles**
- Use clear, accessible language avoiding unnecessary jargon. If jargon is necessary make sure to link to definitions of potentially unfamiliar terms and concepts
- Make all documentation easily discoverable and searchable
- Maintain version history to track governance evolution
- Create multiple formats (text, visual, video) for different learning styles
- Establish regular review cycles to keep documentation current


### Technical Implementation
Implementing your multi-stakeholder governance will involve the selection of several different tools and platforms to make it work successfully.

If you are setting up multi-stakeholder governance inside an existing DAO or other network, there will already be established tools and practices used by the community. I this case it would likely make sense to utilize these. 

#### Technical Considerations
1. **[[on-chain-vs.-off-chain-governance]]**
- Determine which governance elements require blockchain properties and which can be better done off-chain 
- Consider speed and costs involved in using on-chain tools
- Ensure technical accessibility for all participants
- Scale considerations - smaller scales can leverage relationship based trust more effectively than larger scales

2. **Tool Selection**
	Here are some potential tool options for different core governance functions
	a. **Knowledge repository**
	 - Where information about the operational network can be articulated and shared
	 - Examples: Charmverse, Notion, Google Docs
	
	b. **Cell state repository**
	 - A mechanism for containing and updating Cell state
	 - Ideally editor controlled and version controlled but accessible to the network
	 - Examples: Shared information platforms like Gitbook, Charmverse, Notion
	
	c.  **Proposal creation and voting tools**
	 - Examples: Charmverse, Snapshot
	
	d.  **Token based authority and access tools**
	 - To manage access to communication channels, documents, voting rights
	 - Example: Hats protocol
	
	e.  **Communication platforms**
	 - Communication will happen at different scales
	 - Choose one platform or a combination of several different platforms
	 - Example: Discord is useful because it can be set up to cover all three scales with granular access control
	
	f.  **Treasury management**
	- The operational network will need to secure and manage resource flows
	- Example: Safe - multisig wallet infrastructure
	- Governance platforms (Snapshot, Tally, Commonwealth, etc.)
	- Communication tools (Discord, Discourse, Telegram, etc.)
	- Documentation systems (Charmverse, Notion, GitHub, etc.)
	- Voting mechanisms (token-based, quadratic, reputation-based, etc.)  

3. **Implementation Approach**
- Start with minimum viable governance tools as required by the phase of development
- Create clear user guides, videos and other resources to support accessibility for all community members
- Establish support/help systems for technical assistance


## Launch & Evolution

Use the group phase framework to implement your governance structure in an evolutionary way, formalizing the stakeholder group, top level cell and then Cells and other primitives as they are needed, rather than forcing a completed governance design in one go.
1. Conversation Phase
2. Formation Phase
3. Organization Phase
4. Coordination Phase


#### Activity: Phased Implementation Strategy

Based on the outputs of working through the implementation steps section, create a phased implementation strategy. 

For each phase  identify clear:
- Timeframes
- Deliverables
- Review mechanisms

### Feedback Mechanisms

Define how the system will gather and respond to input. Implement ways for the network to reflect and feedback on how the governance model is working.

However the system is structured, it is important to have feedback mechanisms that can source feedback from all of the different scale that the system operates at–collaboration, coordination, constituency and network scales–and from diverse members of the community operating at its edges. 

Depending on the size of the partnership here are some potential feedback mechanisms to design in:

1. **Governance Retrospectives**
- Regular sessions reviewing governance effectiveness
- Documentation of lessons learned
- Diverse participation ensuring multiple community perspectives

1. **Participant Surveys**
- Periodic assessment of wider community members' satisfaction with governance systems
- Gaining feedback from the broader community
- Identification of friction points and barriers and tracking of sentiment trends over time
1. **Performance Metrics**
- Tracking effectiveness of governance processes through stages
- Measuring participation rates across community in proposal voting etc
- Tracking the allocation of resources throughout the network
- On-chain systems providing verifiable data on governance performance

1. **Open Feedback Channels**
- Creating accessible mechanisms for ongoing community and operational contributor input
- Clear processes for raising and addressing concerns
- Transparent tracking of feedback response so community, open processes

### Adaptation Processes
Governance must evolve to remain effective over time. A multi-stakeholder partnership may be short-lived, in which case may not need a lot of governance evolution. However, for longer partnerships, clear mechanisms for governance adaptation and evolution will be required:
1. **Regular Governance Reviews -** schedule regular governance evaluations where the performance of the governance systems and processes can be evaluated against feedback. Document results and share with the broader stakeholders and participants
2. **Amendment Processes** - create clear pathways for governance updates. Document requirements and develop proposals to implement changes to the governance system. Create the opportunities/spaces to experiment with small governance changes so that governance can be evolutionary and not volatile
3. **Crisis Response Protocol** - consider putting in place a protocol to deal with governance emergencies granting temporary governance authority in the event of a governance attack

This adaption needs to occur a all levels in the system. Evolution of the stakeholder governance and the operational governance structures as well as individual Cells evolving their governance practices.  

## Getting Help

Implementing multi-stakeholder governance is complex work. Fortunately, numerous resources and support options are available.

### Facilitation Support
**Governance Design Facilitation**:
- Having an experienced governance design facilitator can be extremely useful and save a lot of time when developing your community governance systems and structures
- SuperBenefit can connect you to a community contributor who can support your governance journey with facilitation.

### Learning Resources
There is an emerging knowledge commons designed to support and guide the creation of decentralized governance models like this
1. **Online Resources**:
- See SuperBenefit's knowledge garden for specific tools, templates, case studies, playbooks and patterns to support your community governance design (like this implementation guide)
- Other web3 communities also have valuable resources for community governance organizing:
- OpenCivics
- _Others_
2. **Peer networks** - finding other organizations who have developed their own community governance structures can offer insights and guidance. SuperBenefit's network can provide connection to many such organizations
    

### Technical Support Options
For technical implementation assistance, SuperBenefit and our partner organizations can connect you with technical support to help you implement your community governance design

###################################


## Governance Documentation Templates

  

### Governance Charter Template

  

```markdown

# [Project Name] Governance Charter

  

## Purpose

[Clear statement of shared purpose]

  

## Governance Structure

- Stakeholder Group: [Description, membership, responsibilities]

- Top Level Cell: [Description, composition, responsibilities]

- Cell Network: [Description, formation process, coordination]

  

## Decision Processes

- Stakeholder Decisions: [Process, criteria, boundaries]

- Operational Decisions: [Process, delegation, autonomy]

- Optimistic Governance: [Review period, rejection criteria]

  

## Resource Management

- Treasury: [Management, access, reporting]

- Budget Process: [Proposal, approval, allocation]

- Exit Rights: [Process, limitations, implications]

  

## Amendment Process

[How this charter can be modified]

```

  

### Proposal Template

  

```markdown

# Proposal: [Title]

  

## Summary

[Brief overview - 2-3 sentences]

  

## Background

[Context and rationale]

  

## Proposal Details

[Specific changes or actions proposed]

  

## Resource Requirements

[Funding, time, expertise needed]

  

## Implementation Plan

[Key steps, timeline, responsibilities]

  

## Success Criteria

[How outcomes will be measured]

```

  

### Cell Formation Template

  

```markdown

# Cell: [Name]

  

## Purpose

[Why this cell exists]

  

## Core Team

[Initial members and roles]

  

## Responsibilities

[Key functions and deliverables]

  

## Resources

[Budget, tools, support needed]

  

## Coordination

[How this cell connects with others]

  

## Decision-Making

[Internal governance process]

```

  

## Conclusion

  

The partnership model of multi-stakeholder governance offers a powerful framework for balancing stakeholder stewardship with operational autonomy. By implementing this model using the DAO primitives approach, you can create governance that is both robust and adaptable.

  

Remember that governance is a journey rather than a destination. Start with clear purpose alignment and basic mechanisms, then evolve your approach based on real experience and feedback. The most effective governance emerges from thoughtful design followed by continuous learning and adaptation.

  

The separation between stakeholder guidance and operational execution is central to reimagining power within your organization. When implemented effectively, this model allows each group to contribute their unique value while respecting the autonomy and context of others.%% Write the body of your note here %%

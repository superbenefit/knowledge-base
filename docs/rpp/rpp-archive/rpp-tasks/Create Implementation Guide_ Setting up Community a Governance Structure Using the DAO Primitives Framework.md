---
tags:
  - tasks
---
# 

# Implementation Guide: Setting up a Community Governance Structure: Using the DAO Primitives Framework

## Introduction

Crypto primitives make possible a fundamental shift in how communities organize, make decisions, and create impact. Unlike traditional organizations with rigid hierarchies, DAOs (and other crypto enabled organizations) can function as purpose-aligned networks operating through decentralized coordination mechanisms. Community governance—the constituency-scale layer of governance—forms the foundation that safeguards a networks purpose, steers its long-term evolution, and ensures that its community can genuinely participate in its formation and governance.

This implementation guide provides a comprehensive framework for designing, implementing, and evolving community governance structures using the DAO primitives approach. By breaking down governance into fundamental building blocks (primitives), communities can create customized, effective structures that align with their unique needs and values.

### Governance Transformation Opportunities

Effective community governance enables a network to produce the following properties:

- **Collective Intelligence**: Harnessing diverse perspectives for more robust decision-making

- **Aligned Incentives**: Ensuring stakeholder interests remain connected to network purpose

- **Adaptive Capacity**: Creating structures that evolve with changing contexts

- **Legitimate Authority**: Building governance that stakeholders view as fair and representative

- **Decentralized Power**: Distributing influence across the network rather than concentrating it

- **Purpose Safeguarding**: Protecting the network's core mission through changing conditions


### Introduction to the DAO Primitives Framework

The DAO primitives framework views governance not as a monolithic system but as a composition of fundamental building blocks (primitives) that can be combined in various ways to meet specific community needs. These primitives include:

- **Organizational Primitives**: DAOs as networks, Cells as units, Roles as functions and Tasks as actions

- **Coordination Primitives**: Protocols, Practices, Rules and Standards

- **Resource Primitives**: Assets, Information, Capabilities and Rights


By working with these primitives, communities can create governance that is modular, adaptable, and purpose-aligned, rather than importing rigid structures that may not fit their context.

### Purpose of This Implementation Guide

This guide will help you:

1. Understand the core concepts of DAO community governance

2. Define clear requirements for your governance structure

3. Select and implement appropriate governance primitives

4. Create coherent community governance processes

5. Establish mechanisms for evolution and adaptation

6. Connect with resources and support for ongoing development


### Relationship to Other Governance Components

Community governance exists as part of a three-layer governance model:

1. **Community Governance** (this guide): Safeguards network purpose, steers long-term evolution, includes broad stakeholder base, uses slower, more deliberative mechanisms

2. **Operational Governance**: Manages day-to-day operations, enables innovation and flexibility, coordinates between cells, develops and executes on strategy

3. **Cell-Level Governance**: Handles autonomous decision-making close to ground reality, enables rapid iteration and experimentation, facilitates direct coordination

This guide focuses specifically on community governance while acknowledging its connections to the other layers (see the accompanying implementation guides for Operational and Multi-stakeholder governance).

### Guide Navigation Instructions

This implementation guide follows a structured approach:

1. **Context & Orientation**: Understanding the problem space and establishing fundamental principles

2. **DAO Primitives Framework**: Exploring the building blocks for community governance

3. **Designing Your Governance Structure**: Step-by-step process for governance design

4. **Implementation Steps**: Practical guidance for putting your design into action

5. **Launch & Evolution**: Strategies for deployment, feedback, and adaptation

6. **Getting Help**: Resources and support options

Each section builds on the previous one, but you can also navigate directly to specific sections based on your current needs and stage of development.

## Context & Orientation

### Problem Space This Governance Structure Addresses

Community governance addresses several key challenges:

- **Coordination at Scale**: How to make collective decisions as networks grow beyond face-to-face and small group interaction scales

- **Alignment with Purpose**: Ensuring that the activities of the network remain connected to its core purpose and values

- **Community Inclusion**: Creating meaningful community participation in both governance and operational opportunities

- **Long-term Stewardship**: Balancing present needs with future sustainability and impact

- **Legitimate Authority**: Building governance systems that are fair and representative

- **Adaptability**: Creating structures that can evolve with changing conditions

- **Power Distribution**: Preventing unhealthy concentration of influence or control

Effective community governance doesn't eliminate these tensions but provides frameworks to navigate them thoughtfully.

### Key Terminology and Concepts (Link these to tag page entries)

To effectively work with this guide, it's important to understand these key terms:

- **Agents**: Individual or entity actors, autonomous decision-makers, and network participants

- **Actions**: Measurable processes, resource transformations, value creation activities

- **Agreements**: Mutual understandings, coordination frameworks, resource allocation rules

- **Autonomy**: Independent action, self-management, responsible choice

- **Decentralization**: Distributed power, collective governance, shared responsibility

- **Decisions**: Choice mechanisms, option evaluation, implementation planning

- **Delegation**: Authority transfer, responsibility allocation, power distribution

- **Purpose**: The guiding goal driving actions or decisions toward specific outcomes

- **Resources**: Assets or materials (tangible or intangible) used to achieve goals

- **Systems**: Organized sets of interconnected elements working together


### Intended Audience and Prerequisites

This guide is designed for:

- **Community Leaders**: Those responsible for establishing or evolving governance systems

- **Governance Designers**: Individuals focused on creating effective decision-making processes

- **DAO Founders**: Teams establishing new decentralized organizations

- **Governance Participants**: Community members seeking deeper understanding of governance structures

Prerequisites for effective use include:

- Basic understanding of decentralized organizations and Web3 concepts

- Clarity on community purpose and initial stakeholder composition

- Commitment to participatory design and implementation processes

- Willingness to evolve governance based on feedback and changing needs


### Fundamental Principles Informing This Approach

The following principles guide effective community governance design:

1. **Permissionless Access**: Governance should enable work without requiring permission. It should attract contributions to initiatives, facilitate activities that emerge from the network, and provide access to resources based on collective/network intelligence.

2. **Start Simple and Evolve**: Build from working components, maintain coherence while scaling, and enable organic growth. Build a simple system that works and grow it into a complex system that works. 

3. **Decentralization:** Harness the potential of decentralized networks to produce transformational dynamics like collective intelligence, resilience and system level impact.

4. **Multi-stakeholder Involvement**: Ensure broad participation rights, balanced representation, aligned incentives, and shared value creation.

5. **Living Systems Properties**: Design for constant renewal, adaptive capacity, and regenerative patterns.

6. **Purpose Alignment**: All governance mechanisms should demonstrably connect to and advance the network's core purpose.

7. **Appropriate Centralization**: Some functions may require more centralization than others; the goal is not maximum decentralization but appropriate distribution of power.

8. **Transparency by Default**: Information should be accessible unless there's a specific reason for privacy.


## DAO Primitives Framework

### Overview of the DAO Primitives Framework

The DAO primitives framework provides foundational elements for creating governance structures. Rather than adopting entire governance models as monolithic units, this approach allows communities to assemble custom governance from proven building blocks.

#### Foundation Elements 

1. **Organizational Primitives**

  - **DAOs as networks**: Purpose-aligned coordination systems rather than traditional organizations

  - **Cells as units**: Small, autonomous teams (not directly applicable to community governance)

  - **Roles as functions**: Specific responsibilities within the governance system

  - **Tasks as actions**: Discrete activities that advance governance objective

1. **Coordination Primitive**

  - **Agreements**: Mutual understandings that define expectations and boundaries

  - **Protocols**: Standardized processes for recurring activities

  - **Rules**: Explicit guidelines that constrain or enable specific behaviors

  - **Standards**: Shared references that enable consistent evaluation

1. **Resource Primitives** 

  - **Assets**: Financial and material resources governed by the community

  - **Information**: Knowledge, data, and insights supporting decision-making

  - **Capabilities**: Skills, tools, and methods available to the network

  - **Rights**: Recognized claims or entitlements within the governance system

#### Implementation Framework

1. **Scale Considerations**

  - **Constituency (community)**: The focus of this guide, involving broad stakeholder governance

  - **Network (ecosystem)**: Connections to broader systems and contexts

1. **Phase Understanding**

  - **Conversation**: Initial exploration and ideation

  - **Formation**: Establishing initial structures and processes

  - **Coordination**: Creating alignment across diverse stakeholders

  - **Organization**: Formalizing and systematizing governance

1. **State Management**

  - **Properties**: Characteristics that define the current governance state

  - **Transitions**: Processes for moving between governance states

  - **Relationships**: Connections between governance components

  - **Evolution**: Pathways for governance adaptation over time

By working with these primitives, communities can create governance structures that are modular, adaptable, and purpose-aligned.

## Designing Your Governance Structure

### 1. Define Purpose and High-Level Goals

Start by clearly articulating the fundamental purpose your governance structure will serve. This foundational step ensures all subsequent design choices remain aligned with your community's core mission.

#### Activity: Purpose Statement Development

Gather key stakeholders and address these questions:

1. What is the essential purpose of our community/network?

2. What values must our governance uphold?

3. What long-term outcomes should our governance safeguard?

4. What specific governance functions are most critical for our context?

Document the results in a concise purpose statement that can guide governance design decisions.

#### Example Purpose Statement

_"Our community governance exists to steward the development of open-source tools for climate resilience by ensuring decision-making remains transparent, inclusive of diverse stakeholders, aligned with ecological values, and effective at allocating resources toward highest-impact initiatives."_

#### High-Level Goals

Based on your purpose statement, define 3-5 high-level goals for your governance structure. These goals should be specific enough to guide design choices while remaining broad enough to accommodate various implementation approaches.

Example goals might include:

- Ensure diverse stakeholder representation in major decisions

- Create transparent processes for resource allocation

- Protect against mission drift or capture

- Enable effective coordination across distributed teams

- Build legitimacy through procedural fairness

#### Impact Model

You may want to or have already created an impact model (or theory of change) to describe the way you want your network to have positive impact on the world. It is not necessary to do this right away, as in the early phases (conversation and formation phases) of developing a community governance structure these details may still be emerging. But it is recommended to have a clearly articulated impact model as you move into coordination and and organization phases. This will ensure that you have a solid coherent and testable foundation to connect your network's purpose to actual measurable change in the world. 

 

### 2. Define Requirements

With your purpose and goals established, the next step is defining specific requirements your governance structure must fulfill.

#### Activity: Requirements Mapping

For each high-level goal, identify concrete requirements across these dimensions:

1. **Decision Scope** - What types of decisions need community governance?

  - Strategic direction

  - Resource allocation

  - Policy creation

  - Conflict resolution

  - Membership/participation rules

1. **Community Inclusions:** Who needs representation in governance?

  - Contributors

  - Users/beneficiaries

  - Funders/supporters

  - Adjacent communities

  - Future generations (representatives)

1. **Time Horizons**: What timeframes must governance address?

  - Immediate operational decisions

  - Medium-term strategic choices

  - Long-term stewardship decisions

1. **Resource Considerations**: What resources will governance manage?

  - Financial assets

  - Digital infrastructure

  - Community attention

  - Reputation/legitimacy

  - Knowledge/information

1. **Technical Considerations:** What technical factors shape the implementation options?

  - On-chain vs. off-chain processes

  - Available tooling

  - Technical capabilities of participants

  - Integration requirements

Document these requirements in a structured format that can be referenced throughout the design process.

### 3. Design Your Governance Model

With clear purpose, goals, and requirements established, you can now design your community governance structure using appropriate primitives.

#### Activity: Governance Pattern Selection

Review these common community governance patterns and select those that best match your requirements:

> Note - revise this list based on what rather is including in the broader community governance pattern. Consider including patterns like the bio regional patter etc 

1. **Token-Based Governance**

  - **Description**: Voting power distributed according to token holdings

  - **Best For**: Communities with clear tokenomic models, financial resource allocation

  - **Key Primitives**: Governance tokens, voting mechanisms, proposal systems

  - **Considerations**: Can create plutocratic outcomes if not balanced with other mechanisms

1. **Reputation-Based Governance**

  - **Description**: Influence earned through contributions and trust

  - **Best For**: Communities emphasizing merit and sustained participation

  - **Key Primitives**: Attestations, contribution tracking, reputation algorithms

  - **Considerations**: Requires mechanisms to prevent unfair accumulation or stagnation

1. **Delegated Governance**

  - **Description**: Representatives selected to make decisions on behalf of constituencies

  - **Best For**: Large communities with diverse stakeholder groups

  - **Key Primitives**: Delegation mechanisms, representative selection, accountability systems

  - **Considerations**: Needs safeguards against delegate capture or misalignment

1. **Council Governance**

  - **Description**: Selected group with defined responsibilities and constraints

  - **Best For**: Communities needing specialized expertise or rapid decision-making

  - **Key Primitives**: Selection mechanisms, term limits, transparency requirements

  - **Considerations**: Must balance efficiency with broader community input

1. **Sortition-Based Governance**

  - **Description**: Random selection of participants for decision-making roles

  - **Best For**: Ensuring diverse representation and preventing capture

  - **Key Primitives**: Random selection mechanisms, term rotations, deliberation processes

  - **Considerations**: Requires educational onboarding for selected participants

1. **Consent-Based Governance**

  - **Description**: Decisions proceed unless significant objections exist

  - **Best For**: Communities prioritizing autonomy and rapid iteration

  - **Key Primitives**: Objection processes, proposal formats, impact assessment

  - **Considerations**: Works best with clear boundary conditions and shared understanding

1. **Quadratic Governance**

  - **Description**: Influence scales with square root of resource contribution

  - **Best For**: Balancing individual influence with collective preference

  - **Key Primitives**: Quadratic voting, funding mechanisms, identity verification

  - **Considerations**: Requires sybil resistance and clear participation guidelines

Most effective governance systems combine elements from multiple patterns, creating hybrid approaches tailored to specific community needs.

#### Activity: Governance Structure Documentation

Create a comprehensive document outlining your governance structure, including:

1. **Selected Patterns**: Which governance patterns you've chosen to incorporate


1. _You can select defined patterns from the SuperBenefit Knowledge Garden here_


1. **Core Components**: The specific primitives that will form your governance system

2. **Decision Processes**: How different types of decisions will flow through governance

3. **Roles and Responsibilities**: Key functions within the governance system

4. **Resource Allocation**: How governance will manage community resources

5. **Boundaries and Constraints**: Limits on governance authority

6. **Evolution Mechanisms**: How governance can be updated over time

This document will serve as the blueprint for your implementation phase.

## Implementation Steps

Moving from design to implementation requires careful planning and execution. The following steps will guide you through the process of bringing your governance structure to life.

### Build Out Governance Structure Using the DAO Primitives Framework

#### Activity: Implementation Planning

Create a detailed implementation plan that addresses:

1. **Timeline**: Realistic schedule for implementing governance components

2. **Dependencies**: Which elements must be in place before others can function

3. **Resources Needed**: Tools, funding, expertise required for implementation

4. **Responsible Parties**: Who will lead each aspect of implementation

5. **Success Criteria**: How you'll know each component is functioning effectively
   

#### Implementation Sequence Recommendation

1. Implement initial decision-making processes - you will use this to make ongoing implementation decisions

2. Set up core coordination primitives (basic agreements and protocols)

3. Establish foundational roles and responsibilities

4. Create resource allocation and treasury mechanisms 

5. Add specialized governance components

6. Put feedback and governance evolution process in place


### Group Phase Implementation

Every governance implementation moves through distinct phases. Understanding these helps communities navigate the implementation journey more effectively.

#### Conversation Phase

During this initial phase, focus on:

- Creating shared understanding of governance purpose and design

- Building alignment around key values and principles

- Establishing communication channels for ongoing dialogue

- Documenting emerging norms and expectations

- Testing concepts through lightweight experiments

**Key Activities:**

1. Host governance design workshops with community members

2. Create accessible documentation explaining governance concepts

3. Establish feedback channels for ongoing input

4. Map existing informal governance processes


#### Formation Phase

As implementation progresses, the formation phase includes:

- Formalizing core agreements, communication and meeting protocols

- Establishing initial roles and responsibilities

- Creating basic decision-making processes

- Implementing minimal viable governance structures

- Building governance documentation

**Key Activities:**

1. Draft formal governance charter or constitution

2. Establish critical roles and select/elect initial occupants

3. Create proposal process with templates and guidelines

4. Implement basic voting or consent mechanisms

5. Develop onboarding materials for governance participants

#### Organization Phase

In the final implementation phase, establish:

- Formalized systems for all governance functions

- 

- Complete documentation and training resources

- Integration with technical systems and tools

- Implement token systems to manage contributors, community voting etc

- Formalize resource allocation mechanisms

- Implementing accountability systems

- Developing policies e.g codes of conduct, conflict resolution processes etc

**Key Activities:**

1. Finalize governance documentation

2. Implement technical tools and modules for governance processes

3. Establish regular governance review and improvement cycles

4. Create specialized governance working groups as needed

#### Coordination Phase

In this fomal phase, focus on:

- Ongoing community engagement/participation in governance

- Ongoing upkeep of documentation and systems 

- Ongoing management of governance roles and authorities

- Continued processes for governance feedback and evolution

**Key Activities:**

1. Implement teams, squads, Cells and roles etc to manage ongoing community governance functions

2. Implement reporting mechanisms for transparency

3. Develop metrics for governance effectiveness

4. Create feedback loops between governance layers

#### 

### Group State Documentation

Throughout implementation, document the current state of governance to provide clarity and enable effective participation.

#### Documentation Components

1. **Governance Charter**: Foundational document outlining purpose, principles, and structure

2. **Decision Registry**: Record of significant decisions and their rationale

3. **Role Descriptions**: Clear documentation of governance roles and responsibilities

4. **Process Maps**: Visual representations of key governance processes

5. **Policies**: Explicit guidelines governing community behavior

6. **Resource Allocation Records**: Transparent tracking of resource decisions

7. **Participation Guidelines**: Clear information on how to engage with governance


#### Documentation Principles

- Use clear, accessible language avoiding unnecessary jargon

- Make all documentation easily discoverable and searchable

- Maintain version history to track governance evolution

- Create multiple formats (text, visual, video) for different learning styles

- Establish regular review cycles to keep documentation current


### Creating Structures

Implementing governance requires creating specific structures that enable coordination and decision-making.

#### Core Governance Structures

1. **Proposal Systems** 

  - Standardized formats for different proposal types

  - Clear submission and evaluation processes

  - Defined thresholds for approval

  - Transparent tracking from submission to implementation

1. **Decision-Making Bodies**

  - Clearly defined membership and selection processes

  - Explicit scope of authority

  - Documented decision protocols

  - Transparency and accountability mechanisms

1. **Working Groups**

  - Focused teams addressing specific governance areas

  - Clear charters defining purpose and scope

  - Documented coordination with broader governance

  - Appropriate autonomy balanced with accountability

  - DAO primitives framework uses Cells as a working group primitive

1. **Advisory Councils**

  - Subject matter experts providing input to governance

  - Clear relationship to decision-making processes

  - Diverse composition ensuring multiple perspectives

  - Transparent selection and term processes

1. **Community Forums**

  - Accessible spaces for broad community input

  - Structured processes for gathering feedback

  - Clear connections to formal decision-making

  - Facilitation ensuring productive engagement

### Technical Implementation

Depending on your community's technical context, governance implementation may involve various tools and platforms.

#### Technical Considerations

1. **On-Chain vs. Off-Chain Governance**

  - Consider the larger design of your governance

  - Determine which governance elements require blockchain properties and which can be better done off-chain

  - Consider speed and costs involved in using on-chain tools

  - Ensure technical accessibility for all stakeholder groups

1. **Tool Selection**

  - Governance platforms (Snapshot, Tally, Commonwealth, etc.)

  - Communication tools (Discord, Discourse, Telegram, etc.)

  - Documentation systems (Charmverse, Notion, GitHub, etc.)

  - Voting mechanisms (token-based, quadratic, reputation-based, etc.)

1. **Implementation Approach**

  - Start with minimum viable governance tools as required by the phase of development

  - Create clear user guides, videos and other resources to support accessibility for all community members

  - Establish support/help systems for technical assistance

## Launch & Evolution

Launching your governance structure is just the beginning. Effective governance requires ongoing attention to feedback, adaptation, and evolution.

### Phased Implementation Strategy

Rather than launching all governance components simultaneously, consider a phased approach:

1. Conversation Phase

2. Formation Phase

3. Organisation Phase

4. Coordination Phase

For each phase, establish clear:

- Timeframes

- Deliverables

- Review mechanisms

### Feedback Mechanisms

Continuous improvement requires robust feedback systems:

1. **Governance Retrospectives**

  - Regular sessions reviewing governance effectiveness

  - Documentation of lessons learned

  - Diverse participation ensuring multiple community perspectives

1. **Participant Surveys**

  - Periodic assessment of community members' satisfaction with governance systems

  - Gaining feedback from the broader community 

  - Identification of friction points and barriers and tracking of sentiment trends over time

1. **Performance Metrics**

  - Tracking effectiveness of governance processes through stages

  - Measuring participation rates across community in proposal voting etc

  - Tracking the allocation of resources throughout the network

  - On-chain systems providing verifiable data on governance performance 

1. **Open Feedback Channels**

  - Creating accessible mechanisms for ongoing community input

  - Clear processes for raising and addressing concerns

  - Transparent tracking of feedback response so community, open processes


### Adaptation Processes

Governance must evolve to remain effective. Establish clear mechanisms for adaptation:

1. **Regular Governance Reviews -** schedule regular governance evaluations where the performance of the governance systems and processes can be evaluated against feedback. Document results and share with the broader community

2. **Amendment Processes** - create clear pathways for governance updates. Document requirements and develop proposals to implement changes to the governance system. Create the opportunities/spaces to experiment with small governance changes so that governance can be evolutionary and not volatile 

3. **Crisis Response Protocol** - consider putting in place a protocol to deal with governance emergencies granting temporary governance authority in the event of a governance attack

## Getting Help

Implementing community governance is complex work. Fortunately, numerous resources and support options are available.

### Facilitation Support

**Governance Design Facilitation**:

- Having an experienced governance design facilitator can be extremely useful and save a lot of time when developing your community governance systems and structures

- SuperBenefit can connect you to a community contributor who can support your governance journey with facilitation. 

### Learning Resources

There is an emerging knowledge commons designed to support and guide the creation of community governance models

1. **Online Resources**:

  - See SuperBenefit's knowledge garden for specific tools, templates, case studies, playbooks and patterns to support your community governance design (like this implementation guide)

  - Other web3 communities also have valuable resources for community governance organizing:

    - OpenCivics 

    - _Others_

1. **Peer networks** - finding other organizations who have developed their own community governance structures can offer insights and guidance. SuperBenefit's network can provide connection to many such organizations 

### Technical Support Options

For technical implementation assistance:

SuperBenefit and our partner organizations can connect you with technical support to help you implement your community governance design

### 

## Conclusion

Effective community governance is not a destination but a journey of continuous evolution and improvement. By thoughtfully applying the DAO primitives framework, communities can compose governance structures that are both robust and adaptable, capable of safeguarding purpose while enabling dynamic response to changing conditions.

The key to successful web3 community governance design is first working to understand deeply the community's purpose and translating this into a governance design that can unleash the creative potential of the community to achieve this purpose. 

The patterns and primitives outlined in the DAO primitives provide a framework for composing together structures that can reliably deliver on these governance designs, creating new and better organizations that can address the complex problems that the world faces. 

May your governance implementation create the conditions for your community to thrive, adapt, and fulfill its purpose in the world.

---

## 
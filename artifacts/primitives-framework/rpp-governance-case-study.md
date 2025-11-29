---
title: Reimagining Power Project Governance Design
description: A case study examining how the DAO Primitives framework was applied to create an effective multi-stakeholder governance model for the Reimagining Power Project.
author:
  - yeoro.eth
tags:
  - governance
  - case-study
  - dao-primitives
  - multi-stakeholder
publish: true
type: study
---


---

This case study examines how SuperBenefit designed and implemented a layered multi-stakeholder governance model for the Reimagining Power Project (RPP). The design successfully balanced stakeholder oversight with operational autonomy while enabling effective coordination across organizational boundaries, creating a structure that supported both purpose alignment and efficient execution.

---

## Background and Context

### The Reimagining Power Project

The Reimagining Power Project (RPP) was conceived as an initiative to explore how we might transform traditional power dynamics in philanthropy and social impact through decentralized technologies and governance innovations. The project aimed to create frameworks, playbooks, and practical tools that could enable more equitable distribution of decision-making power and resources in philanthropic contexts.

### Challenge

The Reimagining Power Project needed a governance structure that could accommodate diverse stakeholders while leveraging decentralized governance and operational autonomy to collaborate in the emerging socio-technical space of web3 governance. The governance design faced several interconnected challenges:

1. **Stakeholder Diversity**: The project involved organizations with different operational models, from traditional foundations to decentralized networks, each with distinct expectations about involvement and oversight.
2. **Authority Distribution**: Finding the right balance between stakeholder control and operational autonomy while maintaining clear accountability relationships.
3. **Cross-Organizational Coordination**: Enabling effective collaboration between contributors from different organizational contexts without requiring full integration into any single entity.
4. **Resource Flow Management**: Creating transparent mechanisms for funds to flow from traditional funding sources through crypto-native tools to diverse contributors.
5. **Decision-Making Efficiency**: Establishing clear protocols for different types of decisions at different scales to prevent bottlenecks while maintaining alignment.
6. **Integration with Existing Structures**: Ensuring coherence with SuperBenefit's broader governance framework while creating appropriate boundaries for the project.

### Goals

The governance design aimed to accomplish several specific objectives:

- Create appropriate levels of stakeholder involvement calibrated to their specific preferences and comfort levels
- Establish transparent, efficient decision-making processes at different organizational scales
- Enable smooth resource allocation from funders to operational teams and contributors
- Leverage existing SuperBenefit infrastructure and capabilities while creating project-specific components
- Design flexible structures that could evolve as the project matured through different phases
- Maintain consistent alignment with the project's purpose throughout all governance layers
- Create pathways for diverse participation while respecting organizational boundaries

### Setting

The RPP operated as a project within SuperBenefit DAO, with participation from multiple stakeholder organizations including:

- Equality Fund
- All in for Sport
- Institute for Community Sustainability (ICS)
- Ontario Trillium Foundation (OTF)
- Women Win

Each stakeholder brought different perspectives, resources, and expectations to the collaboration. The project utilized SuperBenefit's technical infrastructure, with ICS serving as fiscal sponsor to handle funding flows. Primary activities were coordinated virtually, leveraging both SuperBenefit's existing tools and purpose-specific mechanisms established for the project.

---

## Approach

### Multi-Stakeholder Governance with DAO Primitives

The governance design utilized SuperBenefit's [DAO Primitives framework](artifacts/primitives-framework/concepts/index.md), implementing a multi-stakeholder approach with distinct but interconnected governance layers:

1. **Community Governance** (Constituency Scale): SuperBenefit's broader community governance provided the outermost layer, offering oversight and purpose alignment while establishing boundaries for the project's autonomy.
2. **Stakeholder Group** (Coordination Scale): Representatives from each stakeholder organization formed a collaborative forum for strategic direction, resource oversight, and cross-organizational alignment.
3. **Core Team Cell** (Coordination Scale): A dedicated team with responsibility for interfacing between stakeholders and operations, making key strategic and resource allocation decisions.
4. **Operational Cells** (Collaboration Scale): Specialized teams handling specific work areas, including:
    - The OS Stewards team: not an official Cell, an operational team within the core team Cell
    - Playbooks Cell: Focused on developing playbooks and other implementation patterns and tools
    - Community Experience Cell: Working on the Gatherings programme in partnership with All in for Sport and Women Win
    - DAO Primitives Cell: Providing governance design expertise and pattern implementation
5. **Roles & Tasks**: Accountabilities with autonomy managed through well crafted [Roles](tags/roles.md) and [Tasks](tags/tasks.md).

Each layer operated with appropriate decision-making mechanisms and authority scopes, with clear interfaces between them to enable effective coordination while maintaining autonomy.

### Framework Components and Patterns Applied

1. **Core Primitives**: Building blocks for organizational design:
    - **[Cells](tags/cells.md)**: Autonomous working groups with defined purpose, practices, and progress tracking
    - **[Roles](tags/roles.md)**: Clearly defined responsibilities and permissions
    - **[Tasks](tags/tasks.md)**: Discrete units of work with clear deliverables
    - **State Documentation**: Transparent recording of agreements, decisions, and progress
2. **Patterns**: Reusable solutions for common governance challenges:
    - **Cell Working Group Pattern**: Framework for autonomous team operation
    - **[Multi-Stakeholder Governance Pattern](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)**: Balancing diverse stakeholder interests
    - **[Community Governance Pattern](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/community-governance.md)**: Constituency-scale decision processes
    - **Minimum Viable Permissionless-ness**: Allowing appropriate autonomy while maintaining coherence

### Rationale for Selection

This multi-layered approach was developed because it:

- Supported evolution and adaptation as the project matured through different phases
- Allowed for collective intelligence style decision-making from the edges of the system
- Provided appropriate layers of governance for different types of decisions required
- Created appropriate separation between strategic oversight and operational execution
- Allowed contributors from across web3 other organizations and networks to easily connect and contribute to the project
- Leveraged existing SuperBenefit patterns and infrastructure

---

## Implementation Journey

### Discovery - Conversation Phase

The implementation began with a thorough discovery process involving potential stakeholders to understand their needs, expectations, and preferred modes of engagement:

1. **Stakeholder Consultations**: A series of structured conversations with representatives from each stakeholder organization explored:
    - Goals, opportunities and specific areas of interest within the project scope
    - Desired levels of involvement in different types of decisions
    - Risk tolerance and oversight requirements
    - Resources and expertise they could contribute
2. **Role Definition**: Defining the role of a Stakeholder group member in line with above consultations
    - Governance participation activities
    - Commitments to meetings and use of communication channels
    - Access to operational comms and other project information
3. **Engagement Options**: Providing pathways for stakeholders to participate in operational work if desired, while not making this mandatory:
    - Opportunity to join the core team
    - Opportunity to join or create an operational Cell
    - Opportunity to contribute to specific project tasks

This process revealed that stakeholders were primarily interested in being informed and participating in collaborative conversations rather than exercising formal approval over operational budgets or activities.

Some stakeholders were interested in participating in specific experiments within the project. For example Equality Fund supporting and participating in their experiment into using crypto rails to distribute funding to recipient organizations.

### Core Team (TLC) - Formation Phase

Following the discovery phase, a Core Team was established as the primary operational decision-making body.

This was outlined for transparency and clarity in the Cell's cell-state. This holds the [Purpose](tags/purpose.md), [Practice](tags/practices.md) and [Progress](tags/progress.md) for the Cell (and therefore the RPP project overall):

- **Composition**: The Core Team included:
    - Representatives with strong relationships to key stakeholders
    - Members with technical expertise in Web3 and governance design
    - Project management and coordination specialists
    - Subject matter experts in philanthropy and power dynamics
- **Formal Authorities**: The Core Team was granted:
    - Resource allocation authority within the approved budget
    - Operational decision-making responsibility
    - Authority to create and task operational cells
    - Stakeholder group interface responsibility
- **Decision Protocol**: The team implemented a formal proposal mechanism documented in their cell state, which included:
    - Use of the decider protocol for core team decisions. A [consent-based](tags/consent.md) decision mechanism (no reasoned objections rather than unanimous agreement)
    - Recording of major decisions in a decision log
    - Management of project [treasury](tags/treasury.md) via a [safe multi-sig contract](tags/wallets.md)
    - Thresholds for decisions requiring stakeholder consultation
- **Operating Rhythm**: The Core Team established:
    - Weekly synchronous coordination meetings
    - Asynchronous communication via a Discord channel
    - Monthly stakeholder updates


### Operational Structure Development - Organization Phase

The operational structure was designed to leverage existing SuperBenefit operational entities as well as to create its own as needed.

1. **Top-Level-Cell**: The TLC (and later the OS Stewards specifically) acted as an operational Cell, executing towards project goals, as well as being responsible for developing strategy for the project
2. **Leveraging Existing Cells**: Engaging the Community Experience and DAO Primitives cells from SuperBenefit to carry out delivery work
3. **Creating New Cells**: Establishing additional Cells as needed. E.g the Playbooks Cell created specifically for the RPP
4. **Task and Role Creation**: Using [roles](tags/roles.md) and [tasks](tags/tasks.md) to delegate specific deliverables throughout the project's operational structure. Tasks and Roles were used as primitives to manage all project deliverables.
5. **Partnerships**: Using roles and tasks, the operational units of the project were able to engage with partner organizations as well as individual contributors to deliver project execution

The combination of using existing Cells, or creating new Cells, allowed the operational structure to be flexible to opportunities as they arose. It also provided autonomy to Cells to approach roles and tasks as they chose, while providing transparency via the tools and practices used (Cell State, [Role](tags/roles.md) and [Task](tags/tasks.md) definition, transparent decision-making etc)

A notable use of this structure was the implementation of the Playbooks Cell–a purpose-specific cell focused on developing practical implementation patterns and guides–using a Moloch contract. This was designed to facilitate:

- Contributors from other networks to participate without formal onboarding to the broader SuperBenefit DAO
- Collective decision-making over work priorities and resource allocation within the cell
- Transparent tracking of contributions and compensation
- Dynamic membership as the project's needs evolved


### Addressing Execution Challenges

As the project progressed, the Core Team identified a need to accelerate execution. In response, they created and funded the "OS Stewards" as an operational group within the Core Team specifically focused on maintaining momentum. This adaptation demonstrated the flexibility of the governance model to evolve based on emerging needs.

### Financial and Technical Infrastructure

The governance model was supported by a carefully designed financial and technical infrastructure:

1. **Fiscal Sponsorship and Treasury Management**:
    - **Institute for Community Sustainability (ICS)** served as fiscal sponsor, allowing funds to flow in as cryptocurrency
    - Funds were allocated to a [Safe multi-signature wallet](tags/wallets.md) controlled by authorized Core Team members
    - The Core Team managed resource distribution to cells based on approved work plans
    - Cells had autonomy in allocating their budgets to contributors according to cell-specific processes
2. **Technical Infrastructure**:
    - **CharmVerse**: Used for documentation, cell states, proposals, and decision records
    - **Discord**: Dedicated channels within SuperBenefit's server provided communication infrastructure
    - **Moloch Smart Contracts**: Implemented specifically for Playbooks Cell to enable decentralized governance across contributors from multiple different networks
    - **[Safe Wallet](tags/wallets.md)**: Multi-sig wallet for [treasury management](tags/treasury.md) with appropriate access controls
3. **Documentation and Transparency**:
    - Cell states documented purpose, practices, and progress for each organizational unit
    - Proposal history maintained as a transparent record of decisions
    - Regular updates shared with stakeholders through standardized formats

This infrastructure enabled the governance model to operate efficiently while maintaining appropriate transparency and accountability at all levels.

---

## Outcomes & Reflections

### Impact Assessment

The governance model successfully achieved its core objectives, demonstrating several significant strengths:

1. **Stakeholder Confidence with Operational Autonomy**:
    - Stakeholders reported satisfaction with visibility into project direction and progress
    - Operational teams maintained sufficient autonomy to execute effectively
    - Regular communication via the monthly stakeholder meetings prevented misalignment between stakeholders and operational activities
    - Stakeholder Group member in response to the question: "What was the most significant shift in how you experienced power/influence as a stakeholder compared to traditional advisory roles?": *"The ability to propose a project within the group and have full autonomy to do so, with support from other stakeholders."* 
2. **Effective Resource Management**:
    - Transparent flow of resources from core team governance to contributors
    - Decision-making at appropriate levels, e.g resourcing decisions being make close to the work being done, produced good resource allocation outcomes
3. **Cross-Organizational Collaboration**:
    - Contributors from different organizational contexts successfully worked together e.g collaboration between RPP and All in for Sport on the Gatherings Programme
    - Boundaries between organizations remained clear while enabling effective coordination and resource sharing
    - Being part of the broader SuperBenefit network allowed the project to access people and organizations across the web3 space as well as the philanthropic sector
4. **Governance Coherence**:
    - Governance authority at different levels in the project seemed to work well, although this would be tested more robustly if the project continues to scale its work and the complexity of its operational structure
    - Conflict between the operational and stakeholder sides of the project seemed minimal. This also reflects the fact that the main funder and stakeholder group member (OTF) took an interested but relatively hands-off approach to how the project was run
    - Decision rights were appropriately distributed across different scales and seem to have been reasonably easy for participants to understand
    - *"The transparency and collaborative nature of input, and how it gets used, what is moved forward etc. was really refreshing... This process felt very accessible, that you could plug in and be part of what you were interested in and where you really brought value."* (Stakeholder Group member) 
5. **Adaptability**:
    - The structure evolved effectively in response to emerging needs. E.g additional components (like OS Stewards) were integrated without disrupting the overall framework
    - The balance between stakeholder involvement and operational autonomy was recalibrated as the project progressed and new opportunities opened up. Several stakeholder group members also stepped into operational roles in the project.
    - Several stakeholders took a active roles in both the stakeholder group and in other operational parts of the project and expressed appreciation of the non-hierarachical nature of the project: "*As a stakeholder it felt like we were doing the exploration work together rather than giving individual expertise. It lead to great learnings from others.*" (Stakeholder Group member)


### Lessons Learned


While the model ultimately proved effective, several challenges emerged that provide valuable insights for future applications:

1. **Time to Stabilize**:
    - The structure took significant time to settle, with extended stakeholder conversations and slower-than-ideal execution startup
    - Initial ambiguity about roles and authorities created some confusion and inefficiency
    - The process of establishing formal agreements especially defining the Purpose of the project within the Stakeholder group, took longer than anticipated
    - *"The authentic collective decision making was at times slow moving but also ensured that how the project moved forward was led by the collective, not by an individual stakeholder. "* (Stakeholder Group member)
2. **Stakeholder Engagement Calibration**:
    - Stakeholders were less interested in formal governance than initially anticipated
    - The design initially overestimated stakeholders' desire for approval rights over operational details. Most were happy to just stay informed
    - Some stakeholders struggled to use the communication platforms and attendance at Stakeholder meetings was irregular for some of stakeholder group members
3. **Delegation Timing**:
    - The Core Team took a long time to feel comfortable with planning and execution. The initial sense-making needed to develop strategy for the project happened over an extended period of time with the core team meeting for only one hour per week.
    - As a result, the operational side of the project took several months to begin executing in earnest
    - Front-loading the sense-making aspects of setting up core team and bringing in some more prescribed facilitation support could have help this phase of the project move faster.
    - Earlier delegation of tasks to operational cells and other contributors would have sped up execution in these early phases as well
    - Time spent on governance design sometimes delayed execution of substantive work - it would have been valuable to start executing in a safe way in parallel with the emerging governance design.
4. **Facilitation Needs**:
    - More structured facilitation could have accelerated core team decision-making around initial project strategy allowing implementation to happen sooner
    - Clearer timeframes for different phases would have helped manage expectations
    - Dedicated facilitation resources for key transition points would have improved efficiency
    - More investment in facilitation and guidence will be needed to push this model out to non-web3 savvy contexts: *"I think you would need a huge mindset shift and training, as it isn't easy to facilitate these types of structures."* (Stakeholder Group member)
5. **Technical Complexity**:
    - The technical infrastructure presented learning curves for some participants especially members of the stakeholder group
    - Integration between traditional and Web3 tools created occasional friction
    - Documentation of technical processes was sometimes insufficient for non-technical participants
6. Legal/Financial Structuring:
	- A friction point for the project was the lack of a formal legal structure to wrap the project. This led to SuperBenefit having a tax liability resulting from the administration of the RPP finances  
	- There was also significant time, effort and cost involved in transferring the funding for the project from Fiat (Canadian dollars) into crypto (ETH & USDC). This seemingly quick and simple process turned out to be anything but. 


### Conclusion

The RPP governance design demonstrates the potential of applying [DAO Primitives framework](artifacts/primitives-framework/concepts/index.md) to complex multi-stakeholder initiatives. By thoughtfully balancing stakeholder oversight with operational autonomy and deliberately designing for different scales of coordination, the model enabled effective collaboration across organizational boundaries while maintaining alignment with core purpose.

There are of course improvements to make for future versions of this governance design. Many of the aspects of the project that were less than optimal reflect the fact that this project, as well as engaging in experiments, was in itself an experiment. Indeed the entire multi-stakeholder-governance model was experimental. Thus the learning outlined above will be used to inform the evolution of this model.

---

## Appendices

### Governance Structure Diagram

Here is an outline of how the governance structure of the RPP. 

![Pasted image 20250410195527](attachments/Pasted image 20250410195527.png)


### DAO Primitives Framework Elements Used

- **Scales**: Collaboration, Coordination, Constituency scales
- **Stages**: Implementation across Group Phases - Conversation, Formation, Organization, Coordination
- **Primitives**: DAOs, [Cells](tags/cells.md), [Roles](tags/roles.md), [Tasks](tags/tasks.md)
- **Patterns**: Cell Working Group, [Multi-stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md), [Community Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/community-governance.md)
- Guides: [implementation-guide-multi-stakeholder-governance](artifacts/primitives-framework/implementation/implementation-guide-multi-stakeholder-governance.md)

### Technical Components

- Charmverse for documentation and proposals
- Discord for communication
- Moloch contracts for specialized Cell governance
- Safe wallet for [treasury management](tags/treasury.md)

### Stakeholder Group Composition

- SuperBenefit
- Equality Fund
- All in for Sport
- Institute for Community Sustainability (ICS)
- Ontario Trillium Foundation (OTF)
- Women Win

---

## Related Concepts

- [Governance](tags/governance.md) - Decision-making systems studied in RPP
- [Case Studies](tags/case-studies.md) - Real-world implementation documentation
- [Reimagining Power Project](notes/rpp/index.md) - Project explored in this study
- [Power](tags/power.md) - Transformation focus of the project
- [Coordination](tags/coordination.md) - Mechanisms implemented in practice

---
title: Reimagining Power Project Governance Design
description: A case study examining how the DAO Primitives framework was applied to create an effective multi-stakeholder governance model for the Reimagining Power Project.
author: Rowan Yeoman
tags: 
- governance
- case-study
- dao-primitives
- multi-stakeholder
harvester: yeoro.eth
curator: 
publish: "false"
type: study
case: "RPP Governance"
patterns:
  - cell-working-group
  - multi-stakeholder-governance
  - community-governance
primitives:
  - cells
  - roles
  - tasks
  - agreements
  - proposals
---

This case study examines how SuperBenefit designed and implemented a layered multi-stakeholder governance model for the Reimagining Power Project (RPP) using the DAO Primitives framework. The design successfully balanced stakeholder oversight with operational autonomy while enabling effective coordination across organizational boundaries, creating a structure that supported both purpose alignment and efficient execution.

---

## Background and Context

### The Reimagining Power Project

The Reimagining Power Project (RPP) was conceived as an initiative to transform traditional power dynamics in philanthropy and social impact through decentralized technologies and governance innovations. The project aimed to create frameworks, playbooks, and practical tools that could enable more equitable distribution of decision-making power and resources in philanthropic contexts.

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

The governance design utilized SuperBenefit's DAO Primitives framework, implementing a multi-stakeholder approach with distinct but interconnected governance layers:

1. **Community Governance** (Constituency Scale): SuperBenefit's broader community governance provided the outermost layer, offering oversight and purpose alignment while establishing boundaries for the project's autonomy.
2. **Stakeholder Group** (Coordination Scale): Representatives from each stakeholder organization formed a collaborative forum for strategic direction, resource oversight, and cross-organizational alignment.
3. **Core Team Cell** (Coordination Scale): A dedicated team with responsibility for interfacing between stakeholders and operations, making key strategic and resource allocation decisions. 
4. **Operational Cells** (Collaboration Scale): Specialized teams handling specific work areas, including:
    - The OS Stewards team: not an official Cell, an operational team within the core team Cell
    - Playbooks Cell: Focused on developing playbooks and other implementation patterns and tools
    - Community Experience Cell: Working on the Gatherings programme in partnership with All in for Sport and Women Win
    - DAO Primitives Cell: Providing governance design expertise and pattern implementation
5. **Roles & Tasks**: Accountabilities with autonomy managed through well crafted [Roles](notes/dao-primitives/primitives/roles.md) and [Tasks](notes/dao-primitives/primitives/tasks.md). 

Each layer operated with appropriate decision-making mechanisms and authority scopes, with clear interfaces between them to enable effective coordination while maintaining autonomy.

### Framework Components and Patterns Applied

1. **Core Primitives**: Building blocks for organizational design:
    - **Cells**: Autonomous working groups with defined purpose, practices, and progress tracking
    - **Roles**: Clearly defined responsibilities and permissions
    - **Tasks**: Discrete units of work with clear deliverables
    - **State Documentation**: Transparent recording of agreements, decisions, and progress
2. **Patterns**: Reusable solutions for common governance challenges:
    - **Cell Working Group Pattern**: Framework for autonomous team operation
    - **Multi-Stakeholder Governance Pattern**: Balancing diverse stakeholder interests
    - **Community Governance Pattern**: Constituency-scale decision processes
    - **Minimum Viable Permissionless-ness**: Allowing appropriate autonomy while maintaining coherence

### Rationale for Selection

This multi-layered approach was developed because it:
- Supported evolution and adaptation as the project matured through different phases
- Allowed for collective intelligence style decision-making from the edges of the system
- Provided appropriate layers of governance for different types of decisions required
- Created appropriate separation between strategic oversight and operational execution
- Allowed contributors from across the web3 other organizations and networks to easily connect and contribute to the project
- Leveraged existing SuperBenefit patterns and infrastructure

---

## Implementation Journey

### Discovery - Conversation Phase

The implementation began with a thorough discovery process involving potential stakeholders to understand their needs, expectations, and preferred modes of engagement:

**Stakeholder Consultations**: A series of structured conversations with representatives from each stakeholder organization explored:

- Their organizational governance norms and comfort zones
- Desired levels of involvement in different types of decisions
- Risk tolerance and oversight requirements
- Resources and expertise they could contribute
- Specific areas of interest within the project scope
1. **Role Definition**: Defining the role of a Stakeholder group member in line with above consultations 
2. **Engagement Options**: Providing pathways for stakeholders to participate in operational work if desired, while not making this mandatory

This process revealed that stakeholders were primarily interested in being informed and participating in collaborative conversations rather than exercising formal approval over operational budgets or activities.

### Core Team (TLC) - Formation Phase

Developing the [cell-state](notes/dao-primitives/patterns/cell-state.md) for the top-level-cell. This holds the:
	1. Purpose - the overarching project purpose and details the relationship between the stakeholder group and top-level-cell
	2. Practice - operating agreements, coordination mechanisms, treasury management and decision-making processes for the Cell
	3. Progress - tracking the activities of the Cell and the project in general


Following the discovery phase, a Core Team was established to:
- Interface with the Stakeholder Group
- Hold strategic direction and operational authority
- Make key resource allocation decisions
- Coordinate across operational cells

The Core Team implemented a formal proposal mechanism (documented in their cell state) for making significant decisions, maintaining transparency with the Stakeholder Group.

### Operational Structure Development - Organization Phase

The operational structure evolved through several phases:

1. **Leveraging Existing Cells**: Engaging the Community Experience and DAO Primitives cells from SuperBenefit
2. **Creating New Cells**: Establishing the Playbooks Cell specifically for the RPP
3. **Task Distribution**: Using roles and tasks to delegate specific deliverables to cells

A notable innovation was the implementation of the Playbooks Cell using a Moloch smart contract, allowing contributors from other networks to participate without formal onboarding to the broader SuperBenefit DAO. This facilitated contribution while still providing participants with governance input over their work and compensation.

### Execution - Coordination Phase 

### Addressing Execution Challenges

As the project progressed, the Core Team identified a need to accelerate execution. In response, they created and funded the "OS Stewards" as an operational group within the Core Team specifically focused on maintaining momentum. This adaptation demonstrated the flexibility of the governance model to evolve based on emerging needs.

### Financial and Technical Infrastructure

The governance model was supported by:
- **Fiscal Sponsorship**: ICS serving as fiscal sponsor, allowing funds to flow in as cryptocurrency
- **Treasury Management**: Allocation to a Safe wallet controlled by the Core Team
- **Resource Distribution**: Funds flowing from Core Team to cells for contributor compensation
- **Technical Infrastructure**: Utilizing SuperBenefit's existing tools, with proposals and cell states on CharmVerse and communication in dedicated Discord channels

---

## Outcomes & Reflections

### Impact Assessment

The governance model successfully:
- Maintained stakeholder confidence while enabling operational autonomy
- Created clear pathways for diverse contributions
- Established transparent decision-making at multiple scales
- Facilitated resource flow from funders to contributors
- Enabled integration of the project within SuperBenefit's broader structure

The nested structure allowed authority to flow appropriately from the Stakeholder Group through the Core Team to operational cells, wrapped within SuperBenefit's community governance.

### Lessons Learned

While the model ultimately proved effective, several challenges emerged:

1. **Time to Stabilize**: The structure took significant time to settle, with extended stakeholder conversations and slower-than-ideal execution startup.
2. **Stakeholder Engagement**: Stakeholders were less interested in formal governance than anticipated, preferring information and collaboration over approval rights.
3. **Delegation Timing**: Earlier delegation of tasks would have improved efficiency in initial phases.
4. **Facilitation Needs**: More structured facilitation could have accelerated decision-making and implementation.

### Future Directions

For future applications of this model, recommendations include:
- More tightly facilitated process to establish the structure quickly
- Earlier delegation of tasks to operational cells
- Customizing stakeholder involvement based on explicit preferences rather than assumptions
- Streamlining the transition from governance design to operational execution

---

## Appendices

### Governance Structure Diagram
![](attachments/Pasted%20image%2020250410195527.png)

### DAO Primitives Framework Elements Used
- **Scales**: Collaboration, Coordination, and Constituency scales
- **Stages**: Implementation across Group Phases (Conversation, Collaboration, Commitment, Coordination)
- **Primitives**: Cells, Roles, Tasks, Agreements, Proposals
- **Patterns**: Cell Working Group, Multi-stakeholder Governance, Community Governance

### Technical Components
- CharmVerse for documentation and proposals
- Discord for communication
- Moloch contracts for specialized cell governance
- Safe wallet for treasury management

### Stakeholder Group Composition
- SuperBenefit
- Equality Fund
- All in for Sport
- Institute for Community Sustainability (ICS)
- Ontario Trillium Foundation (OTF)
- Women Win
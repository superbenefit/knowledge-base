


---
title: Coordination Phase
author: yeoro.eth
harvester: 
tags: 
		- framework
		- group-phase
aliases:
		- "#coordination"
description: "The mature stage of group development where a fully established group executes effectively on its purpose, maximizing impact through coordinated action with others in the network."
 publish: "true"
---

The Coordination Phase represents the mature [group-phase](notes/dao-primitives/framework/group-phase/group-phase.md) where groups transition from establishing their structures and processes in the [organization phase](notes/dao-primitives/framework/group-phase/organization.md) to focused execution on their purpose and goals. In this phase, a group leverages its fully implemented operational capabilities and governance systems to deliver maximum value and impact. The emphasis shifts from internal development to effective delivery, with coordination becoming a key mechanism for accessing necessary resources, capabilities, and support from the broader network or ecosystem.

The Coordination Phase is where a group, as an autonomous (or semi-autonomous) entity, both leverages and contributes to the power and collective intelligence of the decentralized network it inhabits (or in the case of a DAO, is creating).

When the Coordination phase is complete, a group may either evolve into a governance or operational structure or enter a [completion phase](notes/dao-primitives/framework/group-phase/completion.md) as its purpose is fulfilled.




## Key Characteristics

* **Purpose-Driven Execution:** The group's activities are tightly aligned with its core purpose, with clear prioritization of high-impact initiatives that advance its goals. 
* **Resource Sharing:** The group optimizes the use of its internal resources while accessing and/or contributing resources externally through network relationships. 
* **Effective Coordination:** The group builds and maintains strategic relationships with other entities, establishing partnerships that enhance its capability to deliver on its purpose and the purpose of the larger networks it inhabits. 
* **Operational Excellence:** Internal systems and processes function smoothly, allowing focus to shift from setup and maintenance to optimization and results. 
* **Evolution:** The group evolves its governance and operation structure and practices over time in response to its evolving context. 
* **Measurable Impact:** The group consistently delivers and documents concrete outcomes that advance its purpose and provide value to the broader network.


## Functional Elements

### Activities 

The activities of a Coordination phase group are outlined in their [#group state](notes/dao-primitives/framework%201/group-state.md) documentation. Broadly these include:

- **Internal Governance:** Execution of the group's ongoing governance structure and practices. Including keeping group state documentation up to date and accessible to participants in the network. 
- **Network Governance:** Participating in external decentralized governance process within coordinating networks
- **Strategic Execution:** Implementing the group's strategy through coordinated action that delivers on key objectives and milestones. 
- **Operational coordination:** Strategic planning, resource allocation, contributor and parter coordination etc. 
- **External Partnerships** Establishing and executing on partnerships with other autonomous entities in the decentralized network or other stakeholders from outside the network. 
- **Impact Measurement:** Tracking and communicating the outcomes and value created by the group's activities. 
- **Feedback Integration:** Systematically gathering and responding to feedback from users, stakeholders, and network participants. 
- **Knowledge Sharing:** Documenting and sharing learnings, tools, and approaches that could benefit others in the network. Including consistently updating and sharing its [group state](notes/dao-primitives/framework/group-state.md) documentation



### Navigating Challenges 

- **Maintaining Momentum:** Sustaining energy and progress toward goals despite obstacles and competing priorities. 
- **Balancing Flexibility and Focus:** Adapting to changing circumstances without losing sight of core objectives and priorities. 
- **Principled evolution:** Ensuring that as the group evolves it grows in principled ways, avoiding centralization, governance capture, bureaucratic bloat etc. 
- **Maintaining alignment with coordinating entities :** Ensuring that new opportunities and partnerships remain aligned with the group's fundamental purpose and with the purpose of the network that the group is participating in. 
- **Addressing Resource Constraints:** Finding creative ways to achieve goals when ideal resources aren't available. 
- **Consistently communicating progress:** Ensuring that the network that the group is coordinating can see and understand the progress it is making and trust that it is a good coordination partner. 

### Signs of Readiness for Evolution 

A coordination phase group may be ready to evolve to a new form or enter completion when: 
- The group's purpose has been substantially fulfilled or has evolved significantly 
- The operational context has changed in ways that require fundamental restructuring 
- New capabilities or approaches have emerged that would better serve the purpose 
- The group's work has been effectively systematized or automated 
- The group can no longer maintain the energy and commitment of team members and contributors in order to do its work



---

## Tools and Practices

### State Documentation 

During the Coordination Phase, the group's [group-state](notes/dao-primitives/framework/group-phase/group-state.md) documentation is the critical interface between the group and the network it inhabits. It contains the the agreements between the group and other coordinating entities, as well as references to web3 tooling and onchain information that allows for effective decentralized coordination between the group and its network.

**Purpose Elements:** 
- Regularly updated strategic priorities aligned with core purpose 
- Evolution of the group's strategy and goals

**Practice Elements:** 
- Updated governance practices that evolve as the group grows and changes 
- Maintaining agreements and internal and external coordination processes
- Evolving contributor engagement and coordination mechanisms 
- Maintaining treasury and resource allocation practices
- Ongoing retrospective and feedback processes. plus governance and operational evolution 
- Records of major group decisions and transactions

**Progress Elements:** 
- Collaborative project management tools tracking group activities and deliverables 
- Meeting and other communication platforms
- Shared workspaces, documentation and data platforms
- Documentation of learnings and group evolution 
- Impact metrics that track progress toward key objectives - Clear articulation of how activities connect to broader network goals 


* **Interoperability Protocols:**  Protocols and standards for communication and data exchange between groups.
* **Shared Data Platforms:**  Platforms for sharing information and resources across networks.
* **Collaborative Project Management Tools:**  Tools for coordinating activities and tracking progress across multiple groups.
* **Communication Channels:**  Established communication channels for effective communication across networks.

### Coordination Phase Patterns

```dataviewjs
$= dv.list(
    dv.pages()
    .where(p => 
        (p.type === "pattern" || (Array.isArray(p.type) && p.type.includes("pattern"))) &&
        (p.phase === "coordination" || (Array.isArray(p.phase) && p.phase.includes("coordination"))) &&
        !p.file.path.startsWith("tools/") &&
        !p.file.path.startsWith("drafts/")
    )
    .map(p => `[[${p.file.path}|${p.title}]]`)
)
```

### Coordination Phase Primitives

```dataviewjs
const ext = dv.pages('"tools/types"')
  .where(t => t.file.frontmatter?.extends === "primitive")
  .map(t => t.file.name);

$= dv.list(
  dv.pages()
    .where(p =>
      (p.type === "primitive" || (Array.isArray(p.type) && p.type.includes("primitive"))) &&
      (p.phase && p.phase.some(s => s.includes("coordination"))) &&
      (p.type.includes("primitive") || ext.some(n => p.type.includes(n))) &&
      !p.file.path.startsWith("tools/") &&
      !p.file.path.startsWith("drafts/")
    )
    .map(p => `[[${p.file.path}|${p.title}]]`)
);
```

---

## Successful Coordination Phase Outcomes

A successful Coordination Phase results in:

* Effective collaboration with other groups.
* Efficient resource sharing and utilization.
* Alignment with broader network goals and priorities.
* Enhanced impact and effectiveness within the larger ecosystem.

The Coordination Phase is crucial for maximizing the group's impact and achieving its goals within a larger context.  A well-managed Coordination Phase ensures the group can effectively collaborate and contribute to the broader network.
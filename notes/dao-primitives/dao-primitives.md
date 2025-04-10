---
title: DAO Primitives Project
description: Notes for the DAO Primitives project at SuperBenefit
publish: "true"
type: index
tags:
  - daos
  - primitives
---

The DAO Primitives project at SuperBenefit explores the landscape of social and technical [[tags/primitives|primitives]] in the [[tags/decentralization|decentralized]] web, specifically those used in the governance and operations of [[tags/daos|DAOs]] and [[tags/purpose|purpose-aligned]] [[networks]] of small, [[tags/autonomy|autonomous]] [[tags/teams|teams]].

---

# Introduction

The DAO Primitive Model is a set of design [[tags/primitives|primitives]] and [[artifacts/patterns/patterns|patterns]] for building [[tags/daos|DAOs]] and other onchain organizations. It includes a set of un-opinionated building blocks (primitives) out of which a DAO structure can be designed. These primitives allow for the deliberate design of [[governance]] and operational systems that can coherently scale as the activities of the DAO grow in size and complexity.

The Primitives act as a handful of generic building blocks that, through a facilitated process, can be composed together into a governance and operational structure to serve the needs and preferences of a coordinating collective. The primitives are implemented using more opinionated coordination patterns and technical [[tags/modules|modules]] (these are housed in a [[artifacts/patterns/patterns|pattern library]]) to produce practical and scalable [[tags/systems|systems]]. The resulting governance and operational structure may end up being called a “DAO” but we anticipate the term “DAO” becoming less and less useful as we collectively experiment in and map these emerging coordination approaches.

---

## Framing: The Need for New Organizational Models

Our current organizational structures are no longer sufficient for the challenges of our world.  We need new models capable of:

*   **Adaptable Networks:** Moving beyond monolithic entities to create networks that can grow, evolve, and operate effectively at various scales.  These networks should leverage the focused intelligence of small, specialized groups while maintaining a larger coordinating coherence and collective intelligence responsive to macro-level changes.

*   **Dynamic Scaling:**  Structures that can adapt to needs and challenges, scaling from individual efforts to potentially billions of participants without losing coordination or adaptability.  They should also be able to scale down gracefully when no longer needed.

*   **Superior Performance:**  Organizational structures that outperform their predecessors, not just in terms of efficiency but also in their ability to direct resources towards positive outcomes.  This requires combining the powerful scaling mechanisms of large corporations with the innovation, adaptability, and intelligent resource allocation of decentralized systems.

*   **Effective Primitives:**  New organizational primitives are needed to build these structures, capable of producing positive outcomes in our complex, interconnected world.


For a deeper dive into these topics, [check out our articles on Mirror](https://superbenefit.mirror.xyz/).  Further exploration can be found in these articles:

*   [DAOs aren't things... they are flows.](artifacts/network-evolution/DAOs%20aren't%20things...%20they%20are%20flows..md)
*   [Scale and the levers that provide DAOs their power](artifacts/network-evolution/Scale%20and%20the%20levers%20that%20provide%20DAOs%20their%20power.md)
*   [DAOs - From fractal primitives to network scale.](artifacts/network-evolution/DAOs%20-%20From%20fractal%20primitives%20to%20network%20scale..md)
*   [Minimum Viable Permissionless-ness](artifacts/network-evolution/Minimum%20Viable%20Permissionless-ness.md)
*   [Building DAOs as scalable networks](artifacts/network-evolution/Building%20DAOs%20as%20scalable%20networks.md)

![](attachments/pasted%20image%200.png)



### **_"Purpose aligned networks of small autonomous teams"_**

Our design approach centers on DAOs as *purpose-aligned networks of small autonomous teams*. While the term "DAO" is currently vague, we use it as a placeholder.  We believe that effective large-scale systems emerge from networks of smaller, coherent teams, each with autonomy, contributing to a shared overarching purpose.  Web3 tools enable effective coordination across various scales:

1.  Small collaborative teams
2.  Coordinated networks of teams
3.  Large-scale constituencies

This combination of innovative, context-rich small teams, efficient scaled networks, and [community governance](notes/rpp/working-docs/community-governance.md) can create organizational systems that outperform traditional structures and direct their performance towards a better, more sustainable world.

_We believe that this combination highly innovative high context small teams, combined with the power and efficiency of scaled networks, all wrapped in a community governance layer can produce organizational systems that can both outperform traditional organizations, but more importantly direct this performance towards building a better and more sustainable world._ 

### **What are the DAO Primitives?**

[primitives](tags/primitives.md)

The DAO primitives provide generalizable building blocks for designing purpose-aligned networks of small autonomous teams.  They are un-opinionated, offering maximum flexibility to create various governance and operational systems. While they can implement traditional hierarchies, they are designed to facilitate experimentation with decentralized governance models that are principled, coherent, and easy to implement and evolve.

Using these primitives involves two phases:

1.  **Organizational Design (Strategic):** Designing a specific governance model for a particular use case (meta-governance).
2.  **Implementation (Tactical):**  Using established web3 design patterns, frameworks, and technical modules.  The DAO primitives serve as resources in this process.  [Learn more about primitives](tags/primitives.md).

---

## **The DAO Primitives**

### **1.** **[[tags/primitives|Key Concepts & Tools]]**

**At the highest level, we identify 3 foundational organisational primitives.** 

1. **Entities/groups** - individuals, teams, organisations etc. Each has an animating purpose and internal agreements that govern decision-making and resource allocation. 

2. **Networks** - clusters of entities/groups that are animated by a shared purpose and common agreements on sharing information and resources   

3. **Agreements** - commitments within and between entities/groups/networks that allow for coordination

**From these we have derived 4 initial organisational structures that can be used to design organisational systems.** 

These are DAO's [DAOs](tags/daos.md), [Cells](notes/dao-primitives/test-resources/test-pattern.md), [Roles](tags/roles.md), and [Tasks](tags/tasks.md)asks. Using the above conceptual framework as a guide, these primitive structures can be composed together to deliver the governance and operational needs of many different organizational types. It is important to note that these are the initial structures that we have been experimenting with. You can develop other structures that can be used to operationalize entities/groups, networks and agreements in a DAO context. However, at this stage–given the complexity of implementing new organizational designs out of combinations of different practices and tool-sets–we think it is valuable to start with a simple set of structures out of which many different organizational types can be composed.

1. **DAOs** - *networks* - purpose aligned networks of small autonomous teams. These are the larger networks of smaller entities that coordinate their activities towards a shared purpose. If the network is large then the DAO will hold the constituency scale governance for the whole network. 

2. **Cells** - *entities/groups* - teams of fewer than 10 people who collaborate on specific pieces of work or functions. These Cells collaborate internally to govern themselves and coordinate with other cells to form network structures in a DAO.

3. **Roles** - *agreements* - sets of agreements between an entity and other entities or networks in a DAO. They contain and manage specific responsibilities and sets of permissions. Roles allow individuals or groups of people to be assigned specific authority, activities, compensation etc to manage ongoing activities within a Cell or in the lager network. 

4. **Tasks** - *actions* - agreements that relate to defined pieces of work/deliverables that an individual or a team can engage with and commit to delivering. Like Roles, tasks can be used internally by Cells to manage their activities or can be at coordination scale within a network structure, or at the level of the larger DAO.  

All structures have _state_. This allows them to be interoperable and universally addressable across a network. 

You can dive deeper into primitive structures here 

### **2. Facilitation framework**

A Group facilitation process use to design and implement new organisational models. This consists of..... 

1. **[[notes/dao-primitives/framework/group-scale/group-scale|Group Scale]]** - human systems function differently at different scales. The group scale model helps us leverage this understanding to design an organisational system that function effectively. Whether a group is a small scale collaboration, a larger coordinating organisation or a large-scale constituency, different group scale need different tools and practices to be effective. 
2. **[[notes/dao-primitives/framework/group-phase/group-phase|Group Phase]]** - groups go through different phases as they develop. Understanding these allows us to design the tools, practices or a group to match the needs of the current phase of the group and change with the group as it evolves. 
3. **[[notes/dao-primitives/framework/group-state|Group State]]** - for decentralised organising to be effective, entities (groups of different sizes) within a network need to be interoperable and universally addressable across the network. To do this we use the concept of group _state_. Every entity maintains a _state_ which allows a group to have an existence that is both separate/independent from the larger network, but also integrated into the larger network based agreements made with other entities in the network.


- You can dive deeper into the facilitation framework [here](https://app.charmverse.io/superbenefit/dao-primitives-facilitation-framework-new-7995486527060971)     

### **3. [[artifacts/patterns/patterns|Pattern Library]]**

A **library** of coordination #patterns and software #modules with which the above organisational designs can be reliably implemented. For novel governance mechanisms to be tried and begin to succeed, having well tested combinations of social patterns and technical tools to deliver them is going to be crucially important. As more experiments are conducted the pattern library will flesh out the emerging best practice for achieving different organisational dynamics. 
You can dive deeper into the pattern library [[artifacts/patterns/patterns|here]].

# **How the primitives work together**

Using the above concepts, structures, facilitation framework and pattern library, we can explore designing DAOs (or DAO like decentralised organisational systems)_._ Possible use-cases examples are:

1. **Starting from a new idea:**


1. Starting with a conversation between a handful of interested people. 

2. Who form themselves into a simple Cell, employing Roles and Tasks to manage their collaboration.   

3. Which then spawns new Cells as their work increases in scope and complexity. 

4. These Cells form into an operational network.

5. And then, as this grows, a larger DAO structure is formed to decentralised governance of the network's purpose and provide governance oversight by the community.

	

1. **Creating a partnership with another DAO or organisation** - for example if 2 organisations wanted to implement a decentralised governance system to deliver a shared project: 


1. Create a stakeholder group to define the purpose of the shared project, resource it and provide high-level governance. 

2. Spin up an operational Cell to develop and implement the strategy for the project in partnership with the stakeholder group. 

3. Create and resource new Cells to deliver specific aspects of the project.

4. Develop Roles and Tasks to deliver specific functions and activities in the project.

	

1. **Pivoting an existing community into a decentralised organisational structure:**


1. Engage the community in developing and agreeing on a high-level purpose and goals for the network.

2. Spin up constituency scale community governance to steward the long-term goals of the network 

3. Developing a Cell network structure to deliver for the operational aspects of the network, delivering on the goals defined by the community governance. 

You can dive deeper into how the primitives work together [**here**](https://app.charmverse.io/superbenefit/how-primitives-can-work-together-793997676063832) 

---

## DAO Primitives Index

%% Begin Waypoint %%
- [DAO Primitives Tasks](./DAO%20Primitives%20Tasks.md)
- **[framework](./framework/framework.md)**
- **[implementation-guides](./implementation-guides/implementation-guides.md)**
- **[patterns](./patterns/patterns.md)**
- **[primitives](./primitives/primitives.md)**
- **[resources](./resources/resources.md)**
- **[test-resources](./test-resources/test-resources.md)**

%% End Waypoint %%

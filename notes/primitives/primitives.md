---
title: DAO Primitives
description: Notes for the DAO Primitives project at SuperBenefit
publish: "true"
type: index
tags:
  - daos
  - primitives
---

The DAO Primitives project at SuperBenefit explores the landscape of social and technical [[tags/primitives|primitives]] in the [[tags/decentralization|decentralized]] web, specifically those used in the governance and operations of [[tags/daos|DAOs]] and [[tags/purpose|purpose-aligned]] [[networks]] of small, [[tags/autonomy|autonomous]] [[tags/teams|teams]].

---

# **Introduction**

The DAO Primitive Model is a set of design [[tags/primitives|primitives]] and [[notes/patterns/patterns|patterns]] for building [[tags/daos|DAOs]] and other onchain organizations. It includes a set of un-opinionated building blocks (primitives) out of which a DAO structure can be designed. These primitives allow for the deliberate design of [[governance]] and operational systems that can coherently scale as the activities of the DAO grow in size and complexity.

The Primitives act as a handful of generic building blocks that, through a facilitated process, can be composed together into a governance and operational structure to serve the needs and preferences of a coordinating collective. The primitives are implemented using more opinionated coordination patterns and technical [[tags/modules|modules]] (these are housed in a [[notes/patterns/patterns|pattern library]]) to produce practical and scalable [[tags/systems|systems]]. The resulting governance and operational structure may end up being called a “DAO” but we anticipate the term “DAO” becoming less and less useful as we collectively experiment in and map these emerging coordination approaches.

---

## **Framing**

- We have outgrown the ability for our current organisational structures to operate successfully in our world. 

- We need new organisational structures to deal with this. We need to get past monolithic entities and move towards networks that can grow and evolve and that can operate at different scales with the focused intelligence of small specific groups, but with a larger coordinating coherence and collective intelligence that can respond to changes in the macro. 

- We need structures that can respond to needs and challenges, that can start as an individual and scale potentially to billions without hitting some upper bound where coordination fails to work, or adaptability grinds to a halt. And can then scale back down to nothing when they are no longer needed. 

- And most importantly, we need organisational structures that are more powerful than the structures that they replace. This can’t just be “_feel good vibes”_. These new structures need to win. To do this they need to hold both the powerful scaling mechanisms of existing mega companies, but also innovation, adaptability and an ability to intelligently direct this power towards positive outcomes. 

- We need new organisational primitives from which to build these new organisational structures which are capable of producing positive outcomes in a world of complex interconnected systems and problems. 

> **[Check out our articles on mirror](https://superbenefit.mirror.xyz/)** for a deep dive into each of these topics.

- [DAOs aren't things... they are flows.](artifacts/DAOs%20aren't%20things...%20they%20are%20flows..md)
- [Scale and the levers that provide DAOs their power](artifacts/Scale%20and%20the%20levers%20that%20provide%20DAOs%20their%20power.md)
- [DAOs - From fractal primitives to network scale.](artifacts/DAOs%20-%20From%20fractal%20primitives%20to%20network%20scale..md)
- [Minimum Viable Permissionless-ness](artifacts/Minimum%20Viable%20Permissionless-ness.md)
- [Building DAOs as scalable networks](artifacts/Building%20DAOs%20as%20scalable%20networks.md)

![](attachments/pasted%20image%200.png)


### **_"Purpose aligned networks of small autonomous teams"_**

The fundamental premise that we are designing from here is the concept of DAOs as _purpose aligned networks of small autonomous teams_. “DAO” as a term is vague at best. Over time the language and naming conventions around the concept of DAOs (broadly, organisations employing decentralised governance and ownership enabled by web3) will evolve more definition, but for now we’ll use _DAO_ as a placeholder. 

We believe that big systems unlock possible through DAOs as a collection of small coherent teams, each with a degree of autonomy, that are then able to network (or be networked) into a more complex whole. This whole can be animated by an overarching purpose that all of the small autonomous teams are collectively contributing towards. 

The tools that crypto/web3 make available allow us to design and execute effectively across 1. the tiny scale of a small collaborative team 2. the medium scale of a coordinated network of teams and 3. the larger scale of a constituency made up of all of the network’s participants.   

_We believe that this combination highly innovative high context small teams, combined with the power and efficiency of scaled networks, all wrapped in a community governance layer can produce organisational systems that can both outperform traditional organisations, but more importantly direct this performance towards building a better and more sustainable world._ 

### **What are the DAO Primitives?**

[primitives](tags/primitives.md)

1. The DAO primitives provide a set of generalisable building blocks with which to design _purpose aligned networks of small autonomous teams_. 

2. They are un-opinionated building blocks that provide maximum flexibility and can be used to compose many different kinds of governance and operational systems for DAOs. The primitives can be used to implement a traditional management hierarchy, if that was desired, but they are designed specifically to make it easy to experiment with newer more decentralised governance models, in ways that can be principled, coherent and simple to implement and evolve. 

3. To use these primitives to create a governance and operational structure for a DAO (or some other coordination structure) there are 2 phases: 

   Organisational design (strategic) - designing the specific (opinionated) governance model for a particular DAO use-case (_meta governance_).

   Implementation (tactical) of these designs using well understood web3 design patterns, frameworks and technical modules. The _DAO primitives_ here are designed to be used as a resources in this process.  

---

## **The DAO Primitives**

### **1.** **[[tags/primitives|Key Concepts & Tools]]**

**At the highest level, we identify 3 foundational organisational primitives.** 

1. **Entities/groups** - individuals, teams, organisations etc. Each has an animating purpose and internal agreements that govern decision-making and resource allocation. 

2. **Networks** - clusters of entities/groups that are animated by a shared purpose and common agreements on sharing information and resources   

3. **Agreements** - commitments within and between entities/groups/networks that allow for coordination

**From these we have derived 4 initial organisational structures that can be used to design organisational systems.** 

These are DAO's, [Cells](notes/patterns/test-pattern.md), Roles, and Tasks. Using the above conceptual framework as a guide, these primitive structures can be composed together to deliver governance and operational needs of many different organisational types. It is important to note that these are the initial structures that we have been experimenting with. You can develop other structures that can be used to operationalise entities/groups, networks and agreements in a DAO context. However, at this stage–given the complexity of implementing new organisational designs, practices and tool-sets–we think it is valuable to start with a simple set of structures out of which many different organisational types can be composed.

1. **DAOs** - purpose aligned networks of small autonomous teams. These are the larger networks of smaller entities that coordinate their activities towards a shared purpose. If the network is large then the DAO will hold the constituency scale governance for the whole network. 

2. **Cells** - entities/groups of fewer than 10 people who collaborate on specific pieces of work or functions. These Cells collaborate internally to govern themselves and coordinate with other cells to form network structures in a DAO.

3. **Roles** - are sets of agreements between an entity and other entities or networks in a DAO. They contain and manage specific responsibilities and sets of permissions. Roles allow individuals or groups of people to be assigned specific authority, activities, compensation etc to manage ongoing activities within a Cell or in the lager network. 

4. **Tasks** - are agreements that relate to defined pieces of work/deliverables that an individual or a team can engage with and commit to delivering. Like Roles, tasks can be used internally by Cells to manage their activities or can be at coordination scale within a network structure, or at the level of the larger DAO.  

All structures have _state_. This allows them to be interoperable and universally addressable across a network. 

You can dive deeper into primitive structures here 

### **2. Facilitation framework**

A Group facilitation process use to design and implement new organisational models. This consists of..... 

1. **[[notes/primitives/framework/scale/scale|Group Scale]]** - human systems function differently at different scales. The group scale model helps us leverage this understanding to design an organisational system that function effectively. Whether a group is a small scale collaboration, a larger coordinating organisation or a large-scale constituency, different group scale need different tools and practices to be effective. 
2. **[[notes/primitives/framework/phase/phase|Group Phase]]** - groups go through different phases as they develop. Understanding these allows us to design the tools, practices or a group to match the needs of the current phase of the group and change with the group as it evolves. 
3. **[[notes/primitives/framework/state|Group State]]** - for decentralised organising to be effective, entities (groups of different sizes) within a network need to be interoperable and universally addressable across the network. To do this we use the concept of group _state_. Every entity maintains a _state_ which allows a group to have an existence that is both separate/independent from the larger network, but also integrated into the larger network based agreements made with other entities in the network.


- You can dive deeper into the facilitation framework [here](https://app.charmverse.io/superbenefit/dao-primitives-facilitation-framework-new-7995486527060971)     

### **3. [[notes/patterns/patterns|Pattern Library]]**

A **library** of coordination #patterns and software #modules with which the above organisational designs can be reliably implemented. For novel governance mechanisms to be tried and begin to succeed, having well tested combinations of social patterns and technical tools to deliver them is going to be crucially important. As more experiments are conducted the pattern library will flesh out the emerging best practice for achieving different organisational dynamics. 
You can dive deeper into the pattern library [[notes/patterns/patterns|here]].

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
- [DAO Primitives.canvas](notes/primitives/framework/DAO%20Primitives.canvas)
- **[framework](./framework/framework.md)**
  - **[phase](./framework/phase/phase.md)**
    - [Conversation Phase](./framework/phase/conversation.md)
    - [Coordination Phase](./framework/phase/coordination.md)
    - [Formation Phase](./framework/phase/formation.md)
    - [Organization Phase](./framework/phase/organization.md)
  - **[scale](./framework/scale/scale.md)**
    - [Collaboration Scale](./framework/scale/collaboration.md)
    - [Constituency Scale](./framework/scale/constituency.md)
    - [Coordination Scale](./framework/scale/coordination.md)
    - [Network Scale](./framework/scale/network.md)
  - [Group State](./framework/state.md)
- [Group Facilitation Framework](notes/primitives/framework/group-facilitation.md)
- **[patterns](notes/patterns/patterns.md)**
  - [Cell (Pattern)](notes/patterns/test-pattern.md)
  - [Circle](./patterns/circle-pattern.md)
  - [Community Governance](./patterns/Community%20Governance.md)
  - [Operational Governance](./patterns/operational-governance.md)
  - [stakeholder-governance](notes/primitives/stakeholder-governance.md)
  - [readme](notes/patterns/readme.md)

%% End Waypoint %%

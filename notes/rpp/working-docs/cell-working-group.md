---
title: Cell (working group)
description: A pattern for implementing working groups in DAOs based on the concept of purpose aligned networks of small autonomous teams
url: 
author:
  - yeoro.eth
tags:
  - patterns
publish: "false"
type: pattern
studies: 
primitives:
  - nucleus
  - decider
functions:
  - governance
qualities:
  - decentralization
  - autonomy
  - decision-making
scale:
  - collaboration
phase:
  - organization
  - coordination
patterns:
  - state
---
    

*A pattern for creating working groups that can reliably govern themselves and coordinate with other working groups and DAO like structures.*
Purpose aligned networks of small autonomous teams 


%% Introduce the pattern here %%

---

## Problem / Solution Context

DAOs and other decentralized forms of organizing enable more flexible, powerful and inclusive group coordination patterns by utilizing small autonomous teams in place of rigid top-down hierarchies. However without the rigid rulesets and chains of command typical in traditional organizations these small autonomous teams often fall victim to group dynamic dysfunctions that undermine the potential that decentralized organizing holds (see [The Tyranny of Structurelessness](https://en.wikipedia.org/wiki/The_Tyranny_of_Structurelessness))

The Cell framework provides teams with enough scaffolding to function as dynamic, autonomous units, avoiding bureaucratic overhead while protecting against group dysfunction. Additionally, it establishes clear interfaces that enable trust-based coordination between groups and individuals across a broader DAO network.  

This balanced approach to structure - implemented through the Cell pattern - helps realized the benefits of decentralized organization while mitigating common failure modes.

%% Introduce the problem space / related function here %%

### Solution Landscape

%% Describe the various approaches to the problem/function here. Be sure to link alternative patterns if they exist %%

%% Optional: add a segue to help the reader understand when this pattern might be more useful than the alternatives %%

---

## How Cells Work

### Overview 
Working groups, described as "Cells" are the fundamental operational entities within a DAO. They function as small autonomous teams that can coordinate effectively across DAOs and other onchain organizations. Each Cell consists of fewer than 10 people, enabling efficient self-governance while allowing for effective network relationships.

The Cell pattern serves as a foundational structure that integrates other organizational primitives and coordination practices to create an effective functional unit. This composition enables both internal self-management and external coordination within DAOs and other onchain organizations.


A Cell can be composed into a spectrum of different forms based on complexity and the need for creativitey 

Ref - articles 
### When to use a Cell
Use the Cell pattern to design ways for small groups of people to collaborate in a coherent way. 

If you require a high-context group to work deeply on something in a consistent and ongoing way, then choosing to implement a Cell structure can be a good choice. 

Consider: 
	- is the work required sufficiently complex to require a collaborative team to work on it?
	- Is there a clear purpose that the team can be formed around?
	- Is the work going to be ongoing? 
	- Is it likely to evolve over time? 
If the work could be done more efficiently by coordinating a set of individual contributors using [[roles]] or [tasks](tags/tasks.md), then do not use a Cell. Collaborating teams are expensive compared to individual contributors executing on well defined tasks. But Cells are capable of creativity, adaptability and are therefore ideally suited for complex evolving contexts. Make sure you are choosing the right tool for the job.   


### Mechanism
### Cell details

Cells are [collaboration](notes/primitives/framework/scale/collaboration.md) scale teams (fewer than 10 people). They are self governing teams that can be effectively networked into the operational structure of a DAO or other onchain organization. 

They are designed to be flexible enough to allow for many different ways of combining Cells into coordinating structures, from highly structured operational hierarchies to loose informal structures. 
    
 **Cell State** 
 Each Cell has a Cell [state](notes/primitives/framework/state.md) document that holds the key information that the Cell needs to run itself, and also that others in the DAO need to be able to understand and judge what the Cell does and how it does it. This includes its:

	- Purpose - goals, intentions, plans, relationships to and agreements with the DAO and other entities etc [purpose](tags/purpose.md) 
    
	- Practice - core team makeup, team roles, governance practices/policies etc [practices](tags/practices.md)
    
	- Progress - project management, outputs, execution towards goals [progress](tags/progress.md)

![](attachments/Pasted%20image%2020241122104631.png)
    
**Scale**
- Cells operate internally at [collaboration](notes/primitives/framework/scale/collaboration.md) scale, within the core team. This means that they are a team of fewer than 10 people that communicates regularly and in a high-bandwidth way to manage something complex. 
- And at [coordination](notes/primitives/framework/scale/coordination.md) scale as they coordinate contributors, partners and the larger DAO/network

**Phase**
At any point a Cell will be at one of 5 [phases](notes/primitives/framework/phase/phase.md) in its evolution
- [conversation](notes/primitives/framework/phase/conversation.md)
- [formation](notes/primitives/framework/phase/formation.md)
- [organization](notes/primitives/framework/phase/organization.md)
- [coordination](notes/primitives/framework/phase/coordination.md)
- [completion](notes/primitives/framework/phase/completion.md)
The primitives and practices that a Cell will utilize will change as they implement patterns that are appropriate for the particular phase they are at. 


### How to use Cells 
Generally Cells have 3 different ways that they can operationalize their purpose:

1. Core team execution - members of the core team carrying out activities
    
2. Coordinating with other Cells - a Cell can create or connect with other Cells and act as a coordinating body for them
    
3. Coordinating contributors - a Cell can engage any number of contributors to do work that the Cell needs to accomplish

Cells often use [roles](tags/roles.md) and [tasks](tags/tasks.md) as basic patterns for managing both their internal collaboration and external coordination activities. 

![](attachments/Pasted%20image%2020241122104842.png)

###  Cell Formation Patterns

There are four primary ways new Cells form in DAO networks:

1. **Operational Scaling**
	An existing Cell may create a new Cell when operational needs extend beyond its current scope. This occurs when a Cell's responsibilities increase and it needs to delegate work to another entity. In these cases, the Cell can either delegate to an existing Cell or create a new one.

2. **Community Operationalization**
	A community may form a Cell when it needs to put plans into action. For example, when a community decides to fund specific activities, it can establish a Cell to execute on these community goals.

3. **Partnership Implementation**
	Cells can form as collaborations between organizations. When two DAOs (or other organizations) want to work together on a project, they can create and fund a new Cell to deliver on their shared objectives.

4. **Permissionless Formation**
	Groups within a DAO or network can form Cells without requiring approval from others. These teams can establish a Cell and begin coordinating with other Cells and the broader network. Their success depends on demonstrating value to the network and maintaining trusted governance as outlined in their Cell State. 


## Implementation 

The [state](notes/rpp/working-docs/state.md) pattern outlines how to set up a Cell using Cell State as the vehicle for its core structure. 

#### Affordances

%% Describe affordances here %%

### Risks and Opportunities

%% Analyze the case studies and share insights. Include considerations for risk management and highlight opportunities to leverage this pattern to produce impact (in the context of SuperBenefit's mission and the interests of its network peers). %%

---

## Cell (working group) in Practice

%% Describe how this pattern is used / expressed in practice %%

### Strategies for Cell (working group)

%% Describe how this Pattern is used in strategies/playbooks here %%

```dataview
LIST description
WHERE contains(patterns, this.file.name)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
AND (
    contains(type, "playbook") OR
    (type = "playbook")
)
```

### Implementation
**Steps to creating a Cell**
Because Cells can be formed in several different ways (as outlined above) a Cell will not move through the phases of development in a uniform way. For example if a Cell is being created by another Cell to perform a very specific function, the [conversation](notes/dao-primitives/framework/phase/conversation.md) and [formation](notes/dao-primitives/framework/phase/formation.md) phases will be quick and internal to the existing Cell. However, if a Cell is emerging autonomously out of community conversations then these phases may be slower and more emergent.

However, regardless of 

Add Ephemeral Cell pattern as a form of a Cell

Using the State pattern template (link when created) as a starting point, work through and define:
1. Purpose - 
2. Practice - 
3. Progress - 


#### Primitives for Cell (working group)

%% Add an overview of primitives used here %%

```dataviewjs
const ext = dv.pages('"tools/types"')
    .where(t => t.extends === "primitive")
    .map(t => t.file.name);

dv.table(
    ["Primitive", "Description"],
    dv.pages()
        .where(p => 
            p.type && 
            (p.type.includes("primitive") || ext.some(n => p.type.includes(n))) &&
            dv.current().primitives && dv.current().primitives.includes(p.file.name) &&
            !p.file.path.startsWith("tools/") && 
            !p.file.path.startsWith("drafts/")
        )
        .sort(p => p.title, 'asc')
        .map(p => [
            `**[${p.title}](${p.file.path})**`,  
            p.description
        ])
);
```

---

## Cell (working group) Case Studies

%% Add insights from case studies here %%

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

---

## Resources, References, and Further Reading

%% Add a list of references used in this pattern, further learning on the topic, tools and other helpful info here. %%

---

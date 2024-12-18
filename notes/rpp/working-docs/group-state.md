---
title: Group state (pattern)
description: A pattern for creating and managing group state for purpose aligned networks of small autonomous teams
url: 
author:
  - yeoro.eth
tags: 
  - patterns
  - group
  - group-state
publish: "false"
type: pattern
aliases:
  - "#group-state"
studies: 
primitives: 
  - nucleus
  - circle 
functions: 
qualities: 
scale: 
  - collaboration
  - coordination

phase:
  - formation
  - organisation
  - coordination
  - completion
---

*A pattern for creating and managing group state for purpose aligned networks of small autonomous teams*

**Group State** provides a set of information categories that create a template for a small autonomous teams to create and maintain a [nucleus](notes/rpp/working-drafts/nucleus.md) document. This document provides a source of internal coherence and structure for a team, as well as transparent source of trusted information to make effective coordination with external entities possible.  



%% Introduce your note here. %%

---


## Problem / Solution Context

This pattern is designed to be used in the creation of [cells](notes/rpp/working-drafts/cell-working-group.md) as [collaboration](notes/dao-primitives/framework/scale/collaboration.md) scale teams that have a [nucleus](notes/rpp/working-drafts/nucleus.md) document as core coordination infrastructure for operating inside a decentralized network like a DAO. 

Capturing a cell's state is fundamental to enabling both autonomous operation and effective network coordination within DAOs. A clear and consistent state document serves as a living nucleus that enables the cell to maintain coherence while evolving, provides transparency for network-level coordination. Without documented state, cells risk falling into internal dysfunction and lack of effectiveness. They also fail to leverage the value of coordination and efficient resource and information flows across the network. 

**The need for a consistent state template**

Unless a team is highly skilled in organizational design, implementing the [nucleus](notes/rpp/working-drafts/nucleus.md) primitive will be difficult and time consuming. On top of this, if teams are required to develop their own nucleus document without additional supporting structure there is a risk that there will not be enough consistency between the way different teams document their state. This will prevent many of the interoperability benefits that the DAO primitives framework promises from being realized. 

To prevent this from happening we have developed this pattern as a teamplate for teams to develop a simple and consistent [nucleus](notes/rpp/working-drafts/nucleus.md) document.

Note: It is still recommended that teams have access to skilled facilitation support to help them quickly lay out their group state. 


---

## How <% tp.frontmatter.title || "This Pattern" %> Works

The Group State Pattern captures a DAO cell's dynamic state through three core dimensions:

**Purpose (Why)**
The cell's vision, mission, and goals - defining its reason for existence and unique contribution to the network.

**Practice (How)**
The cell's operating model - including its methods, protocols, roles, and cultural norms for transforming purpose into action.

**Progress (What)**
The cell's actual achievements and impact - tracking initiatives, metrics, and value creation to enable accountability and adaptation.


There are several factors that will influence what and how much detail a team might choose to include in their nucleus doc:
- Phase - depending on a [phase](notes/dao-primitives/framework/phase/phase.md) of development
- Level of responsibility to outside entities
- Amount of resources that the Cell will be managing
- ?????
- 


### Components of group state
Consistency is important - with room for autonomy 


**Purpose** - why the Cell exists

- **High-level purpose/problem** - a clear purpose statement for the Cell - including the problem that is being addressed
- **Genesis of the Cell** - detail of how this purpose connects to the vision, purpose and goals of the larger network and why this Cell is being created
- **Goals** - any specific goals that have been defined for the Cell e.g linking to the proposal that was passed to create the Cell etc
- **Design/intentions** - high-level description of what the Cell will do/is doing

**Practice** 

- **Relationships** 
	- Details of relationship to the larger DAO/network. Including commitments/compliance to/with the larger network, e.g adherence to a DAO wide code of conduct
	- Details of formal agreements with other Cells/entities in the larger DAO/network
	
- **Formal structure** - legal or formal structure of the group e.g a partnership, UNA, DUNA including details of legal compliance/obligations
- 
- **Team agreements** - 
	- Team make-up - members of the Cell and the roles they hold e.g: core team members, contributors, specific execution and stewardship roles etc 
	- Team commitments - team agreements that cover availability, the types of work team members agree to do, minimum agreements for 

 - **Decision-making**  
	- Simple decisions in the team. Being clear about making and recording decisions as part of your meetings and other interactions  
	- Formal decisions - including treasury decisions and making changes to your Cell state  
	- Dispute resolutions - agreements about how you will approach disputes and conflict within your team
	- [Decision-log](notes/rpp/working-docs/decision-log.md) - recording important decisions in a secure way 
	- Tools 
		- Record keeping - tools for keeping records of decisions that the team makes 
		- Decision protocols - e.g adopting something like [decider](notes/rpp/working-drafts/decider.md) as a shared standard for decision-making

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



**Progress** 
The tools and practices by which the team achieves and demonstrates progress. These provide internal structure for the team and external transparency for coordinating entities outside the team:
- **Communication** 
	- Shared comms platforms
	- Meeting schedules, structure and notes/recordings

- **Strategy/planning** - ongoing planning documentation 

- **Project/progress management** 
	- Task management - project management for core team and contributors 
	- Role management - visibility over crafted and assigned roles


#### Affordances
**Network scale transparency and intelligence** - the possibility for a network of Cells with functioning group state to produce a larger collective intelligence. Based on Cells operating with degrees of autonomy but all using a consistent interoperable schema and tooling for group state, a larger network view can emerge allowing for a much more dynamic..... 
%% Describe affordances here %%

### Risks and Opportunities

The risk of bloat - 
The risk of not maintaining the state and it become out of date
The risk of state becoming a "box ticking exercise"

---

## <% tp.frontmatter.title || "This Pattern" %> in Practice

%% Describe how this pattern is used / expressed in practice %%

### Strategies for <% tp.frontmatter.title || "This Pattern" %>

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

**Template** 
[Group-state-template](notes/rpp/working-docs/group-state-template.md)
- Use this template as a starting point for designing an appropriate group state document for a team. Select categories to include from the Components of Group State section and base
- This template can serve 5 purposes across the lifecycle of a group:
	1. As a collaborative document to start to gather thoughts and intentions for the group in the [conversation](notes/dao-primitives/framework/phase/conversation.md) phase
	2. As a proposal template for a formal proposal approve the establishment of the team in the [formation](notes/dao-primitives/framework/phase/formation.md)
	3. As the structure within which to develop and record the team's specific agreements and plans during [organization](notes/dao-primitives/framework/phase/organization.md) phase
	4. As the capture of the ongoing evolving current state of the operating group. Visible, public (to the extent that this is practical) interface for those coordinating with the group through [coordination](notes/dao-primitives/framework/scale/coordination.md) phase
	5. As the final record that archives what the group has achieved and who contributed to these achievements through [completion](notes/dao-primitives/framework/phase/completion.md)
- If available, ask for facilitation support to decide on what to include and the level of depth/detail to include based on the group's [[phase]] and the coordination requirements of the network that the group will operate in. 


*Technical implementation* 


## Examples
Hats
Charmverse
Den


#### Primitives for <% tp.frontmatter.title || "This Pattern" %>

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

## <% tp.frontmatter.title || "This Pattern" %> Case Studies

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

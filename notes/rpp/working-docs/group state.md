---
title: Group state (pattern)
description: A pattern for creating and managing group state for purpose aligned networks of small autonomous teams
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

- **State** (pattern): _A pre-determined set of data points describing a group, which is displayed in the nucleus document but can also be expressed in other ways_

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
Consistency is important  with room for autonomy 


**Purpose** 
- A clear purpose statement for the Cell
- Detail of how this purpose connects to the vision, purpose and goals of the larger network
- Any specific goals that have been defined for the Cell e.g linking to the proposal that was passed to create the Cell etc
- High level design plans for what the Cell will do

**Practice** 
- Details of relationship to the larger DAO/network
	- compliance with the larger network, e.g adherence to a DAO wide code of conduct
- Legal structure e.g a partnership, UNA, DUNA
	- Details of legal compliance
- Details of any formal agreements with other entities in the DAO/network
- Team make-up - members of the Cell and the roles they hold
	- Core team members
	- Contributors 
	- Funders
- Team commitments 
	- Any team agreements that cover availability, the types of work team members agree to do,  
	- 
- Decision-making  
	- Simple decisions in the team. Being clear about making and recording decisions as part of your meetings and other interactions  
	- Formal decisions - including treasury decisions and making changes to your Cell state  
	- Dispute resolutions - agreements about how you will approach disputes and conflict within your team  
	- Tools 
		- Record keeping - tools for keeping records of decisions that the team makes
		- Decision protocols - e.g adopting something like [decider](notes/rpp/working-drafts/decider.md) as a shared standard for decision-making
- Treasury management  
	- Security - 
		- Treasury multisig status and configuration
		- Active treasury signers and roles
		- Backup security measures in place
	
	- Contributor rewards
		- Active reward mechanisms
		- Payment cycles and schedules
		- Compensation frameworks
		- Distribution methods
	- Tokens & badges 
		- Onchain mechanisms for managing authorities, compensation, decision-making etc e.g Hats protocol
	- Financial records
		- Transaction recording system
		- Balance tracking method
		- Reporting framework
		- Reconciliation process


**Progress** 
The tools and practices by which the team achieves progress. These provide internal structure for the team and external transparency for coordinating entities outside the team
- Communication - shared comms platforms
- Task management - 

#### Affordances

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

Template 
Technical implementation 


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

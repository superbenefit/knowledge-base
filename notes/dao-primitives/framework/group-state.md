---
title: Group State
description: A DAO primitives primitive for storing crucial information about a DAO, Cell, Role of Task.
curator: yeoro.eth
publish:
  - true
type: tag, primitive
aliases:
  - "#group-state"
tags: 
  - state
  - nucleus 
  - cell-state
---

# Group State

Group state is a feature of the [DAO Primitives Framework](notes/dao-primitives/framework/readme.md). It describes using the concept of  [[notes/dao-primitives/framework/group-state]] the structuring of essential group information in a way that provides for internal coherence within a group, as well as for interoperability and cooperation between groups. 

---
## Use of Group "State" 

The concept of state is borrowed from computer science. We use “state” to describe the current configuration of an entity at any point in time.

In the DAO primitives framework the group state primitive appears in [DAOs](tags/daos.md), [Cells](notes/dao-primitives/patterns/cell-working-group.md), [[tags/roles]] and [[tags/tasks]]. 
It allows for each of these structures to exist as independent entities in a coordinating networks by capturing and making accessible key information about the entity in a way that others can access and understand. The group state primitive provides an identity for an entity allowing it to be addressed across a network and interacted with by other entities in the network. 

### Self maintained
An entity or group generally maintains its own _group state_. This is especially important with building DAOs as networks of small autonomous teams. Rather than relying on group state being maintained by a centralizing structure in an organization, groups maintaining their own group state is critical for then to have genuine autonomy. Although, in the case of Roles and Tasks, their group state will likely be externally managed as they are tools being utilized by other entities. 

### Secure & trustworthy 
An entity’s _state_ needs to be secure and ideally version-controlled. It must be an up-to-date description of the intentions, agreements and activities of the entity. The trustworthiness of this is critically important for the successful coordination of a network of autonomous entities. 

From a technical perspective, group state will consist of a basket of attestations that make explicit the commitments and agreements made in relation to an entity. In the case of the DAO primitives framework this means that each DAOs, Cell, role or task with have some sort of state document that catalogues the agreements that constitute that entity's internal and external relationships and dependencies.  


### Structure of Group State
In the DAO primitives framework we use a simple articulation of group state as a starting point for creating useful templates for different types of entities:

1. **Purpose** - What is the goal of the entity, role or task? - What is it trying to achieve and how does this relate to the other entities in the network and the network's overarching purpose?
    
2. **Practice** - How will it achieve its goals? - Who is in it and what roles to they play? How does it make decisions? How is money and other rewards/compensation managed? How is the work of the entity managed?
    
3. **Progress** - What progress has is occurring? - Where are plans, timelines and progress recorded? Where can outputs, documents, artifacts etc be viewed?


### Conclusion
_Group State_ makes decentralized organization possible, because entities and groups can be autonomous/self governing, while also being deeply integrated into larger networks and partnerships via agreements held in their _state._

Group state is also fractal, with Roles and Tasks _state_ rolling up into Cell _states_, and Cell _states_ rolls up into DAO state. In this way, the entire network can be understood simply by analyzing the the different group _states_ that it is made up of.

#### Expressions of Group State

- OpenCivics has created a similar approach to project legibility in their [OpenCivics Collaborative Initiative – Specification Template](links/OpenCivics%20Collaborative%20Initiative%20–%20Specification%20Template.md)

### Group State Patterns 

- [[cell-state]]
- [[dao state]]


### Group State Primitives

- [[cell-state-template]]
---

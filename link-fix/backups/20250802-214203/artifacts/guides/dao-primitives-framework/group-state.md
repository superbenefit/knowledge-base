---
title: Group State
description: A DAO primitives primitive for storing crucial information about a DAO, Cell, Role of Task.
publish: "true"
type: tag, pattern
aliases:
  - "#group-state"
tags:
  - state
  - nucleus
  - cell-state
---

# Group State

Group state is a feature of the [DAO Primitives Framework](/artifacts/guides/dao-primitives-framework/readme.md). It describes the structuring of essential group information in a way that provides for internal coherence within a group, as well as for interoperability and cooperation between [groups](/tags/groups.md). This definition of group state is specific to the DAO Primitives Framework and the structures and patterns within it. 

---

## Use of Group "State"

The concept of state is borrowed from computer science. We use "state" to describe the current configuration of an entity at any point in time.

In the DAO [primitives](/tags/primitives.md) framework, the group state primitive appears in [DAOs](/tags/daos.md), [Cells](/notes/dao-primitives/patterns/cell-working-group.md), [roles](/tags/roles.md), and [tasks](/tags/tasks.md). It allows for each of these structures to exist as independent entities in coordinating [networks](/tags/networks.md) by capturing and making accessible key information about the entity in a way that others can access and understand. The group state primitive provides an identity for an entity, allowing it to be addressed across a [network](/tags/networks.md) and interacted with by other entities in the network.

### Self-Maintained

An entity or group generally maintains its own _group state_. This is especially important when building DAOs as [networks](/tags/networks.md) of small autonomous teams. Rather than relying on group state being maintained by a centralizing structure in an organization, groups maintaining their own group state is critical for them to have genuine autonomy. Although, in the case of [Roles](/tags/roles.md) and [Tasks](/tags/tasks.md), their group state will likely be externally managed as they are tools being utilized by other entities.

### Secure & Trustworthy

An entity's _state_ needs to be secure and ideally version-controlled. It must be an up-to-date description of the intentions, [agreements](/tags/agreements.md), and activities of the entity. The trustworthiness of this is critically important for the successful [coordination](/tags/coordination.md) of a [network](/tags/networks.md) of autonomous entities.

From a technical perspective, group state will consist of a basket of attestations that make explicit the commitments and [agreements](/tags/agreements.md) made in relation to an entity. In the case of the DAO [primitives](/tags/primitives.md) framework, this means that each DAO, Cell, role, or task will have some sort of state document that catalogs the [agreements](/tags/agreements.md) that constitute that entity's internal and external relationships and dependencies.

### Structure of Group State

In the DAO [primitives](/tags/primitives.md) framework, we use a simple articulation of group state as a starting point for creating useful templates for different types of entities:

1. **[Purpose](/tags/purpose.md)** - What is the goal of the entity, role, or task? - What is it trying to achieve and how does this relate to the other entities in the [network](/tags/networks.md) and the network's overarching [purpose](/tags/purpose.md)?
2. **[Practice](/tags/practices.md)** - How will it achieve its goals? - Who is in it and what [roles](/tags/roles.md) do they play? How does it make [decisions](/tags/decisions.md)? How is money and other rewards/compensation managed? How is the work of the entity managed?
3. **[Progress](/tags/progress.md)** - What progress is occurring? - Where are plans, timelines, and progress recorded? Where can outputs, documents, artifacts, etc. be viewed?

### Conclusion

_Group State_ makes decentralized organization possible, because it allows entities and [groups](/tags/groups.md) to be autonomous/self-governing, while also being deeply integrated into larger [networks](/tags/networks.md) and partnerships via [agreements](/tags/agreements.md) held in their _state._

Group state is also fractal, with [Roles](/tags/roles.md) and [Tasks](/tags/tasks.md) _state_ rolling up into Cell _states_, and Cell _states_ rolling up into DAO state. In this way, the entire [network](/tags/networks.md) can be understood simply by analyzing the different group _states_ that it is made up of.

#### Expressions of Group State

- OpenCivics has created a similar approach to project legibility in their [OpenCivics Collaborative Initiative – Specification Template](/links/OpenCivics%20Collaborative%20Initiative%20–%20Specification%20Template.md)

### Group State Patterns

- [artifacts/patterns/cell-state](/artifacts/patterns/cell-state.md)
- [dao-state](/notes/dao-primitives/implementation/patterns/dao-patterns/dao-state.md)
- [group-state-template](/notes/dao-primitives/resources/templates/group-state-template.md)


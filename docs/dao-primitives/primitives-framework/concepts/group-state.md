---
group: dao-primitives
title: Group State
description: A DAO primitives primitive for storing crucial information about a DAO, Cell, Role of Task.
publish: true
type: pattern
aliases:
  - "#group-state"
tags:
  - state
  - nucleus
  - cell-state
---


Group state is a feature of the [DAO Primitives Framework](docs/dao-primitives/primitives-framework/readme.md). It describes the structuring of essential group information in a way that provides for internal coherence within a group, as well as for interoperability and cooperation between [groups](data/concepts/groups.md). This definition of group state is specific to the DAO Primitives Framework and the structures and patterns within it. 

---

## Use of Group "State"

The concept of state is borrowed from computer science. We use "state" to describe the current configuration of an entity at any point in time.

In the DAO [primitives](data/concepts/primitives.md) framework, the group state primitive appears in [DAOs](data/concepts/daos.md), Cells, [roles](data/concepts/roles.md), and [tasks](data/concepts/tasks.md). It allows for each of these structures to exist as independent entities in coordinating [networks](data/concepts/networks.md) by capturing and making accessible key information about the entity in a way that others can access and understand. The group state primitive provides an identity for an entity, allowing it to be addressed across a [network](data/concepts/networks.md) and interacted with by other entities in the network.

### Self-Maintained

An entity or group generally maintains its own _group state_. This is especially important when building DAOs as [networks](data/concepts/networks.md) of small autonomous teams. Rather than relying on group state being maintained by a centralizing structure in an organization, groups maintaining their own group state is critical for them to have genuine autonomy. Although, in the case of [Roles](data/concepts/roles.md) and [Tasks](data/concepts/tasks.md), their group state will likely be externally managed as they are tools being utilized by other entities.

### Secure & Trustworthy

An entity's _state_ needs to be secure and ideally version-controlled. It must be an up-to-date description of the intentions, [agreements](data/concepts/agreements.md), and activities of the entity. The trustworthiness of this is critically important for the successful [coordination](data/concepts/coordination.md) of a [network](data/concepts/networks.md) of autonomous entities.

From a technical perspective, group state will consist of a basket of attestations that make explicit the commitments and [agreements](data/concepts/agreements.md) made in relation to an entity. In the case of the DAO [primitives](data/concepts/primitives.md) framework, this means that each DAO, Cell, role, or task will have some sort of state document that catalogs the [agreements](data/concepts/agreements.md) that constitute that entity's internal and external relationships and dependencies.

### Structure of Group State

In the DAO [primitives](data/concepts/primitives.md) framework, we use a simple articulation of group state as a starting point for creating useful templates for different types of entities:

1. **[Purpose](data/concepts/purpose.md)** - What is the goal of the entity, role, or task? - What is it trying to achieve and how does this relate to the other entities in the [network](data/concepts/networks.md) and the network's overarching [purpose](data/concepts/purpose.md)?
2. **[Practice](data/concepts/practices.md)** - How will it achieve its goals? - Who is in it and what [roles](data/concepts/roles.md) do they play? How does it make [decisions](data/concepts/decisions.md)? How is money and other rewards/compensation managed? How is the work of the entity managed?
3. **[Progress](data/concepts/progress.md)** - What progress is occurring? - Where are plans, timelines, and progress recorded? Where can outputs, documents, artifacts, etc. be viewed?

### Conclusion

_Group State_ makes decentralized organization possible, because it allows entities and [groups](data/concepts/groups.md) to be autonomous/self-governing, while also being deeply integrated into larger [networks](data/concepts/networks.md) and partnerships via [agreements](data/concepts/agreements.md) held in their _state._

Group state is also fractal, with [Roles](data/concepts/roles.md) and [Tasks](data/concepts/tasks.md) _state_ rolling up into Cell _states_, and Cell _states_ rolling up into DAO state. In this way, the entire [network](data/concepts/networks.md) can be understood simply by analyzing the different group _states_ that it is made up of.

#### Expressions of Group State

- OpenCivics has created a similar approach to project legibility in their [OpenCivics Collaborative Initiative – Specification Template](links/OpenCivics Collaborative Initiative – Specification Template.md)

### Group State Patterns

- [data/concepts/cell-state](data/concepts/cell-state.md)
- [dao-state](docs/dao-primitives/implementation/patterns/dao-patterns/dao-state.md)
- [group-state-template](docs/dao-primitives/resources/templates/group-state-template.md)


---

## Related Concepts

- [Group State](docs/dao-primitives/primitives-framework/concepts/group-state.md) - Tracking and documenting team coordination
- [Teams](data/concepts/teams.md) - Groups maintaining state documentation
- [Coordination](data/concepts/coordination.md) - Mechanisms requiring state tracking
- [Governance](data/concepts/governance.md) - Decision-making informed by group state
- [Cell State Pattern](artifacts/patterns/cell-state.md) - Pattern for implementing group state

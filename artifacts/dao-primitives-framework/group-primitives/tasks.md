---
title: Tasks (Primitive)
description: Specific, coordinated actions or duties assigned to roles or agents within decentralized systems
author:
  - yeoro.eth
tags:
  - primitives
  - tasks
publish: true
type: note
---

---



## Definition

Tasks within the DAO Primitives Framework function as **agreement primitives** that establish formalized commitments about specific [actions](tags/actions.md), deliverables, and coordinated activities that need to be accomplished within [DAO networks](artifacts/dao-primitives-framework/group-primitives/daos.md). As defined in [our lexicon](tags/tasks.md), Tasks are "specific, coordinated actions or duties assigned to [roles](tags/roles.md) or [agents](tags/agents.md) within decentralized systems" - serving as the operational [agreements](tags/agreements.md) that define **what** specific work needs to be accomplished, while [Roles](artifacts/dao-primitives-framework/group-primitives/roles.md) define **who** has the [responsibility](tags/responsibilities.md) and [authority](tags/authorities.md) to coordinate that work.

---

## Core Characteristics

**Operational Agreement Primitive**: Unlike [Cells](artifacts/dao-primitives-framework/group-primitives/cells.md) and [DAOs](artifacts/dao-primitives-framework/group-primitives/daos.md) which function as entities (network nodes), Tasks serve as [agreements](tags/agreements.md) (network edges) that define specific [actions](tags/actions.md) and deliverables that need to be accomplished to advance network [purpose](tags/purpose.md) and maintain [coordination](tags/coordination.md).

**Action-Oriented Infrastructure**: Tasks create the operational foundation for network activity by establishing clear [agreements](tags/agreements.md) about specific deliverables, timelines, and outcomes while enabling autonomous execution without requiring centralized micromanagement.

**Complementary to Roles**: Tasks work in conjunction with [Roles](artifacts/dao-primitives-framework/group-primitives/roles.md) to operationalize network [coordination](tags/coordination.md) - [Roles](artifacts/dao-primitives-framework/group-primitives/roles.md) defining "who" has [responsibility](tags/responsibilities.md) and [authority](tags/authorities.md), while Tasks define "what" specific [actions](tags/actions.md) and deliverables need to be accomplished.

**Distributed Execution**: Tasks enable coordinated [action](tags/actions.md) across network entities while preserving [autonomy](tags/autonomy.md) in how work is accomplished, creating structured workflows that can operate across multiple [Cells](artifacts/dao-primitives-framework/group-primitives/cells.md) and contexts.

## Task State

**Task State** documentation enables Tasks to function effectively as [agreements](tags/agreements.md) primitives across [DAO networks](artifacts/dao-primitives-framework/group-primitives/daos.md). Each Task maintains transparent state documentation that captures the essential information needed for both task execution and network [coordination](tags/coordination.md).

This [transparent](tags/transparency.md) task state makes tasks addressable and understandable across the wider network, not just internally to the [entity](artifacts/dao-primitives-framework/group-primitives/cells.md) that created them. By documenting task state in accessible formats, other [Cells](artifacts/dao-primitives-framework/group-primitives/cells.md), [Roles](artifacts/dao-primitives-framework/group-primitives/roles.md), and network participants can discover, understand, and coordinate with ongoing work directly, enabling the distributed execution that characterizes effective [DAO](artifacts/dao-primitives-framework/group-primitives/daos.md) networks.

Task State consists of three core components:

**[Purpose](tags/purpose.md)**: Documents the specific deliverables, outcomes, and [goals](tags/goals.md) that the task is designed to accomplish within the network context. This creates clarity about the task's contribution to broader objectives and enables other network participants to understand how to coordinate with or build upon the work.

**[Practice](tags/practices.md)**: Establishes the operational [agreements](tags/agreements.md) about how the task will be executed, what [resources](tags/resources.md) are needed, who is [responsible](tags/responsibilities.md) for completion, and how the task interfaces with other tasks and network activities.

**[Progress](tags/progress.md)**: Maintains documentation of task execution status, milestones achieved, and deliverables produced. This creates [transparency](tags/transparency.md) that enables network-wide [coordination](tags/coordination.md) and allows other participants to assess task status and identify opportunities for collaboration or dependencies.

Together, these three dimensions create comprehensive task documentation that enables tasks to function as effective [agreements](tags/agreements.md) primitives while maintaining the [transparency](tags/transparency.md) needed for network-wide [coordination](tags/coordination.md) and execution.

## Phase & Scale Considerations

Tasks are a flexible primitive that can be used across all scales, phases and timeframes in a network.

**Task Scope**: Can vary greatly depending on the goal being sought and where this occurs in the network.

**drafts/framework backup/group-scale/group-scale**: Super task vs sub task. Tasks can be used anywhere in the network. For example:

- **Constituency Scale**: At the level of community governance a high-level task containing a large project idea can be created and resourced.
- **Coordination Scale**: This could then be given to a Cell charged with operational coordination. This Cell can break the task into smaller tasks that can be given to Cells or clusters of Cells for execution.
- **Collaboration Scale**: These individual Cells can then create yet smaller sub-tasks to manage their execution of the larger piece of the super-task.

**drafts/framework backup/group-phase/group-phase**: Simple tasks may not require a phase process, however larger tasks depending on where they originate may require a phase process to evolve them through discovery, scoping, proposal, execution, completion phases.

**Timeframe**: Tasks can be finite pieces of work with strict timelines, or they can be long, ongoing projects. However, if the work is more akin to an ongoing responsibility rather than a defined task that can be planned and completed, then creating a Role, or set of Roles might be more effective than using a Task.

**Governance Target**: Unless a task is being used by an individual in their personal task management, Tasks will usually require an approval process of some sort. At the team level this could be a simple informal team approval process. But if the task is happening at higher drafts/framework backup/group-scale/group-scale and/or requires significant resources or presents other risks to the network, it will require a more robust and formal approval process. Usually some sort of proposal process will be used to approve such large tasks.

## Network Relationships

**Entity-Task Integration**: Tasks provide the operational interfaces between [Cells](artifacts/dao-primitives-framework/group-primitives/cells.md) and [DAOs](artifacts/dao-primitives-framework/group-primitives/daos.md), enabling entities to coordinate work effectively by establishing clear [agreements](tags/agreements.md) about specific deliverables, timelines, and [accountability](tags/accountability.md) across the network.

**Role-Task Coordination**: Tasks work closely with [Roles](artifacts/dao-primitives-framework/group-primitives/roles.md) to operationalize network activity - [Roles](artifacts/dao-primitives-framework/group-primitives/roles.md) defining "who" has [responsibility](tags/responsibilities.md) and [authority](tags/authorities.md), while Tasks define "what" specific [actions](tags/actions.md) and deliverables need to be accomplished to advance network [purpose](tags/purpose.md).

**Network-Wide Workflow**: Through documented task [agreements](tags/agreements.md), the network creates [transparency](tags/transparency.md) about ongoing work and dependencies that enables distributed execution while maintaining overall coherence and [accountability](tags/accountability.md).

## Implementation Patterns

**Cell-Internal Tasks**: [Cells](artifacts/dao-primitives-framework/group-primitives/cells.md) coordinate internal tasks to manage their operational activities and deliverables while maintaining clear interfaces about their work with other Cells and the broader network.

**Cross-Cell Task Workflows**: Tasks that span multiple [Cells](artifacts/dao-primitives-framework/group-primitives/cells.md) or require coordination between different network entities, enabling complex workflows without hierarchical project management structures.

**Contributor Coordination Tasks**: Tasks used by [Cells](artifacts/dao-primitives-framework/group-primitives/cells.md) to engage external contributors, often working in conjunction with [Roles](artifacts/dao-primitives-framework/group-primitives/roles.md) to create clear [agreements](tags/agreements.md) about specific contributions and deliverables.

**Network-Level Initiatives**: Tasks that coordinate activities across the broader [DAO](artifacts/dao-primitives-framework/group-primitives/daos.md) network, enabling collective action on shared objectives while preserving entity [autonomy](tags/autonomy.md) in execution approaches.

## Examples in Practice

**SuperBenefit**: Uses tasks across all scales of the DAO network to coordinate specific deliverables and actions. Tasks are documented transparently in SuperBenefit's documentation management system in Charmverse. 

---

## Related Concepts

- [Tasks](tags/tasks.md) - Comprehensive definition and usage contexts
- [Roles](artifacts/dao-primitives-framework/group-primitives/roles.md) - The complementary agreements primitive that defines "who"
- [Cells](artifacts/dao-primitives-framework/group-primitives/cells.md) - Entities that coordinate and execute tasks
- [DAOs](artifacts/dao-primitives-framework/group-primitives/daos.md) - Network entities that enable task coordination
- [Agreements](tags/agreements.md) - The broader category of relationship infrastructure
- [Actions](tags/actions.md) - The fundamental units of work that tasks coordinate
- [Coordination](tags/coordination.md) - The mechanisms through which tasks enable network alignment
- [Accountability](tags/accountability.md) - The mechanisms through which tasks create responsibility for delivery


---
title: Nucleus
description: The current result of tracking the state of a group in a public, version-controlled document
url:
author:
  - yeoro.eth
tags:
  - primitives
  - cell
  - teams
  - group-state
publish: true
type: primitive
functions:
  - governance
qualities:
  - decentralization
  - autonomy
scale:
  - collaboration
phase:
  - organization
  - coordination
  - completion
---
*Nucleus - the current result of tracking the state of a group in a public, version-controlled document*


## Nucleus Overview
For decentralized coordination using small autonomous [teams](tags/teams.md) to be successful, groups need a mechanism to capture and display a clear articulation of the group's current "state". The nucleus primitive serves this role of capturing and maintaining a group's state.

A team/group's nucleus will usually be in the form of a digital document of some sort.

** A nucleus serves 2 Primary Functions**
1. Internal coherence - a functioning nucleus ensures that there can be clarity and agreement within a team as to things like:
	- The purpose and goals of the team
	- It's relationship to other teams or entities
	- Membership of the team
	- Internal process for decision-making and resource/treasury management
	- Clarity around activities and progress
2. External coherence - an accessible and well maintained nucleus allows entities outside the team, to trust and effectively coordinate with it. The nucleus provides a mechanism for external entities to get a consistent and accessible view of the key aspects of the team (listed above), in a way that makes it easy to judge the safety/appropriateness of allocating resources, authority, partnership with them


This primitive is designed to be unopinionated as to the specific make up a particular nucleus. An individual team may design their nucleus themselves or a template may be used across an organization or network


---

## Implementing Nucleus

**A team nucleus template should cover key agreements/commitments that team members are making that relate to:**
1. Purpose/goals - the "why" of the team
2. Intentions/design - the evolving ideas about how the team will achieve it's purpose/goals
3. Team make-up - who the team members are and what roles they hold
4. Decision-making - how the team makes and records decisions
6. Resource controls - how the resources of the team are managed and protected
7. Project/progress management - how the team manages and tracks its activities
8. Team collaboration - team meetings, communication channels etc
9. Documentation systems - how the team will maintain and make accessible information that relates to the above agreements/commitments.

**Technical implementation**
In early [conversation-phase](artifacts/guides/dao-primitives-framework/group-phase/conversation-phase.md) and [formation-phase](artifacts/guides/dao-primitives-framework/group-phase/formation-phase.md) phases, a team's nucleus may be an informal emerging set of agreements. However as a team becomes established ( through [organization-phase](artifacts/guides/dao-primitives-framework/group-phase/organization-phase.md) and [coordination-phase](artifacts/guides/dao-primitives-framework/group-phase/coordination-phase.md) phases), ideally its nucleus should have several technical qualities:
1. Version controlled - an ability to track changes to the document across time
2. Access controlled - an ability to limit editing access to the document to only authorized persons
3. Accessibility - the document must be accessible to the members of community/network that the team is coordinating within





### Nucleus Implementation Patterns

%% Describe how this primitive is used in patterns here %%

```dataview
LIST description
WHERE contains(primitives, this.file.name)
AND (
    !contains(file.path, "tools/")
    AND !contains(file.path, "drafts/")
)
```

### Best Practices

Here are some guidelines for creating an effective team/group nucleus:
- **Consistency** - a nucleus template should be similar across a network to allow for efficiency and interoperability
- **Reflect values and norms of the network** - the design of a nucleus template should reflect what the community values and the practices with which these values are instantiated
- **Reflect the values and norms of the team** - autonomous teams may have their own specific values and norms that will show up in the agreements captured in the nucleus
- **Maximally transparent** - to be useful a nucleus should aim to be transparent unless there are specific reasons to keep it (or aspects of it) private
- **Minimally complicated/bureaucratic** - there needs to be an effective balancing of the collaboration/coordination value the nucleus can provide, with the cost of creating and maintaining it. Avoid the nucleus becoming bloated with unnecessary requirements and content

---

## Reviews and Case Studies

  [OpenCivics Collaborative Initiative – Specification Template](https://github.com/superbenefit/knowledge-base/blob/main/links/OpenCivics%20Collaborative%20Initiative%20%E2%80%93%20Specification%20Template.md)

[state](notes/rpp/rpp-working-docs/state.md)

State - pattern (to be created)

---

## Additional Resources


---

description

%% Introduce your note here. %%

---

%% Write the body of your note here %%

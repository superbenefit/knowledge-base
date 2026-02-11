---
group: dao-primitives
title: Circle
description: Circle, a working group structure used in sociocracy.
url: 
author:
  - yeoro.eth
tags:
  - primitives
  - teams
publish: false
type: pattern
functions:
  - governance
qualities:
  - autonomy
  - decentralization
scale:
  - collaboration
  - coordination
phase:
  - organization
  - coordination
patterns:
  - cell-working-group
  - state
---

A circle is a semi-autonomous, purpose-aligned team unit that operates through distributed decision-making using sociocratic governance principles.

%% Introduce the primitive here %%

---

## <% tp.frontmatter.title %> Overview

A circle in sociocracy is a semi-autonomous team unit that has a clear domain (area of authority) and makes its own policy decisions within that domain through consent-based governance. Circles are self-governing while maintaining connections to the broader organization through double-links - both a leader (top-down) and delegate (bottom-up) who participate in the next higher circle.

Each circle has basic roles like leader, facilitator, secretary, and delegate to handle operations and meetings. Circles operate with transparency and have the authority to make decisions that affect their domain without interference from higher circles. They can create "content roles" for specific operational work and can even form sub-circles when needed.

The structure allows circles to be both hierarchical (in terms of domain scope) and heterarchical (through double-linking), enabling both autonomy at the local level and coherent alignment across the organization. This supports the core sociocratic values of effectiveness, equivalence, and transparency.

Circles are designed to be used in organizations using a sociocratic governance and operational structure, but they can be used in many other contexts. 

 [Here](https://www.sociocracyforall.org/organizational-circle-structure-in-sociocracy/) is a more comprehensive outline of circles from the Sociocracy for All. 


Features of circles: (from https://patterns.sociocracy30.org/circle.html))
1. May be permanent or temporary
2. May be self organizing
3. Is responsible for its own development and its body of agreements [agreements](data/concepts/agreements.md)
4. Semi-autonomous:
	1. A circle’s members act within the constraints of their domain
	2. Each circle can create value autonomously
5. Self-governing - a circle’s members continuously decide together what to do to account for their domain, and set constraints on how and when things will be done.
6. Equivalence of circle members - all members of a circle are equally accountable for [governance](data/concepts/governance.md) of the circle’s domain.

---




## Implementing a <% tp.frontmatter.title %>

Below are general guidelines for setting up a circle:

1. **Identify the Circle’s Purpose and Domain**
   - Define the aim: Articulate a clear aim (purpose) that aligns with the organization’s mission.
   - Scope the domain: Determine the areas of authority, responsibilities, and decision-making power of the circle.

2. **Determine Membership Criteria**
   - Role-based membership: Select members with the necessary expertise, roles, or perspectives.
   - Balanced representation: Include diverse perspectives and competencies to ensure effectiveness.

3. **Establish Key Roles Within the Circle**
   - Facilitator: Guides meeting processes and ensures clarity in decision-making.
   - Secretary/Logkeeper: Records decisions, proposals, and meeting minutes, ensuring transparency.
   - Leader/Operations Leader: Holds operational responsibility and ensures objectives are met.
   - Delegate: Links this circle to its parent circle, facilitating two-way communication.

4. **Use a Sociocratic Selection Process for Filling Roles**
   - Nomination: Members nominate themselves or others for roles.
   - Reasons and Discussion: Each nomination is explained and discussed.
   - Consent Decision: Finalize selections when no reasoned objections remain.

5. **Integrate with the Organizational Structure**
   - Linking to the Larger System: Ensure the circle connects to higher-level circles via double-linking (leader and delegate).
   - Charter or Policy Document: Create a written statement detailing the circle’s aim, domain, and processes.

6. **Establish Decision-Making and Meeting Processes**
   - Consent Decision-Making: Make all policy decisions by consent, addressing objections collaboratively.
   - Meeting Format: Schedule regular meetings with a structured agenda (check-ins, proposals, decisions).

7. **Clarify Communication and Reporting**
   - Transparency: Maintain accessible records of decisions and policies.
   - Feedback Loops: Gather and incorporate feedback from those affected by the circle’s decisions.

8. **Launch and Ongoing Review**
   - Initial Kickoff: Conduct the first meeting, confirm roles, and affirm the circle’s aim and domain.
   - Regular Review: Periodically evaluate effectiveness and update aims, domains, memberships, or policies as needed.


### <% tp.frontmatter.title %> Implementation Patterns

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

In sociocracy, circles typically contain the following set of roles: 
1. Circle Leader: This role oversees circle operations, tracks work and commitments, ensures integration of all circle activities, and serves as the top-down link to the higher circle.
2. Facilitator: This person plans and manages meetings, collaborates with the leader on agendas, guides the decision-making process, and ensures all voices are heard in circle discussions.
3. Secretary: They take meeting minutes, make records accessible to all members, maintain circle documentation, and track circle decisions and policies.
4. Delegate: This role represents the circle in the next higher circle, provides the bottom-up link in the double-linking structure, and carries the circle's voice upward in the organization.
5. Operational Elements: The circle maintains a regular meeting schedule, operates within a defined domain and scope, follows clear decision-making protocols, and maintains documentation systems.
6. Content/Operational Roles: The circle creates specific work responsibilities as needed, assigns them to individual members based on circle needs, and ensures all roles operate within established circle policies.

---

## Implementation in Patterns

The circle primitive is used in several patterns for structuring autonomous teams:

- **[Cell State](data/resources/patterns/cell-state.md)** - Uses circle as a primitive for defining team structure and governance
- **[Cell Working Group](data/resources/patterns/cells.md)** - Cells can adopt circle (sociocratic) structure for their internal organization
- **[Operational Governance](data/resources/patterns/operational-governance.md)** - Uses sociocratic circle structures for coordinating cells

---

## Related Concepts

- [Teams](data/concepts/teams.md) - Circles are a specific type of autonomous team structure
- [Governance](data/concepts/governance.md) - Circles use consent-based governance principles
- [Coordination](data/concepts/coordination.md) - Circles coordinate through double-linking and transparent domains
- [Primitives](data/concepts/primitives.md) - Circle is a foundational organizational primitive
- [Cell State](data/resources/patterns/cell-state.md) - Pattern for documenting circle structure and agreements

---

## Reviews and Case Studies

DAO Insights: Your DAO's experiences, including challenges and benefits.
Real-World Examples: Stories of successful implementation, with an emphasis on social impact.

---

## Additional Resources

- [Sociocracy for All](https://www.sociocracyforall.org/)
- [Sociocracy 3.0 Circle Pattern](https://patterns.sociocracy30.org/circle.html)

---
title: DAO State
description: A patter for developing canonical state documentation for a DAO
tags:
  - state
  - governance
  - metagovernance
  - daos
publish: true
type: pattern
---
# DAO State

_A governance practice of maintaining a canonical record of a DAO's agreements, policies, and decision history in an accessible format, enabling transparent coordination while preserving institutional memory._

## Context

Decentralized Autonomous Organizations operate in environments of high membership fluidity, distributed authority, and asynchronous collaboration across digital spaces. Their governance evolves continuously through incremental community-driven decisions rather than centralized mandates. As organizations mature, they accumulate a growing body of governance decisions and practices that define how they function. These range from foundational documents like constitutions and operating agreements to everyday policies and proposal outcomes that guide operational activities.

This pattern applies to DAOs of all types seeking to maintain clarity and continuity in their governance as they scale and evolve. It is particularly valuable for organizations with distributed leadership, multiple working groups, or those transitioning from informal to more structured governance systems. The pattern becomes increasingly important as a DAO's membership grows, governance complexity increases, or when the organization needs to maintain alignment across multiple domains of activity operating with appropriate autonomy.

## Challenges

Without a systematic approach to governance documentation, DAOs struggle with several persistent problems:

**Information fragmentation** occurs when governance documentation scatters across platforms—Discord, forums, documents, and recordings. This makes it difficult to locate authoritative information, leading to confusion and inconsistent application of policies.

**Institutional memory erosion** happens as context and history fade when members come and go. Without preserved decision history, new members lack understanding of existing structures, while veterans may reference outdated agreements.

**Governance complexity barriers** emerge as organizations mature and governance systems become more sophisticated. Understanding governance and proposing changes becomes increasingly difficult, especially for newer members without extensive context or those with different accessibility needs.

**Coordination friction** develops when different parts of the organization operate with unclear boundaries. Without documented authority distribution and inter-group interfaces, DAOs experience ineffective collaboration and duplicated efforts.

**Limited tooling integration** prevents DAOs from leveraging technology to enhance governance. Without structured, machine-readable governance documentation, DAOs cannot effectively utilize AI assistants, automation tools, translation services, or other augmentative technologies that could improve participation, reduce coordination costs, and make governance more accessible across languages and abilities.

## Solution

The DAO State pattern establishes a systematic practice of documenting and maintaining the authoritative source of truth for the organization's current governance state. This practice involves tracking and maintaining accessible records of governance information relevant to the DAO's specific context and needs.

A DAO State can include any information related to governance that expresses the current state of the organization. While the specific content will vary based on each DAO's unique requirements, common categories of governance documentation might include:

**Agreements** that define relationships between participants, such as community guidelines, membership terms, or operating agreements. These might establish shared expectations and create social contracts that enable coordinated action.

**Policies** that guide operational activities across various domains, potentially covering decision-making frameworks, resource allocation procedures, or platform usage guidelines.

**Proposals and decisions** that record governance choices and their outcomes, providing historical context and precedents for future decision-making.

**Roles and responsibilities** that clarify who has authority in different domains and what obligations come with various positions within the organization.

**Processes and procedures** that document recurring workflows, from onboarding new members to allocating resources or resolving disputes.

The DAO State is fundamentally about maintaining clarity about how governance currently functions, not about enforcing a particular structure or set of documents. The specific content and organization should reflect the DAO's governance model, scale, and complexity.

What makes this pattern effective is the intentional practice of documenting governance in a way that creates transparency, accessibility, and continuity. By maintaining an authoritative record of current governance structures and decisions, DAOs enable more effective coordination and preserve institutional knowledge as membership evolves.

## Implementation Considerations

Implementing the DAO State pattern effectively requires attention to several key factors:

**Documentation structure and organization** should balance comprehensiveness with navigability. The core structure typically follows a pattern of three main categories—agreements, policies, and proposals—with subcategories reflecting different domains of governance. Each section should contain narrative explanations that help users understand the purpose and context of that governance domain, not just isolated documents.

**Implementation approaches** can vary based on a DAO's specific needs and technical capacity. Common implementations include version-controlled repositories (like Git), wiki systems, document management platforms, or purpose-built governance tools. Some DAOs combine on-chain governance records with off-chain explanations. The key requirement is that the implementation supports transparency, traceability of changes, and accessibility to all members.

**Content development approach** significantly affects the usability and maintenance of the DAO State. Prioritize narrative explanations over excessive structural elements, writing in flowing paragraphs that develop ideas fully rather than relying on bullet points and nested headers. Frame documentation as coordination infrastructure rather than rules, focusing on enabling effective collaboration rather than controlling behavior. Write in clear language that avoids jargon and unnecessary complexity.

**Evolution processes** determine how the DAO State itself changes over time. Modifications to the DAO State should follow the same governance processes used for other decisions, creating accountability and transparency. The processes should be proportional to the significance of the change—minor clarifications might use lightweight processes, while fundamental changes to agreements require more extensive deliberation. Each governance domain should maintain appropriate independence in evolving its documentation, while respecting interfaces with other domains.

**Change tracking** is essential regardless of implementation approach. Whether through formal version control systems, change logs, or other mechanisms, the DAO State should enable members to understand how governance has evolved over time, who proposed changes, and the rationale behind modifications. This historical context is crucial for maintaining continuity as membership changes.

**Onboarding and literacy** around the DAO State is crucial for its effectiveness. Develop clear pathways for new members to understand how to navigate and use the governance documentation. Consider creating orientation materials that explain the structure and purpose of different documentation types. Highlight the DAO State during onboarding to establish it as the authoritative source for governance information from the beginning.

**Potential risks** include maintenance overhead, divergence between documented and actual practices, accessibility challenges for less technical members, and over-documentation that leads to excessive formalization. Mitigate these by establishing clear maintenance responsibilities, regularly reviewing alignment between documentation and practice, providing multiple access points to governance information, and focusing on practical utility over comprehensive documentation for its own sake.

## References and Resources

- [Metagov Constitutions Project](https://constitutions.metagov.org/) - Research on constitutional documents for digital communities
- [Git for Governance](https://medium.com/commonsstack/git-for-governance-46d6d88bed9f) - Article on using Git for DAO governance
- [Aragon DAO Documentation](https://aragon.org/dao) - Examples of structured governance documentation
- [Austin Griffith's "The Git of Dao"](https://medium.com/@austin_48503/the-git-of-dao-2aedba8fb6bd) - Conceptual exploration of version control for DAOs

### Examples

The **All In For Sport DAO** maintains a comprehensive state repository at [state.allinforsport.org](https://state.allinforsport.org/) that exemplifies this pattern in practice. Their repository organizes governance documentation into clear categories while providing narrative explanations that help new members understand not just what the rules are, but why they exist and how they evolve.

**SuperBenefit's governance repository** implements this pattern with domain-specific adaptations, demonstrating how the pattern can be customized to reflect a DAO's unique culture and organizing methodology. Their implementation emphasizes the relationship between community agreements and operational structures.

**Colony's Governance Documentation** applies elements of this pattern with particular attention to technical implementation details, offering a complementary example for DAOs with significant on-chain governance components.

### Related Patterns

**Constitution Pattern** often provides the foundational agreement that sits at the core of a DAO State. While the Constitution establishes the fundamental principles and values, the DAO State integrates this document into a comprehensive governance framework that includes operational details and historical context.

**Operating Agreement Pattern** may provide the legal framework referenced in the DAO State. The Operating Agreement typically addresses legal and formal organizational questions, while the DAO State encompasses both formal and informal governance practices.

**Policy Domain Pattern** provides organizing principles for policy development within a DAO State. This pattern helps determine appropriate boundaries between different areas of governance authority, supporting the distributed maintenance approach of the DAO State.

---

### Supporting Primitives

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
        .map(p => 
            `**[${p.title}**`,  
            p.description
        ])
);
```

### Case Studies

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
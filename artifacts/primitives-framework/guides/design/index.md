

**Design [Governance](tags/governance.md) & Operational Structures**

Translate discovery insights into concrete governance and operational structures. Move from broad stakeholder alignment to specific organizational architecture, balancing technical requirements with human dynamics.

> **Note**: Design uses organizational **patterns** (DAOs, Cells, Roles, Tasks) as structural building blocks. During implementation, you'll select technical **primitives** (smart contracts, governance protocols, tools) to realize these patterns.

## 1. Define Purpose and High-Level Goals

### Activity: Purpose Statement Development

- Gather key stakeholders to define essential [purpose](tags/purpose.md)
- Identify values that [governance](tags/governance.md) must uphold
- Document high-level goals for governance structure
- Create impact model if needed

## 2. Map Governance and Operational Requirements

### Activity: Requirements Mapping

Define the overarching parameters of your [governance](tags/governance.md) and operational system based on the discovery report. Identify requirements emerging from articulated [purpose](tags/purpose.md), stakeholder needs, planned activities, and operational constraints.

Map requirements to bridge discovery insights with specific design choices. Clear requirements prevent defaulting to familiar-but-unsuitable patterns or paralysis from overwhelming options.

### Governance Requirements

The [governance](tags/governance.md) system must be designed to handle the specific [decision-making](tags/decisions.md) needs and stakeholder dynamics that emerged during discovery:

- **Decision Scope**: What types of decisions need formal governance processes versus informal [coordination](tags/coordination.md)
- **Stakeholder Inclusion**: Who needs representation in governance and at what level of engagement
- **Scale Considerations**: What different group scales need to be included and how they interface
- **Time Horizons**: What timeframes governance must address (immediate operations vs. long-term strategy)
- **Resource Management**: What [resources](tags/resources.md) governance will oversee and how allocation decisions get made
- **Technical Constraints**: What factors shape implementation possibilities (existing systems, technical capacity, budget limitations)

### Operational Requirements

The operational structure must support the group's ability to execute on its [purpose](tags/purpose.md) while maintaining the autonomy and [coordination](tags/coordination.md) patterns that stakeholders value:

- **Core Activities**: How the group will operationalize its purpose to achieve stated goals
- **Autonomy Levels**: The degree of decentralization of authority and [responsibilities](tags/responsibilities.md) needed for operations to succeed
- **Information Systems**: How information needs to flow through the operational structure for effective [coordination](tags/coordination.md)

For small teams with a clear mandate, this requirements mapping can often be completed in focused working sessions. However, for more complex groups involving multiple stakeholder types or scales, this process may require additional engagement and insights gathering from across the [network](tags/networks.md) to ensure all perspectives are captured and integrated.

## 3. Design the Governance & Operational Model

### 1. Choose a Governance Approach

Based on the articulated [purpose](tags/purpose.md) and mapped requirements, the design team must narrow in on a particular [governance](tags/governance.md) approach from the many available options for decentralized governance. The [tags/community-governance](tags/community-governance.md) pattern outlines several approaches worth considering, but the choice will depend on multiple factors including the specific needs of the group, the nature of their work, and the structure and culture of existing [networks](tags/networks.md) they coordinate with.

The discovery phase should have surfaced key insights into what qualities the group wants from its governance approach—whether they prioritize maximally decentralized [decision-making](tags/decisions.md), trust and capture resistance, technical sophistication, or other values. These insights become crucial selection criteria when evaluating governance options.

Review the [dao-primitives framework](artifacts/primitives-framework/facilitation/concepts/concepts.md) along with [index](notes/dao-primitives/implementation/patterns/index.md) and [index](notes/dao-primitives/implementation/case-studies/index.md) to guide the group toward settling on a governance approach that matches their outlined requirements rather than defaulting to popular or familiar options that may not fit their context.

### 2. Agents and Agreements

The Primitives Framework provides four basic organizational patterns that offer a flexible system for [governance](tags/governance.md) design. These building blocks are designed so governance and operational patterns can be applied to them to compose bespoke yet coherent governance structures that deliver the governance qualities a group desires.



### 3. Pattern Selection

Based on the chosen [governance](tags/governance.md) approach, the design team builds out a complete governance and operational model by selecting patterns best suited to delivering the desired functionality. This selection process requires balancing multiple considerations: the group's current capacity, their growth projections, the complexity they can manage, and the specific [coordination](tags/coordination.md) challenges they face.

Governance and operational patterns can be found in [index](notes/dao-primitives/implementation/patterns/index.md). Facilitators should help the group select patterns that work effectively in conjunction with the chosen organizational building blocks (DAOs, Cells, Roles & Tasks) to create a governance and operational system that functions as intended rather than creating elegant structures that fail in practice.

#### Core Organizational Patterns

Using organizational patterns as building blocks:

- **[DAOs](tags/daos.md)**: Entity structure for purpose-aligned [networks](tags/networks.md)
- **[Cells](tags/cells.md)**: Entity structure for small autonomous teams
- **[Roles](tags/roles.md)**: Agreement pattern for ongoing [responsibilities](tags/responsibilities.md) and permissions
- **[Tasks](tags/tasks.md)**: Agreement pattern for specific work deliverables

> **Note**: These are organizational patterns (structural building blocks), distinct from technical primitives (implementation tools like smart contracts, tokens, governance protocols) that you'll select during implementation.

The design process involves determining which combination of these patterns will best serve the group's requirements, then identifying specific approaches for how to compose them into functional structures. Examples of using these patterns to compose governance and operational models can be found in [index](notes/dao-primitives/implementation/case-studies/index.md), including case studies like [artifacts/primitives-framework/studies/rpp-governance-case-study](artifacts/primitives-framework/studies/rpp-governance-case-study.md).

### 4. Feedback and Approval

Meaningful participation from all group stakeholders in deciding on [governance](tags/governance.md) and operational design is essential for both quality outcomes and system legitimacy. For large, complex groups, this participation must be orchestrated across multiple scales to balance broad input with design coherence:

1. **Collaboration Scale**: The team tasked with governance design needs internal processes for evaluating ideas and making design [decisions](tags/decisions.md)
2. **Coordination Scale**: Larger groups of highly engaged individuals can participate through feedback processes, workshops, and other [coordination](tags/coordination.md) mechanisms
3. **Constituency Scale**: Wider [communities](tags/community.md) of stakeholders can engage through preference signaling and voting mechanisms

Managing engagement across different scales ensures the design process benefits from broad [community](tags/community.md) intelligence while preventing the tyranny of structurelessness from derailing effective [decision-making](tags/decisions.md). The goal is to harness collective wisdom without allowing the design process to devolve into protracted politics.

### 5. Design Proposal

The design phase should conclude with a clear proposal that confirms the [governance](tags/governance.md) and operational model. For small groups, this might take the form of an internal decision recorded in the group's state document. For larger, more complex groups, this typically requires a formal [community](tags/community.md) proposal process.

It's crucial that any proposal clearly describes the governance design in sufficient detail that stakeholders understand exactly what they're approving. Vague or overly abstract proposals often lead to implementation conflicts when different participants discover they had different interpretations of what was agreed upon.
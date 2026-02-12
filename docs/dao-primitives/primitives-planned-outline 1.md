---
group: dao-primitives
type: note
title: DAO Primitives Content
publish: false
---

# DAO Primitives Content

This outline catalogs the DAO Primitives framework—a systems-based approach for conceptualizing and implementing web3-enabled coordination in networked organizations. The framework distinguishes between **organizational elements** (conceptual entities and agreements like DAOs, Cells, Roles, and Tasks) and **DAO primitives** (technical implementation tools like Safe, Hats, Aragon, and Snapshot). It guides organizations through a progression from understanding their organizational territory, to mapping their structure qualitatively, to formalizing that structure as a digital twin (organizational graph) using appropriate DAO primitives.

The content is organized into four sections that follow a natural user journey: **Framework Foundation** (understand concepts), **Implementation Resources** (apply in practice), **Learning from Practice** (explore real examples), and **Reference & Integration** (quick lookups and organizational connections). Status indicators mark published content (✅), substantial unpublished content (⚠️), and identified gaps (**To-Do**). This catalog reflects 44 resources across framework documentation, implementation guides, patterns, articles, and case studies.

**Note on paths:** All file paths are shown relative to the knowledge base root directory unless otherwise specified.

---

### 1. Framework Foundation

This section establishes the conceptual building blocks of the DAO Primitives framework. It guides users through understanding how organizations work at different scales and phases, introduces the core organizational elements (DAOs, Cells, Roles, and Tasks), and explains how these elements can be documented as organizational maps and formalized as digital twins (organizational graphs). Start here to develop a systems-based understanding before moving into implementation.

#### 1.1 Framework Overview

These documents provide the primary entry points into the DAO Primitives framework, offering both a navigation hub and comprehensive framework documentation.

**DAO Primitives Index** ✅ Published
- Path: `notes/dao-primitives/index.md`
- Purpose: Primary navigation hub for the framework
- Covers: Scale, Phase, State dimensional lenses; organizational elements (DAOs/Cells/Roles/Tasks)
- Note: Update terminology from "primitives" to "elements"

**DAO Primitives Framework Guide** ✅ Published
- Path: `artifacts/guides/dao-primitives-framework/index.md`
- Purpose: Comprehensive framework document
- Covers: Dimensional lenses + organizational elements as integrated system
- Note: Update terminology from "primitives" to "elements"

#### 1.2 Key Organizational Views

These three conceptual lenses help you understand and design organizations by examining their phase of development, scale of operation, and the state they maintain. Together, they provide a multi-dimensional view that reveals appropriate organizational structures and governance approaches.

**Group Phase** ✅ Published
- Path: `artifacts/guides/dao-primitives-framework/group-phase/index.md`
- Five phases: Conversation → Formation → Organization → Coordination → Completion
- Helps identify where a group is in its lifecycle and what structures it needs

**Group Scale** ✅ Published
- Path: `artifacts/guides/dao-primitives-framework/group-scale/index.md`
- Four scales: Collaboration (<10), Coordination (10-150), Constituency (large groups), Network (interconnected orgs)
- Guides selection of appropriate governance and coordination mechanisms

**Group State** ✅ Published
- Path: `docs/dao-primitives/primitives-framework/concepts/group-state.md`
- Purpose/Practice/Progress structure for organizational identity and coherence
- Provides template for documenting organizational information

#### 1.3 Organizational Building Blocks

These are the fundamental elements used to design and build decentralized organizations. Entities (DAOs and Cells) represent organizational units, while Agreements (Roles and Tasks) define relationships and work. Understanding these building blocks allows you to map existing organizational structures and design new ones intentionally.

**Organizational Elements Overview** ✅ Published
- Path: `notes/dao-primitives/group-primitives/index.md`
- Currently titled "Group Primitives" → update to "Organizational Elements"
- Entities: DAOs, Cells (and agents)
- Agreements: Roles, Tasks
- Bridge: Elements are documented in organizational maps and formalized in organizational graphs

**DAOs (Entity)** ✅ Published
- Path: `notes/dao-primitives/group-primitives/daos.md`
- Highest-scale organizational entity
- Covers: DAO State, phase evolution, multi-scale operation, network relationships
- Examples: AIFS, RPP
- Note: Update "primitive" to "entity"

**Cells (Entity)** ⚠️ UNPUBLISHED
- Path: `notes/dao-primitives/group-primitives/cells.md`
- Small autonomous teams (3-8 people) as basic organizational units
- Covers: Cell State, formation patterns, operationalization
- Status: Published-quality content, currently `publish: false`
- Note: Update "primitive" to "entity"

**Roles (Agreement)** ✅ Published
- Path: `notes/dao-primitives/group-primitives/roles.md`
- Agreement infrastructure defining relationships (graph edges)
- Covers: Role State, implementation patterns
- Examples: Hats Protocol implementation
- Note: Update "primitive" to "agreement"

**Tasks (Agreement)** ✅ Published
- Path: `notes/dao-primitives/group-primitives/tasks.md`
- Complements Roles (what vs. who)
- Covers: Task State, multi-scale implementation
- Note: Update "primitive" to "agreement"

**Implementation note:** When formalizing organizational elements into a graph, users select appropriate DAO primitives (Safe, Hats, Aragon, etc.) to implement the digital twin.

---

### 2. Implementation Resources

This section provides practical tools and guides for applying the DAO Primitives framework in real organizations. It includes governance implementation guides for different organizational scales, facilitation tools for mapping and designing organizational structures, and reusable patterns that solve common coordination challenges. Use these resources when you're ready to move from understanding to action.

#### 2.1 Governance Implementation Guides

These guides provide detailed approaches to governance at different organizational scales, from small collaborative teams to large constituency-based communities. Each guide addresses the specific challenges and opportunities that emerge at its scale.

All published, located in `implementation/guides/governance/`

**Community Governance** ✅ Published
- Path: `implementation/guides/governance/implementation-guide-community-governance.md`
- Covers: Token-based, reputation, delegated, council, sortition, consent, quadratic models
- Use when: Designing governance for large stakeholder groups

**Multi-Stakeholder Governance** ✅ Published
- Path: `implementation/guides/governance/implementation-guide-multi-stakeholder-governance.md`
- Covers: Three-layer structure, optimistic governance, stakeholder stewardship vs operational autonomy
- Use when: Balancing multiple stakeholder interests with operational flexibility

**Operational Governance** ✅ Published
- Path: `implementation/guides/governance/implementation-guide-operational-governance.md`
- Covers: Networks of small autonomous teams, decentralized decision-making, permissionless innovation
- Use when: Coordinating execution across autonomous teams

**Gaps to note:**
- **Scalar organizational guides** (To-Do) - guides for each scale level
- **High-level systems guide** (To-Do) - overarching systems thinking

#### 2.2 Facilitation Tools

These tools support facilitators and teams in discovering their organizational territory, mapping their current structures, and designing new coordination approaches. They bridge conceptual understanding with practical organizational design work.

**Group Facilitation Guide** ✅ Published
- Path: `artifacts/guides/group-facilitation.md`
- Three phases: Discovery (mapping), Design (graph formalization), Implementation (primitive selection)
- Bridges conceptual framework to implementation
- Guides teams from organizational territory to digital twin

**Sense-Making Facilitation Tools** ⚠️ UNPUBLISHED
- Path: `implementation/guides/sense-making-facilitation-tools.md`
- Purpose: Support organizational mapping and discovery
- Includes: Causal Layered Analysis, Estuarine Mapping, Theory U, Liberating Structures, Value Flow Compass
- Status: No publish field set

**Group State Template** ⚠️ UNPUBLISHED
- Path: `notes/dao-primitives/resources/templates/group-state-template.md`
- Purpose: Practical template for documenting organizational maps
- Structure: Purpose/Practice/Progress with detailed prompts
- Use: Document organizational elements before formalizing into graph

#### 2.3 Patterns Library

Patterns are reusable solutions to common organizational challenges. Each pattern addresses specific coordination problems and can be adapted to different contexts. They provide tested approaches that have worked in real organizations.

**Published:**

**DAO State Pattern** ✅ Published
- Path: `implementation/patterns/dao-patterns/dao-state.md`
- Purpose: Canonical record of agreements, policies, decisions (organizational graph as digital twin)
- Addresses: Information fragmentation, memory erosion, governance complexity

**Unpublished (substantial content):**

**Circle Pattern** ⚠️ Unpublished
- Path: `implementation/patterns/collaboration-scale-patterns/circle.md`
- Semi-autonomous team using sociocratic governance
- Features: Double-links, consent-based decisions

**Nucleus Pattern** ⚠️ Unpublished
- Path: `implementation/patterns/collaboration-scale-patterns/nucleus.md`
- Public, version-controlled group state document
- Purpose: Internal/external coherence

**Decision Log Pattern** ⚠️ Unpublished
- Path: `implementation/patterns/collaboration-scale-patterns/decision-log.md`
- Template for decision tracking (content in development)

---

### 3. Learning from Practice

This section provides both theoretical foundations and empirical evidence from real-world applications of the DAO Primitives framework. The articles explore the conceptual underpinnings of DAOs as networked systems, while the case studies document actual implementations showing what works, what's challenging, and what patterns emerge in practice.

#### 3.1 Network Evolution Series

This article series develops the theoretical foundations of the DAO Primitives framework, exploring how DAOs function as networked systems rather than traditional organizations. The articles build on each other to present a comprehensive vision of scalable, permissionless coordination.

**Series Index** ✅ Published
- Path: `artifacts/dao-primitives-framework/network-evolution/index.md`
- 6 published articles exploring DAOs as networked systems
- By Rowan Yeoman with community contributions

**Article 1: DAOs aren't things... they are flows** ✅
- Path: `artifacts/dao-primitives-framework/network-evolution/daos-arent-things-they-are-flows.md`
- Foundational: DAOs as "centerless networks with coordinated flows"
- Introduces: Fractal DAO design, "DAO" as verb (DAOing)

**Article 2: Scale and the levers that provide DAOs their power** ✅
- Path: `artifacts/dao-primitives-framework/network-evolution/scale-and-the-levers-that-provide-daos-their-power.md`
- Explores: Sub-linear scaling (efficiency) vs super-linear scaling (innovation)
- Draws on: Geoffrey West's scaling laws
- Positions: DAOs as network economies like cities

**Article 3: DAOs - From fractal primitives to network scale** ✅
- Path: `artifacts/dao-primitives-framework/network-evolution/daos-from-fractal-primitives-to-network-scale.md`
- Introduces: Cells as fractal network building blocks
- Explains: Scaling hierarchies (operations) vs creative networks (innovation)

**Article 4: Minimum Viable Permissionless-ness** ✅
- Path: `artifacts/dao-primitives-framework/network-evolution/minimum-viable-permissionless-ness.md`
- Defines three essential features: freedom to work, ability to attract others, right to propose
- Distinguishes: Permissionless access vs resource access

**Article 5: Building DAOs as scalable networks** ✅
- Path: `artifacts/dao-primitives-framework/network-evolution/building-daos-as-scalable-networks.md`
- Proposes: Two-house governance (Community + Operational)
- Covers: Two-stage evolution including UNA legal structure

**Gap:**
- **Primitives Framework release post** (To-Do)

#### 3.2 Case Studies

These case studies document real implementations of the DAO Primitives framework across different contexts and organizational types. They show how the concepts translate into practice, reveal emergent patterns, and highlight both successes and ongoing challenges.

**All In For Sport (AIFS)** ✅ Published
- Path: `docs/rpp/aifs-experiment-case-study.md`
- Context: NFT project → coordi-nation via RPP (Aug 2024 - Mar 2025)
- Scale: 111 participants across gatherings series
- Demonstrates: Cell entities, operational/community governance, Group State as organizational graph
- Outcomes: Identity clarity, partnerships (Women Win, IOC Tech365), governance transformation (AIFSIP-04)
- Challenges: Sustainable funding for coordination work

**Institute for Community Sustainability (ICS)** ✅ Published
- Path: `docs/rpp/ics-experiment-case-study.md`
- Context: London Ontario nonprofit, Jan-July 2025
- Demonstrates: Token-based governance, multistakeholder patterns, DAO entities, role agreements, local nodes
- Findings: 6-18 month adoption timeline, importance of enjoyment/accessibility
- Pattern: "Opportunistic Adoption" emerged
- Achievement: Top 10% in Gitcoin Grants Round 23

**Reimagining Power Project (RPP) Governance Design** ✅ Published
- Path: `artifacts/studies/projects/rpp-governance-case-study.md`
- Context: RPP applying framework to own governance
- Structure: Multi-stakeholder model with layered structure (Community Governance → Stakeholder Group → Core Team Cell → Operational Cells/Playbooks Cell)
- Demonstrates: Cell entities, role/task agreements, full governance stack, progression from mapping to graph formalization
- Includes: Governance structure diagram, stakeholder feedback
- Outcomes: Cross-org collaboration, transparent resource management
- Challenges: Stabilization time, stakeholder engagement calibration, technical complexity

---

### 4. Reference & Integration

This section provides quick-reference materials and guidance on how the DAO Primitives framework integrates with SuperBenefit's broader ecosystem of practices and services. Use this section when you need to quickly look up definitions, find technical implementation tools, or understand how DAO Primitives connects to other SuperBenefit offerings.

#### 4.1 Reference Library

Quick-reference materials for looking up definitions, finding technical tools, and accessing external resources on organizational design and web3 coordination.

**Gaps (To-Do):**
- **Organizational Elements quick reference** - Condensed definitions of entities and agreements, relationships, territory → map → graph progression
- **DAO Primitives catalog** - Technical implementation tools (Safe, Hats, Aragon, Snapshot) and how they map to organizational graph requirements
- **External links** - Curated resources on organizational design, network theory, web3 coordination

#### 4.2 Using DAO Primitives with SuperBenefit

Guidance on how the DAO Primitives framework integrates with SuperBenefit's other practices, service offerings, and release structure.

**Gaps (To-Do):**
- **Releases Integration Guide** - How DAO Primitives fits into SuperBenefit release structure
- **Strategic/Services Integration Guide** - How primitives connect to SuperBenefit's consulting and service offerings

#### 4.3 Meta Documentation

Technical documentation for knowledge base maintenance and management (not public-facing).

- **Readme** (hidden) - Technical documentation for knowledge base maintenance

---

**Related:**
- **Releases Specification** & adoption plan for DAO Primitives

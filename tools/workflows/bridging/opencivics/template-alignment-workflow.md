# Template Alignment Recommendations: SuperBenefit & OpenCivics Protocol Pattern Language

## Executive Summary

Based on analysis of the OpenCivics Protocol Pattern Language and SuperBenefit's current template structure, I recommend creating a **Protocol type and template** that aligns with OpenCivics' operational approach while maintaining SuperBenefit's cultural framework. This involves enhancing the current pattern template, creating a dedicated protocol template, making minor playbook template adjustments, and providing guidance for transitioning some primitive content to protocol format.

---

## Key Alignment Points

### Current Strong Alignments
- **Patterns**: Both systems share very similar conceptual understanding
- **Playbooks**: Both provide comprehensive implementation guidance
- **Group Development**: Both incorporate developmental approaches (SuperBenefit's group phases vs OpenCivics' lifecycle)

### Primary Gaps to Address
- **Protocol Emphasis**: OpenCivics treats protocols as fundamental operational mechanisms; SuperBenefit currently treats them as secondary to patterns
- **Primitive Balance**: SuperBenefit's heavy primitive focus needs rebalancing toward OpenCivics' protocol-centric approach
- **Operational Detail**: OpenCivics protocols contain much more operational specificity than SuperBenefit currently captures

---

## Recommendation 1: Create New Protocol Type and Template

### New Protocol Type Definition

Create `/tools/types/protocol.md` with the following characteristics:

```yaml
---
limit: 40
mapWithTag: true
icon: settings
tagNames:
  - protocols
filesPaths:
  - artifacts/protocols
  - notes/protocols
bookmarksGroups: 
excludes: 
extends: artifact
savedViews: []
favoriteView: 
fieldsOrder: []
version: "1.0"
fields:
  - name: category
    type: Multi
    options:
      valuesList:
        - "membership"
        - "membranes" 
        - "decision-making"
        - "sensemaking"
        - "coordination"
        - "resource-allocation"
        - "learning"
        - "culture"
---
```

### New Protocol Template

Create `/tools/templates/protocol.md` following OpenCivics' detailed operational approach:

```markdown
---
title: 
description: 
url: 
tags:
  - protocols
publish: "false"
type: protocol
category: 
---

# <% tp.frontmatter.title || "Protocol Name" %>

_<% tp.frontmatter.description || "A detailed operational mechanism that defines specific steps, roles, and interactions required to achieve consistent coordination outcomes." %>_

## Context

%% Describe the coordination challenges this protocol addresses. Focus on the specific operational environment where standardized procedures are needed. Include types of organizations, teams, or networks that benefit from this operational consistency. %%

## Operational Mechanism

%% Define the specific steps, procedures, and interactions that constitute this protocol. This is the core operational section that should include:
- Clear step-by-step procedures
- Defined roles and responsibilities
- Required inputs and expected outputs
- Decision points and criteria
- Interaction patterns between participants %%

### Protocol Categories

%% Choose and develop the relevant categories from OpenCivics' framework: %%

#### Membership Protocols (if applicable)
- **Join Conditions**: Requirements for participation
- **Exit Conditions**: Process for leaving
- **Participation Conditions**: Ongoing expectations
- **Roles**: Defined roles within the protocol

#### Membrane Protocols (if applicable)
- **Boundaries**: What's inside/outside the protocol scope
- **Permeability**: How information/resources flow across boundaries
- **Interface Standards**: How this protocol connects with others

#### Decision-Making Protocols (if applicable)
- **Decision Types**: What kinds of decisions this protocol governs
- **Decision Makers**: Who has authority for different decisions
- **Decision Process**: Step-by-step procedure for making decisions
- **Approval Mechanisms**: How decisions are validated and implemented

#### Sensemaking Protocols (if applicable)
- **Information Gathering**: How relevant information is collected
- **Analysis Process**: Methods for interpreting information
- **Pattern Recognition**: Approaches for identifying trends or opportunities
- **Context Integration**: How local knowledge is incorporated

#### Coordination Protocols (if applicable)
- **Communication Patterns**: How information flows between participants
- **Synchronization Points**: When coordination occurs
- **Handoff Procedures**: How work transitions between participants
- **Conflict Resolution**: How coordination conflicts are addressed

#### Resource Allocation Protocols (if applicable)
- **Resource Types**: What resources this protocol governs
- **Allocation Criteria**: Decision principles for resource distribution
- **Request Process**: How resource needs are communicated
- **Distribution Mechanisms**: How resources are actually transferred

#### Learning Protocols (if applicable)
- **Knowledge Capture**: How insights are documented
- **Reflection Process**: Regular review and learning cycles
- **Knowledge Sharing**: How learning is distributed
- **Protocol Evolution**: How the protocol itself improves over time

#### Culture Protocols (if applicable)
- **Values Integration**: How values are expressed through this protocol
- **Behavioral Norms**: Expected patterns of interaction
- **Accountability Mechanisms**: How adherence is maintained
- **Cultural Evolution**: How culture shapes and is shaped by this protocol

## Implementation Considerations

%% Provide practical guidance for implementing this protocol, including: %%

### Technical Requirements
%% Any tools, platforms, or technical infrastructure needed %%

### Social Requirements  
%% Communication patterns, training needs, cultural prerequisites %%

### Integration Points
%% How this protocol connects with other protocols or organizational systems %%

### Adaptation Guidelines
%% How the protocol can be customized while maintaining its core function %%

### Success Indicators
%% How to measure effective protocol implementation %%

## References and Resources

%% List relevant documentation, tools, templates, or training materials that support protocol implementation %%

### Examples

%% Provide concrete examples of this protocol in practice, showing how the operational mechanism functions in real contexts %%

### Related Protocols

%% Connect to other protocols that complement, depend on, or interface with this one %%

---

### Supporting Primitives

[Include SuperBenefit's existing primitive query system]

### Case Studies

[Include SuperBenefit's existing case study query system]

<!-- Bridge Notes: This protocol template aligns with OpenCivics' operational approach while maintaining SuperBenefit's knowledge garden structure. The detailed operational categories ensure protocols capture the necessary procedural specificity for effective coordination. -->
```

---

## Recommendation 2: Enhance Pattern Template

### Updated Pattern Template

Modify `/tools/templates/pattern.md` to better align with OpenCivics while maintaining SuperBenefit's approach:

```markdown
---
title: 
description: 
url: 
tags:
  - patterns
publish: "false"
type: pattern
protocols: # NEW: Link to supporting protocols
---

# <% tp.frontmatter.title || "Pattern Name" %>

_<% tp.frontmatter.description || "A conceptual framework that provides reusable solutions to common challenges in decentralized organization design and governance." %>_

## Context

%% Describe the environments or situations where this pattern applies. Include types of organizations, networks, or communities that might benefit from this pattern, emphasizing the broader organizational context beyond specific operational procedures. %%

## Challenges

%% Identify the specific organizational challenges this pattern addresses. Focus on systemic issues, coordination problems, or design challenges that require conceptual solutions rather than step-by-step procedures. %%

## Solution Framework

%% Explain the conceptual approach this pattern provides. Describe the key principles, mechanisms, and components that make this pattern effective. This should be more strategic and less procedural than protocol documentation. %%

## Implementation Considerations

%% Provide guidance for applying this pattern across different contexts: %%

### Governance Implications
%% How this pattern affects decision-making and authority structures %%

### Cultural Factors  
%% How organizational culture shapes pattern implementation %%

### Technical Integration
%% How this pattern interfaces with tools and technical systems %%

### Scale Adaptations
%% How the pattern functions differently at various organizational scales %%

### Protocol Dependencies
%% What operational protocols are needed to implement this pattern effectively %%

## References and Resources

%% List relevant documentation, articles, research, tools, or templates %%

### Examples

%% Provide examples showing this pattern's application across different contexts %%

### Related Patterns

%% Connect to complementary or contrasting patterns %%

---

### Supporting Protocols

```dataviewjs
// New query to show related protocols
dv.table(
    ["Protocol", "Description"],
    dv.pages()
        .where(p => 
            p.type === "protocol" &&
            dv.current().protocols && dv.current().protocols.includes(p.file.name) &&
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

### Supporting Primitives

[Existing primitive query - unchanged]

### Case Studies

[Existing case study query - unchanged]
```

---

## Recommendation 3: Minor Playbook Template Enhancement

### Enhanced Playbook Template

Add group phase integration to `/tools/templates/playbook.md`:

```markdown
# [Add to existing Context & Orientation section]

### Group Phase Considerations
%% 
Consider how this playbook applies across SuperBenefit's group development phases:
- **Conversation Phase**: How to explore and refine the ideas underlying this playbook
- **Formation Phase**: Initial structure and agreements needed to begin implementation
- **Organization Phase**: Full operational implementation with established processes
- **Coordination Phase**: Mature execution and integration with broader networks
- **Completion Phase**: How to appropriately conclude or evolve implementations
%%

# [Add to existing Implementation Guide section]

### Group Phase-Based Implementation

#### Conversation Phase Implementation
%% Guidance for exploring and refining the ideas during initial discussions %%

#### Formation Phase Implementation
%% Guidance for establishing basic structure and commitments to begin implementation %%

#### Organization Phase Implementation
%% Guidance for implementing full operational structures and processes %%

#### Coordination Phase Implementation
%% Guidance for mature execution and network integration %%

#### Completion Phase Implementation
%% Guidance for appropriately concluding, transferring, or evolving implementations %%
```

---

## Recommendation 4: Primitive Rebalancing Strategy

### Identification Process

**Create evaluation criteria** for determining when content should be protocol vs. primitive:

| Protocol Characteristics | Primitive Characteristics |
|--------------------------|---------------------------|
| Standardized procedures | Fundamental building blocks |
| Step-by-step operational guidance | Conceptual components |
| Specific roles and interactions | Basic functional elements |
| Coordination mechanisms | Composable units |
| Measurable outcomes | Abstract capabilities |

### Transition Guidelines

**For existing primitive content that should become protocols:**

1. **Governance primitives** → **Decision-making protocols**
2. **Coordination primitives** → **Coordination protocols**  
3. **Resource primitives** → **Resource allocation protocols**
4. **Communication primitives** → **Coordination protocols**

**Retain as primitives:**
- Basic building blocks like roles, tasks, cells
- Fundamental conceptual elements
- Composable organizational units

### Implementation Approach

1. **Audit existing primitives** using the criteria above
2. **Create protocol versions** of operational primitives
3. **Update primitive content** to focus on fundamental building blocks
4. **Cross-reference** between protocols and primitives
5. **Update metadata** to reflect new relationships

---

## Recommendation 5: Metadata and Linking Updates

### Enhanced Metadata Schema

**Add to all relevant types:**
```yaml
protocols: # Links to related protocols
group_phase: # Maps to SuperBenefit's group development framework
operational_detail: # High/Medium/Low - indicates procedural specificity
```

### Cross-Referencing System

**Create bidirectional relationships:**
- Patterns → reference supporting protocols
- Protocols → reference implementing patterns  
- Playbooks → reference both patterns and protocols
- Primitives → reference protocols that utilize them

---

## Implementation Plan (Today)

### Task 1: Create Protocol Type (15 minutes)

**Content to Create:** `/tools/types/protocol.md`

```yaml
---
limit: 40
mapWithTag: true
icon: settings
tagNames:
  - protocols
filesPaths:
  - artifacts/protocols
  - notes/protocols
bookmarksGroups: 
excludes: 
extends: artifact
savedViews: []
favoriteView: 
fieldsOrder: []
version: "1.0"
fields:
  - name: category
    type: Multi
    options:
      valuesList:
        - "membership"
        - "membranes"
        - "decision-making"
        - "sensemaking"
        - "coordination"
        - "resource-allocation"
        - "learning"
        - "culture"
---
The Protocol type represents detailed operational mechanisms that define specific steps, roles, and interactions required to achieve consistent coordination outcomes. Extending the Artifact type, Protocol captures the procedural specificity that enables reliable coordination without central authority.

Protocols operationalize patterns by providing formal procedures and standardized interactions. They bridge the gap between conceptual frameworks (patterns) and practical implementation guidance (playbooks) by defining the operational mechanics necessary for consistent execution.

Drawing from OpenCivics' framework, protocols are categorized across eight operational domains: membership, membranes, decision-making, sensemaking, coordination, resource allocation, learning, and culture. This categorization ensures comprehensive coverage of organizational coordination needs.
```

**Execution Prompt:**
```
Please create the protocol type file at /tools/types/protocol.md with the content above using create_vault_file.
```

### Task 2: Create Protocol Template (20 minutes)

**Content to Create:** `/tools/templates/protocol.md`

```markdown
---
title: 
description: 
url: 
tags:
  - protocols
publish: "false"
type: protocol
category: 
---
%% This template creates detailed operational mechanisms that define specific steps, roles, and interactions for consistent coordination. Use it to document standardized procedures that enable reliable coordination without central authority. Focus on operational specificity rather than conceptual frameworks. %%

# <% tp.frontmatter.title || "Protocol Name" %>

_<% tp.frontmatter.description || "A detailed operational mechanism that defines specific steps, roles, and interactions required to achieve consistent coordination outcomes." %>_

## Context

%% Describe the coordination challenges this protocol addresses. Focus on the specific operational environment where standardized procedures are needed. Include types of organizations, teams, or networks that benefit from this operational consistency. %%

## Operational Mechanism

%% Define the specific steps, procedures, and interactions that constitute this protocol. This is the core operational section that should include:
- Clear step-by-step procedures
- Defined roles and responsibilities  
- Required inputs and expected outputs
- Decision points and criteria
- Interaction patterns between participants %%

## Protocol Categories

%% Choose and develop the relevant categories from OpenCivics' framework: %%

### Membership Protocols (if applicable)
- **Join Conditions**: Requirements for participation
- **Exit Conditions**: Process for leaving
- **Participation Conditions**: Ongoing expectations
- **Roles**: Defined roles within the protocol

### Membrane Protocols (if applicable)
- **Boundaries**: What's inside/outside the protocol scope
- **Permeability**: How information/resources flow across boundaries
- **Interface Standards**: How this protocol connects with others

### Decision-Making Protocols (if applicable)
- **Decision Types**: What kinds of decisions this protocol governs
- **Decision Makers**: Who has authority for different decisions
- **Decision Process**: Step-by-step procedure for making decisions
- **Approval Mechanisms**: How decisions are validated and implemented

### Sensemaking Protocols (if applicable)
- **Information Gathering**: How relevant information is collected
- **Analysis Process**: Methods for interpreting information
- **Pattern Recognition**: Approaches for identifying trends or opportunities
- **Context Integration**: How local knowledge is incorporated

### Coordination Protocols (if applicable)
- **Communication Patterns**: How information flows between participants
- **Synchronization Points**: When coordination occurs
- **Handoff Procedures**: How work transitions between participants
- **Conflict Resolution**: How coordination conflicts are addressed

### Resource Allocation Protocols (if applicable)
- **Resource Types**: What resources this protocol governs
- **Allocation Criteria**: Decision principles for resource distribution
- **Request Process**: How resource needs are communicated
- **Distribution Mechanisms**: How resources are actually transferred

### Learning Protocols (if applicable)
- **Knowledge Capture**: How insights are documented
- **Reflection Process**: Regular review and learning cycles
- **Knowledge Sharing**: How learning is distributed
- **Protocol Evolution**: How the protocol itself improves over time

### Culture Protocols (if applicable)
- **Values Integration**: How values are expressed through this protocol
- **Behavioral Norms**: Expected patterns of interaction
- **Accountability Mechanisms**: How adherence is maintained
- **Cultural Evolution**: How culture shapes and is shaped by this protocol

## Implementation Considerations

### Technical Requirements
%% Any tools, platforms, or technical infrastructure needed %%

### Social Requirements  
%% Communication patterns, training needs, cultural prerequisites %%

### Integration Points
%% How this protocol connects with other protocols or organizational systems %%

### Adaptation Guidelines
%% How the protocol can be customized while maintaining its core function %%

### Success Indicators
%% How to measure effective protocol implementation %%

## References and Resources

%% List relevant documentation, tools, templates, or training materials that support protocol implementation %%

### Examples

%% Provide concrete examples of this protocol in practice, showing how the operational mechanism functions in real contexts %%

### Related Protocols

%% Connect to other protocols that complement, depend on, or interface with this one %%

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
        .map(p => [
            `**[${p.title}](${p.file.path})**`,  
            p.description
        ])
);
```

### Case Studies

```dataview
LIST description
WHERE (
    (contains(protocols, this.file.name) OR protocols = this.file.name)
) 
AND (
    contains(type, "study") OR type = "study"
)
AND (
    !contains(file.path, "tools/") 
    AND !contains(file.path, "drafts/")
)
```
```

**Execution Prompt:**
```
Please create the protocol template file at /tools/templates/protocol.md with the content above using create_vault_file.
```

### Task 3: Update Pattern Type (5 minutes)

**Execution Prompt:**
```
Please retrieve /tools/types/pattern.md using get_vault_file, then add a protocols field to its metadata schema.
```

### Task 4: Update Pattern Template (10 minutes)

**Execution Prompt:**
```
Please retrieve /tools/templates/pattern.md using get_vault_file, then:
1. Add "protocols:" field to the frontmatter  
2. Remove unnecessary metadata fields: studies, primitives, functions, qualities, scale, phase
3. Add "Supporting Protocols" section with dataview query before the existing "Supporting Primitives" section
```

### Task 5: Update Playbook Template (10 minutes)

**Execution Prompt:**
```
Please retrieve /tools/templates/playbook.md using get_vault_file, then:
1. Remove unnecessary metadata fields: functions, qualities, patterns, primitives, studies, scale, phase
2. Add group phase considerations to the Context & Orientation section
3. Add group phase-based implementation guidance to the Implementation Guide section
```

---

## Expected Outcomes

**Enhanced Protocol Emphasis:** SuperBenefit will have robust operational documentation matching OpenCivics' approach while maintaining cultural alignment.

**Improved Pattern-Protocol Relationship:** Clear distinction between conceptual frameworks (patterns) and operational mechanisms (protocols).

**Balanced Primitive Usage:** Primitives will focus on truly fundamental building blocks rather than operational procedures.

**Stronger Implementation Guidance:** The combination of patterns, protocols, and playbooks will provide comprehensive guidance from concept to operation.

**Better Knowledge Integration:** Enhanced cross-referencing and metadata will improve discoverability and understanding of relationships between different knowledge types.

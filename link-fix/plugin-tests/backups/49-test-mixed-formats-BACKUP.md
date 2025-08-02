# Test File: Mixed Formats

**Purpose**: Test plugin behavior on combined and complex patterns  
**Created**: 2025-08-01  
**Instructions**: Test how plugin handles mixed link formats in realistic scenarios

---

## Realistic Document Scenarios

### Academic Note Style

This document discusses [[tags/governance|governance patterns]] as described in the [DAO Primitives Framework](artifacts/guides/dao-primitives-framework/dao-primitives-framework.md). As shown below:

![[artifacts/guides/dao-primitives-framework/dao-primitives-framework#Overview]]

For more details, see [[artifacts/patterns/community-governance]] and compare with [operational governance](artifacts/patterns/operational-governance.md) patterns. The relationship is illustrated here:

![[attachments/governance-comparison.png|500]]

### Meeting Notes Style

**Date**: 2024-12-15
**Attendees**: See [[notes/general-circle/general-circle#Members]]
**Previous Meeting**: [December 1 Notes](../2024-12-01-meeting.md)

#### Action Items:
- [ ] Review [[/tags/governance]] structure ← *Leading slash*
- [ ] Update [project documentation](../../projects/current/dao-project.md#documentation)
- [ ] Check ![[notes/rpp/rpp-experiments/equality-fund/equality-fund#Status]]

#### References:
1. Internal: [[notes/dao-primitives/dao-primitives|DAO Primitives Overview]]
2. External: [Ethereum Docs](https://ethereum.org/en/dao/)
3. Related: See also [[#appendix]] below

### Technical Documentation Style

## Implementation Guide

This guide covers the [[artifacts/guides/dao-primitives-framework/group-facilitation|facilitation process]]. For technical details, refer to:

```javascript
// Note: These links in code should NOT be converted
const refs = {
  pattern: "[[artifacts/patterns/community-governance]]",
  guide: "[Guide](./guide.md)",
  embed: "![[code-example.js]]"
};
```

The actual implementation follows these steps:

1. Initialize with [[notes/dao-primitives/primitives-archive/primitives-docs/setup|setup guide]]
2. Configure using [configuration file](../config/settings.md)
3. Deploy following ![[artifacts/guides/deployment-checklist]]

> **Note**: For the latest updates, see [[/artifacts/articles/network-evolution/network-evolution|Network Evolution]] (*has leading slash*)

---

## Navigation Patterns

### Table of Contents Style

## Contents

1. [Introduction](#introduction)
2. [Methodology](#methodology)
   - [Research Approach](#research-approach)
   - [Data Collection](#data-collection)
3. [Findings](#findings)
4. [Conclusion](#conclusion)

### Cross-Reference Network

This connects to multiple related concepts:
- Parent concept: [Go up](../concepts/parent-concept.md)
- Sibling concepts: 
  - [[concepts/sibling-1]] | [Alternative Link](concepts/sibling-1.md)
  - [[concepts/sibling-2]] | [Alternative Link](concepts/sibling-2.md)
- Child concepts: See [[concepts/children/index#list]]

The full taxonomy is shown in ![[attachments/concept-map.png|700x500]]

---

## Complex Mixed Patterns

### Multi-Format Links in Lists

The governance patterns include:

- **Community Level**: [[tags/governance#Community Governance|Community Governance]] (see [details](tags/governance.md#community-governance))
  - Stakeholder engagement via [[patterns/engagement]]
  - Decision making: [consensus model](patterns/consensus.md) or [[patterns/voting]]
  - Documentation: ![[templates/community-charter#template]]

- **Operational Level**: Covered in [this guide](guides/operational.md) and [[guides/operational|this wikilink]]
  - Daily operations (see [[#daily-ops]] below)
  - Resource allocation → [[patterns/treasury]]
  - Reporting structure: ![[diagrams/org-chart.png|400]]

### Dense Link Paragraph

The [[artifacts/patterns/knowledge-gardens|knowledge gardens pattern]] builds on [Zettelkasten methods](https://zettelkasten.de/) and [[tags/emergence|emergence principles]]. See ![[notes/research/knowledge-systems#digital-gardens]] for examples. This connects to both [["permanent notes"]] and [[/tags/documentation|documentation practices]] (*mixed quotes and leading slash*). The visual representation (![[diagrams/garden-structure.svg|300x400]]) shows how [[notes/ideas]] grow into [[artifacts/patterns/patterns|refined patterns]] through [community cultivation](../community/processes/cultivation.md).

---

## Stress Test Combinations

### Everything Together

Consider this scenario[^1] where [[/artifacts/patterns/community-governance#Implementation|community governance implementation]] (with *leading slash* and *fragment*) connects to [relative operational guides](../../guides/operational/implementation.md#step-1) while embedding ![[artifacts/studies/experiments/equality-fund-experiment-case-study^key-finding|the key finding]]. 

[^1]: This footnote contains [[links]] and [more links](notes/ref.md) plus ![[embeds]].

The relationship between [[concepts/concept-1]], [[concepts/concept-2|Concept Two]], and [Concept Three](concepts/concept-3.md) is shown in:

![[attachments/complex-diagram.png|650x400]]

For code examples, see:

```markdown
![[code-snippets/example-1.js]]
![[code-snippets/example-2.py]]
```

But remember these `[[inline]]` and ```[[code block]]``` links shouldn't convert.

### Appendix

Links to everything:
- [[/leading/slash/wikilink]]
- [Leading slash markdown](/leading/slash/markdown.md)
- ![[/leading/slash/embed]]
- [[../relative/wikilink]]
- [Relative markdown](../relative/markdown.md)
- [[fragment#only]]
- [Fragment markdown](#fragment-only)
- [[complex#fragment#subsection]]
- [External](https://example.com#section)

---

## Expected Behavior Matrix

| Scenario | Input | Expected Output |
|----------|-------|-----------------|
| Wiki + MD same target | `[[doc]]` + `[Doc](doc.md)` | Both normalized |
| Wiki + Embed same file | `[[doc]]` + `![[doc]]` | Both handled correctly |
| Relative + Absolute | `[Up](../doc.md)` + `[[doc]]` | Paths resolved |
| Fragment variations | `[[doc#h1]]` + `[Doc](doc.md#h1)` | Fragments preserved |

---

## Actual Results (To Be Filled)

### Overall Behavior
_How does plugin handle mixed formats in realistic documents?_

### Specific Patterns
_Document any unexpected interactions between different link types..._

### Performance Notes
_Any slowdowns with complex documents?_
# Test File: Mixed Formats

**Purpose**: Test plugin behavior on combined and complex patterns  
**Created**: 2025-08-01  
**Instructions**: Test how plugin handles mixed link formats in realistic scenarios

---

## Realistic Document Scenarios

### Academic Note Style

This document discusses [governance patterns](tags/governance.md) as described in the [DAO Primitives Framework](artifacts/guides/dao-primitives-framework/dao-primitives-framework.md). As shown below:

![artifacts/guides/dao-primitives-framework/dao-primitives-framework#Overview](artifacts/guides/dao-primitives-framework/dao-primitives-framework.md#Overview)

For more details, see [artifacts/patterns/community-governance](artifacts/patterns/community-governance.md) and compare with [operational governance](artifacts/patterns/operational-governance.md) patterns. The relationship is illustrated here:

![attachments/governance-comparison.png](attachments/governance-comparison.png)

### Meeting Notes Style

**Date**: 2024-12-15
**Attendees**: See [notes/general-circle/general-circle#Members](notes/general-circle/general-circle.md#Members)
**Previous Meeting**: [December 1 Notes](../2024-12-01-meeting.md)

#### Action Items:
- [ ] Review [/tags/governance](/tags/governance) structure ← *Leading slash*
- [ ] Update [project documentation](../../projects/current/dao-project.md#documentation)
- [ ] Check ![notes/rpp/rpp-experiments/equality-fund/equality-fund#Status](notes/rpp/rpp-experiments/equality-fund/equality-fund.md#Status)

#### References:
1. Internal: [DAO Primitives Overview](notes/dao-primitives/dao-primitives.md)
2. External: [Ethereum Docs](https://ethereum.org/en/dao/)
3. Related: See also [#appendix](#appendix) below

### Technical Documentation Style

## Implementation Guide

This guide covers the [facilitation process](artifacts/guides/dao-primitives-framework/group-facilitation.md). For technical details, refer to:

```javascript
// Note: These links in code should NOT be converted
const refs = {
  pattern: "[[artifacts/patterns/community-governance]]",
  guide: "[Guide](./guide.md)",
  embed: "![[code-example.js]]"
};
```

The actual implementation follows these steps:

1. Initialize with [setup guide](notes/dao-primitives/primitives-archive/primitives-docs/setup.md)
2. Configure using [configuration file](../config/settings.md)
3. Deploy following ![artifacts/guides/deployment-checklist](artifacts/guides/deployment-checklist.md)

> **Note**: For the latest updates, see [Network Evolution](/artifacts/articles/network-evolution/network-evolution) (*has leading slash*)

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
  - [concepts/sibling-1](concepts/sibling-1.md) | [Alternative Link](concepts/sibling-1.md)
  - [concepts/sibling-2](concepts/sibling-2.md) | [Alternative Link](concepts/sibling-2.md)
- Child concepts: See [concepts/children/index#list](concepts/children/index.md#list)

The full taxonomy is shown in ![attachments/concept-map.png](attachments/concept-map.png)

---

## Complex Mixed Patterns

### Multi-Format Links in Lists

The governance patterns include:

- **Community Level**: [Community Governance](<tags/governance.md#Community Governance>) (see [details](tags/governance.md#community-governance))
  - Stakeholder engagement via [patterns/engagement](patterns/engagement.md)
  - Decision making: [consensus model](patterns/consensus.md) or [patterns/voting](patterns/voting.md)
  - Documentation: ![templates/community-charter#template](templates/community-charter.md#template)

- **Operational Level**: Covered in [this guide](guides/operational.md) and [this wikilink](guides/operational.md)
  - Daily operations (see [#daily-ops](#daily-ops) below)
  - Resource allocation → [patterns/treasury](patterns/treasury.md)
  - Reporting structure: ![diagrams/org-chart.png](diagrams/org-chart.png)

### Dense Link Paragraph

The [knowledge gardens pattern](artifacts/patterns/knowledge-gardens.md) builds on [Zettelkasten methods](https://zettelkasten.de/) and [emergence principles](tags/emergence.md). See ![notes/research/knowledge-systems#digital-gardens](notes/research/knowledge-systems.md#digital-gardens) for examples. This connects to both ["permanent notes"](<%22permanent notes%22.md>) and [documentation practices](/tags/documentation) (*mixed quotes and leading slash*). The visual representation (![diagrams/garden-structure.svg](diagrams/garden-structure.svg)) shows how [notes/ideas](notes/ideas.md) grow into [refined patterns](artifacts/patterns/patterns.md) through [community cultivation](../community/processes/cultivation.md).

---

## Stress Test Combinations

### Everything Together

Consider this scenario[^1] where [community governance implementation](/artifacts/patterns/community-governance#Implementation) (with *leading slash* and *fragment*) connects to [relative operational guides](../../guides/operational/implementation.md#step-1) while embedding ![the key finding](artifacts/studies/experiments/equality-fund-experiment-case-study%5Ekey-finding.md). 

[^1]: This footnote contains [links](links.md) and [more links](notes/ref.md) plus ![embeds](embeds.md).

The relationship between [concepts/concept-1](concepts/concept-1.md), [Concept Two](concepts/concept-2.md), and [Concept Three](concepts/concept-3.md) is shown in:

![attachments/complex-diagram.png](attachments/complex-diagram.png)

For code examples, see:

```markdown
![[code-snippets/example-1.js]]
![[code-snippets/example-2.py]]
```

But remember these `[inline](inline.md)` and ```[code block](<code block.md>)``` links shouldn't convert.

### Appendix

Links to everything:
- [/leading/slash/wikilink](/leading/slash/wikilink)
- [Leading slash markdown](/leading/slash/markdown.md)
- ![/leading/slash/embed](/leading/slash/embed)
- [../relative/wikilink](../relative/wikilink.md)
- [Relative markdown](../relative/markdown.md)
- [fragment#only](fragment.md#only)
- [Fragment markdown](#fragment-only)
- [complex#fragment#subsection](complex.md#fragment#subsection)
- [External](https://example.com#section)

---

## Expected Behavior Matrix

| Scenario | Input | Expected Output |
|----------|-------|-----------------|
| Wiki + MD same target | `[doc](doc.md)` + `[Doc](doc.md)` | Both normalized |
| Wiki + Embed same file | `[doc](doc.md)` + `![doc](doc.md)` | Both handled correctly |
| Relative + Absolute | `[Up](../doc.md)` + `[doc](doc.md)` | Paths resolved |
| Fragment variations | `[doc#h1](doc.md#h1)` + `[Doc](doc.md#h1)` | Fragments preserved |

---

## Actual Results (To Be Filled)

### Overall Behavior
_How does plugin handle mixed formats in realistic documents?_

### Specific Patterns
_Document any unexpected interactions between different link types..._

### Performance Notes
_Any slowdowns with complex documents?_
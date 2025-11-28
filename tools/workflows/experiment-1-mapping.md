# Experiment 1: Lexicon Deep Dive - Mapping Document

**Date**: 2025-11-18
**Terms**: governance, coordination, primitives, teams, daos
**Goal**: Map current state, identify natural link opportunities, implement thoughtful backlinks

---

## Current State Analysis

### 1. Governance (`tags/governance.md`)

**Current Links IN the entry:**
- Links to: daos.md, decentralization.md, blockchain.md, decisions.md
- Links to patterns: community-governance.md, operational-governance.md
- Links to multi-stakeholder-governance pattern

**Current Structure:**
- Good definition paragraph with contextual links
- Three types of governance (Community, Operational, Multi-Stakeholder)
- Lists articles and frameworks (NOT linked - just titles)

**Strengths:**
- Already links to related lexicon concepts
- Links to concrete patterns

**Gaps:**
- Article titles not linked to actual files
- No "Related Concepts" or "See Also" section
- No backlinks showing where governance is discussed/applied

**Usage Frequency:**
- 34 mentions in patterns directory alone
- Heavily used across DAO Primitives content

---

### 2. Coordination (`tags/coordination.md`)

**Current Links IN the entry:**
- Links to: primitives.md, networks.md, governance.md, protocols.md, agreements.md, culture.md
- Links to: dao-primitives-framework/readme.md

**Current Structure:**
- Strong definition with contextual examples
- "Uses of Coordination" section with subsections
- "Related Concepts" section (excellent!)
- "References and Resources" section with article titles

**Strengths:**
- Best-developed lexicon entry of the five
- Good "Related Concepts" section as model
- Contextual links feel natural

**Gaps:**
- Article references not linked to actual files
- No backlinks to where coordination is applied in practice

**Usage Frequency:**
- 90 mentions across DAO Primitives
- Most frequently used term

---

### 3. Primitives (`tags/primitives.md`)

**Current Links IN the entry:**
- Links to: notes/dao-primitives/index.md
- Links to: dao-primitives-framework/group-facilitation.md
- Links to: dao-primitives-framework/index.md
- Reference to link.md tool/type

**Current Structure:**
- Clear definition
- "Uses of Primitives" section (systems design, web3)
- "Primitives in Practice" section
- "Primitives in this repository" metadata note

**Strengths:**
- Good progression from abstract to concrete
- Links to DAO Primitives framework
- Practical application focus

**Gaps:**
- No "Related Concepts" section
- No examples of specific primitives
- No backlinks to where primitives are defined/used

**Usage Frequency:**
- 36 mentions in artifacts/patterns
- Moderate usage, conceptually central

---

### 4. Teams (`tags/teams.md`)

**Current Links IN the entry:**
- NONE

**Current Structure:**
- Brief definition only (2 lines)
- Very underdeveloped

**Strengths:**
- Clear, concise definition

**Gaps:**
- No links to related concepts
- No examples or elaboration
- No connection to "Cells" concept (the DAO Primitives term for teams)
- Significant opportunity for enhancement

**Usage Frequency:**
- Referenced in core DAO Primitives definition
- Used but not elaborated

---

### 5. DAOs (`tags/daos.md`)

**Current Links IN the entry:**
- Links to: decentralization.md, autonomy.md, governance.md, blockchain.md, protocols.md
- Links to: notes/dao-primitives/index.md
- Links to: primitives.md, consensus.md, consent.md
- Link to: drafts/test-resources/test-pattern.md (for Cells - BROKEN LINK!)

**Current Structure:**
- Strong opening definition
- "Uses of 'DAO'" section with 5 interpretations
- "Key Characteristics of DAOs" (7 items)
- "Related Concepts" section

**Strengths:**
- Comprehensive, well-developed
- Multiple perspectives on the term
- Good related concepts section

**Gaps:**
- Broken link to Cells concept
- No backlinks to case studies/examples
- Articles mentioned but not linked

**Usage Frequency:**
- Core concept, heavily referenced
- Foundational to entire framework

---

## Quality Criteria for Links

Based on user guidance: "Don't make it clunky; language should flow naturally; don't over-saturate articles with links which would become overwhelming and meaningless."

### When TO Add a Link:

1. **First Meaningful Use**: First time a term appears in a document where understanding it matters
2. **Contextual Clarity**: When clicking would genuinely help reader understand current content
3. **Conceptual Relationships**: When showing how concepts relate (e.g., governance → types of governance)
4. **Learning Pathways**: When guiding from abstract → concrete or concept → implementation

### When NOT to Add a Link:

1. **Repeated Usage**: Don't link every instance of a word in the same document
2. **Obvious Context**: When the term is used casually and context is clear
3. **Over-density**: More than 2-3 links per paragraph feels cluttered
4. **Circular Links**: Avoid A → B → A in quick succession

### Backlink Display Principles:

1. **"Related Concepts"**: For peer-level conceptual relationships
2. **"See Also"**: For lighter connections and examples
3. **"Used In"**: For patterns/practices that implement the concept
4. **Natural References**: Work into body text where it flows naturally

---

## Identified Link Opportunities

### High-Value Opportunities (Do First):

1. **Fix broken Cells link** in daos.md
   - Current: `drafts/test-resources/test-pattern.md`
   - Should be: Link to actual Cells pattern or create proper lexicon entry

2. **Add "Related Concepts" to teams.md**
   - Link to: cells, coordination, collaboration
   - Expand definition to connect to DAO Primitives

3. **Add "Related Concepts" to primitives.md**
   - Link to: coordination, patterns, protocols
   - Connect to governance primitives

4. **Link article titles** in governance.md and coordination.md
   - Only if actual article files exist in knowledge base
   - Otherwise leave as plain text references

5. **Create "Examples" sections** in lexicon entries
   - Link to case studies that demonstrate the concept
   - Link to patterns that implement the concept

### Medium-Value Opportunities:

6. **Add backlinks from patterns to lexicon**
   - When a pattern implements a lexical concept, add reference back
   - Example: community-governance.md → governance.md "See Also"

7. **Cross-link related lexicon terms**
   - governance ↔ coordination (already done)
   - teams ↔ coordination
   - primitives ↔ patterns

8. **Link from DAO Primitives docs to lexicon**
   - First use of key terms in framework docs
   - Keep natural - only where clarification helps

### Lower Priority (Maybe):

9. **Link from Library entries to lexicon**
   - External resources that discuss these concepts
   - Light touch - don't over-link

10. **Link from case studies to concepts**
    - When case study demonstrates a concept in practice
    - Natural, contextual references only

---

## Implementation Plan

### Phase A: Fix and Enhance Lexicon Entries (Current)

1. Fix broken Cells link in daos.md
2. Enhance teams.md with proper content and links
3. Add "Related Concepts" to primitives.md
4. Verify article references (link if files exist)

### Phase B: Add Backlinks from Patterns

5. Review 2-3 key patterns (community-governance, operational-governance)
6. Add natural first-use links to lexicon terms
7. Add "Related Concepts" section to patterns referencing lexicon

### Phase C: Connect Framework Docs

8. Review notes/dao-primitives/index.md
9. Add first-use links to key lexicon terms
10. Ensure framework concepts link to lexicon definitions

### Phase D: Document and Evaluate

11. Create examples of good vs. cluttered linking
12. Document quality criteria learned
13. Prepare findings for Experiment 2

---

## Examples to Create

### Good Link Density (Target):

```markdown
DAOs enable [coordination](tags/coordination.md) at scale through distributed
governance mechanisms. Small autonomous teams work together using shared
primitives that enable both local autonomy and network-wide coherence.
```
(One link per 2-3 sentences, only where it aids understanding)

### Over-Saturated (Avoid):

```markdown
[DAOs](tags/daos.md) enable [coordination](tags/coordination.md) at scale
through distributed [governance](tags/governance.md) mechanisms. Small
autonomous [teams](tags/teams.md) work together using shared [primitives]
(tags/primitives.md) that enable both local autonomy and network-wide
coherence.
```
(Every concept linked = overwhelming and meaningless)

---

## Next Steps

1. ✅ Complete this mapping
2. ⏭️ Fix broken links and enhance underdeveloped entries
3. ⏭️ Add thoughtful backlinks to 2-3 sample patterns
4. ⏭️ Review and evaluate effectiveness
5. ⏭️ Document learnings for scaling

---

**Status**: Mapping complete, ready for implementation
**Time Investment**: ~30 minutes for thorough analysis
**Key Insight**: coordination.md serves as excellent model for other entries

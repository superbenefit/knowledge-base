# Experiment 2: Pattern Interconnection - Mapping Document

**Date**: 2025-11-18
**Pattern Set**: Cell-related patterns at collaboration scale
**Goal**: Map relationships, add cross-references, link to lexicon, document relationship types

---

## Selected Pattern Set

### Core Patterns
1. **cell.md** (`artifacts/patterns/`) - Cell working group pattern
2. **cell-state.md** (`artifacts/patterns/`) - Pattern for documenting group state
3. **nucleus.md** (`notes/dao-primitives/implementation/patterns/collaboration-scale-patterns/`) - Primitive for state tracking
4. **circle.md** (`notes/dao-primitives/implementation/patterns/collaboration-scale-patterns/`) - Primitive for sociocratic team structure

**Why this set?**
- All related to small autonomous teams
- Clear hierarchical relationship (pattern → primitives)
- Already some explicit relationships documented (cell-state frontmatter lists nucleus & circle)
- Well-developed content (unlike decision-log which is template-only)

---

## Current State Analysis

### cell.md

**Current Links:**
- Links to DAO Primitives Framework
- Links to tags: roles.md, tasks.md, purpose.md, practices.md, progress.md
- Links to: cell-state.md, group-state.md, collaboration-scale.md, coordination-scale.md
- Links to: various group-phase files (conversation, formation, organization, coordination, completion)
- Links to case studies: rpp-governance-case-study.md

**What's Missing:**
- No link to nucleus.md or circle.md primitives
- No "Related Concepts" section
- No links to lexicon terms (governance, coordination, teams, primitives)
- Has dataview query for primitives but text doesn't describe them

---

### cell-state.md

**Current Links:**
- Links to: cells.md (guide), collaboration.md (scale), DAO Primitives Framework
- Links to: various group-phase files
- Links to: community-governance.md, decision-log.md
- Links to: cell-state-template.md

**Frontmatter:**
```yaml
primitives:
  - nucleus
  - circle
```

**What's Missing:**
- Frontmatter lists primitives but body text doesn't link to them!
- No "Related Concepts" section
- Only one link to lexicon (in embedded context): teams.md
- Could link to: governance, coordination, primitives concepts

---

### nucleus.md

**Current Links:**
- Links to: teams.md (lexicon)
- Links to: conversation-phase, formation-phase, organization-phase, coordination-phase
- References but doesn't link: state.md pattern

**What's Missing:**
- No link to cell-state.md (the pattern that implements it!)
- No "Related Concepts" section
- Could link to: coordination.md, governance.md
- References "state" pattern but link is broken/informal

---

### circle.md

**Current Links:**
- Links to: agreements.md, governance.md (lexicon)
- Links to Sociocracy for All external resources

**What's Missing:**
- No link to cell-state.md (which uses circle as primitive)
- No link to cell.md (which can use circles)
- No "Related Concepts" section
- Could link to: teams.md, coordination.md, primitives.md

---

## Relationship Types Identified

### 1. **Pattern → Primitive** (Implementation)
- **cell-state.md** implements → **nucleus.md** + **circle.md**
- Direction: Pattern describes how to use the primitive
- Backlink: Primitive should acknowledge patterns that implement it

### 2. **Pattern → Pattern** (Composition)
- **cell.md** uses → **cell-state.md**
- Direction: Higher-level pattern incorporates lower-level pattern
- Backlink: Component pattern should show where it's used

### 3. **Pattern → Lexicon** (Definitional)
- **All patterns** use → **governance, coordination, teams, primitives**
- Direction: Pattern links to concept definitions
- Backlink: Lexicon shows examples of use in practice

### 4. **Pattern → Framework Concepts** (Contextual)
- **All patterns** reference → **group phases, scales**
- Already well-linked
- Good model for other relationship types

### 5. **Primitive → Primitive** (Complementary)
- **nucleus.md** and **circle.md** work together
- Both used in same contexts
- Should cross-reference as complementary approaches

---

## Linking Strategy

### Priority 1: Fix Explicit Primitive Relationships

**cell-state.md:**
- Add prose that explains how nucleus and circle primitives are used
- Link to nucleus.md and circle.md when first mentioned
- Keep natural flow

**nucleus.md:**
- Add backlink to cell-state.md (shows where it's implemented)
- Note in "Implementation Patterns" or new "Used In" section

**circle.md:**
- Add backlink to cell-state.md
- Add backlink to cell.md
- Note complementary relationship with nucleus

### Priority 2: Add Pattern Composition Links

**cell.md:**
- Already links to cell-state, but could strengthen
- Add links to nucleus and circle in "How Cells Work" section
- Natural first-use linking only

### Priority 3: Add Lexicon Links

**All four patterns:**
- Add "Related Concepts" sections at end
- Add 1-2 strategic first-use links in opening paragraphs
- Follow Experiment 1 principles (not over-saturated)

---

## Quality Principles (from Experiment 1)

✅ **Do:**
- Link first meaningful use of concepts
- Add "Related Concepts" sections for exploration
- Keep link density at ~1 per 2-3 sentences max
- Ensure links genuinely aid understanding

❌ **Don't:**
- Link every instance of a term
- Over-saturate body text
- Create circular immediate references
- Link obvious terms in context

---

## Implementation Plan

### Step 1: Enhance Primitive Documentation
1. Add backlinks to nucleus.md showing where it's used (cell-state)
2. Add backlinks to circle.md showing where it's used (cell-state, cells)
3. Add "Related Concepts" sections to both primitives

### Step 2: Strengthen cell-state.md
4. Add prose explaining nucleus and circle primitives in "How it Works"
5. Link to primitives when first mentioned
6. Add "Related Concepts" section
7. Add strategic lexicon links

### Step 3: Enhance cell.md
8. Add links to nucleus and circle primitives where natural
9. Add "Related Concepts" section
10. Add strategic lexicon links in opening

### Step 4: Document Learnings
11. Document pattern relationship types discovered
12. Create examples of good pattern cross-referencing
13. Compare to Experiment 1 learnings

---

## Success Criteria

1. **Bidirectional relationships clear**: If A uses B, B acknowledges A
2. **Natural reading flow**: Links enhance, don't distract
3. **Discoverable**: Related patterns easy to find from any entry point
4. **Documented patterns**: Relationship types documented for reuse

---

**Status**: Mapping complete, ready for implementation
**Time**: ~25 minutes for analysis
**Next**: Implement linking strategy step by step

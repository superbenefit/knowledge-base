# Replacement Map: Original → Transformed Files

## Purpose
Track which files in `_outputs/` replace which originals in the knowledge base. This map will guide the eventual replacement of original content with transformed versions.

## Status: In Progress
- Phase 0: Setup complete
- Phase 1: Unpublished resources - Not started
- Phase 2: Terminology updates - Not started
- Phase 3: New documents - Not started
- Phase 4: Reorganization - Not started
- Phase 5: Integration - Not started
- Phase 6: QA - Not started

---

## Section 1: Framework Files (22 files)
**Status**: To be populated in Phase 2

These files currently exist in `artifacts/guides/dao-primitives-framework/` and will be transformed with updated terminology and digital twin language.

### Transformation Notes
- "group primitives" → "organizational elements"
- "primitive" (in entity context) → "element"
- Add Territory → Map → Graph progression language
- Insert digital twin references
- Emphasize: organizational elements (conceptual) vs DAO primitives (technical)

### Mappings
*To be populated during Phase 2 execution*

---

## Section 2: Unpublished Resources (5 files ready)
**Status**: To be populated in Phase 1

### 2.1 Cells
- **Original**: `artifacts/guides/dao-primitives-framework/group-primitives/cells.md`
- **Transformed**: `drafts/primitives-framework/_outputs/cells.md`
- **Status**: Pending
- **Changes**: Set publish: true, verify frontmatter

### 2.2 Group State Template
- **Original**: `notes/dao-primitives/resources/templates/group-state-template.md`
- **Transformed**: `drafts/primitives-framework/_outputs/group-state-template.md`
- **Status**: Pending
- **Changes**: Set publish: true, verify frontmatter

### 2.3 Circle Pattern
- **Original**: `notes/dao-primitives/implementation/patterns/collaboration-scale-patterns/circle.md`
- **Transformed**: `drafts/primitives-framework/_outputs/circle.md`
- **Status**: Pending
- **Changes**: Set publish: true, verify content completeness

### 2.4 Nucleus Pattern
- **Original**: `notes/dao-primitives/implementation/patterns/collaboration-scale-patterns/nucleus.md`
- **Transformed**: `drafts/primitives-framework/_outputs/nucleus.md`
- **Status**: Pending
- **Changes**: Set publish: true, verify content completeness

### 2.5 Sense-Making Facilitation Tools
- **Original**: `notes/dao-primitives/implementation/guides/sense-making-facilitation-tools.md`
- **Transformed**: `drafts/primitives-framework/_outputs/sense-making-facilitation-tools.md`
- **Status**: Pending
- **Changes**: Set publish: true, check field

---

## Section 3: New Documents (8 files)
**Status**: To be populated in Phase 3

These documents will be created from scratch following existing style and patterns.

### 3.1 Reference Documents
1. **Organizational Elements Quick Reference**
   - **Path**: `drafts/primitives-framework/_outputs/reference/organizational-elements-guide.md`
   - **Status**: Not created
   - **Purpose**: Quick lookup for entities and agreements

2. **DAO Primitives Catalog**
   - **Path**: `drafts/primitives-framework/_outputs/reference/dao-primitives-catalog.md`
   - **Status**: Not created
   - **Purpose**: Comprehensive technical tools listing

### 3.2 User Journey Guides
3. **Concept Learners Path**
   - **Path**: `drafts/primitives-framework/_outputs/guides/start-concepts.md`
   - **Status**: Not created
   - **Dependencies**: Organizational elements guide complete

4. **Practitioners Path**
   - **Path**: `drafts/primitives-framework/_outputs/guides/start-implementation.md`
   - **Status**: Not created
   - **Dependencies**: DAO primitives catalog complete

5. **Evidence Path**
   - **Path**: `drafts/primitives-framework/_outputs/guides/start-evidence.md`
   - **Status**: Not created
   - **Dependencies**: Case studies indexed

### 3.3 Articles
6. **Framework Release Post**
   - **Path**: `drafts/primitives-framework/_outputs/articles/framework-complete.md`
   - **Status**: Not created
   - **Dependencies**: Reference documents complete

### 3.4 Integration
7. **SuperBenefit Services Integration**
   - **Path**: `drafts/primitives-framework/_outputs/integration/sb-services.md`
   - **Status**: Not created

8. **Knowledge Garden Integration**
   - **Path**: `drafts/primitives-framework/_outputs/integration/knowledge-garden.md`
   - **Status**: Not created

---

## Section 4: Directory Reorganization
**Status**: To be documented in Phase 4

### Target Structure
```
drafts/primitives-framework/_outputs/
├── 1-framework-foundation/
│   ├── index.md
│   ├── organizational-elements/
│   └── dimensional-lenses/
├── 2-implementation/
│   ├── mapping/
│   ├── graphing/
│   └── primitive-selection/
├── 3-evidence/
│   ├── case-studies/
│   └── articles/
└── 4-reference/
    ├── quick-guides/
    ├── templates/
    └── integrations/
```

### Mappings
*To be populated during Phase 4 execution*

---

## Section 5: Documented Gaps

### decision-log.md
- **Original**: `notes/dao-primitives/resources/templates/decision-log.md`
- **Status**: EXCLUDED - Skeleton only
- **Action**: Document as identified gap
- **Notes**: File exists but contains only structure, no usable content

---

## Summary Statistics

### Current State (Phase 0 Complete)
- **Transformed Files**: 0/27
- **New Documents**: 0/8
- **Total Deliverables**: 0/35
- **Documented Gaps**: 1

### Target State (All Phases Complete)
- **Transformed Files**: 27 (22 framework + 5 unpublished)
- **New Documents**: 8
- **Total Deliverables**: 35
- **Documented Gaps**: 1

---

## Implementation Notes

### For Phase 1
- Copy 5 unpublished resources to `_outputs/`
- Update frontmatter with `publish: true`
- Verify content completeness
- Update this map with completion status

### For Phase 2
- Process 22 framework files + 5 from Phase 1 = 27 total
- Apply terminology transformations
- Insert digital twin language
- Copy to `_outputs/` with updated content
- Document all mappings in Section 1

### For Phase 3
- Create 8 new documents from scratch
- Save to appropriate `_outputs/` subdirectories
- Update Section 3 with completion status

### For Phase 4
- Reorganize `_outputs/` into 4-section structure
- Update all internal cross-references
- Document directory mappings in Section 4

### For Future Replacement
When ready to replace originals:
1. Review all mappings in this document
2. Use git to safely replace original files
3. Update knowledge base navigation
4. Archive old versions if needed
5. Verify all cross-references work

---
title: Types and Metadata Structures
description: User-friendly overview of content types in the knowledge base
publish: false
type: index
---

# Types Overview

This directory contains structured metadata definitions (fileClasses) for all content in the SuperBenefit knowledge base. These types ensure consistent structure and enable powerful filtering, querying, and organization of our knowledge resources.

> **Looking for technical details?** See the comprehensive [Types System Technical Documentation](readme.md) for complete specifications, field schemas, and implementation details.

## Type Hierarchy

Our types follow a hierarchical structure, with specialized types extending more general ones:

```
note (foundation for all content)
├── reference (supporting materials)
│   ├── index (directory navigation)
│   ├── link (external resources)  
│   └── tag (vocabulary definitions)
└── artifact (published content)
    ├── article (long-form analysis)
    ├── guide (focused instructions)
    ├── pattern (reusable solutions)
    ├── playbook (comprehensive guides)
    ├── protocol (formal procedures)
    └── study (implementation analysis)
```

## Quick Type Selection Guide

When creating new content, select the appropriate type based on what you're documenting:

| If you want to... | Use this type |
|-------------------|---------------|
| Document an early-stage idea or concept | **Note** |
| Reference and analyze an external resource | **Link** |
| Define a term for our shared vocabulary | **Tag** |
| Document a reusable organizational solution | **Pattern** |
| Create a comprehensive implementation guide | **Playbook** |
| Provide focused instructions on a specific topic | **Guide** |
| Define formal procedures to be followed exactly | **Protocol** |
| Document a real-world implementation with outcomes | **Study** |
| Write long-form analysis or thought leadership | **Article** |
| Create a directory overview page | **Index** |

### Common Confusions Clarified

**Pattern vs. Playbook?**
- Pattern = Conceptual solution (the "what" and "why")
- Playbook = Implementation guide (the "how")

**Study vs. Article?**
- Study = Empirical analysis with measurable outcomes
- Article = Opinion, analysis, or thought leadership

**Note vs. Artifact?**
- Note = Work in progress, still developing
- Artifact = Validated, ready for publication

## Using Types in Your Documents

Each type integrates with the Metadata Menu plugin to provide structured editing. To use a type:

1. **Create** a new document in the appropriate directory
2. **Add** `fileClass: typename` to the frontmatter (or let the directory auto-assign it)
3. **Use** the Metadata Menu button (appears in file explorer, tab header) to manage fields
4. **Fill in** the metadata fields that appear in the modal

### Directory Auto-Assignment

Many types automatically apply to files in specific directories:

- `/notes/` and `/drafts/` → note type
- `/artifacts/patterns/` → pattern type
- `/artifacts/playbooks/` → playbook type
- `/library/` → link type
- `/tags/` → tag type

## Templates for Each Type

We provide templates that implement each type's metadata structure:

- [Note Template](/tools/templates/note.md) - For research and ideas
- [Pattern Template](/tools/templates/pattern.md) - For reusable solutions
- [Playbook Template](/tools/templates/playbook.md) - For implementation guides
- [Study Template](/tools/templates/study.md) - For case studies
- [Link Template](/tools/templates/link.md) - For external resources
- [Tag Template](/tools/templates/tag.md) - For vocabulary entries
- [Index Template](/tools/templates/index.md) - For directory pages

## Next Steps

- **For technical details**: See the [Types System Technical Documentation](readme.md)
- **To create content**: Use the appropriate [template](/tools/templates/)
- **To propose new types**: Follow the [Contributing Guide](/CONTRIBUTING.md)
- **For help**: Check the [Metadata Menu documentation](/tools/plugin-notes/metadata-menu/)
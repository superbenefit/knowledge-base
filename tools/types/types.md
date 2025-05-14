---
title: Types and Metadata Structures
description: Overview of metadata types used throughout the knowledge base
publish: false
type: index
---

# Types Overview

This directory contains structured metadata definitions (fileClasses) for all content in the SuperBenefit knowledge base. These types ensure consistent structure and enable powerful filtering, querying, and organization of our knowledge resources.

## Type Hierarchy

Our types follow a hierarchical structure, with specialized types extending more general ones:

- **Note** - The foundation for all content, defining essential metadata fields
  - **Link** - External resources and references with commentary
  - **Tag** - Lexicon entries defining our shared vocabulary
  - **Artifact** - Polished, published content representing community consensus
    - **Pattern** - Reusable solutions to common DAO challenges
    - **Playbook** - Step-by-step implementation guides
    - **Study** - Real-world implementation case studies
- **Index** - Directory-level navigation and orientation pages

## Choosing the Right Type

When creating new content, select the appropriate type based on what you're documenting:

| If you want to... | Use this type |
|-------------------|---------------|
| Document an early-stage idea or concept | **Note** |
| Reference and analyze an external resource | **Link** |
| Define a term for our shared vocabulary | **Tag** |
| Document a reusable organizational solution | **Pattern** |
| Create an implementation guide | **Playbook** |
| Document a real-world implementation | **Study** |
| Create a directory overview page | **Index** |

## Using Types in Your Documents

Each type integrates with the Metadata Menu plugin to provide structured editing. To use a type:

1. Create a new document in the appropriate directory
2. Add `fileClass: typename` to the frontmatter
3. Use the Metadata Menu button to manage fields

For more technical details on how types work and how to create new ones, see the [types readme](/tools/types/readme.md).
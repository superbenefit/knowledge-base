---
title: Document Templates
description: Templates for consistent content creation
publish: false
type: index
---

# Templates Overview

This directory contains template files used to create new documents with consistent structure and metadata. Templates help streamline the content creation process while ensuring all documents follow our established standards and workflows.

## Template Location

All templates are in the `layouts/` subdirectory.

## Template Categories

### Working Documents
- **note.md** - Research notes and early-stage ideas

### Knowledge Resources
- **pattern.md** - Reusable organizational solutions
- **practice.md** - Repeated activities and methods
- **primitive.md** - Atomic building blocks
- **protocol.md** - Formal procedures and standards
- **playbook.md** - Comprehensive implementation guides

### Narrative Content
- **article.md** - Formal publications and essays
- **study.md** - Case studies of real-world implementations
- **guide.md** - Tutorials and instructional content

### Reference Content
- **concept.md** - Lexicon entries defining terminology
- **link.md** - External resource documentation
- **index.md** - Directory overview pages
- **question.md** - Research questions to explore

### Entity Profiles
- **person.md** - Individual profiles
- **group.md** - Organizations, DAOs, and collectives
- **project.md** - Time-bounded initiatives
- **place.md** - Locations and bioregions
- **gathering.md** - Events and meetings

## Choosing the Right Template

| If you want to... | Use |
|-------------------|-----|
| Document early research or ideas | note.md |
| Document a reusable solution | pattern.md |
| Document a repeated activity | practice.md |
| Document a building block | primitive.md |
| Document a formal procedure | protocol.md |
| Create an implementation guide | playbook.md |
| Write a formal publication | article.md |
| Document a real-world case | study.md |
| Create a tutorial | guide.md |
| Define terminology | concept.md |
| Add an external resource | link.md |
| Create a directory overview | index.md |
| Capture a research question | question.md |
| Create a person profile | person.md |
| Document an organization | group.md |
| Document a project | project.md |
| Document a location | place.md |
| Document an event | gathering.md |

## Using Templates in Obsidian

To use a template in Obsidian:

1. Navigate to where you want to create your new document
2. Press `Ctrl/Cmd + P` to open the command palette
3. Type "Template: Insert template"
4. Select the appropriate template
5. Fill in the template's frontmatter fields and content sections

Alternatively, use `Ctrl/Cmd + T` as a shortcut to insert a template.

## Template and Type Integration

Each template implements one or more types (fileClasses) from our type system. The templates include appropriate frontmatter fields and content structure based on the corresponding type requirements.

For example, the Pattern Template implements the Pattern type, including all required fields and a structured format for documenting problem context, mechanism, implementation, and relationships to other patterns.

For technical details on the template system and how to create new templates, see the [templates readme](/tools/templates/readme.md).
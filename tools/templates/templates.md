---
title: Document Templates
description: Templates for consistent content creation
publish: "true"
type: index
---

# Templates Overview

This directory contains template files used to create new documents with consistent structure and metadata. Templates help streamline the content creation process while ensuring all documents follow our established standards and workflows.

## Template Categories

Our templates are organized by content type, aligned with our type system:

- **Note Template** - For research notes and early-stage ideas
- **Link Template** - For external resource documentation
- **Tag Template** - For lexicon entries defining terminology
- **Pattern Template** - For documenting reusable organizational solutions
- **Playbook Template** - For comprehensive implementation guides
- **Study Template** - For case studies of real-world implementations
- **Index Template** - For directory overview pages

## Choosing the Right Template

Select the template that best matches what you're trying to create:

| If you want to... | Use this template |
|-------------------|-------------------|
| Document early research or ideas | **Note Template** |
| Add an external resource to the library | **Link Template** |
| Define terminology for our shared vocabulary | **Tag Template** |
| Document a reusable organizational solution | **Pattern Template** |
| Create a comprehensive implementation guide | **Playbook Template** |
| Document a real-world implementation | **Study Template** |
| Create a directory overview | **Index Template** |

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
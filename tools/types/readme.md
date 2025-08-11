# Types System Documentation

This directory contains the metadata type definitions (fileClasses) that power the SuperBenefit Knowledge Base's structured content system. These files define the metadata schema for different content types, enabling consistent structure, powerful querying capabilities, and specialized user interfaces for content creation and editing.

## Technical Implementation

Each `.md` file in this directory defines a type (fileClass) that specifies metadata fields, validation rules, and inheritance relationships. The Metadata Menu plugin reads these definitions to provide appropriate editing interfaces and enforce data validation.

Types are implemented using Obsidian's Metadata Menu plugin with YAML frontmatter defining the schema. For example:

```yaml
---
limit: 20
mapWithTag: false
icon: notepad-text
tagNames: 
filesPaths:
  - notes
  - drafts
extends: 
version: "2.20"
fields:
  - name: title
    type: Input
    options: {}
  - name: description
    type: Input
    options: {}
  - name: publish
    type: Boolean
    options: {}
---
```

## Type Inheritance

The system supports inheritance through the `extends` field, allowing types to build upon one another. This creates a hierarchical relationship where child types inherit all fields from their parent while adding specialized fields or overriding existing ones.

For example, the `artifact` type extends the base `note` type, while `pattern` extends `artifact`:

```yaml
# In artifact.md
extends: note

# In pattern.md
extends: artifact
```

This inheritance system creates a well-organized type hierarchy that balances consistency with specialization.

## Creating New Types

To create a new type definition:

1. Create a new `.md` file in this directory
2. Define the metadata schema in the frontmatter using Metadata Menu syntax
3. Add a descriptive comment below the frontmatter explaining the type's purpose
4. If extending another type, specify the parent using the `extends` field
5. Configure any specialized settings like `mapWithTag`, `icon`, and `filesPaths`

## Integration Points

The type system integrates with several other components of the knowledge base:

**Templates**: Each type typically has one or more corresponding templates in `/tools/templates/` that implement its metadata schema with appropriate content structure.

**Dataview Queries**: Types enable consistent querying and filtering through the Dataview plugin by ensuring predictable metadata fields.

**Publishing Workflow**: The `publish` field common to many types controls whether content appears in the public knowledge garden.

**Navigation**: Types influence how content appears in navigation, search results, and other discovery mechanisms.

## Best Practices

When working with the type system, follow these guidelines to maintain consistency and functionality:

Start with existing types whenever possible rather than creating new ones. The base types cover most common use cases.

Document new types thoroughly with clear descriptions of their purpose, use cases, and fields.

Keep field definitions simple and intuitive, using inheritance to maintain consistency across related types.

Test new types with real content to ensure they work as expected and integrate properly with templates and queries.

Consult the Metadata Menu plugin documentation when defining complex field types or validation rules.


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
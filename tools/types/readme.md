# Types Directory

This directory contains metadata type definitions (fileClasses) that specify structured metadata for different kinds of documents in our knowledge base. These types help maintain consistent structure and enable powerful querying and organization.

## Overview

Types (fileClasses) define important information about a document:
- What metadata fields a document should have
- What values those fields can contain
- How those fields can be edited
- How documents relate to each other

## How It Works

1. Each `.md` file in this directory defines a type
2. Documents can reference these types using `fileClass` in their frontmatter
3. The Metadata Menu plugin enforces type definitions and provides UI for editing
4. Types can extend other types to inherit their fields

Example type usage:
```yaml
---
fileClass: note
title: My Document
type: note
publish: false
---
```

## Available Types

- `note.md` - Basic note template
- `link.md` - External reference documentation
- `artifact.md` - Learning resource documentation
	- `pattern.md` - Reusable solution documentation
- `index.md` - Directory listing
- `tag.md` - Term definition

## Creating New Types

1. Create a new `.md` file in this directory
2. Add required metadata definition:
```yaml
---
fields:
  - name: title
    type: Input
  - name: description
    type: Input
  - name: publish
    type: Boolean
---
```
3. Document the type's purpose below the frontmatter

## Type Inheritance

Types can extend other types using the `extends` field:
```yaml
---
extends: note
fields:
  - name: additionalField
    type: Input
---
```

## Usage

To use a type in a document:
1. Add `fileClass: typename` to frontmatter
2. Use Metadata Menu plugin features to edit fields
3. Access via context menu, command palette, or inline editing

## Integration

These types integrate with:
- Obsidian Metadata Menu plugin
- Dataview queries
- Template system
- Publishing workflow

## Best Practices

1. Start with existing types when possible
2. Document new types thoroughly
3. Keep field definitions simple
4. Use inheritance for shared fields
5. Test types with example documents
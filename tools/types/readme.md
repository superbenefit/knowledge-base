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
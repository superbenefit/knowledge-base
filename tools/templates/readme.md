# Using Templates

This directory contains template files used to create new documents with consistent structure and metadata. Templates work in conjunction with our type system to provide both structured metadata and formatted content.

## Overview

Templates are markdown files that:
- Define default content structure
- Include required metadata fields
- Can be quickly inserted into new documents
- Work with our type system

## How Templates Work

1. Templates provide starter content for new documents
2. Each template implements one or more types (fileClasses)
3. Obsidian's template plugin allows quick insertion
4. Templates can be modified without changing type definitions

## Basic Usage

To use a template:
1. Press `Ctrl/Cmd + P` to open command palette
2. Type "Template: Insert template"
3. Select desired template
4. Template content will be inserted at cursor

Alternatively:
- Use `Ctrl/Cmd + T` shortcut
- Click template icon in left sidebar
- Use template folder in file explorer

![](https://youtu.be/b-TJYCrYOWQ)

## Available Templates

- `Note Template.md` - Basic note structure
- `Link Template.md` - External reference format
- `Pattern Template.md` - Pattern documentation
- `Tag Page Template.md` - Term definition format
- `Folder Note.md` - Directory documentation

[Previous sections remain exactly the same through "Available Templates"]

## Template Components

A typical template includes:

```yaml
---
title: 
description: 
type: note  # Links to type definition
publish: false
tags:
  - my-first-tag    # Use kebab-case: lowercase with hyphens
  - another-tag
---

# Content structure goes here
```

## Working with Types

Templates and types work together:

1. Types (in `../types/`) define metadata schema
2. Templates implement those schemas
3. Templates can add additional formatting
4. One type can have multiple templates

Example:
```yaml
# In types/tag.md
---
fields:
  - name: title
    type: Input
  - name: type
    type: Input
    value: tag
  - name: aliases
    type: Multi
---

# In templates/Tag Page Template.md
---
title: 
publish: true
type: tag
harvester: 
tags: []  # Tags use kebab-case: some-tag-name
aliases:
  - "#some-tag-name"  # Tag aliases match kebab-case
---
```

## Best Practices

1. **Keep It Simple**
   - Start with minimal templates
   - Add complexity only as needed
   - Focus on reusability

2. **Template Organization**
   - One template per primary use case
   - Clear, descriptive names
   - Document template purpose

3. **Type Integration**
   - Review type requirements
   - Include all required fields
   - Maintain consistent metadata

4. **Content Structure**
   - Use consistent headings
   - Include placeholder text
   - Add helpful comments

5. **Tag Naming**
   - Use kebab-case for all tags
   - Example: #some-tag-name
   - Keep tags lowercase
   - Use hyphens between words

## Templating System Practice

### Purpose
This section defines how templates are created and maintained within the knowledge base, working in conjunction with the type system to ensure consistent document structure.

### Standard Structure
Templates consist of two key parts:

```yaml
# 1. Frontmatter (required metadata)
---
title: 
description: 
type: [note|pattern|primitive|etc]  # Links to type definition
publish: false
tags:
  - tag-one    # Always use kebab-case
  - tag-two
---

# 2. Content Structure
%% Template guidance in comments %%

Main content sections with clear headers
```

### Creation Process
When creating new templates:
1. Review the corresponding type definition in ../types/
2. Include all required metadata fields from the type
3. Add basic content structure with clear headers
4. Include helpful comments using %% for guidance
5. Test by creating a new document using the template

### Maintenance Guidelines
When updating templates:
1. Check type definition for changes
2. Test with the template plugin
3. Update readme if needed
4. Document any special usage notes

[Remainder of original content starting with "Template Variables" section remains exactly the same]

## Customization

Feel free to:
- Modify existing templates
- Create new templates
- Add custom sections
- Adjust formatting

Templates should serve your workflow, not constrain it.

## Support

For help with templates:
1. Check type documentation
2. Review example documents
3. Ask in community channels

---

Remember: Templates are tools to make your work easier. Start simple and adjust as your needs evolve.
# Template System Documentation

This directory contains template files that implement our content type system and provide consistent structure for all documents in the SuperBenefit Knowledge Base. Templates work in conjunction with types (fileClasses) to ensure that content is created with appropriate metadata and structure.

## Technical Implementation

Templates are implemented as markdown files with defined frontmatter fields and content structure. They leverage Obsidian's built-in template plugin for insertion and can optionally use the Templater plugin for dynamic content generation.

A standard template consists of two primary components:

1. **Frontmatter** - YAML metadata defining required and optional fields for the document type
2. **Content Structure** - Predefined sections, headings, and formatting appropriate for the specific content type

Example template structure:

```markdown
---
title: 
description: 
type: note
publish: false
tags:
---

# Content structure with headings

Placeholder text and formatting
```

## Templater Integration

Some templates incorporate Templater plugin syntax (using `<% %>` delimiters) to dynamically generate content based on frontmatter fields, date values, or other contextual information. This allows for more sophisticated templates with:

- Dynamic content insertion
- Conditional formatting
- Date calculations
- Automated cross-linking

Example Templater usage:

```markdown
# <% tp.frontmatter.title || "Untitled Document" %>

Created: <% tp.file.creation_date() %>
```

## Template-Type Relationship

Each template implements one or more types defined in `/tools/types/`. The relationship works as follows:

- Types define the metadata schema (required fields, validation rules)
- Templates implement those schemas with appropriate frontmatter
- Templates add standardized content structure beyond what types define
- One type may have multiple template implementations for different contexts

This separation of concerns allows types to focus on data structure while templates handle presentation and content organization.

## Creating New Templates

To create a new template:

1. Identify the appropriate type (fileClass) from `/tools/types/`
2. Create a new markdown file in this directory with a descriptive name ending in `-template.md`
3. Define frontmatter fields that satisfy the type's requirements
4. Add a descriptive comment immediately after the frontmatter explaining the template's purpose
5. Design the document structure with appropriate headings, sections, and placeholder text
6. For advanced templates, incorporate Templater syntax for dynamic content
7. Test the template by creating documents using it

## Naming Conventions

Template files follow these naming conventions:

- Use kebab-case (lowercase with hyphens)
- End filenames with `-template.md`
- Use descriptive names that clearly indicate the content type

Examples: `note-template.md`, `pattern-template.md`, `link-template.md`

## Best Practices

When creating and maintaining templates, follow these guidelines:

Start with minimal complexity and add only what's necessary for the specific content type. Overly complex templates become difficult to use and maintain.

Document the template's purpose clearly at the top of the file. This helps users understand when and how to use the template.

Include helpful comments within the template to guide users on what information to include in each section.

Review type definitions before creating templates to ensure all required fields are included with appropriate formats.

Test templates thoroughly by creating actual documents to verify that they work as expected and produce well-structured content.

Consider the end-to-end workflow when designing templates. Think about how the document will be used, linked to other content, and potentially published or shared.
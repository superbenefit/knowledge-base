# Template System Documentation

This directory contains template files that serve as the foundation for consistent content creation in the SuperBenefit Knowledge Base. Templates work hand-in-hand with our type system to ensure that knowledge resources maintain consistent structure, metadata, and formatting throughout their development lifecycle.

## Understanding Templates in Context

Templates in this knowledge base do more than provide basic structure—they embody our approach to collaborative knowledge development. When contributors use these templates, they aren't just following a format; they're participating in a carefully designed system that helps knowledge evolve naturally from rough drafts to polished artifacts.

Each template implements a specific content type (defined in `/tools/types/`) and provides appropriate structure for that type of knowledge resource. This consistent structure helps readers quickly find and understand information while also making it easier to connect related concepts across the knowledge base.

The SuperBenefit Knowledge Base uses a "digital gardening" approach where knowledge develops organically through collaboration. Templates provide the right conditions for this growth while ensuring the resulting content remains accessible and interconnected.

## Technical Implementation

Our templates are markdown files with two key components that work together:

1. **Frontmatter** - YAML metadata at the top of the file that defines properties like title, description, and publication status. These properties help categorize, organize, and query content throughout the knowledge base.

2. **Content Structure** - The main body of the template with predefined sections, headings, and guidance that help contributors create well-organized content.

Most templates also include helpful comments that explain the purpose of each section and provide guidance on what information to include. These comments appear in the editor but don't show up in the rendered document.

Here's a simple example of our template structure:

```markdown
---
title: 
description: 
type: note
publish: false
tags:
---
%% This template creates a basic note for early-stage ideas and research. %%

# <% tp.frontmatter.title || "Untitled Note" %>

_<% tp.frontmatter.description || "Brief description of this note's purpose." %>_

## Key Points

%% List the main ideas or findings in this section. %%

## Details

%% Expand on your ideas with supporting information. %%

## Questions & Next Steps

%% Note any open questions or actions that follow from this research. %%
```

## Working with Templates

### Using Templates in Obsidian

To create a new document using one of our templates:

1. Navigate to the appropriate directory in your Obsidian vault
2. Press `Ctrl/Cmd + P` to open the command palette
3. Type "Template: Insert template" and select the command
4. Choose the template that matches the type of content you're creating
5. Fill in the frontmatter fields and replace the placeholder text with your content

### Template and Type Integration

Each template implements one or more types defined in `/tools/types/`. The relationship works as follows:

- **Types** define the metadata structure and validation rules for different kinds of content
- **Templates** implement those types with appropriate frontmatter and content structure
- **Metadata Menu** uses type definitions to provide a user interface for editing metadata

This separation of concerns means that when you use a template, you're automatically following the metadata requirements defined by its corresponding type.

### Template to Type Mapping

| Template | Type | Purpose |
|----------|------|---------|
| note.md | note | Basic research notes and concepts |
| link.md | link | External resource documentation |
| tag.md | tag | Lexicon entries for terminology |
| pattern.md | pattern | Reusable organizational solutions |
| playbook.md | playbook | Implementation guides |
| study.md | study | Case studies of implementations |
| index.md | index | Directory overview pages |

## Choosing the Right Template

Select the template that best matches the type of content you're creating:

- Use **note.md** for early-stage ideas and research that's still developing
- Use **link.md** for documenting external resources with analysis and context
- Use **tag.md** for defining terminology in our shared vocabulary
- Use **pattern.md** for documenting reusable solutions to common challenges
- Use **playbook.md** for comprehensive implementation guides
- Use **study.md** for case studies of real-world implementations
- Use **index.md** for directory overview pages

When in doubt, start with the basic note template and refine your content as it develops.

## Templater Features

Many of our templates incorporate the Templater plugin to provide dynamic content generation. Templater uses a special syntax with `<% %>` delimiters to insert dynamic content based on frontmatter fields, file properties, dates, and other variables.

For example, this Templater expression in a template:

```markdown
# <% tp.frontmatter.title || "Untitled Document" %>
```

Will automatically insert the title from the frontmatter, or "Untitled Document" if no title is provided.

Common Templater features in our templates include:

- Automatically using frontmatter values in the document body
- Providing sensible defaults for empty fields
- Generating dates and other dynamic content
- Creating links to related content

If you're creating or modifying templates, we recommend reviewing our [Guide to Using Templater](tools/plugin-notes/templater/Guide%20to%20Using%20Templater.md) for detailed implementation guidelines.

## Best Practices for Template Usage

### Working with Template Comments

Templates include extensive guidance in the form of comments, which appear in Obsidian's editor but don't show up in the rendered document. These comments are enclosed in `%% comment text %%` delimiters and provide valuable context about what to include in each section.

Read these comments carefully as you fill in the template—they contain important guidance specific to each content type. Feel free to delete the comments once you've completed the corresponding section.

### Template Modifications

While consistency is important, you can adapt templates to suit your specific needs:

- Add additional sections if needed for your content
- Remove sections that aren't relevant (while maintaining required metadata)
- Expand or combine sections as appropriate for your material

The goal is to create content that's clear, useful, and well-structured, not to rigidly follow a template for its own sake.

## Visual Elements

Templates should include guidance for appropriate visual content such as:

- Placement of diagrams and charts
- Recommended visualization approaches
- Best practices for image inclusion

When working with visual elements, consider adding placeholder comments for visual elements in appropriate sections:

```markdown
## Visual Representation

%% Include relevant diagrams or visualizations that help explain this concept.
Consider using Mermaid diagrams for processes, relationships, or structures. %%
```

## Creating New Templates

If you find yourself repeatedly creating a specific type of content that isn't well-served by existing templates, consider creating a new template:

1. Identify the appropriate type from `/tools/types/` or create a new type if needed
2. Create a new markdown file in this directory with a descriptive name
3. Define frontmatter fields that satisfy the type's requirements
4. Add a descriptive comment immediately after the frontmatter explaining the template's purpose
5. Design the document structure with appropriate headings and sections
6. Include helpful comments to guide users on what to include in each section
7. Incorporate Templater syntax for dynamic content where appropriate
8. Test the template thoroughly by creating sample documents
9. Update this readme to document the new template

## Naming Conventions

Template files follow these naming conventions:

- Use plain names that match their corresponding type (e.g., `note.md`, `pattern.md`)
- Use descriptive names that clearly indicate the content type

## Troubleshooting Templates

If you encounter issues with templates:

- **Templater syntax errors:** Check the Templater console in Obsidian for error messages
- **Missing metadata fields:** Verify that the template includes all required fields from its corresponding type
- **Formatting issues:** Ensure that you're using standard markdown syntax
- **Plugin conflicts:** Check for conflicts with other plugins that might affect template rendering

For more complex issues, consult the Obsidian documentation or ask for help in the SuperBenefit community.

## Contributing to Template Improvements

The template system is designed to evolve with the needs of our knowledge base. If you have suggestions for improving existing templates or ideas for new ones, please contribute by:

1. Testing your suggested changes thoroughly
2. Documenting the rationale for your improvements
3. Following the contribution guidelines in the main repository readme

Your contributions help make our knowledge base more accessible and useful for everyone.
# Guide to Using Templater in SuperBenefit Knowledge Base Templates

This guide explains how to effectively and consistently implement Templater functionality across all template files in the SuperBenefit Knowledge Base. Templater allows for dynamic content generation within templates, making them more powerful and user-friendly.

## Core Templater Concepts

### Basic Syntax

Templater uses a tag-based syntax to indicate dynamic content:

- `<% %>` - Standard execution tags for Templater commands
- `tp` - The main Templater object that provides access to various modules

### Common Templater Modules

The most useful Templater modules for our templates are:

- `tp.frontmatter` - Access frontmatter properties
- `tp.file` - Access file properties (name, creation date, etc.)
- `tp.date` - Work with dates
- `tp.system` - System operations (prompts, clipboard, etc.)

## Implementation Patterns

### 1. Title and Description Handling

For all templates, implement consistent title and description handling:

```markdown
# <% tp.frontmatter.title || "Default Title" %>

_<% tp.frontmatter.description || "Default description text that explains the purpose." %>_
```

This pattern:
- Uses the title from frontmatter if available
- Falls back to a sensible default if not provided
- Formats the description in italics for visual consistency

### 2. Frontmatter Access with Fallbacks

When accessing frontmatter values, always provide fallbacks:

```markdown
**Author:** <% tp.frontmatter.author || "Unknown" %>
**Date:** <% tp.frontmatter.date || tp.date.now("YYYY-MM-DD") %>
```

### 3. Commenting Style

Use Obsidian comment syntax for writing prompts and guidance:

```markdown
## Section Title

%% Provide guidance here about what content should be included in this section.
Multiple lines can be used for more detailed instructions. %%
```

### 4. Conditional Content

For sections that may be optional depending on the document type:

```markdown
<% tp.frontmatter.includeExamples ? "## Examples\n\n%% Add examples here %%" : "" %>
```

## Template-Specific Examples

Each template in the knowledge base should implement these patterns consistently while adapting to the specific needs of the document type. See the individual templates for practical examples of these implementation patterns.

## Integration with Types

Templates in the SuperBenefit Knowledge Base implement the metadata schema defined by corresponding types (fileClasses) in the `/tools/types/` directory. When creating or modifying templates, ensure that:

1. All required fields from the type are present in the template's frontmatter
2. The template structure supports the content requirements of the type
3. Any conditional or optional fields are properly handled with Templater

## Resources

- [Official Templater Documentation](https://silentvoid13.github.io/Templater/)
- [Templater Function Reference](https://silentvoid13.github.io/Templater/internal-functions/overview.html)
- [Obsidian Help: Templates](https://help.obsidian.md/Plugins/Templates)

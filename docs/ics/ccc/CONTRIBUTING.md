---
title: Contribution Guidelines for Community Connection & Commitment Commons
description: Comprehensive guide for contributing to the Community Connection & Commitment Commons (C4) documentation and codebase
author: ICS Team
tags:
  - community-connection-commitment-commons
  - contributing
  - guidelines
  - documentation
aliases:
  - C4 Contributing Guide
  - CCC Contributing Guidelines
publish: false
type: guide
---

# Contributing to the Community Connection & Commitment Commons (C4)

Thank you for your interest in contributing to the Community Connection & Commitment Commons (C4)! This document provides essential guidelines to ensure consistency and quality across all project documentation and code.

## Frontmatter Requirements

All markdown files in the knowledge base **must** include properly formatted frontmatter. Frontmatter is metadata at the beginning of the file enclosed between triple-dash lines (`---`).

### Required Frontmatter Structure

```yaml
---
title: Descriptive Title of the Document
description: A concise explanation of what this document contains (1-2 sentences)
author: Your Name or "ICS Team"
tags:
  - community-exchange
  - relevant-tag
  - another-tag
aliases:
  - Short Title
  - Alternative Name
publish: false
type: note
---
```

### Frontmatter Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Descriptive title of the document | `"Community Connection & Commitment Commons Overview"` |
| `description` | Brief explanation of the document content | `"Comprehensive guide to setting up a Community Connection & Commitment Commons system in a local community"` |
| `author` | Document creator or team | `"ICS Team"` or `"Heenal Rajani"` |
| `tags` | Relevant keywords for discovery (array) | See below |
| `aliases` | Alternative names for the document | `"C4 Onboarding"`, `"CCC Setup"` |
| `publish` | Whether the document is ready for public sharing | `"false"` (use quotes) |
| `type` | Document type classification | See below |

### Document Types

- `note` - General documentation, explanations, and references
- `guide` - Step-by-step instructions or tutorials
- `activity` - Workshop materials or facilitation guides
- `reference` - Glossaries, indexes, or lookup resources
- `template` - Reusable document templates
- `tracker` - Progress tracking documents

### Common Tags

Consider including these tags when relevant:

- `community-connection-commitment-commons`
- `connection-commons`
- `commitment-commons`
- `belonging-commons`
- `documentation`
- `process`
- `onboarding`
- `design`
- `governance`
- `implementation`
- `economic-systems`
- `credits`
- `mutual-aid`
- `accounting`
- `facilitation`

## File Naming Conventions

Use the following naming conventions for files:

- Use lowercase letters
- Replace spaces with hyphens (`-`)
- Use descriptive names that indicate content
- For sequenced content, prefix with a section letter and number (e.g., `B.01-community-exchange-overview.md`)

### Section Prefixes

- `A` - Introduction & Project Management
- `B` - Overview & Core Concepts
- `C` - Implementation Specifications
- `D` - Examples & Scenarios
- `E` - How-to Guides
- `F` - Activities & Events
- `G` - Future Development
- `H` - Reference & Resources

## Directory Structure

Maintain the established directory structure:

```
/notes/ics/ccc/
├── README.md
├── CONTRIBUTING.md
├── metadata.yaml
├── ccc.md
├── docs/                   # Current documentation
│   ├── A-Introduction/
│   ├── B-Overview/
│   ├── C-Implementation/
│   ├── D-Examples/
│   ├── E-Guides/
│   ├── F-Activities/
│   ├── G-Future/
│   └── H-Reference/
└── archive/               # Previous versions
    ├── v0.1/
    ├── v0.2/
    └── v0.19/
```

## Documentation Style Guidelines

### Writing Style

- Use clear, concise language
- Write in present tense
- Use active voice
- Aim for clarity over complexity
- Define acronyms and technical terms the first time they appear
- Use numbered lists for sequential steps
- Use bullet points for non-sequential lists

### Formatting

- Use headings to organize content hierarchically
- Keep paragraphs relatively short (3-5 sentences maximum)
- Use code blocks for technical content and examples
- Include tables to organize comparative information
- Add diagrams and visuals where they add clarity
- Link to related documents where appropriate

## Pull Request Process

1. **Fork the repository** if you don't have direct write access
2. **Create a branch** with a descriptive name
3. **Make your changes** following the guidelines above
4. **Test your changes** to ensure they render correctly
5. **Submit a pull request** with a clear description of your changes
6. **Address any feedback** from reviewers

## Contribution Review Checklist

Before submitting your contribution, check that:

- [ ] Frontmatter is correctly formatted with all required fields
- [ ] File is in the correct directory with an appropriate name
- [ ] Content follows style guidelines
- [ ] Links to other documents work correctly
- [ ] Images (if any) are properly referenced and accessible
- [ ] Spelling and grammar have been checked
- [ ] Document provides value and doesn't duplicate existing content

## Getting Help

If you have questions about contributing or need assistance, please reach out to the project maintainers through the appropriate channels.

Thank you for helping to improve the Community Connection & Commitment Commons (C4)!

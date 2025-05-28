---
title: Contribution Guidelines for Impact Yield Fund
description: Guidelines and prompts for contributing to the Impact Yield Fund (IYF) documentation and development
author: ICS Team
tags:
  - community-connection-commitment-commons
  - impact-yield-fund
  - contributing
  - guidelines
  - documentation
aliases:
  - IYF Contributing Guide
  - Fund Contribution Guidelines
publish: "false"
type: guide
---

# Contributing to the Impact Yield Fund

Thank you for your interest in contributing to the Impact Yield Fund (IYF)! This document provides essential guidelines to ensure consistency and quality across all fund documentation and implementation.

## LLM Continuation Prompt

When working with AI assistants to develop documentation for the Impact Yield Fund, you can use this prompt to help generate, refine, or analyze content:

```
This document outlines the project plan for developing the Impact Yield Fund (IYF), a financial structure that preserves capital while generating sustainable returns for investors and continuous support for community initiatives. 

As an LLM assistant, please help expand, refine, and advance this project plan based on the information provided in the I-Fund directory. Focus on creating practical, actionable steps that SuperBenefit can take to move from concept to implementation. Consider governance structures, technical requirements, legal considerations, and partnership development.

Your task is to help develop a comprehensive implementation strategy that addresses key questions:
1. What are the critical path items for moving the IYF from concept to pilot?
2. What specific technical infrastructure is needed?
3. What governance structure should be implemented?
4. How should the fund be pitched to potential investors like Boann Finance?
5. What measurement and evaluation frameworks will effectively demonstrate impact?

Please provide detailed, actionable advice that builds on the existing documentation.
```

## Frontmatter Requirements

All markdown files in the Impact Yield Fund section **must** include properly formatted frontmatter. Frontmatter is metadata at the beginning of the file enclosed between triple-dash lines (`---`).

### Required Frontmatter Structure

```yaml
---
title: Descriptive Title of the Document
description: A concise explanation of what this document contains (1-2 sentences)
author: Your Name or "ICS Team"
tags:
  - impact-yield-fund
  - relevant-tag
  - another-tag
aliases:
  - Short Title
  - Alternative Name
publish: "false"
type: note
---
```

### Frontmatter Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Descriptive title of the document | `"Impact Yield Fund Technical Architecture"` |
| `description` | Brief explanation of the document content | `"Detailed specification of the technical components and infrastructure for the Impact Yield Fund"` |
| `author` | Document creator or team | `"ICS Team"` or `"Heenal Rajani"` |
| `tags` | Relevant keywords for discovery (array) | See below |
| `aliases` | Alternative names for the document | `"IYF Architecture"`, `"Technical Infrastructure"` |
| `publish` | Whether the document is ready for public sharing | `"false"` (use quotes) |
| `type` | Document type classification | See below |

### Document Types

- `note` - General documentation, explanations, and references
- `guide` - Step-by-step instructions or tutorials
- `technical` - Technical specifications and architecture
- `reference` - Glossaries, indexes, or lookup resources
- `template` - Reusable document templates
- `plan` - Project plans and roadmaps

### Common Tags for Impact Yield Fund

Consider including these tags when relevant:

- `impact-yield-fund`
- `community-connection-commitment-commons`
- `defi`
- `social-finance`
- `governance`
- `technical-architecture`
- `smart-contracts`
- `impact-metrics`
- `implementation`
- `pilot`
- `legal-structure`
- `investor-relations`
- `yield-generation`
- `risk-management`
- `community-governance`

## File Naming Conventions

Use the following naming conventions for files:

- Use proper case for README.md and CONTRIBUTING.md
- For all other files, prefix with I followed by numbers (e.g., `I.01-impact-yield-fund-concept.md`)
- Replace spaces with hyphens (`-`)
- Use descriptive names that indicate content

## Documentation Style Guidelines

### Writing Style

- Use clear, concise language
- Write in present tense
- Use active voice
- Balance technical precision with accessibility
- Define acronyms and technical terms the first time they appear
- Use numbered lists for sequential steps
- Use bullet points for non-sequential lists
- Maintain a professional but approachable tone

### Formatting

- Use headings to organize content hierarchically
- Keep paragraphs relatively short (3-5 sentences maximum)
- Use code blocks for technical content, smart contract code, and examples
- Include tables to organize comparative information
- Add diagrams and visuals to illustrate complex concepts
- Link to related documents where appropriate
- Use bold for emphasis on key points

## Diagrams and Visuals

The Impact Yield Fund documentation relies heavily on clear visual explanations:

1. **Flow Diagrams** - Illustrate capital flows, yield distribution, and governance processes
2. **Architecture Diagrams** - Show technical components and their relationships
3. **Charts** - Visualize projected returns, impact metrics, and fund performance
4. **Process Maps** - Document decision-making and implementation procedures

All diagrams should:
- Include a clear title
- Have a consistent style
- Include a brief caption or explanation
- Be referenced properly in the text
- Be stored in the appropriate images directory

## Contribution Focus Areas

The Impact Yield Fund particularly welcomes contributions in these areas:

1. **Theory of Change** - Developing the impact thesis and measurement framework
2. **Technical Architecture** - Designing and documenting the technical infrastructure
3. **Legal Framework** - Researching and documenting regulatory considerations
4. **Governance Model** - Designing transparent, effective governance systems
5. **Discussion Paper** - Developing compelling materials for potential funders
6. **Pilot Design** - Creating plans for effective testing and demonstration

## Contribution Review Process

1. **Initial Draft** - Create your contribution following these guidelines
2. **Peer Review** - Share with at least one other contributor for feedback
3. **Integration** - Incorporate feedback and refine the contribution
4. **Final Review** - Submit for final review by core team
5. **Implementation** - Approved contributions are integrated into the documentation

## Specific Contribution Needs

The Impact Yield Fund currently needs contributions in these specific areas:

1. **Impact Measurement Framework** - Detailed metrics and measurement methodologies
2. **Smart Contract Architecture** - Technical specifications for fund operations
3. **Governance Models** - Comparison of potential governance approaches
4. **Risk Analysis** - Comprehensive assessment of technical, legal, and operational risks
5. **Investor Pitch Deck** - Visual presentation for potential funders
6. **DeFi Protocol Evaluation** - Analysis of potential yield-generating protocols

## Getting Help

If you have questions about contributing or need assistance, please reach out to the project lead or technical lead through the contact information in the README.

Thank you for helping to develop the Impact Yield Fund!

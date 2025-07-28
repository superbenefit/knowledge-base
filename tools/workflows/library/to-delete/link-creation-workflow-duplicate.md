# Web3 Library Entry Creation

This guide provides a structured process for creating standardized library entries for resources that have been evaluated and approved for inclusion in the SuperBenefit Web3 Library.

## Before You Begin

Before starting this workflow, ensure you have completed the environment setup described in the [Library Workflows README](readme.md). You should be familiar with:

- The Link template structure and requirements
- The purpose and organization of the Web3 Library
- SuperBenefit's priority themes and focus areas

## Entry Creation Workflow

### 1. Resource Analysis

Begin with a thorough analysis of the resource:

```
"I need to create a library entry for this web3 resource that's been approved for inclusion:
[RESOURCE TITLE/URL]

Before drafting, please:
1. Review the resource thoroughly to understand its key concepts and contributions
2. Identify 4-6 core insights or frameworks that make this resource valuable
3. Note specific practical applications or implementation guidance provided
4. Analyze how this resource connects to SuperBenefit's priority themes
5. Identify relevant tags that will help categorize this resource"
```

For advanced techniques to extract key concepts, see the [Content Extraction Techniques](readme.md#content-extraction-techniques) section of the README.

### 2. Examine the Template

Next, review the link template to ensure you understand the required structure:

```
"Please retrieve and examine our link template to understand the required structure:

get_vault_file({
  filename: '/tools/templates/link.md'
})

Also, please look at 1-2 example library entries to understand the expected style and depth."
```

### 3. Draft the Entry

Draft a comprehensive library entry following our template structure:

```
"Based on your analysis, please draft a complete library entry with:

1. Appropriate frontmatter including:
   - title: Full resource title
   - description: Concise 1-2 sentence overview
   - publish: 'true'
   - type: [appropriate type - book/article/guide/etc.]
   - source: Direct URL to the resource
   - author: Creator(s) names in array format
   - tags: Relevant categorization tags

2. An introductory paragraph explaining the resource's significance and value

3. Key Highlights section with 4-6 bullet points, each highlighting a central concept with brief explanation

4. Practical Applications section explaining how this resource can be applied in real-world contexts

5. Connection With SuperBenefit section with 2-4 bullet points explaining specific connections to our focus areas and projects"
```

For guidance on reflecting SuperBenefit's perspective, see the [Reflecting SuperBenefit's Perspective](readme.md#reflecting-superbenefits-perspective) section of the README.

### 4. Review and Enhance

Review the draft entry for quality and completeness:

```
"Please review this draft entry and enhance it by:

1. Ensuring the content is comprehensive but concise (500-1000 words total)
2. Checking that the language is clear and accessible while maintaining appropriate technical depth
3. Verifying that all sections follow the template structure
4. Confirming that connections to SuperBenefit are substantive and specific
5. Adding or refining internal links to relevant concepts in our lexicon"
```

### 5. Save the Entry

After your review and approval, save the entry to the appropriate location:

```
"Please save this library entry to the appropriate location using create_vault_file:

create_vault_file({
  filename: '/links/[appropriate-filename].md',
  content: '[full entry content]'
})

Then verify that the file was created successfully."
```

If you encounter challenges during creation, refer to the [Troubleshooting Common Issues](readme.md#troubleshooting-common-issues) section of the README.

## Entry Creation Prompt

For your convenience, here is the complete entry creation prompt that incorporates all of the above steps:

```
I need you to create detailed library entries for web3 resources. 

Please access the SuperBenefit knowledge base via GitHub to understand our full content ecosystem and get a sense of the context in which these resources sit within SuperBenefit's knowledge base and within the work of the DAO Primitives team and the Reimagining Power Project.

Ensure entries maintain a balance between theoretical foundations and practical implementation, with a focus on how these resources enable community autonomy, regenerative approaches, and transformative power structures.

Each entry should be comprehensive but concise (aim for 500-1000 words total), written in clear, accessible language while maintaining appropriate technical depth for the intended audience.

For each resource, please create a comprehensive entry following this format:

---
title: [Resource Title]
description: [Brief description - 1-2 sentences]
publish: "true"
type: [book/article/guide/pattern/framework/etc.]
source: [URL]
author:
  - [Author Name 1]
  - [Author Name 2 if applicable]
tags:
  - [tag1]
  - [tag2]
  - [tag3]
---

[An introductory paragraph giving an overview of the resource, its significance, and what readers can expect from the resource.]

### Key Highlights

- **[First Key Concept]**: [Brief explanation]
- **[Second Key Concept]**: [Brief explanation]
- **[Third Key Concept]**: [Brief explanation]
- **[Fourth Key Concept]**: [Brief explanation]
- **[Fifth Key Concept]**: [Brief explanation]

[You can use more than 5 bullets if necessary, and use sub-headings too if the subject matter warrants it. Don't include line spaces between bullet points.]

### Practical Applications

[Paragraph or bullet points explaining how this resource can be applied in real-world contexts]

### Connection With SuperBenefit

[2-4 concise bullet points explaining how this resource connects to SuperBenefit's focus areas, projects and priorities. Keep this section brief and focused.

Include specific examples of SuperBenefit initiatives like GreenPill London, ICS, or Ethereum Localism where relevant. Be sure not to hallucinate.

Use terminology from SuperBenefit's lexicon but avoid treating RPP and DAO Primitives as separate entities from SuperBenefit - they are foundational programs, not separate entities.

This section should be approximately 3-6 lines total, depending on the resource's relevance to SuperBenefit's work.]
```

## Example: Creating a Library Entry

Here's an example of creating a library entry for a specific resource:

```
I need to create a library entry for "Exit to Community: A Community Primer" which has been approved for inclusion in our Web3 Library.

First, please:
1. Use web search to gather information about this resource, its authors, and key concepts
2. Review the complete resource to understand its structure and main arguments
3. Identify 4-6 key concepts that make this resource valuable
4. Note specific practical applications or implementation guidance provided

Next, examine our template structure:
1. Retrieve the link template from /tools/templates/link.md
2. Look at 1-2 example entries from our library to understand the expected style

Then, draft a complete library entry with:
1. Appropriate frontmatter including title, description, publish status, type, source, author, and tags
2. An introductory paragraph explaining the resource's significance and value to our community
3. Key Highlights section with 4-6 bullet points covering the central concepts
4. Practical Applications section showing how these ideas can be implemented
5. Connection With SuperBenefit section relating the resource to our focus areas

Please ensure the entry is:
1. Comprehensive but concise (500-1000 words total)
2. Written in clear, accessible language while maintaining appropriate depth
3. Structured according to our template
4. Connected to SuperBenefit's focus areas in specific, substantive ways

After my review, we'll save the entry to the appropriate location in our knowledge base.
```

By following this structured creation process, you'll ensure that library entries provide valuable context, analysis, and connections that enhance the resource's value to the SuperBenefit community.
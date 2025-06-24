# Resource Evaluation Framework

This guide provides a structured process for evaluating resources for potential inclusion in the SuperBenefit Web3 Library. It helps ensure that we maintain a carefully curated collection that aligns with our knowledge base and extends our collective understanding.

## Before You Begin

Before starting this workflow, ensure you have completed the environment setup described in the [Library Workflows README](https://claude.ai/chat/readme.md). You should be familiar with:

- SuperBenefit's priority themes and focus areas
- The structure and purpose of the Web3 Library
- The evaluation criteria and scoring system

## Evaluation Workflow

### 1. Initial Resource Review

Begin with a comprehensive review of the resource:

```
"I'd like to evaluate this resource for potential inclusion in our Web3 Library:
[RESOURCE TITLE/URL]

Please begin by:
1. Reviewing the complete resource (or a substantial sample if it's very lengthy)
2. Identifying the central thesis and key arguments
3. Noting the author's background and expertise
4. Determining the resource type (guide, framework, case study, etc.)
5. Identifying the intended audience level (introductory, intermediate, advanced)"
```

### 2. Apply Evaluation Framework

Next, apply our standardized evaluation framework using Claude's extended thinking capabilities:

```
"Please evaluate this resource using our standard evaluation criteria:

1. Initial Screening: Assess PASS/FAIL based on current relevance, alignment with SuperBenefit, uniqueness, and quality
2. Theme Relevance (x2): Score 1-5 on alignment with existing SuperBenefit content
3. Depth & Uniqueness (x1.5): Score 1-5 on insights not found elsewhere
4. Actionability (x1.5): Score 1-5 on practical tools, frameworks, or approaches
5. Currency (x1): Score 1-5 on how recent and forward-looking
6. Accessibility (x1): Score 1-5 on clarity and approachability

For each criterion, please provide a brief justification for the score."
```

For detailed guidance on applying these criteria, see the [Resource Classification Framework](https://claude.ai/chat/readme.md#resource-classification-framework) section of the README.

### 3. Assess Alignment with Knowledge Base

Evaluate how the resource connects to our existing knowledge:

```
"Now, let's assess how this resource aligns with our knowledge base:

1. Please use search_vault_smart to find related content in our knowledge base
2. Identify which priority themes this connects with most strongly:
   - Power transformation and social impact
   - Community currencies and solidarity infrastructure
   - Bioregional and mycelial approaches
   - Decentralized knowledge commons
   - Ethereum localism and community activism
   - DAO frameworks and implementation
3. Note specific connections to existing lexicon entries, patterns, or other artifacts
4. Identify any gaps this resource might fill in our current knowledge"
```

For detailed guidance on discovering connections, see the [Connection Discovery Process](https://claude.ai/chat/readme.md#connection-discovery-process) section of the README.

### 4. Final Recommendation

Based on your comprehensive evaluation, make a final recommendation:

```
"Based on this evaluation, please provide a final recommendation:

1. Calculate the total score (out of 30 points)
2. Assign the appropriate priority level:
   - ESSENTIAL (24-30 points)
   - VALUABLE (18-23 points)
   - SUPPLEMENTARY (12-17 points)
   - ARCHIVE (<12 points)
3. Provide a concise 2-3 sentence summary of the resource's value to our knowledge base
4. Make a clear recommendation regarding inclusion (include/exclude)
5. If recommending inclusion, suggest appropriate tags and classification"
```

### 5. Output Format

Generate a structured CSV-compatible evaluation that can be used for tracking and decisions:

```
"Please format your complete evaluation as a CSV with the following headers:
Title, URL, Author, Initial Screening, Theme Relevance, Depth & Uniqueness, Actionability, Currency, Accessibility, Total Score, Priority, Resource Type, Audience Level, Description"
```

If you encounter challenges during evaluation, refer to the [Troubleshooting Common Issues](https://claude.ai/chat/readme.md#troubleshooting-common-issues) section of the README.

## Evaluation Prompts

For your convenience, here is the complete evaluation prompt that incorporates all of the above steps:

```
I need you to help me evaluate resources for our web3 library. Please access the SuperBenefit knowledge base via GitHub to understand our full content ecosystem and ensure alignment is assessed contextually, not just based on broad themes.

1. Create an evaluation table with these specific columns:
   - Title: Full resource title
   - URL: Direct link to the resource
   - Author: Creator(s) of the resource
   - Initial Screening: PASS/FAIL based on current relevance, alignment, uniqueness, and quality
   - Theme Relevance (x2): Score 1-5 on alignment with existing SuperBenefit content
   - Depth & Uniqueness (x1.5): Score 1-5 on insights not found elsewhere
   - Actionability (x1.5): Score 1-5 on practical tools, frameworks, or approaches
   - Currency (x1): Score 1-5 on how recent and forward-looking
   - Accessibility (x1): Score 1-5 on clarity and approachability
   - Total Score: Out of 30 points
   - Priority: ESSENTIAL (24-30), VALUABLE (18-23), SUPPLEMENTARY (12-17), ARCHIVE (<12)
   - Resource Type: Guide, Case Study, Framework, Theory, Historical, Directory, Tool, Reading List, Podcast/Video, etc.
   - Audience Level: Introductory, Intermediate, Advanced
   - Description: 2-3 sentence summary explaining specific value and contextual alignment with our knowledge base

2. When assessing alignment:
   - Examine the actual content in the SuperBenefit knowledge base
   - Look for connections to existing articles, patterns, and frameworks
   - Consider how the resource complements or extends current knowledge
   - Evaluate its contribution to specific concepts in our lexicon
   - Note its relevance to actual projects and implementations documented in our vault
   - Our priority themes include, but are not limited to:
	   * Power transformation and social impact
	   * Community currencies and solidarity infrastructure
	   * Bioregional and mycelial approaches
	   * Decentralized knowledge commons
	   * Ethereum localism and community activism
	   * DAO frameworks and implementation

3. Format the evaluation as a CSV with all columns clearly defined
4. Only recommend the highest quality resources (ESSENTIAL/VALUABLE) with minimal duplication.
5. Prioritize resources that bridge theory and practice, showing how concepts translate to action
6. Ensure diversity in resource types, perspectives, and approaches
7. Pay special attention to unusual or esoteric resources:
   - Prioritize resources that offer perspectives not commonly found on mainstream web3 sites
   - Look for unique theoretical frameworks that challenge conventional thinking
   - Consider resources from adjacent fields that bring fresh insights to web3 topics
   - Value resources that bridge theory and practice in unconventional ways
   - Give preference to resources that explore the social, philosophical, or ethical dimensions of web3

The goal is to build a carefully curated library of high-quality, useful resources that meaningfully extend our knowledge base and the global knowledge commons while avoiding redundancy.
```

## Example: Evaluating a Resource

Here's an example of evaluating a specific resource:

```
I need to evaluate "The Network State" by Balaji Srinivasan for potential inclusion in our Web3 Library.

First, please:
1. Use web search to gather information about this book and its key arguments
2. Identify the central thesis and key frameworks presented
3. Note the author's background and perspective

Then, evaluate this resource using our standard criteria:
1. Initial Screening (PASS/FAIL)
2. Theme Relevance (1-5)
3. Depth & Uniqueness (1-5)
4. Actionability (1-5)
5. Currency (1-5)
6. Accessibility (1-5)

Next, assess knowledge base alignment:
1. Use search_vault_smart to find related content in our knowledge base
2. Identify connections to our priority themes
3. Note any gaps this resource might fill

Finally, provide:
1. A calculated total score and priority level
2. A concise 2-3 sentence description of its value
3. A clear recommendation regarding inclusion
4. Suggested tags and classification if recommended

Please format your complete evaluation as a CSV for our tracking system.
```

By following this structured evaluation process, you'll ensure that resources added to the library are high-quality, well-aligned with SuperBenefit's focus, and genuinely extend our collective understanding.
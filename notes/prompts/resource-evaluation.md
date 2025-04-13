---
title: Resource Evaluation Framework
description: Prompt for assessing whether a resource is a good fit for inclusion in the web3 library
publish: "true"
type: prompt
---

# Resource Evaluation Framework

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
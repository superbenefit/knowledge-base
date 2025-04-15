---
title: title
description: description
author: 
tags: 
harvester: 
curator: 
publish: "false"
type: note
---

description

%% Introduce your note here. %%

---

%% Write the body of your note here %%



## Prompt 1: Resource Evaluation Framework

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

The goal is to build a carefully curated library of high-quality, useful resources that meaningfully extend our knowledge base and the global knowledge commons while avoiding redundancy.
```



## Prompt 2: Web3 Library Entry Creation

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


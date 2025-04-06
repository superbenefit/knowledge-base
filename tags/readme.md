# SuperBenefit Lexicon: Contribution Guide

The SuperBenefit Lexicon serves as the foundation of our shared understanding about decentralized organizations (DAOs), self-governance, and social impact. It creates a common language that helps us communicate complex ideas with precision and clarity. Beyond simple definitions, our lexicon builds connections between concepts, revealing relationships and patterns that might otherwise remain hidden.

As a navigational tool, the lexicon helps users discover related ideas through a web of interconnected terms. It serves as an educational resource for newcomers while also capturing our community's evolving understanding of key concepts. Think of it as our collective memory, documenting how our thinking develops over time.

This directory contains our shared vocabulary and conceptual framework. This guide will help you understand how our lexicon works and how you can contribute effectively to its growth and refinement.

## Understanding the Lexicon's Purpose

Because the language we use to describe decentralized systems is complex, we need a way to store, display and inter-relate this knowledge in a manner that's accessible to both human and machine readers as they navigate the jargon and complex concepts used in our work and conversations. This lexicon aims to aid communication and content creation in the following ways:

- Individual tag pages serve as a place to organize related artifacts and concepts, helping readers find relevant content and navigate the knowledge garden
- Term definitions are used to abstract tedious and distracting definitions away from artifacts and working documents, making them easier to read, understand and compose
- When used with language models, the lexicon can augment generation of content to improve its accuracy and relevance

### Origins of the Lexicon

The lexicon was created to address contributor pain points and feedback from the community related to the difficulty of using web3 language within multi-disciplinary teams and audiences with varied backgrounds.

This is the first iteration of the Lexicon. It was generated 

- Several dozen common topics were pulled from various published artifacts and working documents stored in the knowledge base.
	- Lexicon entries were created manually by defining the topics in a manner relevant to the SuperBenefit community in a consistent format
- A machine-assisted workflow was created using [RAG](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) with commercial LLM's to enhance and replicate the manually-established pattern, using published works from SuperBenefit contributors for cultural context.
	- More terms were added to expand the lexicon to a useful scope, then run through the AI workflow with humans in the loop for error correction (not much) and formatting fixes (quite a lot)

---

## Creating Effective Lexicon Entries

When crafting a new lexicon entry, begin by thoroughly researching the concept. Understand not just what the term means, but how it relates to other concepts in our knowledge ecosystem. This understanding will help you create connections that enhance the value of your entry.

Your definition should be clear enough for newcomers while remaining technically precise. Finding this balance can be challenging, but it's what makes our lexicon truly useful. Be thorough but efficient with language, avoiding unnecessary jargon while still maintaining accuracy.

One of the most valuable aspects of our lexicon is how it connects ideas. As you write, look for opportunities to link to related concepts using wiki-links (e.g., `[[tags/decentralization]]`) or metadata tags (e.g., `tags: decentralization` ). Consider whether your term is a subtype or supertype of other concepts, and note these relationships explicitly where appropriate. If there are relevant artifacts that demonstrate the concept in practice, link to those as well. When terms might be confused with similar concepts, take time to highlight how they differ.

The tone of lexicon entries should be informative rather than promotional. Present concepts neutrally, helping readers form their own understanding. Where possible, include concrete examples that illustrate abstract concepts, making them more accessible and relatable

### How Lexicon Entries Work

Each term in our lexicon has its own markdown file with a consistent structure. We use the Tag Page Template found at [/tools/templates/Tag Page Template.md](https://github.com/superbenefit/knowledge-base/blob/main/tools/templates/Tag%20Page%20Template.md) as the starting point for all new entries. This template ensures consistency across our lexicon and makes it easier for users to find the information they need.

The metadata schema for lexicon entries is defined in [/tools/types/tag.md](https://github.com/superbenefit/knowledge-base/blob/main/tools/types/tag.md). This file specifies the required fields for each entry's frontmatter.

The title field contains the primary name of the concept. Your description should provide a brief (1-2 sentence) definition that will appear in previews and search results. The harvester field can include your name if you created or maintain the entry. Setting publish to true makes the entry visible in the public knowledge garden. The type is usually "tag" for lexicon entries. Under aliases, include alternative names for the concept, always including the term with a hashtag (e.g., "#decentralization"). The tags field categorizes your entry using existing categories.

The content of a lexicon entry typically begins with a concise definition in italics that captures the essence of the concept in 1-3 sentences. This is followed by an extended explanation that provides additional context and nuance. Most entries include sections that explain how the term is used in different contexts, particularly in relation to Web3, DAOs, and organizational design.

### Style Guidelines

Write in a way that welcomes both newcomers and experienced practitioners. Begin with clear, concise definitions before exploring complexity. Use straightforward language where possible, taking care to define technical terms when they're necessary. Your entry should flow logically, with a structure that guides readers through the concept naturally.

Maintain a neutral tone throughout your entry, presenting the concept objectively rather than advocating for a particular viewpoint. Where relevant, acknowledge different interpretations and perspectives. Don't shy away from discussing tensions and trade-offs within the concept—these nuances often provide the most valuable insights.

Show how the concept applies in specific domains like DAOs, Web3, and social impact work. Ground abstract ideas with concrete examples that illustrate how the concept functions in practice. Take time to explain how context might shift the concept's meaning or implementation across different settings.

Create explicit links to related concepts using wiki-links. Explain how terms relate to each other—whether one concept builds upon another, contrasts with it, or serves a complementary function. These connections help build a coherent knowledge network rather than isolated definitions.

Format the primary definition in italics at the beginning of your entry. Use level-two headings (##) for main sections and level-three headings (###) for subsections. Include a "Related Concepts" section that links to connected terms. Maintaining this consistent structure across entries helps readers navigate the lexicon efficiently.

---

## Getting Help

If you have questions about contributing to the lexicon, check existing entries for examples of similar concepts, review the knowledge base documentation in [README.md](https://github.com/superbenefit/knowledge-base), ask in our community channels, or reach out to experienced contributors.

Our lexicon grows through community contribution. Every addition enriches our collective understanding by adding not just content, but new connections and perspectives to our shared knowledge.
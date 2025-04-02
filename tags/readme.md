# SuperBenefit Lexicon: Contribution Guide

This directory contains our shared vocabulary and conceptual framework. This guide will help you understand how our lexicon works and how you can contribute effectively to its growth and refinement.

## Understanding the Lexicon's Purpose

The SuperBenefit Lexicon serves as the foundation of our shared understanding about decentralized organizations (DAOs), Web3 governance, and social impact. It creates a common language that helps us communicate complex ideas with precision and clarity. Beyond simple definitions, our lexicon builds connections between concepts, revealing relationships and patterns that might otherwise remain hidden.

As a navigational tool, the lexicon helps users discover related ideas through a web of interconnected terms. It serves as an educational resource for newcomers while also capturing our community's evolving understanding of key concepts. Think of it as our collective memory, documenting how our thinking develops over time.

## How Lexicon Entries Work

Each term in our lexicon has its own markdown file with a consistent structure. We use the Tag Page Template found at [/tools/templates/Tag Page Template.md](https://github.com/superbenefit/knowledge-base/blob/main/tools/templates/Tag%20Page%20Template.md) as the starting point for all new entries. This template ensures consistency across our lexicon and makes it easier for users to find the information they need.

The metadata schema for lexicon entries is defined in [/tools/types/tag.md](https://github.com/superbenefit/knowledge-base/blob/main/tools/types/tag.md). This file specifies the required fields for each entry's frontmatter, which typically includes:

The title field contains the primary name of the concept. Your description should provide a brief (1-2 sentence) definition that will appear in previews and search results. The harvester field can include your name if you created or maintain the entry. Setting publish to true makes the entry visible in the public knowledge garden. The type is usually "tag" for lexicon entries. Under aliases, include alternative names for the concept, always including the term with a hashtag (e.g., "#decentralization"). The tags field categorizes your entry using existing categories.

Common tag categories in our lexicon include:

- functions: capabilities or activities (governance, grants, decisions)
- qualities: characteristics or attributes (autonomy, decentralization)
- resources: assets or tools (primitives, platforms, frameworks)
- actions: specific operations or activities (delegation, evaluation)
- agreements: formalized understandings (consent, roles, practices)

The content of a lexicon entry typically begins with a concise definition in italics that captures the essence of the concept in 1-3 sentences. This is followed by an extended explanation that provides additional context and nuance. Most entries include sections that explain how the term is used in different contexts, particularly in relation to Web3, DAOs, and organizational design.

## Creating Effective Lexicon Entries

When crafting a new lexicon entry, begin by thoroughly researching the concept. Understand not just what the term means, but how it relates to other concepts in our knowledge ecosystem. This understanding will help you create connections that enhance the value of your entry.

Your definition should be clear enough for newcomers while remaining technically precise. Finding this balance can be challenging, but it's what makes our lexicon truly useful. Be thorough but efficient with language, avoiding unnecessary jargon while still maintaining accuracy.

One of the most valuable aspects of our lexicon is how it connects ideas. As you write, look for opportunities to link to related concepts using wiki-links (e.g., `[[tags/decentralization]]`) or metadata tags (e.g., `tags: decentralization` ). Consider whether your term is a subtype or supertype of other concepts, and note these relationships explicitly where appropriate. If there are relevant artifacts that demonstrate the concept in practice, link to those as well. When terms might be confused with similar concepts, take time to highlight how they differ.

The tone of lexicon entries should be informative rather than promotional. Present concepts neutrally, helping readers form their own understanding. Where possible, include concrete examples that illustrate abstract concepts, making them more accessible and relatable.

## Patterns in Our Lexicon

As our lexicon has evolved, several consistent patterns have emerged that you might find helpful to follow:

Many entries use a definition-first structure, leading with a clear explanation before elaborating with examples and nuance. Contextual usage sections explain how terms are applied in different domains through "Uses of X" sections. Some entries incorporate important perspectives as block quotes or reference key works in the field. Core concepts often link to more specialized sub-concepts, creating a fractal-like structure of knowledge.

The most effective entries balance breadth with depth, providing a comprehensive overview while still directing readers to more specialized resources for deeper exploration.

## Maintaining Our Lexicon

Our lexicon is a living document that grows and evolves with our collective understanding. Entries should be revisited and refined as concepts develop and our knowledge deepens. When updating existing entries, be mindful of the value they already provide while looking for opportunities to enhance clarity, add relevant connections, or incorporate new insights.

The process of contributing typically follows these steps: Research the concept thoroughly, draft your entry following the template format, establish links to related concepts, check for accuracy and clarity, set the publish field to true when ready, and return to entries as understanding evolves to keep them current.

Remember that your contributions to the lexicon benefit not just current readers, but future community members who will build upon our shared understanding. By crafting thoughtful, well-connected entries, you're helping create a strong foundation for continued learning and discovery.

## Getting Help

If you have questions about contributing to the lexicon, check existing entries for examples of similar concepts, review the knowledge base documentation in [README.md](https://github.com/superbenefit/knowledge-base), ask in our community channels, or reach out to experienced contributors.

Our lexicon grows through community contribution. Every addition enriches our collective understanding by adding not just content, but new connections and perspectives to our shared knowledge.
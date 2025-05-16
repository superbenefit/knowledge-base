---
title: 
description: 
url: 
author: 
tags: 
curator: 
harvester: 
publish: false
type: article
---
%% This template is for harvesting existing published articles into the knowledge base. It focuses on adding proper metadata, summary context, and connecting the article to related content. %%

%% Add a brief introduction explaining why this article is relevant to SuperBenefit's work and what key insights it offers. 2-3 sentences is usually sufficient. %%

**Original publication:** <% tp.frontmatter.url ? "[" + tp.frontmatter.title + "](" + tp.frontmatter.url + ")" : "URL to original publication" %>  
**Author(s):** <% tp.frontmatter.author || "Article author(s)" %>

---

# <% tp.frontmatter.title || "Article Title" %>

%% PASTE THE FULL ARTICLE CONTENT HERE %%

---

## Related Content

%% Add links to related content in the knowledge base. This helps connect this article to our existing work. Example: %%

- Related to [[tags/tag-name]] concepts
- Expands on ideas in [[artifacts/patterns/pattern-name]]
- Provides case studies for [[artifacts/playbooks/playbook-name]]

## References

%% If the article includes references that aren't properly linked or that should be added to our library, list them here. %%
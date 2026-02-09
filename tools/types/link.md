---
limit: 50
mapWithTag: false
icon: link
tagNames:
filesPaths:
  - data/links
bookmarksGroups:
excludes:
extends: file
savedViews: []
favoriteView:
fieldsOrder:
  - url01
  - linkType01
version: "3.0"
fields:
  - name: url
    type: Input
    options: {}
    path: ""
    id: url01
  - name: linkType
    type: Input
    options: {}
    path: ""
    id: linkType01
---
The Link type documents and contextualizes external resources relevant to the SuperBenefit knowledge base. Links go beyond simple bookmarking by adding analysis, commentary, and connections to internal knowledge.

Located in `data/links/`, each link entry includes not just the URL and basic metadata, but also summaries, relevance explanations, and relationships to patterns, studies, or other content types.

This type enables the curation of a living library that bridges internal knowledge development with the broader ecosystem of ideas.

**Template**: [link.md](tools/templates/layouts/link.md)

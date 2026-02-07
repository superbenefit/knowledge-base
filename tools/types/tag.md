---
limit: 20
mapWithTag: true
icon: tag
tagNames:
filesPaths:
  - data/concepts
bookmarksGroups:
excludes:
extends: reference
savedViews: []
favoriteView:
fieldsOrder:
  - alias01
  - related01
  - cat01
version: "3.0"
fields:
  - name: aliases
    type: Multi
    options: {}
    path: ""
    id: alias01
  - name: relatedTerms
    type: MultiFile
    options: {}
    path: ""
    id: related01
  - name: category
    type: Input
    options: {}
    path: ""
    id: cat01
---
The Tag type defines entries in the SuperBenefit lexicon — the shared vocabulary that enables precise communication about complex organizational concepts. Tags establish common definitions, document etymology, and map relationships between terms.

Located in `data/concepts/` and automatically associated through tag mapping, this type processes lexicon entries that extend the Reference type. Each tag entry includes definitions, context, usage examples, aliases, and related terms.

This creates a controlled vocabulary that reduces ambiguity and reveals conceptual relationships. The lexicon forms the linguistic foundation for all other content types.

**Template**: [tag.md](tools/templates/layouts/tag.md)

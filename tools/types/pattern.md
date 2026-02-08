---
limit: 20
mapWithTag: true
icon: layout-template
tagNames:
  - patterns
filesPaths:
  - data/resources/patterns
bookmarksGroups:
excludes:
extends: resource
savedViews: []
favoriteView:
fieldsOrder:
  - questions01
version: "3.0"
fields:
  - name: questions
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/questions"')
    path: ""
    id: questions01
---
The Pattern type documents reusable solutions to recurring challenges in decentralized organization design and governance. Patterns capture proven approaches that can be adapted across different contexts, building a library of organizational building blocks for the DAO ecosystem.

Patterns balance theoretical understanding with practical applicability. Each pattern includes problem context, solution mechanisms, implementation considerations, and relationships to other patterns. Content tagged with "patterns" automatically associates with this type.

Located in `data/resources/patterns/`, these documents form the core of SuperBenefit's contribution to DAO knowledge. Patterns differ from Playbooks by focusing on conceptual solutions rather than step-by-step implementation.

**Template**: [pattern.md](tools/templates/layouts/pattern.md)

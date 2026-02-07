---
limit: 20
mapWithTag: true
icon: box
tagNames:
  - primitives
filesPaths:
  - data/resources/primitives
bookmarksGroups:
excludes:
extends: resource
savedViews: []
favoriteView:
fieldsOrder:
  - cat01
version: "3.0"
fields:
  - name: category
    type: Input
    options: {}
    path: ""
    id: cat01
---
The Primitive type documents foundational building blocks for decentralized organization design. Primitives are the atomic units from which more complex patterns and systems are composed.

Extending Resource, Primitives include a category field (e.g., "governance", "coordination", "treasury") to organize the primitive library. Content tagged with "primitives" automatically associates with this type.

Located in `data/resources/primitives/`, primitives provide the conceptual vocabulary for designing DAOs and decentralized systems.

**Template**: [primitive.md](tools/templates/layouts/primitive.md)

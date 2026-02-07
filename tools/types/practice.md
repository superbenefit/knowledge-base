---
limit: 20
mapWithTag: true
icon: repeat
tagNames:
  - practices
filesPaths:
  - data/resources/practices
bookmarksGroups:
excludes:
extends: resource
savedViews: []
favoriteView:
fieldsOrder:
  - pat01
  - prac01
version: "3.0"
fields:
  - name: patterns
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/resources/patterns"')
    path: ""
    id: pat01
  - name: practitioners
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"')
    path: ""
    id: prac01
---
The Practice type documents ways of doing — repeatable methodologies and approaches that embody one or more patterns. Practices capture the tacit knowledge of how patterns are applied in real contexts.

Extending Resource, Practices link to the patterns they embody and the practitioners who use them. Content tagged with "practices" automatically associates with this type.

Located in `data/resources/practices/`, practices bridge the gap between abstract patterns and concrete implementation, providing the procedural knowledge needed for effective action.

**Template**: [practice.md](tools/templates/layouts/practice.md)

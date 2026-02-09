---
limit: 20
mapWithTag: false
icon: users
tagNames:
filesPaths:
  - data/groups
bookmarksGroups:
excludes:
extends: file
savedViews: []
favoriteView:
fieldsOrder:
  - url01
  - members01
version: "3.0"
fields:
  - name: url
    type: Input
    options: {}
    path: ""
    id: url01
  - name: members
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"')
    path: ""
    id: members01
---
The Group type represents organizations, cells, DAOs, and collectives in the knowledge base. Groups are the organizational structures within which people collaborate.

Group includes fields for url (homepage) and members. Groups can be nested via relatesTo.

Located in `data/groups/`, group entries connect to member profiles, projects, and authored content.

**Template**: [group.md](tools/templates/layouts/group.md)

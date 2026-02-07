---
limit: 20
mapWithTag: false
icon: users
tagNames:
filesPaths:
  - data/groups
bookmarksGroups:
excludes:
extends: data
savedViews: []
favoriteView:
fieldsOrder:
  - slug01
  - members01
  - parent01
  - home01
version: "3.0"
fields:
  - name: slug
    type: Input
    options: {}
    path: ""
    id: slug01
  - name: members
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"')
    path: ""
    id: members01
  - name: parent
    type: Input
    options: {}
    path: ""
    id: parent01
  - name: homepage
    type: Input
    options: {}
    path: ""
    id: home01
---
The Group type represents organizations, cells, DAOs, and collectives in the knowledge base. Groups are the organizational structures within which people collaborate.

Extending Data, Group includes fields for official slug, members, parent organization, and homepage. Groups can be nested to represent organizational hierarchies.

Located in `data/groups/`, group entries connect to member profiles, projects, and authored content.

**Template**: [group.md](tools/templates/layouts/group.md)

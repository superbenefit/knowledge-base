---
limit: 20
mapWithTag: false
icon: user
tagNames:
filesPaths:
  - data/people
bookmarksGroups:
excludes:
extends: file
savedViews: []
favoriteView:
fieldsOrder:
  - groups01
version: "3.0"
fields:
  - name: groups
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/groups"')
    path: ""
    id: groups01
---
The Person type represents individual profiles in the knowledge base. People are the actors who create content, participate in groups, and attend gatherings.

Person includes fields for aliases and group memberships. Person pages enable attribution, networking, and community mapping.

Located in `data/people/`, person entries connect to authored content, group memberships, and project contributions.

**Template**: [person.md](tools/templates/layouts/person.md)

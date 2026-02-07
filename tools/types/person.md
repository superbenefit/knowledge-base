---
limit: 20
mapWithTag: false
icon: user
tagNames:
filesPaths:
  - data/people
bookmarksGroups:
excludes:
extends: data
savedViews: []
favoriteView:
fieldsOrder:
  - alias01
  - roles01
  - groups01
  - home01
  - email01
  - image01
version: "3.0"
fields:
  - name: aliases
    type: Multi
    options: {}
    path: ""
    id: alias01
  - name: roles
    type: Multi
    options: {}
    path: ""
    id: roles01
  - name: groups
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/groups"')
    path: ""
    id: groups01
  - name: homepage
    type: Input
    options: {}
    path: ""
    id: home01
  - name: email
    type: Input
    options: {}
    path: ""
    id: email01
  - name: image
    type: Input
    options: {}
    path: ""
    id: image01
---
The Person type represents individual profiles in the knowledge base. People are the actors who create content, participate in groups, lead projects, and attend gatherings.

Extending Data, Person includes fields for aliases, roles, group memberships, contact information, and profile images. Person pages enable attribution, networking, and community mapping.

Located in `data/people/`, person entries connect to authored content, group memberships, and project contributions.

**Template**: [person.md](tools/templates/layouts/person.md)

---
limit: 20
mapWithTag: false
icon: folder-kanban
tagNames:
filesPaths:
  - data/projects
bookmarksGroups:
excludes:
extends: file
savedViews: []
favoriteView:
fieldsOrder:
  - url01
  - status01
version: "3.0"
fields:
  - name: url
    type: Input
    options: {}
    path: ""
    id: url01
  - name: status
    type: Select
    options:
      values:
        - active
        - completed
        - paused
        - archived
    path: ""
    id: status01
---
The Project type represents time-bounded collaborative endeavors. Projects have specific aims, deliverables, and timelines, distinct from ongoing Groups.

Project includes fields for url and status tracking. Use relatesTo for linking to contributors and groups.

Located in `data/projects/`, project entries connect to contributors, groups, and resulting artifacts.

**Template**: [project.md](tools/templates/layouts/project.md)

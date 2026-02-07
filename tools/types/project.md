---
limit: 20
mapWithTag: false
icon: folder-kanban
tagNames:
filesPaths:
  - data/projects
bookmarksGroups:
excludes:
extends: data
savedViews: []
favoriteView:
fieldsOrder:
  - slug01
  - status01
  - lead01
  - contrib01
  - group01
  - repo01
  - home01
  - start01
  - end01
version: "3.0"
fields:
  - name: slug
    type: Input
    options: {}
    path: ""
    id: slug01
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
  - name: lead
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"')
    path: ""
    id: lead01
  - name: contributors
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"')
    path: ""
    id: contrib01
  - name: group
    type: Input
    options: {}
    path: ""
    id: group01
  - name: repository
    type: Input
    options: {}
    path: ""
    id: repo01
  - name: homepage
    type: Input
    options: {}
    path: ""
    id: home01
  - name: startDate
    type: Date
    options:
      dateFormat: YYYY-MM-DD
    path: ""
    id: start01
  - name: endDate
    type: Date
    options:
      dateFormat: YYYY-MM-DD
    path: ""
    id: end01
---
The Project type represents time-bounded collaborative endeavors. Projects have specific aims, deliverables, and timelines, distinct from ongoing Groups.

Extending Data, Project includes fields for status tracking, leadership, contributors, owning group, repository, dates, and homepage. Projects track progress and outcomes.

Located in `data/projects/`, project entries connect to contributors, groups, and resulting artifacts.

**Template**: [project.md](tools/templates/layouts/project.md)

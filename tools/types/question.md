---
limit: 20
mapWithTag: true
icon: help-circle
tagNames:
  - questions
filesPaths:
  - data/questions
bookmarksGroups:
excludes:
extends: file
savedViews: []
favoriteView:
fieldsOrder:
  - status01
  - related01
  - proposed01
version: "3.0"
fields:
  - name: status
    type: Select
    options:
      values:
        - open
        - exploring
        - resolved
    path: ""
    id: status01
  - name: related
    type: MultiFile
    options: {}
    path: ""
    id: related01
  - name: proposedBy
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"')
    path: ""
    id: proposed01
---
The Question type captures open research questions and generative unknowns that sit at the growing edge of knowledge. Questions are not resources to be commoned but explorations to be pursued.

Extending File directly (not Resource), Questions track status (open/exploring/resolved), related content, and who proposed them. Content tagged with "questions" automatically associates with this type.

Located in `data/questions/`, questions drive the inquiry process and help prioritize research directions.

**Template**: [question.md](tools/templates/layouts/question.md)

---
limit: 20
mapWithTag: false
icon: file-text
tagNames:
filesPaths:
  - docs
  - drafts
bookmarksGroups:
excludes:
extends:
savedViews: []
favoriteView:
fieldsOrder:
  - anCEWM
  - Pgb5mz
  - n6F5Oz
  - 5tGepk
  - draft01
  - perma01
  - auth01
  - group01
version: "3.0"
fields:
  - name: title
    type: Input
    options: {}
    path: ""
    id: anCEWM
  - name: description
    type: Input
    options: {}
    path: ""
    id: Pgb5mz
  - name: date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: n6F5Oz
  - name: publish
    type: Boolean
    options: {}
    path: ""
    id: 5tGepk
  - name: draft
    type: Boolean
    options: {}
    path: ""
    id: draft01
  - name: permalink
    type: Input
    options: {}
    path: ""
    id: perma01
  - name: author
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"')
    path: ""
    id: auth01
  - name: group
    type: Input
    options: {}
    path: ""
    id: group01
---
The File type is the root type for all content in the SuperBenefit Knowledge Base. It defines the essential metadata structure shared by all content types.

Files in `docs/` are working documents organized by group. Files in `drafts/` are personal explorations (gitignored). The `publish` field controls visibility in the Knowledge Garden, while `draft` indicates work-in-progress status.

Core fields: title, description, date, publish, draft, permalink, author, group.

**Template**: [file.md](tools/templates/layouts/file.md)

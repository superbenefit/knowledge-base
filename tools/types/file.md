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
  - title01
  - desc01
  - date01
  - publish01
  - permalink01
  - aliases01
  - tags01
  - relates01
version: "3.0"
fields:
  - name: title
    type: Input
    options: {}
    path: ""
    id: title01
  - name: description
    type: Input
    options: {}
    path: ""
    id: desc01
  - name: date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: date01
  - name: publish
    type: Boolean
    options: {}
    path: ""
    id: publish01
  - name: permalink
    type: Input
    options: {}
    path: ""
    id: permalink01
  - name: aliases
    type: Multi
    options: {}
    path: ""
    id: aliases01
  - name: tags
    type: Multi
    options: {}
    path: ""
    id: tags01
  - name: relatesTo
    type: MultiFile
    options: {}
    path: ""
    id: relates01
---
The File type is the root type for all content in the SuperBenefit Knowledge Base. It defines the essential metadata structure shared by all content types.

Files in `docs/` are working documents organized by group. Files in `drafts/` are personal explorations (gitignored). The `publish` field controls visibility in the Knowledge Garden.

Core fields: title, description, date, publish, permalink, aliases, tags, relatesTo.

**Template**: [note.md](tools/templates/layouts/note.md)

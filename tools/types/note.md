---
limit: 20
mapWithTag: false
icon: notepad-text
tagNames: 
filesPaths:
  - notes
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
version: "2.26"
fields:
  - name: publish
    type: Boolean
    options: {}
    path: ""
    id: 5tGepk
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
      dateFormat: DD-MM-YYYY
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: n6F5Oz
---
The Note type serves as the foundation for content creation in the SuperBenefit Knowledge Base. It defines the essential metadata structure for works-in-progress, research notes, and evolving ideas.

As the base type that most other types extend from, Note establishes core fields including title, description, curator, and harvester information. Notes represent dynamic, evolving content that may eventually mature into more structured artifacts.

This type is primarily used in the `/notes/` and `/drafts/` directories, supporting the knowledge development cycle where ideas begin as personal drafts before evolving into collaborative notes and eventually becoming polished artifacts.
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
The Note type serves as the foundational building block for all content in the SuperBenefit Knowledge Base. It defines the essential metadata structure that enables consistent organization, discovery, and evolution of knowledge from initial ideas to polished artifacts.

Notes represent dynamic, evolving content that captures research, meeting outcomes, working thoughts, and collaborative explorations. They support the natural knowledge development cycle where personal insights mature through collaboration into validated community knowledge. The core fields (title, description, date, publish) provide just enough structure without constraining creative exploration.

This type is primarily used in `/notes/` for collaborative work and `/drafts/` for personal exploration. The publish field controls visibility in the Knowledge Garden, allowing contributors to choose when their work is ready for public consumption. As the base type that most others extend, Note establishes patterns that cascade throughout the entire type system.

**Template**: [note.md](/tools/templates/note.md)
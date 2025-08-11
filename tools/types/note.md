---
limit: 20
mapWithTag: false
icon: notepad-text
tagNames: null
filesPaths:
  - notes
  - drafts
bookmarksGroups: null
excludes: null
extends: null
savedViews: []
favoriteView: null
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
"---": >-
  

  ## Note Type


  The foundation type for all content in the SuperBenefit Knowledge Base,
  establishing core metadata fields that support the knowledge development cycle
  from initial capture through collaborative refinement.


  Notes represent dynamic, evolving content—ideas in motion rather than fixed
  conclusions. They live primarily in `/notes/` for collaborative work and
  `/drafts/` for personal exploration, providing the flexibility needed for
  knowledge to mature naturally through community interaction.


  As the base type with no parent, Note defines the essential fields inherited
  by most other types: title, description, date, and the critical publish field
  that controls visibility in the Knowledge Garden. This minimal but complete
  structure ensures consistency while avoiding unnecessary complexity.


  **Key distinction**: Notes are works-in-progress meant for internal
  development, while artifacts represent validated, publication-ready content.
  The transition from note to artifact marks a significant milestone in our
  knowledge development process.


  **Template**: [/tools/templates/note.md](/tools/templates/note.md)
---
The Note type serves as the foundation for content creation in the SuperBenefit Knowledge Base. It defines the essential metadata structure for works-in-progress, research notes, and evolving ideas.

As the base type that most other types extend from, Note establishes core fields including title, description, curator, and harvester information. Notes represent dynamic, evolving content that may eventually mature into more structured artifacts.

This type is primarily used in the `/notes/` and `/drafts/` directories, supporting the knowledge development cycle where ideas begin as personal drafts before evolving into collaborative notes and eventually becoming polished artifacts.
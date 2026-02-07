---
limit: 20
mapWithTag: false
icon: package
tagNames:
filesPaths: []
bookmarksGroups:
excludes:
extends: file
savedViews: []
favoriteView:
fieldsOrder:
  - rel01
  - hasPart01
  - isPart01
version: "3.0"
fields:
  - name: release
    type: Input
    options: {}
    path: ""
    id: rel01
  - name: hasPart
    type: MultiFile
    options: {}
    path: ""
    id: hasPart01
  - name: isPartOf
    type: MultiFile
    options: {}
    path: ""
    id: isPart01
---
The Resource type is the parent for knowledge artifacts that can be commoned — reusable solutions, patterns, practices, and protocols that provide value across contexts.

Resources extend File and add fields for release grouping and compositional relationships (hasPart/isPartOf). Sub-types include pattern, practice, primitive, protocol, and playbook.

**Template**: Uses subtypes (pattern, practice, etc.)

---
limit: 20
mapWithTag: true
icon: layout-template
tagNames:
  - patterns
filesPaths:
  - notes/dao-primitives/patterns
bookmarksGroups: 
excludes: 
extends: resource
savedViews: []
favoriteView: 
fieldsOrder:
  - twcD1t
version: "2.23"
fields:
  - name: primitives
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages()
            .where(p => p.type && (p.type.includes("primitive") || p.type.includes("module") || p.type.includes("practice") || p.type.includes("protocol")) && !p.file.path.startsWith("tools"))
            .map(p => p.file.name);
    path: ""
    id: twcD1t
---

---
limit: 20
mapWithTag: true
icon: package
tagNames:
  - resources
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 8QLYWX
  - dEXTlc
  - 9zPLbb
  - 5SD9jH
version: "2.32"
fields:
  - name: scale
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"notes/primitives/framework/scale"')
            .where(p => !["scale", "index", "readme"].includes(p.file.name))
            .map(p => p.file.name)
    path: ""
    id: 9zPLbb
  - name: phase
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"notes/primitives/framework/phase"')
            .where(p => !["phase", "index", "readme"].includes(p.file.name))
            .map(p => p.file.name)
    path: ""
    id: 5SD9jH
  - name: function
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"tags"')
            .where(p => p.tags && p.tags.includes("functions") && !["functions", "index", "readme"].includes(p.file.name))
            .map(p => p.file.name)
    path: ""
    id: dEXTlc
  - name: quality
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"tags"')
            .where(p => p.tags && p.tags.includes("qualities") && !["qualities", "index", "readme"].includes(p.file.name))
            .map(p => p.file.name)
    path: ""
    id: 8QLYWX
---
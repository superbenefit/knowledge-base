---
limit: 20
mapWithTag: true
icon: package
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - dEXTlc
  - 8QLYWX
  - 9zPLbb
  - 5SD9jH
version: "2.50"
fields:
  - name: scale
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"notes/primitives/framework/scale"')
            .where(p => !["scale", "index", "readme"].includes(p.file.name))
            .map(p => p.file.name);
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
            .map(p => p.file.name);
    path: ""
    id: 5SD9jH
  - name: functions
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"tags"')
            .where(p => p.file.tags && p.file.tags.some(tag => tag.includes("functions")))
            .map(p => p.file.name);
    path: ""
    id: dEXTlc
  - name: qualities
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages('"tags"')
            .where(p => p.file.tags && p.file.tags.some(tag => tag.includes("qualities")))
            .map(p => p.file.name);
    path: ""
    id: 8QLYWX
---
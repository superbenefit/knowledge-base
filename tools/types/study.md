---
mapWithTag: true
limit: 50
icon: search
tagNames:
  - studies
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - D3j1km
version: "2.4"
fields:
  - name: case
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        dv.pages('-"/tools"')
          .where(p => p.type?.includes("entity"))
          .map(p => p.file.name)
    path: ""
    id: D3j1km
---
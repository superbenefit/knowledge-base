---
limit: 50
mapWithTag: true
icon: notebook-tabs
tagNames:
  - playbooks
filesPaths: 
bookmarksGroups: 
excludes: 
extends: resource
savedViews: []
favoriteView: 
fieldsOrder:
  - xNP4W6
version: "2.4"
fields:
  - name: patterns
    type: Multi
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |-
        $= dv.pages()
            .where(p => p.type && (p.type.includes("pattern")) && !p.file.path.startsWith("tools"))
            .map(p => p.file.name);
    path: ""
    id: xNP4W6
---
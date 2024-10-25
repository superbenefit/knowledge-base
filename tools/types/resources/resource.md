---
limit: 20
mapWithTag: false
icon: package
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: note
savedViews: []
favoriteView: 
fieldsOrder:
  - vYZLK3
  - n9wpUH
  - Oknta7
version: "2.14"
fields:
  - name: group-phase
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": conversation
        "2": formation
        "3": organization
        "4": coordination
        "5": completion
    path: ""
    id: Oknta7
  - name: function
    type: Select
    options:
      sourceType: ValuesList
      valuesList: {}
    path: ""
    id: n9wpUH
  - name: group-scale
    type: Select
    options:
      sourceType: ValuesFromDVQuery
      valuesList: {}
      valuesFromDVQuery: |
        const folder = "notes/dao-primitives/group-properties/scale";
        const excludedFile = "scale.md";

        // Get all files in the specified folder
        let files = dv.pages(folder)
            .where(p => p.file.name !== excludedFile);

        // Create a list of titles for each file, excluding the one
        dv.list(files.map(f => f.file.title));
    path: ""
    id: vYZLK3
---
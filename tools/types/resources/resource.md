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
  - n9wpUH
  - yiCDQi
  - Oknta7
version: "2.12"
fields:
  - name: group-scale
    type: Select
    options:
      sourceType: ValuesFromDVQuery
      valuesList:
        "1": collaboration
        "2": coordiantion
        "3": constituency
        "4": network
      valuesFromDVQuery: |-
        list file.title
        from "notes/dao-primitives/group-properties/scale"
        where file.name != "scale"
    path: ""
    id: yiCDQi
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
---
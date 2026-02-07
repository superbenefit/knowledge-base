---
limit: 20
mapWithTag: false
icon: calendar
tagNames:
filesPaths:
  - data/gatherings
bookmarksGroups:
excludes:
extends: data
savedViews: []
favoriteView:
fieldsOrder:
  - loc01
  - start01
  - end01
  - org01
  - attend01
  - out01
version: "3.0"
fields:
  - name: location
    type: Input
    options: {}
    path: ""
    id: loc01
  - name: startDate
    type: Date
    options:
      dateFormat: YYYY-MM-DD
    path: ""
    id: start01
  - name: endDate
    type: Date
    options:
      dateFormat: YYYY-MM-DD
    path: ""
    id: end01
  - name: organizers
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"').concat(dv.pages('"data/groups"'))
    path: ""
    id: org01
  - name: attendees
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"')
    path: ""
    id: attend01
  - name: outcomes
    type: MultiFile
    options: {}
    path: ""
    id: out01
---
The Gathering type represents events, conferences, and meetings. Gatherings bring people together and often produce artifacts as outcomes.

Extending Data, Gathering includes fields for location, dates, organizers, attendees, and outcomes. Gatherings connect the knowledge base to real-world events.

Located in `data/gatherings/`, gathering entries connect to participants, locations, and resulting content.

**Template**: [gathering.md](tools/templates/layouts/gathering.md)

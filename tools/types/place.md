---
limit: 20
mapWithTag: false
icon: map-pin
tagNames:
filesPaths:
  - data/places
bookmarksGroups:
excludes:
extends: data
savedViews: []
favoriteView:
fieldsOrder:
  - geo01
  - contained01
  - region01
version: "3.0"
fields:
  - name: geo
    type: Input
    options: {}
    path: ""
    id: geo01
  - name: containedIn
    type: Input
    options: {}
    path: ""
    id: contained01
  - name: region
    type: Input
    options: {}
    path: ""
    id: region01
---
The Place type represents locations and bioregions relevant to the knowledge base. Places provide geographic context for gatherings, groups, and projects.

Extending Data, Place includes fields for geographic coordinates, containment relationships, and bioregion identifiers. Places can be nested to represent geographic hierarchies.

Located in `data/places/`, place entries connect to gatherings held there and groups based there.

**Template**: [place.md](tools/templates/layouts/place.md)

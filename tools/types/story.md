---
limit: 20
mapWithTag: false
icon: book-open
tagNames:
filesPaths: []
bookmarksGroups:
excludes:
extends: file
savedViews: []
favoriteView:
fieldsOrder:
  - author01
  - url01
version: "3.0"
fields:
  - name: author
    type: MultiFile
    options:
      dvQueryString: dv.pages('"data/people"')
    path: ""
    id: author01
  - name: url
    type: Input
    options: {}
    path: ""
    id: url01
---
The Story type is the parent for narrative content — case studies, articles, and guides that tell stories about implementations, ideas, and practices.

Stories extend File and add author and url fields. Sub-types include study, article, and guide.

**Template**: Uses subtypes (study, article, guide)

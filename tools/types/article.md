---
limit: 40
mapWithTag: false
icon: newspaper
tagNames:
filesPaths:
  - data/stories/articles
bookmarksGroups:
excludes:
extends: story
savedViews: []
favoriteView:
fieldsOrder:
  - url01
  - curator01
  - harvester01
version: "3.0"
fields:
  - name: url
    type: Input
    options: {}
    path: ""
    id: url01
  - name: curator
    type: Input
    options: {}
    path: ""
    id: curator01
  - name: harvester
    type: Input
    options: {}
    path: ""
    id: harvester01
---
The Article type represents formal publications, essays, and in-depth analyses on topics relevant to decentralized organizations. Articles provide space for thought leadership, theoretical exploration, and comprehensive treatment of complex topics.

Extending Story, Articles accommodate longer-form content that develops arguments, presents research, or offers perspectives. Content may originate on external platforms or be native to the knowledge base.

Located in `data/stories/articles/`, articles emphasize narrative and argumentation over structured frameworks (patterns) or procedures (playbooks).

**Template**: [article.md](tools/templates/layouts/article.md)

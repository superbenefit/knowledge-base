# SuperBenefit Knowledge Base Ontology

This document defines SuperBenefit's knowledge file type system, mapping it to external semantic web ontologies (schema.org, FOAF, DOAP) and Simon Grant's knowledge commons framework.

---

## Type Hierarchy

```
file (root type)
├── fields: type, title, description, date, publish, draft, permalink, author, group
│
├── reference (extends file) — organizational content
│   ├── index — navigation pages
│   ├── link — external resources
│   └── tag — lexicon definitions (concepts)
│
├── resource (extends file) — things that can be commoned
│   ├── pattern — reusable solutions
│   ├── practice — documented ways of doing
│   ├── primitive — foundational building blocks
│   ├── protocol — formal procedures
│   └── playbook — implementation guides
│
├── question (extends file) — open research questions
│
├── story (extends file) — narratives
│   ├── study — case studies
│   ├── article — essays, publications
│   └── guide — instructional content
│
└── data (extends file) — entities/actors
    ├── person — people profiles
    ├── group — organizations, cells, DAOs
    ├── project — time-bounded endeavors
    ├── place — locations, bioregions
    └── gathering — events, conferences
```

**Note**: `question` is a standalone type, not a resource sub-type. Per Simon Grant: "questions sit at the growing edge of knowledge" — they represent generative unknowns, not commoned artifacts.

---

## External Ontology Namespaces

| Prefix | Namespace | Purpose |
|--------|-----------|---------|
| `schema` | https://schema.org/ | General-purpose web vocabulary |
| `foaf` | http://xmlns.com/foaf/0.1/ | People, groups, social networks |
| `doap` | http://usefulinc.com/ns/doap# | Software/organizational projects |
| `dc` | http://purl.org/dc/terms/ | Dublin Core metadata |
| `skos` | http://www.w3.org/2004/02/skos/core# | Concept schemes, taxonomies |

---

## Simon Grant Knowledge Commons Alignment

| Grant Type | SuperBenefit Type | Notes |
|------------|-------------------|-------|
| Resource | resource (parent) | Commoned knowledge artifacts |
| Concept | tag | Lexicon/terminology definitions |
| Person | person | Individual profiles |
| Group | group | Organizations, cells, DAOs |
| — | project | *Added*: Distinct from group |
| Place | place | Locations, bioregions |
| Gathering | gathering | Events, conferences |
| Story | story (parent) | Narratives: study, article |
| Practice | practice | Repeated actions, methodologies |
| Pattern | pattern | Reusable solutions |
| Question | question | Open research questions (standalone) |

---

## Filesystem Structure

The knowledge base uses a two-space model: **docs** for creative outputs organized by authoring group, and **data** for structured records organized by content type.

### Principles

- **docs/** — arbitrary file trees at group discretion. Content type is determined by frontmatter, not path.
- **data/** — flat buckets organized strictly by content type/sub-type. No arbitrary nesting.
- **Official Releases** — any folder in docs/ containing an `index.base` file is surfaced as a release in consumer UIs. Release identity comes from the sibling `index.md` frontmatter. Releases can be nested.

### Directory Layout

```
knowledge-base/
├── docs/                              # Creative outputs, organized by group
│   ├── {group}/                       # e.g., dao-primitives/, rpp/, ifp/
│   │   └── ...                        # Arbitrary structure; any content type
│   │       ├── index.md               # Release identity (frontmatter)
│   │       └── index.base             # Marks folder as official release
│   └── ...
│
├── data/                              # Structured records, organized by type
│   ├── concepts/                      # tag (lexicon definitions; was tags/)
│   ├── links/                         # link (curated external resources; was links/)
│   ├── resources/                     # resource sub-types
│   │   ├── patterns/                  # pattern
│   │   ├── practices/                 # practice
│   │   ├── primitives/                # primitive
│   │   ├── protocols/                 # protocol
│   │   └── playbooks/                 # playbook
│   ├── stories/                       # story sub-types
│   │   ├── studies/                   # study
│   │   ├── articles/                  # article
│   │   └── guides/                    # guide
│   ├── questions/                     # question (standalone)
│   ├── people/                        # person
│   ├── groups/                        # group
│   ├── projects/                      # project
│   ├── places/                        # place
│   └── gatherings/                    # gathering
│
└── drafts/                            # Local only, gitignored
```

### Notes on Structure

- **docs/** replaces the former `notes/` directory. Existing notes are already organized by group.
- **data/concepts/** replaces the former `tags/` directory.
- **data/links/** replaces the former top-level `links/` directory.
- Resources that aren't filed into docs/ by a group go in the appropriate data/ bucket.
- Index pages in data/ directories may have `index.base` files for internal knowledge base use, but these are not surfaced as releases in consumer UIs.
- The former `artifacts/` directory is eliminated. Its release-surfacing function is replaced by the Official Release mechanism in docs/.

---

## Content Type → Path Mapping

| Content Type | Directory | Parent Type | Schema.org |
|--------------|-----------|-------------|------------|
| file | `docs/` (any) | — | CreativeWork |
| index | any directory | reference | CollectionPage |
| link | `data/links/` | reference | WebPage |
| tag | `data/concepts/` | reference | DefinedTerm |
| pattern | `data/resources/patterns/` | resource | HowTo |
| practice | `data/resources/practices/` | resource | HowTo |
| primitive | `data/resources/primitives/` | resource | DefinedTerm |
| protocol | `data/resources/protocols/` | resource | HowTo |
| playbook | `data/resources/playbooks/` | resource | HowTo, Guide |
| question | `data/questions/` | file | Question |
| study | `data/stories/studies/` | story | Report |
| article | `data/stories/articles/` | story | Article |
| guide | `data/stories/guides/` | story | HowTo |
| person | `data/people/` | data | Person |
| group | `data/groups/` | data | Organization |
| project | `data/projects/` | data | Project |
| place | `data/places/` | data | Place |
| gathering | `data/gatherings/` | data | Event |

---

## File Type

All content types inherit from `file`.

### Fields

```yaml
type: ""                # content type (required; inferred from path for data/)
title: ""               # required
description: ""         # recommended
date: YYYY-MM-DD        # required
publish: false          # required, default false
draft: false            # required, default false
permalink: ""           # internal content ID and URL slug
author: []              # links to person pages
group: ""               # cell/project slug (e.g., "dao-primitives", "rpp")
```

### Schema Mapping

| Field | schema.org | Dublin Core | FOAF |
|-------|------------|-------------|------|
| title | name | dc:title | — |
| description | description | dc:description | — |
| date | dateCreated | dc:date | — |
| author | author | dc:creator | foaf:maker |

*Internal fields not mapped: `publish`, `draft`, `permalink`, `group`*

---

## Reference Types

Reference types organize and index knowledge.

### reference (parent, extends file)

**Schema**: `schema:CreativeWork`

---

### index (extends reference)

**Purpose**: Directory navigation pages

**Schema**: `schema:CollectionPage`

---

### link (extends reference)

**Purpose**: Curated external resources

**Fields**:
```yaml
url: ""                 # schema:url
```

**Schema**: `schema:WebPage`, `dc:references`

---

### tag (extends reference)

**Purpose**: Lexicon definitions, terminology (concepts)

**Fields**:
```yaml
aliases: []             # schema:alternateName
relatedTerms: []        # skos:related
category: ""            # schema:category
```

**Schema**: `schema:DefinedTerm`, `skos:Concept`

---

## Resource Types

Resources are things that can be commoned—knowledge artifacts with reuse value.

### resource (parent, extends file)

**Fields**:
```yaml
release: ""             # creative release slug
hasPart: []             # schema:hasPart — component resources
isPartOf: []            # schema:isPartOf — parent resources
```

**Schema**: `schema:CreativeWork`

---

### pattern (extends resource)

**Purpose**: Reusable solutions to recurring challenges

**Fields**:
```yaml
context: ""             # when/where to apply
problem: ""             # challenge addressed
solution: ""            # conceptual approach
relatedPatterns: []     # links to related patterns
```

**Schema**: `schema:HowTo` (partial fit)

**Simon Grant attributes**: context, problem, solution

---

### practice (extends resource)

**Purpose**: Documented ways of doing

**Fields**:
```yaml
patterns: []            # patterns this embodies
practitioners: []       # links to person pages
```

**Schema**: `schema:HowTo`

---

### primitive (extends resource)

**Purpose**: Foundational building blocks

**Fields**:
```yaml
category: ""            # e.g., "governance", "coordination"
```

**Schema**: `schema:DefinedTerm`

---

### protocol (extends resource)

**Purpose**: Formal procedures

**Fields**:
```yaml
steps: []               # procedural steps (optional)
```

**Schema**: `schema:HowTo`

---

### playbook (extends resource)

**Purpose**: Implementation guides

**Schema**: `schema:HowTo`, `schema:Guide`

---

## Question Type

Questions are standalone — not a resource sub-type. Per Simon Grant, questions "sit at the growing edge of knowledge" and represent generative unknowns valuable to explore, distinct from commoned artifacts.

### question (extends file)

**Purpose**: Open research questions

**Fields**:
```yaml
status: ""              # open, exploring, resolved
related: []             # links to related content
proposedBy: []          # links to person pages
```

**Schema**: `schema:Question`

---

## Story Types

Stories are narratives about events, implementations, and ideas.

### story (parent, extends file)

**Fields**:
```yaml
release: ""             # creative release slug
```

**Schema**: `schema:Article`

*Note: `author` inherited from file type.*

---

### study (extends story)

**Purpose**: Case studies of real implementations

**Schema**: `schema:Report`, `schema:ScholarlyArticle`

---

### article (extends story)

**Purpose**: Formal essays, publications

**Fields**:
```yaml
url: ""                 # schema:url (original publication)
curator: ""             # internal workflow
harvester: ""           # internal workflow
```

**Schema**: `schema:Article`, `schema:BlogPosting`

*Note: `author` inherited from file type.*

---

### guide (extends story)

**Purpose**: Instructional content, tutorials, how-tos

**Schema**: `schema:HowTo`

---

## Data Types

Data types represent entities and actors in the world.

### data (parent, extends file)

**Schema**: Various entity types

---

### person (extends data)

**Purpose**: Individual profiles

**Fields**:
```yaml
aliases: []             # foaf:nick, schema:alternateName
roles: []               # schema:jobTitle
groups: []              # links to group pages (foaf:member inverse)
homepage: ""            # foaf:homepage, schema:url
email: ""               # foaf:mbox (optional, privacy-aware)
image: ""               # foaf:img, schema:image
```

**Schema**: `schema:Person`, `foaf:Person`

**FOAF Properties Reference**:
| Property | Description |
|----------|-------------|
| foaf:name | Full name |
| foaf:givenName | First name |
| foaf:familyName | Last name |
| foaf:nick | Nickname/handle |
| foaf:mbox | Email |
| foaf:homepage | Personal website |
| foaf:img | Profile image |
| foaf:knows | Relationships |
| foaf:currentProject | Active projects |
| foaf:interest | Topics of interest |

---

### group (extends data)

**Purpose**: Organizations, cells, DAOs, collectives

**Fields**:
```yaml
slug: ""                # official identifier
members: []             # links to person pages (foaf:member)
parent: ""              # parent organization (schema:parentOrganization)
homepage: ""            # foaf:homepage, schema:url
```

**Schema**: `schema:Organization`, `foaf:Group`

---

### project (extends data)

**Purpose**: Time-bounded collaborative endeavors

Distinct from **group**: Projects have specific aims and deliverables with defined timelines. Groups are ongoing organizational structures.

**Fields**:
```yaml
slug: ""                # official identifier
status: ""              # active, completed, archived
lead: []                # links to person pages (doap:maintainer)
contributors: []        # links to person pages (doap:developer)
group: ""               # owning cell/org (schema:parentOrganization)
repository: ""          # doap:repository
homepage: ""            # doap:homepage, schema:url
startDate: ""           # schema:startDate
endDate: ""             # schema:endDate (if completed)
```

**Schema**: `schema:Project`, `doap:Project`, `foaf:Project`

**DOAP Properties Reference**:
| Property | Description |
|----------|-------------|
| doap:name | Project name |
| doap:homepage | Project website |
| doap:description | Project description |
| doap:created | Creation date |
| doap:developer | Contributors |
| doap:maintainer | Project leads |
| doap:repository | Code/content repository |
| doap:category | Project category |

---

### place (extends data)

**Purpose**: Locations, bioregions

**Fields**:
```yaml
geo: ""                 # schema:geo (lat/long or GeoShape)
containedIn: ""         # schema:containedInPlace
region: ""              # bioregion identifier
```

**Schema**: `schema:Place`

---

### gathering (extends data)

**Purpose**: Events, conferences, meetings

**Fields**:
```yaml
location: ""            # link to place or text (schema:location)
startDate: ""           # schema:startDate
endDate: ""             # schema:endDate
organizers: []          # links to person/group pages (schema:organizer)
attendees: []           # links to person pages (schema:attendee)
outcomes: []            # links to resulting artifacts
```

**Schema**: `schema:Event`

---

## Release Views

Releases are surfaced through the Official Release mechanism in docs/:

1. Any folder in `docs/` containing an `index.base` file is treated as an official release
2. Release identity (title, description, etc.) comes from the sibling `index.md` frontmatter
3. Releases can be nested (a group can have multiple releases, including sub-releases)
4. Consumer UIs like the Knowledge Garden extract and display official releases
5. Content in a release can have any content type — the `index.base` query determines what's surfaced
6. The `release` field on resource/story types can still be used for metadata grouping independent of filesystem location

---

## Schema Usage Contexts

Schemas are used in multiple contexts with different requirements.

### Single Source of Truth

Schemas are defined once in a shared package and derived for each context:

```
@superbenefit/schemas (npm package or Cloudflare Worker)
├── src/
│   ├── file.ts           # File type Zod schema
│   ├── types/
│   │   ├── pattern.ts
│   │   ├── tag.ts
│   │   └── ...
│   ├── index.ts          # Exports all schemas
│   └── utils/
│       ├── toAstro.ts    # Convert to Astro collection schema
│       ├── toMetadataMenu.ts  # Generate fileClass YAML
│       └── toLLM.ts      # Simplify for structured model output
```

**Distribution options** (all on same Cloudflare account):
1. **Service binding**: Workers import schemas from a shared Worker
2. **npm package**: Publish to private registry, install in consumers
3. **R2 artifact**: Store compiled schemas in R2, fetch at runtime

### Zod (Knowledge Server, API, Agents)

Primary schema definition. Used for:
- API request/response validation
- Type inference in TypeScript
- OpenAPI spec generation via `@hono/zod-openapi`
- Structured model output with `zodResponseFormat`

```typescript
// Discriminated union for API responses
export const ContentSchema = z.discriminatedUnion('type', [
  PatternSchema.extend({ type: z.literal('pattern') }),
  TagSchema.extend({ type: z.literal('tag') }),
  // ...
]);
```

### Astro Content Collections

Directory-based collections with Zod schemas. PATH_TYPE_MAP directories map to collection names.

```typescript
// src/content/config.ts
import { toAstro } from '@superbenefit/schemas/utils';
import { PatternSchema, TagSchema } from '@superbenefit/schemas';

export const collections = {
  patterns: defineCollection({ schema: toAstro(PatternSchema) }),
  tags: defineCollection({ schema: toAstro(TagSchema) }),
  // ...
};
```

### Metadata Menu (Obsidian)

YAML-based fileClass definitions with different field types:

| Zod | Metadata Menu | Notes |
|-----|---------------|-------|
| `z.string()` | `Input` | — |
| `z.boolean()` | `Boolean` | — |
| `z.coerce.date()` | `Date` | — |
| `z.array(z.string())` | `Multi` | Simple lists |
| `z.array(z.string())` | `MultiFile` | Links with Dataview query |
| `z.enum([...])` | `Select` | Fixed options |

### Structured Model Output (toLLM)

Simplified schemas for LLM generation (exclude internal fields):

```typescript
import { toLLM } from '@superbenefit/schemas/utils';

const PatternOutputSchema = toLLM(PatternSchema);
// Automatically:
// - Removes internal fields (publish, draft, permalink, group)
// - Adds .describe() annotations from schema metadata
// - Keeps only fields the LLM should generate
```

---

## Knowledge Server Schema Updates

### ContentType Enum

```typescript
export const ContentTypeSchema = z.enum([
  // File type
  'file',
  // Reference types
  'reference', 'index', 'link', 'tag',
  // Resource types
  'resource', 'pattern', 'practice', 'primitive', 'protocol', 'playbook',
  // Question (standalone)
  'question',
  // Story types
  'story', 'study', 'article', 'guide',
  // Data types
  'data', 'person', 'group', 'project', 'place', 'gathering'
]);
```

### Parent Type Groupings

```typescript
export const RESOURCE_TYPES: ContentType[] = [
  'pattern', 'practice', 'primitive', 'protocol', 'playbook'
];
export const STORY_TYPES: ContentType[] = ['study', 'article', 'guide'];
export const REFERENCE_TYPES: ContentType[] = ['index', 'link', 'tag'];
export const DATA_TYPES: ContentType[] = [
  'person', 'group', 'project', 'place', 'gathering'
];
```

### PATH_TYPE_MAP

```typescript
export const PATH_TYPE_MAP: Record<string, ContentType> = {
  // Data — type-sorted
  'data/concepts':              'tag',
  'data/links':                 'link',
  'data/resources/patterns':    'pattern',
  'data/resources/practices':   'practice',
  'data/resources/primitives':  'primitive',
  'data/resources/protocols':   'protocol',
  'data/resources/playbooks':   'playbook',
  'data/stories/studies':       'study',
  'data/stories/articles':      'article',
  'data/stories/guides':        'guide',
  'data/questions':             'question',
  'data/people':                'person',
  'data/groups':                'group',
  'data/projects':              'project',
  'data/places':                'place',
  'data/gatherings':            'gathering',
  // Docs — type from frontmatter, not path
  'docs':                       'file',
};
```

### FileSchema

```typescript
export const FileSchema = z.object({
  type: ContentTypeSchema.optional(),  // Required in docs/; inferred from path in data/
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.coerce.date(),
  publish: z.boolean().default(false),
  draft: z.boolean().default(false),
  permalink: z.string().optional(),
  author: z.array(z.string()).optional(),  // links to person pages
  group: z.string().optional(),
});

// Type inference from path (data/ only; docs/ requires frontmatter type)
export function inferContentType(path: string): ContentType {
  for (const [prefix, type] of Object.entries(PATH_TYPE_MAP)) {
    if (path.startsWith(prefix)) return type;
  }
  return 'file';
}
```

### Vectorize Metadata Indexes

Vectorize supports up to 10 indexed metadata fields for filtering. Only published content is synced, so `publish`/`draft` are not needed.

```bash
# Create indexes (must be created BEFORE inserting vectors)
npx wrangler vectorize create-metadata-index superbenefit-knowledge --property-name=contentType --type=string
npx wrangler vectorize create-metadata-index superbenefit-knowledge --property-name=group --type=string
npx wrangler vectorize create-metadata-index superbenefit-knowledge --property-name=tags --type=string
npx wrangler vectorize create-metadata-index superbenefit-knowledge --property-name=release --type=string
npx wrangler vectorize create-metadata-index superbenefit-knowledge --property-name=status --type=string
npx wrangler vectorize create-metadata-index superbenefit-knowledge --property-name=date --type=number
```

| Field | Type | Purpose |
|-------|------|---------|
| `contentType` | string | Filter by type (pattern, tag, etc.) |
| `group` | string | Filter by cell/project |
| `tags` | string | Filter by tags |
| `release` | string | Filter by creative release |
| `status` | string | Filter projects by status |
| `date` | number | Sort by date (timestamp) |

---

## JSON-LD Context (Future)

For semantic web interoperability:

```json
{
  "@context": {
    "@vocab": "https://superbenefit.org/ontology/",
    "schema": "https://schema.org/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "doap": "http://usefulinc.com/ns/doap#",
    "dc": "http://purl.org/dc/terms/",
    
    "title": "schema:name",
    "description": "schema:description",
    "date": "dc:date",
    "author": "schema:author",
    "hasPart": "schema:hasPart",
    "isPartOf": "schema:isPartOf",
    "homepage": "foaf:homepage",
    "members": "foaf:member",
    "repository": "doap:repository"
  }
}
```

*Internal fields excluded from context: `publish`, `draft`, `permalink`, `group`*

---

## Migration Tasks

### Phase 1: Rename and restructure directories
1. [ ] Rename `notes/` → `docs/`
2. [ ] Create `data/` with type-sorted sub-directories
3. [ ] Move `tags/` → `data/concepts/`
4. [ ] Move `links/` → `data/links/`
5. [ ] Create `data/resources/{patterns,practices,primitives,protocols,playbooks}/`
6. [ ] Create `data/stories/{studies,articles}/`
7. [ ] Create `data/questions/`
8. [ ] Create `data/{people,groups,projects,places,gatherings}/`
9. [ ] Move content from `artifacts/` into appropriate `data/` or `docs/` locations
10. [ ] Remove `artifacts/` directory

### Phase 2: Update file type definitions
1. [ ] Rename `note.md` → `file.md` fileClass
2. [ ] Add fields to file.md: `draft`, `permalink`, `author`, `group`
3. [ ] Update all templates with new fields

### Phase 3: Create parent types
1. [ ] Create `resource.md` (extends file)
2. [ ] Create `story.md` (extends file)
3. [ ] Create `data.md` (extends file)

### Phase 4: Update existing types
1. [ ] Update `pattern.md` to extend resource
2. [ ] Update `playbook.md` to extend resource
3. [ ] Update `protocol.md` to extend resource
4. [ ] Update `study.md` to extend story
5. [ ] Update `article.md` to extend story (remove redundant `author` field)
6. [ ] Move `question` out of resource hierarchy to extend file directly
7. [ ] Remove/deprecate `artifact.md`
8. [ ] Remove/deprecate `guide.md` (use `article` instead)

### Phase 5: Create new types
1. [ ] Create `practice.md` (extends resource)
2. [ ] Create `primitive.md` (extends resource)
3. [ ] Create `person.md` (extends data)
4. [ ] Create `group.md` (extends data)
5. [ ] Create `project.md` (extends data)
6. [ ] Create `place.md` (extends data)
7. [ ] Create `gathering.md` (extends data)

### Phase 6: Update knowledge-server
1. [ ] Update `src/types/content.ts` with new PATH_TYPE_MAP
2. [ ] Update type groupings (RESOURCE_TYPES without question)
3. [ ] Run type-check

### Phase 7: Create shared schemas package
1. [ ] Create `@superbenefit/schemas` package
2. [ ] Implement `toLLM`, `toAstro`, `toMetadataMenu` utilities
3. [ ] Configure service bindings or npm publishing

---

## References

- Simon Grant: [Types of knowledge commons wiki pages](https://growingcommons.substack.com/p/types-of-knowledge-commons-wiki-pages)
- Simon Grant: [Inside a knowledge commons wiki page](https://growingcommons.substack.com/p/inside-a-knowledge-commons-wiki-page)
- [Schema.org](https://schema.org/)
- [FOAF Vocabulary](http://xmlns.com/foaf/spec/)
- [DOAP Vocabulary](http://usefulinc.com/ns/doap#)
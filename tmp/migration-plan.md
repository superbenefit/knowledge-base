# Knowledge Base Migration Plan

**From:** Current structure (artifacts/, notes/, tags/, links/)
**To:** Ontology v0.15 two-space model (docs/, data/, drafts/)
**Spec alignment:** Knowledge Server v0.16
**Execution model:** Agent-assisted with human-in-the-loop gates (see Execution Order)

---

## Current → Target Structure

```
CURRENT                              TARGET
───────                              ──────
notes/                          →    docs/                    (rename)
  ├── aifs/                          ├── aifs/
  ├── dao-primitives/                ├── dao-primitives/
  ├── general-circle/                ├── general-circle/
  ├── rpp/                           ├── rpp/
  ├── wp/                            ├── wp/
  ├── ics/                           ├── ics/
  ├── cxi/                           ├── cxi/
  └── archive/                  →    (moved to top-level archive/)

tags/                           →    data/concepts/           (move)
links/                          →    data/links/              (move)

artifacts/                      →    DECOMPOSED:
  typed files (pattern, etc.)   →    data/resources/{subtype}/
  guide files                   →    data/stories/articles/   (retype to article)
  release groups                →    docs/{group}/{release}/  (manual sort)
  release-typed files           →    manual sort

(new)                           →    data/resources/practices/
(new)                           →    data/resources/primitives/
(new)                           →    data/stories/studies/
(new)                           →    data/questions/
(new)                           →    data/people/
(new)                           →    data/groups/
(new)                           →    data/projects/
(new)                           →    data/places/
(new)                           →    data/gatherings/

notes/archive/                  →    archive/                 (top-level, not published/indexed)
drafts/                              drafts/                  (unchanged, gitignored)
tools/                               tools/                   (internal changes only)
attachments/                         attachments/             (unchanged)
```

---

## Phase 1: Directory Restructure

All file moves happen inside Obsidian to preserve wikilink resolution. Work on a git branch. Steps 1.1–1.5 are mechanical (Gate 1); Step 1.6 requires manual judgment (Gate 2). Commit after Gate 2 completes.

### Step 1.1 — Move `notes/archive/` → top-level `archive/`

Do this before renaming `notes/` so archive content doesn't land in `docs/`.

Move `notes/archive/` to `archive/` at vault root. This directory will not be published or indexed by the knowledge server. Add to `.gitignore` if you want it excluded from the repo entirely, or leave it tracked but unsynced (the knowledge server's `PATH_TYPE_MAP` won't match it, so it's ignored during sync).

### Step 1.2 — Rename `notes/` → `docs/`

Direct rename. Group subfolders (aifs, dao-primitives, rpp, etc.) carry over as-is. Obsidian updates internal links automatically.

### Step 1.3 — Create `data/` directory tree

Create the full tree with placeholder `index.md` files so git tracks empty directories and Obsidian recognizes them:

```
data/
├── concepts/           (will receive tags/ content)
├── links/              (will receive links/ content)
├── resources/
│   ├── patterns/
│   ├── practices/
│   ├── primitives/
│   ├── protocols/
│   └── playbooks/
├── stories/
│   ├── studies/
│   └── articles/
├── questions/
├── people/
├── groups/
├── projects/
├── places/
└── gatherings/
```

### Step 1.4 — Move `tags/` → `data/concepts/`

Move all 92 files plus `index.md`, `index.base`, `readme.md`.

### Step 1.5 — Move `links/` → `data/links/`

Move all 116 files plus `index.md`, `index.base`, `readme.md`.

### Step 1.6 — Decompose `artifacts/`

Three categories, handled in order:

**a) Retype guide files → article.** Find files with `type: guide`, change frontmatter to `type: article`. (3 files per the kb-structure-report.)

**b) Move loose typed files to `data/` buckets:**
- `type: pattern` → `data/resources/patterns/`
- `type: playbook` → `data/resources/playbooks/`
- `type: protocol` → `data/resources/protocols/`
- `type: primitive` → `data/resources/primitives/`
- `type: practice` → `data/resources/practices/`
- `type: study` → `data/stories/studies/`
- `type: article` (including former guides) → `data/stories/articles/`
- `type: question` → `data/questions/`

**c) Manual sort: release groups and release-typed files.** Move release group subdirectories (primitives-framework, reimagining-power, windfall-protocol, misc) and any `type: release` files to appropriate locations in `docs/{group}/` at your discretion. For each release group that should be an Official Release, ensure the target folder has:
- `index.md` with release identity frontmatter
- `index.base` file (create if one doesn't exist)

**d) Resolve dual-type files.** Files like `group-state.md` with `type: tag, pattern` — pick one primary type for filesystem placement. Use tags or links for the secondary association.

**e) Delete empty `artifacts/` directory** once everything is moved.

### Step 1.7 — Verify link integrity

Use Obsidian's unresolved links view or a Dataview query to surface broken links. Fix any that Obsidian missed during moves.

---

## Phase 2: Type System (FileClasses)

Changes to `tools/types/`. Back up the vault before starting this phase. Gate 3 requires human verification in Obsidian before proceeding to Phase 3.

### Step 2.1 — Rename root type: `note.md` → `file.md`

| Field | Change |
|-------|--------|
| `filesPaths` | `[notes, drafts]` → `[docs, drafts]` |
| `extends` | remove (it's the root) |
| Add field | `draft` (Boolean) |
| Add field | `permalink` (Input) |
| Add field | `author` (MultiFile — links to person pages) |
| Add field | `group` (Input — cell/project slug) |
| Keep | `title`, `description`, `date`, `publish` |

### Step 2.2 — Create parent types

**`resource.md`** (replaces artifact as parent for commoned knowledge):
```yaml
extends: file
filesPaths: []
fields:
  - { name: release, type: Input }
  - { name: hasPart, type: MultiFile }
  - { name: isPartOf, type: MultiFile }
```

**`story.md`**:
```yaml
extends: file
filesPaths: []
fields:
  - { name: release, type: Input }
```

**`data.md`** (parent for entity types):
```yaml
extends: file
filesPaths: []
```

### Step 2.3 — Update existing sub-types

| Type file | `extends` change | `filesPaths` change | Other |
|-----------|-----------------|--------------------|----|
| `pattern.md` | `artifact` → `resource` | `[artifacts/patterns]` → `[data/resources/patterns]` | — |
| `playbook.md` | `artifact` → `resource` | `[artifacts/playbooks]` → `[data/resources/playbooks]` | — |
| `protocol.md` | `artifact` → `resource` | → `[data/resources/protocols]` | — |
| `study.md` | `artifact` → `story` | → `[data/stories/studies]` | loses hasPart/isPartOf (not on story) |
| `article.md` | `artifact` → `story` | `[artifacts/articles]` → `[data/stories/articles]` | remove redundant author field |
| `tag.md` | `reference` (no change) | `[tags]` → `[data/concepts]` | — |
| `link.md` | `reference` (no change) | `[library]` → `[data/links]` | fixes pre-existing mismatch |
| `index.md` | `reference` (no change) | no change | — |
| `reference.md` | `note` → `file` | no change | update extends to new root name |

### Step 2.4 — Create new sub-types

| New type file | Extends | filesPaths | mapWithTag | Key fields |
|---------------|---------|------------|------------|-----------|
| `practice.md` | `resource` | `[data/resources/practices]` | `true` (`practices`) | patterns (MultiFile), practitioners (MultiFile) |
| `primitive.md` | `resource` | `[data/resources/primitives]` | `true` (`primitives`) | category (Input) |
| `question.md` | `file` | `[data/questions]` | `true` (`questions`) | status (Select: open/exploring/resolved), related (MultiFile), proposedBy (MultiFile) |
| `person.md` | `data` | `[data/people]` | `false` | aliases (Multi), roles (Multi), groups (MultiFile), homepage (Input), email (Input), image (Input) |
| `group.md` | `data` | `[data/groups]` | `false` | slug (Input), members (MultiFile), parent (Input), homepage (Input) |
| `project.md` | `data` | `[data/projects]` | `false` | slug (Input), status (Select: active/completed/paused/archived), lead (MultiFile), contributors (MultiFile), group (Input), repository (Input), homepage (Input), startDate (Date), endDate (Date) |
| `place.md` | `data` | `[data/places]` | `false` | geo (Input), containedIn (Input), region (Input) |
| `gathering.md` | `data` | `[data/gatherings]` | `false` | location (Input), startDate (Date), endDate (Date), organizers (MultiFile), attendees (MultiFile), outcomes (MultiFile) |

### Step 2.5 — Remove deprecated types

- Delete `artifact.md` (replaced by `resource`)
- Delete `guide.md` (deprecated, use `article`)
- Delete `release.md` (releases are now structural via `index.base`, not a content type)

---

## Phase 3: Frontmatter Normalization

Scripted pass over the vault to bring frontmatter into compliance with the ontology. Gate 4 requires a dry-run pass with human review before applying changes.

### Step 3.1 — Add `type` to docs/ files

Files in `docs/` need an explicit `type` field because the knowledge server can't infer type from path for that space. Script logic:
1. Scan all `.md` files in `docs/`
2. If `type` frontmatter exists and is valid → skip
3. If `type` is missing → add `type: file`

### Step 3.2 — Add `group` to docs/ files

Infer from first directory segment under `docs/`. For `docs/rpp/some-note.md` → `group: rpp`. Script logic:
1. Scan all `.md` files in `docs/`
2. Extract group slug from path
3. If `group` missing or mismatched → set it

### Step 3.3 — Normalize date format

Ontology requires `YYYY-MM-DD`. Some files use `DD-MM-YYYY`. Script to detect and convert.

### Step 3.4 — Add missing required fields

Scan all content files (docs/ and data/) for:
- Missing `publish` → add `publish: false`
- Missing `date` → add `date:` with file creation date or today's date
- Missing `title` → add `title:` derived from filename

### Step 3.5 — Clean up dual-type values

Find files where `type` contains multiple values (e.g., `type: tag, pattern`). Flag for manual resolution — filesystem placement determines the primary type.

---

## Phase 4: Templates

Update `tools/templates/layouts/`:

| Action | File |
|--------|------|
| Update | `note.md` → rename to match `file` root, add draft/permalink/author/group fields |
| Update | `pattern.md` — add release, hasPart, isPartOf from resource parent |
| Update | `study.md` — swap to story parent fields (release only, not hasPart/isPartOf) |
| Update | `article.md` — add url, curator, harvester; remove redundant author |
| Update | `tag.md` — verify fields match ontology |
| Update | `link.md` — verify fields match ontology |
| Delete | `guide.md` |
| Create | `practice.md` |
| Create | `primitive.md` |
| Create | `question.md` |
| Create | `person.md` |
| Create | `group.md` |
| Create | `project.md` |
| Create | `place.md` |
| Create | `gathering.md` |

---

## Phase 5: Supporting Files

### Step 5.1 — Update sync workflow

`tools/workflows/syncing-content/SKILL.md` references old directory names. Update all source/target paths to new structure. If the knowledge-garden (Quartz) sync is still in use, its script needs rewriting for the new layout.

### Step 5.2 — Update `agents.md`

Replace Knowledge Base Structure section with new directory layout.

### Step 5.3 — Update root docs

`README.md`, `CONTRIBUTING.md`, root `index.md` — update any directory path references.

### Step 5.4 — Update Dataview queries

Any queries referencing old paths (`FROM "artifacts"`, `FROM "tags"`, `FROM "notes"`, `FROM "links"`) need updating. Check:
- All `index.md` files in content directories
- Any files using inline Dataview queries
- Template files with embedded queries

### Step 5.5 — Decide `archive/` git tracking

The knowledge server ignores `archive/` regardless (no PATH_TYPE_MAP match). If you also want it excluded from the git repo, add `archive/` to `.gitignore`.

---

## Phase 6: Validation

### Step 6.0 — Pre-migration snapshot (do BEFORE Phase 1)

Capture baseline:
- File count per directory
- File count per type (Dataview query)
- List of all files with current paths

### Step 6.1 — Type system check

- Open Metadata Menu settings, confirm all fileClasses load
- Verify inheritance chains (e.g., pattern → resource → file)
- Confirm files in each `data/` subdirectory auto-detect their type via filesPaths

### Step 6.2 — Content integrity

- Dataview count of files by type — compare against pre-migration snapshot
- Scan for orphaned files (not in any recognized directory)
- Scan for broken internal links
- Verify no files remain in old directories (artifacts/, tags/, links/, notes/)

### Step 6.3 — Knowledge server compatibility

- `PATH_TYPE_MAP` in spec v0.16 matches actual directory structure
- All `docs/` files have `type` frontmatter
- All `data/` files have type inferable from their path
- Spot-check frontmatter against Zod schemas in the spec

---

## Execution Order

This plan is designed for agent-assisted execution with human-in-the-loop gates. The agent should execute steps within a gate, then **stop and present results for review** before proceeding to the next gate. Steps marked 🧑 require human judgment and cannot be automated.

---

### Gate 0: Baseline
**Agent executes → human reviews before any changes**

```
0a. SNAPSHOT  — Capture pre-migration file counts and paths (Phase 6.0)
0b. BRANCH   — Create migration branch
```

**STOP.** Present snapshot to human. Confirm file counts and directory listing look correct before proceeding. This is the rollback baseline.

---

### Gate 1: Mechanical Moves
**Agent executes → human reviews diff**

Steps 1.1–1.5 are purely mechanical (renames and moves with no judgment calls).

```
1a. ARCHIVE  — Move notes/archive/ → archive/           (Step 1.1)
1b. RENAME   — notes/ → docs/                            (Step 1.2)
1c. CREATE   — data/ directory tree with index.md files   (Step 1.3)
1d. MOVE     — tags/ → data/concepts/                     (Step 1.4)
1e. MOVE     — links/ → data/links/                       (Step 1.5)
```

**STOP.** Present git diff summary (files moved, counts). Human confirms before proceeding to the manual decomposition step.

---

### Gate 2: Artifacts Decomposition
**Mixed — agent handles a/b, human handles c/d/e**

```
2a. RETYPE   — guide → article (3 files)                 (Step 1.6a)
2b. MOVE     — typed files to data/ buckets               (Step 1.6b)
```

**STOP.** Present list of files moved and any files that couldn't be classified (no `type` field, unrecognized type, multiple types). Then:

```
2c. 🧑 SORT  — Release groups → docs/{group}/ placement  (Step 1.6c)
2d. 🧑 DUAL  — Resolve dual-type files                   (Step 1.6d)
2e. 🧑 CLEAN — Delete empty artifacts/ directory          (Step 1.6e)
```

**STOP.** Human completes manual sort, confirms artifacts/ is empty. Agent then runs link integrity check:

```
2f. VERIFY   — Link integrity check                       (Step 1.7)
```

**STOP.** Present broken links report. Human fixes any that need judgment (e.g., ambiguous targets). Then:

```
2g. COMMIT   — Commit Phase 1 (directory restructure)
```

---

### Gate 3: Type System
**Agent executes → human verifies in Obsidian**

```
3a. TYPES    — All FileClass changes                      (Phase 2: Steps 2.1–2.5)
3b. COMMIT   — Commit Phase 2
```

**STOP.** Human opens Obsidian and verifies:
- All fileClasses load in Metadata Menu settings
- Inheritance chains resolve (pattern → resource → file)
- Files in `data/` subdirectories auto-detect their type
- No Metadata Menu errors in console

Do not proceed to frontmatter scripts until the type system is confirmed working.

---

### Gate 4: Frontmatter Normalization
**Agent executes in dry-run → human reviews → agent applies**

```
4a. DRY-RUN  — Run all frontmatter scripts in preview mode (Phase 3: Steps 3.1–3.4)
```

**STOP.** Present dry-run diff: files that would be modified, fields that would be added/changed. Human reviews for unexpected changes (especially date conversions and type assignments).

```
4b. APPLY    — Run frontmatter scripts for real
4c. 🧑 DUAL  — Resolve flagged dual-type files            (Step 3.5)
4d. COMMIT   — Commit Phase 3
```

**STOP.** Human resolves any dual-type flags before committing.

---

### Gate 5: Templates & Docs
**Agent executes → human spot-checks**

```
5a. TEMPL    — Template updates                           (Phase 4)
5b. DOCS     — Supporting file updates                    (Phase 5: Steps 5.1–5.4)
```

**STOP.** Present list of changed files. Human reviews, especially sync workflow changes (Step 5.1) and Dataview query updates (Step 5.4).

```
5c. 🧑 DECIDE — archive/ git tracking                    (Step 5.5)
5d. COMMIT    — Commit Phases 4–5
```

---

### Gate 6: Validation & Merge
**Agent executes validation → human reviews → merge**

```
6a. CHECK    — Full validation suite                      (Phase 6: Steps 6.1–6.3)
```

**STOP.** Present validation report:
- File count comparison (pre vs. post migration)
- Orphaned files
- Broken links
- Type system integrity
- PATH_TYPE_MAP alignment
- docs/ files missing `type` frontmatter

Human reviews. If clean:

```
6b. PR       — Open pull request for review
6c. 🧑 MERGE — Human merges after final review
```

---

### Gate Summary

| Gate | Steps | Human Action | Can Skip? |
|------|-------|-------------|-----------|
| 0: Baseline | Snapshot, branch | Review counts | No |
| 1: Mechanical Moves | 1.1–1.5 | Review diff | No |
| 2: Decomposition | 1.6a–e, 1.7 | Manual sort, link fixes | No (has 🧑 steps) |
| 3: Type System | Phase 2 | Verify in Obsidian | No |
| 4: Frontmatter | Phase 3 | Review dry-run, resolve duals | No (has 🧑 steps) |
| 5: Templates & Docs | Phases 4–5 | Spot-check, decide archive | Yes if confident |
| 6: Validation | Phase 6 | Review report, merge | No |

---

## Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Link breakage from file moves | All moves inside Obsidian; Gate 2 includes link integrity check before commit |
| Metadata Menu instability from type restructure | Gate 3 requires human verification in Obsidian before proceeding; Phase 1 committed separately so issues are isolatable |
| Scale of docs/ rename (~1,720 files) | Gate 1 is purely mechanical — do during low-activity period; Obsidian handles bulk renames but may be slow |
| Frontmatter scripts damaging content | Gate 4 runs dry-run first; human reviews diff before apply step |
| Agent executing manual-judgment steps | 🧑 steps in Gates 2, 4, 5 require explicit human action; agent stops and presents context |
| Knowledge-garden sync breaks | Gate 5 updates sync scripts; human spot-checks before commit |
| No rollback point | Gate 0 captures baseline snapshot; each gate commits separately for granular revert |
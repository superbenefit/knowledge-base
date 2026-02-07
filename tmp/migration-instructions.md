# Knowledge Base Migration — Gate 0

## Task

Execute **Gate 0 (Baseline)** of the knowledge base migration plan, then stop.

## Context

You are migrating the SuperBenefit knowledge base from its current structure (`artifacts/`, `notes/`, `tags/`, `links/`) to the ontology v0.15 two-space model (`docs/`, `data/`, `drafts/`). The migration plan uses a gated execution model — you execute steps within a gate, present results, and wait for human approval before proceeding.

## Reference Documents

Read these before starting:

1. **migration-plan.md** — The full migration plan with HITL gates. This is your primary instruction set.
2. **ontology.md** — The target filesystem structure and type definitions. This is the source of truth for what the final state should look like.
3. **spec.md** (v0.16) — The knowledge server specification. The `PATH_TYPE_MAP` in §3.5 defines the exact directory→type mappings you're targeting.

## Gate 0 Steps

### 0a. SNAPSHOT

Capture the pre-migration baseline:

1. **File count per top-level directory** — `artifacts/`, `notes/`, `tags/`, `links/`, `data/`, `tools/`, `attachments/`, `drafts/`, and any others
2. **File count per content type** — Run a Dataview or script query to count files by their `type` frontmatter field
3. **Full file listing** — All `.md` files with their current paths, saved to a file for later comparison
4. **Directory tree** — Current structure (depth 2-3) for visual reference

Save the snapshot output so it can be compared against post-migration state in Gate 6.

### 0b. BRANCH

Create a git branch: `migration/ontology-v015`

## What to Present

After completing Gate 0, present:

- File counts by directory
- File counts by type
- Any anomalies (files outside expected directories, files with no type, files with multiple types)
- Confirmation the branch was created

## What NOT to Do

- Do NOT move, rename, or modify any files
- Do NOT proceed to Gate 1
- Do NOT make any changes to the working tree beyond creating the branch

Wait for human review and explicit approval to proceed to Gate 1.

---

## Subsequent Gates

When approved to continue, refer to the **Execution Order** section of `migration-plan.md` for each subsequent gate. The key rule: **execute the gate's steps, then STOP and present results.** Never proceed to the next gate without explicit approval.

Steps marked 🧑 require human action — present the context and wait.
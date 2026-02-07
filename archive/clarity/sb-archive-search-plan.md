# SuperBenefit Archive Search Plan for DAO State Content

## Overview
This plan provides a systematic approach to extract governance-relevant content from the SuperBenefit Clarity archive (F:\projects\sb-knowledge-base\drafts\sb-clarity) for populating the DAO state repository. The workflow is designed to be completed in 4-6 hours with human-AI collaboration.

## Phase 1: Priority Document Extraction (1.5 hours)

### Step 1.1: Core Governance Documents
**Target Files:**
- `Tags/governance.md`
- `Tags/governance concept v2.1.md` 
- `Tags/community governance.md`
- `Tags/operational governance.md`
- `Tags/superbenefit governance.md`
- `Tags/general circle.md`
- `Tags/dao administration.md`

**AI Task:** Extract and analyze these files for:
- Governance structures and frameworks
- Decision-making processes
- Authority delegation patterns
- Role definitions
- Policy frameworks

**Output:** Governance Framework Summary document

### Step 1.2: Proposal Templates and Processes
**Target Files:**
- `Tags/governance proposals.md`
- `Tags/proposals.md`
- All files with "proposal" in the name, especially:
  - `Tags/proposal sbp11- dao systems transformation repository-library.md`
  - `Tags/proposal sbp9- conflict of interest - draft.md`
  - Files in `Groups/General/Tasks/` starting with "Proposal"

**AI Task:** Extract proposal formats, approval processes, and any implemented proposals

**Output:** Proposal Process Documentation

### Step 1.3: Role and Squad Documentation
**Target Files:**
- `Tags/roles.md`
- `Tags/contributor role.md`
- `Tags/squad lead.md`
- `Tags/squads.md`
- `Tags/cells.md`
- `Tags/roleadviceprocess.md`

**AI Task:** Map organizational structure, role definitions, and coordination mechanisms

**Output:** Organizational Structure Map

## Phase 2: Agreement and Policy Mining (1.5 hours)

### Step 2.1: Contributor and Community Agreements
**Target Files:**
- `Tags/superbenefit contributor guide - v1.md`
- `Tags/superbenefit contributor guide - working draft.md`
- `Tags/community.md`
- `Tags/ethos.md`
- `Tags/purpose.md`
- `Tags/mission.md`

**AI Task:** Extract behavioral norms, values, participation requirements, and community standards

**Output:** Community Agreement Components

### Step 2.2: Operational Policies
**Target Files:**
- `Tags/operations.md`
- `Tags/coordination.md`
- `Tags/decision-making.md`
- `Tags/contributor voting.md`
- `Tags/treasury.md`
- Meeting notes in `Groups/General/Docs/` (especially those mentioning policies)

**AI Task:** Identify operational procedures, resource allocation policies, and coordination mechanisms

**Output:** Operational Policy Components

### Step 2.3: Platform and Technical Policies
**Target Files:**
- `Tags/discord.md`
- `Tags/clarity.md`
- `Tags/tooling.md`
- Any technical governance documentation

**AI Task:** Extract digital infrastructure governance and platform usage policies

**Output:** Platform Policy Components

## Phase 3: Historical Context and Precedents (1 hour)

### Step 3.1: Key Proposals and Decisions
**Search Pattern:** All files containing "SBP" (SuperBenefit Proposal) numbers
**Additional Sources:**
- Meeting notes with "proposal" mentions
- Task files marked as completed (✅) that reference proposals

**AI Task:** Create a chronological list of governance decisions with outcomes

**Output:** Historical Proposal Registry

### Step 3.2: Cell/Squad Formation Documents
**Target Directories:**
- `Groups/DAO Primitives/Docs/`
- `Groups/Reimagining Power/Docs/`
- `Groups/WREEP/Docs/`

**AI Task:** Extract cell formation templates, working agreements, and governance structures

**Output:** Cell Governance Patterns

## Phase 4: Synthesis and Organization (1 hour)

### Step 4.1: Content Categorization
**Human Task:** Review AI outputs and categorize content into:
- Agreements (Community vs Operational)
- Policies (Metagovernance, Operations, Platforms)
- Proposals (For archive)
- Templates (For future use)

### Step 4.2: Gap Analysis
**Human-AI Task:** Compare extracted content against DAO state structure to identify:
- Missing policy areas
- Incomplete agreements
- Undocumented processes
- Areas needing synthesis from multiple sources

### Step 4.3: Priority Drafting List
**Output:** Prioritized list of documents to create/adapt for DAO state

## Search Execution Instructions

### For Each Phase:
1. **AI searches** target files and extracts relevant content
2. **Human reviews** extracts for accuracy and relevance
3. **AI synthesizes** findings into structured outputs
4. **Human validates** and marks content for DAO state inclusion

### Search Commands Template:
```
For [Target File]:
1. Read file completely
2. Extract sections related to [governance/policies/agreements/proposals]
3. Identify any referenced documents or dependencies
4. Note implementation status or dates
5. Flag any contradictions with other documents
```

### Quality Checks:
- Cross-reference dates to ensure latest versions
- Verify proposal outcomes against implementation
- Check for superseded policies
- Identify active vs. historical content

## Expected Outputs

By completion, you should have:
1. **Governance Framework Summary** - Core governance structures and processes
2. **Community Agreement Components** - Values, norms, and participation standards  
3. **Operational Policy Components** - Procedures and coordination mechanisms
4. **Platform Policy Components** - Digital infrastructure governance
5. **Historical Proposal Registry** - Chronological decision record
6. **Cell Governance Patterns** - Reusable organizational templates
7. **Priority Drafting List** - What needs to be created for the DAO state

## Time Estimates
- Phase 1: 1.5 hours
- Phase 2: 1.5 hours  
- Phase 3: 1 hour
- Phase 4: 1 hour
- Buffer: 0.5-1 hour
- **Total: 4.5-5 hours**

## Next Steps
After completing this search plan:
1. Use outputs to populate the customized DAO state template
2. Draft missing agreements and policies based on extracted patterns
3. Create the operating agreement using identified governance structures
4. Archive historical proposals in the proper format
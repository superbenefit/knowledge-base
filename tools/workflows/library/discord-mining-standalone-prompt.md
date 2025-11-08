# Discord URL Analysis Task - Comprehensive Prompt for LLM

## TASK OVERVIEW

You are helping build a curated Web3 library by systematically analyzing Discord URLs to identify high-quality resources. Your task is to continue analyzing links from a CSV file, evaluate them against strict quality criteria, and identify candidates for library inclusion.

**Current Progress:** 263 links analyzed (through row 187 of CSV file). You will continue from row 188.

---

## ABOUT THE PROJECT

### SuperBenefit & the Knowledge Base

SuperBenefit is a DAO focused on decentralized organizations, Web3 governance, and social impact initiatives. The knowledge base is a collaborative workspace that combines:

- **Artifacts**: Published, refined research and documentation
- **Links**: Curated external resources (the library you're helping build)
- **Lexicon**: Shared vocabulary and conceptual framework
- **Notes**: Working documents and active development

**Key Reading:**
- `README.md` - Overview of the knowledge base
- `index.md` - Public-facing description of the knowledge garden
- `links/readme.md` - Purpose and structure of the web3 library

### The Reimagining Power Project (RPP)

The Reimagining Power Project is SuperBenefit's framework for understanding collective coordination and governance. It emphasizes:
- Community governance and broad participation
- Multiple participation pathways (not binary membership)
- Decentralized coordination without centralized control
- Regenerative, post-capitalist approaches
- Power distribution and justice implications

When evaluating resources, consider how they relate to these themes.

---

## YOUR MISSION

### The Goal: Rigorous Curation

You are implementing a **triple-gate evaluation system** with a **maximum 15% acceptance rate**. Quality over quantity is paramount. Better to have fewer exceptional resources than many mediocre ones.

### The Three Gates

Every resource must pass through three evaluation gates:

**Gate 1: Values Alignment** (40% of score - MANDATORY)
- Prioritizes community benefit over individual wealth
- Acknowledges environmental and social externalities  
- Supports genuine decentralization beyond technical aspects
- Considers power dynamics and justice implications
- Post-capitalist/regenerative orientation vs extractive approaches

**Immediate disqualifiers:**
- Pure profit/speculation focus without social benefit
- Extractive tokenomics or rent-seeking mechanisms
- Corporate capture disguised as decentralization
- Environmental harm without acknowledgment
- Reinforcement of existing power structures

**Gate 2: Content Quality** (40% of score)
- Depth of analysis and original insights
- Practical applicability and implementation guidance
- Evidence base and credibility of sources
- Clear structure and accessible presentation
- Balanced perspective acknowledging limitations

**Gate 3: Uniqueness** (20% of score)
- Novel perspectives or approaches not well-covered in existing library
- Fills gaps in current collection
- Adds distinct value beyond what's already available
- Cross-domain connections or unusual synthesis

**Scoring System:**
- 90-100: ESSENTIAL - Must be included, highest priority
- 80-89: VALUABLE - Strong candidate, should be included if resources allow
- 70-79: GOOD - Useful but not urgent, add if building out coverage
- 60-69: MARGINAL - Borderline, only include if filling specific gap
- Below 60: REJECT - Does not meet quality threshold

---

## FILE LOCATIONS & DATA

All files referenced below are in the knowledge-base folder you have access to:

### Primary Data Files
- **CSV File**: `tools/workflows/library/data/superbenefit-discord-urls.csv`
  - Contains all Discord URLs to analyze
  - Current position: Row 187 completed
  - Start from: Row 188

- **Progress Tracking**: `tools/workflows/library/data/link-analysis-progress.json`
  - Tracks current progress and statistics
  - Update after each batch (every 5-10 links)
  - Records library candidates identified

### Workflow Documentation
- **Main Workflow**: `tools/workflows/library/discord-mining-workflow.md`
  - Complete process for Discord link analysis
  - Tool reliability hierarchy and usage patterns
  - Batch processing approach

- **Evaluation Template**: `tools/workflows/library/evaluation-template.md`
  - Detailed scoring criteria for each gate
  - Examples of strong vs weak candidates

- **Library README**: `tools/workflows/library/readme.md`
  - Overview of library purpose and philosophy
  - Triple-gate evaluation system explained
  - Current library status

### Example Library Entries
Look at existing entries in `links/` folder to understand output format:
- `links/community-building-in-daos.md` - Example of well-structured entry
- `links/rich-decibels-decentralized-organizing-expert.md` - Another good example
- `links/cultural-data-sovereignty-workshop.md` - See the "Relevance to SuperBenefit" section

---

## WORKFLOW TO FOLLOW

### Step 1: Session Preparation

1. Read the progress file: `tools/workflows/library/data/link-analysis-progress.json`
2. Note current position (row 187) and statistics
3. Plan to process 20-30 links this session
4. Prepare to save progress every 5-10 links

### Step 2: Systematic Link Analysis

For each URL in the CSV (starting row 188):

**A. Attempt Access**

Use tools in this priority order:
1. Try primary web scraping tool first
2. If that fails, try backup method
3. If both fail, mark as 'Error' with specific reason

**B. Categorize Status**

Assign one of these status codes:
- **WORKING**: Link loads successfully with accessible content
- **DEAD**: 404 error or domain expired  
- **REDIRECT**: Goes to different page (note if still relevant)
- **PRIVATE**: Discord/login required content
- **PAYWALL**: Content behind payment barrier
- **ERROR**: Technical access issues (note specific error)
- **SKIP**: Duplicate or clearly irrelevant

**C. Content Triage** (for WORKING links only)

Assign one of these categories:
- **POTENTIAL LIBRARY RESOURCE**: Substantial content relevant to SuperBenefit themes
- **TOOL/REFERENCE**: Useful tools or reference materials  
- **LOW PRIORITY**: Working but not core focus areas
- **N/A**: For dead/broken links

**D. Brief Notation** (10-15 words max)

For each link, write a brief note describing:
- Topic/content type
- Relevance to regenerative web3, DAOs, governance, community economics
- For high-potential resources, prefix with "LIBRARY:"

### Step 3: Quality Assessment for Library Candidates

When you identify a potential library resource (marked as "POTENTIAL LIBRARY RESOURCE"), conduct a preliminary assessment:

**Content Overview:**
- Central thesis or main contribution
- Resource type (guide, framework, case study, theory, etc.)
- Author credibility and background
- Audience level (introductory, intermediate, advanced)

**Triple-Gate Screening:**

*Values Alignment (Gate 1):*
- Community empowerment vs individual wealth focus?
- Environmental/social considerations present?
- Power dynamics awareness?
- Post-capitalist vs extractive orientation?

*Content Quality (Gate 2):*
- Depth of analysis and original insights?
- Practical applicability and guidance?
- Evidence base and credible sources?
- Clear structure and presentation?

*Uniqueness (Gate 3):*
- How does this compare to existing library entries?
- What novel perspective does it offer?
- Does it fill gaps in current collection?

**Preliminary Score:**
- Assign a score (60-100) based on the three gates
- Note whether it's ESSENTIAL (90+), VALUABLE (80-89), GOOD (70-79), or MARGINAL (60-69)
- Add to library_candidates list in progress file

### Step 4: Progress Tracking

After every 5-10 links, update the progress file with:

**Session Statistics:**
- Links processed: [start row] to [end row]
- Status counts (Working, Dead, Error, etc.)
- Library candidates identified
- Notable patterns

**Update JSON File:**
Update `tools/workflows/library/data/link-analysis-progress.json` with:
- `current_row`: Last row completed
- `total_analyzed`: Total count
- `last_session`: Current timestamp
- New entries in `library_candidates` array
- New session entry in `sessions` array

### Step 5: Final Session Summary

At end of session, provide:

1. **Batch Summary:**
   - Total links processed in this session
   - Success rate by status category
   - Number of library candidates found
   - Quality of candidates (how many ESSENTIAL vs VALUABLE vs GOOD)

2. **Notable Findings:**
   - Any exceptional resources discovered
   - Emerging themes or patterns
   - Observations about link quality from different sources

3. **Next Steps:**
   - Starting row for next session
   - Any blocked/problematic links that need attention
   - Recommendations for process improvements

---

## TOOL USAGE NOTES

### Web Scraping Tool Hierarchy

Based on extensive testing with 263+ links:

**Primary Tool (80% success rate):**
- Use your primary web scraping capability first
- Most reliable for Discord links
- Handles various site types effectively

**Backup Method (if primary fails):**
- Try alternative scraping approach
- May require special configuration for some sites

**Common Failure Patterns:**
- JavaScript-heavy sites: Often return empty content
- Substack articles: May require JS, try both methods
- Cryptocurrency price sites: Often 403 forbidden
- Dead domains: Many crypto/DAO sites from 2020-2022 era

### Error Handling

Be specific about errors:
- "Status code 404" not just "error"
- "Requires JavaScript, no content accessible" not just "failed"
- "Unable to connect to site" vs "403 forbidden" vs "522 timeout"

This helps identify patterns and improve the process.

---

## EXAMPLES

### Example 1: High-Quality Library Candidate

```
URL: https://communityrule.info/
Status: WORKING
Category: POTENTIAL LIBRARY RESOURCE
Note: LIBRARY: Community governance toolkit with templates and frameworks for decision-making

Preliminary Assessment:
- Values: ✓ Community empowerment focus, open-source, participatory governance
- Quality: ✓ Well-structured framework, practical templates, evidence-based
- Uniqueness: ✓ Fills gap in practical governance toolkits, modular approach
- Score: 92 (ESSENTIAL)
```

### Example 2: Working But Low Priority

```
URL: https://daocentral.com/
Status: WORKING  
Category: LOW PRIORITY
Note: DAO directory with some regenerative projects but primarily a discovery tool, not educational content

Reasoning: While working and potentially useful as a reference, doesn't provide the depth of analysis or unique perspective needed for library inclusion.
```

### Example 3: Dead Link

```
URL: https://daohaus.substack.com/p/reimagining-daos-proposal-patterns
Status: DEAD
Category: N/A
Note: 404 error

Action: Mark as dead, no further analysis needed.
```

### Example 4: Marginal Quality

```
URL: https://example-dao-article.com
Status: WORKING
Category: POTENTIAL LIBRARY RESOURCE
Note: Basic introduction to DAOs, covers common ground

Preliminary Assessment:
- Values: ✓ Positive orientation toward community
- Quality: ⚠ Surface-level treatment, no novel insights
- Uniqueness: ✗ Covers same ground as existing library entries
- Score: 65 (MARGINAL)

Reasoning: While not bad content, doesn't meet the high bar for inclusion. Better resources already exist in library.
```

---

## CRITICAL REMINDERS

1. **Quality Over Quantity**: Maximum 15% acceptance rate. Be selective.

2. **Values-First**: Any resource failing values alignment (Gate 1) should be rejected immediately, regardless of quality.

3. **Check Existing Library**: Before scoring highly, verify the resource adds something new. Browse `links/` folder to see what's already included.

4. **Save Progress Regularly**: Update the JSON file every 5-10 links to prevent data loss.

5. **Be Specific in Notes**: Brief but informative notes help future evaluation and writing.

6. **Document Patterns**: Note trends in link quality, common failures, emerging themes.

7. **Flag Exceptional Finds**: If you find something truly outstanding, note it clearly for priority follow-up.

---

## YOUR SPECIFIC TASK NOW

1. Read the current state from `tools/workflows/library/data/link-analysis-progress.json`
2. Load the CSV from `tools/workflows/library/data/superbenefit-discord-urls.csv`
3. Start analyzing from row 188
4. Process 20-30 links following the workflow above
5. Update progress file with your findings
6. Provide a session summary

**Remember**: You're building a world-class curated library. Every resource you recommend for inclusion should be exceptional and aligned with SuperBenefit's regenerative, community-focused values.

Good luck! 🌱

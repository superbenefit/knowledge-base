# SuperBenefit Web3 Library Workflow Guide

## Current Status (As of July 2025)

### ✅ Completed
- Implemented rigorous curation strategy with triple-gate system
- Re-evaluated 29 articles from pipeline
- Reduced from 11 "ESSENTIAL" to only 6 articles passing all gates
- Created comprehensive documentation for the new process
- Analyzed 227+ Discord links with systematic mining process

### 📍 Current State - Dual Pipeline Approach

#### Pipeline 1: Approved Articles (Ready to Write)
- **Articles Ready to Write**: 6 (in `final-ready-to-write.md`)
- **Articles Rejected**: 23 (documented in `rejected-articles-log.md`)
- **Values Concerns Documented**: 4 articles (in `values-concerns.md`)
- **Status**: Ready for library entry creation

#### Pipeline 2: Discord Mining (Ongoing Discovery)
- **Discord Links Analyzed**: 227+ (tracked in `link-analysis-progress.json`)
- **Library Candidates Identified**: 14+ (requires triple-gate evaluation)
- **Working Links Found**: 132 (mix of tools, articles, resources)
- **Status**: Continuous discovery feeding evaluation pipeline

### 🎯 Immediate Priorities
1. **Write library entries** for 6 approved articles (Pipeline 1)
2. **Evaluate Discord candidates** using triple-gate system (Pipeline 2)
3. **Continue Discord mining** to discover additional resources

## Quick Reference: Article Evaluation Workflow

### Step 1: Triple Gate Check (ALL MUST PASS)
```
[ ] VALUES ALIGNMENT GATE
    - Check against values disqualifiers
    - Verify regenerative approach
    - Document any concerns

[ ] QUALITY STANDARDS GATE
    - Verify depth and expertise
    - Check for original insights
    - Assess writing quality

[ ] UNIQUENESS FILTER
    - Compare to existing library
    - Assess similarity percentage
    - Verify novel value addition
```

### Step 2: Strategic Scoring (Only if passed all gates)
```
Theme Relevance (25%): ___ / 25
Depth & Actionability (25%): ___ / 25
Audience Alignment (20%): ___ / 20
Innovation Factor (15%): ___ / 15
Implementation Readiness (10%): ___ / 10
Authority & Credibility (5%): ___ / 5
TOTAL: ___ / 100
```

### Step 3: Final Decision
- **90-100**: ESSENTIAL (max 3-5 per cycle)
- **75-89**: VALUABLE (max 10% acceptance)
- **60-74**: CONSIDER (parking lot)
- **<60**: REJECT

## Daily Workflow Integration

### For Discord Link Mining
1. **Command**: "follow start-link-analysis.md" to continue systematic analysis
2. **Batch Size**: 20 links per session (prevents overwhelm)
3. **Progress**: Automatically saved in `link-analysis-progress.json`
4. **Success Rate**: ~80% using optimized obsidian-mcp-tools:fetch method
5. **Output**: Library candidates marked for evaluation

### For New Article Evaluation (All Sources)
1. **Open**: `rigorous_curation_strategy.md` for reference
2. **Use**: Triple gate checklist first (fail fast approach)
3. **Sources**: 
   - Pipeline 1: Original curated articles
   - Pipeline 2: Discord mining candidates
   - Ad-hoc: New submissions/discoveries
4. **Document**: 
   - Rejections in `rejected-articles-log.md`
   - Values concerns in `values-concerns.md`
   - Accepted articles in `final-ready-to-write.md`

### For Writing Library Entries
1. **Check**: `final-ready-to-write.md` for next priority
2. **Reference**: `/tools/workflows/library` for templates
3. **Follow**: Library entry format established in existing entries
4. **Update**: Status in this workflow document when complete

### Integration Decision Points
- **When both pipelines have approved articles**: Prioritize by score + strategic value
- **When Discord mining yields high-value finds**: Pause writing to evaluate immediately
- **When original pipeline is complete**: Focus fully on Discord candidate evaluation

## File Organization

```
/notes/library/
├── web3-library-workflow.md (THIS FILE - main workflow guide)
├── rigorous_curation_strategy.md (complete evaluation framework)
├── final-ready-to-write.md (approved articles queue)
├── values-concerns.md (borderline cases documentation)
├── rejected-articles-log.md (transparency log)
├── evaluation-template.md (blank template for new evaluations)
├── current-status.md (snapshot for handoffs)
├── superbenefit-discord-urls.csv (raw Discord links for mining)
├── link-analysis-progress.json (Discord mining progress & candidates)
├── link-analysis-usage-guide.md (Discord mining instructions)
└── start-link-analysis.md (executable Discord mining command)
```

## For Future LLMs/Humans

### Context You Need
- SuperBenefit focuses on regenerative, post-capitalist web3 approaches
- Library should be highly curated, not comprehensive
- Values alignment is mandatory - technical quality alone isn't enough
- Target max 15% acceptance rate for new articles

### Where to Start
1. Read `rigorous_curation_strategy.md` for full framework
2. Check `current-status.md` for latest progress
3. Review `final-ready-to-write.md` for immediate tasks
4. See `values-concerns.md` for edge case precedents
5. Check `link-analysis-progress.json` for Discord mining status
6. Use "follow start-link-analysis.md" to continue link discovery

### Key Commands to Use
```bash
# To see all library management files
ls /Users/heenal/Documents/GitHub/knowledge-base/notes/library/

# To check current article queue
cat /Users/heenal/Documents/GitHub/knowledge-base/notes/library/final-ready-to-write.md

# To see the evaluation framework
cat /Users/heenal/Documents/GitHub/knowledge-base/notes/library/rigorous_curation_strategy.md
```

## Quality Standards for Library Entries

### Essential Components
1. **Metadata Block**: Complete with title, description, type, source, author, tags
2. **Introduction**: Context-setting paragraph connecting to SuperBenefit's work
3. **Key Highlights**: 5+ substantive bullet points
4. **Practical Applications**: Real-world implementation guidance
5. **Connection to SuperBenefit**: Explicit links to SB concepts/projects

### Writing Style
- Friendly and informative, not authoritative
- Culturally relevant language
- Deep engagement with source material
- Respectful representation of authors' work
- Clear value proposition for readers

## Maintenance Schedule

### Weekly
- Evaluate any new article suggestions using triple-gate system
- Update `current-status.md` with progress

### Monthly
- Review rejection log for patterns
- Assess if curation strategy needs adjustment
- Check library usage analytics (if available)

### Quarterly
- Full review of accepted articles for continued relevance
- Update values alignment criteria based on community evolution
- Refine workflow based on learnings

## Help & Troubleshooting

### Common Issues
- **Unsure about values alignment?** → Check precedents in `values-concerns.md`
- **Article seems borderline?** → Document reasoning and seek team input
- **Finding similar articles?** → Search existing `/links/` directory
- **Need evaluation help?** → Use `evaluation-template.md`

### Quick Decisions
- When in doubt about values: REJECT (we can always reconsider)
- If >70% similar to existing: REJECT unless significantly superior
- Pure technical without social impact: REJECT
- Extractive tokenomics: IMMEDIATE REJECT

## Discord Mining Workflow Details

### Systematic Process
1. **Analysis Tool**: obsidian-mcp-tools:fetch (primary), firecrawl_scrape (backup)
2. **Batch Size**: 20 links per session (manageable workload)
3. **Success Rate**: ~80% (vast improvement from previous methods)
4. **Categorization**: 
   - WORKING (accessible content)
   - DEAD (404, domain expired)
   - REDIRECT (content moved)
   - PRIVATE (Discord/gated)
   - ERROR (technical issues)
   - SKIP (duplicates, irrelevant)

### Quality Triage
- **POTENTIAL LIBRARY RESOURCE**: Substantial content relevant to SuperBenefit
- **LOW PRIORITY**: Working links but not core focus areas
- **N/A**: Dead/broken links with no analysis needed

### Integration with Main Pipeline
- Discord candidates marked as "POTENTIAL LIBRARY RESOURCE" → Triple-gate evaluation
- High-scoring Discord finds → Added to `final-ready-to-write.md`
- Regular Discord candidates → Bulk evaluation sessions
- Library-quality Discord finds → Priority evaluation (interrupt writing if exceptional)

## Current Discovery Statistics
- **Total Discord Links**: 1000+ (estimated from CSV)
- **Links Analyzed**: 227+ (ongoing)
- **Success Rate**: ~80% (132 working / 227 total)
- **Library Candidates Found**: 14+ high-value resources
- **Pipeline Health**: Both streams feeding evaluation process

---
Last Updated: July 2025 (Discord integration)
Next Review: August 2025
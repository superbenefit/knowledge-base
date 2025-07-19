# SuperBenefit Web3 Library Workflow Guide

## Current Status (As of January 2025)

### ✅ Completed
- Implemented rigorous curation strategy with triple-gate system
- Re-evaluated 29 articles from pipeline
- Reduced from 11 "ESSENTIAL" to only 6 articles passing all gates
- Created comprehensive documentation for the new process

### 📍 Current State
- **Articles Ready to Write**: 6 (in `final-ready-to-write.md`)
- **Articles Rejected**: 23 (documented in `rejected-articles-log.md`)
- **Values Concerns Documented**: 4 articles (in `values-concerns.md`)
- **Next Phase**: Begin writing library entries for the 6 approved articles

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

### For New Article Evaluation
1. **Open**: `rigorous_curation_strategy.md` for reference
2. **Use**: Triple gate checklist first (fail fast approach)
3. **Document**: 
   - Rejections in `rejected-articles-log.md`
   - Values concerns in `values-concerns.md`
   - Accepted articles in `final-ready-to-write.md`

### For Writing Library Entries
1. **Check**: `final-ready-to-write.md` for next priority
2. **Reference**: `/tools/workflows/library` for templates
3. **Follow**: Library entry format established in existing entries
4. **Update**: Status in this workflow document when complete

## File Organization

```
/notes/library/
├── web3-library-workflow.md (THIS FILE - main workflow guide)
├── rigorous_curation_strategy.md (complete evaluation framework)
├── final-ready-to-write.md (approved articles queue)
├── values-concerns.md (borderline cases documentation)
├── rejected-articles-log.md (transparency log)
├── evaluation-template.md (blank template for new evaluations)
└── current-status.md (snapshot for handoffs)
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

---
Last Updated: January 2025
Next Review: February 2025
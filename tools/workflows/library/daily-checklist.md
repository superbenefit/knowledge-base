---
{}
---
# Web3 Library Daily Workflow Checklist

## 🌅 Starting a Work Session

### 1. Check Your Queue
```bash
cat /Users/heenal/Documents/GitHub/knowledge-base/notes/library/final-ready-to-write.md
```
- [ ] Review which articles need to be written
- [ ] Check current-status.md for any updates
- [ ] Note your starting point in Basic Memory

### 2. Set Your Focus
- [ ] **Writing entries?** → Open library entry templates
- [ ] **Evaluating new?** → Open evaluation-template.md
- [ ] **Reviewing process?** → Check workflow guides

## 📝 Writing Library Entries

### Before Writing
- [ ] Read source article thoroughly
- [ ] Search existing library for related content
- [ ] Review SuperBenefit lexicon for key terms
- [ ] Check similar entries for format consistency

### While Writing
- [ ] Complete metadata block fully
- [ ] Write engaging introduction with SB connection
- [ ] Create 5+ substantive key highlights
- [ ] Include practical applications section
- [ ] Make 2-4 explicit SB connections

### After Writing
- [ ] Save to `/links/` directory
- [ ] Update final-ready-to-write.md status
- [ ] Update current-status.md progress
- [ ] Commit to git with clear message

## 🔍 Evaluating New Articles

### Quick Triple-Gate Check
1. **Values Gate** (5 min)
   - [ ] Check disqualifiers first
   - [ ] If any YES → REJECT immediately
   
2. **Quality Gate** (5 min)
   - [ ] Scan for depth and originality
   - [ ] Check author credibility
   
3. **Uniqueness Gate** (10 min)
   - [ ] Search library for similar content
   - [ ] Calculate rough similarity %

### If All Gates Pass
- [ ] Complete strategic scoring (15 min)
- [ ] Calculate total score
- [ ] Make final decision
- [ ] Document in appropriate log

### Documentation
- [ ] **Accepted?** → Add to final-ready-to-write.md
- [ ] **Rejected?** → Add to rejected-articles-log.md
- [ ] **Edge case?** → Add to values-concerns.md

## 🔄 End of Session

### Update Progress
- [ ] Update current-status.md with progress
- [ ] Note any process improvements needed
- [ ] Record session summary in Basic Memory

### Git Commit
```bash
cd /Users/heenal/Documents/GitHub/knowledge-base
git add .
git commit -m "Library curation: [brief description]"
git push
```

## 🚨 Quick Decision Rules

**Instant Reject If:**
- Extractive tokenomics
- Pure technical, no social impact
- >70% similar to existing
- Promotional/sales content
- "Disruption" without care

**Fast Track If:**
- Clear regenerative approach
- Novel perspective + depth
- Strong community focus
- Practical implementation guide
- Recognized thought leader

## 📊 Time Guidelines

- **New evaluation**: 20-30 min max
- **Library entry writing**: 45-60 min
- **Status updates**: 5-10 min
- **Daily workflow**: 2-3 hours ideal

## 🆘 Need Help?

1. **Values question?** → Check values-concerns.md
2. **Format question?** → Check existing entries
3. **Process question?** → Check workflow guide
4. **Still stuck?** → Document and ask team

---

Remember: We're curating a garden, not building a warehouse. Every addition should make the whole more valuable.
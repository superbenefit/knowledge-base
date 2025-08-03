# 🎯 What You Need to Do Now

**Time Required**: 15 minutes

## Your Link Normalization is 95% Complete!

### ✅ What's Done:
- All wikilinks converted ✓
- All paths normalized ✓ 
- 103 fragment links auto-fixed ✓

### 🔧 What's Left:
**Just 33 fragment links in DAO Primitives docs**

## Step-by-Step Fix Process

### 1️⃣ Open Find & Replace (Ctrl+Shift+H)

### 2️⃣ Run These 3 Replacements:

**Fix A: Multi-Stakeholder Governance (11 instances)**
- Find: `\[Multi-Stakeholder Governance\]\(tags/governance\.md#multi-stakeholder-governance\)`
- Replace: `[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)`

**Fix B: Community Governance (10 instances)**
- Find: `#community-governance\)`
- Replace: `)`

**Fix C: Quadratic Voting (10 instances)**
- Find: `#quadratic-voting\)`
- Replace: `)`

### 3️⃣ Manual Fix (1 instance)
- Open `tags/platforms.md`
- Delete: `[](tags/primitives.md#^83b042)`

### 4️⃣ Validate Success
- Copy T13-Fragment-Link-Validator to /link-fix/
- Execute with Templater
- Should show: 155 valid, 0 invalid

## 🎉 Then You're DONE!

All links will be:
- ✅ Converted from wikilinks
- ✅ Using correct paths
- ✅ With valid fragments
- ✅ Ready for publishing

---

**Full details in:** 79-manual-fragment-fix-guide.md
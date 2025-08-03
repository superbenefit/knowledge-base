# The Simplest Path to Completion

You have 2 options:

## Option A: Let Claude Fix It (Recommended)
**Time: 5 minutes**

1. Open file **96** in this folder: [96-final-copy-paste-prompt.md](96-final-copy-paste-prompt.md)
2. Copy the prompt between the lines
3. Paste in new Claude chat with filesystem access
4. Watch it fix all 33 links automatically

## Option B: Do It Yourself
**Time: 15 minutes**

Use Find & Replace (Ctrl+Shift+H) with these:

**Find #1:**
```
[Multi-Stakeholder Governance](tags/governance.md#multi-stakeholder-governance)
```
**Replace with:**
```
[Multi-Stakeholder Governance](notes/dao-primitives/implementation/patterns/constituency-scale-patterns/multi-stakeholder-governance.md)
```

**Find #2:** `#community-governance)`
**Replace with:** `)`

**Find #3:** `#quadratic-voting)`
**Replace with:** `)`

**Find #4:** Open `tags/platforms.md` and delete `[](tags/primitives.md#^83b042)`

---

## Which Should You Choose?

**Choose A if:**
- You have Claude with filesystem access
- You want it done perfectly
- You prefer automation

**Choose B if:**
- You don't have filesystem access setup
- You prefer doing it yourself
- You're already in Obsidian

Either way, you're 5-15 minutes from done!

---

After either option, validate with T13-Fragment-Link-Validator.
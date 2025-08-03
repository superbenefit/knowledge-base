# Complete Vault Validation Results

Generated: 2025-08-02T23:15:34.339Z

**Files Scanned**: 2407 / 2407

## Code Block Issues Found: 3

These files have links inside code blocks that were incorrectly converted:

### File: tools/plugin-notes/dataview/dataview-queries.md
Sample of affected code block:
> ```markdown
> 1                   (number)
> true/false          (boolean)
> "text"              (text)
> da...

### File: tools/templates/link-fix-templates/T06-Protect-Code-Blocks.md
Sample of affected code block:
> ```/g, (match) => {
>         const placeholder = createPlaceholder('FENCED');
>         protectedConten...

### File: notes/rpp/rpp-playbooks/playbook-working-docs/07-resource-audit.md
Sample of affected code block:
> ```
>    ## Resource Directory
>    
>    ### Patterns (Standalone)
>    - [Community Governance](/artifacts...


**Action Required**: Run T06-Protect-Code-Blocks on these 3 files.

## Embed Issues Found: 14

These files have note embeds using incorrect image syntax:

### File: tools/plugin-notes/plugin-notes.md
- Current: ![](tools/plugin-notes/dataview/dataview.md)
- Should be: ![[tools/plugin-notes/dataview/dataview.md]]

### File: tools/templates/link-fix-templates/T07-Fix-Embeds.md
- Current: ![note content](notes/example.md)
- Should be: ![[notes/example.md]]

### File: drafts/OpenCivics-Wiki/OpenCivics Thesis/Our Critical Path.md
- Current: ![systems thinking](drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Glossary/systems%20thinking.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Glossary/systems%20thinking.md]]

### File: drafts/OpenCivics-Wiki/OpenCivics Thesis/Full Thesis.md
- Current: ![In Us We Trust](drafts/OpenCivics-Wiki/OpenCivics%20Thesis/In%20Us%20We%20Trust.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Thesis/In%20Us%20We%20Trust.md]]

### File: drafts/OpenCivics-Wiki/OpenCivics Concepts/Theory of Change.md
- Current: ![Vision & Values](drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Vision%20&%20Values.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Vision%20&%20Values.md]]

### File: drafts/OpenCivics-Wiki/OpenCivics Concepts/Practice Ethics.md
- Current: ![Personal Ethics](drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Personal%20Ethics.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Personal%20Ethics.md]]

### File: drafts/OpenCivics-Wiki/OpenCivics Concepts/Participatory Design Process.md
- Current: ![Participatory Activities](drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Participatory%20Activities.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Participatory%20Activities.md]]

### File: drafts/OpenCivics-Wiki/OpenCivics Concepts/Open Protocols.md
- Current: ![The Nature Of Protocols - The Protocols Of Nature](drafts/OpenCivics-Wiki/OpenCivics%20Concepts/The%20Nature%20Of%20Protocols%20-%20The%20Protocols%20Of%20Nature.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Concepts/The%20Nature%20Of%20Protocols%20-%20The%20Protocols%20Of%20Nature.md]]

### File: drafts/OpenCivics-Wiki/OpenCivics Concepts/Glossary.md
- Current: ![agent centric](drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Glossary/agent%20centric.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Glossary/agent%20centric.md]]

### File: drafts/OpenCivics-Wiki/OpenCivics Concepts/Assembly Protocol.md
- Current: ![Protocol Pattern Language](drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Protocol%20Pattern%20Language.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Protocol%20Pattern%20Language.md]]

### File: drafts/OpenCivics-Wiki/Open Civic Innovation Framework/Full Framework.md
- Current: ![Executive Summary](drafts/OpenCivics-Wiki/Open%20Civic%20Innovation%20Framework/Executive%20Summary.md)
- Should be: ![[drafts/OpenCivics-Wiki/Open%20Civic%20Innovation%20Framework/Executive%20Summary.md]]

### File: drafts/OpenCivics-Wiki/Open Civic Innovation Framework/Design Practice.md
- Current: ![Participatory Design Process](drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Participatory%20Design%20Process.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Concepts/Participatory%20Design%20Process.md]]

### File: drafts/OpenCivics-Wiki/Open Civic Innovation Framework/Design Philosophy.md
- Current: ![theory of change](notes/archive/clarity/Tags/theory%20of%20change.md)
- Should be: ![[notes/archive/clarity/Tags/theory%20of%20change.md]]

### File: drafts/OpenCivics-Wiki/About OpenCivics/About Membership.md
- Current: ![About Membership](drafts/OpenCivics-Wiki/OpenCivics%20Network/Membership/About%20Membership.md)
- Should be: ![[drafts/OpenCivics-Wiki/OpenCivics%20Network/Membership/About%20Membership.md]]


**Action Required**: Run T07-Fix-Embeds to correct 14 files.

## Summary

- Total files scanned: **2407**
- Code block issues: **3**
- Embed issues: **14**
- Total issues: **17**

### ⚠️ Issues Found - Action Required

Next steps:
1. Copy T06-Protect-Code-Blocks to /link-fix/
2. Run it on the affected files
3. Copy T07-Fix-Embeds to /link-fix/
4. Run it in "All Embeds" mode
5. Re-run this validator to confirm all issues resolved

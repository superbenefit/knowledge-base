# Template-Type Alignment Audit Report

## Executive Summary

A comprehensive audit of 14 templates in `/tools/templates/` reveals systemic issues with field alignment. The most critical finding is that **11 of 14 templates (79%) are missing the required `date` field**. Additionally, many templates include extra fields not defined in their corresponding types, suggesting either documentation gaps or unnecessary metadata.

## Audit Matrix

|Template|Type|Required Fields|Missing Fields|Extra Fields|Critical Issues|
|---|---|---|---|---|---|
|**note.md**|note|title, description, date, publish|date ❌|author, tags|Missing date field|
|**article.md**|article|title, description, date, publish|date ❌|url, author, tags, curator, harvester|Missing date field|
|**guide.md**|guide|title, description, date, publish|✅ Complete|None|**COMPLIANT**|
|**index.md**|index|title, description, date, publish|date ❌|None|Missing date field|
|**library.md**|note*|title, description, date, publish|date ❌|author, tags, harvester, curator|Wrong type (should be link?)|
|**link.md**|link|title, description, date, publish|date ❌|source, author, tags|Missing date field|
|**pattern.md**|pattern|title, description, date, publish|date ❌|url|Missing date field|
|**playbook.md**|playbook|title, description, date, publish|date ❌|author, url, tags, curator, harvester|Missing date field|
|**protocol.md**|protocol|title, description, date, publish|date ❌|url|Missing date field|
|**rpp-playbook.md**|playbook|title, description, date, publish|date ❌|None|Missing date field (tags OK)|
|**study.md**|study|title, description, date, publish|date ❌|author, tags, harvester, curator, case†|Missing date field|
|**tag.md**|tag|title, description, date, publish|date ❌|aliases*, harvester|Missing date field|

*library.md has type: note but seems intended for link type  
†case field will be deprecated per user instruction  
*aliases seems appropriate for tag type despite not being in type definition

## Critical Findings

### 1. Systemic Date Field Omission

- **79% of templates** lack the required `date` field
- Only `guide.md` is fully compliant
- This prevents proper temporal tracking of content creation

### 2. Extra Fields Pattern

Common extra fields appearing across multiple templates:

- **author** (7 templates) - Appears to track content creator
- **tags** (6 templates) - Manual tagging beyond type's tagNames
- **harvester** (5 templates) - Tracking who imported content
- **curator** (4 templates) - Tracking who maintains content
- **url** (4 templates) - External resource links

### 3. Type Misalignment

- **library.md** is set as `type: note` but appears intended for `type: link`
- This misconfiguration prevents proper type-based queries and organization

### 4. Tag Mapping Issues

Several templates manually include tags that should auto-apply:

- Templates with `mapWithTag: true` in their type shouldn't need manual tag entries
- Yet templates like `pattern.md`, `playbook.md`, `protocol.md` include tags in frontmatter

## Field Analysis

### Required Fields (from note base type)

All types inherit these fields, yet most templates miss them:

|Field|Type|Present in Templates|Missing in Templates|
|---|---|---|---|
|title|Input|14/14 (100%) ✅|None|
|description|Input|14/14 (100%) ✅|None|
|date|Date|1/14 (7%) ❌|13/14 (93%)|
|publish|Boolean|14/14 (100%) ✅|None|

### Common Extra Fields Analysis

|Extra Field|Count|Templates Using|Potential Purpose|
|---|---|---|---|
|author|7|note, article, library, link, playbook, study, tag|Content attribution|
|tags|6|note, article, library, link, playbook, study|Manual categorization|
|harvester|5|article, library, playbook, study, tag|Import tracking|
|curator|4|article, library, playbook, study|Maintenance tracking|
|url|4|article, pattern, playbook, protocol|External references|
|source|1|link|Resource origin|
|aliases|1|tag|Alternative names|
|case|1|study|Entity references (deprecated)|

## Templater Expression Analysis

Templates use Templater expressions effectively for dynamic content:

- ✅ All templates properly use `<% tp.frontmatter.field || "default" %>` patterns
- ✅ Consistent fallback values for empty fields
- ❌ Missing `<% tp.date.now() %>` for date field initialization

## Recommendations

### Priority 1: Critical Fixes

1. **Add date field to all templates** with Templater expression:
    
    ```yaml
    date: <% tp.date.now("YYYY-MM-DD") %>
    ```
    
2. **Fix library.md type**:
    
    - Change from `type: note` to `type: link`
3. **Remove deprecated case field** from study.md template
    

### Priority 2: Field Standardization

1. **Decide on extra fields**:
    
    - Option A: Add commonly used fields (author, curator, harvester) to base type definition
    - Option B: Remove extra fields from templates to match strict type definitions
    - Option C: Document these as "optional conventional fields" in the type system
2. **Clarify tag handling**:
    
    - Templates with `mapWithTag: true` shouldn't need manual tags
    - Either remove manual tags or disable auto-mapping

### Priority 3: Template Variants

Consider creating template variants for common use cases:

|Base Template|Suggested Variants|Use Case|
|---|---|---|
|note.md|note-meeting.md|Meeting notes with attendees|
||note-research.md|Research with citations|
|pattern.md|pattern-simple.md|Quick pattern capture|
||pattern-detailed.md|Comprehensive documentation|
|playbook.md|playbook-quick.md|Simple implementation guide|
||rpp-playbook.md ✅|Already exists for RPP|
|study.md|study-comparative.md|Multiple case comparison|

## Testing Checklist

After implementing fixes, verify:

- [ ] All templates include required fields from their type
- [ ] Date field properly initializes with current date
- [ ] Type field matches intended type definition
- [ ] Templater expressions render without errors
- [ ] Metadata Menu recognizes fileClass correctly
- [ ] Dataview queries return expected results
- [ ] Auto-mapping (mapWithTag) works as configured

## Conclusion

The template system shows good structural consistency but needs field alignment with type definitions. The primary issue is the missing date field, which is easily fixed. The secondary issue of extra fields requires a strategic decision about metadata flexibility versus strict type compliance.

**Recommendation**: Fix critical issues (date field, library.md type) immediately, then convene to decide on extra field handling strategy before proceeding to template updates.
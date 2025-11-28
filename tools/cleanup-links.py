#!/usr/bin/env python3
"""
Cleanup script for fixing link issues in knowledge base markdown files.

Fixes:
1. Links in YAML frontmatter (removes markdown syntax, keeps plain text)
2. Malformed nested links like [X](tags/[X](tags/X.md).md) → [X](tags/X.md)
3. Doubled links like [[text](path)](path) → [text](path)
4. Duplicate links to same URL within a file (keeps first occurrence only)
"""

import re
import os
from pathlib import Path

def extract_link_text(match_text):
    """Extract plain text from a markdown link."""
    # Match [text](url) and return just text
    m = re.match(r'\[([^\]]+)\]\([^)]+\)', match_text)
    if m:
        return m.group(1)
    return match_text

def fix_yaml_frontmatter(content):
    """Remove markdown links from YAML frontmatter, keeping plain text."""
    # Split into frontmatter and body
    if not content.startswith('---'):
        return content

    parts = content.split('---', 2)
    if len(parts) < 3:
        return content

    frontmatter = parts[1]
    body = parts[2]

    # Remove markdown links from frontmatter, keeping the link text
    # Pattern: [text](url) -> text
    def replace_link(m):
        return m.group(1)

    frontmatter_fixed = re.sub(r'\[([^\]]+)\]\([^)]+\)', replace_link, frontmatter)

    return '---' + frontmatter_fixed + '---' + body

def fix_nested_links(content):
    """Fix malformed nested links."""
    # Pattern 1: [X](tags/[X](tags/X.md).md) -> [X](tags/X.md)
    # This happens when link target contains another link
    def fix_nested_in_url(m):
        text = m.group(1)
        # Extract the inner link's URL
        inner = re.search(r'\[([^\]]+)\]\(([^)]+)\)', m.group(2))
        if inner:
            return f'[{text}]({inner.group(2)})'
        return m.group(0)

    content = re.sub(r'\[([^\]]+)\]\(([^)]*\[[^\]]+\]\([^)]+\)[^)]*)\)', fix_nested_in_url, content)

    # Pattern 2: [[text](path)](path) -> [text](path)
    # Doubled link wrapping
    content = re.sub(r'\[\[([^\]]+)\]\(([^)]+)\)\]\([^)]+\)', r'[\1](\2)', content)

    # Pattern 3: [text [nested](url)](url2) -> [text](url2) with nested removed
    # e.g., [community [governance](tags/governance.md)](artifacts/...)
    def fix_text_with_nested(m):
        full_text = m.group(1)
        url = m.group(2)
        # Remove nested links from text, keep plain text
        clean_text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', full_text)
        return f'[{clean_text}]({url})'

    content = re.sub(r'\[([^\]]*\[[^\]]+\]\([^)]+\)[^\]]*)\]\(([^)]+)\)', fix_text_with_nested, content)

    return content

def deduplicate_links(content):
    """Remove duplicate links to same URL, keeping first occurrence."""
    # Split into frontmatter and body to only process body
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter = '---' + parts[1] + '---'
            body = parts[2]
        else:
            frontmatter = ''
            body = content
    else:
        frontmatter = ''
        body = content

    seen_urls = set()

    def replace_if_duplicate(m):
        full_match = m.group(0)
        text = m.group(1)
        url = m.group(2)

        # Normalize URL for comparison
        url_normalized = url.lower().strip()

        if url_normalized in seen_urls:
            # Return just the text, no link
            return text
        else:
            seen_urls.add(url_normalized)
            return full_match

    # Process links in order of appearance
    body_fixed = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', replace_if_duplicate, body)

    return frontmatter + body_fixed

def process_file(filepath):
    """Process a single file, applying all fixes."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Apply fixes in order
    content = fix_yaml_frontmatter(content)
    content = fix_nested_links(content)
    content = deduplicate_links(content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    # Process all markdown files in links/ directory
    links_dir = Path('/home/user/knowledge-base/links')
    tags_dir = Path('/home/user/knowledge-base/tags')

    modified_count = 0

    for directory in [links_dir, tags_dir]:
        if directory.exists():
            for filepath in directory.glob('*.md'):
                if process_file(filepath):
                    print(f"Fixed: {filepath.name}")
                    modified_count += 1

    print(f"\nTotal files modified: {modified_count}")

if __name__ == '__main__':
    main()

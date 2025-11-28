#!/usr/bin/env python3
"""Analyze link counts in markdown files."""

import re
import os
from pathlib import Path

def count_links(filepath):
    """Count markdown links in a file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Count [text](url) patterns
    links = re.findall(r'\[[^\]]+\]\([^)]+\)', content)
    return len(links)

def main():
    links_dir = Path('/home/user/knowledge-base/links')

    # Count links for each file
    link_counts = []
    zero_link_files = []

    for filepath in links_dir.glob('*.md'):
        count = count_links(filepath)
        link_counts.append((count, filepath.name))
        if count == 0:
            zero_link_files.append(filepath.name)

    # Sort by count descending
    link_counts.sort(reverse=True)

    print("=" * 60)
    print("TOP 15 ENTRIES BY LINK COUNT:")
    print("=" * 60)
    for count, name in link_counts[:15]:
        print(f"{count:3d} links: {name}")

    print("\n" + "=" * 60)
    print(f"ENTRIES WITH ZERO LINKS ({len(zero_link_files)} files):")
    print("=" * 60)
    for name in sorted(zero_link_files):
        print(f"  - {name}")

    print("\n" + "=" * 60)
    print("STATISTICS:")
    print("=" * 60)
    counts_only = [c for c, _ in link_counts]
    print(f"Total files: {len(link_counts)}")
    print(f"Total links: {sum(counts_only)}")
    print(f"Average: {sum(counts_only)/len(counts_only):.1f} links per file")
    print(f"Max: {max(counts_only)}")
    print(f"Min: {min(counts_only)}")
    print(f"Files with 0 links: {len(zero_link_files)}")
    print(f"Files with >20 links: {len([c for c in counts_only if c > 20])}")

if __name__ == '__main__':
    main()

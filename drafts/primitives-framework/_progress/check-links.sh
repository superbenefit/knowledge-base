#!/bin/bash
# Check for potentially broken links in reorganized structure

cd "F:/projects/sb-knowledge-base/drafts/primitives-framework/_outputs"

echo "=== Checking for potentially broken links in reorganized files ==="
echo ""

echo "Links to old framework/ paths:"
grep -r "\.\./framework/" 1-framework-foundation/ 2-implementation/ 3-evidence/ 4-reference/ 2>/dev/null | head -20

echo ""
echo "Links to old reference/ paths:"
grep -r "\.\./reference/" 1-framework-foundation/ 2-implementation/ 3-evidence/ 4-reference/ 2>/dev/null | head -20

echo ""
echo "Links to old guides/ paths:"
grep -r "\.\./guides/" 1-framework-foundation/ 2-implementation/ 3-evidence/ 4-reference/ 2>/dev/null | head -20

echo ""
echo "Links to old articles/ paths:"
grep -r "\.\./articles/" 1-framework-foundation/ 2-implementation/ 3-evidence/ 4-reference/ 2>/dev/null | head -20

echo ""
echo "Links to old integration/ paths:"
grep -r "\.\./integration/" 1-framework-foundation/ 2-implementation/ 3-evidence/ 4-reference/ 2>/dev/null | head -20

echo ""
echo "Links to root-level files (cells, circle, nucleus, etc.):"
grep -r -E "\[.*\]\(\.\./(cells|circle|nucleus|group-state-template|sense-making-facilitation-tools)\.md\)" 1-framework-foundation/ 2-implementation/ 3-evidence/ 4-reference/ 2>/dev/null | head -20

echo ""
echo "=== Check complete ==="

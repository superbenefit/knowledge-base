#!/bin/bash
#
# sync-to-garden.sh - Sync sb-knowledge-base artifacts to knowledge-garden
#
# Usage: ./sync-to-garden.sh [knowledge-garden-path]
#
# If no path provided, assumes knowledge-garden is a sibling directory.
#

set -e

# Get the directory where this script lives
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# sb-knowledge-base is 3 levels up from this script
KB_REPO="$(cd "$SCRIPT_DIR/../../.." && pwd)"

# knowledge-garden path - use argument or assume sibling directory
if [ -n "$1" ]; then
    KG_REPO="$1"
else
    KG_REPO="$(dirname "$KB_REPO")/knowledge-garden"
fi

SOURCE="$KB_REPO/artifacts"
TARGET="$KG_REPO/content/artifacts"

echo "=== Syncing Knowledge Base to Knowledge Garden ==="
echo ""
echo "Source: $SOURCE"
echo "Target: $TARGET"
echo ""

# Validate paths
if [ ! -d "$SOURCE" ]; then
    echo "Error: Source not found: $SOURCE"
    exit 1
fi

if [ ! -d "$TARGET" ]; then
    echo "Error: Target not found: $TARGET"
    echo "Is knowledge-garden cloned at: $KG_REPO ?"
    exit 1
fi

# Count before
SOURCE_COUNT=$(find "$SOURCE" -name "*.md" | wc -l)
echo "Source files: $SOURCE_COUNT"

# Sync
echo ""
echo "Removing old content..."
rm -rf "$TARGET"/*

echo "Copying new content..."
cp -r "$SOURCE"/* "$TARGET"/

# Count after
TARGET_COUNT=$(find "$TARGET" -name "*.md" | wc -l)
echo "Target files: $TARGET_COUNT"

# Verify
if [ "$SOURCE_COUNT" -eq "$TARGET_COUNT" ]; then
    echo ""
    echo "✓ Sync complete. File counts match."
else
    echo ""
    echo "⚠ Warning: File counts differ!"
fi

echo ""
echo "Next steps:"
echo "  cd $KG_REPO"
echo "  git status"
echo "  npx quartz build"

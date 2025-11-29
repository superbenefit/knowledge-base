#!/bin/bash
#
# sync-to-garden.sh - Sync sb-knowledge-base content to knowledge-garden
#
# Syncs: artifacts, notes, links, tags, and tools/types → content/types
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

echo "=== Syncing Knowledge Base to Knowledge Garden ==="
echo ""
echo "Source: $KB_REPO"
echo "Target: $KG_REPO/content"
echo ""

# Validate knowledge-garden exists
if [ ! -d "$KG_REPO/content" ]; then
    echo "Error: knowledge-garden content directory not found: $KG_REPO/content"
    echo "Is knowledge-garden cloned at: $KG_REPO ?"
    exit 1
fi

# Define content types to sync
declare -A CONTENT_TYPES=(
    ["artifacts"]="artifacts"
    ["notes"]="notes"
    ["links"]="links"
    ["tags"]="tags"
    ["tools/types"]="types"
)

# Sync each content type
TOTAL_SOURCE=0
TOTAL_TARGET=0

for SOURCE_PATH in "${!CONTENT_TYPES[@]}"; do
    TARGET_NAME="${CONTENT_TYPES[$SOURCE_PATH]}"
    SOURCE_DIR="$KB_REPO/$SOURCE_PATH"
    TARGET_DIR="$KG_REPO/content/$TARGET_NAME"

    echo "--- Syncing $TARGET_NAME ---"

    # Validate source exists
    if [ ! -d "$SOURCE_DIR" ]; then
        echo "⚠ Warning: Source not found: $SOURCE_DIR (skipping)"
        continue
    fi

    # Validate target exists
    if [ ! -d "$TARGET_DIR" ]; then
        echo "⚠ Warning: Target not found: $TARGET_DIR (skipping)"
        continue
    fi

    # Count before
    SOURCE_COUNT=$(find "$SOURCE_DIR" -name "*.md" 2>/dev/null | wc -l)
    echo "Source: $SOURCE_COUNT files"

    # Sync
    rm -rf "$TARGET_DIR"/*
    cp -r "$SOURCE_DIR"/* "$TARGET_DIR"/

    # Count after
    TARGET_COUNT=$(find "$TARGET_DIR" -name "*.md" 2>/dev/null | wc -l)
    echo "Target: $TARGET_COUNT files"

    # Track totals
    TOTAL_SOURCE=$((TOTAL_SOURCE + SOURCE_COUNT))
    TOTAL_TARGET=$((TOTAL_TARGET + TARGET_COUNT))

    # Verify
    if [ "$SOURCE_COUNT" -eq "$TARGET_COUNT" ]; then
        echo "✓ $TARGET_NAME synced successfully"
    else
        echo "⚠ Warning: File counts differ for $TARGET_NAME"
    fi
    echo ""
done

# Overall summary
echo "=== Sync Summary ==="
echo "Total source files: $TOTAL_SOURCE"
echo "Total target files: $TOTAL_TARGET"

if [ "$TOTAL_SOURCE" -eq "$TOTAL_TARGET" ]; then
    echo ""
    echo "✓ All content synced successfully!"
else
    echo ""
    echo "⚠ Warning: Total file counts differ!"
fi

echo ""
echo "Next steps:"
echo "  cd $KG_REPO"
echo "  git status"
echo "  npx quartz build"

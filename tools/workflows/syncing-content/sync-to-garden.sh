#!/bin/bash
#
# sync-to-garden.sh - Sync sb-knowledge-base content to knowledge-garden
#
# Only syncs files with publish: true in frontmatter
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
echo "Filter: Only files with publish: true"
echo ""

# Validate knowledge-garden exists
if [ ! -d "$KG_REPO/content" ]; then
    echo "Error: knowledge-garden content directory not found: $KG_REPO/content"
    echo "Is knowledge-garden cloned at: $KG_REPO ?"
    exit 1
fi

# Function to check if a file has publish: true in frontmatter
has_publish_true() {
    local file="$1"

    # Check if file exists and is readable
    if [ ! -f "$file" ]; then
        return 1
    fi

    # Extract frontmatter (between --- markers) and check for publish: true
    # Matches both: publish: true and publish: "true"
    awk '
        BEGIN { in_frontmatter=0; found=0 }
        /^---$/ {
            if (NR==1) { in_frontmatter=1; next }
            else if (in_frontmatter) { exit found }
        }
        in_frontmatter && /^publish:/ {
            if ($2 == "true" || $2 == "\"true\"" || $2 == "'\''true'\''") {
                found=1
            }
        }
        END { exit !found }
    ' "$file"
}

# Function to sync a single content type
sync_content_type() {
    local source_path="$1"
    local target_name="$2"
    local source_dir="$KB_REPO/$source_path"
    local target_dir="$KG_REPO/content/$target_name"

    echo "--- Syncing $target_name ---"

    # Validate source exists
    if [ ! -d "$source_dir" ]; then
        echo "⚠ Warning: Source not found: $source_dir (skipping)"
        return 1
    fi

    # Create target directory if it doesn't exist
    mkdir -p "$target_dir"

    # Clear target directory
    rm -rf "$target_dir"/*

    # Find all markdown files in source
    local total_files=0
    local published_files=0
    local skipped_files=0

    # Process each markdown file
    while IFS= read -r -d '' source_file; do
        total_files=$((total_files + 1))

        # Check if file should be published
        if has_publish_true "$source_file"; then
            # Get relative path from source_dir
            rel_path="${source_file#$source_dir/}"
            target_file="$target_dir/$rel_path"

            # Create target directory if needed
            target_subdir="$(dirname "$target_file")"
            mkdir -p "$target_subdir"

            # Copy file
            cp "$source_file" "$target_file"
            published_files=$((published_files + 1))
        else
            skipped_files=$((skipped_files + 1))
        fi
    done < <(find "$source_dir" -name "*.md" -type f -print0)

    echo "Total files: $total_files"
    echo "Published: $published_files"
    echo "Skipped (no publish:true): $skipped_files"

    if [ $published_files -gt 0 ]; then
        echo "✓ $target_name synced successfully"
    else
        echo "⚠ No files with publish:true found in $target_name"
    fi
    echo ""

    # Return counts for summary
    echo "$total_files $published_files $skipped_files"
}

# Define content types to sync
declare -A CONTENT_TYPES=(
    ["artifacts"]="artifacts"
    ["notes"]="notes"
    ["links"]="links"
    ["tags"]="tags"
    ["tools/types"]="tools/types"
)

# Track totals
GRAND_TOTAL_FILES=0
GRAND_PUBLISHED_FILES=0
GRAND_SKIPPED_FILES=0

# Sync each content type
for SOURCE_PATH in "${!CONTENT_TYPES[@]}"; do
    TARGET_NAME="${CONTENT_TYPES[$SOURCE_PATH]}"

    # Special handling for tools/types - sync all files without publish filter
    if [ "$SOURCE_PATH" = "tools/types" ]; then
        echo "--- Syncing $TARGET_NAME (all files, no publish filter) ---"
        source_dir="$KB_REPO/$SOURCE_PATH"
        target_dir="$KG_REPO/content/$TARGET_NAME"

        if [ -d "$source_dir" ]; then
            mkdir -p "$target_dir"
            rm -rf "$target_dir"/*
            cp -r "$source_dir"/* "$target_dir"/
            types_count=$(find "$target_dir" -name "*.md" -type f | wc -l)
            echo "Synced all $types_count type definition files"
            echo ""
        else
            echo "⚠ Warning: Source not found: $source_dir (skipping)"
            echo ""
        fi
        continue
    fi

    # Sync and capture counts (last line of output)
    output=$(sync_content_type "$SOURCE_PATH" "$TARGET_NAME")
    counts=$(echo "$output" | tail -1)

    if [ -n "$counts" ]; then
        read total published skipped <<< "$counts"
        # Only add if we got valid numbers
        if [[ "$total" =~ ^[0-9]+$ ]]; then
            GRAND_TOTAL_FILES=$((GRAND_TOTAL_FILES + total))
            GRAND_PUBLISHED_FILES=$((GRAND_PUBLISHED_FILES + published))
            GRAND_SKIPPED_FILES=$((GRAND_SKIPPED_FILES + skipped))
        fi
    fi
done

# Copy root index.md to content directory
echo "--- Syncing root index.md ---"
if [ -f "$KB_REPO/index.md" ]; then
    cp "$KB_REPO/index.md" "$KG_REPO/content/index.md"
    echo "✓ Copied root index.md"
else
    echo "⚠ Warning: Root index.md not found"
fi
echo ""

# Copy attachments directory
echo "--- Syncing attachments ---"
if [ -d "$KB_REPO/attachments" ]; then
    mkdir -p "$KG_REPO/content/attachments"
    rm -rf "$KG_REPO/content/attachments"/*
    cp -r "$KB_REPO/attachments"/* "$KG_REPO/content/attachments"/
    attachment_count=$(find "$KG_REPO/content/attachments" -type f | wc -l)
    echo "✓ Copied $attachment_count attachment files"
else
    echo "⚠ Warning: Attachments directory not found"
fi
echo ""

# Overall summary
echo "=== Sync Summary ==="
echo "Total files scanned: $GRAND_TOTAL_FILES"
echo "Files published: $GRAND_PUBLISHED_FILES"
echo "Files skipped: $GRAND_SKIPPED_FILES"
echo ""

if [ $GRAND_PUBLISHED_FILES -gt 0 ]; then
    echo "✓ Successfully synced $GRAND_PUBLISHED_FILES files to knowledge garden!"
else
    echo "⚠ Warning: No files with publish:true found!"
fi

echo ""
echo "Next steps:"
echo "  cd $KG_REPO"
echo "  git status"
echo "  npx quartz build"

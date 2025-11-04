#!/bin/bash
# Fix broken links in reorganized structure

cd "F:/projects/sb-knowledge-base/drafts/primitives-framework/_outputs"

echo "=== Fixing broken links in reorganized files ==="
echo ""

# Fix links from 2-implementation/primitive-selection/ to framework files
echo "Fixing links in 2-implementation/primitive-selection/..."
sed -i 's|\.\./framework/dao-primitives-implementation/|./|g' 2-implementation/primitive-selection/*.md
sed -i 's|\.\./framework/index\.md|../../1-framework-foundation/index.md|g' 2-implementation/primitive-selection/*.md
sed -i 's|\.\./framework/group-state\.md|../../1-framework-foundation/dimensional-lenses/group-state.md|g' 2-implementation/primitive-selection/*.md

# Fix links from 3-evidence/articles/ to other directories
echo "Fixing links in 3-evidence/articles/..."
sed -i 's|\.\./framework/index\.md|../../1-framework-foundation/index.md|g' 3-evidence/articles/*.md
sed -i 's|\.\./reference/organizational-elements-guide\.md|../../4-reference/quick-guides/organizational-elements-guide.md|g' 3-evidence/articles/*.md
sed -i 's|\.\./reference/dao-primitives-catalog\.md|../../2-implementation/primitive-selection/dao-primitives-catalog.md|g' 3-evidence/articles/*.md
sed -i 's|\.\./guides/start-concepts\.md|../../4-reference/quick-guides/start-concepts.md|g' 3-evidence/articles/*.md
sed -i 's|\.\./guides/start-implementation\.md|../../4-reference/quick-guides/start-implementation.md|g' 3-evidence/articles/*.md
sed -i 's|\.\./guides/start-evidence\.md|../case-studies/start-evidence.md|g' 3-evidence/articles/*.md
sed -i 's|\.\./integration/sb-services\.md|../../4-reference/integrations/sb-services.md|g' 3-evidence/articles/*.md

# Fix links from 3-evidence/case-studies/ to other directories
echo "Fixing links in 3-evidence/case-studies/..."
sed -i 's|\.\./framework/dao-primitives-implementation/implementation-guide-community-governance\.md|../../2-implementation/primitive-selection/implementation-guide-community-governance.md|g' 3-evidence/case-studies/*.md
sed -i 's|\.\./framework/dao-primitives-implementation/implementation-guide-operational-governance\.md|../../2-implementation/primitive-selection/implementation-guide-operational-governance.md|g' 3-evidence/case-studies/*.md
sed -i 's|\.\./framework/dao-primitives-implementation/implementation-guide-multi-stakeholder-governance\.md|../../2-implementation/primitive-selection/implementation-guide-multi-stakeholder-governance.md|g' 3-evidence/case-studies/*.md
sed -i 's|\.\./framework/index\.md|../../1-framework-foundation/index.md|g' 3-evidence/case-studies/*.md
sed -i 's|\.\./reference/organizational-elements-guide\.md|../../4-reference/quick-guides/organizational-elements-guide.md|g' 3-evidence/case-studies/*.md
sed -i 's|\.\./reference/dao-primitives-catalog\.md|../../2-implementation/primitive-selection/dao-primitives-catalog.md|g' 3-evidence/case-studies/*.md
sed -i 's|\.\./integration/sb-services\.md|../../4-reference/integrations/sb-services.md|g' 3-evidence/case-studies/*.md
sed -i 's|\.\./integration/knowledge-garden\.md|../../4-reference/integrations/knowledge-garden.md|g' 3-evidence/case-studies/*.md

# Fix links from 4-reference/integrations/ to other directories
echo "Fixing links in 4-reference/integrations/..."
sed -i 's|\.\./framework/group-phase/organization-phase\.md|../../1-framework-foundation/dimensional-lenses/organization-phase.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./framework/group-primitives/roles\.md|../../1-framework-foundation/organizational-elements/roles.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./framework/group-facilitation\.md|../templates/group-facilitation.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./framework/group-phase/index\.md|../../1-framework-foundation/dimensional-lenses/index.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./framework/group-scale/index\.md|../../1-framework-foundation/dimensional-lenses/index.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./framework/group-state\.md|../../1-framework-foundation/dimensional-lenses/group-state.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./reference/dao-primitives-catalog\.md|../../2-implementation/primitive-selection/dao-primitives-catalog.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./reference/organizational-elements-guide\.md|../quick-guides/organizational-elements-guide.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./guides/start-concepts\.md|../quick-guides/start-concepts.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./guides/start-evidence\.md|../../3-evidence/case-studies/start-evidence.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./circle\.md|../../2-implementation/mapping/circle.md|g' 4-reference/integrations/*.md
sed -i 's|\.\./sense-making-facilitation-tools\.md|../templates/sense-making-facilitation-tools.md|g' 4-reference/integrations/*.md

# Fix links from 4-reference/quick-guides/ to other directories
echo "Fixing links in 4-reference/quick-guides/..."
sed -i 's|\.\./reference/organizational-elements-guide\.md|./organizational-elements-guide.md|g' 4-reference/quick-guides/*.md
sed -i 's|\.\./reference/dao-primitives-catalog\.md|../../2-implementation/primitive-selection/dao-primitives-catalog.md|g' 4-reference/quick-guides/*.md
sed -i 's|\.\./integration/sb-services\.md|../integrations/sb-services.md|g' 4-reference/quick-guides/*.md
sed -i 's|\.\./integration/knowledge-garden\.md|../integrations/knowledge-garden.md|g' 4-reference/quick-guides/*.md
sed -i 's|\.\./cells\.md|../../1-framework-foundation/organizational-elements/cells.md|g' 4-reference/quick-guides/*.md
sed -i 's|\.\./sense-making-facilitation-tools\.md|../templates/sense-making-facilitation-tools.md|g' 4-reference/quick-guides/*.md
sed -i 's|\.\./group-state-template\.md|../../2-implementation/mapping/group-state-template.md|g' 4-reference/quick-guides/*.md
sed -i 's|\.\./circle\.md|../../2-implementation/mapping/circle.md|g' 4-reference/quick-guides/*.md
sed -i 's|\.\./nucleus\.md|../../2-implementation/mapping/nucleus.md|g' 4-reference/quick-guides/*.md

echo ""
echo "=== Link fixes complete ==="
echo "Run check-links.sh again to verify all fixes"

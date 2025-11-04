#!/bin/bash
# Copy files to new structure for review

cd "F:/projects/sb-knowledge-base/drafts/primitives-framework/_outputs"

# 1-framework-foundation/organizational-elements/
cp cells.md 1-framework-foundation/organizational-elements/
cp framework/group-primitives/daos.md 1-framework-foundation/organizational-elements/
cp framework/group-primitives/roles.md 1-framework-foundation/organizational-elements/
cp framework/group-primitives/tasks.md 1-framework-foundation/organizational-elements/
cp framework/group-primitives/index.md 1-framework-foundation/organizational-elements/

# 1-framework-foundation/dimensional-lenses/
cp framework/group-phase/*.md 1-framework-foundation/dimensional-lenses/
cp framework/group-scale/*.md 1-framework-foundation/dimensional-lenses/
cp framework/group-state.md 1-framework-foundation/dimensional-lenses/

# 1-framework-foundation/ (root)
cp framework/index.md 1-framework-foundation/

# 2-implementation/mapping/
cp group-state-template.md 2-implementation/mapping/
cp circle.md 2-implementation/mapping/
cp nucleus.md 2-implementation/mapping/

# 2-implementation/primitive-selection/
cp framework/dao-primitives-implementation/*.md 2-implementation/primitive-selection/
cp reference/dao-primitives-catalog.md 2-implementation/primitive-selection/

# 3-evidence/case-studies/
cp guides/start-evidence.md 3-evidence/case-studies/

# 3-evidence/articles/
cp articles/framework-complete.md 3-evidence/articles/

# 4-reference/quick-guides/
cp reference/organizational-elements-guide.md 4-reference/quick-guides/
cp guides/start-concepts.md 4-reference/quick-guides/
cp guides/start-implementation.md 4-reference/quick-guides/

# 4-reference/templates/
cp sense-making-facilitation-tools.md 4-reference/templates/
cp framework/group-facilitation.md 4-reference/templates/

# 4-reference/integrations/
cp integration/sb-services.md 4-reference/integrations/
cp integration/knowledge-garden.md 4-reference/integrations/

echo "Files copied to new structure"

# AGENTS.md

## Project Overview

This is a VitePress documentation site for the Ballance game mapping manual. The content is primarily in Chinese (zh-CN) and covers traditional mapping, Blender-based mapping, and scripting for the Ballance game.

## Build Commands

```bash
# Install dependencies
pnpm install

# Start development server (also available as pnpm docs:dev)
pnpm dev

# Build the production site
pnpm docs:build

# Preview the built site
pnpm docs:preview

# Format code (using Prettier)
pnpm format
```

## Development Notes

- **Package Manager**: pnpm (v10.10.0)
- **Framework**: VitePress (v1.6.3)
- **Language**: Primary content is in Chinese (zh-CN)
- **Default locale**: `zh` (set via rewrites in VitePress config)
- **No tests**: This project has no test suite

## Code Style

### TypeScript/JavaScript (VitePress config files)

**Prettier Configuration** (`.prettierrc.json`):

- Use semicolons: `true`
- Line width: `100` characters
- Use double quotes: `singleQuote: false`
- No trailing commas: `trailingComma: "none"`
- Omit arrow function parentheses when possible: `arrowParens: "avoid"`
- Tab width: `2` spaces

**Import Style**:

```typescript
import { defineConfig } from "vitepress";
import { zhConfig } from "./zh";
```

### Markdown Content

**Frontmatter**:

```markdown
---
layout: home # or leave empty for default layout

hero:
  name: "Title"
  text: "Subtitle"
  tagline: "Description"
  actions:
    - theme: brand
      text: "Button Text"
      link: /path/to/page
---
```

**VitePress Custom Containers**:

```markdown
::: tip Tip title
Content for the tip
:::

::: warning Warning title
Warning content
:::

::: info Info title
Information content
:::
```

**Images**:

- Relative paths from the markdown file: `![alt](../../../imgs/filename.png)`
- Static assets in `docs/public/`: `/logo.png`
- Lazy loading enabled by default in VitePress config

**Tables**:

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
```

**Code Blocks**:

- Inline code: `inline code`
- Code blocks with syntax highlighting:
  ```javascript
  // Code block
  const example = "value";
  ```

## File Structure

- `docs/.vitepress/` - VitePress configuration
  - `config.mts` - Main VitePress config
  - `theme/index.ts` - Custom theme extension (image viewer)
  - `zh/` - Chinese locale config (nav-bar, side-bar, index)
- `docs/zh/` - Chinese content (primary locale)
- `docs/en/` - English content (placeholder, minimal)
- `docs/public/` - Static assets (images, etc.)

## Content Guidelines

1. **Language**: Write content in Chinese (zh-CN) for the `docs/zh/` directory
2. **Terminology**: Use consistent terminology (see `docs/zh/terms.md`)
3. **Cross-references**: Use relative paths with `../` syntax
4. **Image paths**: Use relative paths from markdown file location
5. **Warnings**: Include "警告" (warning) callouts for important caveats
6. **Tips**: Use "提示" (tip) or "热知识" (hot tip) for helpful information

## Deployment

- GitHub Actions workflow deploys to GitHub Pages on push to `master` branch
- Build uses Node 22 with pnpm caching
- Artifacts uploaded from `docs/.vitepress/dist`

## Working with the Codebase

This is primarily a content-focused documentation project. When making changes:

1. For content updates: Edit markdown files in `docs/zh/`
2. For navigation changes: Edit `docs/.vitepress/zh/side-bar.ts` and `nav-bar.ts`
3. For config changes: Edit `docs/.vitepress/config.mts`
4. For theme customization: Edit `docs/.vitepress/theme/index.ts`
5. Always run `pnpm format` after edits
6. Test with `pnpm dev` before committing

## Notes

- No TypeScript/ESLint configuration files - relies on VitePress defaults
- No unit tests or integration tests
- CI runs on GitHub Actions with `pnpm docs:build`
- The English locale exists but is not actively maintained

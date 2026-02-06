# Plan: Package WarmHub Design Tokens for npm Distribution

## Summary

Package the existing `@warmhub/tokens` as an installable Node package with clear documentation for integrating design tokens in other projects.

## Current State Analysis

The tokens package already exists at [packages/tokens/](packages/tokens/) with:
- **Package configuration**: [package.json](packages/tokens/package.json) - properly configured exports
- **CSS variables**: [css/variables.css](packages/tokens/css/variables.css) - 177 lines of design tokens
- **JavaScript/TypeScript**: [js/index.js](packages/tokens/js/index.js), [js/index.d.ts](packages/tokens/js/index.d.ts)
- **Tailwind preset**: [tailwind/preset.js](packages/tokens/tailwind/preset.js)
- **Brand assets**: SVG logos in [assets/](packages/tokens/assets/)

### Issues Identified

1. **Complex installation** - README suggests gitpkg workarounds for subdirectory installs
2. **Not published to npm** - Requires git-based installation
3. **Font inconsistency** - tokens.json references Manrope, but [tailwind.config.v2.js](tailwind.config.v2.js) uses Plus Jakarta Sans

---

## Design Options

### Option A: Publish to npm (Recommended)

**Pros:**
- Simple install: `npm install @warmhub/tokens`
- Standard npm ecosystem (versioning, updates, security audits)
- Works with all package managers out of the box

**Cons:**
- Requires npm account with @warmhub scope (or use `warmhub-tokens` public name)
- Need to publish manually or set up CI/CD

### Option B: Git-based Package (Current)

**Pros:**
- No npm account needed
- Updates automatically with git commits

**Cons:**
- Complex install commands with gitpkg workarounds
- No semantic versioning in lock files
- Harder to pin specific versions

### Option C: GitHub Package Registry

**Pros:**
- Free for public repos
- Ties directly to GitHub repo permissions

**Cons:**
- Requires GitHub token for installation
- More setup for consumers

**Recommendation:** Option A (npm publishing) for simplest consumer experience.

---

## Phase 1: Sync Font References

**Goal:** Ensure all token files use the same typography (Plus Jakarta Sans per v2 design).

### Tasks

1. Update [packages/tokens/tokens.json:106-107](packages/tokens/tokens.json#L106-L107):
```json
// SOURCE: packages/tokens/tokens.json:106-107 (current)
"fontFamily": {
  "sans": { "$value": "'Manrope', system-ui, -apple-system, sans-serif", "$type": "fontFamily" },
```
Change to:
```json
"fontFamily": {
  "sans": { "$value": "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", "$type": "fontFamily" },
```

2. Update [packages/tokens/css/variables.css:73](packages/tokens/css/variables.css#L73):
```css
// SOURCE: packages/tokens/css/variables.css:73 (current)
--wh-font-sans: 'Manrope', system-ui, -apple-system, sans-serif;
```
Change to:
```css
--wh-font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
```

3. Update [packages/tokens/js/index.js:111](packages/tokens/js/index.js#L111):
```javascript
// SOURCE: packages/tokens/js/index.js:111 (current)
sans: "'Manrope', system-ui, -apple-system, sans-serif",
```
Change to:
```javascript
sans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
```

4. Update [packages/tokens/css/tokens.css:13](packages/tokens/css/tokens.css#L13) Google Fonts import:
```css
// SOURCE: packages/tokens/css/tokens.css:13 (current)
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
```
Change to:
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
```

5. Update [packages/tokens/README.md:158](packages/tokens/README.md#L158) typography reference

### Success Criteria
- [ ] All font references use "Plus Jakarta Sans"
- [ ] Google Fonts import URL updated
- [ ] README typography section accurate

---

## Phase 2: Update Documentation

**Goal:** Simplify installation docs and provide clear integration examples.

### Tasks

1. Rewrite [packages/tokens/README.md](packages/tokens/README.md) with clearer sections:
   - Installation (npm primary, git fallback)
   - Quick start for each use case
   - Complete token reference
   - Examples with copy-paste code

2. Update root [README.md](README.md) usage section to match

### README Structure

```markdown
# @warmhub/tokens

## Installation

### npm (Recommended)
npm install @warmhub/tokens

### From Git Repository
npm install github:warmautomation/ui-design-system#main

## Quick Start

### CSS Variables
@import '@warmhub/tokens/css';

### Tailwind CSS
module.exports = {
  presets: [require('@warmhub/tokens/tailwind')],
}

### JavaScript/TypeScript
import { colors, typography } from '@warmhub/tokens';
```

### Success Criteria
- [ ] README has clear installation section
- [ ] Each integration method has working example
- [ ] Token reference table is complete

---

## Phase 3: Prepare for npm Publishing (Optional)

**Goal:** Enable `npm publish` workflow.

### Tasks

1. Verify [packages/tokens/package.json](packages/tokens/package.json) configuration:
   - `name`: `@warmhub/tokens` (requires npm org) or `warmhub-design-tokens`
   - `version`: semantic version
   - `files`: array of published files
   - `repository`: correct GitHub URL
   - `publishConfig`: access public

2. Add npm scripts to package.json:
```json
// SOURCE: new addition
{
  "scripts": {
    "prepublishOnly": "echo 'Ready to publish'"
  }
}
```

3. Create `.npmignore` if needed (or rely on `files` field)

4. Test local installation:
```bash
cd packages/tokens && npm pack
# Creates warmhub-tokens-2.0.0.tgz
npm install /path/to/warmhub-tokens-2.0.0.tgz
```

### Success Criteria
- [ ] `npm pack` creates valid tarball
- [ ] Local install from tarball works
- [ ] All exports resolve correctly

---

## What We're NOT Doing

- **Not setting up automated CI/CD publishing** - Manual publish is sufficient initially
- **Not creating a build system** - Tokens are simple enough to maintain manually
- **Not adding Style Dictionary** - Over-engineering for current scale
- **Not publishing to GitHub Package Registry** - npm is simpler for consumers

---

## Summary of Changes

| File | Change |
|------|--------|
| `packages/tokens/tokens.json` | Update font family to Plus Jakarta Sans |
| `packages/tokens/css/variables.css` | Update --wh-font-sans |
| `packages/tokens/css/tokens.css` | Update Google Fonts import |
| `packages/tokens/js/index.js` | Update fontFamily.sans |
| `packages/tokens/js/index.mjs` | Update fontFamily.sans |
| `packages/tokens/README.md` | Rewrite with clearer docs |
| `README.md` | Update usage section |

---

## Manual Testing Checklist

After implementation, verify:

1. **CSS import works**:
```css
@import '@warmhub/tokens/css';
/* Check: --wh-primary resolves to #4177a6 */
```

2. **Tailwind preset works**:
```js
// tailwind.config.js
module.exports = {
  presets: [require('@warmhub/tokens/tailwind')],
}
// Check: `bg-primary` applies correct color
```

3. **JS import works**:
```js
import { colors } from '@warmhub/tokens';
console.log(colors.sky[500]); // Should log '#4177a6'
```

4. **TypeScript types resolve**:
```ts
import { colors, Colors } from '@warmhub/tokens';
const primary: string = colors.sky[500]; // Should compile
```

---

## Automated Success Criteria

- [ ] Font references synced to Plus Jakarta Sans (Phase 1)
- [ ] README rewritten with clear installation/usage (Phase 2)
- [ ] `npm pack` produces valid package (Phase 3)
- [ ] Package can be installed and imports resolve

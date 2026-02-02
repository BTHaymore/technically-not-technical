# @warmhub/tokens

Design tokens for the WarmHub Design System. This package provides colors, typography, spacing, and other design primitives in multiple formats for easy consumption.

## Installation

```bash
npm install @warmhub/tokens
# or
yarn add @warmhub/tokens
# or
pnpm add @warmhub/tokens
```

## Usage

### CSS Variables

Import the CSS file to get all tokens as CSS custom properties:

```css
/* Full bundle (includes Google Fonts import) */
@import '@warmhub/tokens/css';

/* Variables only (no font import) */
@import '@warmhub/tokens/css/variables';
```

Then use the variables in your CSS:

```css
.my-component {
  background: var(--wh-background);
  color: var(--wh-foreground);
  font-family: var(--wh-font-sans);
  padding: var(--wh-spacing-4);
  border-radius: var(--wh-radius-md);
}
```

### Tailwind CSS

Use the preset in your `tailwind.config.js`:

```js
module.exports = {
  presets: [require('@warmhub/tokens/tailwind')],
  // ... your config
}
```

**Important:** Also import the CSS variables for semantic color theming:

```css
@import '@warmhub/tokens/css/variables';
@import 'tailwindcss';
```

### JavaScript / TypeScript

Import tokens directly for use in JS/TS:

```js
import { colors, typography, spacing } from '@warmhub/tokens';
// or
import tokens from '@warmhub/tokens';

// Use in CSS-in-JS
const styles = {
  backgroundColor: colors.sky[500],
  fontFamily: typography.fontFamily.sans,
  padding: spacing[4],
};
```

### JSON

For tooling integration (Figma plugins, Style Dictionary, etc.):

```js
const tokens = require('@warmhub/tokens/json');
```

## Token Reference

### Colors

| Scale | Primary (Sky) | Accent (Teal) | Neutral (Slate) |
|-------|---------------|---------------|-----------------|
| 500   | `#4177a6`     | `#14B8A6`     | `#64748B`       |

### Typography

- **Font Family:** Manrope (sans), Geist Mono (mono)
- **Scale:** xs (12px) → 6xl (60px)
- **Weights:** light (300), regular (400), medium (500), semibold (600), bold (700)

### Spacing

Based on 4px increments: `0, 1 (4px), 2 (8px), 3 (12px), 4 (16px), ...`

### Semantic Tokens

Semantic tokens automatically switch between light and dark modes:

- `--wh-background` / `--wh-foreground`
- `--wh-primary` / `--wh-primary-foreground`
- `--wh-secondary` / `--wh-secondary-foreground`
- `--wh-accent` / `--wh-accent-foreground`
- `--wh-muted` / `--wh-muted-foreground`
- `--wh-destructive` / `--wh-destructive-foreground`
- `--wh-border`, `--wh-input`, `--wh-ring`

Add `.dark` or `[data-theme="dark"]` to enable dark mode.

## License

MIT

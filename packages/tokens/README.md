# warmhub-tokens

Design tokens for the WarmHub Design System. Colors, typography, spacing, and other design primitives in multiple formats.

## Installation

Install from GitHub:

```bash
npm install github:warmautomation/ui-design-system#main
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "warmhub-tokens": "github:warmautomation/ui-design-system#main"
  }
}
```

## Quick Start

### CSS Variables

Import CSS variables for use in any project:

```css
/* Full bundle (includes Google Fonts) */
@import 'warmhub-tokens/css';

/* Variables only (bring your own fonts) */
@import 'warmhub-tokens/css/variables';
```

Use in your styles:

```css
.card {
  background: var(--wh-card);
  color: var(--wh-card-foreground);
  border: 1px solid var(--wh-border);
  border-radius: var(--wh-radius-md);
  padding: var(--wh-spacing-4);
  font-family: var(--wh-font-sans);
}

.button-primary {
  background: var(--wh-primary);
  color: var(--wh-primary-foreground);
}
```

### Tailwind CSS

Use the Tailwind preset for instant design system integration:

```js
// tailwind.config.js
module.exports = {
  presets: [require('warmhub-tokens/tailwind')],
  // ... your config
}
```

Import the CSS variables for semantic color theming:

```css
/* In your main CSS file */
@import 'warmhub-tokens/css/variables';
@import 'tailwindcss';
```

Now use Tailwind classes with WarmHub colors:

```html
<button class="bg-primary text-primary-foreground rounded-md px-4 py-2">
  Click me
</button>

<div class="bg-card text-card-foreground border border-border rounded-lg p-6">
  Card content
</div>
```

### JavaScript / TypeScript

Import tokens directly for CSS-in-JS, React Native, or programmatic use:

```ts
import { colors, typography, spacing } from 'warmhub-tokens';

// Access color scales
colors.sky[500];     // '#4177a6' (primary blue)
colors.slate[700];   // '#334155' (text color)
colors.teal[500];    // '#14B8A6' (accent)

// Typography
typography.fontFamily.sans;  // 'Manrope', system-ui, ...
typography.fontSize['2xl'];  // '1.5rem'

// Spacing (4px base unit)
spacing[4];  // '1rem' (16px)
spacing[8];  // '2rem' (32px)
```

For semantic colors that respect light/dark mode:

```ts
import { semantic } from 'warmhub-tokens';

// Light mode colors
semantic.light.background;  // '#F8FAFB'
semantic.light.primary;     // '#4177a6'

// Dark mode colors
semantic.dark.background;   // '#0F172A'
semantic.dark.primary;      // '#7eb3d8'
```

### JSON (for tooling)

For Figma plugins, Style Dictionary, or other design tools:

```js
const tokens = require('warmhub-tokens/json');
```

## Dark Mode

Add `.dark` or `[data-theme="dark"]` to your root element:

```html
<html class="dark">
  <!-- Dark mode active -->
</html>
```

All semantic CSS variables automatically switch to dark mode values.

## Brand Assets

Import logos and icons:

```js
import icon from 'warmhub-tokens/assets/icon.svg';
import logoLight from 'warmhub-tokens/assets/logo-light.svg';
import logoDark from 'warmhub-tokens/assets/logo-dark.svg';
```

| Asset | Description | Use |
|-------|-------------|-----|
| `icon.svg` | WarmHub flame icon | Favicons, app icons |
| `logo-light.svg` | Logo with wordmark | Light backgrounds |
| `logo-dark.svg` | Logo with wordmark (white) | Dark backgrounds |

## Token Reference

### Colors

| Scale | Sky (Primary) | Teal (Accent) | Slate (Neutral) |
|-------|---------------|---------------|-----------------|
| 50 | `#f0f7fc` | `#F0FDFA` | `#F8FAFB` |
| 500 | `#4177a6` | `#14B8A6` | `#64748B` |
| 900 | `#2c4d6c` | `#134E4A` | `#0F172A` |

### Semantic Colors

| Token | Light | Dark |
|-------|-------|------|
| `--wh-background` | Slate 50 | Slate 900 |
| `--wh-foreground` | Slate 700 | Slate 200 |
| `--wh-primary` | Sky 500 | Sky 400 |
| `--wh-accent` | Teal 500 | Teal 400 |
| `--wh-border` | Slate 200 | Slate 700 |

### Typography

- **Font Family:** Manrope (sans), Geist Mono (mono)
- **Scale:** xs (12px) to 6xl (60px)
- **Weights:** light (300), regular (400), medium (500), semibold (600), bold (700)

### Spacing

4px base unit: `1 = 4px`, `2 = 8px`, `4 = 16px`, `8 = 32px`, etc.

### Border Radius

| Token | Value |
|-------|-------|
| `--wh-radius-sm` | 2px |
| `--wh-radius-md` | 8px |
| `--wh-radius-lg` | 12px |
| `--wh-radius-xl` | 16px |

## Package Exports

```
warmhub-tokens
├── /           → JS/TS tokens (colors, typography, spacing, etc.)
├── /css        → Complete CSS bundle with Google Fonts
├── /css/variables → CSS variables only
├── /tailwind   → Tailwind CSS preset
├── /json       → Raw token data
└── /assets/*   → SVG logos and icons
```

## License

MIT

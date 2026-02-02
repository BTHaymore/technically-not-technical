# WarmHub Design System

UI/UX design system for AI products, built with React, TypeScript, and Tailwind CSS v4.

**Design Philosophy:** 70% technical precision + 30% human warmth

## Quick Start

```bash
cd docs-app
npm install
npm run dev
```

Visit [http://localhost:5173/design-system](http://localhost:5173/design-system)

## Features

- **Foundations** - Colors, Typography, Spacing tokens
- **Components** - Button, Input, Card, Badge, Table, Alert, Charts, Beliefs
- **Marketing** - Hero sections, Feature blocks
- **Templates** - Dashboard, Landing page
- **Sandbox** - Component testing area

## Using in Other Apps

Install the tokens package from this repository:

```bash
npm install https://gitpkg.now.sh/warmautomation/ui-design-system/packages/tokens?main
```

### CSS Variables

```css
@import '@warmhub/tokens/css';

.my-component {
  background: var(--wh-background);
  color: var(--wh-foreground);
  font-family: var(--wh-font-sans);
  padding: var(--wh-spacing-4);
  border-radius: var(--wh-radius-md);
}
```

### Tailwind CSS

```js
// tailwind.config.js
module.exports = {
  presets: [require('@warmhub/tokens/tailwind')],
}
```

```css
/* Import CSS variables for theming */
@import '@warmhub/tokens/css/variables';
@import 'tailwindcss';
```

### JavaScript / TypeScript

```js
import { colors, typography, spacing } from '@warmhub/tokens';

const styles = {
  backgroundColor: colors.sky[500],
  fontFamily: typography.fontFamily.sans,
  padding: spacing[4],
};
```

See [packages/tokens/README.md](packages/tokens/README.md) for full documentation.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- ShadCN UI components
- React Router
- Manrope typography

## License

Proprietary - WarmHub

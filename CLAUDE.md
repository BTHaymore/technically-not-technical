# CLAUDE.md - WarmHub Design System

## Project Overview

The **WarmHub Design System** is a comprehensive UI/UX design system for AI products. It includes design tokens, configuration files, and a full documentation site.

**Design Philosophy:** 70% technical precision + 30% human warmth

## Project Structure

```
design-system/
├── docs-app/                     # Vite + React documentation site
│   ├── src/
│   │   ├── components/           # Layout and UI components
│   │   ├── pages/                # Route pages (foundations, components, marketing, templates)
│   │   └── index.css             # Tailwind v4 + design tokens
│   └── package.json
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── tailwind.config.js            # v1 Tailwind config (sage/terracotta)
├── tailwind.config.v2.js         # v2 Tailwind config (sky blue/coral)
├── globals.css                   # v1 CSS variables
├── globals.v2.css                # v2 CSS variables
├── design-system-demo.jsx        # Legacy React demo
├── design-system-preview.html    # Legacy HTML preview (v1)
├── design-system-preview-v2.html # Legacy HTML preview (v2)
└── README.md
```

## Docs App (Primary)

The docs-app is the primary way to explore and use the design system.

### Development
```bash
cd docs-app
npm install
npm run dev
```

### Build & Deploy
```bash
npm run build        # Outputs to docs-app/dist
# Deploys automatically to GitHub Pages on push to main
```

### Tech Stack
- **Vite + React + TypeScript**
- **Tailwind CSS v4**
- **ShadCN UI components**
- **React Router** for navigation
- **Plus Jakarta Sans** typography

### Site Structure
- `/` - Homepage with design system intro
- `/foundations/*` - Colors, Typography, Spacing
- `/components/*` - Button, Input, Card, Badge, Table, Alert
- `/marketing/*` - Hero sections, Feature blocks
- `/templates/*` - Dashboard, Landing page

## Design System Version

The docs-app uses **v2** (sky blue/coral palette):

| Token | Value |
|-------|-------|
| Primary | Sky Blue `#4177A6` |
| Accent | Coral `#E8636C` |
| Neutrals | Slate (cool blue-gray) |
| Font | Plus Jakarta Sans |

## Key Commands

```bash
# Docs app development
cd docs-app && npm run dev

# Build for production
cd docs-app && npm run build

# Add new ShadCN component
cd docs-app && npx shadcn@latest add [component]
```

## Component Documentation Pages

Each component page includes:
1. Overview and description
2. Visual examples with multiple variants
3. Copyable code snippets
4. Props table with types
5. Usage guidelines (Do's and Don'ts)

## File Conventions

- `src/pages/` - Route components organized by section
- `src/components/ui/` - ShadCN components
- `src/components/layout/` - App layout (Sidebar, Header)
- CSS variables follow ShadCN conventions (`--primary`, `--secondary`, etc.)

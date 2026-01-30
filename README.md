# WarmHub Design System

A comprehensive UI/UX design system for AI products, built with React, TypeScript, and Tailwind CSS v4.

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

## Belief Components

Specialized components for uncertainty tracking using Subjective Logic (BDU model):

| Component | Purpose |
|-----------|---------|
| `BDUMeter` | Visualizes Belief/Disbelief/Uncertainty values |
| `BeliefCard` | Displays beliefs with supporting/contradicting evidence |
| `CertaintyCard` | Shows certainty score (belief − disbelief) on -1 to +1 scale |
| `ReputationCard` | Displays source trustworthiness |
| `AssertionCard` | Shows factual claims with content, tags, and source |

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- ShadCN UI components
- React Router
- Plus Jakarta Sans typography

## Design Tokens (v2)

| Token | Value |
|-------|-------|
| Primary | Sky Blue `#4177A6` |
| Accent | Coral `#E8636C` |
| Neutrals | Slate (cool blue-gray) |

## License

Proprietary - WarmHub

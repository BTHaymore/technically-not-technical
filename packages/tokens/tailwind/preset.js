/**
 * WarmHub Design System - Tailwind CSS Preset
 * @warmhub/tokens v2.0.0
 *
 * Usage in tailwind.config.js:
 *
 *   module.exports = {
 *     presets: [require('@warmhub/tokens/tailwind')],
 *     // ... your config
 *   }
 */

const tokens = require('../js/index.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primitive colors
        slate: tokens.colors.slate,
        sky: tokens.colors.sky,
        teal: tokens.colors.teal,
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        error: tokens.colors.error,
        info: tokens.colors.info,

        // Semantic colors (use CSS variables for theme switching)
        background: 'var(--wh-background)',
        foreground: 'var(--wh-foreground)',
        card: {
          DEFAULT: 'var(--wh-card)',
          foreground: 'var(--wh-card-foreground)',
        },
        primary: {
          DEFAULT: 'var(--wh-primary)',
          foreground: 'var(--wh-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--wh-secondary)',
          foreground: 'var(--wh-secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--wh-muted)',
          foreground: 'var(--wh-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--wh-accent)',
          foreground: 'var(--wh-accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--wh-destructive)',
          foreground: 'var(--wh-destructive-foreground)',
        },
        border: 'var(--wh-border)',
        input: 'var(--wh-input)',
        ring: 'var(--wh-ring)',
      },
      fontFamily: {
        sans: tokens.typography.fontFamily.sans.split(', '),
        mono: tokens.typography.fontFamily.mono.split(', '),
      },
      fontSize: tokens.typography.fontSize,
      fontWeight: {
        light: tokens.typography.fontWeight.light,
        normal: tokens.typography.fontWeight.regular,
        medium: tokens.typography.fontWeight.medium,
        semibold: tokens.typography.fontWeight.semibold,
        bold: tokens.typography.fontWeight.bold,
      },
      lineHeight: {
        tight: tokens.typography.lineHeight.tight,
        normal: tokens.typography.lineHeight.normal,
        relaxed: tokens.typography.lineHeight.relaxed,
      },
      spacing: tokens.spacing,
      borderRadius: {
        none: tokens.radius.none,
        sm: tokens.radius.sm,
        DEFAULT: tokens.radius.DEFAULT,
        md: tokens.radius.md,
        lg: tokens.radius.lg,
        xl: tokens.radius.xl,
        full: tokens.radius.full,
      },
      boxShadow: {
        xs: tokens.shadow.xs,
        sm: tokens.shadow.sm,
        md: tokens.shadow.md,
        lg: tokens.shadow.lg,
      },
    },
  },
};

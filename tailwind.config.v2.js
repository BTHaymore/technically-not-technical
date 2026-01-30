/** @type {import('tailwindcss').Config} */

/*
 * WARMHUB DESIGN SYSTEM v2 - Tailwind Configuration
 *
 * UPDATED: Muted sky blue primary color + Plus Jakarta Sans
 * Philosophy: 70% technical precision / 30% human warmth
 * Foundation: ShadCN UI components
 * Palette: Slate neutrals, muted sky blue primary, balanced chart colors
 */

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /*
       * COLOR SYSTEM v2
       *
       * Neutrals: Slate (cool blue-gray undertones) - professional/technical
       * Primary: Muted Cyan (blue-shifted teal) - fresh, modern, calming
       * Accent: Muted coral - restrained warmth
       * Semantic: Standard industry colors, slightly muted
       */
      colors: {
        // === SLATE NEUTRALS (Cool blue-gray) ===
        slate: {
          50:  '#F8FAFB',   // Background light
          100: '#F1F5F7',   // Surface light
          200: '#E2E8ED',   // Border light
          300: '#CBD5DC',   // Border medium
          400: '#94A3B0',   // Muted text
          500: '#64748B',   // Secondary text
          600: '#475569',   // Primary text (light mode)
          700: '#334155',   // Headings
          800: '#1E293B',   // Surface dark
          900: '#0F172A',   // Background dark
          950: '#020617',   // Deep dark
        },

        // === PRIMARY: MUTED SKY BLUE ===
        sky: {
          50:  '#f0f7fc',   // Accent light
          100: '#e1eff8',
          200: '#c3dfef',
          300: '#9ac8e3',
          400: '#6aadd4',
          500: '#4177a6',   // Primary default (accent)
          600: '#416d93',   // Link color
          700: '#3d6a91',   // Link hover
          800: '#39688a',   // Dark mode accent
          900: '#2c4d6c',
          950: '#1c3448',   // Dark mode accent light
        },

        // === SAGE (Kept as secondary option, slightly cooler) ===
        sage: {
          50:  '#F6F7F6',
          100: '#E3E9E5',
          200: '#C7D4CB',
          300: '#9FB5A6',
          400: '#72937D',
          500: '#527A5F',   // Secondary green option
          600: '#3F614A',
          700: '#344F3D',
          800: '#2C4033',
          900: '#26362B',
          950: '#121C16',
        },

        // === ACCENT: CORAL (Muted, restrained warmth) ===
        coral: {
          50:  '#FFF5F5',
          100: '#FEE8E7',
          200: '#FECDD3',
          300: '#FDA4AD',
          400: '#FB7185',
          500: '#E8636C',   // Accent default
          600: '#D14D55',   // Accent hover
          700: '#B03A42',
          800: '#923238',
          900: '#7A2D32',
          950: '#430A0F',
        },

        // === SEMANTIC COLORS ===
        success: {
          50:  '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',   // Emerald
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },

        warning: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',   // Amber
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },

        error: {
          50:  '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',   // Red
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },

        info: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',   // Blue
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },

        // === CHART COLORS (Balanced palette for data viz) ===
        chart: {
          1: '#4177a6',  // Sky (primary)
          2: '#3B82F6',  // Blue
          3: '#8B5CF6',  // Purple
          4: '#F59E0B',  // Amber
          5: '#EC4899',  // Pink
          6: '#10B981',  // Emerald
          7: '#6366F1',  // Indigo
          8: '#F97316',  // Orange
        },
      },

      /*
       * TYPOGRAPHY
       *
       * Font: Plus Jakarta Sans (primary), Geist Mono (code)
       * Scale: 1.25 ratio (Major Third)
       */
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        'xs':   ['0.75rem',   { lineHeight: '1rem',     letterSpacing: '0.01em' }],
        'sm':   ['0.875rem',  { lineHeight: '1.25rem',  letterSpacing: '0.005em' }],
        'base': ['1rem',      { lineHeight: '1.625rem', letterSpacing: '0' }],
        'lg':   ['1.125rem',  { lineHeight: '1.75rem',  letterSpacing: '-0.005em' }],
        'xl':   ['1.25rem',   { lineHeight: '1.875rem', letterSpacing: '-0.01em' }],
        '2xl':  ['1.5rem',    { lineHeight: '2rem',     letterSpacing: '-0.015em' }],
        '3xl':  ['1.875rem',  { lineHeight: '2.375rem', letterSpacing: '-0.02em' }],
        '4xl':  ['2.25rem',   { lineHeight: '2.75rem',  letterSpacing: '-0.025em' }],
        '5xl':  ['3rem',      { lineHeight: '3.5rem',   letterSpacing: '-0.03em' }],
        '6xl':  ['3.75rem',   { lineHeight: '4.25rem',  letterSpacing: '-0.035em' }],
      },

      /*
       * SPACING & LAYOUT
       */
      spacing: {
        '4.5': '1.125rem',
        '13':  '3.25rem',
        '15':  '3.75rem',
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
      },

      /*
       * BORDER RADIUS
       */
      borderRadius: {
        'sm':  '0.25rem',
        'md':  '0.375rem',
        'lg':  '0.5rem',
        'xl':  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      /*
       * SHADOWS (Cool-tinted)
       */
      boxShadow: {
        'xs':   '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'sm':   '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.06)',
        'md':   '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.06)',
        'lg':   '0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.06)',
        'xl':   '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.06)',
        '2xl':  '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
        'inner': 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.04)',
        'glow-sky': '0 0 20px -5px rgba(65, 119, 166, 0.3)',
      },

      /*
       * ANIMATIONS
       */
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        'fade-in':  'fade-in 0.2s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },

      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}

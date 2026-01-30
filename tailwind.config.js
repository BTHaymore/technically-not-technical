/** @type {import('tailwindcss').Config} */

/*
 * WARMHUB DESIGN SYSTEM - Tailwind Configuration
 *
 * Philosophy: 70% technical precision / 30% human warmth
 * Foundation: ShadCN UI components
 * Palette: Mixed earthy tones (sage + terracotta + stone)
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
       * COLOR SYSTEM
       *
       * Neutrals: Stone-based grays with slight warmth (not pure gray)
       * Primary: Muted sage green - technical yet natural
       * Accent: Terracotta/clay - the human warmth element
       * Semantic: Muted, earthy variants for states
       */
      colors: {
        // === STONE NEUTRALS (Warm-shifted grays) ===
        stone: {
          50:  '#FAFAF8',   // Background light
          100: '#F5F5F3',   // Surface light
          200: '#E8E8E4',   // Border light
          300: '#D4D4CF',   // Border medium
          400: '#A3A39C',   // Muted text
          500: '#737369',   // Secondary text
          600: '#545449',   // Primary text (light mode)
          700: '#3D3D35',   // Headings
          800: '#282822',   // Surface dark
          900: '#1C1C18',   // Background dark
          950: '#121210',   // Deep dark
        },

        // === PRIMARY: SAGE (Technical + Natural) ===
        sage: {
          50:  '#F6F7F6',
          100: '#E3E7E3',
          200: '#C7D0C7',
          300: '#A3B2A3',
          400: '#7D917D',
          500: '#5F7A5F',   // Primary default
          600: '#4A614A',   // Primary hover
          700: '#3D4F3D',   // Primary pressed
          800: '#334033',
          900: '#2B352B',
          950: '#151C15',
        },

        // === ACCENT: TERRACOTTA (Human Warmth) ===
        terracotta: {
          50:  '#FBF7F5',
          100: '#F7EDE8',
          200: '#EFDBD1',
          300: '#E4C2B1',
          400: '#D4A088',
          500: '#C4826A',   // Accent default
          600: '#B26B52',   // Accent hover
          700: '#945545',
          800: '#7A483C',
          900: '#663E35',
          950: '#371F1A',
        },

        // === SEMANTIC COLORS ===
        success: {
          50:  '#F3F8F4',
          100: '#E4F0E6',
          200: '#C9E1CE',
          300: '#9FC9A8',
          400: '#6EAB7A',
          500: '#4A8F58',   // Success default
          600: '#387344',
          700: '#2F5C39',
          800: '#294A30',
          900: '#233D29',
          950: '#0F2114',
        },

        warning: {
          50:  '#FDFAEF',
          100: '#F9F1D1',
          200: '#F3E19F',
          300: '#EBCB64',
          400: '#E4B63E',
          500: '#D99B22',   // Warning default
          600: '#C0781A',
          700: '#9F5718',
          800: '#83451B',
          900: '#6C3A19',
          950: '#3E1D0A',
        },

        error: {
          50:  '#FDF6F5',
          100: '#FCE9E7',
          200: '#FAD7D3',
          300: '#F5B8B1',
          400: '#ED8D82',
          500: '#E06555',   // Error default
          600: '#CB4638',
          700: '#AA382C',
          800: '#8D3228',
          900: '#752F27',
          950: '#3F1410',
        },

        info: {
          50:  '#F5F7FA',
          100: '#EAEFF5',
          200: '#D1DDE9',
          300: '#A9C0D6',
          400: '#7A9EBE',
          500: '#5981A6',   // Info default
          600: '#46688B',
          700: '#3A5471',
          800: '#33485F',
          900: '#2E3E50',
          950: '#1F2935',
        },
      },

      /*
       * TYPOGRAPHY
       *
       * Font: Geist Sans (or Inter as fallback)
       * Scale: 1.25 ratio (Major Third) - balanced for technical content
       */
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        'xs':   ['0.75rem',   { lineHeight: '1rem',     letterSpacing: '0.01em' }],     // 12px
        'sm':   ['0.875rem',  { lineHeight: '1.25rem',  letterSpacing: '0.005em' }],    // 14px
        'base': ['1rem',      { lineHeight: '1.625rem', letterSpacing: '0' }],          // 16px
        'lg':   ['1.125rem',  { lineHeight: '1.75rem',  letterSpacing: '-0.005em' }],   // 18px
        'xl':   ['1.25rem',   { lineHeight: '1.875rem', letterSpacing: '-0.01em' }],    // 20px
        '2xl':  ['1.5rem',    { lineHeight: '2rem',     letterSpacing: '-0.015em' }],   // 24px
        '3xl':  ['1.875rem',  { lineHeight: '2.375rem', letterSpacing: '-0.02em' }],    // 30px
        '4xl':  ['2.25rem',   { lineHeight: '2.75rem',  letterSpacing: '-0.025em' }],   // 36px
        '5xl':  ['3rem',      { lineHeight: '3.5rem',   letterSpacing: '-0.03em' }],    // 48px
        '6xl':  ['3.75rem',   { lineHeight: '4.25rem',  letterSpacing: '-0.035em' }],   // 60px
      },

      /*
       * SPACING & LAYOUT
       *
       * 8px base grid with generous white space
       */
      spacing: {
        '4.5': '1.125rem',  // 18px
        '13':  '3.25rem',   // 52px
        '15':  '3.75rem',   // 60px
        '18':  '4.5rem',    // 72px
        '22':  '5.5rem',    // 88px
        '26':  '6.5rem',    // 104px
        '30':  '7.5rem',    // 120px
      },

      /*
       * BORDER RADIUS
       *
       * Slightly softer than typical technical UI
       */
      borderRadius: {
        'sm':  '0.25rem',   // 4px  - Subtle
        'md':  '0.375rem',  // 6px  - Default
        'lg':  '0.5rem',    // 8px  - Cards
        'xl':  '0.75rem',   // 12px - Large cards
        '2xl': '1rem',      // 16px - Panels
        '3xl': '1.5rem',    // 24px - Hero elements
      },

      /*
       * SHADOWS
       *
       * Subtle, warm-tinted shadows for depth
       */
      boxShadow: {
        'xs':   '0 1px 2px 0 rgba(28, 28, 24, 0.04)',
        'sm':   '0 1px 3px 0 rgba(28, 28, 24, 0.06), 0 1px 2px -1px rgba(28, 28, 24, 0.06)',
        'md':   '0 4px 6px -1px rgba(28, 28, 24, 0.06), 0 2px 4px -2px rgba(28, 28, 24, 0.06)',
        'lg':   '0 10px 15px -3px rgba(28, 28, 24, 0.06), 0 4px 6px -4px rgba(28, 28, 24, 0.06)',
        'xl':   '0 20px 25px -5px rgba(28, 28, 24, 0.08), 0 8px 10px -6px rgba(28, 28, 24, 0.06)',
        '2xl':  '0 25px 50px -12px rgba(28, 28, 24, 0.15)',
        'inner': 'inset 0 2px 4px 0 rgba(28, 28, 24, 0.04)',
        // Accent glow for interactive elements
        'glow-sage': '0 0 20px -5px rgba(95, 122, 95, 0.3)',
        'glow-terracotta': '0 0 20px -5px rgba(196, 130, 106, 0.3)',
      },

      /*
       * ANIMATIONS
       *
       * Smooth, professional transitions
       */
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-subtle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%':   { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(4px)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      animation: {
        'fade-in':  'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.15s ease-in',
        'scale-in': 'scale-in 0.2s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'shimmer':  'shimmer 2s infinite linear',
      },

      /*
       * ADDITIONAL UTILITIES
       */
      maxWidth: {
        '8xl': '88rem',   // 1408px - Wide layouts
        '9xl': '96rem',   // 1536px - Full-width
      },

      aspectRatio: {
        'golden': '1.618 / 1',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}

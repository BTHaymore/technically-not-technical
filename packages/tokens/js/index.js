/**
 * WarmHub Design System - JavaScript Tokens (CommonJS)
 * Auto-generated from tokens.json — DO NOT EDIT
 * Run "node build.js" to regenerate.
 */

const colors = {
  slate: {
    50: '#F8FAFB',
    100: '#F1F5F7',
    200: '#E2E8ED',
    300: '#CBD5DC',
    400: '#94A3B0',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },
  sky: {
    50: '#f0f7fc',
    100: '#e1eff8',
    200: '#c3dfef',
    300: '#9ac8e3',
    400: '#6aadd4',
    500: '#4177a6',
    600: '#416d93',
    700: '#3d6a91',
    800: '#39688a',
    900: '#2c4d6c',
    950: '#1c3448',
  },
  teal: {
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
    950: '#042F2E',
  },
  success: {
    50: '#ECFDF5',
    500: '#10B981',
    600: '#059669',
  },
  warning: {
    50: '#FFFBEB',
    500: '#F59E0B',
    600: '#D97706',
  },
  error: {
    50: '#FEF2F2',
    500: '#EF4444',
    600: '#DC2626',
  },
  info: {
    50: '#EFF6FF',
    500: '#3B82F6',
    600: '#2563EB',
  },
};

const semantic = {
  light: {
    background: '#F8FAFB',
    foreground: '#334155',
    card: '#FFFFFF',
    cardForeground: '#334155',
    primary: '#4177a6',
    primaryForeground: '#FFFFFF',
    secondary: '#E2E8ED',
    secondaryForeground: '#334155',
    muted: '#F1F5F7',
    mutedForeground: '#64748B',
    accent: '#14B8A6',
    accentForeground: '#FFFFFF',
    destructive: '#EF4444',
    destructiveForeground: '#FFFFFF',
    border: '#E2E8ED',
    input: '#E2E8ED',
    ring: '#4177a6',
    popover: '#FFFFFF',
    popoverForeground: '#334155',
    chart1: '#4177a6',
    chart2: '#3B82F6',
    chart3: '#8B5CF6',
    chart4: '#F59E0B',
    chart5: '#EC4899',
    sidebar: '#F8FAFB',
    sidebarBackground: '#F8FAFB',
    sidebarForeground: '#334155',
    sidebarPrimary: '#4177a6',
    sidebarPrimaryForeground: '#FFFFFF',
    sidebarAccent: '#E2E8ED',
    sidebarAccentForeground: '#334155',
    sidebarBorder: '#E2E8ED',
    sidebarRing: '#4177a6',
  },
  dark: {
    background: '#0F172A',
    foreground: '#E2E8ED',
    card: '#1E293B',
    cardForeground: '#E2E8ED',
    primary: '#7eb3d8',
    primaryForeground: '#0F172A',
    secondary: '#334155',
    secondaryForeground: '#E2E8ED',
    muted: '#1E293B',
    mutedForeground: '#94A3B0',
    accent: '#2DD4BF',
    accentForeground: '#0F172A',
    destructive: '#F87171',
    destructiveForeground: '#FFFFFF',
    border: '#334155',
    input: '#334155',
    ring: '#7eb3d8',
    popover: '#1E293B',
    popoverForeground: '#E2E8ED',
    chart1: '#7eb3d8',
    chart2: '#60A5FA',
    chart3: '#A78BFA',
    chart4: '#FBBF24',
    chart5: '#F472B6',
    sidebar: '#1E293B',
    sidebarBackground: '#1E293B',
    sidebarForeground: '#E2E8ED',
    sidebarPrimary: '#7eb3d8',
    sidebarPrimaryForeground: '#0F172A',
    sidebarAccent: '#1c3448',
    sidebarAccentForeground: '#E2E8ED',
    sidebarBorder: '#334155',
    sidebarRing: '#7eb3d8',
  },
};

const typography = {
  fontFamily: {
    sans: "'Manrope', system-ui, -apple-system, sans-serif",
    mono: "'Geist Mono', 'JetBrains Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.625',
  },
};

const spacing = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
};

const radius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
};

const shadow = {
  xs: '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
  sm: '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.06)',
  md: '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.06)',
  lg: '0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.06)',
};

const component = {
  table: {
    borderRadius: 'var(--wh-radius-lg)',
    borderColor: 'var(--wh-border)',
    fontSize: 'var(--wh-font-size-sm)',
    lineHeight: 'var(--wh-line-height-normal)',
    cellPaddingY: 'var(--wh-spacing-3)',
    cellPaddingX: 'var(--wh-spacing-4)',
    headerBg: 'color-mix(in srgb, var(--wh-muted) 50%, var(--wh-background))',
    headerColor: 'var(--wh-foreground)',
    headerFontWeight: 'var(--wh-font-weight-medium)',
  },
  badge: {
    borderRadius: 'var(--wh-radius-full)',
    fontSize: 'var(--wh-font-size-xs)',
    fontWeight: 'var(--wh-font-weight-medium)',
    paddingY: '0.125rem',
    paddingX: 'var(--wh-spacing-2)',
    secondaryBg: 'color-mix(in srgb, var(--wh-primary) 15%, transparent)',
    secondaryColor: 'var(--wh-primary)',
    outlineBg: 'color-mix(in srgb, var(--wh-accent) 12%, transparent)',
    outlineColor: 'var(--wh-accent)',
    outlineBorder: 'color-mix(in srgb, var(--wh-accent) 25%, transparent)',
  },
};

module.exports = {
  colors,
  semantic,
  typography,
  spacing,
  radius,
  shadow,
  component,
};

module.exports.colors = colors;
module.exports.semantic = semantic;
module.exports.typography = typography;
module.exports.spacing = spacing;
module.exports.radius = radius;
module.exports.shadow = shadow;
module.exports.component = component;

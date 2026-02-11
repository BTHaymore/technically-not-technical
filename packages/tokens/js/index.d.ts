/**
 * WarmHub Design System - TypeScript Declarations
 * Auto-generated from tokens.json — DO NOT EDIT
 * Run "node build.js" to regenerate.
 */

export interface ColorScale {
  50: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500: string;
  600: string;
  700?: string;
  800?: string;
  900?: string;
  950?: string;
}

export interface Colors {
  slate: Required<ColorScale>;
  sky: Required<ColorScale>;
  teal: Required<ColorScale>;
  success: Pick<ColorScale, '50' | '500' | '600'>;
  warning: Pick<ColorScale, '50' | '500' | '600'>;
  error: Pick<ColorScale, '50' | '500' | '600'>;
  info: Pick<ColorScale, '50' | '500' | '600'>;
}

export interface SemanticColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  popover: string;
  popoverForeground: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  sidebar: string;
  sidebarBackground: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}

export interface Semantic {
  light: SemanticColors;
  dark: SemanticColors;
}

export interface Typography {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    'xs': string;
    'sm': string;
    'base': string;
    'lg': string;
    'xl': string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    light: string;
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
}

export interface Spacing {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
}

export interface Radius {
  none: string;
  sm: string;
  DEFAULT: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface Shadow {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface TableTokens {
  borderRadius: string;
  borderColor: string;
  fontSize: string;
  lineHeight: string;
  cellPaddingY: string;
  cellPaddingX: string;
  headerBg: string;
  headerColor: string;
  headerFontWeight: string;
}

export interface BadgeTokens {
  borderRadius: string;
  fontSize: string;
  fontWeight: string;
  paddingY: string;
  paddingX: string;
  secondaryBg: string;
  secondaryColor: string;
  outlineBg: string;
  outlineColor: string;
  outlineBorder: string;
}

export interface Component {
  table: TableTokens;
  badge: BadgeTokens;
}

export declare const colors: Colors;
export declare const semantic: Semantic;
export declare const typography: Typography;
export declare const spacing: Spacing;
export declare const radius: Radius;
export declare const shadow: Shadow;
export declare const component: Component;

declare const tokens: {
  colors: Colors;
  semantic: Semantic;
  typography: Typography;
  spacing: Spacing;
  radius: Radius;
  shadow: Shadow;
  component: Component;
};

export default tokens;

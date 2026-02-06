#!/usr/bin/env node
/**
 * WarmHub Design System - Token Build Script
 *
 * Reads tokens.json and generates:
 *   - css/variables.css
 *   - js/index.js (CommonJS)
 *   - js/index.mjs (ESM)
 *   - js/index.d.ts (TypeScript declarations)
 *
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');

const HEADER_CSS = `/**
 * WarmHub Design System - CSS Custom Properties
 * Auto-generated from tokens.json — DO NOT EDIT
 * Run "node build.js" to regenerate.
 */`;

const HEADER_CJS = `/**
 * WarmHub Design System - JavaScript Tokens (CommonJS)
 * Auto-generated from tokens.json — DO NOT EDIT
 * Run "node build.js" to regenerate.
 */`;

const HEADER_ESM = `/**
 * WarmHub Design System - JavaScript Tokens
 * Auto-generated from tokens.json — DO NOT EDIT
 * Run "node build.js" to regenerate.
 */`;

const HEADER_DTS = `/**
 * WarmHub Design System - TypeScript Declarations
 * Auto-generated from tokens.json — DO NOT EDIT
 * Run "node build.js" to regenerate.
 */`;

// ─── Helpers ───────────────────────────────────────────────

function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function needsQuote(key) {
  return /^\d/.test(key) || /\dxl/.test(key);
}

function jsKey(key) {
  return needsQuote(key) ? `'${key}'` : key;
}

function jsVal(value) {
  if (value.includes("'")) {
    return `"${value}"`;
  }
  return `'${value}'`;
}

// ─── Read tokens ───────────────────────────────────────────

const tokensPath = path.join(__dirname, 'tokens.json');
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

// ─── CSS Generation ────────────────────────────────────────

function buildCSS() {
  const lines = [HEADER_CSS, '', ':root {'];

  // Color primitives
  lines.push('  /* Color Primitives */');
  for (const [scale, shades] of Object.entries(tokens.color)) {
    for (const [shade, token] of Object.entries(shades)) {
      lines.push(`  --wh-color-${scale}-${shade}: ${token.$value};`);
    }
    lines.push('');
  }

  // Typography
  lines.push('  /* Typography */');
  for (const [key, token] of Object.entries(tokens.typography.fontFamily)) {
    lines.push(`  --wh-font-${key}: ${token.$value};`);
  }
  lines.push('');
  for (const [key, token] of Object.entries(tokens.typography.fontSize)) {
    lines.push(`  --wh-font-size-${key}: ${token.$value};`);
  }
  lines.push('');
  for (const [key, token] of Object.entries(tokens.typography.fontWeight)) {
    lines.push(`  --wh-font-weight-${key}: ${token.$value};`);
  }
  lines.push('');
  for (const [key, token] of Object.entries(tokens.typography.lineHeight)) {
    lines.push(`  --wh-line-height-${key}: ${token.$value};`);
  }
  lines.push('');

  // Spacing
  lines.push('  /* Spacing */');
  for (const [key, token] of Object.entries(tokens.spacing)) {
    lines.push(`  --wh-spacing-${key}: ${token.$value};`);
  }
  lines.push('');

  // Radius
  lines.push('  /* Radius */');
  for (const [key, token] of Object.entries(tokens.radius)) {
    lines.push(`  --wh-radius-${key}: ${token.$value};`);
  }
  lines.push('');

  // Shadows
  lines.push('  /* Shadows */');
  for (const [key, token] of Object.entries(tokens.shadow)) {
    lines.push(`  --wh-shadow-${key}: ${token.$value};`);
  }
  lines.push('');

  // Semantic light
  lines.push('  /* Semantic Tokens (Light) */');
  for (const [key, token] of Object.entries(tokens.semantic.light)) {
    lines.push(`  --wh-${camelToKebab(key)}: ${token.$value};`);
  }

  lines.push('}', '');

  // Dark mode
  lines.push('.dark,');
  lines.push('[data-theme="dark"] {');
  for (const [key, token] of Object.entries(tokens.semantic.dark)) {
    lines.push(`  --wh-${camelToKebab(key)}: ${token.$value};`);
  }
  lines.push('}', '');

  return lines.join('\n');
}

// ─── JS Generation (shared logic) ─────────────────────────

function buildColorObj(indent) {
  const pad = ' '.repeat(indent);
  const pad2 = ' '.repeat(indent + 2);
  const lines = [];
  for (const [scale, shades] of Object.entries(tokens.color)) {
    lines.push(`${pad}${scale}: {`);
    const entries = Object.entries(shades);
    for (const [shade, token] of entries) {
      lines.push(`${pad2}${shade}: ${jsVal(token.$value)},`);
    }
    lines.push(`${pad}},`);
  }
  return lines.join('\n');
}

function buildSemanticObj(indent) {
  const pad = ' '.repeat(indent);
  const pad2 = ' '.repeat(indent + 2);
  const lines = [];
  for (const theme of ['light', 'dark']) {
    lines.push(`${pad}${theme}: {`);
    for (const [key, token] of Object.entries(tokens.semantic[theme])) {
      lines.push(`${pad2}${key}: ${jsVal(token.$value)},`);
    }
    lines.push(`${pad}},`);
  }
  return lines.join('\n');
}

function buildTypographyObj(indent) {
  const pad = ' '.repeat(indent);
  const pad2 = ' '.repeat(indent + 2);
  const lines = [];
  for (const [category, entries] of Object.entries(tokens.typography)) {
    lines.push(`${pad}${category}: {`);
    for (const [key, token] of Object.entries(entries)) {
      lines.push(`${pad2}${jsKey(key)}: ${jsVal(token.$value)},`);
    }
    lines.push(`${pad}},`);
  }
  return lines.join('\n');
}

function buildFlatObj(obj, indent) {
  const pad = ' '.repeat(indent);
  const lines = [];
  for (const [key, token] of Object.entries(obj)) {
    const k = key === 'default' ? 'DEFAULT' : jsKey(key);
    lines.push(`${pad}${k}: ${jsVal(token.$value)},`);
  }
  return lines.join('\n');
}

// ─── CJS Generation ───────────────────────────────────────

function buildCJS() {
  return `${HEADER_CJS}

const colors = {
${buildColorObj(2)}
};

const semantic = {
${buildSemanticObj(2)}
};

const typography = {
${buildTypographyObj(2)}
};

const spacing = {
${buildFlatObj(tokens.spacing, 2)}
};

const radius = {
${buildFlatObj(tokens.radius, 2)}
};

const shadow = {
${buildFlatObj(tokens.shadow, 2)}
};

module.exports = {
  colors,
  semantic,
  typography,
  spacing,
  radius,
  shadow,
};

module.exports.colors = colors;
module.exports.semantic = semantic;
module.exports.typography = typography;
module.exports.spacing = spacing;
module.exports.radius = radius;
module.exports.shadow = shadow;
`;
}

// ─── ESM Generation ───────────────────────────────────────

function buildESM() {
  return `${HEADER_ESM}

export const colors = {
${buildColorObj(2)}
};

export const semantic = {
${buildSemanticObj(2)}
};

export const typography = {
${buildTypographyObj(2)}
};

export const spacing = {
${buildFlatObj(tokens.spacing, 2)}
};

export const radius = {
${buildFlatObj(tokens.radius, 2)}
};

export const shadow = {
${buildFlatObj(tokens.shadow, 2)}
};

// Default export with all tokens
export default {
  colors,
  semantic,
  typography,
  spacing,
  radius,
  shadow,
};
`;
}

// ─── TypeScript Declarations ──────────────────────────────

function buildDTS() {
  // Build ColorScale interface from actual data
  const allShades = new Set();
  const scaleShades = {};
  for (const [scale, shades] of Object.entries(tokens.color)) {
    scaleShades[scale] = Object.keys(shades);
    for (const shade of Object.keys(shades)) {
      allShades.add(shade);
    }
  }

  // Full scales (have all shades) vs partial scales
  const fullScales = [];
  const partialScales = [];
  for (const [scale, shades] of Object.entries(scaleShades)) {
    if (shades.length >= 10) {
      fullScales.push(scale);
    } else {
      partialScales.push({ name: scale, shades });
    }
  }

  // SemanticColors from the light theme keys
  const semanticKeys = Object.keys(tokens.semantic.light);

  // Typography sub-interfaces
  const fontSizeKeys = Object.keys(tokens.typography.fontSize);
  const fontWeightKeys = Object.keys(tokens.typography.fontWeight);
  const lineHeightKeys = Object.keys(tokens.typography.lineHeight);
  const spacingKeys = Object.keys(tokens.spacing);
  const radiusKeys = Object.keys(tokens.radius).map(k => k === 'default' ? 'DEFAULT' : k);
  const shadowKeys = Object.keys(tokens.shadow);

  const lines = [HEADER_DTS, ''];

  // ColorScale
  lines.push('export interface ColorScale {');
  for (const shade of [...allShades].sort((a, b) => Number(a) - Number(b))) {
    const isOptional = partialScales.some(s => !s.shades.includes(shade));
    lines.push(`  ${shade}${isOptional ? '?' : ''}: string;`);
  }
  lines.push('}', '');

  // Colors
  lines.push('export interface Colors {');
  for (const scale of fullScales) {
    lines.push(`  ${scale}: Required<ColorScale>;`);
  }
  for (const { name, shades } of partialScales) {
    lines.push(`  ${name}: Pick<ColorScale, ${shades.map(s => `'${s}'`).join(' | ')}>;`);
  }
  lines.push('}', '');

  // SemanticColors
  lines.push('export interface SemanticColors {');
  for (const key of semanticKeys) {
    lines.push(`  ${key}: string;`);
  }
  lines.push('}', '');

  // Semantic
  lines.push('export interface Semantic {');
  lines.push('  light: SemanticColors;');
  lines.push('  dark: SemanticColors;');
  lines.push('}', '');

  // Typography
  lines.push('export interface Typography {');
  lines.push('  fontFamily: {');
  lines.push('    sans: string;');
  lines.push('    mono: string;');
  lines.push('  };');
  lines.push('  fontSize: {');
  for (const key of fontSizeKeys) {
    lines.push(`    '${key}': string;`);
  }
  lines.push('  };');
  lines.push('  fontWeight: {');
  for (const key of fontWeightKeys) {
    lines.push(`    ${key}: string;`);
  }
  lines.push('  };');
  lines.push('  lineHeight: {');
  for (const key of lineHeightKeys) {
    lines.push(`    ${key}: string;`);
  }
  lines.push('  };');
  lines.push('}', '');

  // Spacing
  lines.push('export interface Spacing {');
  for (const key of spacingKeys) {
    lines.push(`  ${key}: string;`);
  }
  lines.push('}', '');

  // Radius
  lines.push('export interface Radius {');
  for (const key of radiusKeys) {
    lines.push(`  ${key}: string;`);
  }
  lines.push('}', '');

  // Shadow
  lines.push('export interface Shadow {');
  for (const key of shadowKeys) {
    lines.push(`  ${key}: string;`);
  }
  lines.push('}', '');

  // Exports
  lines.push('export declare const colors: Colors;');
  lines.push('export declare const semantic: Semantic;');
  lines.push('export declare const typography: Typography;');
  lines.push('export declare const spacing: Spacing;');
  lines.push('export declare const radius: Radius;');
  lines.push('export declare const shadow: Shadow;');
  lines.push('');
  lines.push('declare const tokens: {');
  lines.push('  colors: Colors;');
  lines.push('  semantic: Semantic;');
  lines.push('  typography: Typography;');
  lines.push('  spacing: Spacing;');
  lines.push('  radius: Radius;');
  lines.push('  shadow: Shadow;');
  lines.push('};');
  lines.push('');
  lines.push('export default tokens;');
  lines.push('');

  return lines.join('\n');
}

// ─── Write files ──────────────────────────────────────────

const outDir = __dirname;

fs.writeFileSync(path.join(outDir, 'css', 'variables.css'), buildCSS());
fs.writeFileSync(path.join(outDir, 'js', 'index.js'), buildCJS());
fs.writeFileSync(path.join(outDir, 'js', 'index.mjs'), buildESM());
fs.writeFileSync(path.join(outDir, 'js', 'index.d.ts'), buildDTS());

console.log('Built:');
console.log('  css/variables.css');
console.log('  js/index.js');
console.log('  js/index.mjs');
console.log('  js/index.d.ts');

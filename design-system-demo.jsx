import React, { useState } from 'react';

/*
 * WARMHUB DESIGN SYSTEM - Interactive Demo
 *
 * This demonstrates the design system across all use cases:
 * - Marketing components
 * - Documentation elements
 * - Dashboard interfaces
 * - Data tables
 *
 * Philosophy: 70% technical precision / 30% human warmth
 */

// === COLOR PALETTE DATA ===
const colors = {
  stone: [
    { name: '50', hex: '#FAFAF8', usage: 'Background light' },
    { name: '100', hex: '#F5F5F3', usage: 'Surface light' },
    { name: '200', hex: '#E8E8E4', usage: 'Border light' },
    { name: '300', hex: '#D4D4CF', usage: 'Border medium' },
    { name: '400', hex: '#A3A39C', usage: 'Muted text' },
    { name: '500', hex: '#737369', usage: 'Secondary text' },
    { name: '600', hex: '#545449', usage: 'Primary text' },
    { name: '700', hex: '#3D3D35', usage: 'Headings' },
    { name: '800', hex: '#282822', usage: 'Surface dark' },
    { name: '900', hex: '#1C1C18', usage: 'Background dark' },
  ],
  sage: [
    { name: '50', hex: '#F6F7F6' },
    { name: '100', hex: '#E3E7E3' },
    { name: '200', hex: '#C7D0C7' },
    { name: '300', hex: '#A3B2A3' },
    { name: '400', hex: '#7D917D' },
    { name: '500', hex: '#5F7A5F', usage: 'Primary' },
    { name: '600', hex: '#4A614A', usage: 'Hover' },
    { name: '700', hex: '#3D4F3D', usage: 'Pressed' },
    { name: '800', hex: '#334033' },
    { name: '900', hex: '#2B352B' },
  ],
  terracotta: [
    { name: '50', hex: '#FBF7F5' },
    { name: '100', hex: '#F7EDE8' },
    { name: '200', hex: '#EFDBD1' },
    { name: '300', hex: '#E4C2B1' },
    { name: '400', hex: '#D4A088' },
    { name: '500', hex: '#C4826A', usage: 'Accent' },
    { name: '600', hex: '#B26B52', usage: 'Hover' },
    { name: '700', hex: '#945545' },
    { name: '800', hex: '#7A483C' },
    { name: '900', hex: '#663E35' },
  ],
};

const semanticColors = [
  { name: 'Success', hex: '#4A8F58', light: '#E4F0E6' },
  { name: 'Warning', hex: '#D99B22', light: '#F9F1D1' },
  { name: 'Error', hex: '#E06555', light: '#FCE9E7' },
  { name: 'Info', hex: '#5981A6', light: '#EAEFF5' },
];

// === ICONS (Simple SVG components) ===
const Icons = {
  Sun: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Moon: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Code: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Zap: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Copy: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  Info: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Warning: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
};

// === MAIN COMPONENT ===
export default function DesignSystemDemo() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('colors');

  const tabs = [
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'forms', label: 'Forms' },
    { id: 'cards', label: 'Cards' },
    { id: 'tables', label: 'Tables' },
    { id: 'alerts', label: 'Alerts' },
    { id: 'marketing', label: 'Marketing' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-[#1C1C18] text-[#F5F5F3]' : 'bg-[#FAFAF8] text-[#3D3D35]'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-sm ${darkMode ? 'bg-[#1C1C18]/90 border-[#282822]' : 'bg-[#FAFAF8]/90 border-[#E8E8E4]'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5F7A5F] to-[#C4826A] flex items-center justify-center">
              <span className="text-white font-semibold text-sm">W</span>
            </div>
            <span className="font-semibold text-lg">WarmHub Design System</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-[#282822]' : 'hover:bg-[#E8E8E4]'}`}
          >
            {darkMode ? <Icons.Sun /> : <Icons.Moon />}
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className={`border-b ${darkMode ? 'border-[#282822]' : 'border-[#E8E8E4]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#5F7A5F] text-white'
                    : darkMode
                      ? 'text-[#A3A39C] hover:text-[#F5F5F3] hover:bg-[#282822]'
                      : 'text-[#737369] hover:text-[#3D3D35] hover:bg-[#E8E8E4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Colors Section */}
        {activeTab === 'colors' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Color Palette</h2>
              <p className={`mb-8 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                Mixed earthy tones: stone neutrals, sage primary, terracotta accent.
              </p>

              {/* Stone */}
              <div className="mb-10">
                <h3 className="text-lg font-medium mb-4">Stone (Neutrals)</h3>
                <div className="grid grid-cols-5 lg:grid-cols-10 gap-2">
                  {colors.stone.map(color => (
                    <div key={color.name} className="text-center">
                      <div
                        className="h-16 rounded-lg mb-2 border border-black/5"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-xs font-medium">{color.name}</div>
                      <div className={`text-xs ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sage */}
              <div className="mb-10">
                <h3 className="text-lg font-medium mb-4">Sage (Primary)</h3>
                <div className="grid grid-cols-5 lg:grid-cols-10 gap-2">
                  {colors.sage.map(color => (
                    <div key={color.name} className="text-center">
                      <div
                        className="h-16 rounded-lg mb-2 border border-black/5"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-xs font-medium">{color.name}</div>
                      <div className={`text-xs ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terracotta */}
              <div className="mb-10">
                <h3 className="text-lg font-medium mb-4">Terracotta (Accent)</h3>
                <div className="grid grid-cols-5 lg:grid-cols-10 gap-2">
                  {colors.terracotta.map(color => (
                    <div key={color.name} className="text-center">
                      <div
                        className="h-16 rounded-lg mb-2 border border-black/5"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-xs font-medium">{color.name}</div>
                      <div className={`text-xs ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semantic */}
              <div>
                <h3 className="text-lg font-medium mb-4">Semantic Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {semanticColors.map(color => (
                    <div key={color.name} className={`p-4 rounded-xl ${darkMode ? 'bg-[#282822]' : 'bg-white'} border ${darkMode ? 'border-[#3D3D35]' : 'border-[#E8E8E4]'}`}>
                      <div className="flex gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: color.hex }} />
                        <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: color.light }} />
                      </div>
                      <div className="font-medium">{color.name}</div>
                      <div className={`text-xs ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Typography Section */}
        {activeTab === 'typography' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Typography</h2>
              <p className={`mb-8 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                Inter font family with a 1.25 ratio type scale. Clean and technical, yet approachable.
              </p>

              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-[#282822]' : 'bg-white'} border ${darkMode ? 'border-[#3D3D35]' : 'border-[#E8E8E4]'}`}>
                <div className="space-y-6">
                  <div className="border-b pb-4 border-current/10">
                    <span className={`text-xs uppercase tracking-wide ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>6xl / 60px</span>
                    <p className="text-6xl font-semibold tracking-tight mt-1">Display</p>
                  </div>
                  <div className="border-b pb-4 border-current/10">
                    <span className={`text-xs uppercase tracking-wide ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>5xl / 48px</span>
                    <p className="text-5xl font-semibold tracking-tight mt-1">Heading 1</p>
                  </div>
                  <div className="border-b pb-4 border-current/10">
                    <span className={`text-xs uppercase tracking-wide ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>4xl / 36px</span>
                    <p className="text-4xl font-semibold tracking-tight mt-1">Heading 2</p>
                  </div>
                  <div className="border-b pb-4 border-current/10">
                    <span className={`text-xs uppercase tracking-wide ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>3xl / 30px</span>
                    <p className="text-3xl font-semibold mt-1">Heading 3</p>
                  </div>
                  <div className="border-b pb-4 border-current/10">
                    <span className={`text-xs uppercase tracking-wide ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>2xl / 24px</span>
                    <p className="text-2xl font-medium mt-1">Heading 4</p>
                  </div>
                  <div className="border-b pb-4 border-current/10">
                    <span className={`text-xs uppercase tracking-wide ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>xl / 20px</span>
                    <p className="text-xl font-medium mt-1">Large text for introductions</p>
                  </div>
                  <div className="border-b pb-4 border-current/10">
                    <span className={`text-xs uppercase tracking-wide ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>base / 16px</span>
                    <p className="text-base mt-1">Body text for general content. This is the default size for paragraphs, descriptions, and most interface text.</p>
                  </div>
                  <div className="border-b pb-4 border-current/10">
                    <span className={`text-xs uppercase tracking-wide ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>sm / 14px</span>
                    <p className="text-sm mt-1">Small text for captions, labels, and secondary information.</p>
                  </div>
                  <div>
                    <span className={`text-xs uppercase tracking-wide ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>xs / 12px</span>
                    <p className="text-xs mt-1">Extra small text for metadata, timestamps, and fine print.</p>
                  </div>
                </div>
              </div>

              {/* Monospace */}
              <div className={`mt-8 p-8 rounded-2xl ${darkMode ? 'bg-[#282822]' : 'bg-white'} border ${darkMode ? 'border-[#3D3D35]' : 'border-[#E8E8E4]'}`}>
                <h3 className="text-lg font-medium mb-4">Monospace (Code)</h3>
                <code className={`block p-4 rounded-lg text-sm ${darkMode ? 'bg-[#1C1C18]' : 'bg-[#F5F5F3]'}`} style={{ fontFamily: 'JetBrains Mono, Fira Code, monospace' }}>
                  const warmHub = &#123; precision: 0.7, warmth: 0.3 &#125;;
                </code>
              </div>
            </section>
          </div>
        )}

        {/* Buttons Section */}
        {activeTab === 'buttons' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
              <p className={`mb-8 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                Multiple variants for different contexts and emphasis levels.
              </p>

              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-[#282822]' : 'bg-white'} border ${darkMode ? 'border-[#3D3D35]' : 'border-[#E8E8E4]'}`}>
                {/* Primary Buttons */}
                <div className="mb-8">
                  <h3 className={`text-sm font-medium mb-4 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>Primary</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-2.5 bg-[#5F7A5F] hover:bg-[#4A614A] text-white font-medium rounded-lg transition-colors">
                      Primary Button
                    </button>
                    <button className="px-6 py-2.5 bg-[#5F7A5F] hover:bg-[#4A614A] text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                      With Icon <Icons.Arrow />
                    </button>
                    <button className="px-6 py-2.5 bg-[#5F7A5F]/50 text-white/70 font-medium rounded-lg cursor-not-allowed">
                      Disabled
                    </button>
                  </div>
                </div>

                {/* Secondary Buttons */}
                <div className="mb-8">
                  <h3 className={`text-sm font-medium mb-4 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>Secondary</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className={`px-6 py-2.5 font-medium rounded-lg transition-colors border ${darkMode ? 'border-[#3D3D35] hover:bg-[#3D3D35]' : 'border-[#E8E8E4] hover:bg-[#E8E8E4]'}`}>
                      Secondary
                    </button>
                    <button className={`px-6 py-2.5 font-medium rounded-lg transition-colors ${darkMode ? 'bg-[#3D3D35] hover:bg-[#545449]' : 'bg-[#E8E8E4] hover:bg-[#D4D4CF]'}`}>
                      Subtle
                    </button>
                  </div>
                </div>

                {/* Accent Buttons */}
                <div className="mb-8">
                  <h3 className={`text-sm font-medium mb-4 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>Accent</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-2.5 bg-[#C4826A] hover:bg-[#B26B52] text-white font-medium rounded-lg transition-colors">
                      Accent Button
                    </button>
                    <button className="px-6 py-2.5 bg-transparent border-2 border-[#C4826A] text-[#C4826A] hover:bg-[#C4826A] hover:text-white font-medium rounded-lg transition-colors">
                      Outline Accent
                    </button>
                  </div>
                </div>

                {/* Ghost & Link */}
                <div className="mb-8">
                  <h3 className={`text-sm font-medium mb-4 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>Ghost & Link</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className={`px-6 py-2.5 font-medium rounded-lg transition-colors ${darkMode ? 'hover:bg-[#282822]' : 'hover:bg-[#F5F5F3]'}`}>
                      Ghost Button
                    </button>
                    <button className="px-2 py-2.5 text-[#5F7A5F] hover:underline font-medium transition-colors">
                      Link Button
                    </button>
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-8">
                  <h3 className={`text-sm font-medium mb-4 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <button className="px-3 py-1.5 bg-[#5F7A5F] hover:bg-[#4A614A] text-white text-xs font-medium rounded-md transition-colors">
                      Small
                    </button>
                    <button className="px-5 py-2 bg-[#5F7A5F] hover:bg-[#4A614A] text-white text-sm font-medium rounded-lg transition-colors">
                      Medium
                    </button>
                    <button className="px-6 py-2.5 bg-[#5F7A5F] hover:bg-[#4A614A] text-white font-medium rounded-lg transition-colors">
                      Default
                    </button>
                    <button className="px-8 py-3 bg-[#5F7A5F] hover:bg-[#4A614A] text-white text-lg font-medium rounded-xl transition-colors">
                      Large
                    </button>
                  </div>
                </div>

                {/* Destructive */}
                <div>
                  <h3 className={`text-sm font-medium mb-4 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>Destructive</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-2.5 bg-[#E06555] hover:bg-[#CB4638] text-white font-medium rounded-lg transition-colors">
                      Delete
                    </button>
                    <button className="px-6 py-2.5 bg-transparent border border-[#E06555] text-[#E06555] hover:bg-[#E06555] hover:text-white font-medium rounded-lg transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Forms Section */}
        {activeTab === 'forms' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Form Elements</h2>
              <p className={`mb-8 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                Clean, accessible form components with clear states.
              </p>

              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-[#282822]' : 'bg-white'} border ${darkMode ? 'border-[#3D3D35]' : 'border-[#E8E8E4]'}`}>
                <div className="max-w-md space-y-6">
                  {/* Text Input */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#5F7A5F]/30 focus:border-[#5F7A5F] ${
                        darkMode
                          ? 'bg-[#1C1C18] border-[#3D3D35] placeholder-[#545449]'
                          : 'bg-white border-[#E8E8E4] placeholder-[#A3A39C]'
                      }`}
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#5F7A5F]/30 focus:border-[#5F7A5F] ${
                        darkMode
                          ? 'bg-[#1C1C18] border-[#3D3D35] placeholder-[#545449]'
                          : 'bg-white border-[#E8E8E4] placeholder-[#A3A39C]'
                      }`}
                    />
                    <p className={`mt-1.5 text-xs ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>Must be at least 8 characters.</p>
                  </div>

                  {/* Error State */}
                  <div>
                    <label className="block text-sm font-medium mb-2">API Key</label>
                    <input
                      type="text"
                      defaultValue="invalid-key"
                      className={`w-full px-4 py-2.5 rounded-lg border border-[#E06555] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E06555]/30 ${
                        darkMode ? 'bg-[#1C1C18]' : 'bg-white'
                      }`}
                    />
                    <p className="mt-1.5 text-xs text-[#E06555]">Invalid API key format.</p>
                  </div>

                  {/* Select */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Region</label>
                    <select className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#5F7A5F]/30 focus:border-[#5F7A5F] ${
                      darkMode
                        ? 'bg-[#1C1C18] border-[#3D3D35]'
                        : 'bg-white border-[#E8E8E4]'
                    }`}>
                      <option>Select a region...</option>
                      <option>US East</option>
                      <option>US West</option>
                      <option>Europe</option>
                      <option>Asia Pacific</option>
                    </select>
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      rows={3}
                      placeholder="Add a description..."
                      className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#5F7A5F]/30 focus:border-[#5F7A5F] resize-none ${
                        darkMode
                          ? 'bg-[#1C1C18] border-[#3D3D35] placeholder-[#545449]'
                          : 'bg-white border-[#E8E8E4] placeholder-[#A3A39C]'
                      }`}
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-0.5 w-4 h-4 rounded border-[#5F7A5F] text-[#5F7A5F] focus:ring-[#5F7A5F]/30"
                    />
                    <label htmlFor="terms" className="text-sm">
                      I agree to the <a href="#" className="text-[#5F7A5F] hover:underline">Terms of Service</a> and <a href="#" className="text-[#5F7A5F] hover:underline">Privacy Policy</a>.
                    </label>
                  </div>

                  {/* Radio */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Plan</label>
                    <div className="space-y-2">
                      {['Free', 'Pro', 'Enterprise'].map((plan, i) => (
                        <label key={plan} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="plan"
                            defaultChecked={i === 1}
                            className="w-4 h-4 border-[#5F7A5F] text-[#5F7A5F] focus:ring-[#5F7A5F]/30"
                          />
                          <span className="text-sm">{plan}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button className="w-full px-6 py-2.5 bg-[#5F7A5F] hover:bg-[#4A614A] text-white font-medium rounded-lg transition-colors">
                    Create Account
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Cards Section */}
        {activeTab === 'cards' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Cards</h2>
              <p className={`mb-8 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                Versatile containers for dashboards, features, and content.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stat Card */}
                <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#282822] border-[#3D3D35]' : 'bg-white border-[#E8E8E4]'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>Total Revenue</span>
                    <Icons.Chart />
                  </div>
                  <div className="text-3xl font-semibold mb-1">$45,231.89</div>
                  <div className="text-sm text-[#4A8F58]">+20.1% from last month</div>
                </div>

                {/* Stat Card 2 */}
                <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#282822] border-[#3D3D35]' : 'bg-white border-[#E8E8E4]'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>Active Users</span>
                    <Icons.Users />
                  </div>
                  <div className="text-3xl font-semibold mb-1">2,350</div>
                  <div className="text-sm text-[#4A8F58]">+180 this week</div>
                </div>

                {/* Stat Card 3 */}
                <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#282822] border-[#3D3D35]' : 'bg-white border-[#E8E8E4]'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>API Calls</span>
                    <Icons.Zap />
                  </div>
                  <div className="text-3xl font-semibold mb-1">1.2M</div>
                  <div className="text-sm text-[#E06555]">-3.2% from yesterday</div>
                </div>

                {/* Feature Card */}
                <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#282822] border-[#3D3D35]' : 'bg-white border-[#E8E8E4]'}`}>
                  <div className="w-10 h-10 rounded-lg bg-[#5F7A5F]/10 flex items-center justify-center mb-4 text-[#5F7A5F]">
                    <Icons.Code />
                  </div>
                  <h3 className="font-semibold mb-2">Developer API</h3>
                  <p className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                    Integrate our powerful AI models directly into your applications with our RESTful API.
                  </p>
                </div>

                {/* Feature Card with accent */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#5F7A5F] to-[#4A614A] text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <Icons.Zap />
                  </div>
                  <h3 className="font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-sm text-white/80">
                    Sub-100ms response times with our globally distributed edge network.
                  </p>
                </div>

                {/* Interactive Card */}
                <div className={`p-6 rounded-xl border cursor-pointer transition-all hover:shadow-lg ${darkMode ? 'bg-[#282822] border-[#3D3D35] hover:border-[#5F7A5F]' : 'bg-white border-[#E8E8E4] hover:border-[#5F7A5F]'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">View Documentation</h3>
                      <p className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                        Get started with our guides
                      </p>
                    </div>
                    <Icons.Arrow />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tables Section */}
        {activeTab === 'tables' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Data Tables</h2>
              <p className={`mb-8 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                Clean, scannable tables for dashboards and admin interfaces.
              </p>

              <div className={`rounded-xl border overflow-hidden ${darkMode ? 'bg-[#282822] border-[#3D3D35]' : 'bg-white border-[#E8E8E4]'}`}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className={darkMode ? 'bg-[#1C1C18]' : 'bg-[#FAFAF8]'}>
                      <tr className={`border-b ${darkMode ? 'border-[#3D3D35]' : 'border-[#E8E8E4]'}`}>
                        <th className="text-left px-6 py-4 text-sm font-medium">Name</th>
                        <th className="text-left px-6 py-4 text-sm font-medium">Status</th>
                        <th className="text-left px-6 py-4 text-sm font-medium">Role</th>
                        <th className="text-right px-6 py-4 text-sm font-medium">Usage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Alice Chen', email: 'alice@warmhub.com', status: 'Active', role: 'Admin', usage: '1,234' },
                        { name: 'Bob Smith', email: 'bob@warmhub.com', status: 'Active', role: 'Developer', usage: '856' },
                        { name: 'Carol Davis', email: 'carol@warmhub.com', status: 'Pending', role: 'Viewer', usage: '0' },
                        { name: 'David Lee', email: 'david@warmhub.com', status: 'Active', role: 'Developer', usage: '2,341' },
                        { name: 'Eva Martinez', email: 'eva@warmhub.com', status: 'Inactive', role: 'Developer', usage: '189' },
                      ].map((user, i) => (
                        <tr key={i} className={`border-b last:border-0 transition-colors ${darkMode ? 'border-[#3D3D35] hover:bg-[#1C1C18]' : 'border-[#E8E8E4] hover:bg-[#FAFAF8]'}`}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5F7A5F] to-[#C4826A] flex items-center justify-center text-white text-sm font-medium">
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className={`text-sm ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                              user.status === 'Active'
                                ? 'bg-[#E4F0E6] text-[#387344]'
                                : user.status === 'Pending'
                                  ? 'bg-[#F9F1D1] text-[#9F5718]'
                                  : 'bg-[#E8E8E4] text-[#545449]'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className={`px-6 py-4 text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                            {user.role}
                          </td>
                          <td className="px-6 py-4 text-right font-mono text-sm">
                            {user.usage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className={`flex items-center justify-between px-6 py-4 border-t ${darkMode ? 'border-[#3D3D35]' : 'border-[#E8E8E4]'}`}>
                  <span className={`text-sm ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>Showing 1-5 of 24</span>
                  <div className="flex gap-2">
                    <button className={`px-3 py-1.5 text-sm rounded-md border ${darkMode ? 'border-[#3D3D35] hover:bg-[#3D3D35]' : 'border-[#E8E8E4] hover:bg-[#E8E8E4]'} transition-colors`}>
                      Previous
                    </button>
                    <button className={`px-3 py-1.5 text-sm rounded-md border ${darkMode ? 'border-[#3D3D35] hover:bg-[#3D3D35]' : 'border-[#E8E8E4] hover:bg-[#E8E8E4]'} transition-colors`}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Alerts Section */}
        {activeTab === 'alerts' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Alerts & Callouts</h2>
              <p className={`mb-8 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                Semantic feedback components for documentation and interfaces.
              </p>

              <div className="space-y-4 max-w-2xl">
                {/* Info */}
                <div className={`flex gap-4 p-4 rounded-lg border ${darkMode ? 'bg-[#1F2935]/50 border-[#5981A6]/30' : 'bg-[#EAEFF5] border-[#5981A6]/30'}`}>
                  <div className="text-[#5981A6] mt-0.5"><Icons.Info /></div>
                  <div>
                    <div className="font-medium text-[#5981A6] mb-1">Note</div>
                    <p className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                      This feature requires API version 2.0 or higher. Check your dashboard for upgrade options.
                    </p>
                  </div>
                </div>

                {/* Success */}
                <div className={`flex gap-4 p-4 rounded-lg border ${darkMode ? 'bg-[#0F2114]/50 border-[#4A8F58]/30' : 'bg-[#E4F0E6] border-[#4A8F58]/30'}`}>
                  <div className="text-[#4A8F58] mt-0.5"><Icons.Check /></div>
                  <div>
                    <div className="font-medium text-[#4A8F58] mb-1">Success</div>
                    <p className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                      Your changes have been saved successfully. The new configuration is now active.
                    </p>
                  </div>
                </div>

                {/* Warning */}
                <div className={`flex gap-4 p-4 rounded-lg border ${darkMode ? 'bg-[#3E1D0A]/50 border-[#D99B22]/30' : 'bg-[#F9F1D1] border-[#D99B22]/30'}`}>
                  <div className="text-[#D99B22] mt-0.5"><Icons.Warning /></div>
                  <div>
                    <div className="font-medium text-[#D99B22] mb-1">Warning</div>
                    <p className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                      You're approaching your API rate limit. Consider upgrading your plan for higher limits.
                    </p>
                  </div>
                </div>

                {/* Error */}
                <div className={`flex gap-4 p-4 rounded-lg border ${darkMode ? 'bg-[#3F1410]/50 border-[#E06555]/30' : 'bg-[#FCE9E7] border-[#E06555]/30'}`}>
                  <div className="text-[#E06555] mt-0.5"><Icons.Warning /></div>
                  <div>
                    <div className="font-medium text-[#E06555] mb-1">Error</div>
                    <p className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                      Authentication failed. Please check your API key and try again.
                    </p>
                  </div>
                </div>

                {/* Code Block */}
                <div className={`rounded-lg overflow-hidden border ${darkMode ? 'border-[#3D3D35]' : 'border-[#E8E8E4]'}`}>
                  <div className={`flex items-center justify-between px-4 py-2 border-b ${darkMode ? 'bg-[#1C1C18] border-[#3D3D35]' : 'bg-[#F5F5F3] border-[#E8E8E4]'}`}>
                    <span className={`text-xs font-medium ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>JavaScript</span>
                    <button className={`p-1 rounded hover:${darkMode ? 'bg-[#282822]' : 'bg-[#E8E8E4]'} transition-colors`}>
                      <Icons.Copy />
                    </button>
                  </div>
                  <pre className={`p-4 text-sm overflow-x-auto ${darkMode ? 'bg-[#282822]' : 'bg-white'}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    <code>{`const warmhub = new WarmHub({
  apiKey: process.env.WARMHUB_API_KEY,
  region: 'us-east-1'
});

const response = await warmhub.chat.create({
  model: 'warmhub-3',
  messages: [{ role: 'user', content: 'Hello!' }]
});`}</code>
                  </pre>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Marketing Section */}
        {activeTab === 'marketing' && (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-2">Marketing Components</h2>
              <p className={`mb-8 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                Hero sections, CTAs, and feature blocks for landing pages.
              </p>

              {/* Hero Section */}
              <div className={`rounded-2xl p-12 mb-8 text-center ${darkMode ? 'bg-[#282822]' : 'bg-white'} border ${darkMode ? 'border-[#3D3D35]' : 'border-[#E8E8E4]'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5F7A5F]/10 text-[#5F7A5F] text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#5F7A5F] animate-pulse" />
                  Now in Beta
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                  Build AI products with<br />
                  <span className="bg-gradient-to-r from-[#5F7A5F] to-[#C4826A] bg-clip-text text-transparent">
                    precision and warmth
                  </span>
                </h1>
                <p className={`text-lg max-w-xl mx-auto mb-8 ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>
                  The AI platform that combines technical excellence with human-centered design. Ship faster, scale confidently.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-6 py-3 bg-[#5F7A5F] hover:bg-[#4A614A] text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                    Get Started Free <Icons.Arrow />
                  </button>
                  <button className={`px-6 py-3 font-medium rounded-lg transition-colors border ${darkMode ? 'border-[#3D3D35] hover:bg-[#3D3D35]' : 'border-[#E8E8E4] hover:bg-[#E8E8E4]'}`}>
                    View Documentation
                  </button>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <Icons.Zap />, title: 'Lightning Fast', desc: 'Sub-100ms latency with our edge-distributed infrastructure.' },
                  { icon: <Icons.Users />, title: 'Team Ready', desc: 'Built-in collaboration with role-based access control.' },
                  { icon: <Icons.Code />, title: 'Developer First', desc: 'Clean APIs, comprehensive SDKs, and detailed documentation.' },
                ].map((feature, i) => (
                  <div key={i} className={`p-6 rounded-xl border ${darkMode ? 'bg-[#282822] border-[#3D3D35]' : 'bg-white border-[#E8E8E4]'}`}>
                    <div className="w-10 h-10 rounded-lg bg-[#5F7A5F]/10 flex items-center justify-center mb-4 text-[#5F7A5F]">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className={`text-sm ${darkMode ? 'text-[#A3A39C]' : 'text-[#737369]'}`}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t mt-12 ${darkMode ? 'border-[#282822]' : 'border-[#E8E8E4]'}`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className={`text-sm text-center ${darkMode ? 'text-[#737369]' : 'text-[#A3A39C]'}`}>
            WarmHub Design System • 70% Technical Precision / 30% Human Warmth
          </p>
        </div>
      </footer>
    </div>
  );
}

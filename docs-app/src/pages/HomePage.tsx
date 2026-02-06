import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Palette,
  Type,
  Square,
  MousePointer2,
  Sparkles,
  LayoutDashboard,
  ArrowRight,
  Zap,
  Heart,
  Shield,
  Copy,
  Check,
} from 'lucide-react'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0 text-slate-400 hover:text-white hover:bg-slate-700" onClick={handleCopy}>
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </Button>
  )
}

function CodeLine({ label, code }: { label: string; code: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-slate-900 dark:bg-slate-950 px-4 py-2.5">
      <span className="shrink-0 text-xs font-medium text-slate-400 w-10">{label}</span>
      <code className="flex-1 text-sm text-slate-100 truncate">{code}</code>
      <CopyButton text={code} />
    </div>
  )
}

const quickLinks = [
  {
    title: 'Colors',
    description: 'Explore the color palette with sky blue primary and teal accent.',
    href: '/foundations/colors',
    icon: Palette,
  },
  {
    title: 'Typography',
    description: 'Manrope font with a 1.25 ratio type scale.',
    href: '/foundations/typography',
    icon: Type,
  },
  {
    title: 'Spacing',
    description: '8px base grid with extended spacing tokens.',
    href: '/foundations/spacing',
    icon: Square,
  },
  {
    title: 'Components',
    description: 'ShadCN UI components styled for WarmHub.',
    href: '/components/button',
    icon: MousePointer2,
  },
  {
    title: 'Marketing',
    description: 'Hero sections, feature blocks, and more.',
    href: '/marketing/hero',
    icon: Sparkles,
  },
  {
    title: 'Templates',
    description: 'Full-page layouts ready to use.',
    href: '/templates/dashboard',
    icon: LayoutDashboard,
  },
]

const principles = [
  {
    icon: Zap,
    title: 'Technical Precision',
    description: '70% of the design philosophy focuses on clean, scannable interfaces for developers.',
  },
  {
    icon: Heart,
    title: 'Human Warmth',
    description: '30% brings approachability and comfort through subtle color choices and softer corners.',
  },
  {
    icon: Shield,
    title: 'Accessibility First',
    description: 'WCAG compliant color contrast, focus states, and reduced motion support built-in.',
  },
]

export function HomePage() {
  return (
    <div>
      {/* Hero - full width, flush with header */}
      <section className="relative max-w-none w-[calc(100vw-16rem)] ml-[calc(50%-50vw+8rem)] -mt-6 lg:-mt-8 mb-16 px-8 py-20 text-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(65,119,166,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(20,184,166,0.1),transparent)]" />
        <div className="relative max-w-5xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Version 2.0
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            WarmHub Design System
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-300">
            A comprehensive design system for AI products that blends{' '}
            <span className="font-medium text-white">technical precision</span> with{' '}
            <span className="font-medium text-white">human warmth</span>. Built on ShadCN UI
            with Tailwind CSS v4.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild>
              <Link to="/foundations/colors">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/components/button">Browse Components</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="space-y-16">

      {/* Color preview */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Color Palette</h2>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-white">
            <span className="text-sm font-medium">Sky Blue</span>
            <span className="text-xs opacity-80">#4177a6</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-white">
            <span className="text-sm font-medium">Warm Teal</span>
            <span className="text-xs opacity-80">#14B8A6</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white">
            <span className="text-sm font-medium">Slate</span>
            <span className="text-xs opacity-80">#334155</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-success-500 px-4 py-2 text-white">
            <span className="text-sm font-medium">Success</span>
            <span className="text-xs opacity-80">#10B981</span>
          </div>
        </div>
      </section>

      {/* Design principles */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Design Philosophy</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/50"
            >
              <principle.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Explore</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <link.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium group-hover:text-primary">{link.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Usage sections */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Usage Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <Badge className="mb-4 bg-sky-500/10 text-sky-600 hover:bg-sky-500/20">App Usage</Badge>
            <h3 className="text-lg font-semibold">Application Interfaces</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              For dashboards, admin panels, and data-heavy interfaces. Focus on clarity,
              scannable layouts, and efficient information density.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Data tables with pagination
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Form-heavy settings pages
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Stat cards and metrics
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <Badge className="mb-4 bg-teal-500/10 text-teal-600 hover:bg-teal-500/20">Marketing Usage</Badge>
            <h3 className="text-lg font-semibold">Marketing Pages</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              For landing pages, feature showcases, and conversion-focused content.
              Emphasize visual impact and clear calls-to-action.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Hero sections with CTAs
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Feature highlight blocks
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Testimonials and social proof
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Use the Tokens */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Use the Tokens</h2>
        <p className="text-sm text-muted-foreground">
          Install the <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">warmhub-tokens</code> package to use these design tokens in your own project.
        </p>

        <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border">
          {/* Install */}
          <div className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
              <h3 className="text-sm font-semibold">Install</h3>
            </div>
            <CodeLine label="" code="npm install github:warmautomation/ui-design-system#main" />
          </div>

          {/* Import */}
          <div className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
              <h3 className="text-sm font-semibold">Import</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <CodeLine label="CSS" code="@import 'warmhub-tokens/css';" />
              <CodeLine label="JS" code="import { colors } from 'warmhub-tokens';" />
            </div>
          </div>

          {/* Stay Updated */}
          <div className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
              <h3 className="text-sm font-semibold">Stay Updated</h3>
              <span className="text-xs text-muted-foreground">— CSS variables, JS exports, and Tailwind presets all update together.</span>
            </div>
            <CodeLine label="" code="npm update warmhub-tokens" />
          </div>
        </div>

        {/* Available exports */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border px-6 py-3">
            <h3 className="text-sm font-semibold">Package Exports</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-6 py-3 font-medium text-muted-foreground">Import</th>
                  <th className="px-6 py-3 font-medium text-muted-foreground">Format</th>
                  <th className="px-6 py-3 font-medium text-muted-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-6 py-3"><code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">warmhub-tokens</code></td>
                  <td className="px-6 py-3 text-muted-foreground">JS / TS</td>
                  <td className="px-6 py-3 text-muted-foreground">Colors, semantic, typography, spacing, radius, shadow</td>
                </tr>
                <tr>
                  <td className="px-6 py-3"><code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">warmhub-tokens/css</code></td>
                  <td className="px-6 py-3 text-muted-foreground">CSS</td>
                  <td className="px-6 py-3 text-muted-foreground">Full bundle with Google Fonts + CSS variables</td>
                </tr>
                <tr>
                  <td className="px-6 py-3"><code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">warmhub-tokens/css/variables</code></td>
                  <td className="px-6 py-3 text-muted-foreground">CSS</td>
                  <td className="px-6 py-3 text-muted-foreground">CSS variables only (no fonts)</td>
                </tr>
                <tr>
                  <td className="px-6 py-3"><code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">warmhub-tokens/tailwind</code></td>
                  <td className="px-6 py-3 text-muted-foreground">JS</td>
                  <td className="px-6 py-3 text-muted-foreground">Tailwind CSS v4 preset</td>
                </tr>
                <tr>
                  <td className="px-6 py-3"><code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">warmhub-tokens/json</code></td>
                  <td className="px-6 py-3 text-muted-foreground">JSON</td>
                  <td className="px-6 py-3 text-muted-foreground">Raw tokens in W3C Design Tokens format</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Updating Tokens Workflow */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Updating Tokens</h2>
        <p className="text-sm text-muted-foreground">
          All tokens are managed from a single source of truth. Here's the workflow for making changes:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: '1',
              title: 'Edit tokens.json',
              description: 'Change any value in packages/tokens/tokens.json — colors, typography, spacing, or semantic tokens.',
            },
            {
              step: '2',
              title: 'Build',
              description: 'Run npm run build:tokens to regenerate all output files (CSS, JS, TypeScript).',
              code: 'npm run build:tokens',
            },
            {
              step: '3',
              title: 'Verify',
              description: 'All output files regenerate automatically. The docs-app picks up changes immediately in dev mode.',
            },
            {
              step: '4',
              title: 'Push to main',
              description: 'Other teams get the updated tokens on their next npm install. No manual sync needed.',
            },
          ].map((item) => (
            <div key={item.step} className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              {item.code && (
                <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-3 text-sm text-slate-100 dark:bg-slate-950">
                  <code>{item.code}</code>
                </pre>
              )}
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  )
}

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
} from 'lucide-react'

const quickLinks = [
  {
    title: 'Colors',
    description: 'Explore the color palette with sky blue primary and coral accent.',
    href: '/foundations/colors',
    icon: Palette,
  },
  {
    title: 'Typography',
    description: 'Plus Jakarta Sans font with a 1.25 ratio type scale.',
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
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-6">
        <Badge variant="secondary" className="mb-4">
          Version 2.0
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          WarmHub Design System
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A comprehensive design system for AI products that blends{' '}
          <span className="font-medium text-foreground">technical precision</span> with{' '}
          <span className="font-medium text-foreground">human warmth</span>. Built on ShadCN UI
          with Tailwind CSS v4.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link to="/foundations/colors">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/components/button">Browse Components</Link>
          </Button>
        </div>
      </section>

      {/* Color preview */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Color Palette</h2>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-white">
            <span className="text-sm font-medium">Sky Blue</span>
            <span className="text-xs opacity-80">#4177a6</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-coral-500 px-4 py-2 text-white">
            <span className="text-sm font-medium">Coral</span>
            <span className="text-xs opacity-80">#E8636C</span>
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
            <Badge className="mb-4 bg-coral-500/10 text-coral-600 hover:bg-coral-500/20">Marketing Usage</Badge>
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
    </div>
  )
}

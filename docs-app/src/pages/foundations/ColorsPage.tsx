import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'

interface ColorSwatch {
  name: string
  value: string
  className: string
  textClass?: string
}

interface ColorGroup {
  name: string
  description: string
  colors: ColorSwatch[]
}

const colorGroups: ColorGroup[] = [
  {
    name: 'Slate Neutrals',
    description: 'Cool blue-gray undertones for backgrounds, text, and borders.',
    colors: [
      { name: '50', value: '#F8FAFB', className: 'bg-slate-50', textClass: 'text-slate-900' },
      { name: '100', value: '#F1F5F7', className: 'bg-slate-100', textClass: 'text-slate-900' },
      { name: '200', value: '#E2E8ED', className: 'bg-slate-200', textClass: 'text-slate-900' },
      { name: '300', value: '#CBD5DC', className: 'bg-slate-300', textClass: 'text-slate-900' },
      { name: '400', value: '#94A3B0', className: 'bg-slate-400', textClass: 'text-slate-900' },
      { name: '500', value: '#64748B', className: 'bg-slate-500', textClass: 'text-white' },
      { name: '600', value: '#475569', className: 'bg-slate-600', textClass: 'text-white' },
      { name: '700', value: '#334155', className: 'bg-slate-700', textClass: 'text-white' },
      { name: '800', value: '#1E293B', className: 'bg-slate-800', textClass: 'text-white' },
      { name: '900', value: '#0F172A', className: 'bg-slate-900', textClass: 'text-white' },
      { name: '950', value: '#020617', className: 'bg-slate-950', textClass: 'text-white' },
    ],
  },
  {
    name: 'Sky Blue (Primary)',
    description: 'Muted cyan for primary actions and interactive elements.',
    colors: [
      { name: '50', value: '#f0f7fc', className: 'bg-sky-50', textClass: 'text-sky-900' },
      { name: '100', value: '#e1eff8', className: 'bg-sky-100', textClass: 'text-sky-900' },
      { name: '200', value: '#c3dfef', className: 'bg-sky-200', textClass: 'text-sky-900' },
      { name: '300', value: '#9ac8e3', className: 'bg-sky-300', textClass: 'text-sky-900' },
      { name: '400', value: '#6aadd4', className: 'bg-sky-400', textClass: 'text-sky-900' },
      { name: '500', value: '#4177a6', className: 'bg-sky-500', textClass: 'text-white' },
      { name: '600', value: '#416d93', className: 'bg-sky-600', textClass: 'text-white' },
      { name: '700', value: '#3d6a91', className: 'bg-sky-700', textClass: 'text-white' },
      { name: '800', value: '#39688a', className: 'bg-sky-800', textClass: 'text-white' },
      { name: '900', value: '#2c4d6c', className: 'bg-sky-900', textClass: 'text-white' },
      { name: '950', value: '#1c3448', className: 'bg-sky-950', textClass: 'text-white' },
    ],
  },
  {
    name: 'Coral (Accent)',
    description: 'Restrained warmth for highlights and accent elements.',
    colors: [
      { name: '50', value: '#FFF5F5', className: 'bg-coral-50', textClass: 'text-coral-900' },
      { name: '100', value: '#FEE8E7', className: 'bg-coral-100', textClass: 'text-coral-900' },
      { name: '200', value: '#FECDD3', className: 'bg-coral-200', textClass: 'text-coral-900' },
      { name: '300', value: '#FDA4AD', className: 'bg-coral-300', textClass: 'text-coral-900' },
      { name: '400', value: '#FB7185', className: 'bg-coral-400', textClass: 'text-coral-900' },
      { name: '500', value: '#E8636C', className: 'bg-coral-500', textClass: 'text-white' },
      { name: '600', value: '#D14D55', className: 'bg-coral-600', textClass: 'text-white' },
      { name: '700', value: '#B03A42', className: 'bg-coral-700', textClass: 'text-white' },
      { name: '800', value: '#923238', className: 'bg-coral-800', textClass: 'text-white' },
      { name: '900', value: '#7A2D32', className: 'bg-coral-900', textClass: 'text-white' },
      { name: '950', value: '#430A0F', className: 'bg-coral-950', textClass: 'text-white' },
    ],
  },
]

const semanticColors = [
  { name: 'Success', value: '#10B981', className: 'bg-success-500', usage: 'Positive actions, confirmations' },
  { name: 'Warning', value: '#F59E0B', className: 'bg-warning-500', usage: 'Caution, attention needed' },
  { name: 'Error', value: '#EF4444', className: 'bg-error-500', usage: 'Errors, destructive actions' },
  { name: 'Info', value: '#3B82F6', className: 'bg-info-500', usage: 'Informational, neutral alerts' },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleCopy}>
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
    </Button>
  )
}

export function ColorsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="secondary" className="mb-4">
          Foundations
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight">Colors</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          The WarmHub color system balances professional cool tones with subtle warmth.
        </p>
      </div>

      {/* Design tokens */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">CSS Variables</h2>
        <p className="text-muted-foreground">
          Colors are available as CSS custom properties and Tailwind classes.
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>--primary: #4177a6;</code>
          <br />
          <code>--accent: #E8636C;</code>
          <br />
          <code>className="bg-primary text-primary-foreground"</code>
        </div>
      </section>

      {/* Color palettes */}
      {colorGroups.map((group) => (
        <section key={group.name} className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{group.name}</h2>
            <p className="text-muted-foreground">{group.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {group.colors.map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className={`flex h-20 items-end rounded-lg p-2 ${color.className}`}
                >
                  <span className={`text-xs font-medium ${color.textClass}`}>
                    {color.name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {color.value}
                  </span>
                  <CopyButton text={color.value} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Semantic colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Semantic Colors</h2>
        <p className="text-muted-foreground">
          Purpose-driven colors for status and feedback.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {semanticColors.map((color) => (
            <div
              key={color.name}
              className="overflow-hidden rounded-lg border bg-card"
            >
              <div className={`h-16 ${color.className}`} />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{color.name}</span>
                  <CopyButton text={color.value} />
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {color.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage guidelines */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-success-500/30 bg-success-50 p-4 dark:bg-success-500/10">
            <h3 className="font-medium text-success-600">Do</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Use Sky Blue for primary actions</li>
              <li>Use Coral sparingly for accent highlights</li>
              <li>Maintain sufficient contrast ratios</li>
              <li>Use semantic colors for status indicators</li>
            </ul>
          </div>
          <div className="rounded-lg border border-error-500/30 bg-error-50 p-4 dark:bg-error-500/10">
            <h3 className="font-medium text-error-600">Don't</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Don't overuse accent colors</li>
              <li>Don't use red for non-error states</li>
              <li>Don't combine too many colors</li>
              <li>Don't ignore dark mode contrast</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

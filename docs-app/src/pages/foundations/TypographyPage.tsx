import { Badge } from '@/components/ui/badge'

const typeScale = [
  { name: 'xs', size: '0.75rem (12px)', lineHeight: '1rem', className: 'text-xs' },
  { name: 'sm', size: '0.875rem (14px)', lineHeight: '1.25rem', className: 'text-sm' },
  { name: 'base', size: '1rem (16px)', lineHeight: '1.625rem', className: 'text-base' },
  { name: 'lg', size: '1.125rem (18px)', lineHeight: '1.75rem', className: 'text-lg' },
  { name: 'xl', size: '1.25rem (20px)', lineHeight: '1.875rem', className: 'text-xl' },
  { name: '2xl', size: '1.5rem (24px)', lineHeight: '2rem', className: 'text-2xl' },
  { name: '3xl', size: '1.875rem (30px)', lineHeight: '2.375rem', className: 'text-3xl' },
  { name: '4xl', size: '2.25rem (36px)', lineHeight: '2.75rem', className: 'text-4xl' },
  { name: '5xl', size: '3rem (48px)', lineHeight: '3.5rem', className: 'text-5xl' },
  { name: '6xl', size: '3.75rem (60px)', lineHeight: '4.25rem', className: 'text-6xl' },
]

const fontWeights = [
  { name: 'Light', value: '300', className: 'font-light' },
  { name: 'Regular', value: '400', className: 'font-normal' },
  { name: 'Medium', value: '500', className: 'font-medium' },
  { name: 'Semibold', value: '600', className: 'font-semibold' },
  { name: 'Bold', value: '700', className: 'font-bold' },
]

export function TypographyPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="secondary" className="mb-4">
          Foundations
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Manrope provides a modern, readable foundation with a 1.25 ratio type scale.
        </p>
      </div>

      {/* Font family */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Font Family</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <p className="text-sm text-muted-foreground">Primary Font</p>
            <p className="mt-2 text-2xl font-semibold">Manrope</p>
            <p className="mt-4 text-muted-foreground">
              A geometric sans-serif with humanist touches. Clean and modern while
              remaining approachable.
            </p>
            <div className="mt-4 rounded bg-muted p-3 font-mono text-sm">
              font-family: 'Manrope', system-ui, sans-serif;
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <p className="text-sm text-muted-foreground">Monospace Font</p>
            <p className="mt-2 font-mono text-2xl font-semibold">Geist Mono</p>
            <p className="mt-4 text-muted-foreground">
              For code blocks, technical content, and data displays.
            </p>
            <div className="mt-4 rounded bg-muted p-3 font-mono text-sm">
              font-family: 'Geist Mono', 'JetBrains Mono', monospace;
            </div>
          </div>
        </div>
      </section>

      {/* Type scale */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Type Scale</h2>
        <p className="text-muted-foreground">
          Based on a 1.25 (Major Third) ratio for balanced progression.
        </p>
        <div className="space-y-4">
          {typeScale.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-2 rounded-lg border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-baseline gap-4">
                <code className="rounded bg-muted px-2 py-1 text-xs font-medium">
                  text-{item.name}
                </code>
                <span className={`${item.className} truncate`}>
                  The quick brown fox
                </span>
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{item.size}</span>
                <span className="hidden sm:inline">/ {item.lineHeight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font weights */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Font Weights</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {fontWeights.map((weight) => (
            <div key={weight.name} className="rounded-lg border bg-card p-4">
              <p className={`${weight.className} text-2xl`}>Aa</p>
              <p className="mt-2 text-sm font-medium">{weight.name}</p>
              <p className="text-xs text-muted-foreground">{weight.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Headings */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Headings</h2>
        <div className="space-y-6 rounded-lg border bg-card p-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              text-4xl font-bold tracking-tight
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              text-3xl font-semibold tracking-tight
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Heading 3</h3>
            <p className="mt-1 text-sm text-muted-foreground">text-2xl font-semibold</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Heading 4</h4>
            <p className="mt-1 text-sm text-muted-foreground">text-xl font-semibold</p>
          </div>
          <div>
            <h5 className="text-lg font-medium">Heading 5</h5>
            <p className="mt-1 text-sm text-muted-foreground">text-lg font-medium</p>
          </div>
          <div>
            <h6 className="text-base font-medium">Heading 6</h6>
            <p className="mt-1 text-sm text-muted-foreground">text-base font-medium</p>
          </div>
        </div>
      </section>

      {/* Body text */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Body Text</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Large body</p>
            <p className="mt-2 text-lg">
              WarmHub's design system combines technical precision with human warmth,
              creating interfaces that feel both professional and approachable.
            </p>
            <code className="mt-2 block text-xs text-muted-foreground">text-lg</code>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Regular body</p>
            <p className="mt-2 text-base">
              WarmHub's design system combines technical precision with human warmth,
              creating interfaces that feel both professional and approachable.
            </p>
            <code className="mt-2 block text-xs text-muted-foreground">text-base</code>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Small body</p>
            <p className="mt-2 text-sm">
              WarmHub's design system combines technical precision with human warmth,
              creating interfaces that feel both professional and approachable.
            </p>
            <code className="mt-2 block text-xs text-muted-foreground">text-sm</code>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Caption</p>
            <p className="mt-2 text-xs text-muted-foreground">
              WarmHub's design system combines technical precision with human warmth,
              creating interfaces that feel both professional and approachable.
            </p>
            <code className="mt-2 block text-xs text-muted-foreground">
              text-xs text-muted-foreground
            </code>
          </div>
        </div>
      </section>

      {/* Code */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Code</h2>
        <div className="rounded-lg border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">Inline code</p>
          <p className="mt-2">
            Use <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">npm install</code> to
            install dependencies.
          </p>
          <div className="mt-4">
            <p className="text-sm font-medium text-muted-foreground">Code block</p>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50 dark:bg-slate-950">
              <code>{`import { Button } from '@/components/ui/button'

export function MyComponent() {
  return <Button>Click me</Button>
}`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}

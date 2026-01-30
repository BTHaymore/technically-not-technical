import { Badge } from '@/components/ui/badge'

const spacingScale = [
  { name: '0', value: '0px', className: 'w-0' },
  { name: 'px', value: '1px', className: 'w-px' },
  { name: '0.5', value: '0.125rem (2px)', className: 'w-0.5' },
  { name: '1', value: '0.25rem (4px)', className: 'w-1' },
  { name: '1.5', value: '0.375rem (6px)', className: 'w-1.5' },
  { name: '2', value: '0.5rem (8px)', className: 'w-2' },
  { name: '2.5', value: '0.625rem (10px)', className: 'w-2.5' },
  { name: '3', value: '0.75rem (12px)', className: 'w-3' },
  { name: '3.5', value: '0.875rem (14px)', className: 'w-3.5' },
  { name: '4', value: '1rem (16px)', className: 'w-4' },
  { name: '5', value: '1.25rem (20px)', className: 'w-5' },
  { name: '6', value: '1.5rem (24px)', className: 'w-6' },
  { name: '7', value: '1.75rem (28px)', className: 'w-7' },
  { name: '8', value: '2rem (32px)', className: 'w-8' },
  { name: '9', value: '2.25rem (36px)', className: 'w-9' },
  { name: '10', value: '2.5rem (40px)', className: 'w-10' },
  { name: '11', value: '2.75rem (44px)', className: 'w-11' },
  { name: '12', value: '3rem (48px)', className: 'w-12' },
  { name: '14', value: '3.5rem (56px)', className: 'w-14' },
  { name: '16', value: '4rem (64px)', className: 'w-16' },
  { name: '20', value: '5rem (80px)', className: 'w-20' },
  { name: '24', value: '6rem (96px)', className: 'w-24' },
  { name: '28', value: '7rem (112px)', className: 'w-28' },
  { name: '32', value: '8rem (128px)', className: 'w-32' },
]

const customSpacing = [
  { name: '4.5', value: '1.125rem (18px)', description: 'Between standard spacing values' },
  { name: '13', value: '3.25rem (52px)', description: 'Extended spacing' },
  { name: '15', value: '3.75rem (60px)', description: 'Extended spacing' },
  { name: '18', value: '4.5rem (72px)', description: 'Extended spacing' },
]

export function SpacingPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="secondary" className="mb-4">
          Foundations
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight">Spacing</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An 8px base grid system with consistent spacing tokens for layout and components.
        </p>
      </div>

      {/* Base unit */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Base Unit</h2>
        <p className="text-muted-foreground">
          The spacing system is built on an 8px base unit. Most values are multiples of 4px
          for fine-grained control.
        </p>
        <div className="flex items-center gap-4 rounded-lg border bg-card p-6">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-xs font-medium text-primary-foreground">
            8px
          </div>
          <span className="text-sm text-muted-foreground">
            Base unit = 8px = 0.5rem = spacing-2
          </span>
        </div>
      </section>

      {/* Spacing scale */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spacing Scale</h2>
        <p className="text-muted-foreground">
          Available spacing values for padding, margin, gap, and sizing.
        </p>
        <div className="space-y-2">
          {spacingScale.slice(0, 16).map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-lg border bg-card px-4 py-2"
            >
              <code className="w-12 text-sm font-medium">{item.name}</code>
              <div className={`h-4 rounded bg-primary ${item.className}`} />
              <span className="text-sm text-muted-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Large spacing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Large Spacing</h2>
        <p className="text-muted-foreground">
          For section spacing, page margins, and larger layout gaps.
        </p>
        <div className="space-y-2">
          {spacingScale.slice(16).map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-lg border bg-card px-4 py-2"
            >
              <code className="w-12 text-sm font-medium">{item.name}</code>
              <div
                className="h-4 rounded bg-primary"
                style={{ width: `${parseInt(item.value) * 0.5}px` }}
              />
              <span className="text-sm text-muted-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Custom spacing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Custom Spacing Tokens</h2>
        <p className="text-muted-foreground">
          Extended spacing values added to the default Tailwind scale.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {customSpacing.map((item) => (
            <div key={item.name} className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <code className="font-medium">spacing-{item.name}</code>
                <span className="text-sm text-muted-foreground">{item.value}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage examples */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Examples</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Padding */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-medium">Padding</h3>
            <div className="mt-4 space-y-4">
              <div className="rounded border border-dashed border-muted-foreground p-2">
                <div className="rounded bg-primary/20 p-4">
                  <span className="text-sm">p-4 (16px)</span>
                </div>
              </div>
              <code className="block text-sm text-muted-foreground">
                className="p-4"
              </code>
            </div>
          </div>

          {/* Gap */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-medium">Gap</h3>
            <div className="mt-4 space-y-4">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded bg-primary/20" />
                <div className="h-12 w-12 rounded bg-primary/20" />
                <div className="h-12 w-12 rounded bg-primary/20" />
              </div>
              <code className="block text-sm text-muted-foreground">
                className="flex gap-4"
              </code>
            </div>
          </div>

          {/* Margin */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-medium">Margin</h3>
            <div className="mt-4 space-y-4">
              <div className="rounded border border-dashed border-muted-foreground">
                <div className="m-4 rounded bg-primary/20 p-4">
                  <span className="text-sm">m-4 (16px)</span>
                </div>
              </div>
              <code className="block text-sm text-muted-foreground">
                className="m-4"
              </code>
            </div>
          </div>

          {/* Space between */}
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-medium">Space Between</h3>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <div className="h-8 rounded bg-primary/20" />
                <div className="h-8 rounded bg-primary/20" />
                <div className="h-8 rounded bg-primary/20" />
              </div>
              <code className="block text-sm text-muted-foreground">
                className="space-y-2"
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-success-500/30 bg-success-50 p-4 dark:bg-success-500/10">
            <h3 className="font-medium text-success-600">Do</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Use consistent spacing within components</li>
              <li>Prefer multiples of 4px for most spacing</li>
              <li>Use larger spacing for section separation</li>
              <li>Match spacing to visual hierarchy</li>
            </ul>
          </div>
          <div className="rounded-lg border border-error-500/30 bg-error-50 p-4 dark:bg-error-500/10">
            <h3 className="font-medium text-error-600">Don't</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Don't use arbitrary pixel values</li>
              <li>Don't mix spacing scales inconsistently</li>
              <li>Don't use spacing-0 between related items</li>
              <li>Don't over-space in compact interfaces</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

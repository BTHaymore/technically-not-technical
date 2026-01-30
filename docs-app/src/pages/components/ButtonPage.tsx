import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Loader2, Mail, Download, ArrowRight, Plus, Trash2 } from 'lucide-react'

interface PropsTableRow {
  prop: string
  type: string
  default: string
  description: string
}

const propsTable: PropsTableRow[] = [
  { prop: 'variant', type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"', description: 'The visual style of the button' },
  { prop: 'size', type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: 'The size of the button' },
  { prop: 'asChild', type: 'boolean', default: 'false', description: 'Render as a child element (for links)' },
  { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button' },
]

export function ButtonPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="secondary" className="mb-4">
          Components
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Buttons trigger actions and events. Use them for form submissions, dialogs, and user interactions.
        </p>
      </div>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <p className="text-muted-foreground">
          Different visual styles for different contexts.
        </p>
        <div className="flex flex-wrap gap-4 rounded-lg border bg-card p-6">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50 dark:bg-slate-950">
          <code>{`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <p className="text-muted-foreground">
          Buttons come in multiple sizes to fit different contexts.
        </p>
        <div className="flex flex-wrap items-center gap-4 rounded-lg border bg-card p-6">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50 dark:bg-slate-950">
          <code>{`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus /></Button>`}</code>
        </pre>
      </section>

      {/* With icons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Icons</h2>
        <p className="text-muted-foreground">
          Add icons to provide visual context for button actions.
        </p>
        <div className="flex flex-wrap gap-4 rounded-lg border bg-card p-6">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Login with Email
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button>
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50 dark:bg-slate-950">
          <code>{`<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>

<Button>
  Continue
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>`}</code>
        </pre>
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">States</h2>
        <p className="text-muted-foreground">
          Buttons have different states for loading and disabled.
        </p>
        <div className="flex flex-wrap gap-4 rounded-lg border bg-card p-6">
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </div>
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50 dark:bg-slate-950">
          <code>{`<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading
</Button>

<Button disabled>Disabled</Button>`}</code>
        </pre>
      </section>

      {/* Destructive actions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Destructive Actions</h2>
        <p className="text-muted-foreground">
          Use destructive variants for delete and remove actions.
        </p>
        <div className="flex flex-wrap gap-4 rounded-lg border bg-card p-6">
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <Button variant="outline" className="border-error-500/50 text-error-500 hover:bg-error-50 hover:text-error-600">
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </section>

      {/* Props table */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Prop</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Default</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {propsTable.map((row) => (
                <tr key={row.prop} className="border-b">
                  <td className="px-4 py-3 font-mono text-sm">{row.prop}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {row.type}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">{row.default}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage guidelines */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-success-500/30 bg-success-50 p-4 dark:bg-success-500/10">
            <h3 className="font-medium text-success-600">Do</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Use primary for the main action on a page</li>
              <li>Use descriptive labels (Save, Submit, Continue)</li>
              <li>Provide loading states for async actions</li>
              <li>Use icons to clarify intent</li>
            </ul>
          </div>
          <div className="rounded-lg border border-error-500/30 bg-error-50 p-4 dark:bg-error-500/10">
            <h3 className="font-medium text-error-600">Don't</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Don't use multiple primary buttons together</li>
              <li>Don't use vague labels like "Click here"</li>
              <li>Don't use destructive for non-destructive actions</li>
              <li>Don't disable without explanation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

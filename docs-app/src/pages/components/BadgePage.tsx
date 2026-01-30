import { Badge } from '@/components/ui/badge'

export function BadgePage() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Components</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Badges are used to highlight status, categories, or labels.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-4 rounded-lg border bg-card p-6">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50">
          <code>{`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}</code>
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Semantic Colors</h2>
        <div className="flex flex-wrap gap-4 rounded-lg border bg-card p-6">
          <Badge className="bg-success-500 hover:bg-success-600">Success</Badge>
          <Badge className="bg-warning-500 hover:bg-warning-600">Warning</Badge>
          <Badge className="bg-error-500 hover:bg-error-600">Error</Badge>
          <Badge className="bg-info-500 hover:bg-info-600">Info</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Custom Colors</h2>
        <div className="flex flex-wrap gap-4 rounded-lg border bg-card p-6">
          <Badge className="bg-sky-500/10 text-sky-600 hover:bg-sky-500/20">Sky</Badge>
          <Badge className="bg-teal-500/10 text-teal-600 hover:bg-teal-500/20">Teal</Badge>
          <Badge className="bg-slate-500/10 text-slate-600 hover:bg-slate-500/20">Slate</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Use Cases</h2>
        <div className="space-y-4 rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <span className="font-medium">Status:</span>
            <Badge className="bg-success-500">Active</Badge>
            <Badge className="bg-warning-500">Pending</Badge>
            <Badge className="bg-error-500">Inactive</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Version:</span>
            <Badge variant="outline">v2.0.0</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Category:</span>
            <Badge variant="secondary">Design</Badge>
            <Badge variant="secondary">Development</Badge>
          </div>
        </div>
      </section>
    </div>
  )
}

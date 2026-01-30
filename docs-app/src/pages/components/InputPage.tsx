import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Mail, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export function InputPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Components</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Input</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Text inputs for forms and data entry. Styled for the WarmHub design system.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Default</h2>
        <div className="max-w-sm rounded-lg border bg-card p-6">
          <Input type="email" placeholder="Email" />
        </div>
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50 dark:bg-slate-950">
          <code>{`<Input type="email" placeholder="Email" />`}</code>
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Label</h2>
        <div className="max-w-sm space-y-2 rounded-lg border bg-card p-6">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" type="email" placeholder="you@example.com" />
          <p className="text-sm text-muted-foreground">We'll never share your email.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Icons</h2>
        <div className="max-w-sm space-y-4 rounded-lg border bg-card p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-10" />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="email" placeholder="Email address" className="pl-10" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Password</h2>
        <div className="max-w-sm rounded-lg border bg-card p-6">
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">States</h2>
        <div className="max-w-sm space-y-4 rounded-lg border bg-card p-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Disabled</label>
            <Input disabled placeholder="Disabled input" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">With value</label>
            <Input defaultValue="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-error-500">Error</label>
            <Input className="border-error-500 focus-visible:ring-error-500" placeholder="Invalid input" />
            <p className="text-sm text-error-500">This field is required.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Prop</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-mono">type</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="px-4 py-3 text-muted-foreground">Input type (text, email, password, etc.)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-mono">placeholder</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="px-4 py-3 text-muted-foreground">Placeholder text</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-mono">disabled</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="px-4 py-3 text-muted-foreground">Disable the input</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

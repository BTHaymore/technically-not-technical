import { Badge } from '@/components/ui/badge'
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AlertPage() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Components</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Alerts communicate important information to users. Use them for feedback, warnings, and status updates.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Types</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-lg border border-info-500/30 bg-info-50 p-4 dark:bg-info-500/10">
            <Info className="h-5 w-5 text-info-500" />
            <div>
              <p className="font-medium text-info-600">Information</p>
              <p className="mt-1 text-sm text-muted-foreground">
                This is an informational alert for general messages.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-success-500/30 bg-success-50 p-4 dark:bg-success-500/10">
            <CheckCircle className="h-5 w-5 text-success-500" />
            <div>
              <p className="font-medium text-success-600">Success</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your changes have been saved successfully.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-warning-500/30 bg-warning-50 p-4 dark:bg-warning-500/10">
            <AlertTriangle className="h-5 w-5 text-warning-500" />
            <div>
              <p className="font-medium text-warning-600">Warning</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your session is about to expire. Please save your work.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-error-500/30 bg-error-50 p-4 dark:bg-error-500/10">
            <AlertCircle className="h-5 w-5 text-error-500" />
            <div>
              <p className="font-medium text-error-600">Error</p>
              <p className="mt-1 text-sm text-muted-foreground">
                There was an error processing your request. Please try again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dismissible</h2>
        <div className="flex items-start justify-between gap-3 rounded-lg border border-info-500/30 bg-info-50 p-4 dark:bg-info-500/10">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-info-500" />
            <div>
              <p className="font-medium text-info-600">Update available</p>
              <p className="mt-1 text-sm text-muted-foreground">
                A new version of the application is available.
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Actions</h2>
        <div className="flex flex-col gap-3 rounded-lg border border-warning-500/30 bg-warning-50 p-4 dark:bg-warning-500/10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning-500" />
            <div>
              <p className="font-medium text-warning-600">Your trial is ending</p>
              <p className="text-sm text-muted-foreground">
                Upgrade to continue using all features.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">Dismiss</Button>
            <Button size="sm">Upgrade Now</Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Code Example</h2>
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50">
          <code>{`<div className="flex items-start gap-3 rounded-lg border border-success-500/30 bg-success-50 p-4">
  <CheckCircle className="h-5 w-5 text-success-500" />
  <div>
    <p className="font-medium text-success-600">Success</p>
    <p className="mt-1 text-sm text-muted-foreground">
      Your changes have been saved successfully.
    </p>
  </div>
</div>`}</code>
        </pre>
      </section>
    </div>
  )
}

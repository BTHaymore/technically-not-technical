import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Pending', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Inactive', role: 'User' },
]

export function TablePage() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Components</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Table</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Tables display data in rows and columns. Ideal for data-heavy applications and dashboards.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Table</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Role</th>
                <th className="px-4 py-3 text-right text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.email}</td>
                  <td className="px-4 py-3">
                    <Badge
                      className={
                        row.status === 'Active'
                          ? 'bg-success-500'
                          : row.status === 'Pending'
                          ? 'bg-warning-500'
                          : 'bg-slate-500'
                      }
                    >
                      {row.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.role}</td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">With Pagination</h2>
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, 3).map((row) => (
                  <tr key={row.id} className="border-b">
                    <td className="px-4 py-3 font-medium">{row.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.email}</td>
                    <td className="px-4 py-3">
                      <Badge className={row.status === 'Active' ? 'bg-success-500' : 'bg-warning-500'}>
                        {row.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing 1-3 of 10 results</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Styling Guidelines</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Use <code className="rounded bg-muted px-1 text-sm">border-b</code> for row separators</li>
          <li>• Header background: <code className="rounded bg-muted px-1 text-sm">bg-muted/50</code></li>
          <li>• Consistent padding: <code className="rounded bg-muted px-1 text-sm">px-4 py-3</code></li>
          <li>• Right-align numerical and action columns</li>
        </ul>
      </section>
    </div>
  )
}

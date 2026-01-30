import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Home,
  BarChart3,
  Users,
  Settings,
  Search,
  Bell,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

const stats = [
  { title: 'Total Revenue', value: '$45,231', change: '+20.1%', trend: 'up', icon: DollarSign },
  { title: 'Active Users', value: '2,350', change: '+180', trend: 'up', icon: Users },
  { title: 'Conversion', value: '3.2%', change: '-0.4%', trend: 'down', icon: Activity },
  { title: 'Avg. Session', value: '2m 45s', change: '+12s', trend: 'up', icon: BarChart3 },
]

const recentActivity = [
  { user: 'John Doe', action: 'Created new project', time: '2 min ago' },
  { user: 'Jane Smith', action: 'Updated settings', time: '5 min ago' },
  { user: 'Bob Johnson', action: 'Invited team member', time: '10 min ago' },
  { user: 'Alice Brown', action: 'Exported report', time: '15 min ago' },
]

export function DashboardTemplate() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Templates</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Template</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A complete dashboard layout with sidebar navigation, stats cards, and data tables.
        </p>
      </div>

      {/* Full Dashboard Preview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="overflow-hidden rounded-xl border">
          {/* Dashboard Container */}
          <div className="flex min-h-[600px]">
            {/* Sidebar */}
            <aside className="hidden w-56 border-r bg-sidebar p-4 lg:block">
              <div className="flex items-center gap-2 px-2 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  W
                </div>
                <span className="font-semibold">WarmHub</span>
              </div>
              <nav className="mt-6 space-y-1">
                {[
                  { icon: Home, label: 'Dashboard', active: true },
                  { icon: BarChart3, label: 'Analytics', active: false },
                  { icon: Users, label: 'Users', active: false },
                  { icon: Settings, label: 'Settings', active: false },
                ].map((item) => (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      item.active
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                        : 'text-muted-foreground hover:bg-sidebar-accent/50'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Header */}
              <header className="flex items-center justify-between border-b px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                  <div className="h-8 w-8 rounded-full bg-primary/20" />
                </div>
              </header>

              {/* Page Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.title} className="rounded-xl border bg-card p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                      <p className={`mt-1 flex items-center text-sm ${
                        stat.trend === 'up' ? 'text-success-500' : 'text-error-500'
                      }`}>
                        {stat.trend === 'up' ? (
                          <ArrowUpRight className="mr-1 h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="mr-1 h-4 w-4" />
                        )}
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Activity */}
                <div className="mt-6 rounded-xl border bg-card">
                  <div className="border-b px-4 py-3">
                    <h2 className="font-semibold">Recent Activity</h2>
                  </div>
                  <div className="divide-y">
                    {recentActivity.map((item, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/20" />
                          <div>
                            <p className="font-medium">{item.user}</p>
                            <p className="text-sm text-muted-foreground">{item.action}</p>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Key Patterns */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Key Patterns</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Fixed sidebar with collapsible navigation</li>
          <li>• Sticky header with search and notifications</li>
          <li>• Stats cards in a responsive 4-column grid</li>
          <li>• Activity feed with user avatars and timestamps</li>
          <li>• Consistent spacing: p-4 for cards, p-6 for page content</li>
        </ul>
      </section>
    </div>
  )
}

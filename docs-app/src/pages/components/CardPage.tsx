import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react'

export function CardPage() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Components</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Card</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Cards group related content and actions. Use them for dashboards, listings, and feature displays.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Card</h2>
        <div className="max-w-md rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Card Title</h3>
          <p className="mt-2 text-muted-foreground">
            This is a basic card with a title and description. Cards are great for grouping related content.
          </p>
          <div className="mt-4">
            <Button>Learn More</Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Stat Cards</h2>
        <p className="text-muted-foreground">For dashboards and metrics displays.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <DollarSign className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="mt-2 text-3xl font-bold">$45,231</p>
            <p className="mt-1 flex items-center text-sm text-success-500">
              <TrendingUp className="mr-1 h-4 w-4" />
              +20.1% from last month
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">Active Users</p>
              <Users className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="mt-2 text-3xl font-bold">2,350</p>
            <p className="mt-1 flex items-center text-sm text-success-500">
              <TrendingUp className="mr-1 h-4 w-4" />
              +180 since last week
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="mt-2 text-3xl font-bold">3.2%</p>
            <p className="mt-1 flex items-center text-sm text-error-500">
              -0.4% from last month
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Feature Card</h2>
        <p className="text-muted-foreground">For marketing and feature showcases.</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Analytics Dashboard</h3>
            <p className="mt-2 text-muted-foreground">
              Track your key metrics in real-time with our comprehensive analytics dashboard.
            </p>
            <Button variant="link" className="mt-4 h-auto p-0 group-hover:text-primary">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Team Collaboration</h3>
            <p className="mt-2 text-muted-foreground">
              Work together seamlessly with built-in collaboration tools and real-time updates.
            </p>
            <Button variant="link" className="mt-4 h-auto p-0 group-hover:text-primary">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Interactive Card</h2>
        <div className="max-w-md cursor-pointer rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
          <Badge className="mb-2">New</Badge>
          <h3 className="text-lg font-semibold">Interactive Element</h3>
          <p className="mt-2 text-muted-foreground">
            Hover over this card to see the interactive state with border highlight and shadow.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-success-500/30 bg-success-50 p-4 dark:bg-success-500/10">
            <h3 className="font-medium text-success-600">Do</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Use consistent padding within cards</li>
              <li>Group related information together</li>
              <li>Add hover states for interactive cards</li>
              <li>Use shadows sparingly for elevation</li>
            </ul>
          </div>
          <div className="rounded-lg border border-error-500/30 bg-error-50 p-4 dark:bg-error-500/10">
            <h3 className="font-medium text-error-600">Don't</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Don't overcrowd cards with too much content</li>
              <li>Don't use cards for single pieces of text</li>
              <li>Don't nest cards within cards</li>
              <li>Don't mix card styles inconsistently</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

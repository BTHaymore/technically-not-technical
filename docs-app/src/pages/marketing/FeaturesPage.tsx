import { Badge } from '@/components/ui/badge'
import { Zap, Shield, BarChart3, Users, Clock, Globe, Code, Layers, Lock } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized for performance with sub-second response times.' },
  { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 compliant with end-to-end encryption.' },
  { icon: BarChart3, title: 'Advanced Analytics', description: 'Real-time insights and customizable dashboards.' },
  { icon: Users, title: 'Team Collaboration', description: 'Built-in tools for seamless team workflows.' },
  { icon: Clock, title: '24/7 Support', description: 'Round-the-clock support from our expert team.' },
  { icon: Globe, title: 'Global CDN', description: 'Fast delivery worldwide with edge caching.' },
]

export function FeaturesPage() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Marketing</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Feature Blocks</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Feature blocks showcase product benefits. Use clear icons and concise descriptions.
        </p>
      </div>

      {/* Grid Layout */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Grid Layout</h2>
        <div className="rounded-xl border bg-card p-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">Features</Badge>
            <h2 className="text-2xl font-bold">Everything you need</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              Powerful features to help you build, deploy, and scale your AI applications.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Layout */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Card Layout</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 3).map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alternating Layout */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Alternating Layout</h2>
        <div className="space-y-8">
          <div className="grid gap-8 rounded-xl border bg-card p-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit bg-sky-500/10 text-sky-600">Security</Badge>
              <h3 className="text-2xl font-bold">Built with security in mind</h3>
              <p className="mt-4 text-muted-foreground">
                Enterprise-grade security with SOC 2 compliance, end-to-end encryption,
                and advanced access controls. Your data is safe with us.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Lock className="h-4 w-4 text-primary" /> End-to-end encryption
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" /> SOC 2 Type II compliant
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Code className="h-4 w-4 text-primary" /> API security best practices
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-muted/50 p-8">
              <Shield className="h-24 w-24 text-muted-foreground/30" />
            </div>
          </div>

          <div className="grid gap-8 rounded-xl border bg-card p-8 lg:grid-cols-2">
            <div className="order-2 flex items-center justify-center rounded-lg bg-muted/50 p-8 lg:order-1">
              <Layers className="h-24 w-24 text-muted-foreground/30" />
            </div>
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <Badge className="mb-4 w-fit bg-teal-500/10 text-teal-600">Scalability</Badge>
              <h3 className="text-2xl font-bold">Scale without limits</h3>
              <p className="mt-4 text-muted-foreground">
                From startup to enterprise, our platform grows with you. Handle millions
                of requests without breaking a sweat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Guidelines</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Use consistent icon sizes (h-5 w-5 for cards, h-6 w-6 for featured)</li>
          <li>• Keep descriptions under 2 lines for grid layouts</li>
          <li>• Use primary color for icons, muted text for descriptions</li>
          <li>• Add hover states for interactive cards</li>
        </ul>
      </section>
    </div>
  )
}

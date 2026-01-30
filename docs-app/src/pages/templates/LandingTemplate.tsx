import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Zap, Shield, BarChart3, Star } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed' },
  { icon: Shield, title: 'Secure', description: 'Enterprise-grade security' },
  { icon: BarChart3, title: 'Analytics', description: 'Built-in insights' },
]

const pricing = [
  { name: 'Starter', price: '$0', features: ['5 projects', 'Basic analytics', 'Email support'] },
  { name: 'Pro', price: '$29', features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'API access'], popular: true },
  { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'SSO', 'Dedicated support', 'SLA'] },
]

export function LandingTemplate() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Templates</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Landing Page Template</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A conversion-focused landing page with hero, features, pricing, and CTA sections.
        </p>
      </div>

      {/* Full Landing Page Preview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="overflow-hidden rounded-xl border">
          {/* Navigation */}
          <nav className="flex items-center justify-between border-b bg-background/95 px-6 py-4 backdrop-blur">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                W
              </div>
              <span className="font-semibold">WarmHub</span>
            </div>
            <div className="hidden items-center gap-6 md:flex">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Docs</a>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </nav>

          {/* Hero */}
          <section className="bg-gradient-to-b from-sky-50 to-background px-6 py-16 text-center dark:from-sky-950/20 lg:py-24">
            <Badge className="mb-4 bg-primary/10 text-primary">Now in Beta</Badge>
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
              Build AI products that users actually love
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              The design system and component library for modern AI applications.
              Ship faster, look better, convert more.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg">
                Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">View Demo</Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Check className="h-4 w-4 text-success-500" /> Free tier
              </div>
              <div className="flex items-center gap-1">
                <Check className="h-4 w-4 text-success-500" /> No credit card
              </div>
              <div className="flex items-center gap-1">
                <Check className="h-4 w-4 text-success-500" /> 5 min setup
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="border-t px-6 py-16">
            <div className="text-center">
              <Badge variant="secondary">Features</Badge>
              <h2 className="mt-4 text-2xl font-bold">Everything you need</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
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
          </section>

          {/* Pricing */}
          <section className="border-t bg-muted/30 px-6 py-16">
            <div className="text-center">
              <Badge variant="secondary">Pricing</Badge>
              <h2 className="mt-4 text-2xl font-bold">Simple, transparent pricing</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-xl border bg-card p-6 ${
                    plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <Badge className="mb-4 bg-primary">Most Popular</Badge>
                  )}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-3xl font-bold">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">/month</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-success-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-6 w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Social Proof */}
          <section className="border-t px-6 py-12 text-center">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning-500 text-warning-500" />
              ))}
            </div>
            <p className="mt-4 text-lg font-medium">"The best design system I've ever used."</p>
            <p className="mt-2 text-sm text-muted-foreground">— Happy Customer, CEO at Company</p>
          </section>

          {/* CTA */}
          <section className="border-t bg-primary px-6 py-16 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold">Ready to get started?</h2>
            <p className="mt-2 text-primary-foreground/80">
              Join thousands of developers building with WarmHub.
            </p>
            <Button size="lg" variant="secondary" className="mt-6">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </section>

          {/* Footer */}
          <footer className="border-t bg-muted/30 px-6 py-8 text-center text-sm text-muted-foreground">
            © 2024 WarmHub. All rights reserved.
          </footer>
        </div>
      </section>

      {/* Structure */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Page Structure</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>1. Navigation with logo, links, and CTAs</li>
          <li>2. Hero section with headline, subhead, and primary CTA</li>
          <li>3. Features grid showcasing key benefits</li>
          <li>4. Pricing table with clear tiers</li>
          <li>5. Social proof (testimonials, ratings)</li>
          <li>6. Final CTA section with contrasting background</li>
          <li>7. Footer with legal links</li>
        </ul>
      </section>
    </div>
  )
}

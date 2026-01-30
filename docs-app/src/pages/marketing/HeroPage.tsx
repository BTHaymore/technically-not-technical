import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react'

export function HeroPage() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Marketing</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Hero Sections</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Hero sections are the first thing visitors see. Make them impactful with clear messaging and strong CTAs.
        </p>
      </div>

      {/* Hero 1: Centered */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Centered Hero</h2>
        <div className="rounded-xl border bg-gradient-to-b from-sky-50 to-background p-8 text-center dark:from-sky-950/20 lg:p-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Now in Beta</Badge>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight lg:text-5xl">
            Build AI products that users love
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            WarmHub provides the design system and tools to create professional,
            human-centered AI applications that stand out.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Hero 2: Split */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Split Hero</h2>
        <div className="grid gap-8 rounded-xl border bg-card p-8 lg:grid-cols-2 lg:p-12">
          <div className="flex flex-col justify-center">
            <Badge className="mb-4 w-fit bg-teal-500/10 text-teal-600">New Feature</Badge>
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Analytics that actually make sense
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Track what matters, ignore the noise. Our dashboard gives you actionable
              insights without the complexity.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button>Start Free Trial</Button>
              <Button variant="ghost">Learn More →</Button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-muted/50 p-8">
            <div className="text-center text-muted-foreground">
              [Dashboard Preview Image]
            </div>
          </div>
        </div>
      </section>

      {/* Hero 3: With Features */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hero with Feature Pills</h2>
        <div className="rounded-xl border bg-card p-8 text-center lg:p-16">
          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-2">
            <Badge variant="secondary"><Zap className="mr-1 h-3 w-3" /> Fast</Badge>
            <Badge variant="secondary"><Shield className="mr-1 h-3 w-3" /> Secure</Badge>
            <Badge variant="secondary"><Sparkles className="mr-1 h-3 w-3" /> Modern</Badge>
          </div>
          <h1 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight lg:text-4xl">
            The developer platform for building AI-native apps
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Ship faster with pre-built components, smart defaults, and a design system
            that scales with your product.
          </p>
          <div className="mt-8">
            <Button size="lg">Create Free Account</Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required • Free tier available
          </p>
        </div>
      </section>

      {/* Guidelines */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-success-500/30 bg-success-50 p-4 dark:bg-success-500/10">
            <h3 className="font-medium text-success-600">Do</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Keep headlines concise and benefit-focused</li>
              <li>Use one primary CTA and one secondary</li>
              <li>Include social proof or trust indicators</li>
              <li>Make the value proposition immediately clear</li>
            </ul>
          </div>
          <div className="rounded-lg border border-error-500/30 bg-error-50 p-4 dark:bg-error-500/10">
            <h3 className="font-medium text-error-600">Don't</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Don't overload with multiple CTAs</li>
              <li>Don't use jargon or unclear language</li>
              <li>Don't bury the main message</li>
              <li>Don't forget mobile responsiveness</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

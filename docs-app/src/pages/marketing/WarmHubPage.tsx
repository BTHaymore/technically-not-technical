import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowRight,
  ArrowLeft,
  Brain,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  AlertTriangle,
  XCircle,
  HelpCircle,
  CheckCircle,
  Linkedin,
  Twitter,
} from 'lucide-react'
import logoDark from '@/assets/logo-dark.svg'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Examples', href: '#examples' },
  { label: 'Pricing', href: '#pricing' },
]

const problems = [
  {
    icon: XCircle,
    text: "Throw away what they've learned",
  },
  {
    icon: HelpCircle,
    text: 'Struggle with uncertainty',
  },
  {
    icon: AlertTriangle,
    text: 'Guess at answers',
  },
]

const features = [
  {
    icon: Brain,
    title: 'Persistent Learning',
    description: 'What your agent learns today carries forward to tomorrow. No more starting from scratch.',
  },
  {
    icon: TrendingUp,
    title: 'Compounding Intelligence',
    description: 'Each interaction makes your system smarter. Knowledge accumulates, not evaporates.',
  },
  {
    icon: Shield,
    title: 'Calibrated Confidence',
    description: "Know when your AI is certain and when it's guessing. Reliable uncertainty quantification.",
  },
  {
    icon: Zap,
    title: 'Token Efficiency',
    description: 'Stop paying for the same learnings over and over. Every token becomes an investment.',
  },
]

export function WarmHubPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen dark">
      {/* Back to Design System FAB */}
      <Link
        to="/"
        className="fixed bottom-4 left-4 z-[60] flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-700/90 transition-all shadow-lg"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="text-sm font-medium">Design System</span>
      </Link>

      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src={logoDark}
              alt="WarmHub"
              className={`transition-all duration-300 ${scrolled ? 'h-7' : 'h-8'}`}
            />
          </a>
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
              Join Waitlist
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white px-8 pt-28 pb-20 lg:pt-36 lg:pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(65,119,166,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]" />

          <div className="relative max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 hover:bg-teal-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Knowledge Infrastructure for Agentic AI
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              The next generation of AI doesn't just respond.{' '}
              <span className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
                It learns with every interaction.
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
              Every token should be an investment — not an expense.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-slate-700 hover:text-white hover:border-slate-400">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-slate-50 dark:bg-slate-900 px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-error-500/10 text-error-400">The Problem</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Today's systems are built wrong.
              </h2>
              <p className="mt-4 text-lg text-slate-300">They...</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-12">
              {problems.map((problem, i) => (
                <Card key={i} className="border-error-500/20 bg-error-500/10">
                  <CardContent className="pt-6 text-center">
                    <problem.icon className="h-8 w-8 text-error-400 mx-auto mb-3" />
                    <p className="font-medium text-error-300">{problem.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                They sound confident whether they're right or not — and you have{' '}
                <strong className="text-white">no reliable way to tell the difference.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-white dark:bg-slate-950 px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400">The Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              WarmHub changes the equation
            </h2>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
              Each interaction makes your agent smarter — what it learns now carries forward.
            </p>
            <p className="mt-4 text-lg font-medium text-teal-400">
              Not just more output. Lasting knowledge.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-b from-slate-800 to-slate-900 px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-sky-500/10 text-sky-400">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Built for the future of AI
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {features.map((feature, i) => (
                <Card key={i} className="border-sky-500/20 hover:border-sky-500/40 transition-colors bg-slate-900/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-500/10">
                        <feature.icon className="h-6 w-6 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                        <p className="mt-2 text-slate-300">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-slate-900 px-8 py-20 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(45,90,130,0.4),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(13,94,88,0.3),transparent_50%)]" />
          <div className="relative max-w-3xl mx-auto text-center">
            <CheckCircle className="h-12 w-12 mx-auto mb-6 text-teal-400" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Start building knowledge
            </h2>
            <p className="mt-4 text-xl text-slate-300">
              Stop throwing away your learnings.
            </p>
            <Button size="lg" className="mt-8 bg-teal-500 hover:bg-teal-600 text-white">
              Sign up for waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <img src={logoDark} alt="WarmHub" className="h-8 w-auto" />
                </div>
                <p className="text-sm text-slate-400 max-w-xs">
                  Knowledge infrastructure for agentic AI. Making every interaction an investment.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Solution</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Join Waitlist</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">
                © 2026 WarmHub Inc. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-slate-600">|</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

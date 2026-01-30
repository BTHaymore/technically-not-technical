import { NavLink } from 'react-router-dom'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import {
  Palette,
  Type,
  Square,
  MousePointer2,
  TextCursor,
  CreditCard,
  Tag,
  Table2,
  AlertCircle,
  BarChart3,
  Brain,
  Sparkles,
  LayoutGrid,
  LayoutDashboard,
  Globe,
  ChevronRight,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import LogoLight from '@/assets/logo-light.svg'
import LogoDark from '@/assets/logo-dark.svg'

interface SidebarProps {
  onNavigate?: () => void
}

interface NavSection {
  title: string
  items: {
    title: string
    href: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

const navigation: NavSection[] = [
  {
    title: 'Foundations',
    items: [
      { title: 'Colors', href: '/foundations/colors', icon: Palette },
      { title: 'Typography', href: '/foundations/typography', icon: Type },
      { title: 'Spacing', href: '/foundations/spacing', icon: Square },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Button', href: '/components/button', icon: MousePointer2 },
      { title: 'Input', href: '/components/input', icon: TextCursor },
      { title: 'Card', href: '/components/card', icon: CreditCard },
      { title: 'Badge', href: '/components/badge', icon: Tag },
      { title: 'Table', href: '/components/table', icon: Table2 },
      { title: 'Alert', href: '/components/alert', icon: AlertCircle },
      { title: 'Charts', href: '/components/charts', icon: BarChart3 },
      { title: 'Beliefs', href: '/components/beliefs', icon: Brain },
    ],
  },
  {
    title: 'Marketing',
    items: [
      { title: 'Hero Sections', href: '/marketing/hero', icon: Sparkles },
      { title: 'Feature Blocks', href: '/marketing/features', icon: LayoutGrid },
      { title: 'WarmHub.com', href: '/marketing/warmhub', icon: Globe },
    ],
  },
  {
    title: 'Templates',
    items: [
      { title: 'Dashboard', href: '/templates/dashboard', icon: LayoutDashboard },
      { title: 'Landing Page', href: '/templates/landing', icon: Globe },
    ],
  },
]

export function Sidebar({ onNavigate }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'Foundations',
    'Components',
  ])
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    )
  }

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <NavLink
          to="/"
          onClick={onNavigate}
          className="flex items-center"
        >
          <img
            src={isDark ? LogoDark : LogoLight}
            alt="WarmHub"
            className="h-6"
          />
        </NavLink>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 overflow-y-auto px-3 py-4">
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                {section.title}
                <ChevronRight
                  className={cn(
                    'h-4 w-4 transition-transform',
                    expandedSections.includes(section.title) && 'rotate-90'
                  )}
                />
              </button>

              {expandedSections.includes(section.title) && (
                <ul className="mt-1 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        to={item.href}
                        onClick={onNavigate}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                            isActive
                              ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                              : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                          )
                        }
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4">
        <p className="text-xs text-muted-foreground">
          WarmHub Design System v2
        </p>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  Sparkles,
  LayoutGrid,
  LayoutDashboard,
  Globe,
  Search,
  FileText,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

interface SearchItem {
  title: string
  href: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  keywords?: string[]
}

const searchItems: SearchItem[] = [
  { title: 'Getting Started', href: '/', category: 'Home', icon: FileText, keywords: ['intro', 'start', 'begin'] },
  { title: 'Colors', href: '/foundations/colors', category: 'Foundations', icon: Palette, keywords: ['palette', 'theme', 'primary', 'accent'] },
  { title: 'Typography', href: '/foundations/typography', category: 'Foundations', icon: Type, keywords: ['font', 'text', 'heading'] },
  { title: 'Spacing', href: '/foundations/spacing', category: 'Foundations', icon: Square, keywords: ['margin', 'padding', 'gap'] },
  { title: 'Button', href: '/components/button', category: 'Components', icon: MousePointer2, keywords: ['click', 'action', 'submit'] },
  { title: 'Input', href: '/components/input', category: 'Components', icon: TextCursor, keywords: ['form', 'text', 'field'] },
  { title: 'Card', href: '/components/card', category: 'Components', icon: CreditCard, keywords: ['container', 'box'] },
  { title: 'Badge', href: '/components/badge', category: 'Components', icon: Tag, keywords: ['label', 'tag', 'status'] },
  { title: 'Table', href: '/components/table', category: 'Components', icon: Table2, keywords: ['data', 'grid', 'list'] },
  { title: 'Alert', href: '/components/alert', category: 'Components', icon: AlertCircle, keywords: ['notification', 'message', 'warning'] },
  { title: 'Hero Sections', href: '/marketing/hero', category: 'Marketing', icon: Sparkles, keywords: ['landing', 'header', 'banner'] },
  { title: 'Feature Blocks', href: '/marketing/features', category: 'Marketing', icon: LayoutGrid, keywords: ['grid', 'benefits'] },
  { title: 'Dashboard Template', href: '/templates/dashboard', category: 'Templates', icon: LayoutDashboard, keywords: ['admin', 'app'] },
  { title: 'Landing Page Template', href: '/templates/landing', category: 'Templates', icon: Globe, keywords: ['website', 'marketing'] },
]

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()

  const filteredItems = query
    ? searchItems.filter((item) => {
        const searchText = query.toLowerCase()
        return (
          item.title.toLowerCase().includes(searchText) ||
          item.category.toLowerCase().includes(searchText) ||
          item.keywords?.some((k) => k.includes(searchText))
        )
      })
    : searchItems

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleSelect = (href: string) => {
    navigate(href)
    onOpenChange(false)
    setQuery('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => (i + 1) % filteredItems.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length)
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      handleSelect(filteredItems[selectedIndex].href)
    }
  }

  // Group items by category
  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, SearchItem[]>
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg gap-0 p-0">
        <div className="flex items-center border-b px-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <ScrollArea className="max-h-[300px]">
          {filteredItems.length === 0 ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </div>
          ) : (
            <div className="p-2">
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category}>
                  <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    {category}
                  </div>
                  {items.map((item) => {
                    const globalIndex = filteredItems.indexOf(item)
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleSelect(item.href)}
                        className={cn(
                          'flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm',
                          globalIndex === selectedIndex
                            ? 'bg-accent text-accent-foreground'
                            : 'hover:bg-muted'
                        )}
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        {item.title}
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="flex items-center justify-between border-t px-3 py-2 text-xs text-muted-foreground">
          <span>
            <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono">↑↓</kbd> to navigate
          </span>
          <span>
            <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono">↵</kbd> to select
          </span>
          <span>
            <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono">esc</kbd> to close
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}

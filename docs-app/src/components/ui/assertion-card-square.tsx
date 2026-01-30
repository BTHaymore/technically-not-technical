import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BDUMeter } from '@/components/ui/bdu-meter'
import { FileText, Tag } from 'lucide-react'

export interface AssertionCardSquareProps {
  content: string
  about: string[]
  belief: number
  disbelief: number
  uncertainty: number
  source: string
  sourceType?: 'agent' | 'tool' | 'user' | 'system'
  timestamp?: string
  onClick?: () => void
}

function getConfidenceLevel(belief: number, uncertainty: number): {
  label: string
  color: string
} {
  if (uncertainty >= 0.8) {
    return { label: 'Vacuous', color: '#94A3B8' }
  }
  if (uncertainty <= 0.1 && belief >= 0.9) {
    return { label: 'Dogmatic', color: '#0D9488' }
  }
  if (belief >= 0.7) {
    return { label: 'High Confidence', color: '#14B8A6' }
  }
  if (belief >= 0.4) {
    return { label: 'Moderate', color: '#2DD4BF' }
  }
  return { label: 'Low Confidence', color: '#5EEAD4' }
}

function AssertionCardSquare({
  content,
  about,
  belief,
  disbelief,
  uncertainty,
  source,
  sourceType = 'agent',
  timestamp,
  onClick,
}: AssertionCardSquareProps) {
  const confidence = getConfidenceLevel(belief, uncertainty)

  return (
    <Card
      className="w-[380px] h-[380px] hover:brightness-110 transition-all cursor-pointer border-teal-500/30 bg-gradient-to-br from-teal-500/5 to-transparent"
      onClick={onClick}
    >
      <CardContent className="px-5 py-5 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge variant="outline" className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20 shrink-0">
            Assertion
          </Badge>
          <Badge
            variant="secondary"
            className="text-xs"
            style={{ color: confidence.color }}
          >
            {confidence.label}
          </Badge>
        </div>

        {/* Content */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-teal-500" />
          </div>
          <p className="text-base font-medium leading-snug flex-1">"{content}"</p>
        </div>

        {/* About tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <Tag className="w-3 h-3 text-muted-foreground" />
          {about.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BDU Meter */}
        <div className="mb-4 flex-1">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Belief</span>
            <span>Disbelief</span>
            <span>Uncertainty</span>
          </div>
          <BDUMeter
            belief={belief}
            disbelief={disbelief}
            uncertainty={uncertainty}
            size="lg"
            fullWidth
            showValues
          />
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-3">
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              <span className="capitalize">{sourceType}</span>:{' '}
              <span className="text-foreground font-medium">{source}</span>
            </div>
            {timestamp && (
              <span className="text-xs text-muted-foreground">{timestamp}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export { AssertionCardSquare }

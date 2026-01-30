import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BDUMeter, BDU_COLORS } from '@/components/ui/bdu-meter'

export interface CertaintyCardSquareProps {
  title: string
  description: string
  belief: number
  disbelief: number
  uncertainty: number
  source: string
  timestamp?: string
  onClick?: () => void
}

/**
 * Certainty = belief - disbelief
 * Ranges from -1 (strongly false) to +1 (strongly true)
 */
function getCertainty(belief: number, disbelief: number): number {
  return belief - disbelief
}

function getCertaintyLabel(certainty: number): string {
  if (certainty >= 0.7) return 'Very Likely'
  if (certainty >= 0.3) return 'Likely'
  if (certainty >= 0.1) return 'Slightly Likely'
  if (certainty >= -0.1) return 'Neutral'
  if (certainty >= -0.3) return 'Slightly Unlikely'
  if (certainty >= -0.7) return 'Unlikely'
  return 'Very Unlikely'
}

function getCertaintyColor(certainty: number): string {
  if (certainty >= 0.3) return '#22C55E' // green
  if (certainty >= 0.1) return '#84CC16' // lime
  if (certainty >= -0.1) return '#94A3B8' // neutral gray
  if (certainty >= -0.3) return '#F97316' // orange
  return '#EF4444' // red
}

function CertaintyCardSquare({
  title,
  description,
  belief,
  disbelief,
  uncertainty,
  source,
  timestamp,
  onClick,
}: CertaintyCardSquareProps) {
  const certainty = getCertainty(belief, disbelief)
  const certaintyLabel = getCertaintyLabel(certainty)
  const certaintyColor = getCertaintyColor(certainty)

  return (
    <Card
      className="w-[380px] h-[380px] hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:border-sky-500/50 transition-all cursor-pointer border-sky-500/30 bg-gradient-to-br from-sky-500/5 to-transparent"
      onClick={onClick}
    >
      <CardContent className="px-3 py-3 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge variant="outline" className="bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20 shrink-0">
            Certainty
          </Badge>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground flex-1 mb-4">{description}</p>

        {/* Certainty Gauge */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Certainty Score</span>
            <span className="text-sm font-medium" style={{ color: certaintyColor }}>
              {certaintyLabel}
            </span>
          </div>

          {/* Certainty bar: -1 to +1 scale */}
          <div className="relative h-3 bg-muted rounded-full overflow-hidden">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border z-10" />

            {/* Fill bar */}
            <div
              className="absolute top-0 bottom-0 rounded-full transition-all"
              style={{
                backgroundColor: certaintyColor,
                left: certainty >= 0 ? '50%' : `${50 + certainty * 50}%`,
                width: `${Math.abs(certainty) * 50}%`,
              }}
            />
          </div>

          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>−1</span>
            <span>0</span>
            <span>+1</span>
          </div>
        </div>

        {/* BDU Meter */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>B: {(belief * 100).toFixed(0)}%</span>
            <span>D: {(disbelief * 100).toFixed(0)}%</span>
            <span>U: {(uncertainty * 100).toFixed(0)}%</span>
          </div>
          <BDUMeter
            belief={belief}
            disbelief={disbelief}
            uncertainty={uncertainty}
            size="sm"
            fullWidth
          />
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-3 flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            Source: <span className="text-foreground font-medium">{source}</span>
          </div>
          <div
            className="text-2xl font-bold"
            style={{ color: certaintyColor }}
          >
            {certainty >= 0 ? '+' : ''}{certainty.toFixed(2)}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export { CertaintyCardSquare }

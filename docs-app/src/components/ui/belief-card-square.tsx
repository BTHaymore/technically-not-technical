import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BDUMeter, BDU_COLORS } from '@/components/ui/bdu-meter'

export interface BeliefCardSquareProps {
  title: string
  description: string
  status: 'Active' | 'Hypothesis' | 'Archived'
  belief: number
  disbelief: number
  uncertainty: number
  supporting: number
  contradicting: number
  k: number
  onClick?: () => void
}

function BeliefCardSquare({
  title,
  description,
  status,
  belief,
  disbelief,
  uncertainty,
  supporting,
  contradicting,
  k,
  onClick,
}: BeliefCardSquareProps) {
  const statusStyles = {
    Active: 'bg-green-500/10 text-green-500 border-green-500/20',
    Hypothesis: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    Archived: 'bg-muted text-muted-foreground border-muted',
  }

  return (
    <Card
      className="w-[380px] h-[380px] hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:border-primary/40 transition-all cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="px-3 py-3 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <Badge variant="outline" className={statusStyles[status]}>
            {status}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground flex-1 mb-4">{description}</p>

        {/* BDU Meter - Full Width */}
        <div className="mb-4">
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

        {/* Stats */}
        <div className="border-t border-border pt-3">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-xl font-bold" style={{ color: BDU_COLORS.belief }}>
                {supporting}
              </div>
              <div className="text-xs text-muted-foreground">Supporting</div>
            </div>
            <div>
              <div className="text-xl font-bold" style={{ color: BDU_COLORS.disbelief }}>
                {contradicting}
              </div>
              <div className="text-xs text-muted-foreground">Contradicting</div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">
                {k.toFixed(2)}
              </div>
              <div className="text-xs text-muted-foreground">Prior (k)</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export { BeliefCardSquare }

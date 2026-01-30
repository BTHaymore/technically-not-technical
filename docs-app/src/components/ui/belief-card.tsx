import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BDUMeter, BDU_COLORS } from '@/components/ui/bdu-meter'

export interface BeliefCardProps {
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

function BeliefCard({
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
}: BeliefCardProps) {
  const statusStyles = {
    Active: 'bg-green-500/10 text-green-500 border-green-500/20',
    Hypothesis: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    Archived: 'bg-muted text-muted-foreground border-muted',
  }

  return (
    <Card
      className="hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:border-primary/40 transition-all cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">{title}</span>
              <Badge variant="outline" className={statusStyles[status]}>
                {status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            <div className="flex items-center gap-4 text-xs">
              <span style={{ color: BDU_COLORS.belief }}>{supporting} supporting</span>
              <span style={{ color: BDU_COLORS.disbelief }}>{contradicting} contradicting</span>
              <span className="text-muted-foreground">
                k= <span className="text-primary font-semibold">{k.toFixed(2)}</span>
              </span>
            </div>
          </div>
          <BDUMeter
            belief={belief}
            disbelief={disbelief}
            uncertainty={uncertainty}
            size="md"
            showValues
            className="shrink-0"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export { BeliefCard }

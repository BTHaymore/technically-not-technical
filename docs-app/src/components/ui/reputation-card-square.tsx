import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BDUMeter } from '@/components/ui/bdu-meter'
import { Shield, ShieldCheck, ShieldAlert, ShieldQuestion } from 'lucide-react'

export interface ReputationCardSquareProps {
  sourceName: string
  sourceType: 'agent' | 'tool' | 'user' | 'system'
  description: string
  belief: number
  disbelief: number
  uncertainty: number
  assertionCount: number
  lastActivity?: string
  onClick?: () => void
}

function getTrustLevel(belief: number, uncertainty: number): {
  label: string
  icon: typeof Shield
  color: string
} {
  const confidence = 1 - uncertainty

  if (belief >= 0.7 && confidence >= 0.5) {
    return { label: 'Trusted', icon: ShieldCheck, color: '#F59E0B' }
  }
  if (belief >= 0.5 && confidence >= 0.3) {
    return { label: 'Reliable', icon: Shield, color: '#D97706' }
  }
  if (belief < 0.3 || confidence < 0.2) {
    return { label: 'Untrusted', icon: ShieldAlert, color: '#DC2626' }
  }
  return { label: 'Unknown', icon: ShieldQuestion, color: '#94A3B8' }
}

const sourceTypeLabels = {
  agent: 'AI Agent',
  tool: 'Tool',
  user: 'User',
  system: 'System',
}

function ReputationCardSquare({
  sourceName,
  sourceType,
  description,
  belief,
  disbelief,
  uncertainty,
  assertionCount,
  lastActivity,
  onClick,
}: ReputationCardSquareProps) {
  const trust = getTrustLevel(belief, uncertainty)
  const TrustIcon = trust.icon

  return (
    <Card
      className="w-[380px] h-[380px] hover:brightness-110 transition-all cursor-pointer border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent"
      onClick={onClick}
    >
      <CardContent className="px-5 py-5 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge variant="outline" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 shrink-0">
            Reputation
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {sourceTypeLabels[sourceType]}
          </Badge>
        </div>

        {/* Source Identity */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${trust.color}20` }}
          >
            <TrustIcon className="w-6 h-6" style={{ color: trust.color }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-tight">{sourceName}</h3>
            <span className="text-sm font-medium" style={{ color: trust.color }}>
              {trust.label}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground flex-1 mb-4">{description}</p>

        {/* Trust BDU */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Trust</span>
            <span>Distrust</span>
            <span>Unknown</span>
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
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xl font-bold text-amber-500">
                {assertionCount}
              </div>
              <div className="text-xs text-muted-foreground">Total Assertions</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Last Active</div>
              <div className="text-sm font-medium">{lastActivity || 'Unknown'}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export { ReputationCardSquare }

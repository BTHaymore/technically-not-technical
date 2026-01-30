import { cn } from '@/lib/utils'

/**
 * BDU Meter - Belief/Disbelief/Uncertainty visualization
 *
 * Colors:
 * - Belief: Green (#00C853)
 * - Disbelief: Orange (#FF6D00)
 * - Uncertainty: Light blue-gray (#B0BEC5)
 */

export const BDU_COLORS = {
  belief: '#00C853',
  disbelief: '#FF6D00',
  uncertainty: '#B0BEC5',
}

interface BDUMeterProps {
  belief: number
  disbelief: number
  uncertainty: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showLabels?: boolean
  showValues?: boolean
  fullWidth?: boolean
  className?: string
}

function BDUMeter({
  belief,
  disbelief,
  uncertainty,
  size = 'md',
  showLabels = false,
  showValues = false,
  fullWidth = false,
  className,
}: BDUMeterProps) {
  const heights = {
    sm: 'h-3',
    md: 'h-4',
    lg: 'h-5',
    xl: 'h-6',
  }

  const widths = {
    sm: 'w-36',
    md: 'w-44',
    lg: 'w-52',
    xl: 'w-60',
  }

  const widthClass = fullWidth ? 'w-full' : widths[size]

  return (
    <div
      className={cn(
        'flex flex-col gap-2 justify-center',
        !fullWidth && 'self-center',
        className
      )}
    >
      {/* Labels above */}
      {showLabels && (
        <div className={cn('flex justify-between text-xs text-muted-foreground', widthClass)}>
          <span>Belief: {belief.toFixed(2)}</span>
          <span>Disbelief: {disbelief.toFixed(2)}</span>
          <span>Uncertainty: {uncertainty.toFixed(2)}</span>
        </div>
      )}

      {/* Bar container with gaps */}
      <div className={cn('flex gap-[3px]', widthClass)}>
        {/* Belief - Green */}
        <div
          className={cn('transition-all duration-300', heights[size])}
          style={{
            flex: belief,
            backgroundColor: BDU_COLORS.belief,
            borderRadius: '4px',
          }}
          title={`Belief: ${belief.toFixed(2)}`}
        />
        {/* Disbelief - Orange */}
        <div
          className={cn('transition-all duration-300', heights[size])}
          style={{
            flex: disbelief,
            backgroundColor: BDU_COLORS.disbelief,
            borderRadius: '4px',
          }}
          title={`Disbelief: ${disbelief.toFixed(2)}`}
        />
        {/* Uncertainty - Light blue-gray */}
        <div
          className={cn('transition-all duration-300', heights[size])}
          style={{
            flex: uncertainty,
            backgroundColor: BDU_COLORS.uncertainty,
            borderRadius: '4px',
          }}
          title={`Uncertainty: ${uncertainty.toFixed(2)}`}
        />
      </div>

      {showValues && (
        <div className={cn('flex justify-between text-xs font-mono', widthClass)}>
          <span style={{ color: BDU_COLORS.belief }}>b: {belief.toFixed(2)}</span>
          <span style={{ color: BDU_COLORS.disbelief }}>d: {disbelief.toFixed(2)}</span>
          <span style={{ color: BDU_COLORS.uncertainty }}>u: {uncertainty.toFixed(2)}</span>
        </div>
      )}
    </div>
  )
}

export { BDUMeter }

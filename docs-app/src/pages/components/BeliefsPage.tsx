import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { BDUMeter, BDU_COLORS } from '@/components/ui/bdu-meter'
import { BeliefCard } from '@/components/ui/belief-card'

// Sample belief data for demos
const sampleBeliefs = [
  {
    id: '1',
    title: 'Cloud_e829 is tight',
    description: 'Player tends to play fewer hands and fold marginal holdings',
    status: 'Active' as const,
    belief: 0.5,
    disbelief: 0.2,
    uncertainty: 0.3,
    supporting: 8,
    contradicting: 2,
    k: 1.0,
  },
  {
    id: '2',
    title: 'Magnet_da47 is aggressive',
    description: 'Player frequently raises and bets with a wide range of hands',
    status: 'Active' as const,
    belief: 0.45,
    disbelief: 0.15,
    uncertainty: 0.4,
    supporting: 4,
    contradicting: 0,
    k: 1.0,
  },
  {
    id: '3',
    title: 'Float_cb8c is aggressive',
    description: 'Player shows tendencies toward aggressive betting patterns',
    status: 'Hypothesis' as const,
    belief: 0.3,
    disbelief: 0.1,
    uncertainty: 0.6,
    supporting: 2,
    contradicting: 0,
    k: 0.5,
  },
]

export default function BeliefsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge className="mb-4">Components</Badge>
        <h1 className="text-4xl font-bold mb-4">Beliefs</h1>
        <p className="text-lg text-muted-foreground">
          Components for displaying belief states with uncertainty visualization using Subjective Logic.
        </p>
      </div>

      {/* BDU Meter Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">BDU Meter</h2>
        <p className="text-muted-foreground">
          A stacked bar visualization showing Belief, Disbelief, and Uncertainty values.
          The three values always sum to 1.0.
        </p>

        {/* Color Legend */}
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: BDU_COLORS.belief }} />
            <span>Belief (Green)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: BDU_COLORS.disbelief }} />
            <span>Disbelief (Orange)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: BDU_COLORS.uncertainty }} />
            <span>Uncertainty (Gray)</span>
          </div>
        </div>

        {/* Sizes */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <h3 className="font-semibold mb-4">Sizes</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-12">sm</span>
                <BDUMeter belief={0.5} disbelief={0.2} uncertainty={0.3} size="sm" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-12">md</span>
                <BDUMeter belief={0.5} disbelief={0.2} uncertainty={0.3} size="md" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-12">lg</span>
                <BDUMeter belief={0.5} disbelief={0.2} uncertainty={0.3} size="lg" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-12">xl</span>
                <BDUMeter belief={0.5} disbelief={0.2} uncertainty={0.3} size="xl" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* With Values */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <h3 className="font-semibold mb-4">With Values</h3>
            <BDUMeter belief={0.5} disbelief={0.2} uncertainty={0.3} size="lg" showValues />
          </CardContent>
        </Card>

        {/* With Labels */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <h3 className="font-semibold mb-4">With Labels</h3>
            <BDUMeter belief={0.5} disbelief={0.2} uncertainty={0.3} size="lg" showLabels />
          </CardContent>
        </Card>

        {/* Full Width */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <h3 className="font-semibold mb-4">Full Width</h3>
            <BDUMeter belief={0.6} disbelief={0.1} uncertainty={0.3} size="lg" fullWidth showValues />
          </CardContent>
        </Card>

        {/* Different States */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <h3 className="font-semibold mb-4">Different States</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">High Certainty (low uncertainty)</p>
                <BDUMeter belief={0.8} disbelief={0.15} uncertainty={0.05} size="lg" showValues />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">High Uncertainty (new hypothesis)</p>
                <BDUMeter belief={0.2} disbelief={0.1} uncertainty={0.7} size="lg" showValues />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Contested (high disbelief)</p>
                <BDUMeter belief={0.3} disbelief={0.5} uncertainty={0.2} size="lg" showValues />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Example */}
        <pre className="bg-card p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`<BDUMeter
  belief={0.5}
  disbelief={0.2}
  uncertainty={0.3}
  size="lg"
  showValues
/>`}</code>
        </pre>
      </section>

      {/* Belief Card Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Belief Card</h2>
        <p className="text-muted-foreground">
          A card component for displaying belief information including title, description,
          status, observation counts, and the BDU meter visualization.
        </p>

        {/* Examples */}
        <div className="space-y-3">
          {sampleBeliefs.map((belief) => (
            <BeliefCard key={belief.id} {...belief} />
          ))}
        </div>

        {/* Status Variants */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Status Variants</h3>
            <div className="flex gap-3">
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                Active
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                Hypothesis
              </Badge>
              <Badge variant="outline" className="bg-muted text-muted-foreground border-muted">
                Archived
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Code Example */}
        <pre className="bg-card p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`<BeliefCard
  title="Cloud_e829 is tight"
  description="Player tends to play fewer hands and fold marginal holdings"
  status="Active"
  belief={0.5}
  disbelief={0.2}
  uncertainty={0.3}
  supporting={8}
  contradicting={2}
  k={1.0}
  onClick={() => console.log('clicked')}
/>`}</code>
        </pre>
      </section>

      {/* Props Tables */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Props</h2>

        {/* BDUMeter Props */}
        <div>
          <h3 className="text-lg font-semibold mb-3">BDUMeter</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-medium">Prop</th>
                  <th className="text-left py-2 pr-4 font-medium">Type</th>
                  <th className="text-left py-2 pr-4 font-medium">Default</th>
                  <th className="text-left py-2 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">belief</td>
                  <td className="py-2 pr-4 text-muted-foreground">number</td>
                  <td className="py-2 pr-4 text-muted-foreground">-</td>
                  <td className="py-2">Belief value (0-1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">disbelief</td>
                  <td className="py-2 pr-4 text-muted-foreground">number</td>
                  <td className="py-2 pr-4 text-muted-foreground">-</td>
                  <td className="py-2">Disbelief value (0-1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">uncertainty</td>
                  <td className="py-2 pr-4 text-muted-foreground">number</td>
                  <td className="py-2 pr-4 text-muted-foreground">-</td>
                  <td className="py-2">Uncertainty value (0-1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">size</td>
                  <td className="py-2 pr-4 text-muted-foreground">'sm' | 'md' | 'lg' | 'xl'</td>
                  <td className="py-2 pr-4 text-muted-foreground">'md'</td>
                  <td className="py-2">Size of the meter</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">showLabels</td>
                  <td className="py-2 pr-4 text-muted-foreground">boolean</td>
                  <td className="py-2 pr-4 text-muted-foreground">false</td>
                  <td className="py-2">Show labels above the meter</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">showValues</td>
                  <td className="py-2 pr-4 text-muted-foreground">boolean</td>
                  <td className="py-2 pr-4 text-muted-foreground">false</td>
                  <td className="py-2">Show values below the meter</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">fullWidth</td>
                  <td className="py-2 pr-4 text-muted-foreground">boolean</td>
                  <td className="py-2 pr-4 text-muted-foreground">false</td>
                  <td className="py-2">Expand to full container width</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* BeliefCard Props */}
        <div>
          <h3 className="text-lg font-semibold mb-3">BeliefCard</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-medium">Prop</th>
                  <th className="text-left py-2 pr-4 font-medium">Type</th>
                  <th className="text-left py-2 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">title</td>
                  <td className="py-2 pr-4 text-muted-foreground">string</td>
                  <td className="py-2">The belief title/name</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">description</td>
                  <td className="py-2 pr-4 text-muted-foreground">string</td>
                  <td className="py-2">Description of the belief</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">status</td>
                  <td className="py-2 pr-4 text-muted-foreground">'Active' | 'Hypothesis' | 'Archived'</td>
                  <td className="py-2">Current status of the belief</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">belief</td>
                  <td className="py-2 pr-4 text-muted-foreground">number</td>
                  <td className="py-2">Belief value (0-1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">disbelief</td>
                  <td className="py-2 pr-4 text-muted-foreground">number</td>
                  <td className="py-2">Disbelief value (0-1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">uncertainty</td>
                  <td className="py-2 pr-4 text-muted-foreground">number</td>
                  <td className="py-2">Uncertainty value (0-1)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">supporting</td>
                  <td className="py-2 pr-4 text-muted-foreground">number</td>
                  <td className="py-2">Count of supporting observations</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">contradicting</td>
                  <td className="py-2 pr-4 text-muted-foreground">number</td>
                  <td className="py-2">Count of contradicting observations</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">k</td>
                  <td className="py-2 pr-4 text-muted-foreground">number</td>
                  <td className="py-2">Prior weight parameter</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-primary">onClick</td>
                  <td className="py-2 pr-4 text-muted-foreground">() =&gt; void</td>
                  <td className="py-2">Click handler for the card</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-500/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-green-500 mb-3">Do</h3>
              <ul className="space-y-2 text-sm">
                <li>Use BDU meters to show subjective logic belief states</li>
                <li>Ensure belief + disbelief + uncertainty = 1.0</li>
                <li>Use color-coded supporting/contradicting counts</li>
                <li>Show uncertainty for new or unverified beliefs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-destructive/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-destructive mb-3">Don't</h3>
              <ul className="space-y-2 text-sm">
                <li>Don't use for simple true/false states</li>
                <li>Don't hide uncertainty when it's significant</li>
                <li>Don't use meters without context or labels</li>
                <li>Don't mix with standard progress bars</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

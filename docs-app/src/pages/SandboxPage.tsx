import { BeliefCardSquare } from '@/components/ui/belief-card-square'
import { CertaintyCardSquare } from '@/components/ui/certainty-card-square'
import { ReputationCardSquare } from '@/components/ui/reputation-card-square'
import { AssertionCardSquare } from '@/components/ui/assertion-card-square'

export function SandboxPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Sandbox</h1>
        <p className="text-lg text-muted-foreground">
          Sandbox area for testing WarmHub components. A work in progress.
        </p>
      </div>

      {/* Square Belief Card */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Belief Card (Square)</h2>
        <p className="text-muted-foreground">380x380px square format belief card with green/purple status accents.</p>

        <div className="flex flex-wrap gap-6">
          <BeliefCardSquare
            title="Cloud_e829 is tight"
            description="Player tends to play fewer hands and fold marginal holdings. This belief is based on observed betting patterns across multiple tournament sessions."
            status="Active"
            belief={0.5}
            disbelief={0.2}
            uncertainty={0.3}
            supporting={8}
            contradicting={2}
            k={1.0}
          />

          <BeliefCardSquare
            title="Float_cb8c is aggressive"
            description="Player shows tendencies toward aggressive betting patterns with frequent raises and continuation bets."
            status="Hypothesis"
            belief={0.3}
            disbelief={0.1}
            uncertainty={0.6}
            supporting={2}
            contradicting={0}
            k={0.5}
          />
        </div>
      </section>

      {/* Certainty Card */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certainty Card (Square)</h2>
        <p className="text-muted-foreground">
          Displays certainty score (belief − disbelief) on a -1 to +1 scale. Sky blue accent.
        </p>

        <div className="flex flex-wrap gap-6">
          <CertaintyCardSquare
            title="User prefers dark mode"
            description="Based on system settings and explicit user preferences detected across multiple sessions."
            belief={0.85}
            disbelief={0.05}
            uncertainty={0.1}
            source="PreferenceAgent"
            timestamp="2 hours ago"
          />

          <CertaintyCardSquare
            title="Connection is unstable"
            description="Network latency spikes detected but insufficient data to confirm persistent issue."
            belief={0.4}
            disbelief={0.3}
            uncertainty={0.3}
            source="NetworkMonitor"
            timestamp="5 mins ago"
          />

          <CertaintyCardSquare
            title="Query intent is malicious"
            description="Pattern analysis suggests potentially harmful intent but evidence is inconclusive."
            belief={0.2}
            disbelief={0.6}
            uncertainty={0.2}
            source="SecurityAgent"
            timestamp="1 min ago"
          />
        </div>
      </section>

      {/* Reputation Card */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Reputation Card (Square)</h2>
        <p className="text-muted-foreground">
          Displays source trustworthiness with trust/distrust/unknown BDU model. Amber accent.
        </p>

        <div className="flex flex-wrap gap-6">
          <ReputationCardSquare
            sourceName="SearchAgent_v2"
            sourceType="agent"
            description="Primary web search agent responsible for gathering external information and citations."
            belief={0.82}
            disbelief={0.08}
            uncertainty={0.1}
            assertionCount={1247}
            lastActivity="Just now"
          />

          <ReputationCardSquare
            sourceName="user_jane_doe"
            sourceType="user"
            description="Verified team member with edit permissions on workspace documents."
            belief={0.65}
            disbelief={0.05}
            uncertainty={0.3}
            assertionCount={89}
            lastActivity="3 days ago"
          />

          <ReputationCardSquare
            sourceName="LegacyAPI_v1"
            sourceType="tool"
            description="Deprecated API connector. Known issues with data freshness and occasional timeout errors."
            belief={0.25}
            disbelief={0.35}
            uncertainty={0.4}
            assertionCount={2103}
            lastActivity="2 weeks ago"
          />
        </div>
      </section>

      {/* Assertion Card */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Assertion Card (Square)</h2>
        <p className="text-muted-foreground">
          Displays factual claims with content, about tags, and source attribution. Teal accent.
        </p>

        <div className="flex flex-wrap gap-6">
          <AssertionCardSquare
            content="User prefers dark mode"
            about={['user-preferences', 'ui-settings']}
            belief={0.9}
            disbelief={0.05}
            uncertainty={0.05}
            source="PreferenceAgent"
            sourceType="agent"
            timestamp="2 hours ago"
          />

          <AssertionCardSquare
            content="Meeting scheduled for Thursday at 2pm"
            about={['calendar', 'scheduling', 'team-sync']}
            belief={0.95}
            disbelief={0.0}
            uncertainty={0.05}
            source="CalendarTool"
            sourceType="tool"
            timestamp="Yesterday"
          />

          <AssertionCardSquare
            content="Project deadline may need extension"
            about={['project-alpha', 'deadlines']}
            belief={0.4}
            disbelief={0.2}
            uncertainty={0.4}
            source="user_john"
            sourceType="user"
            timestamp="1 week ago"
          />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Visual Comparison</h2>
        <p className="text-muted-foreground">
          All four card types side by side for quick visual distinction.
        </p>

        <div className="flex flex-wrap gap-6">
          <BeliefCardSquare
            title="Sample Belief"
            description="Beliefs represent subjective opinions about the world with supporting/contradicting evidence tracking."
            status="Active"
            belief={0.7}
            disbelief={0.1}
            uncertainty={0.2}
            supporting={5}
            contradicting={1}
            k={1.0}
          />

          <CertaintyCardSquare
            title="Sample Certainty"
            description="Certainty cards show the derived certainty score (b-d) with a visual gauge from -1 to +1."
            belief={0.7}
            disbelief={0.1}
            uncertainty={0.2}
            source="SampleAgent"
            timestamp="Now"
          />

          <ReputationCardSquare
            sourceName="SampleSource"
            sourceType="agent"
            description="Reputation cards display trustworthiness of information sources using the BDU model."
            belief={0.7}
            disbelief={0.1}
            uncertainty={0.2}
            assertionCount={100}
            lastActivity="Now"
          />

          <AssertionCardSquare
            content="Sample assertion statement"
            about={['sample', 'example']}
            belief={0.7}
            disbelief={0.1}
            uncertainty={0.2}
            source="SampleSource"
            sourceType="agent"
            timestamp="Now"
          />
        </div>
      </section>
    </div>
  )
}

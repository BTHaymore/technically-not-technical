import { Badge } from '@/components/ui/badge'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
} from 'recharts'

// Sample data for charts
const areaData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
]

const barData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
]

const lineData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
]

const pieData = [
  { name: 'Chrome', value: 275, fill: 'var(--color-chrome)' },
  { name: 'Safari', value: 200, fill: 'var(--color-safari)' },
  { name: 'Firefox', value: 187, fill: 'var(--color-firefox)' },
  { name: 'Edge', value: 173, fill: 'var(--color-edge)' },
  { name: 'Other', value: 90, fill: 'var(--color-other)' },
]

const radialData = [
  { name: 'Progress', value: 75, fill: 'var(--color-progress)' },
]

// Chart configs
const areaChartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#4177a6',
  },
  mobile: {
    label: 'Mobile',
    color: '#E8636C',
  },
} satisfies ChartConfig

const barChartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#4177a6',
  },
  mobile: {
    label: 'Mobile',
    color: '#E8636C',
  },
} satisfies ChartConfig

const lineChartConfig = {
  revenue: {
    label: 'Revenue',
    color: '#10B981',
  },
  expenses: {
    label: 'Expenses',
    color: '#EF4444',
  },
} satisfies ChartConfig

const pieChartConfig = {
  chrome: {
    label: 'Chrome',
    color: '#4177a6',
  },
  safari: {
    label: 'Safari',
    color: '#E8636C',
  },
  firefox: {
    label: 'Firefox',
    color: '#F59E0B',
  },
  edge: {
    label: 'Edge',
    color: '#10B981',
  },
  other: {
    label: 'Other',
    color: '#64748B',
  },
} satisfies ChartConfig

const radialChartConfig = {
  progress: {
    label: 'Progress',
    color: '#4177a6',
  },
} satisfies ChartConfig

export function ChartsPage() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="secondary" className="mb-4">Components</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Charts & Graphs</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Data visualization components built with Recharts and styled for the WarmHub design system.
        </p>
      </div>

      {/* Area Chart */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Area Chart</h2>
        <p className="text-muted-foreground">
          Area charts show trends over time with filled areas. Great for visualizing cumulative data.
        </p>
        <div className="rounded-xl border bg-card p-6">
          <ChartContainer config={areaChartConfig} className="h-[300px] w-full">
            <AreaChart data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4177a6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4177a6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E8636C" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#E8636C" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="mobile"
                stackId="1"
                stroke="#E8636C"
                fill="url(#fillMobile)"
              />
              <Area
                type="monotone"
                dataKey="desktop"
                stackId="1"
                stroke="#4177a6"
                fill="url(#fillDesktop)"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </div>
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50 dark:bg-slate-950">
          <code>{`<ChartContainer config={chartConfig}>
  <AreaChart data={data}>
    <Area type="monotone" dataKey="value" fill="url(#gradient)" />
    <ChartTooltip content={<ChartTooltipContent />} />
  </AreaChart>
</ChartContainer>`}</code>
        </pre>
      </section>

      {/* Line Chart */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Line Chart</h2>
        <p className="text-muted-foreground">
          Line charts display trends and patterns in data over intervals.
        </p>
        <div className="rounded-xl border bg-card p-6">
          <ChartContainer config={lineChartConfig} className="h-[300px] w-full">
            <LineChart data={lineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ fill: '#10B981', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#EF4444"
                strokeWidth={2}
                dot={{ fill: '#EF4444', strokeWidth: 2 }}
              />
              <ChartLegend content={<ChartLegendContent />} />
            </LineChart>
          </ChartContainer>
        </div>
      </section>

      {/* Bar Chart */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Bar Chart</h2>
        <p className="text-muted-foreground">
          Bar charts compare quantities across categories.
        </p>
        <div className="rounded-xl border bg-card p-6">
          <ChartContainer config={barChartConfig} className="h-[300px] w-full">
            <BarChart data={barData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="desktop" fill="#4177a6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mobile" fill="#E8636C" radius={[4, 4, 0, 0]} />
              <ChartLegend content={<ChartLegendContent />} />
            </BarChart>
          </ChartContainer>
        </div>
      </section>

      {/* Stacked Bar Chart */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Stacked Bar Chart</h2>
        <p className="text-muted-foreground">
          Stacked bar charts show part-to-whole relationships within categories.
        </p>
        <div className="rounded-xl border bg-card p-6">
          <ChartContainer config={barChartConfig} className="h-[300px] w-full">
            <BarChart data={barData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="desktop" stackId="a" fill="#4177a6" radius={[0, 0, 0, 0]} />
              <Bar dataKey="mobile" stackId="a" fill="#E8636C" radius={[4, 4, 0, 0]} />
              <ChartLegend content={<ChartLegendContent />} />
            </BarChart>
          </ChartContainer>
        </div>
      </section>

      {/* Pie Chart */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Pie Chart</h2>
        <p className="text-muted-foreground">
          Pie charts show proportions of a whole. Best for 3-7 categories.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 font-medium">Standard Pie</h3>
            <ChartContainer config={pieChartConfig} className="mx-auto h-[250px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 font-medium">Donut Chart</h3>
            <ChartContainer config={pieChartConfig} className="mx-auto h-[250px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </div>
        </div>
      </section>

      {/* Radial Chart */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Radial / Progress Chart</h2>
        <p className="text-muted-foreground">
          Radial charts are great for showing progress or single metrics.
        </p>
        <div className="rounded-xl border bg-card p-6">
          <div className="mx-auto max-w-xs">
            <ChartContainer config={radialChartConfig} className="mx-auto h-[250px] w-full">
              <RadialBarChart
                data={radialData}
                startAngle={90}
                endAngle={90 + (360 * 0.75)}
                innerRadius={80}
                outerRadius={110}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  dataKey="value"
                  background
                  cornerRadius={10}
                  fill="#4177a6"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-foreground text-3xl font-bold"
                >
                  75%
                </text>
              </RadialBarChart>
            </ChartContainer>
          </div>
        </div>
      </section>

      {/* Chart Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Chart Colors</h2>
        <p className="text-muted-foreground">
          Use these colors from the design system for consistent data visualization.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Primary (Sky)', color: '#4177a6', var: 'chart-1' },
            { name: 'Blue', color: '#3B82F6', var: 'chart-2' },
            { name: 'Purple', color: '#8B5CF6', var: 'chart-3' },
            { name: 'Amber', color: '#F59E0B', var: 'chart-4' },
            { name: 'Pink', color: '#EC4899', var: 'chart-5' },
            { name: 'Emerald', color: '#10B981', var: 'chart-6' },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 rounded-lg border bg-card p-3">
              <div
                className="h-8 w-8 rounded"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{item.color}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-success-500/30 bg-success-50 p-4 dark:bg-success-500/10">
            <h3 className="font-medium text-success-600">Do</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Use consistent colors across related charts</li>
              <li>Include tooltips for detailed data</li>
              <li>Add legends when showing multiple data series</li>
              <li>Use appropriate chart types for data relationships</li>
            </ul>
          </div>
          <div className="rounded-lg border border-error-500/30 bg-error-50 p-4 dark:bg-error-500/10">
            <h3 className="font-medium text-error-600">Don't</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Don't use pie charts for more than 7 categories</li>
              <li>Don't truncate Y-axis to exaggerate trends</li>
              <li>Don't use 3D effects that distort data</li>
              <li>Don't overload charts with too many data series</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

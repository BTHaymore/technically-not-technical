import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ColorsPage } from '@/pages/foundations/ColorsPage'
import { TypographyPage } from '@/pages/foundations/TypographyPage'
import { SpacingPage } from '@/pages/foundations/SpacingPage'
import { ButtonPage } from '@/pages/components/ButtonPage'
import { InputPage } from '@/pages/components/InputPage'
import { CardPage } from '@/pages/components/CardPage'
import { BadgePage } from '@/pages/components/BadgePage'
import { TablePage } from '@/pages/components/TablePage'
import { AlertPage } from '@/pages/components/AlertPage'
import { ChartsPage } from '@/pages/components/ChartsPage'
import BeliefsPage from '@/pages/components/BeliefsPage'
import { HeroPage } from '@/pages/marketing/HeroPage'
import { FeaturesPage } from '@/pages/marketing/FeaturesPage'
import { WarmHubPage } from '@/pages/marketing/WarmHubPage'
import { DashboardTemplate } from '@/pages/templates/DashboardTemplate'
import { LandingTemplate } from '@/pages/templates/LandingTemplate'
import { SandboxPage } from '@/pages/SandboxPage'

function App() {
  return (
    <BrowserRouter basename="/design-system">
      <Routes>
        {/* Full-width marketing page (no sidebar) */}
        <Route path="marketing/warmhub" element={<WarmHubPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Foundations */}
          <Route path="foundations/colors" element={<ColorsPage />} />
          <Route path="foundations/typography" element={<TypographyPage />} />
          <Route path="foundations/spacing" element={<SpacingPage />} />

          {/* Components */}
          <Route path="components/button" element={<ButtonPage />} />
          <Route path="components/input" element={<InputPage />} />
          <Route path="components/card" element={<CardPage />} />
          <Route path="components/badge" element={<BadgePage />} />
          <Route path="components/table" element={<TablePage />} />
          <Route path="components/alert" element={<AlertPage />} />
          <Route path="components/charts" element={<ChartsPage />} />
          <Route path="components/beliefs" element={<BeliefsPage />} />

          {/* Marketing */}
          <Route path="marketing/hero" element={<HeroPage />} />
          <Route path="marketing/features" element={<FeaturesPage />} />

          {/* Templates */}
          <Route path="templates/dashboard" element={<DashboardTemplate />} />
          <Route path="templates/landing" element={<LandingTemplate />} />

          {/* Sandbox */}
          <Route path="sandbox" element={<SandboxPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

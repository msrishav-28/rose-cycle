import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import AiAgentChat from './pages/AiAgentChat';
import CalendarInsights from './pages/CalendarInsights';
import DailyLog from './pages/DailyLog';
import DoctorsReportExport from './pages/DoctorsReportExport';
import GuidedBreathwork from './pages/GuidedBreathwork';
import HomeDashboard from './pages/HomeDashboard';
import HormonalSkinTracker from './pages/HormonalSkinTracker';
import LutealWellnessPlan from './pages/LutealWellnessPlan';
import OnboardingSetup from './pages/OnboardingSetup';
import RosecycleLandinghtml from './pages/RosecycleLandinghtml';
import EnhancedLandingPageV2 from './pages/EnhancedLandingPageV2';
import SettingsPrivacy from './pages/SettingsPrivacy';
import WellnessEducationHub from './pages/WellnessEducationHub';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public: Landing pages (no auth required) */}
        <Route path='/' element={<EnhancedLandingPageV2 />} />
        <Route path='/v1' element={<RosecycleLandinghtml />} />

        {/* Auth-gated: Onboarding (requires sign-in but no Layout nav) */}
        <Route path='/onboarding' element={
          <ProtectedRoute>
            <OnboardingSetup />
          </ProtectedRoute>
        } />

        {/* Auth-gated: All app pages WITH navigation layout */}
        <Route element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route path='/home' element={<HomeDashboard />} />
          <Route path='/daily-log' element={<DailyLog />} />
          <Route path='/calendar-insights' element={<CalendarInsights />} />
          <Route path='/ai-agent-chat' element={<AiAgentChat />} />
          <Route path='/wellness-education-hub' element={<WellnessEducationHub />} />
          <Route path='/settings-privacy' element={<SettingsPrivacy />} />
          <Route path='/guided-breathwork' element={<GuidedBreathwork />} />
          <Route path='/hormonal-skin-tracker' element={<HormonalSkinTracker />} />
          <Route path='/luteal-wellness-plan' element={<LutealWellnessPlan />} />
          <Route path='/doctors-report-export' element={<DoctorsReportExport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

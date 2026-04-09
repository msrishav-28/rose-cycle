import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
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
import SettingsPrivacy from './pages/SettingsPrivacy';
import WellnessEducationHub from './pages/WellnessEducationHub';

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages without navigation layout */}
        <Route path='/' element={<RosecycleLandinghtml />} />
        <Route path='/onboarding-setup' element={<OnboardingSetup />} />
        
        {/* Pages WITH navigation layout */}
        <Route element={<Layout />}>
          <Route path='/ai-agent-chat' element={<AiAgentChat />} />
          <Route path='/calendar-insights' element={<CalendarInsights />} />
          <Route path='/daily-log' element={<DailyLog />} />
          <Route path='/doctors-report-export' element={<DoctorsReportExport />} />
          <Route path='/guided-breathwork' element={<GuidedBreathwork />} />
          <Route path='/home' element={<HomeDashboard />} />
          <Route path='/hormonal-skin-tracker' element={<HormonalSkinTracker />} />
          <Route path='/luteal-wellness-plan' element={<LutealWellnessPlan />} />
          <Route path='/settings-privacy' element={<SettingsPrivacy />} />
          <Route path='/wellness-education-hub' element={<WellnessEducationHub />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

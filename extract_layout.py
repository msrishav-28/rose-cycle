import os
import re
import glob

# Create Layout.jsx
layout_component = """import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  const getNavClasses = ({ isActive }) => 
    isActive 
      ? "flex flex-col items-center justify-center bg-[#F4C2C2]/20 text-[#F4C2C2] rounded-full px-5 py-2 active:scale-90 duration-300 ease-out"
      : "flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#F4C2C2] transition-colors active:scale-90 duration-300 ease-out";

  return (
    <div className="layout-wrapper">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-xl">
        <div className="font-['Instrument_Serif'] text-2xl text-[#F4C2C2] italic">RoseCycle</div>
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:opacity-80 transition-opacity scale-95 active:transition-transform">
            <span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
          </button>
          <button className="text-slate-400 hover:opacity-80 transition-opacity scale-95 active:transition-transform">
            <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          </button>
        </div>
      </nav>

      {/* Main Content Rendered Here */}
      <div className="pb-24">
        <Outlet />
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-t-[3rem] shadow-[0px_-12px_32px_rgba(244,194,194,0.1)]">
        <NavLink className={getNavClasses} to="/home">
          <span className="material-symbols-outlined" data-icon="home_health">home_health</span>
          <span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Home</span>
        </NavLink>
        <NavLink className={getNavClasses} to="/daily-log">
          <span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
          <span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Log</span>
        </NavLink>
        <NavLink className={getNavClasses} to="/calendar-insights">
          <span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
          <span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Calendar</span>
        </NavLink>
        <NavLink className={getNavClasses} to="/ai-agent-chat">
          <span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
          <span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Agent</span>
        </NavLink>
        <NavLink className={getNavClasses} to="/wellness-education-hub">
          <span className="material-symbols-outlined" data-icon="self_care">self_care</span>
          <span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Wellness</span>
        </NavLink>
      </nav>
    </div>
  );
}
"""

os.makedirs('frontend/src/components', exist_ok=True)
with open('frontend/src/components/Layout.jsx', 'w', encoding='utf-8') as f:
    f.write(layout_component)

app_js_path = 'frontend/src/App.jsx'
with open(app_js_path, 'r', encoding='utf-8') as f:
    app_js = f.read()

# Update App.js to wrap relevant routes in Layout
if "import Layout" not in app_js:
    app_js = app_js.replace("import { BrowserRouter", "import Layout from './components/Layout';\nimport { BrowserRouter")
    app_js = app_js.replace("<Routes>", "<Routes>\n        <Route element={<Layout />}>")
    
    # We want Landing Page (/) to NOT have the Layout maybe?
    # For now, let's just make it simple and put all inside Layout. Actually, landing page and onboarding shouldn't have BottomNav.
    # We can separate them:
    
    # Let's completely rewrite App.jsx for safety
    app_js = """import React from 'react';
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
"""
    with open(app_js_path, 'w', encoding='utf-8') as f:
        f.write(app_js)

# Strip navigation from all pages to avoid duplication
jsx_files = glob.glob('frontend/src/pages/*.jsx')

for file in jsx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Strip Top Nav
    content = re.sub(r'{\/\*\s*Top Navigation Bar\s*\*\/}.*?</nav>', '', content, flags=re.DOTALL | re.IGNORECASE)
    # Strip Bottom Nav
    content = re.sub(r'{\/\*\s*Bottom Navigation Bar\s*\*\/}.*?</nav>', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Navigation and layout fixed!")

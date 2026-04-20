import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
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
          <button onClick={() => navigate('/settings-privacy')} className="text-slate-400 hover:opacity-80 transition-opacity scale-95 active:transition-transform">
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

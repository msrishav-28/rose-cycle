import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import { API_BASE_URL } from '../lib/apiConfig';

export default function CalendarInsights() {
  const { getToken } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [logs, setLogs] = useState([]);
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  useEffect(() => {
    async function fetchLogs() {
      try {
        const token = await getToken();
        const res = await axios.get(`${API_BASE_URL}/logs`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setLogs(res.data);
      } catch (err) {
        console.error("Failed to fetch logs", err);
      }
    }
    fetchLogs();
  }, [getToken, month, year]);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);
  const today = new Date();

  // Helper to determine day styling
  const getDayClasses = (dayNum) => {
    const isToday = dayNum === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const isFuture = dayNum > today.getDate() && month >= today.getMonth();
    
    // Look up log
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}`;
    const log = logs.find(l => l.date === dateStr);

    let baseClass = "h-12 w-full flex flex-col items-center justify-center rounded-2xl ";
    let content = <span className={`serif-title text-lg ${isToday ? 'font-bold' : ''}`}>{dayNum}</span>;
    let icon = null;

    if (log) {
      if (log.flow && log.flow !== 'None') {
        baseClass += "bg-primary text-on-primary";
        icon = <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>;
      } else {
        baseClass += "bg-primary-container text-on-primary-container";
        if (log.mood === 'Tired') {
          icon = <span className="material-symbols-outlined text-[10px]">bedtime</span>;
        } else if (log.mood) {
          icon = <span className="material-symbols-outlined text-[10px]">mood</span>;
        }
      }
    } else {
      if (isFuture) {
        baseClass += "bg-surface-container-low opacity-60";
      } else {
        baseClass += "bg-surface-container-lowest border border-outline-variant/20";
      }
    }

    if (isToday) {
      baseClass = "h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low border-2 border-primary/40 ring-4 ring-primary/5";
    }

    return { baseClass, content, icon };
  };

  const handlePrev = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNext = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <>
      <div className="phase-bloom"></div>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-xl">
        <div className="font-['Instrument_Serif'] text-2xl text-[#F4C2C2] italic">RoseCycle</div>
        <div className="flex gap-4">
          <button className="hover:opacity-80 transition-opacity scale-95 active:transition-transform">
            <span className="material-symbols-outlined text-[#F4C2C2] text-lg">dark_mode</span>
          </button>
          <button className="hover:opacity-80 transition-opacity scale-95 active:transition-transform">
            <span className="material-symbols-outlined text-[#F4C2C2] text-lg">account_circle</span>
          </button>
        </div>
      </header>
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-12 pb-32">
        {/* Calendar Section */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="serif-title text-5xl leading-tight">Cycle Log</h1>
              <p className="text-on-surface-variant font-medium">{monthName}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={handlePrev} className="p-3 bg-surface-container rounded-full text-primary hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={handleNext} className="p-3 bg-surface-container rounded-full text-primary hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-7 gap-2 mb-4 text-center">
              {['S','M','T','W','T','F','S'].map((d,i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-2">
              {Array.from({ length: firstDayIndex }).map((_, i) => (
                <div key={`empty-${i}`} className="h-12 w-full"></div>
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const { baseClass, content, icon } = getDayClasses(dayNum);
                return (
                  <div key={`day-${dayNum}`} className={baseClass}>
                    {content}
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Insights Section (Static representation kept per design) */}
        <section className="space-y-6">
          <div className="flex items-baseline gap-3">
            <h2 className="serif-title text-3xl">Cycle Trends</h2>
            <span className="h-px flex-grow bg-outline-variant/30"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary text-on-primary p-6 rounded-xl relative overflow-hidden flex flex-col justify-between aspect-square">
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">System Confidence</p>
                  <div className="group relative">
                    <span className="material-symbols-outlined cursor-help text-lg opacity-80">info</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="serif-title text-6xl">92%</span>
                  <p className="font-medium mt-1">Accuracy</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <button className="w-full py-3 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/30 transition-colors">
                View Analytics
              </button>
            </div>
            <div className="surface-container p-6 rounded-xl flex flex-col justify-between aspect-square">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Cycle Length</p>
                <p className="serif-title text-2xl mt-1">28 Days Average</p>
              </div>
              <div className="relative h-24 flex items-end justify-between px-2 gap-1">
                <div className="w-2 bg-primary/20 rounded-t-full h-[60%]"></div>
                <div className="w-2 bg-primary/30 rounded-t-full h-[75%]"></div>
                <div className="w-2 bg-primary/20 rounded-t-full h-[65%]"></div>
                <div className="w-2 bg-primary rounded-t-full h-[70%]"></div>
                <div className="w-2 bg-primary/40 rounded-t-full h-[85%]"></div>
                <div className="w-2 bg-primary/30 rounded-t-full h-[60%]"></div>
                <div className="w-2 bg-primary/20 rounded-t-full h-[55%]"></div>
                <div className="w-2 bg-primary/40 rounded-t-full h-[70%]"></div>
              </div>
              <p className="text-xs text-on-surface-variant/60 text-center italic">Very consistent over 8 months</p>
            </div>
          </div>
        </section>
      </main>


    </>
  );
}

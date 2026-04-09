import React from 'react';
import { Link } from 'react-router-dom';

export default function CalendarInsights() {
  return (
    <>
      <div className="phase-bloom"></div>
{/*  TopNavBar  */}
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
<main className="pt-24 px-6 max-w-2xl mx-auto space-y-12">
{/*  Calendar Section  */}
<section>
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="serif-title text-5xl leading-tight">Cycle Log</h1>
<p className="text-on-surface-variant font-medium">May 2024</p>
</div>
<div className="flex gap-2">
<button className="p-3 bg-surface-container rounded-full text-primary hover:bg-primary-container/20 transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-3 bg-surface-container rounded-full text-primary hover:bg-primary-container/20 transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div className="glass-card rounded-xl p-6 shadow-sm">
<div className="grid grid-cols-7 gap-2 mb-4 text-center">
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">S</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">M</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">T</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">W</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">T</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">F</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">S</span>
</div>
<div className="grid grid-cols-7 gap-y-4 gap-x-2">
{/*  Calendar Days Mockup  */}
{/*  Offset for May 1st (Wednesday)  */}
<div className="h-12 w-full"></div>
<div className="h-12 w-full"></div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary text-on-primary">
<span className="serif-title text-lg">1</span>
<span className="material-symbols-outlined text-[10px]" >water_drop</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary text-on-primary">
<span className="serif-title text-lg">2</span>
<span className="material-symbols-outlined text-[10px]" >water_drop</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary text-on-primary">
<span className="serif-title text-lg">3</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary text-on-primary">
<span className="serif-title text-lg">4</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary-container text-on-primary-container">
<span className="serif-title text-lg">5</span>
</div>
{/*  Follicular Phase  */}
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary-container text-on-primary-container">
<span className="serif-title text-lg">6</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary-container text-on-primary-container">
<span className="serif-title text-lg">7</span>
<span className="material-symbols-outlined text-[10px]">mood</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary-container text-on-primary-container">
<span className="serif-title text-lg">8</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary-container text-on-primary-container">
<span className="serif-title text-lg">9</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary-container text-on-primary-container">
<span className="serif-title text-lg">10</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary-container text-on-primary-container">
<span className="serif-title text-lg">11</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-primary-container text-on-primary-container">
<span className="serif-title text-lg">12</span>
</div>
{/*  Ovulatory (White/Lowest)  */}
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-inner">
<span className="serif-title text-lg">13</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest border border-outline-variant/20">
<span className="serif-title text-lg font-bold">14</span>
<span className="material-symbols-outlined text-[10px] text-tertiary">flare</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest border border-outline-variant/20">
<span className="serif-title text-lg">15</span>
</div>
{/*  Luteal (Cream/Low)  */}
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low">
<span className="serif-title text-lg">16</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low">
<span className="serif-title text-lg">17</span>
<span className="material-symbols-outlined text-[10px]">bedtime</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low">
<span className="serif-title text-lg">18</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low">
<span className="serif-title text-lg">19</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low">
<span className="serif-title text-lg">20</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low">
<span className="serif-title text-lg">21</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low">
<span className="serif-title text-lg">22</span>
<span className="material-symbols-outlined text-[10px]">bolt</span>
</div>
{/*  Current and Future  */}
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low border-2 border-primary/40 ring-4 ring-primary/5">
<span className="serif-title text-lg font-bold">23</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low opacity-60">
<span className="serif-title text-lg">24</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low opacity-60">
<span className="serif-title text-lg">25</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low opacity-60">
<span className="serif-title text-lg">26</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low opacity-60">
<span className="serif-title text-lg">27</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl bg-surface-container-low opacity-60">
<span className="serif-title text-lg">28</span>
</div>
{/*  Predicted Menstrual  */}
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 text-primary opacity-40">
<span className="serif-title text-lg">29</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 text-primary opacity-40">
<span className="serif-title text-lg">30</span>
</div>
<div className="h-12 w-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 text-primary opacity-40">
<span className="serif-title text-lg">31</span>
</div>
</div>
</div>
</section>
{/*  Insights Section  */}
<section className="space-y-6">
<div className="flex items-baseline gap-3">
<h2 className="serif-title text-3xl">Cycle Trends</h2>
<span className="h-px flex-grow bg-outline-variant/30"></span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Prediction Accuracy  */}
<div className="bg-primary text-on-primary p-6 rounded-xl relative overflow-hidden flex flex-col justify-between aspect-square">
<div className="relative z-10">
<div className="flex justify-between items-start">
<p className="text-[10px] font-bold uppercase tracking-widest opacity-80">System Confidence</p>
<div className="group relative">
<span className="material-symbols-outlined cursor-help text-lg opacity-80">info</span>
{/*  Tooltip  */}
<div className="absolute bottom-full right-0 mb-2 w-48 p-3 bg-white text-on-surface text-[11px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Our AI models your biological markers to anticipate shifts before they happen. Log daily for even higher precision.
                </div>
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
{/*  Cycle Consistency Line Chart  */}
<div className="surface-container p-6 rounded-xl flex flex-col justify-between aspect-square">
<div>
<p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Cycle Length</p>
<p className="serif-title text-2xl mt-1">28 Days Average</p>
</div>
<div className="relative h-24 flex items-end justify-between px-2 gap-1">
{/*  Mock Sparkline  */}
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
{/*  Symptom Heatmap  */}
<div className="glass-card p-8 rounded-xl space-y-6">
<div className="flex justify-between items-center">
<h3 className="serif-title text-2xl">Symptom Heatmap</h3>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Last 90 Days</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<span className="w-24 text-xs font-bold text-on-surface-variant uppercase tracking-tight">Cramps</span>
<div className="flex-grow grid grid-cols-12 gap-1 h-3">
<div className="bg-primary rounded-sm opacity-20"></div>
<div className="bg-primary rounded-sm opacity-40"></div>
<div className="bg-primary rounded-sm opacity-100"></div>
<div className="bg-primary rounded-sm opacity-80"></div>
<div className="bg-primary rounded-sm opacity-20"></div>
<div className="bg-primary rounded-sm opacity-10"></div>
<div className="bg-primary rounded-sm opacity-20"></div>
<div className="bg-primary rounded-sm opacity-60"></div>
<div className="bg-primary rounded-sm opacity-90"></div>
<div className="bg-primary rounded-sm opacity-20"></div>
<div className="bg-primary rounded-sm opacity-10"></div>
<div className="bg-primary rounded-sm opacity-5"></div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="w-24 text-xs font-bold text-on-surface-variant uppercase tracking-tight">Mood Shift</span>
<div className="flex-grow grid grid-cols-12 gap-1 h-3">
<div className="bg-secondary rounded-sm opacity-10"></div>
<div className="bg-secondary rounded-sm opacity-20"></div>
<div className="bg-secondary rounded-sm opacity-10"></div>
<div className="bg-secondary rounded-sm opacity-30"></div>
<div className="bg-secondary rounded-sm opacity-60"></div>
<div className="bg-secondary rounded-sm opacity-100"></div>
<div className="bg-secondary rounded-sm opacity-80"></div>
<div className="bg-secondary rounded-sm opacity-40"></div>
<div className="bg-secondary rounded-sm opacity-10"></div>
<div className="bg-secondary rounded-sm opacity-20"></div>
<div className="bg-secondary rounded-sm opacity-50"></div>
<div className="bg-secondary rounded-sm opacity-10"></div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="w-24 text-xs font-bold text-on-surface-variant uppercase tracking-tight">Insomnia</span>
<div className="flex-grow grid grid-cols-12 gap-1 h-3">
<div className="bg-tertiary rounded-sm opacity-5"></div>
<div className="bg-tertiary rounded-sm opacity-5"></div>
<div className="bg-tertiary rounded-sm opacity-20"></div>
<div className="bg-tertiary rounded-sm opacity-10"></div>
<div className="bg-tertiary rounded-sm opacity-40"></div>
<div className="bg-tertiary rounded-sm opacity-50"></div>
<div className="bg-tertiary rounded-sm opacity-30"></div>
<div className="bg-tertiary rounded-sm opacity-20"></div>
<div className="bg-tertiary rounded-sm opacity-10"></div>
<div className="bg-tertiary rounded-sm opacity-80"></div>
<div className="bg-tertiary rounded-sm opacity-40"></div>
<div className="bg-tertiary rounded-sm opacity-10"></div>
</div>
</div>
</div>
<div className="flex gap-4 pt-4 border-t border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-[10px] font-bold text-on-surface-variant uppercase">Menstrual</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="text-[10px] font-bold text-on-surface-variant uppercase">Luteal Peak</span>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}

    </>
  );
}

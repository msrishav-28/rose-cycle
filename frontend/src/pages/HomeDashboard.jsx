import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeDashboard() {
  return (
    <>
      
{/*  Main Content Canvas  */}
<main className="min-h-screen pt-24 pb-32 px-6 max-w-5xl mx-auto space-y-12">
{/*  Background Bloom Decor  */}
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full phase-bloom -z-10 pointer-events-none"></div>
{/*  Top Section: Morning Briefing  */}
<section className="w-full">
<div className="glass-card p-8 rounded-xl shadow-[0px_12px_32px_rgba(29,27,27,0.04)] relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
<div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container text-3xl" data-icon="smart_toy">smart_toy</span>
</div>
<div>
<p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2">Morning Briefing</p>
<h1 className="font-['Instrument_Serif'] text-3xl md:text-4xl text-on-surface leading-tight">
                            Good morning! You're on <span className="text-primary italic">Cycle Day 14</span> (Ovulatory Phase). Energy is high—great time for that HIIT workout or a social event.
                        </h1>
</div>
</div>
<div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
</div>
</section>
{/*  Middle Section: Phase Wheel & Proactive Insight  */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
{/*  Phase Wheel (Left)  */}
<div className="md:col-span-7 surface-container p-10 rounded-xl flex flex-col items-center justify-center relative min-h-[400px]">
<div className="text-center mb-8">
<h2 className="font-['Instrument_Serif'] text-5xl mb-1">Day 14</h2>
<p className="font-label text-sm text-outline tracking-wider uppercase">Ovulatory Phase</p>
</div>
<div className="relative w-64 h-64">
{/*  Circular Wheel Representation  */}
<svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
{/*  Background track  */}
<circle className="text-surface-container-highest" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="2"/>
{/*  Menstrual Phase (Days 1-5)  */}
<path d="M 50,5 A 45,45 0 0,1 86,23" fill="none" stroke="#8e4a4b" strokeLinecap="round" strokeWidth="4"/>
{/*  Follicular (Days 6-13)  */}
<path d="M 86,23 A 45,45 0 0,1 86,77" fill="none" stroke="#ceeacf" strokeLinecap="round" strokeWidth="4"/>
{/*  Ovulation (Day 14) - Active Point  */}
<circle className="shadow-lg" cx="95" cy="50" fill="#8e4a4b" r="5"/>
{/*  Luteal (Days 15-28)  */}
<path d="M 86,77 A 45,45 0 1,1 50,5" fill="none" stroke="#ffbccc" strokeLinecap="round" strokeWidth="4"/>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface shadow-xl">
<img className="w-full h-full object-cover" data-alt="abstract artistic illustration of a blooming flower with soft organic shapes in blush and peach tones representing vitality" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7TyOcKuHKuPDV9ZiM_CabrTcBeAuVtCA7GB7tQLxIEvyZ52TKsSFvYvls0N51FJXLdL86esYlzFohEPmbescRq4q-g5nOL_aeb-lnqoqRfNYC0_5XykHtwt35MFze978TL5YkSv5OwxuajRYUpyvGRxNUWl422cP7y0Cnhsrln_7xeXR3rbANurfOwhRHKgiSYDQSfIpO0J8k0jh9qkBpCuz8Kq4yRWj96Q1YHoHqiiXT5vPATGmMu5Xrlvchu2DYBDs0_-TOO-o"/>
</div>
</div>
</div>
<div className="mt-8 flex gap-6">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-xs font-semibold uppercase text-on-surface-variant">Active</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary-container"></span>
<span className="text-xs font-semibold uppercase text-on-surface-variant">Coming Up</span>
</div>
</div>
</div>
{/*  Proactive Insight (Right)  */}
<div className="md:col-span-5 space-y-8">
<div className="bg-secondary-container p-8 rounded-xl relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary" data-icon="auto_awesome">auto_awesome</span>
<h3 className="font-bold text-on-secondary-container">Proactive Insight</h3>
</div>
<p className="text-secondary leading-relaxed mb-6">
                            Your last 3 cycles have been very regular. Based on your logs, you might experience mild skin changes in 4 days.
                        </p>
<button className="bg-on-secondary-container text-surface-container-lowest px-6 py-3 rounded-full text-sm font-bold tracking-wide">
                            Skin Care Tips
                        </button>
</div>
<div className="absolute -bottom-6 -right-6 opacity-10 text-secondary scale-[3]">
<span className="material-symbols-outlined text-9xl" data-icon="spa">spa</span>
</div>
</div>
{/*  Secondary Support Card  */}
<div className="surface-container p-6 rounded-xl flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="calendar_month">calendar_month</span>
</div>
<div>
<p className="text-xs font-label text-outline uppercase tracking-wider">Next Cycle Starts</p>
<p className="font-bold text-on-surface">Sept 28 • 14 days left</p>
</div>
</div>
</div>
</section>
{/*  Bottom Section: Quick Log Widgets  */}
<section className="space-y-6">
<h3 className="font-['Instrument_Serif'] text-2xl italic px-2">Quick Log</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Flow Widget  */}
<div className="surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-primary" data-icon="water_drop">water_drop</span>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity" data-icon="add">add</span>
</div>
<p className="font-bold text-lg mb-1">Flow</p>
<p className="text-sm text-on-surface-variant">None reported yet</p>
</div>
{/*  Mood Emoji Grid  */}
<div className="surface-container-low p-6 rounded-xl">
<p className="font-bold text-lg mb-4">Mood</p>
<div className="grid grid-cols-4 gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest hover:bg-primary-container transition-colors text-xl">😊</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-container text-xl shadow-sm border-2 border-primary/20">✨</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest hover:bg-primary-container transition-colors text-xl">😌</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest hover:bg-primary-container transition-colors text-xl">😴</button>
</div>
</div>
{/*  Pain Widget  */}
<div className="surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-tertiary" data-icon="bolt">bolt</span>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity" data-icon="add">add</span>
</div>
<p className="font-bold text-lg mb-1">Pain</p>
<div className="flex gap-1 mt-2">
<span className="w-full h-1.5 rounded-full bg-surface-container-highest"></span>
<span className="w-full h-1.5 rounded-full bg-surface-container-highest"></span>
<span className="w-full h-1.5 rounded-full bg-surface-container-highest"></span>
<span className="w-full h-1.5 rounded-full bg-surface-container-highest"></span>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}

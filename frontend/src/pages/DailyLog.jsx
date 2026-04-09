import React from 'react';
import { Link } from 'react-router-dom';

export default function DailyLog() {
  return (
    <>
      {/*  TopNavBar  */}

{/*  Main Content Canvas  */}
<main className="pt-24 px-6 max-w-2xl mx-auto space-y-10">
{/*  Header Section  */}
<header className="space-y-2">
<h1 className="font-['Instrument_Serif'] text-[3.5rem] leading-tight text-on-surface">How are you feeling today?</h1>
<p className="text-primary font-['Instrument_Serif'] text-xl italic opacity-80">Monday, May 15th</p>
</header>
{/*  Logging Form Section: Flow  */}
<section className="space-y-6">
<h2 className="font-headline text-2xl text-on-surface-variant">Flow</h2>
<div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar py-2">
{/*  None  */}
<button className="flex flex-col items-center gap-3 p-4 min-w-[80px] rounded-xl bg-surface-container-low hover:bg-primary-container/20 transition-colors">
<span className="material-symbols-outlined text-outline">water_drop</span>
<span className="text-[10px] font-semibold uppercase tracking-wider text-outline">None</span>
</button>
{/*  Light  */}
<button className="flex flex-col items-center gap-3 p-4 min-w-[80px] rounded-xl bg-surface-container-low hover:bg-primary-container/20 transition-colors">
<span className="material-symbols-outlined text-primary/60">water_drop</span>
<span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">Light</span>
</button>
{/*  Medium  */}
<button className="flex flex-col items-center gap-3 p-4 min-w-[80px] rounded-xl bg-primary-container/40 border border-primary/10">
<span className="material-symbols-outlined text-primary" >water_drop</span>
<span className="text-[10px] font-semibold uppercase tracking-wider text-primary">Medium</span>
</button>
{/*  Heavy  */}
<button className="flex flex-col items-center gap-3 p-4 min-w-[80px] rounded-xl bg-surface-container-low hover:bg-primary-container/20 transition-colors">
<div className="relative">
<span className="material-symbols-outlined text-primary/80">water_drop</span>
<span className="material-symbols-outlined absolute -right-2 text-primary/80">water_drop</span>
</div>
<span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">Heavy</span>
</button>
{/*  Very Heavy  */}
<button className="flex flex-col items-center gap-3 p-4 min-w-[80px] rounded-xl bg-surface-container-low hover:bg-primary-container/20 transition-colors">
<span className="material-symbols-outlined text-primary" >blood_pressure</span>
<span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">V. Heavy</span>
</button>
</div>
</section>
{/*  Pain Slider Section  */}
<section className="space-y-6">
<div className="flex justify-between items-end">
<h2 className="font-headline text-2xl text-on-surface-variant">Pain Level</h2>
<span className="font-['Instrument_Serif'] text-3xl text-primary">4/10</span>
</div>
<div className="px-2">
<input className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary" max="10" min="1" type="range" value="4"/>
<div className="flex justify-between mt-4 text-2xl">
<span>😊</span>
<span>😐</span>
<span>😟</span>
<span>😫</span>
</div>
</div>
</section>
{/*  Mood Grid  */}
<section className="space-y-6">
<h2 className="font-headline text-2xl text-on-surface-variant">Mood</h2>
<div className="grid grid-cols-3 gap-4">
<button className="glass-card p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors">
<span className="text-3xl">✨</span>
<span className="text-xs font-semibold text-on-surface-variant">Happy</span>
</button>
<button className="glass-card p-6 rounded-xl flex flex-col items-center gap-2 bg-secondary-container">
<span className="text-3xl">😴</span>
<span className="text-xs font-semibold text-on-secondary-container">Tired</span>
</button>
<button className="glass-card p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors">
<span className="text-3xl">🌪️</span>
<span className="text-xs font-semibold text-on-surface-variant">Anxious</span>
</button>
<button className="glass-card p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors">
<span className="text-3xl">☁️</span>
<span className="text-xs font-semibold text-on-surface-variant">Calm</span>
</button>
<button className="glass-card p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors">
<span className="text-3xl">🍕</span>
<span className="text-xs font-semibold text-on-surface-variant">Cravings</span>
</button>
<button className="glass-card p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors">
<span className="text-3xl">🥺</span>
<span className="text-xs font-semibold text-on-surface-variant">Sensitive</span>
</button>
<button className="glass-card p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors">
<span className="text-3xl">⚡️</span>
<span className="text-xs font-semibold text-on-surface-variant">Energetic</span>
</button>
<button className="glass-card p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors">
<span className="text-3xl">🧘‍♀️</span>
<span className="text-xs font-semibold text-on-surface-variant">Focused</span>
</button>
<button className="glass-card p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-secondary-container transition-colors">
<span className="text-3xl">🫠</span>
<span className="text-xs font-semibold text-on-surface-variant">Overwhelmed</span>
</button>
</div>
</section>
{/*  Symptoms Horizontal List  */}
<section className="space-y-6">
<h2 className="font-headline text-2xl text-on-surface-variant">Symptoms</h2>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<button className="px-6 py-3 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium whitespace-nowrap border border-transparent active:border-primary/20">Cramps</button>
<button className="px-6 py-3 rounded-full bg-primary text-on-primary text-sm font-medium whitespace-nowrap shadow-sm">Bloating</button>
<button className="px-6 py-3 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium whitespace-nowrap">Acne</button>
<button className="px-6 py-3 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium whitespace-nowrap">Headache</button>
<button className="px-6 py-3 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium whitespace-nowrap">Nausea</button>
<button className="px-6 py-3 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium whitespace-nowrap">Backache</button>
</div>
</section>
{/*  Notes Section  */}
<section className="space-y-6">
<h2 className="font-headline text-2xl text-on-surface-variant">Journal thoughts</h2>
<textarea className="w-full min-h-[160px] p-6 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-lowest text-on-surface placeholder:text-outline/60 resize-none font-body" placeholder="How's your mind today? Write it down here..."></textarea>
</section>
{/*  Save Button  */}
<section className="pt-4">
<button className="w-full py-5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg shadow-[0px_8px_24px_rgba(142,74,75,0.25)] hover:opacity-90 active:scale-[0.98] transition-all">
                Save Entry
            </button>
</section>
</main>
{/*  BottomNavBar  */}

{/*  Decorative Background Bloom  */}
<div className="fixed top-[-10%] right-[-10%] w-[60%] h-[40%] bg-primary-container/20 blur-[120px] -z-10 rounded-full"></div>
<div className="fixed bottom-[-5%] left-[-10%] w-[50%] h-[30%] bg-secondary-container/30 blur-[100px] -z-10 rounded-full"></div>
    </>
  );
}

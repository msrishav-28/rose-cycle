import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OnboardingSetup() {
  const navigate = useNavigate();
  const [mode, setMode] = useState(null); // 'teen' or 'adult'
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [regularity, setRegularity] = useState('Yes');
  const [goals, setGoals] = useState(['Wellness & Balance']);
  const [anonymous, setAnonymous] = useState(true);

  const toggleGoal = (goal) => {
    setGoals(prev => prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]);
  };

  const handleComplete = () => {
    // In a real app, POST this data to the backend
    navigate('/home');
  };

  const displayDate = lastPeriodDate 
    ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(new Date(lastPeriodDate))
    : 'Select a date';

  return (
    <>
      <div className="phase-bloom"></div>
{/*  Top Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-xl">
<div className="font-['Instrument_Serif'] text-2xl text-[#F4C2C2] italic">RoseCycle</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-slate-400 hover:opacity-80 transition-opacity cursor-pointer">dark_mode</span>
<span className="material-symbols-outlined text-slate-400 hover:opacity-80 transition-opacity cursor-pointer">account_circle</span>
</div>
</nav>
{/*  Main Content Canvas  */}
<main className="w-full max-w-2xl px-6 pt-32 pb-40 flex flex-col mx-auto">
{/*  Welcome Header  */}
<header className="mb-12">
<h1 className="serif-text text-6xl leading-tight mb-4 text-on-surface">Welcome to your <br/><span className="italic text-primary">sanctuary</span>.</h1>
<p className="text-on-surface-variant text-lg max-w-md">Let's create a personalized experience that respects your rhythm and privacy.</p>
</header>
{/*  Onboarding Flow Steps  */}
<section className="space-y-16">
{/*  Step 1: Age Context (Teen vs Adult)  */}
<div className="space-y-6">
<div className="flex items-center gap-2">
<span className="serif-text text-2xl text-primary">01</span>
<span className="font-label text-xs uppercase tracking-widest text-outline">Context</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<button onClick={() => setMode('teen')} className={`group relative overflow-hidden rounded-xl p-8 text-left transition-all border-none focus:ring-2 focus:ring-primary/20 ${mode === 'teen' ? 'bg-surface-container-highest ring-2 ring-primary/40 shadow-xl shadow-primary/5' : 'bg-surface-container hover:bg-surface-container-high'}`}>
<span className="material-symbols-outlined text-secondary text-4xl mb-4" data-icon="auto_awesome">auto_awesome</span>
<h3 className="serif-text text-2xl mb-2">Teen Mode</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">Privacy-first, educational guidance for younger cycles.</p>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-9xl" data-icon="face_6">face_6</span>
</div>
</button>
<button onClick={() => setMode('adult')} className={`group relative overflow-hidden rounded-xl p-8 text-left transition-all border-none focus:ring-2 focus:ring-primary/20 ${mode === 'adult' ? 'bg-surface-container-highest ring-2 ring-primary/40 shadow-xl shadow-primary/5' : 'bg-surface-container hover:bg-surface-container-high'}`}>
<span className="material-symbols-outlined text-primary text-4xl mb-4" data-icon="spa" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
<h3 className="serif-text text-2xl mb-2">Adult Mode</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">Comprehensive tracking with deeper clinical insights.</p>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-9xl" data-icon="person_4">person_4</span>
</div>
</button>
</div>
</div>
{/*  Step 2: Cycle History (Organic Inputs)  */}
<div className="space-y-8">
<div className="flex items-center gap-2">
<span className="serif-text text-2xl text-primary">02</span>
<span className="font-label text-xs uppercase tracking-widest text-outline">Your Rhythm</span>
</div>
<div className="bg-surface-container rounded-xl p-8 space-y-10">
{/*  Date Picker  */}
<div className="space-y-4">
<label className="font-label text-sm text-on-surface-variant">When did your last period start?</label>
<div className="flex items-baseline gap-4 border-b border-outline-variant/30 pb-2">
<span className="serif-text text-4xl text-primary">{displayDate}</span>
<label className="cursor-pointer">
  <span className="material-symbols-outlined text-outline" data-icon="calendar_today">calendar_today</span>
  <input type="date" className="sr-only" value={lastPeriodDate} onChange={(e) => setLastPeriodDate(e.target.value)} />
</label>
</div>
</div>
{/*  Sliders / Numeric Inputs  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-4">
<label className="font-label text-sm text-on-surface-variant">Typical length (Days)</label>
<div className="flex items-center justify-between">
<span className="serif-text text-5xl">{cycleLength}</span>
<div className="flex gap-2">
<button onClick={() => setCycleLength(Math.max(20, cycleLength - 1))} className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary"><span className="material-symbols-outlined" data-icon="remove">remove</span></button>
<button onClick={() => setCycleLength(Math.min(45, cycleLength + 1))} className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary"><span className="material-symbols-outlined" data-icon="add">add</span></button>
</div>
</div>
</div>
<div className="space-y-4">
<label className="font-label text-sm text-on-surface-variant">Is it regular?</label>
<div className="flex bg-surface-container-high p-1 rounded-full">
{['Yes', 'Mostly', 'No'].map(opt => (
  <button key={opt} onClick={() => setRegularity(opt)} className={`flex-1 py-2 text-sm font-semibold rounded-full transition-colors ${regularity === opt ? 'bg-surface-lowest shadow-sm' : 'text-on-surface-variant'}`}>{opt}</button>
))}
</div>
</div>
</div>
</div>
</div>
{/*  Step 3: Goals Bento Grid  */}
<div className="space-y-6">
<div className="flex items-center gap-2">
<span className="serif-text text-2xl text-primary">03</span>
<span className="font-label text-xs uppercase tracking-widest text-outline">Aspirations</span>
</div>
<div className="grid grid-cols-6 gap-4">
<button onClick={() => toggleGoal('Wellness & Balance')} className={`col-span-6 md:col-span-3 p-6 rounded-xl relative group cursor-pointer overflow-hidden transition-colors ${goals.includes('Wellness & Balance') ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container hover:bg-surface-container-high'}`}>
<span className="material-symbols-outlined text-4xl mb-4" data-icon="eco">eco</span>
<h4 className="font-bold text-xl mb-1">Wellness &amp; Balance</h4>
<p className="text-sm opacity-80">Cycle-syncing your lifestyle for energy.</p>
{goals.includes('Wellness & Balance') && <div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-widest">Selected <span className="material-symbols-outlined text-xs" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></div>}
</button>
<button onClick={() => toggleGoal('PCOS/Health')} className={`col-span-3 md:col-span-3 p-6 rounded-xl cursor-pointer transition-all ${goals.includes('PCOS/Health') ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container hover:bg-surface-container-high'}`}>
<span className="material-symbols-outlined text-4xl text-tertiary mb-4" data-icon="health_metrics">health_metrics</span>
<h4 className="font-bold text-lg mb-1">PCOS/Health</h4>
<p className="text-xs text-on-surface-variant">Track symptoms for clinical clarity.</p>
{goals.includes('PCOS/Health') && <div className="mt-2 flex items-center gap-1 text-xs font-bold uppercase tracking-widest">Selected <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></div>}
</button>
<button onClick={() => toggleGoal('Mood')} className={`col-span-3 md:col-span-2 p-6 rounded-xl cursor-pointer transition-all ${goals.includes('Mood') ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container hover:bg-surface-container-high'}`}>
<span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon="psychology_alt">psychology_alt</span>
<h4 className="font-bold text-lg mb-1">Mood</h4>
{goals.includes('Mood') && <div className="mt-2 flex items-center gap-1 text-xs font-bold uppercase tracking-widest">Selected <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></div>}
</button>
<button onClick={() => toggleGoal('Symptom Logging')} className={`col-span-6 md:col-span-4 p-6 rounded-xl flex items-center gap-6 cursor-pointer transition-all ${goals.includes('Symptom Logging') ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container hover:bg-surface-container-high'}`}>
<div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="close-up of soft pink rose petals with morning dew for a calming floral aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHwLLt6vk0uQUGHFfd8MucJeoDs3xQSNUutjTrsyayToE89p7mw6E1MGvqNJysUK2qdfYrN9e7FTmJ3Wii8m0X_xlQlRrBK9sx5XXuQro8bJ_4jrLWPjkNWsMQXqz9kcLLT2fOKDM-LFb2mHAUqGRniaKnAPeE0fZScs0TJfJju6IIWRti6zbczlfD2MwwJ8qyXEpkYnflMOhi9mZmNyLvSG52g018t23azHzGbfcmu0F4dLZeMbZYUF9xkw8ZXqEsEo1d3mZG1K0"/>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Symptom Logging</h4>
<p className="text-sm text-on-surface-variant">Simple tracking for daily awareness.</p>
{goals.includes('Symptom Logging') && <div className="mt-2 flex items-center gap-1 text-xs font-bold uppercase tracking-widest">Selected <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></div>}
</div>
</button>
</div>
</div>
{/*  Step 4: Privacy / Anonymous Mode  */}
<div className="space-y-6">
<div className="flex items-center gap-2">
<span className="serif-text text-2xl text-primary">04</span>
<span className="font-label text-xs uppercase tracking-widest text-outline">Privacy</span>
</div>
<div className="glass border-outline-variant/15 border rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
<div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="fingerprint">fingerprint</span>
</div>
<div className="flex-1 text-center md:text-left">
<h4 className="serif-text text-2xl mb-2">Anonymous Mode</h4>
<p className="text-on-surface-variant leading-relaxed mb-4">No email, no name, no trackers. Your data stays only on this device, encrypted and hidden from prying eyes.</p>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
<span className="ml-3 text-sm font-medium text-secondary">{anonymous ? 'Secured & Active' : 'Disabled'}</span>
</label>
</div>
</div>
</div>
{/*  Action Button  */}
<div className="pt-8 flex flex-col items-center gap-6">
<button onClick={handleComplete} className="w-full md:w-auto px-12 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                    Enter the Sanctuary
                </button>
<p className="text-xs text-outline text-center">By continuing, you agree to our <span className="underline">Ethical Privacy Pledge</span></p>
</div>
</section>
</main>
{/*  Modal Backdrop Blur Effect for background depth  */}
<div className="fixed top-1/2 left-1/4 -z-20 w-96 h-96 bg-tertiary-fixed opacity-30 blur-[100px]"></div>
<div className="fixed bottom-1/4 right-1/4 -z-20 w-96 h-96 bg-secondary-fixed opacity-30 blur-[100px]"></div>
    </>
  );
}

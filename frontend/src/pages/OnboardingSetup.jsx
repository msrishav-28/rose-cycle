import React from 'react';
import { Link } from 'react-router-dom';

export default function OnboardingSetup() {
  return (
    <>
      <div className="phase-bloom"></div>

{/*  Main Content Canvas  */}
<main className="w-full max-w-2xl px-6 pt-32 pb-40 flex flex-col">
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
<button className="group relative overflow-hidden bg-surface-container rounded-xl p-8 text-left transition-all hover:bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20">
<span className="material-symbols-outlined text-secondary text-4xl mb-4" data-icon="auto_awesome">auto_awesome</span>
<h3 className="serif-text text-2xl mb-2">Teen Mode</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">Privacy-first, educational guidance for younger cycles.</p>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-9xl" data-icon="face_6">face_6</span>
</div>
</button>
<button className="group relative overflow-hidden bg-surface-container-highest rounded-xl p-8 text-left transition-all hover:bg-surface-container-high border-none ring-2 ring-primary/40 shadow-xl shadow-primary/5">
<span className="material-symbols-outlined text-primary text-4xl mb-4" data-icon="spa" >spa</span>
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
{/*  Date Picker Placeholder  */}
<div className="space-y-4">
<label className="font-label text-sm text-on-surface-variant">When did your last period start?</label>
<div className="flex items-baseline gap-4 border-b border-outline-variant/30 pb-2">
<span className="serif-text text-4xl text-primary">January 14</span>
<span className="material-symbols-outlined text-outline cursor-pointer" data-icon="calendar_today">calendar_today</span>
</div>
</div>
{/*  Sliders / Numeric Inputs  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-4">
<label className="font-label text-sm text-on-surface-variant">Typical length (Days)</label>
<div className="flex items-center justify-between">
<span className="serif-text text-5xl">28</span>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary"><span className="material-symbols-outlined" data-icon="remove">remove</span></button>
<button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary"><span className="material-symbols-outlined" data-icon="add">add</span></button>
</div>
</div>
</div>
<div className="space-y-4">
<label className="font-label text-sm text-on-surface-variant">Is it regular?</label>
<div className="flex bg-surface-container-high p-1 rounded-full">
<button className="flex-1 py-2 text-sm font-semibold rounded-full bg-surface-lowest shadow-sm">Yes</button>
<button className="flex-1 py-2 text-sm font-semibold text-on-surface-variant">Mostly</button>
<button className="flex-1 py-2 text-sm font-semibold text-on-surface-variant">No</button>
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
<div className="col-span-6 md:col-span-3 bg-secondary-container text-on-secondary-container p-6 rounded-xl relative group cursor-pointer overflow-hidden">
<span className="material-symbols-outlined text-4xl mb-4" data-icon="eco">eco</span>
<h4 className="font-bold text-xl mb-1">Wellness &amp; Balance</h4>
<p className="text-sm opacity-80">Cycle-syncing your lifestyle for energy.</p>
<div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-widest">Selected <span className="material-symbols-outlined text-xs" data-icon="check_circle" >check_circle</span></div>
</div>
<div className="col-span-3 md:col-span-3 bg-surface-container p-6 rounded-xl cursor-pointer hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-4xl text-tertiary mb-4" data-icon="health_metrics">health_metrics</span>
<h4 className="font-bold text-lg mb-1">PCOS/Health</h4>
<p className="text-xs text-on-surface-variant">Track symptoms for clinical clarity.</p>
</div>
<div className="col-span-3 md:col-span-2 bg-surface-container p-6 rounded-xl cursor-pointer hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon="psychology_alt">psychology_alt</span>
<h4 className="font-bold text-lg mb-1">Mood</h4>
</div>
<div className="col-span-6 md:col-span-4 bg-surface-container p-6 rounded-xl flex items-center gap-6 cursor-pointer hover:bg-surface-container-high transition-all">
<div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="close-up of soft pink rose petals with morning dew for a calming floral aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHwLLt6vk0uQUGHFfd8MucJeoDs3xQSNUutjTrsyayToE89p7mw6E1MGvqNJysUK2qdfYrN9e7FTmJ3Wii8m0X_xlQlRrBK9sx5XXuQro8bJ_4jrLWPjkNWsMQXqz9kcLLT2fOKDM-LFb2mHAUqGRniaKnAPeE0fZScs0TJfJju6IIWRti6zbczlfD2MwwJ8qyXEpkYnflMOhi9mZmNyLvSG52g018t23azHzGbfcmu0F4dLZeMbZYUF9xkw8ZXqEsEo1d3mZG1K0"/>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Symptom Logging</h4>
<p className="text-sm text-on-surface-variant">Simple tracking for daily awareness.</p>
</div>
</div>
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
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
<span className="ml-3 text-sm font-medium text-secondary">Secured &amp; Active</span>
</label>
</div>
</div>
</div>
{/*  Action Button  */}
<div className="pt-8 flex flex-col items-center gap-6">
<button className="w-full md:w-auto px-12 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                    Enter the Sanctuary
                </button>
<p className="text-xs text-outline text-center">By continuing, you agree to our <span className="underline">Ethical Privacy Pledge</span></p>
</div>
</section>
</main>
{/*  Suppressed BottomNavBar for Transactional Flow as per Shell visibility & Relevance Rule  */}
{/*  However, to follow the instructions about the BottomNavBar existence, I will render it only if it were "Home" or "Calendar" page.  */}
{/*  Since this is an Onboarding flow, the Navigation Shell is suppressed to prioritize focus.  */}
{/*  Modal Backdrop Blur Effect for background depth  */}
<div className="fixed top-1/2 left-1/4 -z-20 w-96 h-96 bg-tertiary-fixed opacity-30 blur-[100px]"></div>
<div className="fixed bottom-1/4 right-1/4 -z-20 w-96 h-96 bg-secondary-fixed opacity-30 blur-[100px]"></div>
    </>
  );
}

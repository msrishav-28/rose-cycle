import React from 'react';
import { Link } from 'react-router-dom';

export default function HormonalSkinTracker() {
  return (
    <>
      {/*  TopNavBar  */}
<header className="bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 w-full">
<div className="font-['Instrument_Serif'] italic text-2xl text-stone-800 dark:text-stone-100">RoseCycle</div>
<div className="flex items-center gap-4">
<button className="hover:opacity-70 transition-opacity text-stone-500">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
<button className="hover:opacity-70 transition-opacity text-stone-500">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-2xl mx-auto phase-bloom-bg min-h-screen">
{/*  Header Section  */}
<section className="mb-10">
<h1 className="font-headline text-[3.5rem] leading-tight text-on-surface mb-2">Skin Sanctuary</h1>
<p className="text-on-surface-variant font-medium opacity-80">Day 14 • Ovulation Phase</p>
</section>
{/*  AI Tip Card (The "Skin Care Tip" Agent Card)  */}
<div className="mb-10 glass-card rounded-xl p-8 shadow-[0px_12px_32px_rgba(29,27,27,0.06)] flex flex-col gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="sparkles">colors_spark</span>
<span className="font-label text-[0.75rem] uppercase tracking-widest text-secondary font-bold">AI Suggestion</span>
</div>
<h2 className="font-headline text-2xl text-on-surface">Your oil production may peak tomorrow.</h2>
<p className="text-on-surface-variant leading-relaxed">During the late follicular phase, estrogen levels can stimulate sebum. Swap your heavy moisturizer for a lightweight, Sage-infused serum today.</p>
<div className="flex gap-2 pt-2">
<button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-label text-sm font-semibold hover:opacity-90 transition-all">View Routine</button>
</div>
</div>
{/*  Logging Bento Grid  */}
<section className="mb-12">
<div className="flex items-end justify-between mb-6">
<h3 className="font-headline text-3xl">Daily Log</h3>
<span className="text-primary font-medium text-sm">March 14, 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Acne Log  */}
<button className="group bg-surface-container hover:bg-primary-container/20 transition-all p-6 rounded-xl text-left flex items-start justify-between border border-transparent hover:border-primary-container/30">
<div>
<span className="material-symbols-outlined text-primary mb-4 block text-3xl" data-icon="radio_button_defaultChecked">radio_button_defaultChecked</span>
<h4 className="font-headline text-xl mb-1">Acne</h4>
<p className="text-sm text-on-surface-variant">Log flare-ups</p>
</div>
<span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity" data-icon="add_circle">add_circle</span>
</button>
{/*  Oily Scalp Log  */}
<button className="group bg-surface-container hover:bg-secondary-container/30 transition-all p-6 rounded-xl text-left flex items-start justify-between">
<div>
<span className="material-symbols-outlined text-secondary mb-4 block text-3xl" data-icon="water_drop">water_drop</span>
<h4 className="font-headline text-xl mb-1">Oiliness</h4>
<p className="text-sm text-on-surface-variant">Track sebum levels</p>
</div>
<span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity" data-icon="add_circle">add_circle</span>
</button>
{/*  Dryness Log  */}
<button className="group bg-surface-container hover:bg-tertiary-container/20 transition-all p-6 rounded-xl text-left flex items-start justify-between md:col-span-2">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-tertiary text-3xl" data-icon="texture">texture</span>
<div>
<h4 className="font-headline text-xl mb-1">Dryness &amp; Texture</h4>
<p className="text-sm text-on-surface-variant">Sensitive or flaky patches</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity self-center" data-icon="add_circle">add_circle</span>
</button>
</div>
</section>
{/*  Correlation Heatmap  */}
<section className="mb-12">
<h3 className="font-headline text-3xl mb-6">Skin vs. Cycle Correlation</h3>
<div className="bg-surface-container-low rounded-xl p-6 overflow-hidden">
<div className="flex justify-between mb-8">
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant">Acne</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant">Oil</span>
</div>
</div>
<span className="text-xs font-semibold text-on-surface-variant">Last 28 Days</span>
</div>
{/*  Heatmap Visualization  */}
<div className="flex flex-col gap-6">
{/*  Phases Labels  */}
<div className="grid grid-cols-4 gap-1 text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant/40 text-center">
<span>Menstrual</span>
<span>Follicular</span>
<span>Ovulatory</span>
<span>Luteal</span>
</div>
{/*  Row 1: Acne  */}
<div className="grid grid-cols-28 gap-1 h-8">
{/*  Mock Heatmap Generation  */}
<div className="h-full bg-primary/10 rounded-sm"></div>
<div className="h-full bg-primary/5 rounded-sm"></div>
<div className="h-full bg-primary/20 rounded-sm"></div>
<div className="h-full bg-primary/10 rounded-sm"></div>
<div className="h-full bg-primary/5 rounded-sm"></div>
<div className="h-full bg-primary/5 rounded-sm"></div>
<div className="h-full bg-primary/10 rounded-sm"></div>
<div className="h-full bg-primary/5 rounded-sm"></div>
<div className="h-full bg-primary/5 rounded-sm"></div>
<div className="h-full bg-primary/5 rounded-sm"></div>
<div className="h-full bg-primary/10 rounded-sm"></div>
<div className="h-full bg-primary/30 rounded-sm"></div>
<div className="h-full bg-primary/50 rounded-sm"></div>
<div className="h-full bg-primary/80 rounded-sm"></div> {/*  Peak  */}
<div className="h-full bg-primary/60 rounded-sm"></div>
<div className="h-full bg-primary/40 rounded-sm"></div>
<div className="h-full bg-primary/20 rounded-sm"></div>
<div className="h-full bg-primary/10 rounded-sm"></div>
<div className="h-full bg-primary/20 rounded-sm"></div>
<div className="h-full bg-primary/40 rounded-sm"></div>
<div className="h-full bg-primary/60 rounded-sm"></div>
<div className="h-full bg-primary/90 rounded-sm"></div> {/*  Second Peak Luteal  */}
<div className="h-full bg-primary/100 rounded-sm"></div>
<div className="h-full bg-primary/80 rounded-sm"></div>
<div className="h-full bg-primary/40 rounded-sm"></div>
<div className="h-full bg-primary/20 rounded-sm"></div>
<div className="h-full bg-primary/10 rounded-sm"></div>
<div className="h-full bg-primary/5 rounded-sm"></div>
</div>
{/*  Row 2: Oiliness  */}
<div className="grid grid-cols-28 gap-1 h-8">
<div className="h-full bg-secondary/5 rounded-sm"></div>
<div className="h-full bg-secondary/5 rounded-sm"></div>
<div className="h-full bg-secondary/5 rounded-sm"></div>
<div className="h-full bg-secondary/10 rounded-sm"></div>
<div className="h-full bg-secondary/20 rounded-sm"></div>
<div className="h-full bg-secondary/30 rounded-sm"></div>
<div className="h-full bg-secondary/50 rounded-sm"></div>
<div className="h-full bg-secondary/60 rounded-sm"></div>
<div className="h-full bg-secondary/80 rounded-sm"></div>
<div className="h-full bg-secondary/90 rounded-sm"></div>
<div className="h-full bg-secondary/70 rounded-sm"></div>
<div className="h-full bg-secondary/40 rounded-sm"></div>
<div className="h-full bg-secondary/20 rounded-sm"></div>
<div className="h-full bg-secondary/10 rounded-sm"></div>
<div className="h-full bg-secondary/10 rounded-sm"></div>
<div className="h-full bg-secondary/20 rounded-sm"></div>
<div className="h-full bg-secondary/30 rounded-sm"></div>
<div className="h-full bg-secondary/50 rounded-sm"></div>
<div className="h-full bg-secondary/70 rounded-sm"></div>
<div className="h-full bg-secondary/90 rounded-sm"></div>
<div className="h-full bg-secondary/100 rounded-sm"></div>
<div className="h-full bg-secondary/80 rounded-sm"></div>
<div className="h-full bg-secondary/60 rounded-sm"></div>
<div className="h-full bg-secondary/40 rounded-sm"></div>
<div className="h-full bg-secondary/20 rounded-sm"></div>
<div className="h-full bg-secondary/10 rounded-sm"></div>
<div className="h-full bg-secondary/5 rounded-sm"></div>
<div className="h-full bg-secondary/5 rounded-sm"></div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant/10">
<p className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]" data-icon="lightbulb">lightbulb</span>
                        Observation
                    </p>
<p className="text-sm mt-2 text-on-surface-variant leading-relaxed italic">"Your oiliness tends to precede acne breakouts by exactly 48 hours during your Luteal phase. Adjust cleansing on Day 21."</p>
</div>
</div>
</section>
{/*  Product Hero Card  */}
<div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8 group">
<img alt="Serum and botanicals" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="overhead shot of a glass serum bottle next to fresh sage leaves and pink petals on a soft textured cream fabric background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHsZnoMylFZSxkRywPFukI-1W-H7vWoutI8wUQUw9S14RLGwZXm1bLiYsicgm0Tg67NWc2ptwW83x5jKqV_-qC9_QV6Zq4mRyA15me52mC1thIwz1LySBNfZ_YKVRMpM_oH6GFs70RnDOqTlHrdXrKNHDkbWZRg3XOY1fuXVipDjXQcthpUnXOFlTOH31ENNq060M8-blyaXHpy5V7AkO1sWYao8VxOg59Roh1VBBDLfNiPlucL0EH0HWJAlski-CRaPfVdgJUQ4E"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="font-label text-[0.6rem] text-white/80 uppercase tracking-[0.3em] font-bold">Recommended for You</span>
<h4 className="font-headline text-2xl text-white mt-1">Calming Sage Recovery Oil</h4>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-4 bg-white/70 dark:bg-stone-950/70 backdrop-blur-2xl rounded-t-[3rem] z-50 shadow-[0px_-12px_32px_rgba(29,27,27,0.06)]">
<div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-5 py-2 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
<span className="material-symbols-outlined mb-1" data-icon="radio_button_defaultChecked">radio_button_defaultChecked</span>
<span className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-widest">Cycle</span>
</div>
<div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-5 py-2 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
<span className="material-symbols-outlined mb-1" data-icon="self_improvement">self_improvement</span>
<span className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-widest">Wellness</span>
</div>
<div className="flex flex-col items-center justify-center bg-[#F4C2C2]/20 text-stone-900 dark:text-[#F4C2C2] rounded-full px-5 py-2">
<span className="material-symbols-outlined mb-1" data-icon="face_6" style={{ fontVariationSettings: "'FILL' 1" }}>face_6</span>
<span className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-widest">Skin</span>
</div>
<div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-5 py-2 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
<span className="material-symbols-outlined mb-1" data-icon="air">air</span>
<span className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-widest">Sanctuary</span>
</div>
</nav>
{/*  Tailwind Grid Overrides for Heatmap  */}
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function WellnessEducationHub() {
  return (
    <>
      {/*  Phase Bloom Background Decor  */}
<div className="fixed inset-0 phase-bloom pointer-events-none z-0"></div>
{/*  TopNavBar (Shared Component)  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-xl">
<div className="font-['Instrument_Serif'] text-2xl text-[#F4C2C2] italic">RoseCycle</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-[#F4C2C2] hover:opacity-80 transition-opacity scale-95 active:transition-transform">dark_mode</button>
<button className="material-symbols-outlined text-[#F4C2C2] hover:opacity-80 transition-opacity scale-95 active:transition-transform">account_circle</button>
</div>
</header>
<main className="relative z-10 pt-24 pb-32 px-6 max-w-7xl mx-auto">
{/*  Hero Section: Daily Affirmation  */}
<section className="mb-12">
<p className="font-label text-label-md text-primary uppercase tracking-[0.2em] mb-4">Daily Affirmation</p>
<h1 className="font-headline text-[3.5rem] leading-[1.1] text-on-surface mb-8 max-w-2xl italic">
                "I listen to my body's whispers before they become screams."
            </h1>
<div className="flex flex-wrap gap-3">
<span className="px-5 py-2 glass rounded-full border border-outline-variant/15 text-primary text-sm font-medium">Luteal Phase Care</span>
<span className="px-5 py-2 glass rounded-full border border-outline-variant/15 text-secondary text-sm font-medium">Gentle Movement</span>
</div>
</section>
{/*  Phase-Based Wellness Plans (Bento Grid)  */}
<section className="mb-16">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline text-headline-md text-on-surface">Phase-Sync Sanctuary</h2>
<p className="text-on-surface-variant font-body">Tailored wellness for your current cycle state.</p>
</div>
<button className="font-label text-primary text-sm font-semibold border-b border-primary/20 pb-1">View All Plans</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Large Featured: Nutrition  */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[400px] bg-primary-container/20">
<img className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Top down view of colorful seasonal nourishment bowl with pomegranate seeds, fresh greens and soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGpCIl7ft8JCfO44xv3VnhXk4iRjgG4PJDDlteo6dd4bIQYJcQJJJ8Ow3sOGeOanGuwDi041D8q_MOSj2_N8NyyeCLc6dI2RHHagblyde1X4sJydLknuj6t4ZXf96E3jpMpa8gZaj4qZDBnJIN28m3XkdLtE0LE22oFvdmYSgmFQM65PYmFnQUZPhIfAKm_QwTSG8Xwpl_7DwJkXY1nkxvbFWfHDNSoWynOYYNkMr1AtCiAdstThKQCKsrWP-tdvJZhMRNhW54WJE"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
<div className="absolute bottom-0 p-10">
<span className="bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">Nutrition</span>
<h3 className="font-headline text-[2.5rem] text-on-primary leading-tight mb-4">The Luteal Glow: <br/>Complex Carbs &amp; Zinc</h3>
<p className="text-primary-fixed max-w-md mb-6">Focus on steady energy levels. Roasted sweet potatoes and dark chocolate are your best friends this week.</p>
<button className="bg-surface-container-lowest text-primary px-8 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-colors">Open Meal Plan</button>
</div>
</div>
{/*  Exercise Card  */}
<div className="md:col-span-4 rounded-xl bg-secondary-container/30 p-8 flex flex-col justify-between border border-outline-variant/10">
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>self_care</span>
<h3 className="font-headline text-2xl text-on-secondary-container mb-4">Slow Flow Yoga</h3>
<p className="text-on-secondary-container/80 text-sm leading-relaxed">During the luteal phase, opt for cortisol-conscious movement. 20 minutes of restorative stretching.</p>
</div>
<button className="w-full mt-8 bg-secondary text-on-secondary py-4 rounded-full font-semibold text-sm">Start Practice</button>
</div>
{/*  Skincare Card  */}
<div className="md:col-span-4 rounded-xl bg-surface-container p-8 flex flex-col justify-between border border-outline-variant/10">
<div className="flex justify-between items-start">
<h3 className="font-headline text-2xl text-on-surface">Skincare Ritual</h3>
<span className="material-symbols-outlined text-primary">spa</span>
</div>
<div className="mt-4">
<p className="text-on-surface-variant text-sm mb-4 italic">"Focus on soothing inflammation and deep hydration."</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs font-semibold text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Double Cleanse
                            </li>
<li className="flex items-center gap-3 text-xs font-semibold text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Niacinamide Serum
                            </li>
</ul>
</div>
</div>
{/*  AI Agent Suggestion Chip (Asymmetric Layout)  */}
<div className="md:col-span-8 rounded-xl bg-gradient-to-br from-tertiary/10 to-tertiary-container/30 p-8 border border-tertiary/5 relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="max-w-md">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-tertiary text-sm">smart_toy</span>
<span className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">Rose AI Suggestion</span>
</div>
<h4 className="font-headline text-xl text-on-tertiary-container mb-2">Notice any skin sensitivity?</h4>
<p className="text-sm text-on-tertiary-container/70">Your luteal phase often brings increased oil production. Would you like a custom acne-prevention routine?</p>
</div>
<button className="whitespace-nowrap px-8 py-3 bg-tertiary text-on-tertiary rounded-full text-sm font-bold shadow-lg shadow-tertiary/20">Talk to Rose</button>
</div>
</div>
</div>
</section>
{/*  Curated Library: Editorial Section  */}
<section className="mb-16">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
<div>
<h2 className="font-headline text-[2.5rem] text-on-surface">The Editorial Library</h2>
<div className="flex gap-4 mt-2">
<button className="text-sm font-bold text-primary border-b-2 border-primary pb-1">Teen Hub</button>
<button className="text-sm font-medium text-slate-400 pb-1">Adult Guide</button>
</div>
</div>
<div className="flex gap-2 bg-surface-container-high p-1 rounded-full">
<button className="px-6 py-2 rounded-full bg-surface-container-lowest text-xs font-bold shadow-sm">Latest</button>
<button className="px-6 py-2 rounded-full text-xs font-medium text-on-surface-variant">Popular</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
{/*  Article 1  */}
<article className="flex flex-col">
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" data-alt="Minimalist bedroom with warm sunlight filtering through linen curtains, a journal resting on a rumpled bed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc19IQk5c90h7SgCcvfMMAhiMIabA_togj7cqkJb5FfiaTtC0DHzk2JyzOe0az_r5vg8Mtmk4FC4VJavwq4-mqMBm7g1NYkz1IomH_UqevaJswvKxyvVBo6lsSXyXyQkQeOFs9e7dirhpjqHwkBCX2SlRyS-I0kCayEAnYGazXh4yBN5IE9_ST66rwQ2JfPBmKg-77qd2V9XA_aL0ANsQ3bXi8j6S-FzPOiRRoVtLhENnZQBSqfpYhzqFcAtlrMDPP2x-GPBEKp-c"/>
</div>
<span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Self Discovery</span>
<h3 className="font-headline text-2xl text-on-surface leading-snug mb-4 hover:text-primary transition-colors cursor-pointer">Journaling Through Your Cycle: A Teen's First Guide</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">Learning to map your emotions to your hormones can feel like finding a secret map to yourself...</p>
<div className="mt-auto flex items-center justify-between text-[10px] font-bold text-slate-400">
<span>8 MIN READ</span>
<span className="material-symbols-outlined text-sm">bookmark</span>
</div>
</article>
{/*  Article 2  */}
<article className="flex flex-col">
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" data-alt="Artistic macro photo of delicate pink flowers with soft bokeh and ethereal lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-jHeqvAU3z1BE_jNwJ63rutwJgOozAaXJ4tHbA2zH9kMJL9hpURmpnvN3Jt1XXHhphCLamEVR0SFBYKb2ruCehpQ7iYy27kXQpkR9iKKr3POQittBMwOUU2eQVEBekzy19AW5ptIJ0QPGU_tkpWU0knBm-Wyjo254utJNkeGWttlCo4K5pOP3SiIwqRCBiqFPw9RV9YezoSnlnGqsVA_qXV58tEzbbyUTLJCwp57L8vH_5BhBdZeeAnRDRMtjp54FW59ogK7WLb4"/>
</div>
<span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-3">Biology</span>
<h3 className="font-headline text-2xl text-on-surface leading-snug mb-4 hover:text-primary transition-colors cursor-pointer">Demystifying The 'Four Seasons' of Your Hormones</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">Why you feel like a social butterfly one week and a hibernating bear the next. It's not magic, it's biology.</p>
<div className="mt-auto flex items-center justify-between text-[10px] font-bold text-slate-400">
<span>12 MIN READ</span>
<span className="material-symbols-outlined text-sm">bookmark</span>
</div>
</article>
{/*  Article 3  */}
<article className="flex flex-col">
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-6">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" data-alt="Close up of essential oil bottle with eucalyptus and lavender sprigs on a neutral textured background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBywsnsoPsAlXg-3VDsIr3vWA9W8iOxyZS4MAvMNHwMEvwZuUeRFUD571Z7-UZNfc9n9bzylM-eZS7lYU7nt_jdrXdI5K1ML6hQVk5y6gEulMimYQzM2ZDL87vTHUBvMP8pIDa07gM_RtH604Bf3RAg4NeoHHyAyQWv6aLDwH7Yr62K6ithVn_9KezfiP8Eh411sBca0SkzV7_zuq4O_-Aa8OL6_CRSGVT97dpQ33LVHil-8hNvQXGQpfrcdsarbLZpAyoiApDbSLI"/>
</div>
<span className="text-[10px] font-bold text-tertiary uppercase tracking-[0.2em] mb-3">Holistic Health</span>
<h3 className="font-headline text-2xl text-on-surface leading-snug mb-4 hover:text-primary transition-colors cursor-pointer">Cramp Relief: Beyond The Ibuprofen Bottle</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">From magnesium-rich foods to heat therapy techniques that actually work for acute menstrual pain.</p>
<div className="mt-auto flex items-center justify-between text-[10px] font-bold text-slate-400">
<span>5 MIN READ</span>
<span className="material-symbols-outlined text-sm">bookmark</span>
</div>
</article>
</div>
</section>
{/*  Myth-Busting Cards  */}
<section className="mb-24">
<h2 className="font-headline text-headline-md text-on-surface mb-8 text-center italic">Fact vs. Fiction</h2>
<div className="flex flex-col md:flex-row gap-8 overflow-x-auto no-scrollbar pb-8">
<div className="min-w-[320px] bg-surface-lowest p-10 rounded-xl shadow-[0px_12px_32px_rgba(29,27,27,0.06)] flex-shrink-0 relative group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl">cancel</span>
</div>
<p className="font-label text-[10px] font-bold text-error uppercase tracking-widest mb-4">Myth</p>
<h4 className="font-headline text-2xl mb-6">"Your period stops when you go swimming."</h4>
<div className="h-px w-12 bg-outline-variant/30 mb-6"></div>
<p className="text-sm text-on-surface-variant font-medium leading-relaxed">Water pressure can temporarily slow down the flow, but it definitely doesn't stop. Tampons or cups are your best friends for a beach day!</p>
</div>
<div className="min-w-[320px] bg-surface-lowest p-10 rounded-xl shadow-[0px_12px_32px_rgba(29,27,27,0.06)] flex-shrink-0 relative group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl">check_circle</span>
</div>
<p className="font-label text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">Fact</p>
<h4 className="font-headline text-2xl mb-6">"Synchronizing cycles with friends is a myth."</h4>
<div className="h-px w-12 bg-outline-variant/30 mb-6"></div>
<p className="text-sm text-on-surface-variant font-medium leading-relaxed">The 'McClintock Effect' has been largely debunked by modern research. If your cycles align, it's most likely statistical coincidence!</p>
</div>
<div className="min-w-[320px] bg-surface-lowest p-10 rounded-xl shadow-[0px_12px_32px_rgba(29,27,27,0.06)] flex-shrink-0 relative group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl">cancel</span>
</div>
<p className="font-label text-[10px] font-bold text-error uppercase tracking-widest mb-4">Myth</p>
<h4 className="font-headline text-2xl mb-6">"Sugar cravings during PMS are all in your head."</h4>
<div className="h-px w-12 bg-outline-variant/30 mb-6"></div>
<p className="text-sm text-on-surface-variant font-medium leading-relaxed">Nope! High progesterone increases metabolic rate, meaning you actually need about 100-300 more calories a day.</p>
</div>
</div>
</section>
</main>
{/*  BottomNavBar (Shared Component)  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-t-[3rem] shadow-[0px_-12px_32px_rgba(244,194,194,0.1)]">
<div className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#F4C2C2] transition-colors active:scale-90 duration-300 ease-out">
<span className="material-symbols-outlined mb-1">home_health</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Home</span>
</div>
<div className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#F4C2C2] transition-colors active:scale-90 duration-300 ease-out">
<span className="material-symbols-outlined mb-1">edit_note</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Log</span>
</div>
<div className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#F4C2C2] transition-colors active:scale-90 duration-300 ease-out">
<span className="material-symbols-outlined mb-1">calendar_today</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Calendar</span>
</div>
<div className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#F4C2C2] transition-colors active:scale-90 duration-300 ease-out">
<span className="material-symbols-outlined mb-1">smart_toy</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Agent</span>
</div>
{/*  Active Tab: Wellness  */}
<div className="flex flex-col items-center justify-center bg-[#F4C2C2]/20 text-[#F4C2C2] rounded-full px-5 py-2 active:scale-90 duration-300 ease-out">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>self_care</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Wellness</span>
</div>
</nav>
    </>
  );
}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

export default function DoctorsReportExport() {
  const { user } = useUser();
  const navigate = useNavigate();
  const userName = user?.fullName || 'Clara Rose';
  const reportDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date());
  return (
    <>
      {/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 w-full no-print">
<div className="flex items-center gap-2">
<span onClick={() => navigate(-1)} className="material-symbols-outlined text-primary cursor-pointer" data-icon="arrow_back">arrow_back</span>
<h1 className="font-['Instrument_Serif'] italic text-2xl text-stone-800 dark:text-stone-100">RoseCycle</h1>
</div>
<div className="flex items-center gap-4">
<button onClick={() => window.print()} className="flex items-center gap-2 bg-primary text-on-primary px-6 py-2 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span>
        Export PDF
      </button>
<span className="material-symbols-outlined text-stone-500 hover:opacity-70 transition-opacity cursor-pointer" data-icon="account_circle">account_circle</span>
<span className="material-symbols-outlined text-stone-500 hover:opacity-70 transition-opacity cursor-pointer" data-icon="settings">settings</span>
</div>
</header>
<main className="max-w-4xl mx-auto pt-28 pb-32 px-6">
{/*  Report Header Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-outline-variant/15 pb-8">
<div>
<span className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-2 block">Clinical Health Summary</span>
<h2 className="font-headline text-5xl md:text-6xl text-on-surface">{userName}</h2>
<p className="text-on-surface-variant mt-2 font-medium">Reporting Period: Oct 2023 – Dec 2023</p>
</div>
<div className="text-right">
<p className="font-label text-xs text-on-surface-variant uppercase tracking-tighter">Generated On</p>
<p className="font-headline text-2xl italic">{reportDate}</p>
</div>
</div>
</section>
{/*  Cycle Metrics Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{/*  Big Metric  */}
<div className="md:col-span-2 bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
<div className="relative z-10">
<p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-8">Average Cycle Length</p>
<div className="flex items-baseline gap-4">
<span className="font-headline text-8xl text-primary">28</span>
<span className="font-headline text-3xl italic text-on-surface-variant">days</span>
</div>
<p className="mt-6 text-on-secondary-fixed-variant max-w-xs leading-relaxed">
            Consistent periodicity noted across the last three follicular and luteal phases. Within 5% variance of global averages.
          </p>
</div>
{/*  Decorative subtle shape  */}
<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
</div>
{/*  Secondary Metrics  */}
<div className="flex flex-col gap-6">
<div className="bg-secondary-container p-6 rounded-xl flex flex-col justify-between h-full">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="calendar_today">calendar_today</span>
<div>
<p className="font-headline text-3xl">3 Months</p>
<p className="font-label text-xs uppercase opacity-70">Data Integrity</p>
</div>
</div>
<div className="bg-tertiary-container p-6 rounded-xl flex flex-col justify-between h-full">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="water_drop">water_drop</span>
<div>
<p className="font-headline text-3xl">5.2 Days</p>
<p className="font-label text-xs uppercase opacity-70">Avg. Duration</p>
</div>
</div>
</div>
</section>
{/*  Symptom Frequency Analysis  */}
<section className="mb-12 bg-surface-container-highest/30 rounded-xl p-8">
<h3 className="font-headline text-3xl mb-8">Symptom Frequency Analysis</h3>
<div className="space-y-10">
{/*  Cramps  */}
<div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
<div className="md:col-span-1">
<p className="font-label text-sm font-semibold text-on-surface">Cramps</p>
<p className="text-xs text-on-surface-variant">Follicular Start</p>
</div>
<div className="md:col-span-3 flex items-center gap-4">
<div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{ width: '65%' }}></div>
</div>
<span className="font-headline text-xl w-12 text-right">65%</span>
</div>
</div>
{/*  Mood Shifts  */}
<div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
<div className="md:col-span-1">
<p className="font-label text-sm font-semibold text-on-surface">Mood Shifts</p>
<p className="text-xs text-on-surface-variant">Luteal Phase</p>
</div>
<div className="md:col-span-3 flex items-center gap-4">
<div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary" style={{ width: '42%' }}></div>
</div>
<span className="font-headline text-xl w-12 text-right">42%</span>
</div>
</div>
{/*  Bloating  */}
<div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
<div className="md:col-span-1">
<p className="font-label text-sm font-semibold text-on-surface">Bloating</p>
<p className="text-xs text-on-surface-variant">Pre-Menstrual</p>
</div>
<div className="md:col-span-3 flex items-center gap-4">
<div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-tertiary" style={{ width: '28%' }}></div>
</div>
<span className="font-headline text-xl w-12 text-right">28%</span>
</div>
</div>
</div>
</section>
{/*  Clinical Findings / Notes  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
<div className="bg-surface-container p-8 rounded-xl min-h-[300px] border border-outline-variant/15">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary" data-icon="edit_note">edit_note</span>
<h4 className="font-headline text-2xl">Clinical Findings</h4>
</div>
<div className="space-y-4">
<div className="h-px bg-outline-variant/30 w-full"></div>
<div className="h-px bg-outline-variant/30 w-full"></div>
<div className="h-px bg-outline-variant/30 w-full"></div>
<div className="h-px bg-outline-variant/30 w-full"></div>
<div className="h-px bg-outline-variant/30 w-full"></div>
<div className="h-px bg-outline-variant/30 w-full"></div>
<div className="h-px bg-outline-variant/30 w-full"></div>
<div className="h-px bg-outline-variant/30 w-full"></div>
</div>
<p className="mt-4 text-on-surface-variant text-sm italic">Physician to sign upon review.</p>
</div>
<div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
<div>
<h4 className="font-headline text-2xl mb-4">Patient Overview</h4>
<p className="text-on-surface-variant leading-relaxed text-sm">
            Patient exhibits a highly regular cycle with moderate symptom clusters during the transition to the menstrual phase. Nutritional logging suggests a correlation between sodium intake and bloating spikes on Day 24-26. Recommended follow-up: Iron levels check.
          </p>
</div>
<div className="mt-8 pt-8 border-t border-outline-variant/20 flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional headshot of a female doctor in a white coat with a stethoscope around her neck" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDggZkcl6x7TGh7CaCJkqU9EswrBLAGYk-svFneY9c3Oh91e7CTwtUdrL3_uRljj9huV1H1Vf81O7AK8CRtLpiTbPb0t4kJeZl7OTGHhmVfY6OnU-HWee5Pi2SF9NT1s-y1BCxmR9wLFrsW41f0R2SuS5MveUaeIAgzXnKMVsbDHAEgZ4D1uz4mDDSsvvucY5fCyaAEiulIIdIQ6WhtFIdag0dbrKuCZ5vabCs-7nuE4uf4VmUeH8wEl5wKkjAsv2XPxxtgT4--5B4"/>
</div>
<div>
<p className="font-semibold text-sm">Dr. Elena Thorne</p>
<p className="text-xs text-on-surface-variant">Chief Medical Officer, RoseCycle</p>
</div>
</div>
</div>
</section>
{/*  Footer Disclaimer  */}
<footer className="text-center text-xs text-on-surface-variant opacity-60 px-12">
      This report is generated based on self-reported data within the RoseCycle application. It is intended for clinical discussion and should not be used as a standalone diagnostic tool. Confidential patient information. © 2023 RoseCycle Health.
    </footer>
</main>
{/*  Bottom Navigation Bar (Hidden on Desktop, Visible on Mobile)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-4 bg-white/70 dark:bg-stone-950/70 backdrop-blur-2xl rounded-t-[3rem] z-50 shadow-[0px_-12px_32px_rgba(29,27,27,0.06)] no-print">
<div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-5 py-2 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined" data-icon="radio_button_defaultChecked">radio_button_defaultChecked</span>
<span className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-widest mt-1">Cycle</span>
</div>
<div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-5 py-2 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined" data-icon="self_improvement">self_improvement</span>
<span className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-widest mt-1">Wellness</span>
</div>
<div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-5 py-2 hover:text-stone-600 transition-colors">
<span className="material-symbols-outlined" data-icon="face_6">face_6</span>
<span className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-widest mt-1">Skin</span>
</div>
<div className="flex flex-col items-center justify-center bg-[#F4C2C2]/20 text-stone-900 dark:text-[#F4C2C2] rounded-full px-5 py-2">
<span className="material-symbols-outlined" data-icon="air">air</span>
<span className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-widest mt-1">Sanctuary</span>
</div>
</nav>
    </>
  );
}

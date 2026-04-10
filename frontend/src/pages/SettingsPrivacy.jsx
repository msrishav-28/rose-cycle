import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';

export default function SettingsPrivacy() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [appLock, setAppLock] = useState(true);
  const [localFirst, setLocalFirst] = useState(true);
  const [notifCycle, setNotifCycle] = useState(true);
  const [notifWellness, setNotifWellness] = useState(false);
  const [notifAi, setNotifAi] = useState(true);

  return (
    <>
      {/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-xl">
<a className="font-['Instrument_Serif'] text-2xl text-[#F4C2C2] italic" href="#">RoseCycle</a>
<div className="flex gap-4">
<button className="text-slate-400 hover:opacity-80 transition-opacity active:transition-transform scale-95">
<span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
</button>
<button className="text-[#F4C2C2] font-bold hover:opacity-80 transition-opacity active:transition-transform scale-95">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="pt-24 px-6 max-w-2xl mx-auto">
<header className="mb-12">
<h1 className="serif-text text-5xl text-on-surface mb-2">Settings</h1>
<p className="text-on-surface-variant font-body">Your digital sanctuary, configured for privacy.</p>
</header>
<div className="space-y-8">
{/*  Profile Section  */}
<section>
<h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-4 ml-2">Personal Identity</h2>
<div className="bg-surface-container rounded-xl p-6 flex items-center gap-6">
<div className="relative">
<img className="w-20 h-20 rounded-full object-cover grayscale-[20%]" data-alt="Soft portrait of a young woman with natural lighting and a warm, editorial aesthetic" src={user?.imageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuDxzxj36jsYjFI_HSGsPRggMrOqPAzyNOUOqEh9F4k1Ox_boOfCV7Q_GjqOZ3zZHLN1HfR3bdTLu2S3Ve2WVeS5GmtTsypzrP8F5YfY1IHcjkB3FFtjwLhbjROkpkovf-d_MyYA9LcTTyLnjM4Ys-oDyHVd7zK-cGbXF-0tedJlAzOAxSeLJx5hn4EaY-_zkIPsFBnlSXquyjdp57C4SBf1leuwK_2VCbsih5ov98_Xtiwq3bb0of4tuKUehcpSExIfWX-b0nYFnUI"}/>
<button className="absolute bottom-0 right-0 bg-primary p-2 rounded-full text-on-primary shadow-lg border-4 border-surface-container">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
</button>
</div>
<div>
<h3 className="serif-text text-2xl">{user?.fullName || "Clara Rose"}</h3>
<p className="text-sm text-on-surface-variant">{user?.primaryEmailAddress?.emailAddress || "clara.rose@sanctuary.io"}</p>
<div className="mt-2 flex gap-2">
<span className="bg-secondary-container text-on-secondary-container text-[10px] uppercase font-bold px-2 py-1 rounded-full">Pro Member</span>
<span className="bg-surface-container-highest text-on-surface-variant text-[10px] uppercase font-bold px-2 py-1 rounded-full">Day 14</span>
</div>
</div>
</div>
</section>
{/*  Privacy & Security Bento  */}
<section>
<h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-4 ml-2">Privacy &amp; Vault</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/15">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary-container rounded-lg text-primary">
<span className="material-symbols-outlined" data-icon="lock_person">lock_person</span>
</div>
<input checked={appLock} onChange={(e) => setAppLock(e.target.checked)} className="w-10 h-5 rounded-full bg-slate-300 checked:bg-secondary appearance-none cursor-pointer relative transition-all duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:left-5" type="checkbox"/>
</div>
<h4 className="font-bold text-on-surface">App Lock</h4>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Require FaceID or Pin to open the sanctuary.</p>
</div>
<div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/15">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-secondary-container rounded-lg text-secondary">
<span className="material-symbols-outlined" data-icon="database">database</span>
</div>
<input checked={localFirst} onChange={(e) => setLocalFirst(e.target.checked)} className="w-10 h-5 rounded-full bg-slate-300 checked:bg-secondary appearance-none cursor-pointer relative transition-all duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:left-5" type="checkbox"/>
</div>
<h4 className="font-bold text-on-surface">Local-First Storage</h4>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Keep your data on this device. No cloud sync by default.</p>
</div>
</div>
</section>
{/*  Notification Preferences  */}
<section>
<h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-4 ml-2">Notification Flow</h2>
<div className="bg-surface-container-highest rounded-xl overflow-hidden">
<div className="p-4 flex items-center justify-between border-b border-outline-variant/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="notifications_active">notifications_active</span>
<div>
<p className="text-sm font-bold">Cycle Predictions</p>
<p className="text-[10px] text-on-surface-variant">Gentle alerts for your next phase.</p>
</div>
</div>
<input checked={notifCycle} onChange={(e) => setNotifCycle(e.target.checked)} className="w-8 h-4 rounded-full bg-slate-300 checked:bg-primary appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:left-4.5 transition-all" type="checkbox"/>
</div>
<div className="p-4 flex items-center justify-between border-b border-outline-variant/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="health_and_safety">health_and_safety</span>
<div>
<p className="text-sm font-bold">Wellness Reminders</p>
<p className="text-[10px] text-on-surface-variant">Hydration and vitamin prompts.</p>
</div>
</div>
<input checked={notifWellness} onChange={(e) => setNotifWellness(e.target.checked)} className="w-8 h-4 rounded-full bg-slate-300 checked:bg-primary appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:left-4.5 transition-all" type="checkbox"/>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary" data-icon="psychology_alt">psychology_alt</span>
<div>
<p className="text-sm font-bold">AI Insights</p>
<p className="text-[10px] text-on-surface-variant">Personalized suggestions from the Agent.</p>
</div>
</div>
<input checked={notifAi} onChange={(e) => setNotifAi(e.target.checked)} className="w-8 h-4 rounded-full bg-slate-300 checked:bg-primary appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:left-4.5 transition-all" type="checkbox"/>
</div>
</div>
</section>
{/*  Theme Selection  */}
<section>
<h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-4 ml-2">Visual Atmosphere</h2>
<div className="flex justify-between items-center gap-3">
<button className="flex-1 aspect-square rounded-full border-4 border-primary ring-4 ring-primary-container p-1 bg-white">
<div className="w-full h-full rounded-full bg-[#F4C2C2]"></div>
<span className="block text-[8px] mt-4 font-bold uppercase">Blush</span>
</button>
<button className="flex-1 aspect-square rounded-full border-4 border-transparent p-1 bg-white">
<div className="w-full h-full rounded-full bg-[#1d1b1b]"></div>
<span className="block text-[8px] mt-4 font-bold uppercase text-slate-400">Midnight</span>
</button>
<button className="flex-1 aspect-square rounded-full border-4 border-transparent p-1 bg-white">
<div className="w-full h-full rounded-full bg-[#4c644f]"></div>
<span className="block text-[8px] mt-4 font-bold uppercase text-slate-400">Sage</span>
</button>
<button className="flex-1 aspect-square rounded-full border-4 border-transparent p-1 bg-white">
<div className="w-full h-full rounded-full bg-[#97425d]"></div>
<span className="block text-[8px] mt-4 font-bold uppercase text-slate-400">Lavender</span>
</button>
</div>
</section>
{/*  Data Management  */}
<section className="pt-8">
<div className="bg-surface-container rounded-xl p-6">
<h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">Account Archive</h2>
<div className="flex flex-col gap-4">
<button className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface">
<span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-sm" data-icon="ios_share">ios_share</span> Export My Health Data</span>
<span className="material-symbols-outlined text-sm text-outline" data-icon="chevron_right">chevron_right</span>
</button>
<button className="flex items-center justify-between p-3 rounded-lg hover:bg-error-container/20 transition-colors text-error">
<span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-sm" data-icon="delete_forever">delete_forever</span> Delete Data &amp; Close Sanctuary</span>
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
<button onClick={() => signOut()} className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface mt-2 w-full">
<span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-sm" data-icon="logout">logout</span> Log Out</span>
<span className="material-symbols-outlined text-sm text-outline" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</section>
</div>
</main>

{/*  Decorative Background Bloom  */}
<div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
<div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[100px] rounded-full -z-10"></div>
    </>
  );
}

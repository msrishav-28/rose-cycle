import React from 'react';
import { Link } from 'react-router-dom';

export default function AiAgentChat() {
  return (
    <>
      {/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-xl">
<div className="font-['Instrument_Serif'] text-2xl text-[#F4C2C2] italic">RoseCycle</div>
<div className="flex gap-4">
<button className="text-slate-400 hover:opacity-80 transition-opacity active:transition-transform scale-95">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<button className="text-slate-400 hover:opacity-80 transition-opacity active:transition-transform scale-95">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
{/*  Main Chat Canvas  */}
<main className="flex-grow pt-24 pb-44 px-6 max-w-2xl mx-auto w-full flex flex-col justify-end">
{/*  Conversation Thread  */}
<div className="space-y-8 flex flex-col">
{/*  Rose Intro Message  */}
<div className="flex flex-col gap-4 items-start max-w-[85%]">
<div className="flex items-center gap-3 ml-2">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-primary" >smart_toy</span>
</div>
<span className="font-label text-label-md text-on-surface-variant font-semibold">Rose</span>
</div>
<div className="glass p-6 rounded-t-xl rounded-br-xl shadow-sm border-0">
<h1 className="font-headline text-headline-md mb-3 text-on-surface">Hi! I'm here to help you understand your cycle.</h1>
<p className="body-lg text-on-surface-variant">You can ask me things like <span className="italic text-primary">"Why do I feel tired today?"</span> or <span className="italic text-primary">"What's the luteal phase?"</span></p>
</div>
</div>
{/*  Suggestion Chips Container  */}
<div className="flex flex-wrap gap-2 mt-4">
<button className="glass px-5 py-2.5 rounded-full text-label-md font-semibold text-primary border-0 hover:bg-white transition-colors">
                    Phase explainer
                </button>
<button className="glass px-5 py-2.5 rounded-full text-label-md font-semibold text-primary border-0 hover:bg-white transition-colors">
                    Nutrition tips
                </button>
<button className="glass px-5 py-2.5 rounded-full text-label-md font-semibold text-primary border-0 hover:bg-white transition-colors">
                    Symptom checker
                </button>
</div>
</div>
</main>
{/*  Input and Navigation Floating Container  */}
<div className="fixed bottom-0 left-0 w-full flex flex-col z-50">
{/*  Chat Input Field  */}
<div className="px-6 mb-8 w-full max-w-2xl mx-auto">
<div className="glass flex items-center gap-2 p-3 rounded-full shadow-lg">
<button className="p-2 text-primary hover:bg-primary-container/20 rounded-full transition-colors">
<span className="material-symbols-outlined">mic</span>
</button>
<input className="flex-grow bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline py-2 px-2 font-body" placeholder="Message Rose..." type="text"/>
<button className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all active:scale-90">
<span className="material-symbols-outlined">arrow_upward</span>
</button>
</div>
</div>
{/*  BottomNavBar  */}
<nav className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-t-[3rem] shadow-[0px_-12px_32px_rgba(244,194,194,0.1)] flex justify-around items-center px-4 pb-8 pt-4">
<Link className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#F4C2C2] transition-colors" to="#">
<span className="material-symbols-outlined mb-1">home_health</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Home</span>
</Link>
<Link className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#F4C2C2] transition-colors" to="#">
<span className="material-symbols-outlined mb-1">edit_note</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Log</span>
</Link>
<Link className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#F4C2C2] transition-colors" to="#">
<span className="material-symbols-outlined mb-1">calendar_today</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Calendar</span>
</Link>
{/*  Active Tab: Agent  */}
<Link className="flex flex-col items-center justify-center bg-[#F4C2C2]/20 text-[#F4C2C2] rounded-full px-5 py-2 Active: scale-90 duration-300 ease-out" to="#">
<span className="material-symbols-outlined mb-0.5" >smart_toy</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Agent</span>
</Link>
<Link className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-[#F4C2C2] transition-colors" to="#">
<span className="material-symbols-outlined mb-1">self_care</span>
<span className="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Wellness</span>
</Link>
</nav>
</div>
{/*  Decorative Gradient Blobs  */}
<div className="fixed top-[20%] right-[-5%] w-64 h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
<div className="fixed bottom-[40%] left-[-10%] w-96 h-96 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function GuidedBreathwork() {
  return (
    <>
      {/*  TopNavBar (Shared Component Shell)  */}
<header className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl">
<nav className="flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<button className="hover:opacity-70 transition-opacity">
<span className="material-symbols-outlined text-on-surface">close</span>
</button>
<span className="font-['Instrument_Serif'] italic text-2xl text-stone-800 dark:text-stone-100">RoseCycle</span>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-stone-500 dark:text-stone-400 hover:opacity-70 transition-opacity cursor-pointer">account_circle</span>
<span className="material-symbols-outlined text-stone-500 dark:text-stone-400 hover:opacity-70 transition-opacity cursor-pointer">settings</span>
</div>
</nav>
</header>
<main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-32">
{/*  Background Bloom Decoration  */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="phase-bloom absolute -top-20 -left-20 w-96 h-96"></div>
<div className="phase-bloom absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-primary-container/20"></div>
</div>
{/*  Content Canvas  */}
<section className="relative z-10 w-full max-w-lg flex flex-col items-center text-center space-y-12">
{/*  Context Header  */}
<div className="space-y-2">
<h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl text-on-surface">Digital Sanctuary</h2>
<p className="text-on-surface-variant font-medium tracking-wide uppercase text-[10px] md:text-xs">Box Breathing • 5 Minutes</p>
</div>
{/*  Breathing Sphere Container  */}
<div className="relative flex items-center justify-center w-full aspect-square max-w-[320px]">
{/*  Outer Ring (Glassmorphism)  */}
<div className="absolute inset-0 rounded-full border border-outline-variant/15 scale-110"></div>
{/*  Main Breathing Orb  */}
<div className="w-full h-full rounded-full bg-gradient-to-br from-secondary-fixed to-secondary-container flex items-center justify-center shadow-2xl shadow-secondary-fixed/30 relative">
{/*  Glass Overlay  */}
<div className="absolute inset-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center">
<span className="font-['Instrument_Serif'] italic text-6xl text-on-secondary-container">Inhale</span>
<span className="font-['Instrument_Serif'] text-2xl text-on-secondary-container/60 mt-2">4s</span>
</div>
</div>
{/*  Secondary Accents  */}
<div className="absolute -z-10 w-full h-full rounded-full bg-primary-container/20 blur-3xl"></div>
</div>
{/*  Instruction Grid (Bento Style)  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
<div className="p-6 bg-surface-container rounded-xl flex flex-col items-center justify-center space-y-1">
<span className="text-xs font-semibold text-secondary uppercase tracking-widest">In</span>
<span className="font-['Instrument_Serif'] text-2xl text-on-surface">4.0</span>
</div>
<div className="p-6 bg-surface-container-low rounded-xl flex flex-col items-center justify-center space-y-1 border border-outline-variant/15">
<span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Hold</span>
<span className="font-['Instrument_Serif'] text-2xl text-on-surface">4.0</span>
</div>
<div className="p-6 bg-surface-container-low rounded-xl flex flex-col items-center justify-center space-y-1 border border-outline-variant/15">
<span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Out</span>
<span className="font-['Instrument_Serif'] text-2xl text-on-surface">4.0</span>
</div>
<div className="p-6 bg-surface-container-low rounded-xl flex flex-col items-center justify-center space-y-1 border border-outline-variant/15">
<span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Hold</span>
<span className="font-['Instrument_Serif'] text-2xl text-on-surface">4.0</span>
</div>
</div>
{/*  Audio/Control Footer  */}
<div className="flex items-center gap-8 pt-4">
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all">
<span className="material-symbols-outlined">graphic_eq</span>
</button>
<button className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/20 scale-95 hover:scale-100 transition-transform">
<span className="material-symbols-outlined !text-4xl" data-weight="fill">pause</span>
</button>
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all">
<span className="material-symbols-outlined">timer</span>
</button>
</div>
</section>
</main>
{/*  BottomNavBar (Shared Component Shell)  */}
{/*  Determined active: Sanctuary based on 'Digital Sanctuary' theme  */}

{/*  Optional Visual Texture Image (Subtle Background)  */}
<div className="fixed inset-0 -z-20 opacity-10 pointer-events-none">
<img className="w-full h-full object-cover" data-alt="abstract macro photography of soft pink silk fabric with gentle ripples and cinematic soft lighting bokeh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPKuU-LY9peyb8WcjaP3-67RFmS19TGkdMLmCDA1fulKpqCS12-gs2LigWDVAAO3SDUYYcRp12dhXIkFpnahweYEtVF6AAjZ1v38yUsfayn4WcPgGE01_W1b0bVtJJUtPuuhgdOGyUTzWXL5VDHUNgIrJ22RGJqWaPlnr5cOne7I2rUfSobnTOFLzfKnvcBbLFs0fcGCY725bK6iIm9xI3WQPp3mWeTgQHUr6pzKkg7jazwkc7qGkWz6RQDI7upzddiOAqG3VN0II"/>
</div>
    </>
  );
}

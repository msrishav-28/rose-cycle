import React from 'react';
import { Link } from 'react-router-dom';

export default function LutealWellnessPlan() {
  return (
    <>
      <div className="phase-bloom"></div>
{/*  Top Navigation  */}

<main className="pt-24 px-6 md:px-12 max-w-5xl mx-auto">
{/*  Hero Header  */}
<header className="mb-12">
<div className="flex items-center gap-3 mb-4">
<span className="px-4 py-1.5 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-bold tracking-widest uppercase">The Sanctuary</span>
<span className="text-on-surface-variant font-label text-sm italic">Day 21 — 28</span>
</div>
<h1 className="font-headline text-6xl md:text-8xl leading-[0.9] text-tertiary mb-8">Luteal <br/><span className="italic font-normal">Inner Harvest</span></h1>
<p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">As your body prepares for renewal, energy turns inward. This is your season of grounding, craving nourishment and gentle reflection.</p>
</header>
{/*  Bento Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
{/*  Nutrition Card  */}
<section className="md:col-span-8 bg-surface-container rounded-xl p-8 flex flex-col justify-between min-h-[400px] overflow-hidden relative">
<div className="relative z-10">
<h2 className="font-headline text-4xl mb-6 flex items-center gap-3">
                        Nutrition 
                        <span className="material-symbols-outlined text-primary" data-icon="restaurant">restaurant</span>
</h2>
<p className="text-lg text-on-surface-variant mb-8 max-w-md">Focus on complex carbohydrates to stabilize serotonin and zinc-rich foods to support hormonal transition.</p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium text-sm">Sweet Potatoes</span>
<span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium text-sm">Pumpkin Seeds</span>
<span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium text-sm">Quinoa</span>
<span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium text-sm">Dark Chocolate</span>
</div>
</div>
<div className="flex justify-start relative z-10">
<button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg hover:scale-[1.02] transition-transform">
                        Open Meal Plan
                        <span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
</button>
</div>
{/*  Abstract decorative image/background element  */}
<div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-40">
<img alt="Nutrition" className="w-full h-full object-cover rounded-full mix-blend-multiply" data-alt="Close-up of vibrant purple root vegetables and seeds arranged artistically on a textured ceramic plate with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBmdtAfD7LKN-W85hbITUvTO4kI7aXkiyCXwpM9ijtBYz-xCGYGum21L0GS2W1CAbwNCK2vxsYWqAcTrivK6GNVr7-qaTX43Gx0vr6bkhKCy6WLcD8IArlT7d6HeetZp1Jk-Lv_COUUuQ-ed62B5XYBD63I55HxvrRWee2MnX5WiA1-LQHgrpn7Y12-vf9XoGiWbRXh4cYL91DHhBAj3dn79ZfcEB53CLZON9EBHeJBd0MO1kjJ6Yabl-uaznt8jKHylEJacDDajk"/>
</div>
</section>
{/*  Mindset Card  */}
<section className="md:col-span-4 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl p-8 flex flex-col">
<span className="material-symbols-outlined text-4xl mb-6" data-icon="edit_note" >edit_note</span>
<h2 className="font-headline text-3xl mb-4">Mindset</h2>
<p className="text-md mb-8 leading-relaxed opacity-90">The "Inner Critic" can be loud now. Channel this energy into focused journaling.</p>
<div className="space-y-6 flex-grow">
<div className="border-b border-on-tertiary-fixed/10 pb-4">
<p className="text-sm font-bold uppercase tracking-tighter mb-2 opacity-60">Prompt 01</p>
<p className="font-headline text-xl">What needs to be released in the coming cycle?</p>
</div>
<div className="border-b border-on-tertiary-fixed/10 pb-4">
<p className="text-sm font-bold uppercase tracking-tighter mb-2 opacity-60">Prompt 02</p>
<p className="font-headline text-xl">Where did I find my truest strength this month?</p>
</div>
</div>
</section>
{/*  Movement Card  */}
<section className="md:col-span-12 bg-secondary-container rounded-xl overflow-hidden flex flex-col md:flex-row">
<div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
<h2 className="font-headline text-5xl mb-6">Movement: <br/><span className="italic font-normal">Slow Flow Yoga</span></h2>
<p className="text-lg text-on-secondary-container mb-8 leading-relaxed">Prioritize parasympathetic nervous system activation. Lower the intensity and focus on deep, rhythmic breathing and restorative holds.</p>
<div className="flex items-center gap-6">
<button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                            Start Practice
                            <span className="material-symbols-outlined" data-icon="play_circle">play_circle</span>
</button>
<span className="text-secondary font-bold text-sm tracking-widest uppercase">24 Minutes</span>
</div>
</div>
<div className="md:w-1/2 h-64 md:h-auto relative">
<img alt="Yoga Practice" className="w-full h-full object-cover" data-alt="A woman in a peaceful attic studio doing a gentle yoga child pose on a sage green mat with warm morning sunlight streaming through a window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyIkkW_HlS4Vb6A82I9if-Zgitbb4FteAa7NIdW7sVyjg-CBDT1LC0sAD2rQxFgbj9qF82BDgxX9WvjmgRrVh3WkB87zmAXlDV2Yl5Igy7E9J-dySOTP1ioQn3wlBpbD0Em4AEmOwOb6WKkbLvQHcoPKrkq6LThS1aFV7bP_1ZG-9e3tAU_6Vb9C8o5U2BXlPq8E9UE82C_Ae-OTgAheR6a_zZcolBPHmyV0Dcp2v-GqS3L4_1T11irzzlhRfUOVBJoaOcbAzDMtg"/>
<div className="absolute inset-0 bg-gradient-to-r from-secondary-container via-transparent to-transparent hidden md:block"></div>
</div>
</section>
</div>
{/*  Article Content  */}
<article className="max-w-3xl mx-auto py-12">
<h3 className="font-headline text-4xl mb-8">Understanding the Luteal Shift</h3>
<div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
<p>During the luteal phase, progesterone becomes the dominant hormone. While this can bring a sense of calm for some, for others, the decline in estrogen can lead to a dip in mood-regulating neurotransmitters like serotonin.</p>
<blockquote className="border-l-4 border-primary pl-8 py-4 my-12 italic font-headline text-3xl text-on-surface">
                    "This is not a time of loss, but a time of gathering. Treat your energy like a finite treasure."
                </blockquote>
<p>Physiologically, your basal body temperature rises and your metabolic rate increases slightly—which is why you might feel hungrier. Honor this by choosing high-quality, slow-burning fuel rather than quick sugar fixes which can exacerbate pre-menstrual mood swings.</p>
</div>
</article>
</main>
{/*  Bottom Navigation  */}

    </>
  );
}

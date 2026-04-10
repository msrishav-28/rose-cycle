import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function EnhancedLandingPageV2() {
  const navigate = useNavigate();
  return (
    <>
      {/*  Subtle Background Decor  */}
<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-dusty-rose/30 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-sage-mist/20 blur-[120px] rounded-full"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-bloom opacity-60"></div>
</div>
{/*  Navigation  */}
<nav className="flex justify-between items-center px-8 md:px-16 py-8 relative z-50">
<div className="font-display text-3xl italic text-midnight-rose-500">RoseCycle</div>
<div className="hidden md:flex gap-10 text-sm font-medium tracking-wide uppercase text-midnight-rose-700">
<Link className="hover:text-midnight-rose-500 transition-colors" to="#">Method</Link>
<Link className="hover:text-midnight-rose-500 transition-colors" to="#">Features</Link>
<Link className="hover:text-midnight-rose-500 transition-colors" to="#">Science</Link>
</div>
<button onClick={() => navigate('/home')} className="bg-midnight-rose-500 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-midnight-rose-600 transition-all shadow-lg shadow-midnight-rose-200">
            Get Started
        </button>
</nav>
{/*  Hero Section  */}
<section className="max-w-7xl mx-auto px-8 md:px-16 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-10">
<span className="inline-block py-2 px-5 bg-dusty-rose text-midnight-rose-700 text-xs font-bold uppercase tracking-[0.2em] rounded-full">The Digital Sanctuary</span>
<h1 className="font-display text-6xl md:text-8xl leading-[1.05] text-midnight-rose-900">
                Harmonize your life with your <span className="italic text-midnight-rose-500">natural rhythm.</span>
</h1>
<p className="text-lg md:text-xl text-midnight-rose-700/80 max-w-lg leading-relaxed font-light">
                RoseCycle isn't just a tracker. It's a personalized endocrine-aware companion that optimizes your productivity, nutrition, and well-being based on your unique cycle phases.
            </p>
<div className="flex flex-col sm:flex-row gap-5 pt-4">
<button onClick={() => navigate('/home')} className="flex items-center justify-center gap-3 bg-midnight-rose-900 text-white px-10 py-5 rounded-full hover:bg-black transition-all group">
<span className="material-symbols-outlined">rocket_launch</span>
<span className="font-semibold">Enter Sanctuary</span>
</button>
<button onClick={() => navigate('/home')} className="flex items-center justify-center gap-2 text-midnight-rose-900 font-semibold px-8 py-5 group">
                    View Demo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
{/*  Enhanced App Preview (Mocking SCREEN_9 styles)  */}
<div className="relative">
{/*  Decorative blur behind the phone  */}
<div className="absolute -inset-10 bg-gradient-to-tr from-midnight-rose-200 to-sage-mist/40 blur-3xl opacity-50 rounded-full"></div>
{/*  High-Fidelity Mockup Panel  */}
<div className="relative bg-white/40 p-3 rounded-[3rem] shadow-2xl shadow-midnight-rose-100 backdrop-blur-xl border border-white/50">
<div className="bg-soft-blush rounded-[2.5rem] overflow-hidden shadow-inner aspect-[9/16] max-w-[340px] mx-auto relative border border-midnight-rose-50 flex flex-col">
{/*  Screen Content Mirroring Dashboard (SCREEN_9)  */}
<div className="p-6 space-y-4 flex-1">
{/*  Briefing Card  */}
<div className="bg-white/70 p-5 rounded-2xl shadow-[0_8px_20px_-10px_rgba(142,74,75,0.15)] border border-white/80">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-midnight-rose-100 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-midnight-rose-500 text-sm">smart_toy</span>
</div>
<span className="text-[10px] uppercase tracking-widest text-midnight-rose-400 font-bold">Briefing</span>
</div>
<p className="font-display text-lg leading-snug">Day 14. <span className="italic text-midnight-rose-500">Energy peaking.</span> Perfect day for social events.</p>
</div>
{/*  Phase Dial  */}
<div className="bg-white/40 flex-1 rounded-2xl p-6 flex flex-col items-center justify-center relative">
<div className="text-center mb-4">
<h3 className="font-display text-3xl">Day 14</h3>
<p className="text-[10px] uppercase tracking-widest text-midnight-rose-300">Ovulatory</p>
</div>
<div className="relative w-36 h-36">
<svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#f2ecec" strokeWidth="4"/>
<path d="M 50,5 A 45,45 0 0,1 95,50" fill="none" stroke="#8e4a4b" strokeLinecap="round" strokeWidth="6"/>
</svg>
<div className="absolute inset-2 rounded-full overflow-hidden">
<img alt="Flower Icon" className="w-full h-full object-cover grayscale-[0.2]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7TyOcKuHKuPDV9ZiM_CabrTcBeAuVtCA7GB7tQLxIEvyZ52TKsSFvYvls0N51FJXLdL86esYlzFohEPmbescRq4q-g5nOL_aeb-lnqoqRfNYC0_5XykHtwt35MFze978TL5YkSv5OwxuajRYUpyvGRxNUWl422cP7y0Cnhsrln_7xeXR3rbANurfOwhRHKgiSYDQSfIpO0J8k0jh9qkBpCuz8Kq4yRWj96Q1YHoHqiiXT5vPATGmMu5Xrlvchu2DYBDs0_-TOO-o"/>
</div>
</div>
</div>
{/*  Insight Card  */}
<div className="bg-sage-mist/40 p-4 rounded-2xl">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-green-700 text-xs">auto_awesome</span>
<span className="text-[10px] font-bold text-green-800">Proactive Insight</span>
</div>
<div className="h-1.5 w-full bg-white/40 rounded-full overflow-hidden">
<div className="h-full bg-green-600/40 w-2/3"></div>
</div>
</div>
</div>
{/*  App Nav Bar  */}
<div className="p-4 bg-white/80 border-t border-white/50 flex justify-between px-6">
<span className="material-symbols-outlined text-midnight-rose-500" >home_health</span>
<span className="material-symbols-outlined text-slate-300">calendar_today</span>
<span className="material-symbols-outlined text-slate-300">smart_toy</span>
<span className="material-symbols-outlined text-slate-300">self_care</span>
</div>
</div>
</div>
{/*  Floating Decoration  */}
<div className="absolute -bottom-6 -left-6 w-24 h-24 floating-flower opacity-20">
<svg className="text-midnight-rose-300" fill="currentColor" viewBox="0 0 100 100">
<path d="M50 0C55 25 75 45 100 50C75 55 55 75 50 100C45 75 25 55 0 50C25 45 45 25 50 0Z"/>
</svg>
</div>
</div>
</section>
{/*  Content Sections: Improved rhythm and spacing  */}
<section className="max-w-7xl mx-auto px-8 md:px-16 py-32 space-y-32">
{/*  Feature 1  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 space-y-6">
<span className="text-xs font-bold tracking-[0.3em] text-midnight-rose-400 uppercase">Phase Intelligence</span>
<h2 className="font-display text-5xl text-midnight-rose-900 leading-tight">Living in Sync, <br/><span className="italic text-midnight-rose-500">Not in Struggle.</span></h2>
<p className="text-midnight-rose-700/80 leading-relaxed font-light text-lg">
                    Discover why your energy fluctuates and learn how to schedule your life's big moments—interviews, workouts, or rest—around your physiological strengths.
                </p>
</div>
<div className="md:col-span-6 md:col-start-7">
<div className="bg-white/40 rounded-editorial p-10 border border-white/80 shadow-xl shadow-midnight-rose-100/30">
<div className="grid grid-cols-2 gap-6">
<div className="p-6 bg-white/80 rounded-3xl space-y-3">
<span className="material-symbols-outlined text-midnight-rose-400">fitness_center</span>
<h4 className="font-semibold text-sm uppercase tracking-wider">Workouts</h4>
<p className="text-xs text-midnight-rose-600">Switch to HIIT during Ovulation for peak performance.</p>
</div>
<div className="p-6 bg-dusty-rose/40 rounded-3xl space-y-3">
<span className="material-symbols-outlined text-midnight-rose-400">restaurant</span>
<h4 className="font-semibold text-sm uppercase tracking-wider">Nutrition</h4>
<p className="text-xs text-midnight-rose-600">Magnesium-rich foods recommended for Luteal support.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Feature 2  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-6 order-2 md:order-1">
<div className="relative group">
<div className="absolute -inset-4 bg-sage-mist/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Floral Sanctuary Image" className="relative rounded-editorial w-full aspect-video object-cover shadow-2xl saturate-[0.8]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7TyOcKuHKuPDV9ZiM_CabrTcBeAuVtCA7GB7tQLxIEvyZ52TKsSFvYvls0N51FJXLdL86esYlzFohEPmbescRq4q-g5nOL_aeb-lnqoqRfNYC0_5XykHtwt35MFze978TL5YkSv5OwxuajRYUpyvGRxNUWl422cP7y0Cnhsrln_7xeXR3rbANurfOwhRHKgiSYDQSfIpO0J8k0jh9qkBpCuz8Kq4yRWj96Q1YHoHqiiXT5vPATGmMu5Xrlvchu2DYBDs0_-TOO-o"/>
</div>
</div>
<div className="md:col-span-5 md:col-start-8 space-y-6 order-1 md:order-2">
<span className="text-xs font-bold tracking-[0.3em] text-midnight-rose-400 uppercase">Science-Backed Insights</span>
<h2 className="font-display text-5xl text-midnight-rose-900 leading-tight">Your Body <br/><span className="italic text-midnight-rose-500">Deciphered.</span></h2>
<p className="text-midnight-rose-700/80 leading-relaxed font-light text-lg">
                    Advanced algorithms analyze your data to provide proactive health tips, from skin care routines to mood forecasting.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-4 text-midnight-rose-800">
<span className="material-symbols-outlined text-midnight-rose-400">check_circle</span>
<span>Personalized daily briefings</span>
</li>
<li className="flex items-center gap-4 text-midnight-rose-800">
<span className="material-symbols-outlined text-midnight-rose-400">check_circle</span>
<span>Symptom-prediction modeling</span>
</li>
</ul>
</div>
</div>
</section>
{/*  Final Call to Action  */}
<section className="max-w-5xl mx-auto px-8 py-32 text-center">
<div className="bg-midnight-rose-900 text-white rounded-[3rem] p-16 md:p-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10"></div>
<div className="absolute -top-24 -left-24 w-64 h-64 bg-midnight-rose-500/20 blur-[100px] rounded-full"></div>
<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-midnight-rose-500/20 blur-[100px] rounded-full"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="font-display text-5xl md:text-7xl leading-tight">Begin your journey to <span className="italic text-midnight-rose-200">harmony.</span></h2>
<p className="text-midnight-rose-100/70 text-lg md:text-xl font-light">
                    Join over 500,000 women who have reclaimed their power through cycle-awareness.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
<button onClick={() => navigate('/home')} className="bg-white text-midnight-rose-900 px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                        Enter Now
                    </button>
<button onClick={() => navigate('/home')} className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                        Learn More
                    </button>
</div>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="max-w-7xl mx-auto px-8 md:px-16 py-20 border-t border-midnight-rose-100 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="font-display text-2xl italic text-midnight-rose-400">RoseCycle</div>
<div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-midnight-rose-300">
<Link className="hover:text-midnight-rose-500" to="#">Privacy Policy</Link>
<Link className="hover:text-midnight-rose-500" to="#">Terms of Service</Link>
<Link className="hover:text-midnight-rose-500" to="#">Support</Link>
</div>
<p className="text-xs text-midnight-rose-300">© 2024 RoseCycle Digital Sanctuary. All rights reserved.</p>
</footer>
    </>
  );
}

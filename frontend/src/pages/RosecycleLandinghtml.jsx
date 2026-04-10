import React from 'react';
import { Link } from 'react-router-dom';

export default function Rosecyclelandinghtml() {
  return (
    <>
      <a href="#content" className="skip-link">Skip to content</a>
  <header className="site-header">
    <div className="container header-inner">
      <a className="brand" href="#top" aria-label="RoseCycle home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4C12 8.3 9 12.1 9 17a7 7 0 1 0 14 0c0-4.9-3-8.7-7-13Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
            <path d="M16 11c-1.9 2.1-3.1 4-3.1 6.1a3.1 3.1 0 1 0 6.2 0C19.1 15 17.9 13.1 16 11Z" fill="currentColor" fill-opacity=".18" stroke="currentColor" stroke-width="1.6"/>
          </svg>
        </span>
        <span className="brand-name">
          <strong>RoseCycle</strong>
          <span>Agentic menstrual wellness</span>
        </span>
      </a>
      <div className="nav-actions">
        <nav className="nav-links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#audience">Who it's for</a>
          <a href="#experience">Experience</a>
          <a href="#privacy">Privacy</a>
        </nav>
        <button className="theme-toggle" data-theme-toggle aria-label="Switch theme">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <a className="primary-button" href="#cta">Join the waitlist</a>
      </div>
    </div>
  </header>

  <main id="content">
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy reveal visible">
          <div className="eyebrow"><span className="dot"></span>Teen-first, calm by design</div>
          <h1>A softer way to understand your cycle.</h1>
          <p>RoseCycle is an agentic menstrual health app built for teens first and welcoming for every age — a warm, modern companion that helps users track symptoms, learn patterns, and feel prepared instead of overwhelmed.</p>
          <div className="cta-row">
            <a className="primary-button" href="#cta">Get early access</a>
            <a className="outline-button" href="#features">Explore the product</a>
          </div>
          <div className="micro-proof" aria-label="Key product values">
            <span><span className="dot"></span>Daily cycle guidance</span>
            <span><span className="dot"></span>Proactive AI insights</span>
            <span><span className="dot"></span>Private by default</span>
          </div>
        </div>

        <div className="hero-card reveal visible" aria-label="Product preview card">
          <div className="app-shell">
            <div className="shell-top">
              <div>
                <div className="chip">Today's brief</div>
                <strong style="display:block; margin-top:.55rem; font-size:1.1rem;">Cycle day 24 · Luteal phase</strong>
              </div>
              <div className="chip" style="background:rgba(68,118,94,.12); color:var(--color-success); border-color:rgba(68,118,94,.16);">Calm mode on</div>
            </div>
            <div className="hero-panel">
              <article className="phase-card">
                <div className="phase-visual">
                  <div className="phase-ring" aria-hidden="true">
                    <div className="phase-ring-inner">
                      <div>
                        <strong>3 days</strong>
                        <span>until predicted period</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phase-meta">
                  <div>
                    <strong>Energy</strong>
                    Gentle focus
                  </div>
                  <div>
                    <strong>Body</strong>
                    Mild cramps likely
                  </div>
                </div>
              </article>
              <div style="display:grid; gap:1rem;">
                <article className="insight-card">
                  <div className="insight-head">
                    <div>
                      <strong>Agent insight</strong>
                      <div style="color:var(--color-text-muted); font-size:var(--text-xs); margin-top:.15rem;">Based on your last 4 cycles</div>
                    </div>
                    <span className="chip">AI</span>
                  </div>
                  <div className="agent-line">You usually feel lower energy 2–3 days before your period. Want a gentle meal, sleep, and hydration plan for this week?</div>
                </article>
                <div className="mini-grid">
                  <article className="mini-card">
                    <span>Prediction</span>
                    <strong>92%</strong>
                    <small style="color:var(--color-text-muted);">more accurate over time</small>
                  </article>
                  <article className="mini-card">
                    <span>Daily check-in</span>
                    <strong>1 tap</strong>
                    <small style="color:var(--color-text-muted);">flow, mood, pain, notes</small>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Why this product</div>
          <h2>Built around reassurance, not anxiety.</h2>
          <p>Leading cycle apps emphasize period and symptom tracking, prediction, and science-based insights, so this landing page positions RoseCycle around the same core expectations while adding a more proactive, teen-friendly agent experience.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-large accent-surface reveal">
            <div className="feature-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><path d="M5 5l14 14" opacity=".35"/></svg>
            </div>
            <h3>Agentic guidance that feels human</h3>
            <p>The app doesn't wait for users to dig through charts. It notices patterns, prepares them for what is likely next, and explains body changes in clear language.</p>
            <ul>
              <li>Morning briefings with cycle phase, likely symptoms, and calm next steps.</li>
              <li>Pre-period nudges for pads, rest, hydration, and emotional prep.</li>
              <li>Gentle anomaly prompts when a cycle looks shorter, longer, or more intense than usual.</li>
            </ul>
          </article>

          <article className="feature-card reveal">
            <div className="feature-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="4"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
            </div>
            <h3>Simple tracking</h3>
            <p>Fast logs for flow, pain, mood, sleep, energy, cravings, acne, bloating, and notes make the product approachable for teens and still useful for older users.</p>
          </article>

          <article className="feature-card reveal">
            <div className="feature-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18"/><path d="M3 6h18" opacity=".35"/><path d="M3 18h12" opacity=".55"/></svg>
            </div>
            <h3>Insightful dashboard</h3>
            <p>A warm visual dashboard turns cycle data into trends, recurring symptoms, and easy-to-understand timelines instead of sterile clinical screens.</p>
          </article>

          <article className="feature-card reveal">
            <div className="feature-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 10a6 6 0 1 1 12 0c0 7-6 10-6 10S6 17 6 10Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            </div>
            <h3>Privacy-first setup</h3>
            <p>Privacy-first menstrual apps already use that positioning on the market, so RoseCycle makes discretion, local-first behavior, and user control a core promise from the first screen.</p>
          </article>

          <article className="feature-card reveal">
            <div className="feature-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8"/><rect x="3" y="3" width="18" height="18" rx="5"/></svg>
            </div>
            <h3>Installable everywhere</h3>
            <p>As a PWA, the product is framed to feel like an app on a phone and a calm wellness dashboard on desktop, using one shared design language across both.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="audience">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Audience design</div>
          <h2>Teen-first, but never teen-only.</h2>
          <p>The product voice stays clear, safe, and encouraging for first-time trackers while remaining elegant enough for college students, working women, and anyone who wants a calmer cycle companion.</p>
        </div>
        <div className="audience-grid">
          <article className="audience-card reveal">
            <h3>For teens</h3>
            <p>Soft onboarding, plain explanations, and low-friction daily logging reduce embarrassment and make first-time period tracking feel normal.</p>
          </article>
          <article className="audience-card reveal">
            <h3>For busy adults</h3>
            <p>Prediction accuracy, routine reminders, and trend snapshots support planning, school, work, workouts, and emotional self-awareness.</p>
          </article>
          <article className="audience-card reveal">
            <h3>For every phase of life</h3>
            <p>Flexible symptom tracking and educational guidance let the experience grow with the user instead of locking them into a single age bracket.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Experience flow</div>
          <h2>What the landing page communicates.</h2>
          <p>The message stack is simple: understand your cycle, feel supported every day, and trust that your health data is treated with care.</p>
        </div>
        <div className="steps-grid">
          <article className="step-card reveal">
            <div className="step-number">1</div>
            <h3>Log in seconds</h3>
            <p>Users quickly record symptoms, flow, mood, or sleep with a mobile-friendly check-in designed for daily use.</p>
          </article>
          <article className="step-card reveal">
            <div className="step-number">2</div>
            <h3>See the pattern</h3>
            <p>The app turns repeated entries into a phase timeline, likely symptom forecasts, and simple wellness cues.</p>
          </article>
          <article className="step-card reveal">
            <div className="step-number">3</div>
            <h3>Get proactive care</h3>
            <p>The agent surfaces useful nudges before the user asks, helping them prepare rather than react late.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="privacy">
      <div className="container proof-grid">
        <div className="section-head reveal" style="margin-bottom:0;">
          <div className="eyebrow">Trust matters</div>
          <h2>Privacy is part of the product, not a footnote.</h2>
          <p>Market examples show that cycle apps compete on tracking depth, health insight quality, and privacy language, so RoseCycle gives privacy equal visual weight alongside the emotional tone and AI promise.</p>
        </div>
        <div className="quote-card accent-surface reveal">
          <h3>What the site promises</h3>
          <p>Private by default, transparent about what is stored, respectful about health language, and designed to help users feel informed rather than judged.</p>
          <strong>Landing page proof points</strong>
          <p>No creepy surveillance tone, no medical panic language, and no cluttered dashboard aesthetics.</p>
        </div>
      </div>
    </section>

    <section className="cta-band" id="cta">
      <div className="container">
        <article className="cta-card reveal">
          <div className="eyebrow">Launch direction</div>
          <h3 style="font-family:var(--font-display); font-size:clamp(2rem, 4vw, 3.4rem); line-height:1; letter-spacing:-0.04em; margin:.4rem 0 0.7rem; max-width:11ch;">A menstrual app that feels calm, smart, and deeply personal.</h3>
          <p>This first landing page is designed to sell the feeling of the product: a blush-toned, modern PWA for cycle tracking, proactive guidance, and trust-centered care.</p>
          <div className="cta-row">
            <a className="primary-button" href="mailto:hello@rosecycle.app" target="_blank" rel="noopener noreferrer">Request demo</a>
            <a className="ghost-button" href="#top">Back to top</a>
          </div>
        </article>
      </div>
    </section>
  </main>

  <footer>
    <div className="container footer-grid">
      <div className="footer-note">
        RoseCycle concept landing page — designed as a warm, modern entry point for an agentic menstrual health product across desktop and mobile.
      </div>
      <div>Made for a responsive PWA vision.</div>
    </div>
  </footer>
    </>
  );
}

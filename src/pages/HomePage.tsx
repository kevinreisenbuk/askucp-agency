import React from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { AuditForm } from "../components/AuditForm";
import { Footer } from "../components/Footer";
import { SiteHeader } from "../components/SiteHeader";
import { content } from "../content/siteContent";
import type { Lang } from "../lib/site";

export function HomePage({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  const copy = content[lang];

  return (
    <main className="site-shell">
      <SiteHeader lang={lang} page="home" onLangChange={setLang} />

      <section className="hero" id="top">
        <div className="hero-backdrop" aria-hidden="true">
          <span className="hero-grid" />
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
          <span className="hero-signal hero-signal-one" />
          <span className="hero-signal hero-signal-two" />
        </div>
        <div className="hero-content">
          <h1>
            {copy.hero.title.split("|").map((part, index, parts) => (
              <React.Fragment key={part}>
                {part}
                {index < parts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="hero-subhead">{copy.hero.subhead}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#audit">
              {copy.nav.cta}
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="audit-preview" aria-label="Agentic audit deliverables preview">
          <div className="visual-header">
            <span>{copy.hero.panelTitle}</span>
            <span className="visual-meta">{copy.hero.panelMeta}</span>
          </div>
          <ul className="audit-checklist">
            {copy.hero.checks.map((item, index) => (
              <li key={item}>
                <span className="audit-index">0{index + 1}</span>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a className="score-link" href="#audit">
            {copy.hero.panelCta}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="proof-strip" aria-label="Trust signals">
        {copy.trustSignals.map((signal) => (
          <div className="proof-item" key={signal.text}>
            <span className="proof-node" aria-hidden="true" />
            <span className="proof-label">{signal.label}</span>
            <strong>{signal.text}</strong>
          </div>
        ))}
      </section>

      <section className="section" id="problem">
        <div className="section-kicker">{copy.sections.problemKicker}</div>
        <div className="section-heading">
          <h2>{copy.sections.problemTitle}</h2>
        </div>
        <div className="grid three-col">
          {copy.failures.map((item) => {
            const Icon = item.icon;
            return (
              <article className="feature-card danger-card" key={item.title}>
                <Icon size={28} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section solution-band" id="solution">
        <div className="section-kicker">{copy.sections.solutionKicker}</div>
        <div className="section-heading compact">
          <h2>{copy.sections.solutionTitle}</h2>
        </div>
        <div className="grid three-col">
          {copy.solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="feature-card" key={item.title}>
                <span className="step-number">0{index + 1}</span>
                <Icon size={28} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="deliverables-section" id="timeline">
        <div className="timeline-copy">
          <div className="section-kicker">{copy.sections.timelineKicker}</div>
          <h2>{copy.sections.timelineTitle}</h2>
          <p>{copy.sections.timelineText}</p>
          <div className="clean-fact">
            <Zap size={18} />
            <strong>{copy.sections.timelineFact}</strong>
          </div>
        </div>
        <div className="timeline-grid">
          {copy.timeline.map((item) => (
            <article className="timeline-card" key={item.window}>
              <span>{item.window}</span>
              <p>{item.shift}</p>
            </article>
          ))}
        </div>
      </section>

      <AuditForm copy={copy} />
      <Footer lang={lang} />
    </main>
  );
}

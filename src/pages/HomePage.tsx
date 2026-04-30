import React from "react";
import { ArrowRight } from "lucide-react";
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
        <div className="hero-content">
          <span className="hero-eyebrow">§ {copy.hero.eyebrow}</span>
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
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <aside className="specimen" aria-label="Toolkit specimen output">
          <div className="specimen-head">
            <span className="specimen-title">{copy.specimen.title}</span>
            <span className="specimen-version">{copy.specimen.version}</span>
          </div>
          <div className="specimen-meta">
            {copy.specimen.meta.map((row) => (
              <div className="specimen-meta-row" key={row.label}>
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
          {copy.specimen.blocks.map((block) => (
            <div className="specimen-block" key={block.title}>
              <div className="specimen-block-title">{block.title}</div>
              {block.rows.map((row) => (
                <div className="specimen-row" key={row.key}>
                  <span className="specimen-key">{row.key}</span>
                  <span className={`specimen-value state-${row.state}`}>{row.value}</span>
                </div>
              ))}
            </div>
          ))}
          <a className="specimen-cta" href="#audit">
            {copy.specimen.cta}
          </a>
        </aside>
      </section>

      <section className="trust-strip" aria-label="Trust signals">
        {copy.trustSignals.map((signal) => (
          <div className="trust-item" key={signal.text}>
            <span className="trust-label">{signal.label}</span>
            <span className="trust-text">{signal.text}</span>
          </div>
        ))}
      </section>

      <section className="toolkit-section" id="toolkit">
        <div className="toolkit-copy">
          <div className="section-kicker">{copy.toolkit.kicker}</div>
          <h2>{copy.toolkit.title}</h2>
          <p>{copy.toolkit.text}</p>
          <div className="scale-number">{copy.toolkit.scaleNumber}</div>
          <div className="scale-label">{copy.toolkit.scaleLabel}</div>
        </div>
        <div className="toolkit-modules">
          {copy.toolkit.modules.map((m) => (
            <div className="module-row" key={m.num}>
              <div className="module-num">{m.num}</div>
              <div className="module-body">
                <div className="module-label">{m.label}</div>
                <div className="module-desc">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="problem">
        <div className="section-kicker">{copy.sections.problemKicker}</div>
        <div className="section-heading">
          <h2>{copy.sections.problemTitle}</h2>
        </div>
        <div className="grid three-col">
          {copy.failures.map((item, index) => (
            <article className="feature-card danger-card" key={item.title}>
              <span className="feature-card-num">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section solution-band" id="solution">
        <div className="section-kicker">{copy.sections.solutionKicker}</div>
        <div className="section-heading compact">
          <h2>{copy.sections.solutionTitle}</h2>
        </div>
        <div className="grid three-col">
          {copy.solutions.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <span className="step-label">Step 0{index + 1}</span>
              <span className="feature-card-num">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="deliverables-section" id="timeline">
        <div className="timeline-copy">
          <div className="section-kicker">{copy.sections.timelineKicker}</div>
          <h2>{copy.sections.timelineTitle}</h2>
          <p>{copy.sections.timelineText}</p>
          <div className="timeline-fact">{copy.sections.timelineFact}</div>
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

      <section className="about-strip" aria-label="AskUCP credibility">
        <div className="about-copy">
          <div className="section-kicker">{copy.about.kicker}</div>
          <h2>{copy.about.title}</h2>
          <p>{copy.about.text}</p>
        </div>
        <ul className="about-points">
          {copy.about.points.map((point) => (
            <li key={point}>
              <span className="about-points-check" aria-hidden="true">
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <AuditForm copy={copy} />
      <Footer lang={lang} />
    </main>
  );
}

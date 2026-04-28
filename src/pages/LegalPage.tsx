import { Footer } from "../components/Footer";
import { SiteHeader } from "../components/SiteHeader";
import { content } from "../content/siteContent";
import type { Lang, LegalType } from "../lib/site";

export function LegalPage({
  lang,
  setLang,
  type,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  type: LegalType;
}) {
  const copy = content[lang];
  const legal = copy.legal[type];

  return (
    <main className="site-shell">
      <SiteHeader lang={lang} page={type} onLangChange={setLang} />

      <section className="legal-layout" aria-label={legal.title}>
        <div className="legal-header">
          <h1>{legal.title}</h1>
          <p className="legal-updated">{copy.legal.updated}</p>
          <p className="legal-intro">{legal.intro}</p>
        </div>
        <div className="legal-list">
          {legal.sections.map((section) => (
            <article className="legal-item" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}

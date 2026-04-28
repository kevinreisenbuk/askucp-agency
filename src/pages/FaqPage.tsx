import { Footer } from "../components/Footer";
import { SiteHeader } from "../components/SiteHeader";
import { content } from "../content/siteContent";
import type { Lang } from "../lib/site";

export function FaqPage({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  const copy = content[lang];

  return (
    <main className="site-shell">
      <SiteHeader lang={lang} page="faq" onLangChange={setLang} />

      <section className="faq-layout" aria-label="Frequently asked questions">
        <aside className="faq-aside">
          <h2>{copy.faq.asideTitle}</h2>
          <p>{copy.faq.asideText}</p>
        </aside>
        <div className="faq-list">
          {copy.faq.items.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}

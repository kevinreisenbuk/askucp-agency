import { content } from "../content/siteContent";
import { localizedPath } from "../lib/routing";
import type { Lang } from "../lib/site";

export function Footer({ lang }: { lang: Lang }) {
  const copy = content[lang];

  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <a className="brand footer-brand" href={localizedPath("home", lang)} aria-label="AskUCP Agency home">
          <span>AskUCP Agency</span>
        </a>
        <p>{copy.footer.tagline}</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href={localizedPath("privacy", lang)}>{copy.footer.privacy}</a>
        <a href={localizedPath("terms", lang)}>{copy.footer.terms}</a>
      </nav>
    </footer>
  );
}

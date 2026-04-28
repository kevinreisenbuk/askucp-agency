import { content } from "../content/siteContent";
import { localizedPath } from "../lib/routing";
import type { Lang, Page } from "../lib/site";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteHeader({
  lang,
  page,
  onLangChange,
}: {
  lang: Lang;
  page: Page;
  onLangChange: (lang: Lang) => void;
}) {
  const copy = content[lang];
  const homePath = localizedPath("home", lang);
  const faqPath = localizedPath("faq", lang);
  const auditPath = `${homePath}#audit`;

  const navItems =
    page === "home"
      ? [
          { href: "#problem", label: copy.nav.problem },
          { href: "#solution", label: copy.nav.solution },
          { href: "#timeline", label: copy.nav.timeline },
          { href: faqPath, label: copy.nav.faq },
        ]
      : page === "faq"
        ? [
            { href: `${homePath}#problem`, label: copy.nav.problem },
            { href: `${homePath}#solution`, label: copy.nav.solution },
            { href: `${homePath}#timeline`, label: copy.nav.timeline },
          ]
        : [
            { href: `${homePath}#problem`, label: copy.nav.problem },
            { href: `${homePath}#solution`, label: copy.nav.solution },
            { href: faqPath, label: copy.nav.faq },
          ];

  return (
    <header className="nav">
      <a className="brand" href={page === "home" ? "#top" : homePath} aria-label="AskUCP Agency home">
        <span>AskUCP Agency</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={`${page}-${item.href}`}>
            {item.label}
          </a>
        ))}
      </nav>
      <LanguageSwitch lang={lang} onChange={onLangChange} />
      <a className="nav-cta" href={auditPath}>
        {copy.nav.cta}
      </a>
    </header>
  );
}

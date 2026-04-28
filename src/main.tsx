import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { getInitialLang, resolvePage, localizedPath } from "./lib/routing";
import type { Lang } from "./lib/site";
import { SeoHead } from "./seo/SeoHead";
import { HomePage } from "./pages/HomePage";
import { FaqPage } from "./pages/FaqPage";
import { LegalPage } from "./pages/LegalPage";

function App() {
  const page = resolvePage(window.location.pathname);
  const [lang, setLang] = React.useState<Lang>(getInitialLang);

  React.useEffect(() => {
    window.history.replaceState({}, "", `${localizedPath(page, lang)}${window.location.hash}`);
  }, [lang, page]);

  return (
    <React.Fragment>
      <SeoHead page={page} lang={lang} />
      {page === "faq" ? <FaqPage lang={lang} setLang={setLang} /> : null}
      {page === "privacy" ? <LegalPage lang={lang} setLang={setLang} type="privacy" /> : null}
      {page === "terms" ? <LegalPage lang={lang} setLang={setLang} type="terms" /> : null}
      {page === "home" ? <HomePage lang={lang} setLang={setLang} /> : null}
    </React.Fragment>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

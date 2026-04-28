import type { Lang, Page } from "./site";

export function getInitialLang(): Lang {
  if (window.location.pathname === "/et" || window.location.pathname.startsWith("/et/")) {
    return "et";
  }

  const searchLang = new URLSearchParams(window.location.search).get("lang");
  if (searchLang === "et" || searchLang === "en") {
    return searchLang;
  }

  const storedLang = window.localStorage.getItem("askucp-lang");
  if (storedLang === "et" || storedLang === "en") {
    return storedLang;
  }

  return "en";
}

export function resolvePage(pathname: string): Page {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const stripped = normalized === "/et" ? "/" : normalized.replace(/^\/et(?=\/|$)/, "") || "/";

  if (stripped === "/faq" || stripped === "/faq.html") {
    return "faq";
  }
  if (stripped === "/privacy" || stripped === "/privacy.html") {
    return "privacy";
  }
  if (stripped === "/terms" || stripped === "/terms.html") {
    return "terms";
  }

  return "home";
}

export function localizedPath(page: Page, lang: Lang) {
  const base =
    page === "faq" ? "/faq" :
    page === "privacy" ? "/privacy" :
    page === "terms" ? "/terms" :
    "/";

  if (lang === "et") {
    return base === "/" ? "/et/" : `/et${base}`;
  }

  return base;
}

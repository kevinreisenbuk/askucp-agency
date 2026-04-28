import React from "react";
import { content } from "../content/siteContent";
import { localizedPath } from "../lib/routing";
import { siteUrl, type Lang, type Page } from "../lib/site";

function setMeta(name: string, value: string, attribute = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = value;
}

function setCanonical(path: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = `${siteUrl}${path}`;
}

function setAlternate(hreflang: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`);
  if (!link) {
    link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = hreflang;
    document.head.appendChild(link);
  }
  link.href = href;
}

function setJsonLd(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function SeoHead({ page, lang }: { page: Page; lang: Lang }) {
  React.useEffect(() => {
    const isFaq = page === "faq";
    const isPrivacy = page === "privacy";
    const isTerms = page === "terms";
    const copy = content[lang];
    const title =
      isFaq ? copy.seo.faqTitle :
      isPrivacy ? copy.seo.privacyTitle :
      isTerms ? copy.seo.termsTitle :
      copy.seo.homeTitle;
    const description =
      isFaq ? copy.seo.faqDescription :
      isPrivacy ? copy.seo.privacyDescription :
      isTerms ? copy.seo.termsDescription :
      copy.seo.homeDescription;
    const path = localizedPath(page, lang);
    const pageUrl = `${siteUrl}${path}`;

    document.title = title;
    document.documentElement.lang = lang;
    window.localStorage.setItem("askucp-lang", lang);
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", pageUrl, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setCanonical(path);
    setAlternate("x-default", `${siteUrl}${localizedPath(page, "en")}`);
    setAlternate("en-US", `${siteUrl}${localizedPath(page, "en")}`);
    setAlternate("et-EE", `${siteUrl}${localizedPath(page, "et")}`);

    setJsonLd("organization-schema", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AskUCP Agency",
      url: siteUrl,
      description: copy.seo.orgDescription,
      areaServed: "Global",
      serviceType: "Generative Engine Optimization and agentic commerce readiness",
      email: "kevin@100toolkit.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "kevin@100toolkit.com",
          availableLanguage: ["en", "et"],
        },
      ],
      knowsAbout: [
        "AI search optimization",
        "Generative Engine Optimization",
        "Ecommerce technical SEO",
        "llms.txt",
        "Schema.org",
        "UCP",
        "ACP",
      ],
    });

    setJsonLd("website-schema", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "AskUCP Agency",
      url: siteUrl,
      inLanguage: [lang === "et" ? "et-EE" : "en-US"],
      description: copy.seo.homeDescription,
    });

    setJsonLd("webpage-schema", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "AskUCP Agency",
        url: siteUrl,
      },
      inLanguage: lang === "et" ? "et-EE" : "en-US",
      description,
    });

    setJsonLd("breadcrumb-schema", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AskUCP Agency",
          item: `${siteUrl}${localizedPath("home", lang)}`,
        },
        ...(page === "home"
          ? []
          : [{
              "@type": "ListItem",
              position: 2,
              name: title.replace(" | AskUCP Agency", ""),
              item: pageUrl,
            }]),
      ],
    });

    if (isFaq) {
      setJsonLd("faq-schema", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        url: pageUrl,
        inLanguage: lang === "et" ? "et-EE" : "en-US",
        mainEntity: copy.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      });
    } else {
      document.getElementById("faq-schema")?.remove();
      if (page === "home") {
        setJsonLd("service-schema", {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "AskUCP Agency",
          url: siteUrl,
          description,
          areaServed: "Global",
          inLanguage: lang === "et" ? "et-EE" : "en-US",
          serviceType: [
            "Generative Engine Optimization",
            "AI search optimization",
            "Agentic commerce readiness",
            "Ecommerce technical SEO",
          ],
        });
      } else {
        document.getElementById("service-schema")?.remove();
      }
    }
  }, [lang, page]);

  return null;
}

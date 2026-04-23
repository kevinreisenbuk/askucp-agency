import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileCheck2,
  Gauge,
  LockKeyhole,
  Network,
  RadioTower,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";
import "./styles.css";

const siteUrl = "https://askucp.agency";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
type Lang = "en" | "et";

const content = {
  en: {
    seo: {
      homeTitle: "AskUCP Agency | Agent-Ready GEO Consulting",
      homeDescription:
        "AskUCP Agency helps ecommerce stores become visible, cited, and purchasable by AI agents through GEO, UCP, ACP, schema, and llms.txt consulting.",
      faqTitle: "GEO & Agentic Commerce FAQ | AskUCP Agency",
      faqDescription:
        "Answers about GEO, AI search optimization, llms.txt, UCP, ACP, and agentic commerce readiness for ecommerce stores.",
      orgDescription:
        "GEO and agentic commerce consulting agency for ecommerce stores preparing for AI search, UCP, ACP, schema, and llms.txt.",
    },
    nav: {
      problem: "Problem",
      solution: "Solution",
      timeline: "Timeline",
      faq: "FAQ",
      cta: "Request AI Audit",
    },
    hero: {
      title: "Make Your Store Agent-Ready.",
      subhead:
        "Most online stores are still invisible to AI. We help your products become visible, cited, and ready for AI-driven recommendations before your competitors catch up.",
      proof: "Free first-pass review for ecommerce stores",
      panelTitle: "A simple check for store owners",
      checks: [
        "Can AI find your products?",
        "Is your brand the top choice?",
        "What’s blocking your traffic?",
      ],
      panelCta: "Request AI Audit",
    },
    trustSignals: [
      "Shopify, WooCommerce, WordPress",
      "Schema, llms.txt, UCP, ACP, citations",
      "Dev-ready fixes, not strategy theatre",
    ],
    failures: [
      {
        icon: ShieldAlert,
        title: "Hidden Product Pages",
        text: "AI tools may not see your products, even when customers can.",
      },
      {
        icon: Network,
        title: "AI Can’t Buy From You",
        text: "Your store lacks the protocols and structure AI agents need to move toward checkout.",
      },
      {
        icon: RadioTower,
        title: "Weak Brand Signals",
        text: "Your store is missing the external signals AI systems use to decide who to trust.",
      },
    ],
    solutions: [
      {
        icon: Gauge,
        title: "Full GEO + Technical Audit",
        text: "A scored baseline covering AI visibility, crawlability, product data, and commerce readiness.",
      },
      {
        icon: FileCheck2,
        title: "Prioritized Action Report",
        text: "A plain-English roadmap ranked by impact, urgency, and revenue relevance.",
      },
      {
        icon: Code2,
        title: "Implementation-Ready Code Blocks",
        text: "Schema, llms.txt, and protocol stubs your developers can ship without guesswork.",
      },
    ],
    sections: {
      problemKicker: "Why stores disappear",
      problemTitle: "Your catalogue may exist, but AI agents cannot buy what they cannot understand.",
      solutionKicker: "What We Provide",
      solutionTitle: "We turn your store into something AI agents can crawl, cite, recommend, and eventually buy from.",
      timelineKicker: "Timeline",
      timelineTitle: "The window is narrow.",
      timelineText: "AI search is already shaping product discovery. Agentic checkout is the next step.",
      timelineFact: "GEO-optimized content receives 30-115% more citations in published AI-search case studies.",
      auditKicker: "Lead The Agent Layer",
      auditTitle: "Claim Your First-Mover Advantage.",
      auditText:
        "Get a focused 30-day roadmap for making your store discoverable, citeable, and ready for AI-led checkout.",
      auditAssurance: "Response within 24 hours. No sales call unless we find a real agent-readiness gap.",
    },
    timeline: [
      { window: "Today", shift: "GEO-optimized stores appear in Perplexity and ChatGPT." },
      { window: "3-6 Months", shift: "Apple Intelligence and Gemini deepen shopping integration." },
      { window: "6-12 Months", shift: "Agentic checkout moves into mainstream commerce flows." },
    ],
    form: {
      name: "Name",
      companyUrl: "Company URL",
      required: "Required",
      revenue: "Monthly Revenue",
      revenuePlaceholder: "Select range",
      email: "Email",
      platform: "Platform",
      platformPlaceholder: "Select platform",
      submit: "Request AI Audit",
      privacy: "Your URL is used only to prepare the audit response.",
      statusSubmitting: "Submitting your audit request...",
      statusSuccess: "Audit request received. We’ll review your store and respond within 24 hours.",
      statusLocal: "Saved locally for testing. Add Supabase env vars to store requests in the database.",
      statusSupabaseFail:
        "Saved locally, but Supabase did not accept the request. Check table setup and environment variables.",
      invalidUrl: "Enter a valid store URL.",
      invalidEmail: "Enter a valid email so we can send the audit response.",
      placeholders: {
        name: "Alex Carter",
        companyUrl: "yourstore.com",
        email: "you@company.com",
      },
      revenues: ["$0-$50k", "$50k-$250k", "$250k-$1M", "$1M+"],
      platforms: ["Shopify", "WooCommerce", "WordPress", "Custom"],
    },
    faq: {
      asideTitle: "GEO is no longer only content.",
      asideText:
        "The new ecommerce surface is machine-read, answer-led, and increasingly transactional. Your store needs to be crawlable, citeable, structured, and compatible with agentic buying flows.",
      items: [
        {
          question: "What is Generative Engine Optimization for ecommerce?",
          answer:
            "Generative Engine Optimization, or GEO, prepares your store to be understood and cited by AI systems such as ChatGPT, Perplexity, Gemini, Claude, and AI search experiences. For ecommerce, that means making product data, category pages, reviews, schema, brand signals, and crawlable content clear enough for AI agents to recommend your products.",
        },
        {
          question: "How is GEO different from traditional SEO?",
          answer:
            "Traditional SEO is primarily about ranking pages in search results. GEO is about being selected, cited, summarized, and recommended inside AI-generated answers. The two overlap, but GEO puts more weight on structured product facts, entity consistency, third-party trust signals, answer-ready content, and machine-readable commerce data.",
        },
        {
          question: "Why are ecommerce stores invisible to AI agents?",
          answer:
            "Many ecommerce stores rely on JavaScript-rendered catalogues, thin product descriptions, incomplete schema, blocked crawlers, missing llms.txt guidance, inconsistent brand signals, and checkout flows that agents cannot interpret. Humans may see the store, but AI crawlers and shopping agents may see incomplete product data.",
        },
        {
          question: "What is an Agent Readiness Score?",
          answer:
            "It is AskUCP Agency's practical scorecard for how ready your store is for AI discovery and agentic commerce. We review crawler access, rendered product data, schema, llms.txt, brand and entity signals, citation potential, and UCP or ACP readiness, then turn the gaps into a prioritized roadmap.",
        },
        {
          question: "What are UCP and ACP?",
          answer:
            "UCP, Universal Commerce Protocol, is an open commerce protocol co-developed by Shopify and Google for agentic shopping journeys. ACP, Agentic Commerce Protocol, is the OpenAI and Stripe protocol behind Instant Checkout in ChatGPT. Ecommerce brands should track both because they affect how AI agents discover products and complete purchases.",
        },
        {
          question: "Do I need UCP, ACP, or both?",
          answer:
            "Most ecommerce brands should prepare for both. ACP is currently associated with ChatGPT-native checkout flows, while UCP is designed for broader commerce lifecycle support across discovery, checkout, fulfillment, and post-purchase workflows. The right priority depends on your platform, payment stack, catalogue, and customer acquisition channels.",
        },
        {
          question: "What does AskUCP Agency check in an audit?",
          answer:
            "We check AI crawler access, server-rendered product visibility, robots and sitemap setup, product and organization schema, llms.txt, product feed quality, review and brand signals, AI citation opportunities, content gaps, and UCP or ACP implementation readiness. The result is a scored baseline and a 30-day action roadmap.",
        },
        {
          question: "Does this work for Shopify, WooCommerce, and WordPress stores?",
          answer:
            "Yes. The audit is platform-aware. Shopify stores often need product data, schema, app, and agentic storefront checks. WooCommerce and WordPress stores often need crawlability, performance, schema, review, and content-structure improvements.",
        },
        {
          question: "What is llms.txt and should my store have one?",
          answer:
            "llms.txt is an emerging file format used to guide AI systems toward important site content. It is not a replacement for SEO, schema, sitemaps, or product feeds, but it can help clarify your most useful pages, documentation, policies, and commercial content for AI systems.",
        },
        {
          question: "How fast can we improve AI visibility?",
          answer:
            "Technical fixes such as schema, crawlability, llms.txt, and product data cleanup can often be shipped quickly. Citation growth and brand authority usually take longer because AI systems rely on repeated, consistent signals across your site, reviews, social platforms, editorial mentions, and trusted third-party sources.",
        },
      ],
    },
    footer: {
      tagline: "AI visibility for ecommerce.",
    },
  },
  et: {
    seo: {
      homeTitle: "AskUCP Agency | GEO ja AI‑valmidus e‑poodidele",
      homeDescription:
        "AskUCP Agency aitab e‑poodidel saada AI jaoks nähtavaks, usaldusväärseks ja ostuks valmis GEO, skeemi, llms.txt ning agentse kaubanduse valmisoleku kaudu.",
      faqTitle: "GEO ja agentse kaubanduse KKK | AskUCP Agency",
      faqDescription:
        "Vastused GEO, AI-otsingu optimeerimise, llms.txt, UCP, ACP ja agentse kaubanduse valmisoleku kohta e‑poodidele.",
      orgDescription:
        "GEO ja agentse kaubanduse konsultatsioon e‑poodidele, kes valmistuvad AI-otsinguks, UCP-ks, ACP-ks, skeemiks ja llms.txt-ks.",
    },
    nav: {
      problem: "Probleem",
      solution: "Lahendus",
      timeline: "Ajajoon",
      faq: "KKK",
      cta: "Küsi AI auditit",
    },
    hero: {
      title: "Tee oma veebileht|AI jaoks|nähtavaks",
      subhead:
        "Enamik e‑poode on AI jaoks endiselt nähtamatud. Aitame muuta sinu tooted AI jaoks nähtavaks, usaldusväärseks ja soovitamiseks valmis enne, kui konkurendid järele jõuavad.",
      proof: "Tasuta esmane ülevaade e‑poodidele",
      panelTitle: "Lihtne kontroll poeomanikule",
      checks: [
        "Kas AI leiab su tooted üles?",
        "Kas sinu bränd on esimene valik?",
        "Mis pidurdab su liiklust?",
      ],
      panelCta: "Küsi AI auditit",
    },
    trustSignals: [
      "Shopify, WooCommerce, WordPress",
      "Schema, llms.txt, UCP, ACP ja viited",
      "Arendajale valmis koodijupid, mitte tühi strateegiajutt",
    ],
    failures: [
      {
        icon: ShieldAlert,
        title: "Peidetud tootelehed",
        text: "AI ei pruugi sinu tooteid näha isegi siis, kui kliendid neid näevad.",
      },
      {
        icon: Network,
        title: "AI ei saa sinult osta",
        text: "Sinu poes puudub tehniline valmisolek, mis aitaks AI-l liikuda soovitusest ostuni.",
      },
      {
        icon: RadioTower,
        title: "Nõrgad brändisignaalid",
        text: "Sinu poel puuduvad usaldussignaalid, mille põhjal AI otsustab, keda soovitada.",
      },
    ],
    solutions: [
      {
        icon: Gauge,
        title: "Täielik GEO + tehniline audit",
        text: "Selge ülevaade sellest, kui hästi AI sinu poodi näeb ja mõistab.",
      },
      {
        icon: FileCheck2,
        title: "Prioriteetne tegevusplaan",
        text: "Selges keeles tegevusplaan, järjestatud mõju, kiireloomulisuse ja ärilise väärtuse järgi.",
      },
      {
        icon: Code2,
        title: "Kohe rakendatavad koodiplokid",
        text: "Schema, llms.txt ja protokollide lähtefailid, mille arendaja saab kiiresti kasutusse võtta.",
      },
    ],
    sections: {
      problemKicker: "Miks poed kaovad",
      problemTitle: "Sinu kataloog võib olemas olla, kuid AI-agent ei saa osta seda, millest ta aru ei saa.",
      solutionKicker: "Mida me teeme",
      solutionTitle: "Muudame sinu poe selliseks, et AI saaks sellest aru, seda soovitada ja ostuni viia.",
      timelineKicker: "Ajajoon",
      timelineTitle: "Tegutseda tuleb praegu.",
      timelineText: "AI-otsing mõjutab toodete leidmist juba täna. Järgmisena liigub ostuprotsess üha rohkem AI-agentide kätte.",
      timelineFact: "GEO jaoks optimeeritud sisu saab avaldatud AI-otsingu juhtumites 30–115% rohkem viiteid.",
      auditKicker: "AI-kaubanduse eelis",
      auditTitle: "Võta esimese tulija eelis.",
      auditText:
        "Saad selge 30 päeva tegevuskava, et muuta oma pood AI jaoks leitavaks, usaldusväärseks ja AI-juhitud ostuks valmis.",
      auditAssurance: "Vastame 24 tunni jooksul. Müügikõnet ei tule, kui me ei leia päris puudujääki.",
    },
    timeline: [
      { window: "Täna", shift: "GEO jaoks optimeeritud poed jõuavad AI otsingumootoritesse." },
      { window: "3–6 kuud", shift: "Apple Intelligence ja Gemini toovad ostlemise AI-vastustesse veel tugevamalt." },
      { window: "6–12 kuud", shift: "AI-agentide vahendatud ostuteekonnad liiguvad peavoolu." },
    ],
    form: {
      name: "Nimi",
      companyUrl: "Ettevõtte URL",
      required: "Kohustuslik",
      revenue: "Kuine käive",
      revenuePlaceholder: "Vali vahemik",
      email: "E-post",
      platform: "Platvorm",
      platformPlaceholder: "Vali platvorm",
      submit: "Küsi AI auditit",
      privacy: "Sinu URL-i kasutatakse ainult auditi ettevalmistamiseks.",
      statusSubmitting: "Saadan auditipäringut...",
      statusSuccess: "Auditipäring on käes. Vaatame poe üle ja vastame 24 tunni jooksul.",
      statusLocal: "Testimiseks salvestatud lokaalselt. Andmebaasi salvestamiseks lisa Supabase'i keskkonnamuutujad.",
      statusSupabaseFail:
        "Salvestatud lokaalselt, kuid Supabase ei võtnud päringut vastu. Kontrolli tabeli seadistust ja keskkonnamuutujaid.",
      invalidUrl: "Sisesta korrektne poe URL.",
      invalidEmail: "Sisesta korrektne e-post, et saaksime auditivastuse saata.",
      placeholders: {
        name: "Kadri Kask",
        companyUrl: "yourstore.com",
        email: "sina@ettevote.ee",
      },
      revenues: ["$0-$50k", "$50k-$250k", "$250k-$1M", "$1M+"],
      platforms: ["Shopify", "WooCommerce", "WordPress", "Muu"],
    },
    faq: {
      asideTitle: "GEO ei ole enam ainult sisu.",
      asideText:
        "E‑kaubandus liigub üha rohkem AI suunas. Selleks peab sinu pood olema AI jaoks kergesti leitav, arusaadav ja hästi üles ehitatud.",
      items: [
        {
          question: "Mis on GEO?",
          answer:
            "Generative Engine Optimization ehk GEO valmistab sinu poe ette selleks, et AI-süsteemid nagu ChatGPT, Perplexity, Gemini, Claude ja teised AI-tööriistad saaksid sinu poodi mõista ja sellele viidata. E‑kaubanduses tähendab see, et tooteandmed, kategoorialehed, arvustused, skeem, brändisignaalid ja ligipääsetav sisu oleksid AI-agentidele piisavalt selged, et sinu tooteid soovitada.",
        },
        {
          question: "Kuidas erineb GEO tavalisest SEO-st?",
          answer:
            "SEO eesmärk on tõsta lehed otsingutulemustes kõrgemale. GEO eesmärk on, et AI valiks sind välja, viitaks sulle, võtaks sinu info kokku ja soovitaks sind oma vastustes. Need kaks kattuvad, kuid GEO paneb suurema rõhu struktureeritud faktidele, usaldussignaalidele, vastamiseks sobivale sisule ja masinloetavatele kaubandusandmetele.",
        },
        {
          question: "Miks on e‑poed AI-agentidele nähtamatud?",
          answer:
            "Paljud e‑poed kasutavad JavaScriptiga renderdatud katalooge, lühikesi tootekirjeldusi, puudulikke skeeme, blokeeritud ligipääsu robotitele, puuduvaid llms.txt juhiseid, ebaühtlaseid brändisignaale ja ostuteekondi, millest AI aru ei saa. Inimene võib poodi näha, kuid AI-agent näeb sageli ainult poolikut infot.",
        },
        {
          question: "Mis on Agent Readiness Score?",
          answer:
            "See on praktiline hinnang sellele, kui hästi AI sinu poodi leiab, mõistab ja soovitab. Vaatame üle peamised takistused, mis hoiavad sinu poe AI jaoks varjus, ning anname selge tegevusplaani, mida parandada esimesena.",
        },
        {
          question: "Mis on UCP ja ACP?",
          answer:
            "UCP ja ACP on uued tehnilised standardid, mis aitavad AI-l tooteid leida ja oste paremini lõpule viia. E‑poodide jaoks on need olulised, sest need mõjutavad seda, kuidas AI-agendid sinu tooteid mõistavad, soovitavad ja ostuni juhivad.",
        },
        {
          question: "Kas mul on vaja UCP-d, ACP-d või mõlemat?",
          answer:
            "Enamik e‑poode peaks valmistuma mõlemaks. ACP seostub praegu ChatGPT-põhiste ostuvoogudega, UCP on mõeldud laiemalt avastuse, ostu lõpuleviimise, täitmise ja järelteeninduse jaoks. Õige prioriteet sõltub sinu platvormist, makselahendusest, kataloogist ja kanalitest.",
        },
        {
          question: "Mida AskUCP Agency auditis kontrollib?",
          answer:
            "Kontrollime AI-robotite ligipääsu, serveris renderdatud tootelehti, robots.txt ja sitemap'i seadistust, toote- ja organisatsiooniskeemi, llms.txt faili, tootevoogude kvaliteeti, arvustuste ja brändisignaalide tugevust, AI-viidete võimalusi, sisulünki ning UCP või ACP rakendamise valmisolekut. Tulemuseks on selge hinnang ja 30 päeva tegevuskava.",
        },
        {
          question: "Kas see töötab Shopify, WooCommerce’i ja WordPressi poodidele?",
          answer:
            "Jah. Audit arvestab platvormi eripäradega. Shopify poed vajavad sageli tooteandmete, skeemi, rakenduste ja AI jaoks loetava poevaate kontrolli. WooCommerce’i ja WordPressi poed vajavad tihti parandusi ligipääsetavuses, jõudluses, skeemis, arvustustes ja sisustruktuuris.",
        },
        {
          question: "Mis on llms.txt ja kas mu poel peaks see olema?",
          answer:
            "llms.txt on kujunev failivorming, millega saab AI-süsteemidele suunata sinu saidi kõige olulisemat sisu. See ei asenda SEO-d, skeemi, sitemap'e ega tootevooge, kuid aitab AI-l kiiremini mõista, millised lehed, juhendid, poliitikad ja kommertssisu on sinu saidil kõige tähtsamad.",
        },
        {
          question: "Kui kiiresti saab AI nähtavust parandada?",
          answer:
            "Tehnilised parandused, nagu skeem, ligipääsetavus, llms.txt ja tooteandmete korrastus, saab sageli kiiresti tehtud. Viidatavuse ja brändi autoriteedi kasv võtab rohkem aega, sest AI tugineb korduvatele ja järjepidevatele signaalidele sinu saidilt, arvustustest, sotsiaalmeediast, meediakajastustest ja usaldusväärsetest kolmandatest allikatest.",
        },
      ],
    },
    footer: {
      tagline: "AI nähtavus e‑poodidele.",
    },
  },
} as const;

function setMeta(name: string, content: string, attribute = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
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

function getInitialLang(): Lang {
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

function localizedPath(page: "home" | "faq", lang: Lang) {
  const base = page === "faq" ? "/faq" : "/";
  return lang === "et" ? `${base}?lang=et` : base;
}

function LanguageSwitch({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="language-switch" aria-label="Language switcher">
      <button className={lang === "en" ? "active" : ""} type="button" onClick={() => onChange("en")}>
        ENG
      </button>
      <button className={lang === "et" ? "active" : ""} type="button" onClick={() => onChange("et")}>
        EST
      </button>
    </div>
  );
}

function SeoHead({ page, lang }: { page: "home" | "faq"; lang: Lang }) {
  React.useEffect(() => {
    const isFaq = page === "faq";
    const copy = content[lang];
    const title = isFaq ? copy.seo.faqTitle : copy.seo.homeTitle;
    const description = isFaq ? copy.seo.faqDescription : copy.seo.homeDescription;
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
    setAlternate("en", `${siteUrl}${localizedPath(page, "en")}`);
    setAlternate("et", `${siteUrl}${localizedPath(page, "et")}`);

    setJsonLd("organization-schema", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AskUCP Agency",
      url: siteUrl,
      description: copy.seo.orgDescription,
      areaServed: "Global",
      serviceType: "Generative Engine Optimization and agentic commerce readiness",
      email: "kevin@100toolkit.com",
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
    }
  }, [lang, page]);

  return null;
}

function App() {
  const isFaq =
    window.location.pathname === "/faq" ||
    window.location.pathname === "/faq/" ||
    window.location.pathname === "/faq.html";
  const [lang, setLang] = React.useState<Lang>(getInitialLang);
  const [formData, setFormData] = React.useState({
    name: "",
    companyUrl: "",
    monthlyRevenue: "",
    email: "",
    platform: "",
  });
  const [formStatus, setFormStatus] = React.useState("");
  const copy = content[lang];

  React.useEffect(() => {
    const url = new URL(window.location.href);
    if (lang === "et") {
      url.searchParams.set("lang", "et");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }, [lang]);

  if (isFaq) {
    return <FaqPage lang={lang} setLang={setLang} />;
  }

  function updateFormField(field: keyof typeof formData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    if (formStatus) {
      setFormStatus("");
    }
  }

  function normalizeUrl(value: string) {
    const trimmed = value.trim();
    if (!trimmed) {
      return "";
    }
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  }

  function isValidUrl(value: string) {
    try {
      const parsed = new URL(value);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  }

  async function handleAuditSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = normalizeUrl(formData.companyUrl);

    if (!isValidUrl(normalized)) {
      setFormStatus(copy.form.invalidUrl);
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setFormStatus(copy.form.invalidEmail);
      return;
    }

    const submission = {
      ...formData,
      companyUrl: normalized,
      submittedAt: new Date().toISOString(),
    };
    const savedSubmissions = JSON.parse(localStorage.getItem("askucpAuditRequests") || "[]") as typeof submission[];
    localStorage.setItem("askucpAuditRequests", JSON.stringify([submission, ...savedSubmissions].slice(0, 20)));

    setFormStatus(copy.form.statusSubmitting);

    if (!supabaseUrl || !supabaseAnonKey) {
      setFormData(submission);
      setFormStatus(copy.form.statusLocal);
      return;
    }

    try {
      const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/audit_requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: submission.name,
          company_url: submission.companyUrl,
          monthly_revenue: submission.monthlyRevenue,
          email: submission.email,
          platform: submission.platform,
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setFormData(submission);
      setFormStatus(copy.form.statusSuccess);
    } catch {
      setFormData(submission);
      setFormStatus(copy.form.statusSupabaseFail);
    }
  }

  return (
    <main className="site-shell">
      <SeoHead page="home" lang={lang} />
      <header className="nav">
        <a className="brand" href="#top" aria-label="AskUCP Agency home">
          <span>AskUCP Agency</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#problem">{copy.nav.problem}</a>
          <a href="#solution">{copy.nav.solution}</a>
          <a href="#timeline">{copy.nav.timeline}</a>
          <a href={localizedPath("faq", lang)}>{copy.nav.faq}</a>
        </nav>
        <LanguageSwitch lang={lang} onChange={setLang} />
        <a className="nav-cta" href="#audit">
          {copy.nav.cta}
        </a>
      </header>

      <section className="hero" id="top">
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
            <span className="micro-proof">
              <Sparkles size={16} />
              {copy.hero.proof}
            </span>
          </div>
        </div>

        <div className="audit-preview" aria-label="Agentic audit deliverables preview">
          <div className="visual-header">
            <span>{copy.hero.panelTitle}</span>
          </div>
          <ul className="audit-checklist">
            {copy.hero.checks.map((item) => (
              <li key={item}>
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
          <div className="proof-item" key={signal}>
            <CheckCircle2 size={18} />
            <span>{signal}</span>
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
        <div>
          <div className="section-kicker">{copy.sections.timelineKicker}</div>
          <h2>{copy.sections.timelineTitle}</h2>
          <p>{copy.sections.timelineText}</p>
        </div>
        <div className="clean-list">
          {copy.timeline.map((item) => (
            <div className="clean-list-row" key={item.window}>
              <span>{item.window}</span>
              <p>{item.shift}</p>
            </div>
          ))}
          <div className="clean-fact">
            <Zap size={18} />
            <strong>{copy.sections.timelineFact}</strong>
          </div>
        </div>
      </section>

      <section className="audit-section" id="audit">
        <div className="audit-copy">
          <div className="section-kicker">{copy.sections.auditKicker}</div>
          <h2>{copy.sections.auditTitle}</h2>
          <p>{copy.sections.auditText}</p>
          <div className="form-assurance">
            <LockKeyhole size={18} />
            <span>{copy.sections.auditAssurance}</span>
          </div>
        </div>
        <form className="lead-form" onSubmit={handleAuditSubmit}>
          <label>
            <span>{copy.form.name}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder={copy.form.placeholders.name}
              value={formData.name}
              onChange={(event) => updateFormField("name", event.target.value)}
            />
          </label>
          <label>
            <span>{copy.form.companyUrl} <em>{copy.form.required}</em></span>
            <input
              type="text"
              inputMode="url"
              name="company-url"
              autoComplete="url"
              placeholder={copy.form.placeholders.companyUrl}
              value={formData.companyUrl}
              onChange={(event) => updateFormField("companyUrl", event.target.value)}
              required
            />
          </label>
          <label>
            <span>{copy.form.revenue}</span>
            <select
              name="monthly-revenue"
              value={formData.monthlyRevenue}
              onChange={(event) => updateFormField("monthlyRevenue", event.target.value)}
            >
              <option value="" disabled>{copy.form.revenuePlaceholder}</option>
              {copy.form.revenues.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>{copy.form.email}</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder={copy.form.placeholders.email}
              value={formData.email}
              onChange={(event) => updateFormField("email", event.target.value)}
              required
            />
          </label>
          <label>
            <span>{copy.form.platform}</span>
            <select
              name="platform"
              value={formData.platform}
              onChange={(event) => updateFormField("platform", event.target.value)}
            >
              <option value="" disabled>{copy.form.platformPlaceholder}</option>
              {copy.form.platforms.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <button className="primary-button form-button" type="submit">
            {copy.form.submit}
            <ArrowRight size={20} />
          </button>
          {formStatus && <p className="form-status">{formStatus}</p>}
          <p className="privacy-note">{copy.form.privacy}</p>
        </form>
      </section>
      <Footer lang={lang} />
    </main>
  );
}

function FaqPage({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  const copy = content[lang];
  return (
    <main className="site-shell">
      <SeoHead page="faq" lang={lang} />
      <header className="nav">
        <a className="brand" href={localizedPath("home", lang)} aria-label="AskUCP Agency home">
          <span>AskUCP Agency</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href={`${localizedPath("home", lang)}#problem`}>{copy.nav.problem}</a>
          <a href={`${localizedPath("home", lang)}#solution`}>{copy.nav.solution}</a>
          <a href={`${localizedPath("home", lang)}#timeline`}>{copy.nav.timeline}</a>
        </nav>
        <LanguageSwitch lang={lang} onChange={setLang} />
        <a className="nav-cta" href={`${localizedPath("home", lang)}#audit`}>
          {copy.nav.cta}
        </a>
      </header>

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

function Footer({ lang }: { lang: Lang }) {
  const copy = content[lang];
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href={localizedPath("home", lang)} aria-label="AskUCP Agency home">
          <span>AskUCP Agency</span>
        </a>
        <p>{copy.footer.tagline}</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href={`${localizedPath("home", lang)}#problem`}>{copy.nav.problem}</a>
        <a href={`${localizedPath("home", lang)}#solution`}>{copy.nav.solution}</a>
        <a href={localizedPath("faq", lang)}>{copy.nav.faq}</a>
        <a href={`${localizedPath("home", lang)}#audit`}>{copy.nav.cta}</a>
      </nav>
    </footer>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

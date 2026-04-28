import {
  Code2,
  FileCheck2,
  Gauge,
  Network,
  RadioTower,
  ShieldAlert,
} from "lucide-react";

export const content = {
  en: {
    seo: {
      homeTitle: "AI Search Optimization for Ecommerce | AskUCP Agency",
      homeDescription:
        "AskUCP Agency helps ecommerce stores improve AI search visibility with GEO, llms.txt, schema, UCP, ACP, and agentic commerce readiness consulting.",
      faqTitle: "Ecommerce GEO FAQ | AI Search Optimization | AskUCP Agency",
      faqDescription:
        "Practical answers about ecommerce GEO, AI search optimization, llms.txt, schema, UCP, ACP, and agentic commerce readiness.",
      privacyTitle: "Privacy Policy | AskUCP Agency",
      privacyDescription:
        "How AskUCP Agency collects, uses, stores, and protects information submitted through this website.",
      termsTitle: "Terms of Service | AskUCP Agency",
      termsDescription:
        "Basic terms governing the use of the AskUCP Agency website and audit request form.",
      orgDescription:
        "AI search optimization and agentic commerce consulting for ecommerce stores preparing for GEO, schema, llms.txt, UCP, and ACP.",
    },
    nav: {
      problem: "Problem",
      solution: "Solution",
      timeline: "Timeline",
      faq: "FAQ",
      cta: "Apply for AI Audit",
    },
    hero: {
      title: "Make Your Store Agent-Ready.",
      subhead:
        "Most online stores are still invisible to AI. We help your products become visible, cited, and ready for AI-driven purchases before your competitors catch up.",
      panelTitle: "Your AI audit shows",
      panelMeta: "Signal scan",
      checks: [
        "Can AI find your products?",
        "Specific blind spots in AI search",
        "An actionable plan to increase visibility",
      ],
      panelCta: "Apply for AI Audit",
    },
    trustSignals: [
      { label: "Platforms", text: "Shopify, WooCommerce, WordPress, and custom websites" },
      { label: "AI Surfaces", text: "ChatGPT, Perplexity, Gemini, Claude, and others" },
      { label: "What You Get", text: "Visibility gaps, trust signals, priority fixes" },
    ],
    about: {
      kicker: "Why Us",
      title: "We built AskUCP, a Shopify-scale AI product search layer.",
      text:
        "AskUCP was built on UCP, an open standard for AI-driven commerce. We used it to power search across millions of Shopify products. That operating experience shapes how we assess AI visibility, product data, and purchase readiness.",
      points: [
        "First product built on UCP",
        "Worked directly with the protocol",
        "Powered search across millions of Shopify products",
      ],
    },
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
      auditListTitle: "What happens next",
    },
    timeline: [
      { window: "Today", shift: "GEO-optimized stores appear in AI tools like ChatGPT, Gemini, and others." },
      { window: "3-6 Months", shift: "Apple Intelligence and Gemini deepen shopping integration." },
      { window: "6-12 Months", shift: "Agentic checkout moves into mainstream commerce flows." },
    ],
    auditSteps: [
      "We review AI visibility, product-page clarity, and technical blockers.",
      "You get the highest-impact fixes in plain English.",
      "Your team receives a focused 30-day roadmap to ship next.",
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
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    legal: {
      updated: "Effective date: April 27, 2026",
      privacy: {
        title: "Privacy Policy",
        intro:
          "This Privacy Policy explains how AskUCP Agency collects, uses, and protects information submitted through this website.",
        sections: [
          {
            heading: "Information we collect",
            body:
              "When you submit an audit request, we may collect your name, company URL, monthly revenue range, email address, and platform information. We may also receive basic technical data such as IP address, browser type, device data, and server logs from our hosting and infrastructure providers.",
          },
          {
            heading: "How we use information",
            body:
              "We use the information you submit to review your store, respond to your request, communicate about our services, improve our site, and maintain the security and operation of the website.",
          },
          {
            heading: "How information is stored and shared",
            body:
              "Form submissions are stored using third-party infrastructure providers that help us host the site and process requests, including Supabase and Netlify. We do not sell personal information. We may share information with service providers that support hosting, storage, security, analytics, or communications, and when required by law.",
          },
          {
            heading: "Data retention",
            body:
              "We keep submitted information for as long as reasonably necessary to respond to requests, manage business records, improve our services, and meet legal or security obligations.",
          },
          {
            heading: "Your choices",
            body:
              "You may contact us to request access to, correction of, or deletion of information you have submitted, subject to applicable legal and operational limits. If you do not want us to use your information for follow-up communications, you can tell us at any time.",
          },
          {
            heading: "Children",
            body:
              "This website is intended for business users and is not directed to children under 13.",
          },
          {
            heading: "Changes and contact",
            body:
              "We may update this Privacy Policy from time to time. Questions or requests can be sent to kevin@100toolkit.com.",
          },
        ],
      },
      terms: {
        title: "Terms of Service",
        intro:
          "These Terms of Service govern your use of the AskUCP Agency website and any request you submit through it.",
        sections: [
          {
            heading: "Website use",
            body:
              "You may use this website only for lawful business purposes. You agree not to misuse the site, interfere with its operation, attempt unauthorized access, or submit false, harmful, or misleading information.",
          },
          {
            heading: "Informational content",
            body:
              "Content on this website is provided for general informational purposes. It does not constitute legal, financial, or other regulated professional advice.",
          },
          {
            heading: "Audit requests and services",
            body:
              "Submitting an audit request does not create a client relationship by itself and does not guarantee that AskUCP Agency will accept the engagement, provide services, or deliver a specific commercial outcome.",
          },
          {
            heading: "Intellectual property",
            body:
              "The website content, branding, copy, and materials on this site are owned by or licensed to AskUCP Agency unless stated otherwise. You may not reproduce, republish, or commercially use them without permission.",
          },
          {
            heading: "Third-party services",
            body:
              "This website may rely on or link to third-party tools, platforms, and websites. Their availability, content, and privacy practices are outside our direct control.",
          },
          {
            heading: "No warranties and liability limits",
            body:
              "This website and its content are provided on an as-is basis to the extent permitted by law. AskUCP Agency disclaims warranties of availability, accuracy, and fitness for a particular purpose, and is not liable for indirect or consequential losses arising from use of the site.",
          },
          {
            heading: "Changes and contact",
            body:
              "We may update these Terms of Service from time to time. Questions can be sent to kevin@100toolkit.com.",
          },
        ],
      },
    },
  },
  et: {
    seo: {
      homeTitle: "AI-otsingu optimeerimine e-poodidele | AskUCP Agency",
      homeDescription:
        "AskUCP Agency aitab e-poodidel parandada AI-otsingu nähtavust GEO, skeemi, llms.txt ning agentse kaubanduse valmisoleku kaudu.",
      faqTitle: "GEO KKK e-poodidele | AI-otsingu optimeerimine | AskUCP Agency",
      faqDescription:
        "Praktilised vastused GEO, AI-otsingu optimeerimise, llms.txt, skeemi, UCP, ACP ja agentse kaubanduse valmisoleku kohta.",
      privacyTitle: "Privaatsuspoliitika | AskUCP Agency",
      privacyDescription:
        "Kuidas AskUCP Agency kogub, kasutab, säilitab ja kaitseb selle veebilehe kaudu saadetud andmeid.",
      termsTitle: "Kasutustingimused | AskUCP Agency",
      termsDescription:
        "Põhitingimused, mis reguleerivad AskUCP Agency veebilehe ja auditivormi kasutamist.",
      orgDescription:
        "AI-otsingu optimeerimise ja agentse kaubanduse konsultatsioon e-poodidele, kes valmistuvad GEO-ks, skeemiks, llms.txt-ks, UCP-ks ja ACP-ks.",
    },
    nav: {
      problem: "Probleem",
      solution: "Lahendus",
      timeline: "Ajajoon",
      faq: "KKK",
      cta: "Taotle AI auditit",
    },
    hero: {
      title: "Tee oma veebileht|AI jaoks|nähtavaks",
      subhead:
        "Enamik e‑poode on AI jaoks endiselt nähtamatud. Aitame muuta sinu tooted AI jaoks leitavaks, usaldusväärseks ja ostetavaks enne, kui konkurendid järele jõuavad.",
      panelTitle: "See audit näitab",
      panelMeta: "Signaalide skaneering",
      checks: [
        "Kas AI leiab su tooted üles?",
        "Konkreetsed kitsaskohad AI-otsingus",
        "Selge tegevusplaan nähtavuse kasvatamiseks",
      ],
      panelCta: "Taotle AI auditit",
    },
    trustSignals: [
      { label: "Platvormid", text: "Shopify, WooCommerce, WordPress ja erilahendused" },
      { label: "AI kanalid", text: "ChatGPT, Perplexity, Gemini, Claude ja teised" },
      { label: "Tulemus", text: "Nähtavuse lüngad, usaldussignaalid ja prioriteetsed parandused" },
    ],
    about: {
      kicker: "Miks meie",
      title: "Ehitasime AskUCP - AI-tooteotsing miljonite Shopify toodete jaoks.",
      text:
        "AskUCP ehitasime UCP peale, et AI saaks tooteid paremini mõista ja üles leida. Selle abil lõime otsingu miljonite Shopify toodete vahel. See praktiline kogemus suunab ka meie auditit: hindame AI nähtavust, tooteandmeid ja ostuvalmidust.",
      points: [
        "Esimene UCP-l põhinev toode",
        "Töötasime protokolliga otse",
        "Lõime otsingu miljonite Shopify toodete vahel",
      ],
    },
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
      solutionTitle: "Teeme sinu poe AI jaoks arusaadavaks ja soovitatavaks.",
      timelineKicker: "Ajajoon",
      timelineTitle: "Tegutseda tuleb praegu.",
      timelineText: "AI-otsing mõjutab toodete leidmist juba täna. Järgmisena liigub ostuprotsess üha rohkem AI-agentide kätte.",
      timelineFact: "GEO jaoks optimeeritud sisu saab avaldatud AI-otsingu juhtumites 30–115% rohkem viiteid.",
      auditKicker: "AI-kaubanduse eelis",
      auditTitle: "Võta esimese tulija eelis.",
      auditText:
        "Saad selge 30 päeva tegevuskava, et muuta oma pood AI jaoks leitavaks, usaldusväärseks ja AI-juhitud ostuks valmis.",
      auditAssurance: "Vastame 24 tunni jooksul. Müügikõnet ei tule, kui me ei leia päris puudujääki.",
      auditListTitle: "Mis juhtub edasi",
    },
    timeline: [
      { window: "Täna", shift: "GEO jaoks optimeeritud poed jõuavad AI tööriistadesse nagu ChatGPT, Gemini ja teised." },
      { window: "3–6 kuud", shift: "Apple Intelligence ja Gemini toovad ostlemise AI-vastustesse veel tugevamalt." },
      { window: "6–12 kuud", shift: "AI-agentide vahendatud ostuteekonnad liiguvad peavoolu." },
    ],
    auditSteps: [
      "Vaatame üle AI nähtavuse, tootelehtede selguse ja tehnilised takistused.",
      "Saad kõige suurema mõjuga parandused selges keeles.",
      "Sinu tiim saab konkreetse 30 päeva tegevuskava, mida järgmisena ellu viia.",
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
      submit: "Taotle AI auditit",
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
      privacy: "Privaatsuspoliitika",
      terms: "Kasutustingimused",
    },
    legal: {
      updated: "Jõustumiskuupäev: 27. aprill 2026",
      privacy: {
        title: "Privaatsuspoliitika",
        intro:
          "See privaatsuspoliitika selgitab, kuidas AskUCP Agency kogub, kasutab ja kaitseb selle veebilehe kaudu saadetud andmeid.",
        sections: [
          {
            heading: "Milliseid andmeid me kogume",
            body:
              "Kui saadad auditipäringu, võime koguda sinu nime, ettevõtte URL-i, kuise käibe vahemiku, e-posti aadressi ja platvormi info. Lisaks võivad meie majutus- ja taristuteenuse pakkujad saada tehnilisi andmeid, nagu IP-aadress, brauseri tüüp, seadme info ja serverilogid.",
          },
          {
            heading: "Kuidas me andmeid kasutame",
            body:
              "Kasutame sinu saadetud andmeid poe ülevaatamiseks, päringule vastamiseks, teenustega seotud suhtluseks, veebilehe arendamiseks ning saidi turvalisuse ja töökindluse hoidmiseks.",
          },
          {
            heading: "Kuidas andmeid säilitatakse ja jagatakse",
            body:
              "Vormipäringuid hoitakse kolmandate osapoolte taristuteenustes, mis aitavad meil veebilehte majutada ja päringuid töödelda, sealhulgas Supabase'is ja Netlifys. Me ei müü isikuandmeid. Võime andmeid jagada teenusepakkujatega, kes toetavad majutust, salvestust, turvet, analüütikat või suhtlust, ning juhul, kui seadus seda nõuab.",
          },
          {
            heading: "Andmete säilitamine",
            body:
              "Hoiame saadetud andmeid nii kaua, kui see on mõistlikult vajalik päringutele vastamiseks, äriliste dokumentide haldamiseks, teenuste parendamiseks ning õiguslike või turvalisusega seotud kohustuste täitmiseks.",
          },
          {
            heading: "Sinu valikud",
            body:
              "Soovi korral võid võtta meiega ühendust, et küsida enda saadetud andmetele ligipääsu, nende parandamist või kustutamist, arvestades kohalduvaid õiguslikke ja praktilisi piiranguid. Kui sa ei soovi järelkontakteerumist, võid meile sellest igal ajal teada anda.",
          },
          {
            heading: "Lapsed",
            body:
              "See veebileht on mõeldud ärikasutajatele ega ole suunatud alla 13-aastastele lastele.",
          },
          {
            heading: "Muudatused ja kontakt",
            body:
              "Võime seda privaatsuspoliitikat aeg-ajalt uuendada. Küsimused ja päringud võib saata aadressile kevin@100toolkit.com.",
          },
        ],
      },
      terms: {
        title: "Kasutustingimused",
        intro:
          "Need kasutustingimused reguleerivad AskUCP Agency veebilehe kasutamist ja selle kaudu esitatud päringuid.",
        sections: [
          {
            heading: "Veebilehe kasutamine",
            body:
              "Võid seda veebilehte kasutada ainult seaduslikel ärilistel eesmärkidel. Sa ei tohi veebilehte kuritarvitada, selle tööd häirida, proovida saada loata ligipääsu ega saata vale-, kahjulikku või eksitavat infot.",
          },
          {
            heading: "Informatiivne sisu",
            body:
              "Sellel veebilehel olev sisu on mõeldud üldiseks teabeks. See ei kujuta endast õigusnõu, finantsnõu ega muud reguleeritud kutsealast nõustamist.",
          },
          {
            heading: "Auditipäringud ja teenused",
            body:
              "Auditipäringu esitamine ei loo iseenesest kliendisuhet ega taga, et AskUCP Agency võtab töö vastu, osutab teenust või saavutab konkreetse ärilise tulemuse.",
          },
          {
            heading: "Intellektuaalomand",
            body:
              "Selle veebilehe sisu, bränd, tekstid ja materjalid kuuluvad AskUCP Agencyle või on sellele litsentseeritud, kui pole märgitud teisiti. Neid ei tohi ilma loata kopeerida, uuesti avaldada ega äriliselt kasutada.",
          },
          {
            heading: "Kolmandate osapoolte teenused",
            body:
              "See veebileht võib kasutada kolmandate osapoolte tööriistu, platvorme ja veebilehti või neile viidata. Nende kättesaadavus, sisu ja privaatsustavad ei ole meie otsese kontrolli all.",
          },
          {
            heading: "Garantii puudumine ja vastutuse piirang",
            body:
              "See veebileht ja selle sisu on lubatud ulatuses esitatud olemasoleval kujul. AskUCP Agency ei anna garantiid kättesaadavuse, täpsuse ega kindlaks eesmärgiks sobivuse kohta ega vastuta veebilehe kasutamisest tulenevate kaudsete või kaasnevate kahjude eest.",
          },
          {
            heading: "Muudatused ja kontakt",
            body:
              "Võime neid kasutustingimusi aeg-ajalt uuendada. Küsimused võib saata aadressile kevin@100toolkit.com.",
          },
        ],
      },
    },
  },
} as const;

export type SiteCopy = (typeof content)["en"];

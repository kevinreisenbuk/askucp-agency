type SpecimenState = "ok" | "warn" | "miss";

type Specimen = {
  title: string;
  version: string;
  meta: { label: string; value: string }[];
  blocks: {
    title: string;
    rows: { key: string; value: string; state: SpecimenState }[];
  }[];
  cta: string;
};

type Toolkit = {
  kicker: string;
  title: string;
  text: string;
  scaleNumber: string;
  scaleLabel: string;
  modules: { num: string; label: string; desc: string }[];
};

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
        "AI search optimization and agentic commerce consulting for ecommerce stores. Built on UCP and run through an in-house toolkit hardened on millions of Shopify products.",
    },
    nav: {
      problem: "Problem",
      solution: "Solution",
      timeline: "Timeline",
      faq: "FAQ",
      cta: "Apply for AI Audit",
    },
    hero: {
      eyebrow: "AskUCP Agency · Specialist audit",
      title: "Built on UCP.|Tested on millions of products.|Pointed at yours.",
      subhead:
        "We built AskUCP, the first product on UCP, and ran AI search across millions of Shopify products with our in-house toolkit. The same toolkit now reads your store and tells you exactly where AI agents stop, slip, or skip.",
    },
    specimen: {
      title: "askucp/toolkit",
      version: "v3.2 · specimen",
      meta: [
        { label: "store", value: "specimen.shopify.com" },
        { label: "products", value: "14,328" },
        { label: "scanned", value: "14,328 · 100.00%" },
      ],
      blocks: [
        {
          title: "Agent visibility",
          rows: [
            { key: "crawl-allowed", value: "ok", state: "ok" },
            { key: "server-rendered", value: "ok", state: "ok" },
            { key: "product-schema", value: "62% partial", state: "warn" },
          ],
        },
        {
          title: "Protocol readiness",
          rows: [
            { key: "ucp-handshake", value: "not implemented", state: "miss" },
            { key: "acp-checkout", value: "not implemented", state: "miss" },
            { key: "llms.txt", value: "missing", state: "miss" },
          ],
        },
        {
          title: "Brand signals",
          rows: [
            { key: "citation-graph", value: "thin", state: "warn" },
            { key: "review-feed", value: "present", state: "ok" },
          ],
        },
      ],
      cta: "Run this against your store →",
    } satisfies Specimen,
    trustSignals: [
      { label: "Platforms", text: "Shopify, WooCommerce, WordPress, and custom websites" },
      { label: "AI Surfaces", text: "ChatGPT, Perplexity, Gemini, Claude, and others" },
      { label: "What You Get", text: "Visibility gaps, trust signals, priority fixes" },
    ],
    toolkit: {
      kicker: "The toolkit",
      title: "Five modules. Run on every audit.",
      text: "AskUCP was the first product built directly on UCP. We used the same in-house toolkit to power AI search across millions of Shopify products. Every audit you receive runs through it — hardened on real catalogues, not lifted from a template.",
      scaleNumber: "Millions",
      scaleLabel: "Shopify products read through our toolkit",
      modules: [
        { num: "01", label: "Crawl", desc: "Pulls a representative cross-section of your catalogue the way an AI agent would — JS-rendered, paginated, faceted." },
        { num: "02", label: "Parse", desc: "Reads schema, server-rendered HTML, llms.txt, robots, sitemaps, and product feeds." },
        { num: "03", label: "Match", desc: "Compares your product entities against citation graphs and AI-search corpora." },
        { num: "04", label: "Score", desc: "Produces an Agent Readiness Score across visibility, trust, and protocol axes." },
        { num: "05", label: "Report", desc: "Outputs prioritized fixes, schema and llms.txt code stubs, and a 30-day implementation plan." },
      ],
    } satisfies Toolkit,
    about: {
      kicker: "Why us",
      title: "We built AskUCP, a Shopify-scale AI product search layer.",
      text:
        "AskUCP was built on UCP, an open standard for AI-driven commerce. The same operating experience shapes how we assess AI visibility, product data, and purchase readiness for your store.",
      points: [
        "First product built on UCP",
        "Worked directly with the protocol",
        "Powered search across millions of Shopify products",
      ],
    },
    failures: [
      {
        title: "Hidden Product Pages",
        text: "AI tools may not see your products, even when customers can.",
      },
      {
        title: "AI Can't Buy From You",
        text: "Your store lacks the protocols and structure AI agents need to move toward checkout.",
      },
      {
        title: "Weak Brand Signals",
        text: "Your store is missing the external signals AI systems use to decide who to trust.",
      },
    ],
    solutions: [
      {
        title: "Full GEO + Technical Audit",
        text: "A scored baseline covering AI visibility, crawlability, product data, and commerce readiness.",
      },
      {
        title: "Prioritized Action Report",
        text: "A plain-English roadmap ranked by impact, urgency, and revenue relevance.",
      },
      {
        title: "Implementation-Ready Code Blocks",
        text: "Schema, llms.txt, and protocol stubs your developers can ship without guesswork.",
      },
    ],
    sections: {
      problemKicker: "Why stores disappear",
      problemTitle: "Your catalogue may exist, but AI agents cannot recommend what they cannot read.",
      solutionKicker: "What we provide",
      solutionTitle: "We turn your store into something AI agents can crawl, cite, and recommend.",
      timelineKicker: "Timeline",
      timelineTitle: "The window is narrow.",
      timelineText: "AI search is already shaping product discovery. Agentic checkout is the next step.",
      timelineFact: "Stores with crawlable, schema-clean products are the ones agents recommend back.",
      auditKicker: "Lead the agent layer",
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
      statusSuccess: "Audit request received. We'll review your store and respond within 24 hours.",
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
        "AI-otsingu optimeerimise ja agentse kaubanduse konsultatsioon e-poodidele. Ehitatud UCP peale ja kasutab in-house tööriistakomplekti, mis on testitud miljonite Shopify toodete peal.",
    },
    nav: {
      problem: "Probleem",
      solution: "Lahendus",
      timeline: "Ajajoon",
      faq: "KKK",
      cta: "Taotle AI auditit",
    },
    hero: {
      eyebrow: "AskUCP Agency · Spetsialisti audit",
      title: "Tehtud UCP-le.|Testitud miljonite toodete peal.|Suunatud sinu poele.",
      subhead:
        "Ehitasime AskUCP - esimese UCP-l põhineva toote - ja kasutasime oma in-house tööriistakomplekti, et viia AI-otsing miljonite Shopify toodete juurde. Sama tööriistakomplekt loeb nüüd sinu poodi ja näitab täpselt, kus AI-agent peatub, libastub või jätab vahele.",
    },
    specimen: {
      title: "askucp/toolkit",
      version: "v3.2 · specimen",
      meta: [
        { label: "store", value: "specimen.shopify.com" },
        { label: "products", value: "14,328" },
        { label: "scanned", value: "14,328 · 100.00%" },
      ],
      blocks: [
        {
          title: "Agent visibility",
          rows: [
            { key: "crawl-allowed", value: "ok", state: "ok" },
            { key: "server-rendered", value: "ok", state: "ok" },
            { key: "product-schema", value: "62% partial", state: "warn" },
          ],
        },
        {
          title: "Protocol readiness",
          rows: [
            { key: "ucp-handshake", value: "not implemented", state: "miss" },
            { key: "acp-checkout", value: "not implemented", state: "miss" },
            { key: "llms.txt", value: "missing", state: "miss" },
          ],
        },
        {
          title: "Brand signals",
          rows: [
            { key: "citation-graph", value: "thin", state: "warn" },
            { key: "review-feed", value: "present", state: "ok" },
          ],
        },
      ],
      cta: "Käivita see sinu poe vastu →",
    } satisfies Specimen,
    trustSignals: [
      { label: "Platvormid", text: "Shopify, WooCommerce, WordPress ja erilahendused" },
      { label: "AI kanalid", text: "ChatGPT, Perplexity, Gemini, Claude ja teised" },
      { label: "Tulemus", text: "Nähtavuse lüngad, usaldussignaalid ja prioriteetsed parandused" },
    ],
    toolkit: {
      kicker: "Tööriistakomplekt",
      title: "Viis moodulit. Iga auditi sisendiks.",
      text: "AskUCP oli esimene UCP-l otse põhinev toode. Kasutasime sama in-house tööriistakomplekti, et viia AI-otsing miljonite Shopify toodete juurde. Iga audit, mille saad, jookseb läbi selle - karastatud päris kataloogidel, mitte malli pealt võetud.",
      scaleNumber: "Miljonid",
      scaleLabel: "Shopify toodet, mis on läbi meie tööriistakomplekti loetud",
      modules: [
        { num: "01", label: "Crawl", desc: "Tõmbab esindusliku läbilõike sinu kataloogist samamoodi nagu AI-agent - JS-renderdatud, lehekülgedeks jaotatud, filtritega." },
        { num: "02", label: "Parse", desc: "Loeb skeemi, serveris renderdatud HTML-i, llms.txt, robots'i, sitemap'e ja tootevoogusid." },
        { num: "03", label: "Match", desc: "Võrdleb sinu tooteid viidete graafide ja AI-otsingu korpustega." },
        { num: "04", label: "Score", desc: "Annab Agent Readiness Score nähtavuse, usalduse ja protokolli telgedel." },
        { num: "05", label: "Report", desc: "Väljastab prioriseeritud parandused, skeemi ja llms.txt koodiplokid ning 30-päevase tegevusplaani." },
      ],
    } satisfies Toolkit,
    about: {
      kicker: "Miks meie",
      title: "Ehitasime AskUCP - AI-tooteotsing miljonite Shopify toodete jaoks.",
      text:
        "AskUCP ehitasime UCP peale - avatud standardile AI-juhitud kaubanduses. Sama praktiline kogemus suunab ka meie auditit: hindame AI nähtavust, tooteandmeid ja ostuvalmidust.",
      points: [
        "Esimene UCP-l põhinev toode",
        "Töötasime protokolliga otse",
        "Lõime otsingu miljonite Shopify toodete vahel",
      ],
    },
    failures: [
      {
        title: "Peidetud tootelehed",
        text: "AI ei pruugi sinu tooteid näha isegi siis, kui kliendid neid näevad.",
      },
      {
        title: "AI ei saa sinult osta",
        text: "Sinu poes puudub tehniline valmisolek, mis aitaks AI-l liikuda soovitusest ostuni.",
      },
      {
        title: "Nõrgad brändisignaalid",
        text: "Sinu poel puuduvad usaldussignaalid, mille põhjal AI otsustab, keda soovitada.",
      },
    ],
    solutions: [
      {
        title: "Täielik GEO + tehniline audit",
        text: "Selge ülevaade sellest, kui hästi AI sinu poodi näeb ja mõistab.",
      },
      {
        title: "Prioriteetne tegevusplaan",
        text: "Selges keeles tegevusplaan, järjestatud mõju, kiireloomulisuse ja ärilise väärtuse järgi.",
      },
      {
        title: "Kohe rakendatavad koodiplokid",
        text: "Schema, llms.txt ja protokollide lähtefailid, mille arendaja saab kiiresti kasutusse võtta.",
      },
    ],
    sections: {
      problemKicker: "Miks poed kaovad",
      problemTitle: "Sinu kataloog võib olemas olla, kuid AI-agent ei saa soovitada seda, mida ta lugeda ei suuda.",
      solutionKicker: "Mida me teeme",
      solutionTitle: "Teeme sinu poe AI-agentidele loetavaks, viidatavaks ja soovitatavaks.",
      timelineKicker: "Ajajoon",
      timelineTitle: "Tegutseda tuleb praegu.",
      timelineText: "AI-otsing mõjutab toodete leidmist juba täna. Järgmisena liigub ostuprotsess üha rohkem AI-agentide kätte.",
      timelineFact: "Poodi, mille tooted on loetavad ja hästi struktureeritud skeemiga, AI-agent ka soovitab.",
      auditKicker: "AI-kaubanduse eelis",
      auditTitle: "Võta esimese tulija eelis.",
      auditText:
        "Saad selge 30 päeva tegevuskava, et muuta oma pood AI jaoks leitavaks, usaldusväärseks ja AI-juhitud ostuks valmis.",
      auditAssurance: "Vastame 24 tunni jooksul. Müügikõnet ei tule, kui me ei leia päris puudujääki.",
      auditListTitle: "Mis juhtub edasi",
    },
    timeline: [
      { window: "Täna", shift: "GEO jaoks optimeeritud poed jõuavad AI tööriistadesse nagu ChatGPT, Gemini ja teised." },
      { window: "3-6 kuud", shift: "Apple Intelligence ja Gemini toovad ostlemise AI-vastustesse veel tugevamalt." },
      { window: "6-12 kuud", shift: "AI-agentide vahendatud ostuteekonnad liiguvad peavoolu." },
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
        "Ekaubandus liigub üha rohkem AI suunas. Selleks peab sinu pood olema AI jaoks kergesti leitav, arusaadav ja hästi üles ehitatud.",
      items: [
        {
          question: "Mis on GEO?",
          answer:
            "Generative Engine Optimization ehk GEO valmistab sinu poe ette selleks, et AI-süsteemid nagu ChatGPT, Perplexity, Gemini, Claude ja teised AI-tööriistad saaksid sinu poodi mõista ja sellele viidata. Ekaubanduses tähendab see, et tooteandmed, kategoorialehed, arvustused, skeem, brändisignaalid ja ligipääsetav sisu oleksid AI-agentidele piisavalt selged, et sinu tooteid soovitada.",
        },
        {
          question: "Kuidas erineb GEO tavalisest SEO-st?",
          answer:
            "SEO eesmärk on tõsta lehed otsingutulemustes kõrgemale. GEO eesmärk on, et AI valiks sind välja, viitaks sulle, võtaks sinu info kokku ja soovitaks sind oma vastustes. Need kaks kattuvad, kuid GEO paneb suurema rõhu struktureeritud faktidele, usaldussignaalidele, vastamiseks sobivale sisule ja masinloetavatele kaubandusandmetele.",
        },
        {
          question: "Miks on epoed AI-agentidele nähtamatud?",
          answer:
            "Paljud epoed kasutavad JavaScriptiga renderdatud katalooge, lühikesi tootekirjeldusi, puudulikke skeeme, blokeeritud ligipääsu robotitele, puuduvaid llms.txt juhiseid, ebaühtlaseid brändisignaale ja ostuteekondi, millest AI aru ei saa. Inimene võib poodi näha, kuid AI-agent näeb sageli ainult poolikut infot.",
        },
        {
          question: "Mis on Agent Readiness Score?",
          answer:
            "See on praktiline hinnang sellele, kui hästi AI sinu poodi leiab, mõistab ja soovitab. Vaatame üle peamised takistused, mis hoiavad sinu poe AI jaoks varjus, ning anname selge tegevusplaani, mida parandada esimesena.",
        },
        {
          question: "Mis on UCP ja ACP?",
          answer:
            "UCP ja ACP on uued tehnilised standardid, mis aitavad AI-l tooteid leida ja oste paremini lõpule viia. Epoodide jaoks on need olulised, sest need mõjutavad seda, kuidas AI-agendid sinu tooteid mõistavad, soovitavad ja ostuni juhivad.",
        },
        {
          question: "Kas mul on vaja UCP-d, ACP-d või mõlemat?",
          answer:
            "Enamik epoode peaks valmistuma mõlemaks. ACP seostub praegu ChatGPT-põhiste ostuvoogudega, UCP on mõeldud laiemalt avastuse, ostu lõpuleviimise, täitmise ja järelteeninduse jaoks. Õige prioriteet sõltub sinu platvormist, makselahendusest, kataloogist ja kanalitest.",
        },
        {
          question: "Mida AskUCP Agency auditis kontrollib?",
          answer:
            "Kontrollime AI-robotite ligipääsu, serveris renderdatud tootelehti, robots.txt ja sitemap'i seadistust, toote- ja organisatsiooniskeemi, llms.txt faili, tootevoogude kvaliteeti, arvustuste ja brändisignaalide tugevust, AI-viidete võimalusi, sisulünki ning UCP või ACP rakendamise valmisolekut. Tulemuseks on selge hinnang ja 30 päeva tegevuskava.",
        },
        {
          question: "Kas see töötab Shopify, WooCommerce'i ja WordPressi poodidele?",
          answer:
            "Jah. Audit arvestab platvormi eripäradega. Shopify poed vajavad sageli tooteandmete, skeemi, rakenduste ja AI jaoks loetava poevaate kontrolli. WooCommerce'i ja WordPressi poed vajavad tihti parandusi ligipääsetavuses, jõudluses, skeemis, arvustustes ja sisustruktuuris.",
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
      tagline: "AI nähtavus epoodidele.",
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

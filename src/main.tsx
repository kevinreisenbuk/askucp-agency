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

const failures = [
  {
    icon: ShieldAlert,
    title: "Hidden Product Pages",
    text: "AI tools may not see your products, even when customers can.",
  },
  {
    icon: Network,
    title: "No Agent Protocols",
    text: "You lack UCP/ACP standards that allow agents to process orders.",
  },
  {
    icon: RadioTower,
    title: "No AI Brand Signals",
    text: "You are missing from the trusted datasets LLMs use, including Reddit, Wikipedia, reviews, and third-party citations.",
  },
];

const solutions = [
  {
    icon: Gauge,
    title: "Full GEO + Technical Audit",
    text: "Scored baseline on AI citability, crawler access, product data, and technical infrastructure.",
  },
  {
    icon: FileCheck2,
    title: "Prioritized Action Report",
    text: "A dev-ready roadmap ranked by impact, difficulty, revenue risk, and agent visibility gain.",
  },
  {
    icon: Code2,
    title: "Implementation-Ready Code Blocks",
    text: "Pre-written schema.org, llms.txt, and UCP/ACP stubs your team can ship quickly.",
  },
];

const trustSignals = [
  "Shopify, WooCommerce, WordPress",
  "Schema, llms.txt, UCP, ACP, citations",
  "Dev-ready fixes, not strategy theatre",
];

const timeline = [
  {
    window: "Today",
    shift: "GEO-optimized stores appear in Perplexity/ChatGPT.",
  },
  {
    window: "3-6 Months",
    shift: "Apple Intelligence and Gemini integrate shopping.",
  },
  {
    window: "6-12 Months",
    shift: "Agentic checkout becomes mainstream via UCP/ACP.",
  },
];

const faqItems = [
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
      "It is AskUCP Agency's practical scorecard for how ready your store is for AI discovery and agentic commerce. We review crawler access, rendered product data, schema, llms.txt, brand/entity signals, citation potential, and UCP/ACP readiness, then turn the gaps into a prioritized roadmap.",
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
      "We check AI crawler access, server-rendered product visibility, robots and sitemap setup, product and organization schema, llms.txt, product feed quality, review and brand signals, AI citation opportunities, content gaps, and UCP/ACP implementation readiness. The result is a scored baseline and a 30-day action roadmap.",
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
];

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

function SeoHead({ page }: { page: "home" | "faq" }) {
  React.useEffect(() => {
    const isFaq = page === "faq";
    const title = isFaq
      ? "GEO & Agentic Commerce FAQ | AskUCP Agency"
      : "AskUCP Agency | Agent-Ready GEO Consulting";
    const description = isFaq
      ? "Answers about GEO, AI search optimization, llms.txt, UCP, ACP, and agentic commerce readiness for ecommerce stores."
      : "AskUCP Agency helps ecommerce stores become visible, cited, and purchasable by AI agents through GEO, UCP, ACP, schema, and llms.txt consulting.";
    const path = isFaq ? "/faq" : "/";

    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `${siteUrl}${path}`, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setCanonical(path);

    setJsonLd("organization-schema", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AskUCP Agency",
      url: siteUrl,
      description:
        "GEO and agentic commerce consulting agency for ecommerce stores preparing for AI search, UCP, ACP, schema, and llms.txt.",
      areaServed: "Global",
      serviceType: "Generative Engine Optimization and agentic commerce readiness",
    });

    if (isFaq) {
      setJsonLd("faq-schema", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
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
        serviceType: [
          "Generative Engine Optimization",
          "AI search optimization",
          "Agentic commerce readiness",
          "Ecommerce technical SEO",
        ],
      });
    }
  }, [page]);

  return null;
}

function App() {
  const isFaq =
    window.location.pathname === "/faq" ||
    window.location.pathname === "/faq/" ||
    window.location.pathname === "/faq.html";
  const [formData, setFormData] = React.useState({
    name: "",
    companyUrl: "",
    monthlyRevenue: "",
    email: "",
    platform: "",
  });
  const [formStatus, setFormStatus] = React.useState("");

  if (isFaq) {
    return <FaqPage />;
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
      setFormStatus("Enter a valid store URL.");
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setFormStatus("Enter a valid email so we can send the audit response.");
      return;
    }

    const submission = {
      ...formData,
      companyUrl: normalized,
      submittedAt: new Date().toISOString(),
    };
    const savedSubmissions = JSON.parse(localStorage.getItem("askucpAuditRequests") || "[]") as typeof submission[];
    localStorage.setItem("askucpAuditRequests", JSON.stringify([submission, ...savedSubmissions].slice(0, 20)));

    setFormStatus("Submitting your audit request...");

    if (!supabaseUrl || !supabaseAnonKey) {
      setFormData(submission);
      setFormStatus(
        "Saved locally for testing. Add Supabase env vars to store requests in the database."
      );
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
      setFormStatus("Audit request received. We’ll review your store and respond within 24 hours.");
    } catch {
      setFormData(submission);
      setFormStatus(
        "Saved locally, but Supabase did not accept the request. Check table setup and environment variables."
      );
    }
  }

  return (
    <main className="site-shell">
      <SeoHead page="home" />
      <header className="nav">
        <a className="brand" href="#top" aria-label="AskUCP Agency home">
          <span>AskUCP Agency</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#timeline">Timeline</a>
          <a href="/faq">FAQ</a>
        </nav>
        <a className="nav-cta" href="#audit">
          Request AI Audit
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <h1>Make Your Store Agent-Ready.</h1>
          <p className="hero-subhead">
            <strong className="invisible-stat">99%</strong> of online stores are invisible to AI today. We ensure your
            products are visible, cited, and purchasable by AI agents before your competitors wake up.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#audit">
              Request AI Audit
              <ArrowRight size={20} />
            </a>
            <span className="micro-proof">
              <Sparkles size={16} />
              Free first-pass review for ecommerce stores
            </span>
          </div>
        </div>

        <div className="audit-preview" aria-label="Agentic audit deliverables preview">
          <div className="visual-header">
            <span>A simple check for store owners</span>
          </div>
          <ul className="audit-checklist">
            <li>
              <CheckCircle2 size={18} />
              <span>Can AI find your products?</span>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <span>Is your brand the top choice?</span>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <span>What’s blocking your traffic?</span>
            </li>
          </ul>
          <a className="score-link" href="#audit">
            Request AI Audit
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="proof-strip" aria-label="Trust signals">
        {trustSignals.map((signal) => (
          <div className="proof-item" key={signal}>
            <CheckCircle2 size={18} />
            <span>{signal}</span>
          </div>
        ))}
      </section>

      <section className="section" id="problem">
        <div className="section-kicker">Why stores disappear</div>
        <div className="section-heading">
          <h2>Your catalogue may exist, but AI agents cannot buy what they cannot understand.</h2>
        </div>
        <div className="grid three-col">
          {failures.map((item) => {
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
        <div className="section-kicker">What We Provide</div>
        <div className="section-heading compact">
          <h2>We turn your store into something AI agents can crawl, cite, recommend, and eventually buy from.</h2>
        </div>
        <div className="grid three-col">
          {solutions.map((item, index) => {
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
          <div className="section-kicker">Timeline</div>
          <h2>The window is narrow.</h2>
          <p>AI search is already shaping product discovery. Agentic checkout is the next step.</p>
        </div>
        <div className="clean-list">
          {timeline.map((item) => (
            <div className="clean-list-row" key={item.window}>
              <span>{item.window}</span>
              <p>{item.shift}</p>
            </div>
          ))}
          <div className="clean-fact">
            <Zap size={18} />
            <strong>GEO-optimized content receives 30-115% more citations in published AI-search case studies.</strong>
          </div>
        </div>
      </section>

      <section className="audit-section" id="audit">
        <div className="audit-copy">
          <div className="section-kicker">Lead The Agent Layer</div>
          <h2>Claim Your First-Mover Advantage.</h2>
          <p>Get a focused 30-day roadmap for making your store discoverable, citeable, and ready for AI-led checkout.</p>
          <div className="form-assurance">
            <LockKeyhole size={18} />
            <span>Response within 24 hours. No sales call unless we find a real agent-readiness gap.</span>
          </div>
        </div>
        <form className="lead-form" onSubmit={handleAuditSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Alex Carter"
              value={formData.name}
              onChange={(event) => updateFormField("name", event.target.value)}
            />
          </label>
          <label>
            <span>Company URL <em>Required</em></span>
            <input
              type="text"
              inputMode="url"
              name="company-url"
              autoComplete="url"
              placeholder="yourstore.com"
              value={formData.companyUrl}
              onChange={(event) => updateFormField("companyUrl", event.target.value)}
              required
            />
          </label>
          <label>
            <span>Monthly Revenue</span>
            <select
              name="monthly-revenue"
              value={formData.monthlyRevenue}
              onChange={(event) => updateFormField("monthlyRevenue", event.target.value)}
            >
              <option value="" disabled>Select range</option>
              <option value="$0-$50k">$0-$50k</option>
              <option value="$50k-$250k">$50k-$250k</option>
              <option value="$250k-$1M">$250k-$1M</option>
              <option value="$1M+">$1M+</option>
            </select>
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(event) => updateFormField("email", event.target.value)}
              required
            />
          </label>
          <label>
            <span>Platform</span>
            <select
              name="platform"
              value={formData.platform}
              onChange={(event) => updateFormField("platform", event.target.value)}
            >
              <option value="" disabled>Select platform</option>
              <option value="Shopify">Shopify</option>
              <option value="WooCommerce">WooCommerce</option>
              <option value="WordPress">WordPress</option>
              <option value="Custom">Custom</option>
            </select>
          </label>
          <button className="primary-button form-button" type="submit">
            Request AI Audit
            <ArrowRight size={20} />
          </button>
          {formStatus && <p className="form-status">{formStatus}</p>}
          <p className="privacy-note">Your URL is used only to prepare the audit response.</p>
        </form>
      </section>
      <Footer />
    </main>
  );
}

function FaqPage() {
  return (
    <main className="site-shell">
      <SeoHead page="faq" />
      <header className="nav">
        <a className="brand" href="/" aria-label="AskUCP Agency home">
          <span>AskUCP Agency</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/#problem">Problem</a>
          <a href="/#solution">Solution</a>
          <a href="/#timeline">Timeline</a>
        </nav>
        <a className="nav-cta" href="/#audit">
          Request AI Audit
        </a>
      </header>

      <section className="faq-layout" aria-label="Frequently asked questions">
        <aside className="faq-aside">
          <h2>GEO is no longer only content.</h2>
          <p>
            The new ecommerce surface is machine-read, answer-led, and increasingly transactional. Your store needs to
            be crawlable, citeable, structured, and compatible with agentic buying flows.
          </p>
        </aside>
        <div className="faq-list">
          {faqItems.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="/" aria-label="AskUCP Agency home">
          <span>AskUCP Agency</span>
        </a>
        <p>AI visibility for ecommerce.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/#problem">Problem</a>
        <a href="/#solution">Solution</a>
        <a href="/faq">FAQ</a>
        <a href="/#audit">Request AI Audit</a>
      </nav>
    </footer>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

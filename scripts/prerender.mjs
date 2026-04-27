import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");

const pages = [
  {
    file: "index.html",
    title: "AI Search Optimization for Ecommerce | AskUCP Agency",
    body: `
      <main>
        <header><p>AskUCP Agency</p></header>
        <section>
          <h1>Make Your Store Agent-Ready.</h1>
          <p>Most online stores are still invisible to AI. AskUCP Agency helps ecommerce stores improve AI search visibility with GEO, llms.txt, schema, UCP, ACP, and agentic commerce readiness consulting.</p>
        </section>
        <section>
          <h2>What the audit covers</h2>
          <ul>
            <li>AI visibility and product discovery</li>
            <li>Schema, llms.txt, and structured data issues</li>
            <li>Trust signals and priority fixes for your team</li>
          </ul>
        </section>
        <section>
          <h2>Common ecommerce AI visibility problems</h2>
          <ul>
            <li>Hidden product pages that AI tools may not see</li>
            <li>Missing structure that prevents AI-led buying flows</li>
            <li>Weak external brand signals that reduce recommendation chances</li>
          </ul>
        </section>
        <section>
          <h2>What AskUCP Agency provides</h2>
          <ul>
            <li>Full GEO and technical audit</li>
            <li>Prioritized action report</li>
            <li>Implementation-ready code blocks</li>
          </ul>
        </section>
        <section>
          <h2>Timeline</h2>
          <p>Today: GEO-optimized stores appear in AI search experiences. Over the next 3 to 12 months, shopping integrations and agentic checkout will become more common.</p>
        </section>
      </main>`,
  },
  {
    file: "faq.html",
    title: "Ecommerce GEO FAQ | AI Search Optimization | AskUCP Agency",
    body: `
      <main>
        <h1>Ecommerce GEO FAQ</h1>
        <section>
          <h2>What is Generative Engine Optimization for ecommerce?</h2>
          <p>Generative Engine Optimization prepares ecommerce stores to be understood and cited by AI systems such as ChatGPT, Perplexity, Gemini, Claude, and other AI search experiences.</p>
        </section>
        <section>
          <h2>How is GEO different from traditional SEO?</h2>
          <p>Traditional SEO focuses on search-result rankings. GEO focuses on being selected, cited, summarized, and recommended inside AI-generated answers.</p>
        </section>
        <section>
          <h2>What does AskUCP Agency check in an audit?</h2>
          <p>AskUCP Agency reviews crawler access, rendered product data, schema, llms.txt, brand signals, AI citation opportunities, and UCP or ACP readiness.</p>
        </section>
      </main>`,
  },
  {
    file: "privacy.html",
    title: "Privacy Policy | AskUCP Agency",
    body: `
      <main>
        <h1>Privacy Policy</h1>
        <p>This Privacy Policy explains how AskUCP Agency collects, uses, stores, and protects information submitted through this website.</p>
      </main>`,
  },
  {
    file: "terms.html",
    title: "Terms of Service | AskUCP Agency",
    body: `
      <main>
        <h1>Terms of Service</h1>
        <p>These Terms of Service govern the use of the AskUCP Agency website and audit request form.</p>
      </main>`,
  },
  {
    file: "et/index.html",
    title: "AI-otsingu optimeerimine e-poodidele | AskUCP Agency",
    body: `
      <main>
        <header><p>AskUCP Agency</p></header>
        <section>
          <h1>Tee oma veebileht AI jaoks nähtavaks</h1>
          <p>Enamik e-poode on AI jaoks endiselt nähtamatud. AskUCP Agency aitab e-poodidel parandada AI-otsingu nähtavust GEO, skeemi, llms.txt ning agentse kaubanduse valmisoleku kaudu.</p>
        </section>
        <section>
          <h2>Mida audit katab</h2>
          <ul>
            <li>AI nähtavus ja toodete leitavus</li>
            <li>Schema, llms.txt ja tehnilised puudujäägid</li>
            <li>Usaldussignaalid ja prioriteetsed parandused sinu tiimile</li>
          </ul>
        </section>
      </main>`,
  },
  {
    file: "et/faq.html",
    title: "GEO KKK e-poodidele | AI-otsingu optimeerimine | AskUCP Agency",
    body: `
      <main>
        <h1>GEO KKK e-poodidele</h1>
        <section>
          <h2>Mis on GEO?</h2>
          <p>GEO valmistab e-poe ette selleks, et AI-süsteemid saaksid sinu poodi mõista, sellele viidata ja sinu tooteid soovitada.</p>
        </section>
        <section>
          <h2>Kuidas erineb GEO tavalisest SEO-st?</h2>
          <p>SEO eesmärk on tõsta lehed otsingutulemustes kõrgemale. GEO eesmärk on, et AI valiks sind välja ja soovitaks sind oma vastustes.</p>
        </section>
      </main>`,
  },
  {
    file: "et/privacy.html",
    title: "Privaatsuspoliitika | AskUCP Agency",
    body: `
      <main>
        <h1>Privaatsuspoliitika</h1>
        <p>See privaatsuspoliitika selgitab, kuidas AskUCP Agency kogub, kasutab, säilitab ja kaitseb selle veebilehe kaudu saadetud andmeid.</p>
      </main>`,
  },
  {
    file: "et/terms.html",
    title: "Kasutustingimused | AskUCP Agency",
    body: `
      <main>
        <h1>Kasutustingimused</h1>
        <p>Need kasutustingimused reguleerivad AskUCP Agency veebilehe kasutamist ja selle kaudu esitatud päringuid.</p>
      </main>`,
  },
];

for (const page of pages) {
  const filePath = resolve(dist, page.file);
  const html = readFileSync(filePath, "utf8");
  const withTitle = html.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
  const withContent = withTitle.replace('<div id="root"></div>', `<div id="root">${page.body}</div>`);
  writeFileSync(filePath, withContent);
}

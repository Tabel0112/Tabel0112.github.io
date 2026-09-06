const compactProjects = [
  {
    id: "transcript-memory-vault",
    number: "02",
    name: "Transcript Memory Vault",
    category: "Trustworthy AI · Knowledge systems",
    description:
      "An evidence-grounded transcript memory system that keeps generated claims traceable to source evidence.",
    contribution:
      "Combines citation provenance, hybrid retrieval, and an MCP interface in a TypeScript and SQLite application.",
    stack: ["TypeScript", "SQLite", "LLMs", "Embeddings"],
    href: "https://github.com/Tabel0112/interview-intelligence-vault",
  },
  {
    id: "economic-shock-simulator",
    number: "03",
    name: "Economic Shock Simulator",
    category: "Algorithms · Data visualization",
    description:
      "An interactive simulator for exploring how economic shocks propagate across a weighted country graph.",
    contribution:
      "Uses Python with Dash and Plotly to connect scenario controls to graph-based results.",
    stack: ["Python", "Dash", "Plotly", "Graph theory"],
    href: "https://github.com/Tabel0112/CSC111-Project-2",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Product engineering",
    body: "Shaping an idea into a useful interface, then building the full path that makes it work.",
    evidence: [
      { label: "Lullaby", href: "#lullaby" },
      { label: "DRAFT", href: "#draft" },
    ],
  },
  {
    number: "02",
    title: "AI systems",
    body: "Designing retrieval and evidence flows with clear reliability boundaries—not just a model call.",
    evidence: [{ label: "Transcript Memory Vault", href: "#transcript-memory-vault" }],
  },
  {
    number: "03",
    title: "Interactive software",
    body: "Making technical systems legible through responsive interfaces, controls, and visualization.",
    evidence: [{ label: "Economic Shock Simulator", href: "#economic-shock-simulator" }],
  },
];

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tag-list" aria-label="Technologies">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abel, home">
          Abel<span>/</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a className="about-nav" href="#about">About</a>
          <a className="nav-external" href="https://github.com/Tabel0112" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero content-grid" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software · AI · Product</p>
          <h1>Useful ideas.<br />Thoughtfully <span>built.</span></h1>
          <p className="hero-lede">
            I build mobile apps, AI systems, and web experiences—from the first idea
            to the details that make them work.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="https://github.com/Tabel0112" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="signal-card" aria-hidden="true">
          <div className="signal-top"><span>Selected systems</span><span>04 builds</span></div>
          <div className="build-stack">
            <div className="stack-panel panel-product"><span>Product</span><b>01</b></div>
            <div className="stack-panel panel-ai"><span>AI</span><b>02</b></div>
            <div className="stack-panel panel-mobile"><span>Mobile</span><b>03</b></div>
          </div>
          <div className="signal-bottom"><span>Toronto, Canada</span><span>Open 2026</span></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="content-grid section-intro">
          <p className="section-index">01 / Selected work</p>
          <div>
            <h2>Selected projects</h2>
            <p>Mobile, AI, commerce, and simulation.</p>
          </div>
        </div>

        <div className="content-grid project-list">
          <article className="project project-featured" id="lullaby">
            <div className="project-visual visual-lullaby">
              <span className="visual-index" aria-hidden="true">01</span>
              <img src="/lullaby-logo-isolated-v7.png" alt="Lullaby" decoding="async" />
            </div>
            <div className="project-copy">
              <p className="project-meta">Mobile product · Full-stack · AI</p>
              <h3>Lullaby</h3>
              <p className="project-description">
                A personalized sleep-audio experience spanning a mobile interface, playback, and its supporting backend.
              </p>
              <p className="project-contribution">
                Connects a React Native and Expo mobile experience to FastAPI services and PostgreSQL data.
              </p>
              <Tags items={["React Native", "Expo", "FastAPI", "PostgreSQL"]} />
              <div className="project-status">
                <span className="project-note">Private source</span>
              </div>
            </div>
          </article>

          <div className="compact-project-grid">
            {compactProjects.map((project) => (
              <article className="compact-project" id={project.id} key={project.name}>
                <div className="compact-topline">
                  <span>{project.number}</span>
                  <p className="project-meta">{project.category}</p>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-contribution">{project.contribution}</p>
                <Tags items={project.stack} />
                <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                  View repository <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <article className="project project-draft" id="draft">
            <div className="project-visual visual-draft">
              <span className="visual-index" aria-hidden="true">04</span>
              <img src="/draft-logo-original-v5.png" alt="DRAFT" loading="lazy" decoding="async" />
            </div>
            <div className="project-copy">
              <p className="project-meta">Commerce · Frontend · Design</p>
              <h3>DRAFT</h3>
              <p className="project-description">
                A configurable Shopify fashion storefront built from custom editorial sections and responsive layouts.
              </p>
              <p className="project-contribution">
                Uses reusable Liquid sections and GitHub Actions quality checks to keep storefront changes consistent.
              </p>
              <Tags items={["Shopify", "Liquid", "CSS", "GitHub Actions"]} />
              <span className="project-note draft-note">Private build</span>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="content-grid">
          <div className="about-intro">
            <p className="section-index">02 / About</p>
            <h2>I care about how software works—and how it feels.</h2>
            <p>Across mobile, AI, commerce, and simulation, I focus on clear product decisions, dependable systems, and thoughtful interactions.</p>
          </div>
          <div className="capability-list" aria-label="Capabilities">
            {capabilities.map((capability) => (
              <article key={capability.title}>
                <span className="capability-index">{capability.number}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                  <span className="capability-evidence">
                    {capability.evidence.map((item, index) => (
                      <span key={item.href}>
                        {index > 0 && <span aria-hidden="true"> · </span>}
                        <a href={item.href}>{item.label}</a>
                      </span>
                    ))}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="content-grid contact-grid">
          <div>
            <p className="section-index">03 / Contact</p>
            <h2>Let’s make something useful.</h2>
          </div>
          <a className="contact-link" href="https://github.com/Tabel0112" target="_blank" rel="noreferrer">
            Find me on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="content-grid footer-grid">
          <span>© 2026 Abel</span>
          <span>Toronto, Canada</span>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </main>
  );
}

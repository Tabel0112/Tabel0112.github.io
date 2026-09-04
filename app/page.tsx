const projects = [
  {
    number: "01",
    name: "Lullaby",
    category: "Mobile product · Full-stack · AI",
    description:
      "A personalized sleep-audio experience engineered from mobile interface to production backend.",
    proof: ["Personalized audio", "Reliable playback", "Production delivery"],
    stack: ["React Native", "Expo", "FastAPI", "PostgreSQL"],
    href: null,
    note: "Private product",
    visual: "lullaby",
  },
  {
    number: "02",
    name: "Transcript Memory Vault",
    category: "Trustworthy AI · Knowledge systems",
    description:
      "An evidence-grounded memory system where every generated claim traces back to exact transcript evidence.",
    proof: ["Citation provenance", "Hybrid retrieval", "MCP integration"],
    stack: ["TypeScript", "SQLite", "LLMs", "Embeddings"],
    href: "https://github.com/Tabel0112/interview-intelligence-vault",
    note: "View repository ↗",
    visual: "vault",
  },
  {
    number: "03",
    name: "DRAFT",
    category: "Commerce · Frontend · Design",
    description:
      "A configurable Shopify fashion storefront with custom editorial sections and a responsive visual system.",
    proof: ["Custom Liquid sections", "Responsive design", "Quality checks"],
    stack: ["Shopify", "Liquid", "CSS", "GitHub Actions"],
    href: null,
    note: "Private build",
    visual: "draft",
  },
  {
    number: "04",
    name: "Economic Shock Simulator",
    category: "Algorithms · Data visualization",
    description:
      "An interactive application for exploring how economic shocks propagate through weighted country graphs.",
    proof: ["Weighted graphs", "Interactive controls", "Data visualization"],
    stack: ["Python", "Dash", "Plotly", "Graph theory"],
    href: "https://github.com/Tabel0112/CSC111-Project-2",
    note: "View repository ↗",
    visual: "economy",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Product engineering",
    body: "Taking an idea through product decisions, interface design, implementation, and real-world delivery.",
  },
  {
    number: "02",
    title: "AI systems",
    body: "Designing LLM, embedding, retrieval, and evidence pipelines with explicit reliability boundaries.",
  },
  {
    number: "03",
    title: "Mobile & frontend",
    body: "Building responsive web experiences and native-feeling mobile flows with careful interaction details.",
  },
  {
    number: "04",
    title: "Backend foundations",
    body: "Developing APIs, databases, migrations, tests, and deployment paths that hold up beyond the demo.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abel, home">
          A<span>/01</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
          <a href="https://github.com/Tabel0112" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Software · AI · Product</p>
          <h1>I build useful software from idea to production.</h1>
          <p className="hero-lede">
            I’m Abel—a product-minded engineer creating full-stack mobile apps,
            trustworthy AI systems, and thoughtful digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work ↓</a>
            <a className="button button-ghost" href="https://github.com/Tabel0112" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>

        <div className="signal-card" aria-hidden="true">
          <div className="signal-top"><span>BUILD SIGNAL</span><span>LIVE</span></div>
          <div className="signal-orbit">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="signal-core">A</span>
            <i className="node node-one" />
            <i className="node node-two" />
            <i className="node node-three" />
          </div>
          <div className="signal-bottom"><span>43.653° N</span><span>79.383° W</span></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-index">01 / Selected work</p>
          <h2>Products with a point of view.</h2>
          <p>From sleep technology to evidence-grounded AI and commerce—each project balances product clarity with technical depth.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
                <span className="visual-index">{project.number}</span>
                <div className="visual-mark">{project.name.slice(0, 1)}</div>
                <div className="visual-grid" />
              </div>
              <div className="project-copy">
                <p className="project-meta">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="proof-list" aria-label={`${project.name} highlights`}>
                  {project.proof.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-footer">
                  <div className="tag-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  {project.href ? (
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.note}</a>
                  ) : (
                    <span className="project-note">{project.note}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-heading inverse">
          <p className="section-index">02 / Capabilities</p>
          <h2>I work across the whole product.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.title}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
        <div className="toolbelt" aria-label="Technology stack">
          <span>TypeScript</span><span>Python</span><span>React Native</span><span>Expo</span>
          <span>FastAPI</span><span>PostgreSQL</span><span>SQLite</span><span>Shopify Liquid</span>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="section-index">03 / About</p>
        <div className="about-grid">
          <h2>I like the messy middle between an ambitious idea and a product people can actually use.</h2>
          <div>
            <p>
              My projects span mobile sleep experiences, evidence-grounded AI,
              commerce interfaces, and graph simulations. I care about how software
              feels—and about the systems that make it dependable underneath.
            </p>
            <p>
              I’m open to software, AI, product-engineering, internship, and hackathon opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <p className="eyebrow"><span /> Available for what’s next</p>
        <h2>Have an ambitious idea?</h2>
        <a className="contact-link" href="https://github.com/Tabel0112" target="_blank" rel="noreferrer">
          Let’s connect on GitHub <span>↗</span>
        </a>
      </section>

      <footer>
        <span>© 2026 Abel</span>
        <span>Built with care in Toronto</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

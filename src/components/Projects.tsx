interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
  ogp?: boolean;
  ogpLabel?: string;
}

const projects: Project[] = [
  {
    name: "plumber",
    description: "Pipeline automation platform for the Singapore Government — automate workflows across government agencies.",
    language: "TypeScript",
    url: "https://github.com/ketanwani/plumber",
    ogp: true,
    ogpLabel: "plumber.gov.sg",
  },
  {
    name: "FormSG",
    description: "Official form builder for the Singapore Government — used by agencies to collect data securely from citizens.",
    language: "TypeScript",
    url: "https://github.com/ketanwani/FormSG",
    ogp: true,
    ogpLabel: "form.gov.sg",
  },
  {
    name: "GoGovSG",
    description: "Official link shortener of the Singapore Government — trusted short URLs for government digital services.",
    language: "TypeScript",
    url: "https://github.com/ketanwani/GoGovSG",
    ogp: true,
    ogpLabel: "go.gov.sg",
  },
  {
    name: "Chat-Moderator-for-AI-chatbot",
    description: "Real-time moderation and compliance engine for AI chatbots — filters unsafe content and enforces policies on the fly.",
    language: "Python",
    url: "https://github.com/ketanwani/Chat-Moderator-for-AI-chatbot",
  },
  {
    name: "ptflow",
    description: "Workflow automation and pipeline management system for orchestrating complex multi-step processes.",
    language: "TypeScript",
    url: "https://github.com/ketanwani/ptflow",
  },
  {
    name: "Trading-System",
    description: "Prototype trading system with an order book, buy/sell matching engine, and multi-user support.",
    language: "Python",
    url: "https://github.com/ketanwani/Trading-System",
  },
];

const langColors: Record<string, string> = {
  Python: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  TypeScript: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
};

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Projects() {
  const ogpProjects = projects.filter((p) => p.ogp);
  const personalProjects = projects.filter((p) => !p.ogp);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="font-mono text-cyan-400 text-sm mb-3">// projects</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">GitHub Projects</h2>
      <p className="text-slate-400 mb-12">
        Open source contributions and personal projects.{" "}
        <a
          href="https://github.com/ketanwani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          View all on GitHub →
        </a>
      </p>

      {/* OGP / Singapore GovTech */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
            Open Government Products · Singapore
          </span>
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 rounded px-2 py-0.5 font-mono shrink-0">
            🇸🇬 gov.sg
          </span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {ogpProjects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/60 border border-cyan-400/20 rounded-lg p-5 hover:border-cyan-400/50 hover:bg-slate-900 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">
                  <GitHubIcon />
                </span>
                <span className="text-xs font-mono text-cyan-400/70 bg-cyan-400/5 border border-cyan-400/20 rounded px-1.5 py-0.5">
                  {p.ogpLabel}
                </span>
              </div>

              <h3 className="font-mono text-slate-200 text-sm font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                {p.name}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{p.description}</p>

              <span className={`self-start text-xs px-2 py-0.5 rounded border ${langColors[p.language] ?? "bg-slate-800 text-slate-400 border-slate-700"}`}>
                {p.language}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Personal projects */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Personal Projects</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personalProjects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/40 border border-slate-800 rounded-lg p-5 hover:border-cyan-400/25 hover:bg-slate-900/70 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">
                  <GitHubIcon />
                </span>
                <svg
                  className="w-3.5 h-3.5 text-slate-700 group-hover:text-slate-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              <h3 className="font-mono text-slate-200 text-sm font-semibold mb-2 group-hover:text-cyan-400 transition-colors break-all">
                {p.name}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{p.description}</p>

              <span className={`self-start text-xs px-2 py-0.5 rounded border ${langColors[p.language] ?? "bg-slate-800 text-slate-400 border-slate-700"}`}>
                {p.language}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

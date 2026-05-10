const skills: Record<string, string[]> = {
  "AI & Automation": ["AI Agents", "Agentic Workflows", "ML Applications", "No-Code Platforms", "Workflow Orchestration"],
  Languages: ["Python", "TypeScript", "C++", "JavaScript", "Hack/PHP", "C#", "SQL"],
  Frontend: ["React.js", "Next.js", "GraphQL", "Tailwind CSS"],
  "Backend & Data": ["MySQL", "AWS", "REST APIs", "CI/CD", "WCF Services", "FIX Protocol"],
  "Security & Infra": ["OAuth 2.0", "MS Graph API", "2FA", "Cryptographic Tokens", "Proxygen LB"],
  Tools: ["Git", "Docker", "Skia", "Apache Superset", ".NET"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="font-mono text-cyan-400 text-sm mb-3">// skills</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">Tech Stack</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-slate-900/40 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
          >
            <h3 className="font-mono text-cyan-400 text-xs uppercase tracking-wider mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded border border-slate-700 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

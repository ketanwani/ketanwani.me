const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2", label: "FAANG Companies" },
  { value: "5", label: "Engineers Led" },
  { value: "30%", label: "Support Load Cut" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="font-mono text-cyan-400 text-sm mb-3">// about</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">About Me</h2>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
          <p>
            I&apos;m a software engineer with 15+ years of experience turning complex
            engineering challenges into elegant, scalable systems. My career spans medical
            diagnostics, financial trading, e-commerce, and now AI at Meta.
          </p>
          <p>
            At Meta Singapore, I lead a team building a{" "}
            <span className="text-cyan-400 font-semibold">no-code AI agent builder platform</span>{" "}
            — think n8n meets OpenAI Agents — that lets business teams automate complex
            processes without deep technical dependency. It already powers meta.com CRM
            customer support and content moderation workflows.
          </p>
          <p>
            I care about outcomes, not just elegance. From cutting onboarding time from
            3 months to 2 weeks, to reducing production support load by 30%, I focus on
            measurable business impact.
          </p>
          <p className="text-slate-400 text-base">
            I speak English, Hindi, Gujarati (native), and a bit of Japanese. I once
            built a robot that plays cricket. It won first prize.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center hover:border-cyan-400/20 transition-colors"
            >
              <div className="text-4xl font-bold text-cyan-400 font-mono mb-2">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

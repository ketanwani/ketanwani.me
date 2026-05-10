const experience = [
  {
    company: "Meta (Facebook)",
    role: "Software Engineer – AI Agents, Workflow Automation & Enterprise Platforms",
    location: "Singapore",
    period: "Aug 2020 – Present",
    dot: "bg-cyan-400",
    badge: "border-cyan-400/40 text-cyan-400 bg-cyan-400/5",
    highlights: [
      "Leading a team of 5 engineers to build a no-code AI agent builder platform (similar to n8n / OpenAI agent builder) powering customer support and content moderation automation",
      "Built and deployed an AI agent using Meta's agentic framework — reduced production support workload by 30% in one half",
      "Designed and developed metaenterprise.com, cutting third-party app onboarding from 3 months to 2 weeks",
      "Architected a VPN-less access solution using cryptographic tokens + 2FA built into Proxygen LB (C++)",
      "Developed ML model to recommend relevant tests during code reviews, improving review quality",
      "Integrated MS Graph API with OAuth 2.0 for secure enterprise document access",
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer – Test",
    location: "Bangalore, India",
    period: "Jan 2015 – Aug 2020",
    dot: "bg-orange-400",
    badge: "border-orange-400/40 text-cyan-400 bg-orange-400/5",
    highlights: [
      "Built YJGoogly — a Python/MySQL analytics engine on AWS for Kindle, providing actionable insights that drove strategic decisions across teams",
      "Developed grayscale rendering for comics in Kindle Create using C++ and Skia for e-ink devices",
      "Designed CI/CD pipelines and test frameworks for critical components across 7 platforms",
    ],
  },
  {
    company: "Sagitec Solutions",
    role: "Senior Software Engineer",
    location: "Pune, India",
    period: "Mar 2014 – Jan 2015",
    dot: "bg-purple-400",
    badge: "border-purple-400/40 text-purple-400 bg-purple-400/5",
    highlights: [
      "Delivered full-stack pension domain applications using .NET and a low-code platform",
      "Collaborated directly with clients to tailor solutions to unique business needs",
    ],
  },
  {
    company: "SunGard (now FIS)",
    role: "Senior Engineer – Product Development",
    location: "Pune, India",
    period: "Feb 2011 – Mar 2014",
    dot: "bg-green-400",
    badge: "border-green-400/40 text-green-400 bg-green-400/5",
    highlights: [
      "Engineered middleware and trading system integrations using C++, FIX protocol, and WCF services",
      "Designed a custom data parser and web service layers; idea later adopted into an official SunGard product line",
    ],
  },
  {
    company: "IGATE",
    role: "Senior Software Engineer",
    location: "Pune, India",
    period: "Nov 2007 – Feb 2011",
    dot: "bg-slate-500",
    badge: "border-slate-500/40 text-slate-400 bg-slate-500/5",
    highlights: [
      "Led a 7-member team to build a UI application for Analytical Analyzer 6000, a medical diagnostics device",
      "Full-cycle development using Managed C++, .NET Windows Forms, and MSSQL Server",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="font-mono text-cyan-400 text-sm mb-3">// experience</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">Career Timeline</h2>

      <div className="relative">
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-slate-800" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={i} className="relative pl-12 sm:pl-20">
              <div
                className={`absolute left-[11px] sm:left-[27px] top-2 w-3 h-3 rounded-full ${job.dot} ring-4 ring-[#05080f]`}
              />

              <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{job.company}</h3>
                    <p className="text-slate-400 text-sm mt-0.5">{job.role}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`inline-block border rounded px-2 py-0.5 text-xs font-mono ${job.badge}`}>
                      {job.period}
                    </span>
                    <p className="text-slate-600 text-xs mt-1">{job.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-slate-400 text-sm">
                      <span className="text-cyan-400/70 mt-0.5 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

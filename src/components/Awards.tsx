const awards = [
  {
    title: "First Prize – Robotics Competition",
    org: "L.D. Engineering College, Ahmedabad",
    year: "2006",
    description:
      "Designed and built a multifunctional robot capable of playing cricket (batting and bowling) in a custom arena. Won first prize among all participating teams.",
    icon: "🤖",
  },
  {
    title: "Winner – Innovation Contest",
    org: "SunGard",
    year: "2013",
    description:
      "First place in an internal innovation contest for a high-impact product idea that was later adopted into one of SunGard's official product lines.",
    icon: "💡",
  },
  {
    title: "Valuable Contribution Star",
    org: "iGATE",
    year: "2010",
    description:
      "Recognised for identifying and resolving a critical memory leak in a .NET application for Hitachi High Technologies, ensuring stability under tight project deadlines.",
    icon: "⭐",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="font-mono text-cyan-400 text-sm mb-3">// honors</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12">Awards & Honors</h2>

      <div className="grid sm:grid-cols-3 gap-5">
        {awards.map((a) => (
          <div
            key={a.title}
            className="bg-slate-900/40 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
          >
            <div className="text-3xl mb-4">{a.icon}</div>
            <div className="font-mono text-xs text-slate-600 mb-1">
              {a.org} · {a.year}
            </div>
            <h3 className="text-slate-100 font-semibold mb-3 text-sm">{a.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

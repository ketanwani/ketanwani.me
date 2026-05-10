"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05080f]/95 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-cyan-400 font-semibold text-lg">
          ketan<span className="text-slate-600">.</span>wani
        </a>

        <ul className="hidden sm:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden sm:block border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all px-4 py-1.5 rounded font-mono text-sm"
        >
          Book a Call
        </a>

        <button
          className="sm:hidden text-slate-400 hover:text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-[#05080f]/95 backdrop-blur-md border-b border-slate-800 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-400 hover:text-cyan-400 font-mono text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 border border-cyan-400 text-cyan-400 text-center py-2 rounded font-mono text-sm"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}

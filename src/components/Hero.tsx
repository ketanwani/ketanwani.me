"use client";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "AI Agent Builder",
  "Platform Architect",
  "Engineering Lead",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto pt-20">
      {/* Avatar + status */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avatars.githubusercontent.com/u/13885460?v=4"
            alt="Ketan Wani"
            className="w-16 h-16 rounded-full border-2 border-cyan-400/40 object-cover"
          />
          <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#05080f]" />
        </div>
        <div className="font-mono text-sm text-slate-500">
          <span className="text-slate-300 font-semibold">Ketan Wani</span>
          <span className="mx-2 text-slate-700">·</span>
          <span className="text-green-400">open to conversations</span>
        </div>
      </div>

      <div className="font-mono text-slate-600 text-sm mb-4">
        <span className="text-cyan-400">~</span> whoami
      </div>

      <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-400 bg-clip-text text-transparent leading-tight">
        Ketan Wani
      </h1>

      <div className="h-10 sm:h-12 mb-8 flex items-center">
        <span className="text-xl sm:text-2xl font-mono text-slate-300">
          {displayed}
          <span className="text-cyan-400 animate-blink ml-0.5">|</span>
        </span>
      </div>

      <p className="text-slate-400 text-lg max-w-2xl mb-3 leading-relaxed">
        15+ years building scalable systems at{" "}
        <span className="text-cyan-400 font-semibold">Meta</span> and{" "}
        <span className="text-cyan-400 font-semibold">Amazon</span>. Currently leading
        a no-code AI agent builder platform that powers enterprise workflow automation
        — from customer support to content moderation — at scale.
      </p>

      <p className="font-mono text-slate-600 text-sm mb-10">
        📍 Singapore &nbsp;·&nbsp; ketan.wa@gmail.com
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="#contact"
          className="bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-colors px-6 py-3 rounded font-bold font-mono text-sm"
        >
          Book a Call →
        </a>
        <a
          href="#experience"
          className="border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all px-6 py-3 rounded font-mono text-sm"
        >
          View Experience
        </a>
        <a
          href="https://github.com/ketanwani"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-100 transition-all px-5 py-3 rounded font-mono text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ketan-wani-5187a820/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-700 text-slate-400 hover:border-blue-400 hover:text-blue-400 transition-all px-5 py-3 rounded font-mono text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>

      <div className="mt-20 flex justify-center">
        <a href="#about" className="text-slate-700 hover:text-slate-400 transition-colors animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

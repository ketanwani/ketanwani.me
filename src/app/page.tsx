import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm font-mono">
        <p>Built with Next.js · Deployed on GitHub Pages</p>
        <p className="mt-1">© 2026 Ketan Wani · Singapore</p>
      </footer>
      <ChatWidget />
    </>
  );
}

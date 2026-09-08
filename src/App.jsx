import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-pink-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(255,45,149,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_28px_rgba(255,45,149,0.8)] sm:flex ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <FaArrowUp />
    </button>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen w-full scroll-smooth bg-night text-gray-100">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(50% 40% at 90% 55%, rgba(255,45,149,0.12), transparent 60%), radial-gradient(50% 40% at 10% 70%, rgba(99,102,241,0.14), transparent 60%)",
        }}
      />
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10 opacity-60" />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-pink-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main">
        <section id="home" className="pt-6">
          <Home />
        </section>

        <section id="about" className="pt-6 pb-10">
          <About />
        </section>

        <section id="skills" className="pt-6 pb-24">
          <Skills />
        </section>

        <section id="services" className="pt-12 pb-24">
          <Services />
        </section>

        <section id="projects" className="pt-6 pb-24">
          <Projects />
        </section>

        <section id="contact" className="pt-6 pb-24">
          <Contact />
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
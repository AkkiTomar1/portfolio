import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-linear-to-br from-brand-dark via-brand-mid to-brand-deep text-gray-100">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-pink-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <section id="home" className="pt-20">
          <Home />
        </section>

        <section id="about" className="pt-20 bg-brand-navy/90 backdrop-blur-sm">
          <About />
        </section>

        <section id="services" className="bg-linear-to-tr from-brand-indigo via-brand-royal to-brand-indigo">
          <Services />
        </section>

        <section id="projects" className="pt-20 bg-brand-slate/95 backdrop-blur-md">
          <Projects />
        </section>

        <section id="contact" className="pt-20 bg-linear-to-br from-brand-violet via-[#7597de] to-brand-navy">
          <Contact />
        </section>
      </main>

      <section id="footer" className="bg-brand-charcoal border-t border-pink-700">
        <Footer />
      </section>
    </div>
  );
}
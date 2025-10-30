import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-linear-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="home" className="pt-20">
        <Home />
      </section>

      <section id="about" className="pt-20 bg-[#1b1b2f]/90 backdrop-blur-sm">
        <About />
      </section>

      <section id="services" className=" bg-linear-to-tr from-[#1a1a40] via-[#272752] to-[#1a1a40]">
        <Services />
      </section>

      <section id="projects" className="pt-20 bg-[#1c1c35]/95 backdrop-blur-md">
        <Projects />
      </section>

      <section id="contact" className="pt-20 bg-linear-to-br from-[#2b1055] via-[#7597de] to-[#1b1b2f]">
        <Contact />
      </section>

      <section id="footer" className=" bg-[#111122] border-t border-pink-700">
        <Footer />
      </section>
    </div>
  );
};

export default App;

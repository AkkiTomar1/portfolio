import { useState, useEffect } from "react";
import Logo from '../assets/logo.png';

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Detect active section
  useEffect(() => {
    const sectionIds = navItems.map(item => item.id).concat("contact");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0 left-0">
      <div>
        <div className="flex justify-between items-center py-3 px-4 sm:px-8 
bg-linear-to-r from-[#1a1a40] via-[#302b63] to-[#24243e] 
backdrop-blur-md shadow-2xl rounded-b-3xl border-b-[3px] border-purple-500/50">
          {/* Logo with gradient ring */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="bg-linear-to-br from-pink-900 via-pink-300 to-purple-900 rounded-full shadow-lg transition-transform duration-200 group-hover:scale-103">
              <img src={Logo} alt="Logo" className="h-11 w-12 rounded-xl bg-white object-center" />
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative font-medium px-3 py-1 text-white text-lg bg-transparent transition-all duration-200 hover:text-yellow-400 rounded-md"
              >
                <span
                  className={`transition font-semibold ${activeSection === id ? "text-yellow-400" : ""
                    }`}
                >
                  {label}
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 rounded-full transition-all duration-300 ${activeSection === id
                      ? "bg-linear-to-r from-yellow-400 via-pink-400 to-purple-600 scale-x-100"
                      : "scale-x-0"
                    }`}
                />
              </button>
            ))}
          </div>
          {/* Contact Button */}
          <div className="hidden md:flex">
            <button
              className={`relative bg-linear-to-r from-pink-500 to-purple-600 shadow-xl text-white px-7 py-2 rounded-full font-bold hover:scale-105 transition ring-4 ${activeSection === "contact"
                  ? "ring-yellow-300"
                  : "ring-transparent"
                }`}
            >
              <a
              href="https://drive.google.com/file/d/1f4z0_md6y5RRb_Y1YdvWNWd9MCKqE-Lp/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className=" decoration-pink-500 hover:text-pink-100"
            >
              Resume
            </a>
            </button>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-400 bg-white rounded-full p-2 shadow focus:outline-none transition-all"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {/* Mobile Slide-in Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-down bg-white/95 backdrop-blur-md shadow-2xl rounded-b-3xl border-b-4 border-purple-200">
            <div className="flex flex-col items-center space-y-6 py-5">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-48 py-2 font-semibold rounded-xl text-gray-700 transition duration-200 hover:text-yellow-400 hover:bg-purple-50 ${activeSection === id
                      ? "bg-yellow-50 text-yellow-600 border-l-4 border-yellow-400 font-bold"
                      : ""
                    }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className={`bg-linear-to-r from-pink-500 to-purple-600 text-white w-48 py-2 rounded-full font-bold shadow hover:opacity-95 transition ${activeSection === "contact" ? "ring-4 ring-yellow-300" : ""
                  }`}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import Logo from '../assets/logo.png';
import { scrollToSection } from '../utils/scrollToSection';
import { RESUME_URL, NAV_ITEMS } from '../data/constants';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(item => item.id).concat("contact");
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
    <nav className="fixed w-full z-50 top-0 left-0" aria-label="Main navigation">
      <div>
        <div className="flex justify-between items-center py-3 px-4 sm:px-8 
          bg-linear-to-r from-brand-indigo via-brand-mid to-brand-deep 
          backdrop-blur-md shadow-2xl rounded-b-3xl border-b-[3px] border-purple-500/50"
        >
          <button
            className="flex items-center gap-2 cursor-pointer group bg-transparent border-0 p-0"
            onClick={() => handleNavClick("home")}
            aria-label="Go to home"
          >
            <div className="bg-linear-to-br from-pink-900 via-pink-300 to-purple-900 rounded-full shadow-lg transition-transform duration-200 group-hover:scale-103">
              <img src={Logo} alt="Akhilesh Tomar - Portfolio Logo" className="h-11 w-12 rounded-xl bg-white object-center" />
            </div>
          </button>

          <div className="hidden md:flex items-center gap-5">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="relative font-medium px-3 py-1 text-white text-lg bg-transparent transition-all duration-200 hover:text-yellow-400 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-current={activeSection === id ? "true" : undefined}
              >
                <span className={`transition font-semibold ${activeSection === id ? "text-yellow-400" : ""}`}>
                  {label}
                </span>
                <span className={`absolute left-0 -bottom-1 w-full h-0.5 rounded-full transition-all duration-300 ${
                  activeSection === id ? "bg-linear-to-r from-yellow-400 via-pink-400 to-purple-600 scale-x-100" : "scale-x-0"
                }`} />
              </button>
            ))}
          </div>

          <div className="hidden md:flex">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative bg-linear-to-r from-pink-500 to-purple-600 shadow-xl text-white px-7 py-2 rounded-full font-bold hover:scale-105 transition ring-4 ${activeSection === "contact" ? "ring-yellow-300" : "ring-transparent"}`}
            >
              Resume
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-400 bg-white rounded-full p-2 shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden animate-fade-in-down bg-white/95 backdrop-blur-md shadow-2xl rounded-b-3xl border-b-4 border-purple-200 px-6 mx-4"
          >
            <div className="flex flex-col items-center space-y-4 py-5">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`w-full py-2 font-semibold rounded-xl text-gray-700 transition duration-200 hover:text-yellow-400 hover:bg-purple-50 text-center ${
                    activeSection === id
                      ? "bg-yellow-50 text-yellow-600 border-l-4 border-yellow-400 font-bold"
                      : ""
                  }`}
                >
                  {label}
                </button>
              ))}

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-center shadow hover:opacity-95 transition"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
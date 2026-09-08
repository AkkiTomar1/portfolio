import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.webp";
import { scrollToSection } from "../utils/scrollToSection";
import { useScrollProgress } from "../utils/useScrollProgress";
import { RESUME_URL, NAV_ITEMS } from "../data/constants";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const progress = useScrollProgress();
  const navRef = useRef(null);
  const headerRef = useRef(null);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setActiveSection(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const line = (headerRef.current?.getBoundingClientRect().bottom ?? 70) + 20;
      let current = NAV_ITEMS[0].id;
      for (const { id } of NAV_ITEMS) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    const watchdog = window.setInterval(updateActiveSection, 250);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.clearInterval(watchdog);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full px-8 pt-4 sm:px-12 md:px-16"
      aria-label="Main navigation"
    >
      <div className="glass-strong relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-white/10">
        <div
          className="absolute top-0 left-0 h-1 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-[0_0_12px_rgba(255,45,149,0.7)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />

        <div
          ref={headerRef}
          className="flex items-center justify-between gap-4 px-5 py-3 sm:px-7 md:px-8"
        >
          <button
            className="flex items-center gap-2.5 cursor-pointer bg-transparent border-0 p-0"
            onClick={() => handleNavClick("home")}
            aria-label="Go to home"
          >
            <img
              src={Logo}
              alt="Akhilesh Tomar - Portfolio Logo"
              className="h-11 w-11 rounded-xl object-cover shadow-lg ring-1 ring-white/10"
            />
            <span className="hidden font-display text-lg font-bold text-white sm:block">
              Akhilesh<span className="text-gradient">.</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                aria-current={activeSection === id ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-pink-400 outline-none ${
                  activeSection === id
                    ? "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(255,45,149,0.9)]" />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(255,45,149,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_28px_rgba(255,45,149,0.55)]"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-200 transition-colors hover:text-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="14" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="animate-fade-in-down border-t border-white/10 px-5 pb-5 pt-2 sm:px-7 md:px-8 lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  aria-current={activeSection === id ? "true" : undefined}
                  className={`w-full rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-colors ${
                    activeSection === id
                      ? "bg-white/10 text-pink-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full rounded-xl bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 px-4 py-2.5 text-center text-sm font-bold text-white shadow-lg"
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
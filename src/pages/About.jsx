import {
  FaDownload,
  FaBolt,
  FaPalette,
  FaLink,
  FaRocket,
  FaCommentDots,
} from "react-icons/fa";
import { useScrollReveal } from "../utils/useScrollReveal";
import { scrollToSection } from "../utils/scrollToSection";
import { RESUME_URL } from "../data/constants";
import { techStack } from "../data/skillsData";

const HIGHLIGHTS = [
  {
    icon: FaBolt,
    title: "Performance & Clean Code",
    text: "Optimized, maintainable code with a focus on speed and simplicity.",
  },
  {
    icon: FaPalette,
    title: "Modern, Accessible UI",
    text: "Responsive interfaces that look great and work for everyone.",
  },
  {
    icon: FaLink,
    title: "Full-Stack (React + NestJS)",
    text: "Comfortable owning features from pixel-perfect UIs to robust APIs.",
  },
  {
    icon: FaRocket,
    title: "End-to-End Ownership",
    text: "Taking ideas from concept to shipped, production-ready product.",
  },
];

const STATS = [
  { value: "3+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "2", label: "Certifications" },
  { value: "1+", label: "Year Experience" },
];

export default function About() {
  const introRef = useScrollReveal();
  const highlightsRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <section className="px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div ref={introRef} className="reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-pink-400">
            About Me
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">
            Turning ideas into{" "}
            <span className="text-gradient">digital experiences</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            I'm a Software Developer Apprentice at{" "}
            <span className="font-semibold text-pink-400">Network18</span> with a Master's in
            Computer Applications. I specialize in building responsive{" "}
            <span className="font-semibold text-purple-400">React</span> interfaces and robust{" "}
            <span className="font-semibold text-indigo-400">NestJS</span> APIs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            From pixel-perfect UIs to secure backend services, I enjoy owning a feature end to end —
            clean code, modern design principles and performance are at the core of everything I
            build. Currently open to new opportunities and interesting freelance projects.
          </p>

          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Tech I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-pink-500/40 hover:text-pink-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={highlightsRef}
          className="reveal reveal-delay-1 mt-12 grid gap-5 sm:grid-cols-2"
        >
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="glass-strong group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-500/30 hover:shadow-[0_10px_40px_rgba(255,45,149,0.15)]"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-pink-600 via-purple-600 to-indigo-600 text-lg text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Icon />
              </span>
              <h3 className="font-display text-base font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{text}</p>
            </div>
          ))}
        </div>

        <div
          ref={statsRef}
          className="reveal reveal-delay-2 mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 px-8 py-3.5 font-bold text-white shadow-[0_8px_30px_rgba(255,45,149,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_36px_rgba(255,45,149,0.55)]"
          >
            <FaDownload /> Download Resume
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-bold text-white backdrop-blur transition-all duration-300 hover:border-pink-500/40 hover:text-pink-300 hover:scale-105"
          >
            <FaCommentDots /> Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
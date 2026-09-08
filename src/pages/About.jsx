import {
  FaDownload,
  FaBolt,
  FaPalette,
  FaLink,
  FaRocket,
  FaCommentDots,
} from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
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
  { value: "1+", label: "Year Experience" },
];

export default function About() {
  const introRef = useScrollReveal();
  const highlightsRef = useScrollReveal();

  return (
    <section className="px-8 sm:px-12 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="About me"
          title="More About"
          highlight="Me"
          subtitle="A quick look at who I am, what I do, and the tech I use."
          compact
        />

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div ref={introRef} className="reveal glass-strong rounded-2xl p-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-pink-400">
              About Me
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              Turning ideas into{" "}
              <span className="text-gradient">digital experiences</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-300">
              I'm a Software Developer Apprentice at{" "}
              <span className="font-semibold text-pink-400">Network18</span> with a Master's in
              Computer Applications. I specialize in building responsive{" "}
              <span className="font-semibold text-purple-400">React</span> interfaces and robust{" "}
              <span className="font-semibold text-indigo-400">NestJS</span> APIs.
            </p>

            <div className="mt-5">
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

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 px-7 py-3 font-bold text-white shadow-[0_8px_30px_rgba(255,45,149,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_36px_rgba(255,45,149,0.55)]"
              >
                <FaDownload /> Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 font-bold text-white backdrop-blur transition-all duration-300 hover:border-pink-500/40 hover:text-pink-300 hover:scale-105"
              >
                <FaCommentDots /> Let's Talk
              </button>
            </div>
          </div>

          <div ref={highlightsRef} className="reveal reveal-delay-1 flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="glass-strong group rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-500/30 hover:shadow-[0_10px_40px_rgba(255,45,149,0.15)]"
                >
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-pink-600 via-purple-600 to-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </span>
                  <h3 className="font-display text-sm font-bold text-white">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-400">{text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8" />
      </div>
    </section>
  );
}
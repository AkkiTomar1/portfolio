import { FaDownload } from "react-icons/fa";
import {
  SiReact,
  SiNestjs,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import Profile from "../assets/Akhilesh_Microsoft.jpg";
import { scrollToSection } from "../utils/scrollToSection";
import { useTypewriter } from "../utils/useTypewriter";
import { useScrollReveal } from "../utils/useScrollReveal";
import { RESUME_URL, CONTACT } from "../data/constants";
import { socialLinks } from "../data/socialLinks";

const ROLES = ["Frontend Developer", "React Developer", "NestJS Developer", "UI Enthusiast"];

const STATS = [
  { value: "3+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "2", label: "Certifications" },
];

const SYMBOLS = [
  {
    icon: SiReact,
    color: "#61DAFB",
    label: "React.js",
    className: "-left-3 top-4 lg:-left-14 lg:top-1",
    anim: "animate-float-slow",
    delay: "0s",
    desktopOnly: false,
  },
  {
    icon: SiJavascript,
    color: "#F7DF1E",
    label: "JavaScript",
    className: "-top-3 left-1/2 -translate-x-1/2 lg:-top-7",
    anim: "animate-float-slower",
    delay: "0.3s",
    desktopOnly: false,
  },
  {
    icon: SiNestjs,
    color: "#E0234E",
    label: "NestJS",
    className: "right-0 top-1/3 lg:-right-12",
    anim: "animate-float-slower",
    delay: "1.2s",
    desktopOnly: false,
  },
  {
    icon: SiTailwindcss,
    color: "#38BDF8",
    label: "Tailwind CSS",
    className: "-right-3 bottom-10 lg:-right-16 lg:bottom-8",
    anim: "animate-float-slow",
    delay: "0.6s",
    desktopOnly: false,
  },
  {
    icon: SiPostgresql,
    color: "#4169E1",
    label: "PostgreSQL",
    className: "-left-3 top-1/2 lg:-left-16",
    anim: "animate-float-slower",
    delay: "1.5s",
    desktopOnly: false,
  },
  {
    icon: SiNextdotjs,
    color: "#FFFFFF",
    label: "Next.js",
    className: "-left-6 bottom-0 lg:-left-16 lg:bottom-0",
    anim: "animate-float-slower",
    delay: "0.9s",
    desktopOnly: false,
  },
  {
    icon: SiDocker,
    color: "#2496ED",
    label: "Docker",
    className: "-bottom-3 left-1/2 -translate-x-1/2 lg:-bottom-6",
    anim: "animate-float-slow",
    delay: "1.8s",
    desktopOnly: false,
  },
  {
    icon: SiNodedotjs,
    color: "#5FA04E",
    label: "Node.js",
    className: "lg:-top-8 lg:right-12",
    anim: "animate-float-slow",
    delay: "0.4s",
    desktopOnly: true,
  },
  {
    icon: SiExpress,
    color: "#FFFFFF",
    label: "Express.js",
    className: "lg:-left-16 lg:top-20",
    anim: "animate-float-slower",
    delay: "2.1s",
    desktopOnly: true,
  },
  {
    icon: SiRedis,
    color: "#DC382D",
    label: "Redis",
    className: "lg:-right-16 lg:bottom-24",
    anim: "animate-float-slow",
    delay: "1.1s",
    desktopOnly: true,
  },
  {
    icon: SiMongodb,
    color: "#47A248",
    label: "MongoDB",
    className: "lg:-left-12 lg:bottom-28",
    anim: "animate-float-slower",
    delay: "0.7s",
    desktopOnly: true,
  },
];

export default function Home() {
  const typed = useTypewriter(ROLES);
  const textRef = useScrollReveal();
  const visualRef = useScrollReveal();

  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] flex-col justify-center overflow-hidden px-6 pb-10 sm:px-10 md:px-14">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div ref={textRef} className="reveal text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            {CONTACT.availability}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I'm{" "}
            <span className="text-gradient">Akhilesh Singh</span>
          </h1>

          <p className="mt-4 min-h-12 font-display text-xl font-semibold text-purple-200 md:min-h-14 md:text-2xl">
            I'm a <span className="text-white">{typed}</span>
            <span className="ml-1 inline-block w-1 animate-blink bg-pink-500 text-pink-500">|</span>
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400 md:mx-0 md:text-lg">
            I craft responsive, accessible and performant web experiences —
            from pixel-perfect React interfaces to secure NestJS APIs.
            Passionate about clean code, modern UI and delighting users.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 px-8 py-3.5 rounded-full font-bold text-white shadow-[0_8px_30px_rgba(255,45,149,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_36px_rgba(255,45,149,0.55)] focus-visible:ring-4 focus-visible:ring-pink-400 outline-none"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-white/25 px-8 py-3.5 font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 focus-visible:ring-4 focus-visible:ring-yellow-300 outline-none"
            >
              Contact Me
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-gray-200 backdrop-blur transition-all duration-300 hover:border-pink-500/40 hover:text-pink-300 hover:scale-105"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center gap-4 md:justify-start">
            <span className="hidden h-px w-12 bg-linear-to-r from-pink-500 to-transparent sm:block" />
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:text-pink-400 hover:shadow-[0_6px_18px_rgba(255,45,149,0.35)]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div ref={visualRef} className="reveal reveal-delay-2 relative mx-auto flex items-center justify-center">
          <div className="hero-ring relative">
            <img
              src={Profile}
              alt="Akhilesh Singh"
              loading="eager"
              decoding="async"
              className="h-56 w-56 rounded-full border-4 border-white/10 object-cover shadow-2xl sm:h-64 sm:w-64 lg:h-80 lg:w-80"
            />
          </div>

          {SYMBOLS.map(
            ({ icon: Icon, color, label, className, anim, delay, desktopOnly }) => (
              <span
                key={label}
                title={label}
                aria-label={label}
                className={`absolute ${className} ${anim} ${desktopOnly ? "hidden lg:flex" : "flex"} h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:border-white/25 md:h-11 md:w-11`}
                style={{ animationDelay: delay }}
              >
                <Icon style={{ color }} className="text-xl md:text-[22px]" />
              </span>
            )
          )}
        </div>
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-2xl font-bold text-gradient md:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs font-medium text-gray-400 md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
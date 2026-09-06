import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { useScrollReveal } from "../utils/useScrollReveal";
import { projectsData, projectCategories } from "../data/projectsData";

export default function Projects() {
  const [active, setActive] = useState("All");
  const gridRef = useScrollReveal();

  const filtered =
    active === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === active);

  return (
    <section className="px-6 sm:px-10 md:px-14">
      <SectionHeading
        eyebrow="My work"
        title="Featured"
        highlight="Projects"
        subtitle="A selection of things I've designed, built and shipped."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-pink-400 outline-none ${
              active === cat
                ? "bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 text-white shadow-[0_4px_20px_rgba(255,45,149,0.4)]"
                : "border border-white/10 bg-white/[0.03] text-gray-400 hover:border-pink-500/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        ref={gridRef}
        className="reveal mx-auto grid w-full max-w-7xl items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
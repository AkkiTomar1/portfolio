import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg animate-text-glow">
        My <span className="text-indigo-500">Projects</span>
      </h2>
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center z-10">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="w-full max-w-sm transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
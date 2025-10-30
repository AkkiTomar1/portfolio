import ProjectCard from "../components/ProjectCard";
import todo from "../assets/todo.png"; 
import Filmvault from '../assets/filmvault.png';

export default function Projects() {
  const projects = [
    {
      title: "Todo List",
      description:
        "A simple and responsive To-Do List application built with React and Tailwind CSS, featuring Local Storage for data persistence.",
      image: todo,
      tech: ["React", "Tailwindcss","LocaleStorage","Javascript"],
      liveLink: "https://akkitomar1.github.io/todo/",
      githubLink: "https://github.com/AkkiTomar1/todo",
    },
    {
      title: "FilmVault",
      description:
        "FilmVault is a React.js web app using TMDB API and Tailwind CSS that lets users browse trending movies, view details, and manage a Watchlist.",
      image: Filmvault,
      tech: ["React", "Tailwindcss","TMDB Api","Javascript"],
      liveLink: "https://akkitomar1.github.io/Filmvault/",
      githubLink: "https://github.com/AkkiTomar1/Filmvault",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg animate-text-glow">
        My <span className="text-indigo-500">Projects</span>
      </h2>
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center z-10">
        {projects.map((project, i) => (
          <div key={i} className="w-full max-w-sm transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

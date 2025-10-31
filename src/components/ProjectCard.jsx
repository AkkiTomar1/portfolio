import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  tech = [],
  liveLink,
  githubLink,
}) {
  return (
    <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-[0_0_25px_#ff0080] group max-w-sm border border-white/10">  
      
      {/* Project Image with soft glow & overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 p-2 rounded-2xl opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide group-hover:text-pink-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tech.map((item, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-pink-500/20 to-indigo-500/20 text-pink-300 text-xs font-medium px-3 py-1 rounded-full border border-pink-500/30 hover:border-pink-400 transition-all duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-[0_0_20px_#ff0080] hover:scale-105 transition-all duration-300"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-pink-400 text-2xl transition-transform hover:scale-105"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>

      {/* Subtle glowing ring around the card */}
      <div className="absolute inset-0 rounded-2xl border border-pink-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
    </div>
  );
}

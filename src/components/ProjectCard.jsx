import PropTypes from "prop-types";
import { FaCheck, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  placeholderIcon: PlaceholderIcon,
  category,
  features = [],
  tech = [],
  liveLink,
  githubLink,
}) {
  const hasLinks = Boolean(liveLink || githubLink);

  return (
    <div className="glass-strong group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-[0_16px_50px_rgba(255,45,149,0.2)]">
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-[#1a1035] via-[#2b1055] to-[#160b2e]">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
            {PlaceholderIcon && (
              <PlaceholderIcon className="relative mb-4 text-5xl text-pink-400 drop-shadow-[0_0_18px_rgba(255,45,149,0.6)]" />
            )}
            <div className="relative flex w-3/4 flex-col gap-2">
              <div className="h-2 w-3/4 rounded-full bg-white/10" />
              <div className="h-2 w-1/2 rounded-full bg-white/10" />
              <div className="mt-2 h-6 w-full rounded-lg bg-white/5" />
              <div className="h-6 w-2/3 rounded-lg bg-white/5" />
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        {category && (
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            {category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-pink-400">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-1.5">
            {features.slice(0, 2).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-[9px] text-pink-400">
                  <FaCheck />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-purple-200 transition-colors hover:border-pink-500/40"
            >
              {item}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div className="mt-auto flex items-center gap-3 pt-2">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_24px_rgba(255,45,149,0.55)]"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500/50 hover:text-pink-400"
              >
                <FaGithub />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  placeholderIcon: PropTypes.func,
  category: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  tech: PropTypes.arrayOf(PropTypes.string),
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,
};
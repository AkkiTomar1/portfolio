import PropTypes from "prop-types";
import { useScrollReveal } from "../utils/useScrollReveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  compact = false,
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal mx-auto max-w-2xl text-center ${
        compact ? "mb-6" : "mb-14"
      }`}
    >
      <span className="text-sm font-semibold uppercase tracking-widest text-pink-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed text-gray-400 ${
            compact ? "mt-2" : "mt-4"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string,
  highlight: PropTypes.string,
  subtitle: PropTypes.string,
  compact: PropTypes.bool,
};
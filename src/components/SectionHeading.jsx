import PropTypes from "prop-types";
import { useScrollReveal } from "../utils/useScrollReveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
}) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="reveal mx-auto mb-14 max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-pink-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string,
  highlight: PropTypes.string,
  subtitle: PropTypes.string,
};
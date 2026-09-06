import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

export default function ServiceCard({ icon: Icon, title, description, features = [] }) {
  return (
    <div className="glass-strong group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-[0_16px_50px_rgba(255,45,149,0.18)]">
      <div className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-pink-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-pink-600 via-purple-600 to-indigo-600 text-3xl text-white shadow-[0_8px_24px_rgba(168,85,247,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon />
      </span>

      <h3 className="relative font-display text-xl font-bold text-white">{title}</h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-gray-400">{description}</p>

      <ul className="relative mt-5 space-y-2.5 border-t border-white/10 pt-5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-indigo-500 text-[9px] text-white">
              <FaCheck />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

ServiceCard.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
};
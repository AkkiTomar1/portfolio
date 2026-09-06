import { socialLinks } from "../data/socialLinks";
import { CONTACT, NAV_ITEMS } from "../data/constants";
import { scrollToSection } from "../utils/scrollToSection";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-ink/60 text-gray-300 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-3 md:px-14">
        <div>
          <h3 className="font-display text-xl font-bold text-white">
            Akhilesh<span className="text-gradient">.</span> Singh
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
            Frontend Developer crafting responsive, modern and accessible web
            experiences with React, NestJS and Tailwind CSS.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="text-sm text-gray-400 transition-colors hover:text-pink-400"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Get In Touch
          </h4>
          <p className="text-sm">
            <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-pink-400">
              {CONTACT.email}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-pink-400"
            >
              {CONTACT.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-500">{CONTACT.location}</p>

          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500/50 hover:text-pink-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-pink-400">Akhilesh Singh Tomar</span> — Built
          with <span className="text-indigo-400">React</span> &{" "}
          <span className="text-pink-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
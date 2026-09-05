import { socialLinks } from "../data/socialLinks";
import { CONTACT } from "../data/constants";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-brand-midnight via-brand-ink to-brand-ocean text-gray-300 py-10 px-6 mt-10 border-t border-pink-500/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="text-center md:text-left space-y-2">
          <h3 className="text-xl font-bold text-pink-400 tracking-wide">Let's Connect</h3>
          <p>Email: <a href={`mailto:${CONTACT.email}`} className="hover:text-pink-400 transition">{CONTACT.email}</a></p>
          <p>
            Phone:{" "}
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-pink-400 transition">
              {CONTACT.phone}
            </a>
          </p>
        </div>

        <div className="flex space-x-5 text-2xl">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-pink-500/50 to-transparent my-8" />

      <div className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">Akhilesh Tomar</span> — Built with ❤️ using{" "}
        <span className="text-indigo-400">React</span> & <span className="text-pink-400">Tailwind CSS</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-full shadow-[0_0_15px_#ff00ff]" />
    </footer>
  );
}
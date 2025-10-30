import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f3460] text-gray-300 py-10 px-6 mt-10 border-t border-pink-500/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-xl font-bold text-pink-400 tracking-wide">Let’s Connect</h3>
          <p>Email: <a href="mailto:astomar9628@gmail.com" className="hover:text-pink-400 transition">astomar9628@gmail.com</a></p>
          <p>Phone: <span className="hover:text-pink-400 transition">+91 9628547643</span></p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-5 text-2xl">
          <a
            href="https://www.facebook.com/akhileshsingh.tomar.794/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/akkitomar_1"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/ASTOMAR98"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/akhileshsingh05"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AkkiTomar1"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-pink-500/50 to-transparent my-8" />

      {/* Footer Bottom Text */}
      <div className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">Akhilesh Tomar</span> — Built with ❤️ using{" "}
        <span className="text-indigo-400">React</span> & <span className="text-pink-400">Tailwind CSS</span>
      </div>

      {/* Glow effect border */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-full shadow-[0_0_15px_#ff00ff]" />
    </footer>
  );
}

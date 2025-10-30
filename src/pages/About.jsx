import Profile from '../assets/Akhilesh_Microsoft.jpg';

const About = () => (
  <section className="min-h-screen py-24 px-6 relative overflow-hidden">
    {/* Decorative Blobs if needed */}
    <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center backdrop-blur-sm z-10">
      <div className="flex flex-col items-center">
        <img
          src={Profile}
          alt="Profile"
          className="w-72 h-72 rounded-full mx-auto shadow-2xl border-8 border-white object-cover hover:scale-105 transition-transform duration-200"
        />
        <span className="block mt-4 text-lg font-semibold text-gray-800 tracking-wide bg-yellow-100 px-4 py-1 rounded-full shadow">
          Akhilesh Singh
        </span>
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-pink-500 mb-6 drop-shadow-lg">
          About Me
        </h2>
        <p className="text-gray-300 text-lg mb-5 font-medium leading-relaxed">
          I’m a <span className="font-bold text-purple-600">Frontend Developer</span> who loves turning creative ideas into interactive digital experiences. I specialize in <span className="font-bold text-pink-500">React</span> and <span className="font-bold text-indigo-500">Tailwind CSS</span>.
        </p>
        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
          With a strong focus on <span className="font-semibold text-yellow-600">clean code</span> and <span className="font-semibold text-pink-600">modern UI principles</span>, I enjoy crafting responsive, accessible, and efficient web apps that delight users.
        </p>
      </div>
    </div>
  </section>
);

export default About;

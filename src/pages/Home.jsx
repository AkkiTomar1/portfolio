const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-white text-center px-4 relative overflow-hidden">
      {/* Decorative Blobs if needed */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
        Hi, I'm <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-pink-500 mb-6 drop-shadow-lg">Akhilesh Singh</span>
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-medium drop-shadow text-white/90">
        As a passionate <span className="font-bold text-purple-300">Frontend Developer</span>, I craft web experiences that blend <span className="text-pink-200">design</span>, <span className="text-indigo-200">code</span>, and <span className="text-yellow-200">creativity</span> into seamless, engaging interfaces.
      </p>
      <div className="space-x-4 mt-4">
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-linear-to-r from-purple-700 to-pink-500 text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition hover:scale-105 outline-none focus:ring-4 focus:ring-pink-400"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="border border-white/70 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-gray-900 hover:scale-105 transition outline-none focus:ring-4 focus:ring-yellow-300"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Home;

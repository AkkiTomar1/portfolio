import ServiceCard from "../components/ServiceCard";
import { FaReact, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: FaReact,
    title: "Frontend Development",
    description:
      "Building responsive and modern web applications using React.",
  },
  {
    icon: FaLaptopCode,
    title: "Web Development",
    description:
      "Creating clean and scalable web solutions using modern technologies.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "Designing visually appealing and user-friendly interfaces.",
  },
];

const Services = () => (
  <section
    id="services"
    className="py-20 px-6 bg-linear-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f3460] text-white"
  >
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 mb-12 drop-shadow-lg animate-text-glow">
        My Services
      </h3>

      {/* Cards Centered */}
      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[28%] transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

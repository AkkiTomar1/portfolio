import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-brand-midnight via-brand-ink to-brand-ocean text-white">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 mb-12 drop-shadow-lg animate-text-glow">
          My Services
        </h3>

        <div className="flex flex-wrap justify-center gap-10">
          {servicesData.map((service) => (
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
}
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <section className="px-8 sm:px-12 md:px-16">
      <SectionHeading
        eyebrow="What I do"
        title="My"
        highlight="Services"
        subtitle="From frontend to backend, I help build complete, production-ready web products."
      />

      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
}
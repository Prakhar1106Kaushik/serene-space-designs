
import { Home, Building2, Paintbrush2, Lightbulb } from "lucide-react";

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: "Residential Design",
    description: "Creating beautiful, functional living spaces tailored to your lifestyle.",
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Commercial Spaces",
    description: "Designing inspiring workplaces that boost productivity and creativity.",
  },
  {
    icon: <Paintbrush2 className="h-8 w-8" />,
    title: "Interior Styling",
    description: "Curating the perfect blend of furnishings, art, and accessories.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Consultation",
    description: "Expert advice to guide your design decisions and space planning.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-luxe-gold uppercase tracking-widest text-sm mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl font-light text-luxe-text">
            What We Offer
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 text-center group hover:bg-luxe-cream transition-colors duration-300 rounded-lg"
            >
              <div className="mb-6 text-luxe-gold group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-luxe-text mb-4">
                {service.title}
              </h3>
              <p className="text-luxe-textLight">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

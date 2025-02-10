
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Home, Building2, Paintbrush2, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Home className="h-12 w-12" />,
    title: "Residential Design",
    description: "Creating beautiful, functional living spaces tailored to your lifestyle. We transform houses into homes that reflect your personality and meet your needs.",
    features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"]
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    title: "Commercial Spaces",
    description: "Designing inspiring workplaces that boost productivity and creativity. We create professional environments that leave lasting impressions.",
    features: ["Office Layout", "Brand Integration", "Ergonomic Solutions", "Acoustic Planning"]
  },
  {
    icon: <Paintbrush2 className="h-12 w-12" />,
    title: "Interior Styling",
    description: "Curating the perfect blend of furnishings, art, and accessories. We bring your space to life with carefully selected pieces.",
    features: ["Art Curation", "Accessory Styling", "Seasonal Updates", "Custom Pieces"]
  },
  {
    icon: <Lightbulb className="h-12 w-12" />,
    title: "Consultation",
    description: "Expert advice to guide your design decisions and space planning. We help you make informed choices for your space.",
    features: ["Design Strategy", "Budget Planning", "Material Selection", "Project Timeline"]
  },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-white pt-16">
      <section className="py-20 bg-luxe-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light text-luxe-text text-center mb-16">
            Our Services
          </h1>
          
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="p-6 h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <div className="text-luxe-gold mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-medium text-luxe-text mb-3">{service.title}</h3>
                    <p className="text-luxe-textLight mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-luxe-text">
                          <ArrowRight className="h-4 w-4 text-luxe-gold mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 w-full bg-luxe-gold hover:bg-luxe-gold/90 text-white">
                      Learn More
                    </Button>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;


import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    title: "Modern Minimalist Villa",
    category: "Residential",
    description: "A contemporary villa design that embraces minimalism while maintaining warmth and functionality.",
    features: ["Open Floor Plan", "Natural Light", "Custom Furniture", "Smart Home Integration"]
  },
  {
    image: "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6",
    title: "Luxurious Penthouse",
    category: "Residential",
    description: "A sophisticated penthouse that combines luxury with comfort, featuring panoramic city views.",
    features: ["Panoramic Views", "High-End Finishes", "Entertainment Space", "Private Terrace"]
  },
  {
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    title: "Contemporary Office",
    category: "Commercial",
    description: "A modern office space designed to promote collaboration and productivity.",
    features: ["Collaborative Spaces", "Ergonomic Design", "Breakout Areas", "Biophilic Elements"]
  },
  {
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
    title: "Boutique Restaurant",
    category: "Commercial",
    description: "An intimate dining space that creates a unique atmosphere for memorable experiences.",
    features: ["Custom Lighting", "Acoustic Design", "Unique Seating", "Bar Area"]
  },
];

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white pt-16">
      <section className="py-20 bg-luxe-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light text-luxe-text text-center mb-16">
            Our Portfolio
          </h1>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div 
                    className="group relative cursor-pointer overflow-hidden rounded-lg m-2"
                    onClick={() => setSelectedProject(index)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Badge className="mb-3 bg-luxe-gold/80">{project.category}</Badge>
                        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/20">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {selectedProject !== null && (
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-medium text-luxe-text">
                    {projects[selectedProject].title}
                  </h3>
                  <Badge className="bg-luxe-gold">{projects[selectedProject].category}</Badge>
                </div>
                <p className="text-luxe-textLight mb-6">
                  {projects[selectedProject].description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {projects[selectedProject].features.map((feature, i) => (
                    <div key={i} className="flex items-center text-luxe-text">
                      <ArrowRight className="h-4 w-4 text-luxe-gold mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </main>
  );
};

export default PortfolioPage;


import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    title: "Modern Minimalist Villa",
    category: "Residential",
  },
  {
    image: "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6",
    title: "Luxurious Penthouse",
    category: "Residential",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    title: "Contemporary Office",
    category: "Commercial",
  },
  {
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
    title: "Boutique Restaurant",
    category: "Commercial",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-24 bg-luxe-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-luxe-gold uppercase tracking-widest text-sm mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl font-light text-luxe-text">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
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
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-white/80">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <Dialog
          open={selectedProject !== null}
          onOpenChange={() => setSelectedProject(null)}
        >
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-medium text-luxe-text mb-2">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-luxe-textLight">
                  {projects[selectedProject].category}
                </p>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </section>
  );
};

export default Portfolio;

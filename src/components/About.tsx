
const About = () => {
  return (
    <section id="about" className="py-24 bg-luxe-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <span className="text-luxe-gold uppercase tracking-widest text-sm block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-luxe-text">
              Crafting Beautiful Spaces
            </h2>
            <p className="text-luxe-textLight text-lg leading-relaxed">
              At LuxInteriors, we believe that every space tells a story. Our passion lies in creating
              harmonious environments that reflect your unique style and personality.
            </p>
            <p className="text-luxe-textLight text-lg leading-relaxed">
              With meticulous attention to detail and a deep understanding of design principles, we transform
              ordinary spaces into extraordinary experiences. Our team of expert designers brings together
              innovation, functionality, and aesthetics to create spaces that inspire.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-light text-luxe-text mb-2">10+</div>
                <div className="text-luxe-textLight">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-luxe-text mb-2">200+</div>
                <div className="text-luxe-textLight">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-luxe-text mb-2">50+</div>
                <div className="text-luxe-textLight">Design Awards</div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
              alt="Luxury Interior Design"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-[1]" />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-down">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
          Transform Your Space Into
          <span className="block mt-2">A Work of Art</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Creating timeless sanctuaries that inspire and elevate your everyday living experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white group"
          >
            Explore Our Designs
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="bg-luxe-gold/90 border-luxe-gold text-white hover:bg-luxe-gold hover:text-white"
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

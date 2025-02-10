
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxe-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-light mb-4">LuxInteriors</h3>
            <p className="text-white/70">
              Transforming spaces into timeless sanctuaries.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <p className="text-white/70">contact@luxinteriors.com</p>
            <p className="text-white/70">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Address</h4>
            <p className="text-white/70">
              123 Design Street
              <br />
              New York, NY 10001
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} LuxInteriors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

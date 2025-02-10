
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-luxe-text" : "text-luxe-textLight";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-luxe-text font-light text-xl">
            LuxInteriors
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} hover:text-luxe-text transition-colors`}>
              Home
            </Link>
            <Link to="/services" className={`${isActive('/services')} hover:text-luxe-text transition-colors`}>
              Services
            </Link>
            <Link to="/portfolio" className={`${isActive('/portfolio')} hover:text-luxe-text transition-colors`}>
              Portfolio
            </Link>
            <a href="#contact" className="text-luxe-textLight hover:text-luxe-text transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

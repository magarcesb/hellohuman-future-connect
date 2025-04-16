
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "../ui/LogoMark";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <LogoMark />
          <span className="text-xl font-heading font-medium">HelloHuman</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#mission" className="text-gray-800 hover:text-brand-blue transition-colors">
            Misión
          </a>
          <a href="#what-we-do" className="text-gray-800 hover:text-brand-blue transition-colors">
            Qué hacemos
          </a>
          <a href="#values" className="text-gray-800 hover:text-brand-blue transition-colors">
            Valores
          </a>
          <a
            href="#join"
            className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Conversemos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <a
              href="#mission"
              className="py-2 text-gray-800 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Misión
            </a>
            <a
              href="#what-we-do"
              className="py-2 text-gray-800 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Qué hacemos
            </a>
            <a
              href="#values"
              className="py-2 text-gray-800 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Valores
            </a>
            <a
              href="#join"
              className="w-full py-2.5 bg-black text-white rounded-full text-center hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Conversemos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

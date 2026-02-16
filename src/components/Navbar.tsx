import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-3">
            <div className="h-14 bg-[#bdded3] flex items-center justify-center p-2 rounded-lg relative">
              <img 
                src="https://i.ibb.co/Mkjw2MSr/imagem-2025-04-30-101104882.png" 
                alt="Logo Alessandra Reinato" 
                className="h-10 w-auto object-contain relative z-10"
              />
            </div>
            <div className={`font-playfair text-sm sm:text-base lg:text-lg ${isScrolled ? 'text-primary-dark' : 'text-primary-dark'}`}>
              Alessandra Reinato • Psicanalista
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className={`text-xs lg:text-sm uppercase tracking-wider hover:text-primary-dark transition-colors ${
                  isScrolled ? 'text-neutral-text' : 'text-primary-dark'
                }`}
              >
                {link.text}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/ale_reinato_terapeuta/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs lg:text-sm text-primary-dark hover:text-primary-dark/80 transition-colors whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 mr-1" />
              Instagram
            </a>
            <a 
              href="https://wa.link/0gvivw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark text-white px-4 py-2 rounded-full text-xs lg:text-sm hover:bg-primary-dark/90 transition-colors whitespace-nowrap"
            >
              Agende agora
            </a>
          </nav>
          
          <button 
            className="md:hidden text-primary-dark" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 w-full">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="text-neutral-text hover:text-primary-dark transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <a 
              href="https://wa.link/0gvivw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark text-white py-2 rounded-lg text-sm hover:bg-primary-dark/90 transition-colors mt-2"
            >
              Agende agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const navLinks = [
  { text: 'Home', url: '#' },
  { text: 'Sobre', url: '#about' }
];

export default Navbar;
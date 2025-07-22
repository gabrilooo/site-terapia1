import React from 'react';
import { CalendarCheck, Instagram } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col max-w-2xl">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary-dark mb-6 leading-tight">
              Psicanalista clínica especializada em atendimento de mulheres
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-text mb-10 font-montserrat">
              Ajudo você a se reconectar com sua força e ter uma vida mais leve
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.link/0gvivw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-dark hover:bg-primary-dark/90 text-white px-8 py-3 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md font-montserrat"
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Agende sua consulta
              </a>
              <a 
                href="https://www.instagram.com/ale_reinato_terapeuta/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-primary-light hover:border-primary-dark text-primary-dark px-8 py-3 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-sm font-montserrat"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0">
            <img 
              src="https://id-preview--5079229e-3e7b-49b1-bfb7-ad926935a9ab.lovable.app/lovable-uploads/51384146-26a1-46f2-ac26-ec9cad5be4b2.png"
              alt="Psicanalista"
              className="w-full max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
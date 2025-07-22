import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary-light/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-light/30 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-dark/20 rounded-full"></div>
            
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent"></div>
                <img 
                  src="https://i.ibb.co/v6vFzX1v/imagem-2025-04-29-161246742.png" 
                  alt="Alessandra Reinato" 
                  className="w-full h-auto max-w-lg mx-auto object-cover object-center"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-playfair text-3xl text-primary-dark mb-6">
              Sobre a Alessandra
            </h2>
            
            <p className="text-neutral-text mb-8 leading-relaxed font-montserrat">
              Psicanalista clínica com mais de 20 anos de experiência na saúde, Alessandra é também acupunturista e mestra em Gestão e Política Pública (UNICAMP). Membro da Associação Nacional de Terapia e Psicanálise, oferece atendimentos online com foco em cuidado humanizado e fortalecimento da autonomia emocional.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-text font-montserrat">{benefit}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="https://wa.link/0gvivw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark hover:bg-primary-dark/90 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md font-montserrat inline-block"
            >
              Conheça minha abordagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  "Sessões individuais online",
  "Especialização em ansiedade, autoestima e relacionamentos",
  "Método psicanalítico com escuta ativa",
  "Espaço seguro e confidencial para sua jornada"
];

export default AboutSection;
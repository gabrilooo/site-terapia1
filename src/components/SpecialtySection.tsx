import React from 'react';
import { Brain, Users, Mic } from 'lucide-react';

const SpecialtySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-light shadow-lg mb-6 relative transform transition-transform duration-500 group-hover:scale-105">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
          <Icon className="w-12 h-12 text-white opacity-75 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <h3 className="text-lg font-playfair text-primary-dark mb-3">
        {title}
      </h3>
      <p className="text-neutral-text font-montserrat">
        {description}
      </p>
    </div>
  );
};

const services = [
  {
    title: "ATENDIMENTO CLÍNICO",
    description: "Atendimento individualizado para autoconhecimento e cura emocional",
    image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
    icon: Users
  },
  {
    title: "ABORDAGEM PSICANALÍTICA",
    description: "Exploração do inconsciente para transformar padrões",
    image: "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg",
    icon: Brain
  },
  {
    title: "PALESTRANTE",
    description: "Palestras sobre saúde mental feminina e autocuidado",
    image: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
    icon: Mic
  }
];

export default SpecialtySection;
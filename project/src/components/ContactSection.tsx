import React from 'react';
import { Phone, Clock, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-light text-[#194f3a] mb-6">Entre em contato</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Estou disponível para ajudar você a iniciar sua jornada de autoconhecimento 
              e transformação. Entre em contato para marcar uma consulta ou esclarecer suas dúvidas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#bdded3]/30 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#194f3a]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#194f3a] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    details: "+55 (19) 99553-0666"
  },
  {
    icon: Clock,
    title: "Horário de atendimento",
    details: "Segunda a Sexta: 8h às 19h"
  },
  {
    icon: Mail,
    title: "Email",
    details: "psiale.reinato@gmail.com"
  }
];

export default ContactSection;
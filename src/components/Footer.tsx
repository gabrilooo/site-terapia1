import React from 'react';
import { Instagram, Linkedin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-2xl mb-6">Alessandra Reinato</h3>
            <p className="text-primary-light/80 mb-6 leading-relaxed font-montserrat">
              <br />
              Psicanalista clínica especializada em atendimento a mulheres
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ale_reinato_terapeuta/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-primary-light/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-primary-light/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-light" />
                <span className="font-montserrat">+55 (19) 99553-0666</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-light" />
                <span className="font-montserrat">psiale.reinato@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl mb-6">Horário de Atendimento</h3>
            <p className="text-primary-light/80 mb-3 font-montserrat">
              Segunda a Sexta: 8h às 19h
            </p>
            <p className="text-primary-light/80 mb-6 font-montserrat">
              Atendimento 100% online
            </p>
            <a 
              href="https://wa.link/0gvivw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-light hover:bg-white text-primary-dark px-6 py-3 rounded-lg transition-colors font-montserrat inline-block"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-light/20 pt-8 text-center text-primary-light/60">
          <p className="font-montserrat">
            © {new Date().getFullYear()} Alessandra Reinato • Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-primary-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-primary-dark text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-primary-dark pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-dark flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-dark flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'pb-6 max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="text-neutral-text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "Qual a duração das sessões?",
    answer: "As sessões têm duração de 1 hora, realizadas de forma online para seu conforto e praticidade."
  },
  {
    question: "Como são realizadas as sessões?",
    answer: "As sessões são 100% online, através de videochamada, permitindo que você faça sua terapia de qualquer lugar com privacidade e segurança."
  },
  {
    question: "Qual a frequência recomendada das sessões?",
    answer: "Recomenda-se uma sessão por semana para melhores resultados, mas a frequência pode ser ajustada de acordo com suas necessidades e disponibilidade."
  },
  {
    question: "Como faço para agendar uma sessão?",
    answer: "Você pode agendar sua sessão através do WhatsApp ou e-mail. Basta clicar em um dos botões de agendamento do site para iniciar o contato."
  },
  {
    question: "Preciso de algum equipamento específico para as sessões online?",
    answer: "Você precisará apenas de um dispositivo com câmera (computador, tablet ou celular) e uma conexão estável com a internet em um ambiente privado e silencioso."
  },
  {
    question: "Qual o horário de atendimento?",
    answer: "Os atendimentos são realizados de segunda a sexta, nos horários que você se sentir mais confortável."
  }
];

export default FAQSection;
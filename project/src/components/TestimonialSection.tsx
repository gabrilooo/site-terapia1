import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-playfair text-3xl text-primary-dark mb-4">
            Relatos de transformação
          </h2>
          <p className="text-neutral-text font-montserrat">
            Histórias reais de mulheres que encontraram seu caminho através da psicanálise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
      <Quote className="w-10 h-10 text-primary-light mb-4" />
      <p className="text-neutral-text italic mb-6 font-montserrat">{quote}</p>
      <div className="text-primary-dark font-medium font-montserrat">{author}</div>
    </div>
  );
};

const testimonials = [
  {
    quote: "A terapia me ajudou a reconhecer minha força interior e transformar padrões limitantes.",
    author: "Maria S."
  },
  {
    quote: "Com a Alessandra, encontrei um espaço seguro para me reconectar comigo mesma.",
    author: "Juliana P."
  },
  {
    quote: "O processo terapêutico mudou minha perspectiva sobre relacionamentos e autoestima.",
    author: "Carolina M."
  }
];

export default TestimonialSection;
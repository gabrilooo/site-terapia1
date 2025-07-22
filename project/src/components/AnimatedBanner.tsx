import React from 'react';

const AnimatedBanner: React.FC = () => {
  return (
    <section className="py-16 bg-[#194f3a] text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#bdded3]/10"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
            Inicie sua jornada de <span className="italic">autoconhecimento</span> e <span className="italic">transformação</span> hoje
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {phrases.map((phrase, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-white/10 rounded-full text-sm md:text-base animate-float"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${3 + index * 0.5}s`
                }}
              >
                {phrase}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const phrases = [
  "Autoconhecimento",
  "Crescimento pessoal",
  "Saúde mental",
  "Equilíbrio emocional",
  "Bem-estar",
  "Transformação"
];

export default AnimatedBanner;
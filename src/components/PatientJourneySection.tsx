import React from 'react';
import { motion } from 'framer-motion';

export const PatientJourneySection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'AVALIAÇÃO',
      subtitle: 'Escuta Ativa & Diagnóstico',
      description: 'Conversa detalhada sobre suas expectativas, exame clínico cuidadoso e registro fotográfico de alta resolução.'
    },
    {
      number: '02',
      title: 'PLANEJAMENTO',
      subtitle: 'Design Digital do Sorriso',
      description: 'Escaneamento 3D e criação de mockup (simulação real), permitindo visualizar seu resultado antes de iniciar qualquer intervenção.'
    },
    {
      number: '03',
      title: 'TRATAMENTO',
      subtitle: 'Execução de Alta Precisão',
      description: 'Sessões conduzidas com máximo conforto, pontualidade e aplicação de materiais cerâmicos ou cirúrgicos de alto nível.'
    },
    {
      number: '04',
      title: 'ACOMPANHAMENTO',
      subtitle: 'Manutenção & Longevidade',
      description: 'Polimento periódico, orientações preventivas e suporte dedicado para preservar seu sorriso radiante por muitos anos.'
    }
  ];

  return (
    <section id="jornada" className="py-16 sm:py-24 lg:py-36 bg-cream border-t border-espresso/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="font-montserrat text-xs uppercase tracking-editorial text-primary font-bold mb-2 sm:mb-3 block">
            Jornada do Paciente
          </span>

          <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-espresso leading-tight">
            Do primeiro contato ao seu{' '}
            <span className="font-playfair italic text-primary">novo sorriso.</span>
          </h2>
        </div>

        {/* Vertical Timeline on Mobile / 4-Col Cards on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-primary/20 -translate-y-12 -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 bg-white p-6 sm:p-8 rounded-2xl border border-espresso/10 shadow-sm border-l-4 border-l-primary md:border-l-espresso/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream border border-espresso/10 flex items-center justify-center font-playfair text-base sm:text-lg font-bold text-primary shadow-inner shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-montserrat text-xs uppercase tracking-editorial font-bold text-espresso">
                      {step.title}
                    </h3>
                    <span className="font-playfair italic text-xs text-primary font-normal block">
                      {step.subtitle}
                    </span>
                  </div>
                </div>

                <p className="font-montserrat text-xs sm:text-sm text-espresso/85 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="font-montserrat mt-6 pt-3 border-t border-espresso/10 text-[10px] uppercase tracking-widest text-espresso/60 font-semibold">
                Etapa 0{idx + 1} de 04
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

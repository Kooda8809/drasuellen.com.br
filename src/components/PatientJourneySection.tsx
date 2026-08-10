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
    <section id="jornada" className="py-24 lg:py-36 bg-cream border-t border-espresso/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-editorial text-primary font-bold mb-3 block"
          >
            Jornada do Paciente
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso leading-tight"
          >
            Do primeiro contato ao seu{' '}
            <span className="italic font-normal text-primary">novo sorriso.</span>
          </motion.h2>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-primary/20 -translate-y-12 -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative z-10 bg-white p-8 rounded-2xl border border-espresso/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-cream border border-espresso/10 flex items-center justify-center font-serif text-lg font-bold text-primary mb-6 shadow-inner">
                  {step.number}
                </div>

                <h3 className="font-sans text-xs uppercase tracking-editorial font-bold text-espresso mb-1">
                  {step.title}
                </h3>
                <span className="font-serif italic text-xs text-primary font-normal block mb-4">
                  {step.subtitle}
                </span>

                <p className="text-xs text-espresso/85 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-espresso/10 text-[10px] uppercase tracking-widest text-espresso/60 font-semibold">
                Etapa 0{idx + 1} de 04
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

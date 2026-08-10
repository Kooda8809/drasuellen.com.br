import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Cpu, HeartHandshake } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      number: '01',
      title: 'PLANEJAMENTO INDIVIDUALIZADO',
      icon: Compass,
      description: 'Cada caso é minuciosamente analisado respeitando proporções faciais, simetria e os objetivos pessoais de cada paciente.'
    },
    {
      number: '02',
      title: 'NATURALIDADE',
      icon: Sparkles,
      description: 'A estética deve realçar e valorizar o sorriso sem artificialidade ou apagar a identidade única de quem o possui.'
    },
    {
      number: '03',
      title: 'TECNOLOGIA E PRECISÃO',
      icon: Cpu,
      description: 'Scanner intraoral 3D, mockups digitais e recursos modernos para diagnóstico seguro e acompanhamento previsível.'
    },
    {
      number: '04',
      title: 'EXPERIÊNCIA PERSONALIZADA',
      icon: HeartHandshake,
      description: 'Ambiente calmo, escuta atenta, pontualidade e um acompanhamento humano e acolhedor em todas as fases.'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 lg:py-36 bg-cream border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-editorial text-primary font-bold mb-3 block"
          >
            Nossos Pilares
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso leading-tight"
          >
            Precisão nos{' '}
            <span className="italic font-normal text-primary">detalhes.</span>
            <br />
            Cuidado em cada etapa.
          </motion.h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-espresso/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-2xl font-normal text-primary">
                      {diff.number}
                    </span>
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans text-xs uppercase tracking-editorial font-bold text-espresso mb-3 leading-snug">
                    {diff.title}
                  </h3>

                  <p className="text-xs text-espresso/85 font-light leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="w-8 h-[2px] bg-primary/30 mt-8 group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

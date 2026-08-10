import React from 'react';
import { motion } from 'framer-motion';

export const PositioningSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4 block">
            Posicionamento & Filosofia
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso leading-[1.25] mb-8">
            Seu sorriso não é igual a nenhum outro.{' '}
            <span className="italic font-normal text-primary block sm:inline mt-2 sm:mt-0">
              Seu tratamento também não deveria ser.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-primary/40 mx-auto mb-8" />

          <p className="font-sans text-base sm:text-lg text-espresso/85 font-light leading-relaxed max-w-2xl mx-auto">
            Cada sorriso possui uma história, uma necessidade e uma expectativa diferente. Por isso, cada planejamento é pensado de forma individual, respeitando suas características faciais, seus objetivos pessoais e a naturalidade estética que você deseja alcançar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

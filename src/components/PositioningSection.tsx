import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const PositioningSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-cream border-t border-espresso/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column - New AVIF Portrait (dra2.avif) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-cream-dark border-4 border-white">
                <picture>
                  <source srcSet="/images/dra2.avif" type="image/avif" />
                  <img
                    src="/images/dra2.avif"
                    alt="Dra. Suellen Campos — Filosofia de Atendimento"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </picture>
              </div>

              {/* Decorative Stamp Seal Accent */}
              <div className="absolute -bottom-4 -left-4 sm:left-4 bg-[#3E2312] text-white p-4 rounded-2xl shadow-xl border border-white/20 max-w-xs">
                <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-[#FCE794] mb-1 font-montserrat">
                  <Sparkles className="w-3.5 h-3.5 text-[#FCE794]" />
                  <span>Filosofia Exclusiva</span>
                </div>
                <p className="font-playfair italic text-xs text-white/90">
                  Respeito absoluto à sua anatomia e história bucal.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Philosophy Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3 sm:mb-4 block">
              Posicionamento & Filosofia
            </span>

            <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-espresso leading-[1.25] mb-6">
              Seu sorriso não é igual a nenhum outro.{' '}
              <span className="font-playfair italic text-primary block sm:inline mt-2 sm:mt-0">
                Seu tratamento também não deveria ser.
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-primary/40 mb-6" />

            <p className="font-montserrat text-base sm:text-lg text-espresso/85 font-light leading-relaxed mb-6">
              Cada sorriso possui uma história, uma necessidade e uma expectativa diferente. Por isso, cada planejamento é pensado de forma individual, respeitando suas características faciais, seus objetivos pessoais e a naturalidade estética que você deseja alcançar.
            </p>

            <p className="font-montserrat text-sm sm:text-base text-espresso/80 font-light leading-relaxed">
              Com atendimento em Manaus/AM, a Dra. Suellen Campos utiliza tecnologia digital 3D de alta definição para que você possa visualizar todas as fases da sua transformação com total segurança e previsibilidade.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

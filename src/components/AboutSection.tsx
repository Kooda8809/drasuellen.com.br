import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-36 bg-cream border-t border-espresso/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column - Photography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-cream-dark border-4 border-white">
                <picture>
                  <source srcSet="/images/about.avif" type="image/avif" />
                  <img
                    src="/images/about.avif"
                    alt="Dra. Suellen Campos em seu consultório"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>

              {/* Overlaid Quote Pill */}
              <div className="absolute -bottom-5 right-2 sm:right-6 max-w-xs p-4 sm:p-5 bg-white shadow-xl rounded-2xl border border-espresso/10 text-espresso">
                <p className="font-serif italic text-xs sm:text-sm text-primary font-medium mb-1">
                  "O detalhe é a ponte entre o comum e o inesquecível."
                </p>
                <span className="text-[10px] uppercase tracking-wider text-espresso/70 font-semibold block">
                  Dra. Suellen Campos
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text & Authority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start text-espresso pt-4 sm:pt-0"
          >
            <span className="text-xs uppercase tracking-editorial text-primary font-bold mb-2 sm:mb-3">
              Sobre a Dra. Suellen Campos
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] mb-4 sm:mb-6">
              Por trás de cada sorriso, existe uma{' '}
              <span className="italic font-normal text-primary">história.</span>
            </h2>

            <p className="font-sans text-base text-espresso/90 font-light leading-relaxed mb-4 sm:mb-6 text-left">
              Especialista em Odontologia Estética e Reabilitação Oral em Manaus/AM, a Dra. Suellen Campos combina rigor científico, tecnologia de escaneamento digital e sensibilidade artística para desenhar sorrisos elegantes e naturalmente integrados à face.
            </p>

            <p className="font-sans text-base text-espresso/85 font-light leading-relaxed mb-6 sm:mb-8 text-left">
              Sua filosofia de trabalho baseia-se na escuta ativa e no respeito absoluto à anatomia original de cada paciente. Longe das soluções padronizadas, cada intervenção é milimetricamente planejada para entregar previsibilidade, conforto e durabilidade.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 w-full">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-espresso/10 shadow-sm flex items-start space-x-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-espresso font-medium mb-1">
                    Excelência Técnica
                  </h4>
                  <p className="text-xs text-espresso/80 leading-normal font-light">
                    Formação contínua nas técnicas estéticas e reabilitadoras mais avançadas.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-espresso/10 shadow-sm flex items-start space-x-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-espresso font-medium mb-1">
                    Planejamento Digital 3D
                  </h4>
                  <p className="text-xs text-espresso/80 leading-normal font-light">
                    Simulações e mockups que permitem visualizar seu resultado antes de iniciar.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold text-xs uppercase tracking-editorial rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
            >
              AGENDAR AVALIAÇÃO COM A DRA. SUELLEN
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

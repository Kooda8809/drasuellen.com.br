import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, MapPin } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenModal }) => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '559294235393';

  return (
    <section className="py-16 sm:py-24 lg:py-36 bg-[#9C5E33] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FCE794]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#FCE794] font-bold mb-3 block">
              Agendamento Exclusivo em Manaus
            </span>

            <h2 className="font-playfair text-2xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] text-white mb-4 sm:mb-6">
              Seu próximo sorriso pode começar com uma{' '}
              <span className="font-playfair italic text-[#FCE794]">conversa.</span>
            </h2>

            <p className="font-montserrat text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed mb-8 max-w-xl">
              Agende sua primeira avaliação personalizada e descubra todas as possibilidades estéticas e funcionais desenhadas sob medida para você.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 w-full sm:w-auto mb-8 font-montserrat">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-4 bg-[#FCE794] hover:bg-[#FAD966] text-[#3E2312] font-bold text-xs uppercase tracking-editorial rounded-full shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#3E2312]" />
                <span>QUERO AGENDAR MINHA AVALIAÇÃO</span>
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá, Dra. Suellen! Gostaria de falar com a sua equipe.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-4 bg-transparent hover:bg-white/10 border border-white/40 text-white font-semibold text-xs uppercase tracking-editorial rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-[#FCE794]" />
                <span>FALAR COM A EQUIPE</span>
              </a>
            </div>

            <div className="font-montserrat flex items-center space-x-2.5 text-xs text-white/80 font-light">
              <MapPin className="w-4 h-4 text-[#FCE794]" />
              <span>Manaus • Amazonas — Atendimento com horário marcado</span>
            </div>
          </motion.div>

          {/* Right Portrait in AVIF (dra3.avif) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-[#FCE794] bg-[#3E2312]">
              <picture>
                <source srcSet="/images/dra3.avif" type="image/avif" />
                <img
                  src="/images/dra3.avif"
                  alt="Dra. Suellen Campos — Atendimento Personalizado em Manaus"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </picture>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

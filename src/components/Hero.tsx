import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[100dvh] flex items-end md:items-center bg-[#2D1612] text-white overflow-hidden">
      
      {/* FULL-BACKGROUND HERO IMAGE */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/hero_new.avif" type="image/avif" />
          <img
            src="/images/hero_new.avif"
            alt="Dra. Suellen Campos — Odontologia Estética em Manaus"
            fetchPriority="high"
            className="w-full h-full object-cover object-[82%_15%] md:object-[85%_top] filter brightness-[0.96] contrast-[1.04]"
          />
        </picture>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D08] via-[#2D1612]/85 via-55% to-transparent md:bg-gradient-to-r md:from-[#2D1612] md:via-[#2D1612]/95 md:via-45% md:to-transparent" />
      </div>

      {/* Decorative Branding Watermark */}
      <div className="absolute -top-12 -right-12 font-playfair text-[180px] sm:text-[280px] text-white/[0.04] select-none pointer-events-none leading-none z-0">
        SC
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full z-10 relative pt-28 pb-12 sm:pb-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end md:items-center">
          
          {/* Left Column - Text Content & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            {/* Top Brand Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] uppercase tracking-[0.18em] text-[#FCE794] font-montserrat font-semibold mb-4 sm:mb-6 backdrop-blur-md shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FCE794]" />
              <span>Odontologia Estética em Manaus</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.15] text-white font-bold mb-4 sm:mb-6 max-w-2xl">
              Descubra o sorriso <br />
              <span className="font-playfair italic text-[#FCE794]">
                que combina
              </span>{' '}
              com a sua essência.
            </h1>

            {/* Subheadline Text */}
            <p className="font-montserrat text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed max-w-lg mb-6 sm:mb-8">
              Transformações estéticas e reabilitação oral planejadas sob medida pela Dra. Suellen Campos. Precisão clínica, escaneamento 3D e máxima naturalidade sem artificialidade.
            </p>

            {/* Mobile-First CTA Button */}
            <div className="w-full sm:w-auto mb-8 sm:mb-10">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-4 bg-gradient-to-r from-[#FCE794] to-[#FAD966] text-[#3E2312] font-montserrat font-bold text-xs uppercase tracking-editorial rounded-full shadow-[0_0_25px_rgba(252,231,148,0.35)] hover:shadow-[0_0_40px_rgba(252,231,148,0.55)] transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>AGENDAR MINHA AVALIAÇÃO</span>
                <div className="w-7 h-7 rounded-full bg-[#3E2312] text-[#FCE794] flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            {/* Sub-features list */}
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs text-white/80 font-montserrat font-light border-t border-white/15 pt-5 w-full max-w-md">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FCE794]" />
                <span>Planejamento DSD 3D</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FCE794]" />
                <span>Facetas & Implantes</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

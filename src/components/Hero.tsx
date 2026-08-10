import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[100dvh] flex items-end md:items-center bg-[#2D1612] text-white overflow-hidden">
      
      {/* FULL-BACKGROUND HERO IMAGE - MOBILE FOCUS AT CENTER 30% */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/hero_new.avif" type="image/avif" />
          <img
            src="/images/hero_new.avif"
            alt="Dra. Suellen Campos — Odontologia Estética em Manaus"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_30%] md:object-[85%_top] filter brightness-[0.96] contrast-[1.04]"
          />
        </picture>

        {/* MOBILE BOTTOM-TO-TOP GRADIENT & DESKTOP LEFT-TO-RIGHT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D08] via-[#2D1612]/85 via-55% to-transparent md:bg-gradient-to-r md:from-[#2D1612] md:via-[#2D1612]/95 md:via-45% md:to-transparent" />
      </div>

      {/* Decorative Branding Watermark */}
      <div className="absolute -top-12 -right-12 font-serif text-[180px] sm:text-[280px] text-white/[0.04] select-none pointer-events-none leading-none z-0">
        SC
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full z-10 relative pt-28 pb-12 sm:pb-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end md:items-center">
          
          {/* Left Column - Text Content & Mobile-First CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Brand Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] uppercase tracking-[0.18em] text-[#FCE794] mb-4 sm:mb-6 backdrop-blur-md shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FCE794]" />
              <span>Odontologia Estética em Manaus</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl leading-[1.15] text-white font-normal mb-4 sm:mb-6 max-w-2xl">
              Descubra o sorriso<br className="hidden sm:inline" />{' '}
              <span className="italic font-normal text-[#FCE794]">
                combina
              </span>{' '}
              com a sua essência.
            </h1>

            {/* Subheadline Text */}
            <p className="font-sans text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-lg mb-6 sm:mb-8">
              Transformações estéticas e reabilitação oral planejadas sob medida pela Dra. Suellen Campos. Precisão clínica, escaneamento 3D e máxima naturalidade sem artificialidade.
            </p>

            {/* Full-width Mobile CTA Button with 44px Touch Target */}
            <div className="w-full sm:w-auto mb-8 sm:mb-10">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-4 bg-gradient-to-r from-[#FCE794] to-[#FAD966] text-[#3E2312] font-bold text-xs uppercase tracking-editorial rounded-full shadow-[0_0_25px_rgba(252,231,148,0.35)] hover:shadow-[0_0_40px_rgba(252,231,148,0.55)] transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>AGENDAR MINHA AVALIAÇÃO</span>
                <div className="w-7 h-7 rounded-full bg-[#3E2312] text-[#FCE794] flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            {/* Sub-features list */}
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs text-white/80 font-light border-t border-white/15 pt-5 w-full max-w-md">
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

          {/* Right Column - Desktop Decorative Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-5 relative flex-col justify-end items-end h-full pt-16"
          >
            {/* Floating Pin Badge */}
            <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/50 shadow-2xl text-[#3E2312] max-w-xs mb-4">
              <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-[#9C5E33] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#9C5E33] animate-ping" />
                <span>Atendimento Presencial</span>
              </div>
              <h4 className="font-serif font-bold text-sm tracking-wider text-[#3E2312]">
                Dra. Suellen Campos
              </h4>
              <p className="text-[10px] uppercase tracking-widest text-[#9C5E33] font-semibold mt-0.5">
                ODONTOLOGIA ESTÉTICA \ CRO AM
              </p>
            </div>

            {/* Floating Stamp Seal Accent */}
            <div className="bg-[#3E2312]/85 border border-[#FCE794]/40 backdrop-blur-md px-5 py-3 rounded-xl text-right shadow-xl">
              <span className="font-serif italic text-xs text-[#FCE794] block">
                Exclusividade & Naturalidade
              </span>
              <span className="text-[9px] uppercase tracking-editorial text-white/80 font-light block">
                Manaus • Amazonas
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

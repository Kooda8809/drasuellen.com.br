import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 lg:pt-44 lg:pb-28 flex items-center bg-[#2D1612] text-white overflow-hidden">
      
      {/* FULL-BACKGROUND HERO IMAGE - ALIGNED TO TOP (object-[85%_top]) TO PREVENT CUTTING OFF THE HEAD */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/hero_new.avif" type="image/avif" />
          <img
            src="/images/hero_new.avif"
            alt="Dra. Suellen Campos — Odontologia Estética"
            className="w-full h-full object-cover object-[85%_top] filter brightness-[0.96] contrast-[1.04]"
          />
        </picture>

        {/* LEFT-TO-RIGHT GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D1612] via-[#2D1612]/95 via-50% sm:via-45% lg:via-42% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1612] via-transparent to-transparent opacity-80" />
      </div>

      {/* Decorative Branding Watermark */}
      <div className="absolute -top-12 -right-12 font-serif text-[280px] text-white/[0.04] select-none pointer-events-none leading-none z-0">
        SC
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[58vh]">
          
          {/* Left Column - Text Content & High-Conversion CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Brand Tag */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-[0.2em] text-[#FCE794] mb-8 backdrop-blur-md shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#FCE794]" />
              <span>Odontologia Estética em Manaus</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.12] text-white font-normal mb-6 max-w-2xl">
              Descubra o sorriso que{' '}
              <span className="italic font-normal text-[#FCE794] block sm:inline">
                combina
              </span>{' '}
              com a sua essência.
            </h1>

            {/* Subheadline Text */}
            <p className="font-sans text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-lg mb-10">
              Transformações estéticas e reabilitação oral planejadas sob medida pela Dra. Suellen Campos. Precisão clínica, escaneamento 3D e máxima naturalidade sem artificialidade.
            </p>

            {/* High-Conversion Glowing Pill CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto mb-12">
              <button
                onClick={onOpenModal}
                className="relative group px-8 py-4 bg-gradient-to-r from-[#FCE794] to-[#FAD966] text-[#3E2312] font-bold text-xs uppercase tracking-editorial rounded-full shadow-[0_0_30px_rgba(252,231,148,0.4)] hover:shadow-[0_0_45px_rgba(252,231,148,0.6)] transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden"
              >
                <span>QUERO AGENDAR MINHA AVALIAÇÃO</span>
                <div className="w-8 h-8 rounded-full bg-[#3E2312] text-[#FCE794] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            {/* Sub-features list */}
            <div className="flex items-center space-x-6 text-xs text-white/80 font-light border-t border-white/15 pt-6 w-full max-w-md">
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

          {/* Right Column - Floating Badges placed nicely below shoulder level */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative flex flex-col justify-end items-end h-full pt-16 lg:pt-32"
          >
            {/* Floating Pin Badge */}
            <div className="relative group bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/50 shadow-2xl text-[#3E2312] max-w-xs self-end mb-4">
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

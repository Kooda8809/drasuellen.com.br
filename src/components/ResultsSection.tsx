import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Instagram } from 'lucide-react';
import { ExpandableGallery, CaseItem } from './ui/gallery-animation';

interface ResultsSectionProps {
  onOpenModal: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'facetas' | 'reabilitacao' | 'implante' | 'estetica'>('all');

  const cases: CaseItem[] = [
    {
      id: 'caso-1',
      category: 'facetas',
      title: 'Caso 01 — Facetas em Resina Compostos',
      procedure: 'Lentes / Facetas em Resina de Alta Performance',
      description: 'Escultura dental em resina composta premium com fechamento de diastema, refinamento anatômico e brilho natural em sessão única.',
      image: '/images/facetas_em_resina_w3.avif',
      tag: 'Facetas'
    },
    {
      id: 'caso-2',
      category: 'facetas',
      title: 'Caso 02 — Facetas em Resina Premium',
      procedure: 'Harmonização de Sorriso em Resinas Especiais',
      description: 'Correção de proporções faciais, zênite gengival e incisais com máxima preservação biológica da estrutura dental.',
      image: '/images/facetas_em_resina_w4.avif',
      tag: 'Facetas'
    },
    {
      id: 'caso-3',
      category: 'facetas',
      title: 'Caso 03 — Lentes de Contato Dentais',
      procedure: 'Lentes Cerâmicas Ultra-Finas de Porcelana',
      description: 'Transformação completa de forma, alinhamento e tonalidade com lâminas de cerâmica imperceptíveis e brilhantes.',
      image: '/images/lente_de_contato_dental_antes_e_depois.avif',
      tag: 'Facetas'
    },
    {
      id: 'caso-4',
      category: 'implante',
      title: 'Caso 04 — Lente de Porcelana & Implante',
      procedure: 'Implante Osseointegrado + Coroa e Lentes Cerâmicas',
      description: 'Reabilitação estética e funcional associando implante unitário de alta precisão a lentes de porcelana sob medida.',
      image: '/images/lente_de_porcelana_e_implante_depois.avif',
      beforeImage: '/images/lente_de_porcelana_e_implante_antes.avif',
      tag: 'Implante'
    },
    {
      id: 'caso-5',
      category: 'reabilitacao',
      title: 'Caso 05 — Reabilitação Oral Completa',
      procedure: 'Restabelecimento Oclusal e Suporte Facial',
      description: 'Devolução de dimensão vertical, conforto mastigatório e rejuvenescimento do sorriso através de planejamento 3D DSD.',
      image: '/images/transformacao_depois_1.avif',
      beforeImage: '/images/transformacao_antes_1.avif',
      tag: 'Reabilitação'
    },
    {
      id: 'caso-6',
      category: 'estetica',
      title: 'Caso 06 — Estética Radiante do Sorriso',
      procedure: 'Gengivoplastia + Clareamento de Alta Performance',
      description: 'Harmonização entre a arquitetura gengival e o brilho do esmalte dental para um resultado radiante e jovial.',
      image: '/images/transformacao_1.avif',
      tag: 'Estética'
    }
  ];

  const filteredCases = activeTab === 'all' ? cases : cases.filter(c => c.category === activeTab);

  return (
    <section id="resultados" className="py-16 sm:py-24 lg:py-36 bg-[#9C5E33] text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FCE794]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="font-montserrat text-xs uppercase tracking-editorial text-[#FCE794] font-bold mb-2 sm:mb-3 block">
            Galeria de Tratamentos & Casos Clínicos
          </span>

          <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
            Resultados que você consegue{' '}
            <span className="font-playfair italic text-[#FCE794]">ver.</span>
          </h2>

          <p className="font-montserrat text-sm sm:text-base md:text-lg text-white/90 font-light">
            Cada caso começa com um planejamento rigoroso. Clique na imagem para expandir os detalhes do procedimento e comparar o antes e depois.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-full p-2 border border-white/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-2 font-montserrat">
            <div className="flex items-center pl-3 pr-2 text-[#3E2312] w-full sm:w-auto">
              <Search className="w-4 h-4 text-[#9C5E33] mr-2 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#3E2312]">
                Filtrar:
              </span>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto w-full py-1 no-scrollbar">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'facetas', label: 'Facetas' },
                { id: 'reabilitacao', label: 'Reabilitação' },
                { id: 'implante', label: 'Implantes' },
                { id: 'estetica', label: 'Estética' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-2.5 min-h-[44px] rounded-full text-xs uppercase tracking-editorial font-bold transition-all duration-300 whitespace-nowrap flex items-center justify-center ${
                    activeTab === tab.id
                      ? 'bg-[#3E2312] text-[#FCE794] shadow-md'
                      : 'bg-[#F5F2ED] text-[#3E2312] hover:bg-[#9C5E33] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* EXPANDABLE ANIMATION GALLERY COMPONENT */}
        <div className="mb-12 sm:mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <ExpandableGallery
                cases={filteredCases}
                onOpenBookingModal={onOpenModal}
                className="w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="max-w-xl mx-auto p-4 bg-[#FFFFFF] rounded-2xl sm:rounded-full shadow-2xl border border-white/40 flex flex-col sm:flex-row items-center justify-between text-[#3E2312] gap-3 px-6 font-montserrat">
            <a
              href="https://www.instagram.com/drasuellencamposorto/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-left hover:text-[#9C5E33] transition-colors"
            >
              <Instagram className="w-5 h-5 text-[#9C5E33] shrink-0" />
              <span className="text-xs font-bold text-[#3E2312]">
                Siga @drasuellencamposorto no Instagram
              </span>
            </a>
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-[#9C5E33] hover:bg-[#3E2312] text-white hover:text-[#FCE794] font-bold text-xs uppercase tracking-editorial rounded-full transition-all duration-300 shadow flex items-center justify-center shrink-0"
            >
              SOLICITAR MOCKUP 3D
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

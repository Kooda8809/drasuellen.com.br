import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export interface CaseItem {
  id: string;
  category: string;
  title: string;
  procedure: string;
  description: string;
  image: string;
  tag: string;
}

interface ExpandableGalleryProps {
  cases: CaseItem[];
  className?: string;
  onOpenBookingModal: () => void;
}

export const ExpandableGallery: React.FC<ExpandableGalleryProps> = ({
  cases,
  className = '',
  onOpenBookingModal,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % cases.length);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + cases.length) % cases.length);
    }
  };

  const getFlexValue = (index: number) => {
    if (hoveredIndex === null) {
      return 1;
    }
    return hoveredIndex === index ? 2.5 : 0.6;
  };

  const selectedCase = selectedIndex !== null ? cases[selectedIndex] : null;

  return (
    <div className={className}>
      {/* Mobile 2-Column Grid / Desktop Horizontal Expandable Bar */}
      <div className="grid grid-cols-2 md:flex gap-3 min-h-[320px] sm:min-h-[380px] md:h-[440px] w-full">
        {cases.map((c, index) => (
          <motion.div
            key={c.id}
            className="relative cursor-pointer overflow-hidden rounded-2xl border-2 border-white/20 shadow-xl group h-40 sm:h-48 md:h-full"
            style={{ flex: 1 }}
            animate={{ flex: getFlexValue(index) }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openImage(index)}
          >
            <picture>
              <source srcSet={c.image} type="image/avif" />
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </picture>

            {/* Vignette Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#3E2312]/90 via-[#3E2312]/30 to-transparent"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: hoveredIndex === index ? 0.2 : 0.5 }}
              transition={{ duration: 0.3 }}
            />

            {/* Title & Tag Badge on Card */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
              <span className="font-montserrat inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#FFFFFF]/95 backdrop-blur-md rounded-full text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#9C5E33] shadow-md mb-1">
                {c.tag}
              </span>
              <h4 className="font-playfair text-xs sm:text-base text-white font-medium truncate drop-shadow-md">
                {c.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded View Modal */}
      <AnimatePresence>
        {selectedIndex !== null && selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D1612]/95 backdrop-blur-md p-3 sm:p-8 overflow-y-auto"
            onClick={closeImage}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-30 text-white hover:text-[#FCE794] transition-colors p-2.5 min-h-[44px] min-w-[44px] bg-[#3E2312]/90 rounded-full border border-white/20 shadow-xl flex items-center justify-center"
              onClick={closeImage}
              aria-label="Fechar"
            >
              <X className="w-6 h-6 text-[#FCE794]" />
            </button>

            {/* Previous Button */}
            {cases.length > 1 && (
              <button
                className="absolute left-2 sm:left-6 z-30 text-white hover:text-[#FCE794] transition-colors p-2.5 sm:p-3 min-h-[44px] min-w-[44px] bg-[#3E2312]/90 rounded-full border border-white/20 shadow-xl flex items-center justify-center hover:scale-110"
                onClick={goToPrev}
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-[#FCE794]" />
              </button>
            )}

            {/* Next Button */}
            {cases.length > 1 && (
              <button
                className="absolute right-2 sm:right-6 z-30 text-white hover:text-[#FCE794] transition-colors p-2.5 sm:p-3 min-h-[44px] min-w-[44px] bg-[#3E2312]/90 rounded-full border border-white/20 shadow-xl flex items-center justify-center hover:scale-110"
                onClick={goToNext}
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6 text-[#FCE794]" />
              </button>
            )}

            {/* Modal Content Grid */}
            <motion.div
              className="relative w-[95%] max-w-5xl my-auto z-20 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-7 rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#FCE794] bg-[#3E2312] aspect-[4/3] sm:aspect-[16/10]"
              >
                <picture>
                  <source srcSet={selectedCase.image} type="image/avif" />
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </motion.div>

              {/* White Detailed Case Card */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="lg:col-span-5 bg-[#FFFFFF] rounded-2xl p-5 sm:p-8 text-[#3E2312] shadow-2xl border border-white/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-montserrat text-[10px] uppercase tracking-editorial text-[#9C5E33] font-bold block">
                      {selectedCase.procedure}
                    </span>
                    <span className="font-montserrat px-2.5 py-1 bg-[#F5F2ED] rounded-full text-[9px] uppercase font-bold text-[#9C5E33]">
                      {selectedCase.tag}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl sm:text-3xl font-bold text-[#3E2312] mb-2 sm:mb-3">
                    {selectedCase.title}
                  </h3>

                  <p className="font-montserrat text-xs sm:text-sm text-[#3E2312]/90 font-light leading-relaxed mb-4 sm:mb-6">
                    {selectedCase.description}
                  </p>

                  <div className="font-montserrat flex items-center space-x-2 text-xs text-[#9C5E33] font-semibold mb-4 sm:mb-6">
                    <Sparkles className="w-4 h-4 text-[#9C5E33]" />
                    <span>Planejamento Digital 3D em Manaus</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#3E2312]/10">
                  <button
                    onClick={() => {
                      closeImage();
                      onOpenBookingModal();
                    }}
                    className="font-montserrat w-full min-h-[44px] py-3.5 px-6 rounded-full bg-[#FCE794] hover:bg-[#FAD966] text-[#3E2312] font-bold text-xs uppercase tracking-editorial flex items-center justify-center space-x-2 shadow-md transition-all duration-300"
                  >
                    <span>AVALIAR MEU CASO</span>
                    <ArrowRight className="w-4 h-4 text-[#3E2312]" />
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Counter Pill */}
            <div className="font-montserrat absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-[#3E2312] text-xs font-bold bg-[#FCE794] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-xl">
              Caso {selectedIndex + 1} de {cases.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

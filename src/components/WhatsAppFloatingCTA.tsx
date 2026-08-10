import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppFloatingCTA: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5592999999999';

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Tooltip Badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-2 sm:mb-3 p-3 sm:p-4 bg-white border border-espresso/15 shadow-2xl rounded-2xl max-w-[240px] sm:max-w-xs text-espresso relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-espresso/50 hover:text-primary p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Fechar mensagem"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] uppercase tracking-editorial text-primary font-bold block mb-0.5">
              Atendimento Online
            </span>
            <p className="text-xs text-espresso/85 font-medium leading-snug pr-3">
              Olá! Precisa tirar dúvidas sobre tratamentos com a equipe da Dra. Suellen?
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá, Dra. Suellen! Gostaria de agendar uma avaliação.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3.5 sm:p-4 min-h-[44px] min-w-[44px] bg-primary hover:bg-espresso text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center border-2 border-white hover:scale-105"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-accent" />
        
        {/* Soft Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping -z-10" />
      </a>
    </div>
  );
};

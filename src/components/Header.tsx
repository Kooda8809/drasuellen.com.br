import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Jornada', href: '#jornada' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#9C5E33] backdrop-blur-md py-3 shadow-md border-b border-white/10'
            : 'bg-transparent py-4 sm:py-6 border-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Left Side: Brand Logo (INVISIBLE ON HERO, FADES IN ONLY AFTER SCROLLING > 60PX) */}
          <div className="w-1/4 sm:w-1/3 flex justify-start">
            <div
              className={`transition-all duration-500 ${
                isScrolled
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <a href="#" className="group flex flex-col">
                <span className="font-playfair tracking-widest text-sm sm:text-base font-bold text-white whitespace-nowrap">
                  DRA. SUELLEN CAMPOS
                </span>
                <span className="font-montserrat text-[9px] tracking-[0.2em] uppercase text-[#FCE794] font-semibold">
                  Odontologia Estética
                </span>
              </a>
            </div>
          </div>

          {/* Center: Desktop Navigation Links (Montserrat, PERFECTLY CENTERED) */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-montserrat text-xs uppercase tracking-editorial text-white/90 hover:text-[#FCE794] transition-colors duration-300 relative py-1 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FCE794] hover:after:w-full after:transition-all after:duration-300 drop-shadow-md whitespace-nowrap min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side: Mobile Hamburger Button */}
          <div className="w-1/4 sm:w-1/3 flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 min-h-[44px] min-w-[44px] text-white hover:text-[#FCE794] focus:outline-none flex items-center justify-center bg-white/10 rounded-full border border-white/20"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#3E2312]/80 backdrop-blur-sm"
            />

            {/* Slide-out Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-[#2D1612] border-l border-white/15 shadow-2xl p-6 flex flex-col justify-between z-50 text-white"
            >
              {/* Top Drawer Header & Close Button */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/15">
                  <div className="flex flex-col">
                    <span className="font-playfair tracking-widest text-base font-bold text-white">
                      DRA. SUELLEN CAMPOS
                    </span>
                    <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-[#FCE794] font-semibold">
                      Odontologia Estética
                    </span>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 min-h-[44px] min-w-[44px] text-white hover:text-[#FCE794] flex items-center justify-center bg-white/10 rounded-full"
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Vertical Navigation Links (Montserrat) */}
                <nav className="flex flex-col mt-6 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-montserrat text-base uppercase tracking-editorial font-medium text-white hover:text-[#FCE794] py-4 border-b border-white/10 flex items-center min-h-[44px] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer Info */}
              <div className="pt-6 border-t border-white/10 text-center">
                <span className="font-montserrat text-[10px] uppercase tracking-widest text-[#FCE794] font-semibold block mb-1">
                  Manaus • Amazonas
                </span>
                <span className="font-montserrat text-xs text-white/70 font-light block">
                  Atendimento Presencial sob Agendamento
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

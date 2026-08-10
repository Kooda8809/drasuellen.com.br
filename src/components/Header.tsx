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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#9C5E33]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/10'
          : 'bg-transparent py-6 border-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Left Side: Brand Logo (Appears smoothly only after scrolling) */}
        <div className="w-1/4 sm:w-1/3 flex justify-start">
          <div
            className={`transition-all duration-500 ${
              isScrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <a href="#" className="group flex flex-col">
              <span className="font-serif tracking-widest text-base sm:text-lg font-medium text-white whitespace-nowrap">
                DRA. SUELLEN CAMPOS
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#FCE794] font-semibold">
                Odontologia Estética
              </span>
            </a>
          </div>
        </div>

        {/* Center: Navigation Links (PERFECTLY CENTERED ON SCREEN) */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-editorial text-white/90 hover:text-[#FCE794] transition-colors duration-300 relative py-1 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FCE794] hover:after:w-full after:transition-all after:duration-300 drop-shadow-md whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side: Balanced Spacer / Mobile Button */}
        <div className="w-1/4 sm:w-1/3 flex justify-end">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white focus:outline-none drop-shadow"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#2D1612] border-b border-white/20 px-6 py-6 shadow-2xl text-white"
          >
            <div className="flex flex-col space-y-4">
              <div className="pb-3 border-b border-white/10">
                <span className="font-serif tracking-widest text-lg font-medium text-white block">
                  DRA. SUELLEN CAMPOS
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#FCE794] font-semibold">
                  Odontologia Estética
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-editorial font-medium text-white hover:text-[#FCE794] py-2 border-b border-white/10"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

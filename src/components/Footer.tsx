import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-cream border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-serif tracking-widest text-xl font-medium text-white mb-2">
              DRA. SUELLEN CAMPOS
            </span>
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold mb-4">
              Odontologia • Estética • Reabilitação
            </span>
            <p className="text-xs text-cream/75 font-light leading-relaxed max-w-sm">
              Odontologia estética de alto padrão baseada no planejamento digital, naturalidade visual e excelência clínica em Manaus.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-editorial text-accent font-bold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-cream/85 font-light">
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre a Dra. Suellen</a></li>
              <li><a href="#tratamentos" className="hover:text-accent transition-colors">Tratamentos Principais</a></li>
              <li><a href="#resultados" className="hover:text-accent transition-colors">Resultados & Casos</a></li>
              <li><a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais Clínicos</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-4">
            <h4 className="font-sans text-xs uppercase tracking-editorial text-accent font-bold mb-4">
              Localização & Contato
            </h4>
            <div className="space-y-3 text-xs text-cream/85 font-light">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Manaus — Amazonas • Atendimento com Hora Marcada</span>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-primary transition-all text-white flex items-center space-x-2 font-bold"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-accent" />
                  <span className="text-[11px] uppercase tracking-wider">Instagram</span>
                </a>
                <a
                  href="https://wa.me/5592999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-primary transition-all text-white flex items-center space-x-2 font-bold"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-accent" />
                  <span className="text-[11px] uppercase tracking-wider">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream/60 font-light space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Dra. Suellen Campos. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-1">
            <span>Odontologia Estética com Sensibilidade e Precisão</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

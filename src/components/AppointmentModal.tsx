import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, MapPin } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Facetas de Porcelana',
    preferredTime: 'Manhã',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) return;

    setSubmitted(true);
    setTimeout(() => {
      const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5599999999999';
      const text = encodeURIComponent(
        `Olá, Dra. Suellen! Gostaria de agendar uma avaliação.\n\n` +
        `*Nome:* ${formData.name}\n` +
        `*Telefone:* ${formData.phone}\n` +
        `*Interesse:* ${formData.treatment}\n` +
        `*Período preferido:* ${formData.preferredTime}\n` +
        (formData.message ? `*Mensagem:* ${formData.message}` : '')
      );
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setAcceptedTerms(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto font-montserrat">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-espresso/75 backdrop-blur-sm"
          />

          {/* Bottom Sheet on Mobile / Centered Modal on Tablet & Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-cream border border-espresso/10 shadow-2xl rounded-t-3xl sm:rounded-2xl z-10 p-5 sm:p-8 text-espresso"
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2.5 min-h-[44px] min-w-[44px] text-espresso/70 hover:text-primary transition-colors rounded-full hover:bg-white flex items-center justify-center"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <span className="font-montserrat text-xs uppercase tracking-editorial text-primary font-bold block mb-1">
                  Atendimento Exclusivo
                </span>
                <h3 className="font-playfair text-xl sm:text-3xl font-bold text-espresso mb-2">
                  Agendar sua <span className="font-playfair italic text-primary">avaliação</span>
                </h3>
                <p className="font-montserrat text-xs sm:text-sm text-espresso/80 mb-5 font-light leading-relaxed">
                  Preencha os dados abaixo para darmos início ao planejamento personalizado do seu novo sorriso em Manaus.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 font-montserrat">
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-espresso font-bold mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Clara Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 min-h-[44px] bg-white border border-espresso/15 focus:border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wide text-espresso font-bold mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(92) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 min-h-[44px] bg-white border border-espresso/15 focus:border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-espresso font-bold mb-1">
                        Tratamento de Interesse
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-4 py-3 min-h-[44px] bg-white border border-espresso/15 focus:border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-all"
                      >
                        <option value="Facetas de Porcelana">Facetas de Porcelana</option>
                        <option value="Implantes Dentários">Implantes Dentários</option>
                        <option value="Reabilitação Oral">Reabilitação Oral</option>
                        <option value="Estética do Sorriso">Estética do Sorriso</option>
                        <option value="Primeira Avaliação Geral">Primeira Avaliação Geral</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wide text-espresso font-bold mb-1">
                        Horário Preferencial
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 min-h-[44px] bg-white border border-espresso/15 focus:border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-all"
                      >
                        <option value="Manhã">Manhã (08h - 12h)</option>
                        <option value="Tarde">Tarde (14h - 18h)</option>
                        <option value="A combinar">A combinar</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wide text-espresso font-bold mb-1">
                      Mensagem ou Dúvida (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Conte brevemente o que deseja transformar no seu sorriso..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-espresso/15 focus:border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-all resize-none"
                    />
                  </div>

                  {/* LGPD Consent Checkbox */}
                  <div className="mt-3 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="lgpd-consent"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-0.5 h-5 w-5 min-w-[20px] accent-primary cursor-pointer shrink-0"
                    />
                    <label htmlFor="lgpd-consent" className="text-xs text-espresso/80 leading-relaxed cursor-pointer select-none">
                      Concordo com a <a href="#" className="underline text-primary font-medium">Política de Privacidade</a> e autorizo o contato para agendamento.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!acceptedTerms}
                      className={`w-full min-h-[44px] py-4 bg-accent hover:bg-accent-hover text-espresso font-montserrat font-bold text-xs uppercase tracking-editorial rounded-full shadow-md transition-all duration-300 flex items-center justify-center space-x-2 ${
                        !acceptedTerms ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-lg'
                      }`}
                    >
                      <Calendar className="w-4 h-4 text-espresso" />
                      <span>Confirmar e Enviar pelo WhatsApp</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-xs text-espresso/70 pt-2 font-light">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>Atendimento presencial em Manaus • AM</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 font-montserrat">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h4 className="font-playfair text-xl sm:text-2xl text-espresso mb-2">
                  Solicitação registrada com <span className="font-playfair italic text-primary">sucesso</span>
                </h4>
                <p className="text-xs sm:text-sm text-espresso/80 mb-6">
                  Redirecionando você para o WhatsApp da equipe da Dra. Suellen Campos...
                </p>
                <button
                  onClick={handleReset}
                  className="text-xs uppercase tracking-wide text-primary font-bold hover:underline min-h-[44px] flex items-center justify-center mx-auto"
                >
                  Fechar janela
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

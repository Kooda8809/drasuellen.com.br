import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQSectionProps {
  onOpenModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona a primeira avaliação?',
      answer:
        'A primeira avaliação é uma consulta clínica aprofundada de aproximadamente 60 minutos. Realizamos uma anamnese completa, registro fotográfico do seu sorriso em estúdio, avaliação da saúde bucal e escuta das suas expectativas estéticas e funcionais.'
    },
    {
      question: 'A avaliação é necessária antes de iniciar o tratamento?',
      answer:
        'Sim, indispensável. Na odontologia estética de alta precisão, não realizamos procedimentos sem um diagnóstico global prévio. A avaliação garante segurança biológica, planejamento 3D e previsibilidade do resultado.'
    },
    {
      question: 'Como saber qual tratamento é indicado para o meu sorriso?',
      answer:
        'Após o escaneamento digital e análise facial na primeira consulta, a Dra. Suellen apresenta um plano personalizado. Seja facetas, reabilitação oral ou clareamento, cada indicação respeita sua anatomia e objetivos.'
    },
    {
      question: 'Facetas ficam naturais?',
      answer:
        'Sim! A filosofia da Dra. Suellen é a estética imperceptível. As facetas em cerâmica pura possuem a mesma translucidez, textura e brilho dos dentes naturais, sem aquele aspecto artificial excessivamente branco.'
    },
    {
      question: 'Quanto tempo dura um tratamento?',
      answer:
        'O tempo varia de acordo com a complexidade. Procedimentos estéticos pontuais podem ser concluídos em poucas sessões. Tratamentos com facetas cerâmicas costumam levar de 2 a 4 semanas entre o mockup digital e a cimentação final.'
    },
    {
      question: 'Implante dentário dói?',
      answer:
        'O procedimento é realizado sob anestesia local de alta eficiência em ambiente calmo e controlado. A recuperação pós-operatória é extremamente tranquila com a medicação preventiva adequada prescrita pela Dra. Suellen.'
    },
    {
      question: 'Como funciona o planejamento do tratamento?',
      answer:
        'Utilizamos a tecnologia Digital Smile Design (DSD). Criamos uma simulação virtual 3D e aplicamos um teste no seu próprio sorriso (mock-up) para que você veja e sinta o resultado antes de iniciar os procedimentos.'
    },
    {
      question: 'Como faço para agendar minha avaliação?',
      answer:
        'Você pode clicar no botão "Agendar Avaliação" neste site ou falar diretamente com nossa equipe de atendimento presencial via WhatsApp para escolher o melhor dia e horário.'
    }
  ];

  return (
    <section id="faq" className="py-24 lg:py-36 bg-cream border-t border-espresso/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-editorial text-primary font-bold mb-3 block"
          >
            Esclarecimentos Clínicos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso leading-tight"
          >
            Perguntas <span className="italic font-normal text-primary">frequentes.</span>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-espresso/10 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif text-lg text-espresso font-medium">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors duration-300 shrink-0 ${isOpen ? 'bg-primary text-white' : 'bg-cream text-espresso'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-espresso/10"
                    >
                      <div className="p-6 pt-4 text-xs sm:text-sm text-espresso/85 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-espresso/70 mb-4">
            Possui outra dúvida específica sobre o seu caso?
          </p>
          <button
            onClick={onOpenModal}
            className="text-xs uppercase tracking-editorial font-bold text-primary hover:text-espresso underline underline-offset-4"
          >
            FALAR DIRETAMENTE COM A EQUIPE
          </button>
        </div>

      </div>
    </section>
  );
};

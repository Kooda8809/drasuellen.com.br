import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface TreatmentsSectionProps {
  onOpenModal: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenModal }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(null);

  const treatments = [
    {
      id: 1,
      title: 'Facetas de Porcelana',
      subtitle: 'Lentes de Contato Cerâmicas',
      description: 'Lâminas ultra-finas confeccionadas artesanalmente em porcelana pura para corrigir cor, formato, tamanho e alinhamento dos dentes com desgaste mínimo.',
      image: '/images/facetas.avif',
      highlights: [
        'Planejamento Digital DSD 3D',
        'Preservação máxima da estrutura dental',
        'Alta durabilidade e estabilidade de cor',
        'Acabamento altamente natural'
      ],
      indication: 'Indicado para quem busca a máxima transformação estética do sorriso com naturalidade.'
    },
    {
      id: 2,
      title: 'Implantes Dentários',
      subtitle: 'Reabilitação Fixa de Alta Precisão',
      description: 'Substituição definitiva de dentes perdidos através de implantes de titânio ou zircônia e coroas cerâmicas que mimetizam perfeitamente a dentição natural.',
      image: '/images/implantes.avif',
      highlights: [
        'Cirurgia guiada de alta precisão',
        'Recuperação da eficiência mastigatória',
        'Coroas cerâmicas personalizadas',
        'Conforto e segurança ao sorrir e falar'
      ],
      indication: 'Indicado para perdas unitárias ou múltiplas que necessitam de suporte fixo.'
    },
    {
      id: 3,
      title: 'Reabilitação Oral',
      subtitle: 'Harmonia Funcional & Estética',
      description: 'Tratamento interdisciplinar complexo para restabelecer a saúde, a mastigação correta e a estética em casos de desgastes severos ou perdas extensas.',
      image: '/images/reabilitacao.avif',
      highlights: [
        'Reconstrução da dimensão vertical',
        'Equilíbrio da articulação temporomandibular (ATM)',
        'Combinação de facetas, coroas e implantes',
        'Previsibilidade clínica digital'
      ],
      indication: 'Indicado para pacientes com desgaste dental acentuado ou colapso oclusal.'
    },
    {
      id: 4,
      title: 'Estética do Sorriso',
      subtitle: 'Clareamento & Plástica Gengival',
      description: 'Procedimentos minimamente invasivos focados na iluminação do sorriso e na simetria do contorno gengival para um resultado harmônico.',
      image: '/images/estetica.avif',
      highlights: [
        'Clareamento a laser de alta performance',
        'Gengivoplastia e remodelação de zênite',
        'Remoção de manchas e microabrasão',
        'Tratamento indolor e rápido'
      ],
      indication: 'Indicado para refinar a estética e o brilho dos dentes naturais.'
    }
  ];

  return (
    <section id="tratamentos" className="py-16 sm:py-24 lg:py-36 bg-cream border-t border-espresso/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-editorial text-primary font-bold mb-2 sm:mb-3 block">
            Especialidades Clínicas
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-espresso leading-tight mb-3 sm:mb-4">
            Tratamentos executados sob{' '}
            <span className="italic font-normal text-primary">medida.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-espresso/80 font-light leading-relaxed">
            Soluções personalizadas que unem alta tecnologia digital, odontologia conservadora e refinamento estético em Manaus.
          </p>
        </div>

        {/* Responsive Grid Cards (1 col on Mobile, 2 on Tablet, 4 on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {treatments.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-espresso/10 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                  <picture>
                    <source srcSet={t.image} type="image/avif" />
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-accent font-bold block mb-0.5">
                      {t.subtitle}
                    </span>
                    <h3 className="font-serif text-lg font-medium leading-tight">
                      {t.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-espresso/85 font-light leading-relaxed mb-4 line-clamp-3">
                    {t.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {t.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[11px] text-espresso/90">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0 border-t border-espresso/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedTreatment(t.id)}
                  className="text-xs uppercase tracking-wide text-primary font-bold hover:underline flex items-center space-x-1 min-h-[44px]"
                >
                  <span>Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenModal}
                  className="px-3.5 py-2 rounded-full bg-cream hover:bg-primary hover:text-white transition-all text-xs font-semibold text-espresso min-h-[44px] flex items-center"
                >
                  Agendar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Treatment Detail Popup Modal */}
      <AnimatePresence>
        {selectedTreatment !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
              className="fixed inset-0 bg-espresso/70 backdrop-blur-sm"
            />
            {(() => {
              const t = treatments.find(item => item.id === selectedTreatment);
              if (!t) return null;
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative w-full max-w-2xl bg-cream border border-espresso/10 shadow-2xl rounded-2xl overflow-hidden z-10 p-5 sm:p-8 text-espresso my-8"
                >
                  <button
                    onClick={() => setSelectedTreatment(null)}
                    className="absolute top-4 right-4 p-2 min-h-[44px] min-w-[44px] text-espresso/70 hover:text-primary transition-colors rounded-full hover:bg-white flex items-center justify-center"
                  >
                    ✕
                  </button>

                  <span className="text-xs uppercase tracking-editorial text-primary font-bold block mb-1">
                    {t.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-espresso mb-3">
                    {t.title}
                  </h3>
                  <p className="text-sm text-espresso/90 font-light leading-relaxed mb-6">
                    {t.description}
                  </p>

                  <div className="bg-white p-4 rounded-xl border border-espresso/10 mb-6">
                    <h4 className="font-serif text-sm text-espresso font-bold mb-3 flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span>Diferenciais deste tratamento</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-espresso/80">
                      {t.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-espresso/10">
                    <p className="text-xs text-espresso/70 italic">
                      {t.indication}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedTreatment(null);
                        onOpenModal();
                      }}
                      className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-editorial rounded-full shadow-md shrink-0 flex items-center justify-center"
                    >
                      Solicitar Avaliação
                    </button>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

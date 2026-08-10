import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, CheckCircle } from 'lucide-react';

interface TreatmentsSectionProps {
  onOpenModal: () => void;
}

interface Treatment {
  id: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenModal }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const treatments: Treatment[] = [
    {
      id: 'facetas',
      title: 'Facetas de Porcelana',
      tagline: 'Um novo sorriso, planejado para você.',
      image: '/images/facetas.avif',
      description:
        'Lâminas ultra-finas de cerâmica confeccionadas sob medida para alinhar, redefinir forma, proporção e tonalidade dos dentes com mínima desgastabilidade da estrutura natural.',
      highlights: [
        'Planejamento digital com teste drive do sorriso (mock-up)',
        'Cor e transparência customizadas de acordo com a pele',
        'Alta durabilidade e resistência a manchas',
        'Acabamento artesanal de máxima naturalidade'
      ]
    },
    {
      id: 'implantes',
      title: 'Implantes Dentários',
      tagline: 'Recupere função, segurança e naturalidade.',
      image: '/images/implantes.avif',
      description:
        'Soluções cirúrgicas e protéticas de alta precisão para devolver a estabilidade mastigatória, a firmeza e a confiança ao sorrir e falar.',
      highlights: [
        'Guias cirúrgicos guiados por computador',
        'Bio-compatibilidade total e cicatrização acelerada',
        'Próteses em cerâmica de alta fidelidade visual',
        'Preservação da estrutura óssea e estética facial'
      ]
    },
    {
      id: 'reabilitacao',
      title: 'Reabilitação Oral',
      tagline: 'Planejamento para devolver saúde, função e harmonia.',
      image: '/images/reabilitacao.avif',
      description:
        'Abordagem multidisciplinar para reconstruir casos complexos de desgaste, perda dental severa ou alteração da mordida, restaurando estética e conforto.',
      highlights: [
        'Diagnóstico global com odontologia digital',
        'Harmonização entre mordida, articulação e esthetics',
        'Tratamento integrado e cronograma personalizado',
        'Recuperação da autoestima e mastigação perfeita'
      ]
    },
    {
      id: 'estetica',
      title: 'Estética do Sorriso',
      tagline: 'Detalhes que valorizam aquilo que já é seu.',
      image: '/images/estetica.avif',
      description:
        'Procedimentos pontuais como clareamento a laser de alta performance, plástica gengival estética e pequenos ajustes morfológicos para realçar o sorriso.',
      highlights: [
        'Clareamento dental seguro e sem sensibilidade excessiva',
        'Plástica gengival para simetria do contorno do sorriso',
        'Resinas compostas de alta estratificação estética',
        'Manutenção preventiva do brilho natural'
      ]
    }
  ];

  return (
    <section id="tratamentos" className="py-24 lg:py-36 bg-cream border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-editorial text-primary font-bold mb-3 block">
              Especialidades Clínicas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso leading-tight">
              Tratamentos <span className="italic font-normal text-primary">principais.</span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={onOpenModal}
            className="mt-6 md:mt-0 text-xs uppercase tracking-editorial font-bold text-primary hover:text-espresso transition-colors inline-flex items-center space-x-2 group"
          >
            <span>VER TODOS OS TRATAMENTOS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedTreatment(treatment)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-espresso/10 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-dark">
                <picture>
                  <source srcSet={treatment.image} type="image/avif" />
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </picture>
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
                
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-espresso group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">
                    0{idx + 1} — Especialidade
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-espresso mb-2 group-hover:text-primary transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="font-serif italic text-sm text-espresso/80 mb-4 font-normal">
                    "{treatment.tagline}"
                  </p>
                  <p className="text-xs text-espresso/85 font-light line-clamp-2 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-espresso/10 flex items-center justify-between text-xs uppercase tracking-editorial font-bold text-primary">
                  <span>Explorar detalhes</span>
                  <span className="font-serif text-base font-normal">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
              className="fixed inset-0 bg-espresso/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white border border-espresso/10 shadow-2xl rounded-2xl overflow-hidden z-10 my-8 p-6 sm:p-8 text-espresso"
            >
              <button
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-6 right-6 p-2 text-espresso/70 hover:text-primary transition-colors rounded-full hover:bg-cream"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-cream">
                <picture>
                  <source srcSet={selectedTreatment.image} type="image/avif" />
                  <img
                    src={selectedTreatment.image}
                    alt={selectedTreatment.title}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>

              <span className="text-xs uppercase tracking-editorial text-primary font-bold block mb-1">
                Detalhamento Clínico
              </span>
              <h3 className="font-serif text-3xl font-normal text-espresso mb-2">
                {selectedTreatment.title}
              </h3>
              <p className="font-serif italic text-base text-primary mb-4 font-normal">
                "{selectedTreatment.tagline}"
              </p>
              <p className="text-sm text-espresso/85 font-light leading-relaxed mb-6">
                {selectedTreatment.description}
              </p>

              <h4 className="text-xs uppercase tracking-editorial font-bold text-espresso mb-3">
                Diferenciais do procedimento:
              </h4>

              <ul className="space-y-2 mb-8">
                {selectedTreatment.highlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs text-espresso/90">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setSelectedTreatment(null);
                  onOpenModal();
                }}
                className="w-full py-4 bg-primary hover:bg-primary-hover text-white text-xs uppercase tracking-editorial font-bold rounded-lg shadow-md transition-all duration-300"
              >
                AGENDAR AVALIAÇÃO PARA {selectedTreatment.title.toUpperCase()}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

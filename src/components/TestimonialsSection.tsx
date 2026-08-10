import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Minha experiência com a Unique Odontologia foi excelente! Sou paciente de implante e, antes de conhecer a Dra. Suellen, morria de medo de dentista. Ela foi extremamente atenciosa, delicada e me passou total confiança. Hoje sorrio sem vergonha nenhuma!",
      author: "Maria C.",
      role: "Paciente de Implante",
      tag: "Implantes & Humanização"
    },
    {
      id: 2,
      quote: "Profissional maravilhosa e equipe super acolhedora. Fiz minhas facetas e o resultado ficou super natural, exatamente como eu queria, sem parecer artificial. O atendimento é impecável do início ao fim!",
      author: "Juliana M.",
      role: "Paciente de Facetas",
      tag: "Confiança & Clareza"
    },
    {
      id: 3,
      quote: "Lugar impecável! Pontualidade, ambiente cheiroso e um café maravilhoso na recepção. A Dra. Suellen explica cada detalhe do procedimento com muita paciência. Recomendo de olhos fechados!",
      author: "Carlos E.",
      role: "Paciente de Reabilitação",
      tag: "Qualidade & Recepção"
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-36 bg-[#9C5E33] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-montserrat text-xs uppercase tracking-editorial text-[#FCE794] font-bold mb-2 sm:mb-3 block">
            Prova Social & Avaliações
          </span>

          <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
            A opinião de quem já transformou o{' '}
            <span className="font-playfair italic text-[#FCE794]">sorriso.</span>
          </h2>

          <p className="font-montserrat text-sm sm:text-base md:text-lg text-white/90 font-normal">
            Depoimentos reais extraídos de avaliações verificadas de pacientes atendidos em Manaus/AM.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#F5F2ED] rounded-2xl p-6 sm:p-8 text-[#3E2312] shadow-xl border border-white/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* 5 Butter Yellow Stars */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FCE794] text-[#FCE794]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#9C5E33]/30" />
                </div>

                {/* High Legibility Upright Quote Text */}
                <p className="font-montserrat text-sm sm:text-base text-[#3E2312] font-normal leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#3E2312]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-playfair font-bold text-base text-[#3E2312]">
                    {t.author}
                  </h4>
                  <span className="font-montserrat text-xs text-[#9C5E33] font-semibold block mt-0.5">
                    {t.role}
                  </span>
                </div>

                <div className="font-montserrat flex items-center space-x-1 px-3 py-1 bg-white rounded-full text-[10px] uppercase font-bold text-[#9C5E33] shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9C5E33]" />
                  <span>Verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

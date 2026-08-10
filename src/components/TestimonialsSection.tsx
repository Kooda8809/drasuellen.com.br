import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      tag: 'Implante Dentário • Humanização',
      quote:
        'Minha experiência com a Unique Odontologia foi excelente! Sou paciente de implante e, antes de conhecer os profissionais da clínica, tinha muito medo só de ouvir falar em implante dentário. Desde o primeiro momento fui muito bem recebido. Logo na entrada, a Dani nos acolhe com muito carinho e faz toda a diferença. Quando entrei no consultório da Dra. Suellen, ela me explicou todo o processo com muita calma e tirou todo o medo que eu tinha. Hoje posso dizer que foi uma das melhores decisões que tomei. Agradeço de coração pelo atendimento humanizado!',
      rating: 5,
      author: 'Paciente de Implante',
      avatar: '/images/case1.avif'
    },
    {
      id: 2,
      tag: 'Confiança & Clareza',
      quote:
        'Minha experiência tem sido muito positiva. Sempre fui muito bem atendida e me senti acolhida. A Dra. Suellen é uma profissional extremamente atenciosa, explica tudo com clareza e transmite muita confiança durante todo o tratamento. Parabéns a toda a equipe pelo excelente atendimento, dedicação e profissionalismo. Recomendo a clínica com toda a confiança.',
      rating: 5,
      author: 'Paciente Verificada',
      avatar: '/images/case2.avif'
    },
    {
      id: 3,
      tag: 'Qualidade & Recepção',
      quote:
        'Desde a recepção, sempre fui muito bem atendida. O atendimento da Dra. Suellen sempre foi excelente, com muito profissionalismo, cuidado e dedicação. Toda a equipe está de parabéns pelo carinho, atenção e pela qualidade do atendimento.',
      rating: 5,
      author: 'Paciente Verificada',
      avatar: '/images/estetica.avif'
    }
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#9C5E33] text-white relative overflow-hidden">
      {/* Background Soft Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FCE794]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FCE794] font-bold mb-3 block">
            Prova Social & Depoimentos Reais
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
            O que nossos <span className="italic font-normal text-[#FCE794]">pacientes</span> dizem.
          </h2>

          <p className="font-sans text-base text-white/90 font-light max-w-xl mx-auto">
            Histórias reais de quem transformou o sorriso e a autoimagem com a Dra. Suellen Campos.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#F5F2ED] text-[#3E2312] p-8 rounded-[32px] border border-white/60 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Header: 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#3E2312]/15">
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FCE794] text-[#FCE794]" />
                    ))}
                  </div>

                  <Quote className="w-7 h-7 text-[#9C5E33]/40" />
                </div>

                {/* Procedure Pill */}
                <span className="inline-block px-3.5 py-1.5 bg-[#FFFFFF] rounded-full text-[10px] uppercase font-bold tracking-wider text-[#9C5E33] border border-[#3E2312]/10 mb-4 shadow-xs">
                  {t.tag}
                </span>

                {/* Testimonial Quote */}
                <p className="font-sans text-xs sm:text-sm text-[#3E2312] font-normal leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-[#3E2312]/15 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <picture>
                    <source srcSet={t.avatar} type="image/avif" />
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#9C5E33]"
                    />
                  </picture>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-[#3E2312]">
                      {t.author}
                    </h4>
                    <span className="text-[10px] text-[#3E2312]/70 font-semibold block">
                      Manaus • Amazonas
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-[#9C5E33] text-[10px] font-bold uppercase tracking-wider bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#9C5E33]/20 shadow-xs">
                  <CheckCircle className="w-3 h-3 text-[#9C5E33]" />
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

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { ResultsSection } from './components/ResultsSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { PatientJourneySection } from './components/PatientJourneySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingCTA } from './components/WhatsAppFloatingCTA';
import { AppointmentModal } from './components/AppointmentModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#3E2312] overflow-x-hidden selection:bg-[#9C5E33]/20 selection:text-[#3E2312]">
      {/* 01 — HEADER */}
      <Header />

      {/* 02 — HERO */}
      <Hero onOpenModal={handleOpenModal} />

      {/* 03 — SOBRE A DRA. SUELLEN (CONECTADO DIRETAMENTE À HERO) */}
      <AboutSection onOpenModal={handleOpenModal} />

      {/* 04 — TRATAMENTOS PRINCIPAIS */}
      <TreatmentsSection onOpenModal={handleOpenModal} />

      {/* 05 — RESULTADOS / CASOS */}
      <ResultsSection onOpenModal={handleOpenModal} />

      {/* 06 — DIFERENCIAIS */}
      <DifferentialsSection />

      {/* 07 — EXPERIÊNCIA DO PACIENTE */}
      <PatientJourneySection />

      {/* 08 — PROVA SOCIAL */}
      <TestimonialsSection />

      {/* 09 — FAQ */}
      <FAQSection onOpenModal={handleOpenModal} />

      {/* 10 — CTA FINAL */}
      <FinalCTASection onOpenModal={handleOpenModal} />

      {/* 11 — FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP CTA */}
      <WhatsAppFloatingCTA />

      {/* APPOINTMENT MODAL */}
      <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PositioningSection } from './components/PositioningSection';
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

      {/* 03 — BLOCO DE POSICIONAMENTO */}
      <PositioningSection />

      {/* 04 — SOBRE A DRA. SUELLEN */}
      <AboutSection onOpenModal={handleOpenModal} />

      {/* 05 — TRATAMENTOS PRINCIPAIS */}
      <TreatmentsSection onOpenModal={handleOpenModal} />

      {/* 06 — RESULTADOS / CASOS */}
      <ResultsSection onOpenModal={handleOpenModal} />

      {/* 07 — DIFERENCIAIS */}
      <DifferentialsSection />

      {/* 08 — EXPERIÊNCIA DO PACIENTE */}
      <PatientJourneySection />

      {/* 09 — PROVA SOCIAL */}
      <TestimonialsSection />

      {/* 10 — FAQ */}
      <FAQSection onOpenModal={handleOpenModal} />

      {/* 11 — CTA FINAL */}
      <FinalCTASection onOpenModal={handleOpenModal} />

      {/* 12 — FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP CTA */}
      <WhatsAppFloatingCTA />

      {/* APPOINTMENT MODAL */}
      <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;

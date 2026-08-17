import React from 'react';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import AboutDoctor from './components/AboutDoctor';
import BMICalculator from './components/BMICalculator';
import Procedures from './components/Procedures';
import Differentials from './components/Differentials';
import PatientJourney from './components/PatientJourney';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      <main>
        <Hero />
        <MetricsBar />
        <AboutDoctor />
        <BMICalculator />
        <Procedures />
        <Differentials />
        <PatientJourney />
        <Testimonials />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

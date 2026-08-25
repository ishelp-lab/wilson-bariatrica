import React from 'react';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Testimonials from './components/Testimonials';
import VideoTestimonials from './components/VideoTestimonials';
import AboutDoctor from './components/AboutDoctor';
import BMICalculator from './components/BMICalculator';
import Procedures from './components/Procedures';
import PatientJourney from './components/PatientJourney';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-950 selection:text-white">
      <main>
        <Hero />
        <MetricsBar />
        <Testimonials />
        <VideoTestimonials />
        <AboutDoctor />
        <BMICalculator />
        <Procedures />
        <PatientJourney />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}


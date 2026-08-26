import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3.2);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const transformations = [
    {
      id: 1,
      patientName: 'Paula',
      antesImg: '/assets/transformacao-1-antes.jpg',
      depoisImg: '/assets/transformacao-1-depois.jpg',
    },
    {
      id: 2,
      patientName: 'Aline',
      antesImg: '/assets/aline-antes.jpg',
      depoisImg: '/assets/aline-depois.jpg',
    },
    {
      id: 3,
      patientName: 'Amanda',
      antesImg: '/assets/amanda-antes.jpg',
      depoisImg: '/assets/amanda-depois.jpg',
    },
    {
      id: 4,
      patientName: 'Cris',
      antesImg: '/assets/cris-antes.jpg',
      depoisImg: '/assets/cris-depois.jpg',
    },
    {
      id: 5,
      patientName: 'Dione',
      antesImg: '/assets/dione-antes.jpg',
      depoisImg: '/assets/dione-depois.jpg',
    },
    {
      id: 6,
      patientName: 'Fernanda',
      antesImg: '/assets/fernanda-antes.jpg',
      depoisImg: '/assets/fernanda-depois.jpg',
    },
    {
      id: 7,
      patientName: 'Gizely',
      antesImg: '/assets/gizely-antes.jpg',
      depoisImg: '/assets/gizely-depois.jpg',
    },
    {
      id: 8,
      patientName: 'Guilcelia',
      antesImg: '/assets/guilcelia-antes.jpg',
      depoisImg: '/assets/guilcelia-depois.jpg',
    },
    {
      id: 9,
      patientName: 'Guilherme',
      antesImg: '/assets/guilherme-antes.jpg',
      depoisImg: '/assets/guilherme-depois.jpg',
    },
    {
      id: 10,
      patientName: 'Karoliny',
      antesImg: '/assets/karoliny-antes.jpg',
      depoisImg: '/assets/karoliny-depois.jpg',
    },
    {
      id: 11,
      patientName: 'Ketelyn',
      antesImg: '/assets/ketelyn-antes.jpg',
      depoisImg: '/assets/ketelyn-depois.jpg',
    },
    {
      id: 12,
      patientName: 'Maria',
      antesImg: '/assets/maria-antes.jpg',
      depoisImg: '/assets/maria-depois.jpg',
    },
    {
      id: 13,
      patientName: 'Naiara',
      antesImg: '/assets/naiara-antes.jpg',
      depoisImg: '/assets/naiara-depois.jpg',
    },
    {
      id: 14,
      patientName: 'Naldo',
      antesImg: '/assets/naldo-antes.jpg',
      depoisImg: '/assets/naldo-depois.jpg',
    },
    {
      id: 15,
      patientName: 'Rafaelli',
      antesImg: '/assets/rafaelli-antes.jpg',
      depoisImg: '/assets/rafaelli-depois.jpg',
    },
    {
      id: 16,
      patientName: 'Sharon',
      antesImg: '/assets/sharon-antes.jpg',
      depoisImg: '/assets/sharon-depois.jpg',
    },
    {
      id: 17,
      patientName: 'Sheila',
      antesImg: '/assets/sheila-antes.jpg',
      depoisImg: '/assets/sheila-depois.jpg',
    },
  ];

  // Responsiveness: 1.25 em telas muito pequenas, 1.45 no mobile, 2.3 em tablets e 3.25 em desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setCardsToShow(1.2);
      } else if (window.innerWidth < 640) {
        setCardsToShow(1.45);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2.3);
      } else {
        setCardsToShow(3.25);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, transformations.length - Math.floor(cardsToShow));

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="transformacoes" className="py-24 relative overflow-hidden bg-slate-100 border-b border-slate-200">
      
      {/* Background Radial Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Watermark Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5">
        <span className="text-[18vw] font-black uppercase text-blue-950 tracking-widest font-heading whitespace-nowrap">
          TRANSFORMAÇÃO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-200/60 border border-blue-300 text-blue-900 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span>Resultados Reais • Antes & Depois</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight">
            Galeria de <span className="text-blue-700">Antes & Depois</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Confira a evolução real de pacientes que transformaram sua saúde e qualidade de vida com o Dr. Wilson Paulo dos Santos.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-2 sm:px-10">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Anterior"
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-white/90 hover:bg-blue-700 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-700 shadow-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Próximo"
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-white/90 hover:bg-blue-700 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-700 shadow-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Carousel Track Wrapper with Touch Gesture support */}
          <div
            className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / ${cardsToShow})))`,
              }}
            >
              {transformations.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 bg-white rounded-3xl p-5 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group"
                  style={{
                    width: `calc((100% - ${(cardsToShow - 1) * 1.5}rem) / ${cardsToShow})`,
                  }}
                >
                  <div className="space-y-4">
                    
                    {/* Dark Frame Container for Before & After Images */}
                    <div className="bg-[#050f21] p-3 rounded-2xl border border-blue-900/80 shadow-lg">
                      
                      {/* Header Labels */}
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="py-1 text-center bg-[#091b3b] rounded-lg border border-blue-800/60 text-white font-heading font-extrabold text-xs tracking-wide">
                          Antes
                        </div>
                        <div className="py-1 text-center bg-blue-600 rounded-lg text-white font-heading font-extrabold text-xs tracking-wide">
                          Depois
                        </div>
                      </div>

                      {/* Split Photos */}
                      <div className="grid grid-cols-2 gap-2 relative rounded-xl overflow-hidden">
                        
                        {/* Antes Photo Frame */}
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10">
                          <img
                            src={item.antesImg}
                            alt={`Paciente ${item.patientName} Antes`}
                            className="w-full h-full object-cover object-center filter contrast-[1.05]"
                          />
                          <span className="absolute bottom-2 left-2 text-[10px] font-bold text-amber-300 bg-black/70 px-1.5 py-0.5 rounded backdrop-blur-sm">
                            Pré-Op
                          </span>
                        </div>

                        {/* Depois Photo Frame */}
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-blue-400/40">
                          <img
                            src={item.depoisImg}
                            alt={`Paciente ${item.patientName} Depois`}
                            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                      </div>

                      {/* Doctor Seal Watermark */}
                      <div className="mt-2.5 pt-2 border-t border-blue-900/60 flex items-center justify-center px-1">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                          <span className="font-signature text-base text-white">Dr. Wilson Paulo</span>
                        </div>
                      </div>

                    </div>

                    {/* Patient Summary Header */}
                    <div className="text-center pt-1">
                      <h3 className="text-base font-extrabold text-slate-900 font-heading">
                        {item.patientName}
                      </h3>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center items-center gap-2 pt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para a foto ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-blue-700'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

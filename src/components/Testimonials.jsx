import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3.2);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const transformations = [
    {
      id: 1,
      patientName: 'Brenda',
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

  // Responsiveness: 1.15 em telas muito pequenas, 1.35 no mobile, 2.2 em tablets e 3.2 em desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setCardsToShow(1.15);
      } else if (window.innerWidth < 640) {
        setCardsToShow(1.35);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2.2);
      } else {
        setCardsToShow(3.2);
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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5 select-none">
        <span className="text-[9vw] sm:text-[10vw] font-black uppercase text-blue-950 tracking-wider font-heading whitespace-nowrap">
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
                  className="shrink-0 bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                  style={{
                    width: `calc((100% - ${(cardsToShow - 1) * 1.5}rem) / ${cardsToShow})`,
                  }}
                >
                  <div className="space-y-3">
                    
                    {/* Split Photos Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      
                      {/* Antes Photo Frame */}
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                        <img
                          src={item.antesImg}
                          alt={`Paciente ${item.patientName} Antes`}
                          className="w-full h-full object-cover object-center filter contrast-[1.03]"
                        />
                        {/* Floating Antes Badge */}
                        <div className="absolute top-2 left-2">
                          <span className="text-[11px] font-extrabold uppercase tracking-wide text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-md inline-block">
                            Antes
                          </span>
                        </div>
                      </div>

                      {/* Depois Photo Frame */}
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-blue-50/50 border border-blue-200 shadow-sm">
                        <img
                          src={item.depoisImg}
                          alt={`Paciente ${item.patientName} Depois`}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Floating Depois Badge */}
                        <div className="absolute top-2 right-2">
                          <span className="text-[11px] font-extrabold uppercase tracking-wide text-white bg-blue-600/95 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-md border border-blue-400/40 inline-block">
                            Depois
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Patient Name */}
                    <div className="text-center pt-1 pb-1">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
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

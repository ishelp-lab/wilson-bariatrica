import React, { useState } from 'react';
import { Video, Play, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function VideoTestimonials() {
  const whatsappUrl = "https://wa.me/5541995245847?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20cirurgia%20bari%C3%A1trica%20com%20o%20Dr.%20Wilson%20Paulo%20dos%20Santos.";

  const videoTestimonials = [
    {
      id: 1,
      title: "Depoimento - Guilherme",
      patientName: "Guilherme",
      procedure: "Cirurgia Bariátrica",
      thumbnail: "",
      videoUrl: "/assets/videos/video-guilherme.mp4",
      quote: "Mudança completa de hábitos, saúde restaurada e mais disposição para a rotina diária."
    },
    {
      id: 2,
      title: "Depoimento - Kauana",
      patientName: "Kauana",
      procedure: "Bypass Gástrico",
      thumbnail: "",
      videoUrl: "/assets/videos/video-kauana.mp4",
      quote: "Recuperação muito tranquila com a técnica videolaparoscópica do Dr. Wilson."
    },
    {
      id: 3,
      title: "Depoimento - Larissa",
      patientName: "Larissa",
      procedure: "Sleeve Gástrico",
      thumbnail: "",
      videoUrl: "/assets/videos/video-larissa.mp4",
      quote: "Suporte completo da equipe e excelente qualidade de vida pós-procedimento."
    },
    {
      id: 4,
      title: "Depoimento - Luana",
      patientName: "Luana",
      procedure: "Cirurgia Bariátrica",
      thumbnail: "",
      videoUrl: "/assets/videos/video-luana.mp4",
      quote: "Transformação de vida com acompanhamento humanizado e total segurança."
    }
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="depoimentos-video" className="py-24 relative bg-[#040c18] border-b border-blue-950/80 text-white overflow-hidden">
      
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/90 border border-blue-800 text-sky-300 text-xs font-extrabold uppercase tracking-wider shadow-md">
            <Video className="w-4 h-4 text-sky-400" />
            <span>Depoimentos em Vídeo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight">
            Histórias Contadas por <span className="text-gradient-cyan">Pessoas Reais</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Assista aos relatos emocionantes de quem tomou a decisão de investir na própria saúde e transformar de vez a sua qualidade de vida.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTestimonials.map((item) => (
            <div
              key={item.id}
              className="glass-panel-navy rounded-3xl overflow-hidden border border-blue-800/60 hover:border-blue-400/60 shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Video / Player Container */}
                <div className="relative bg-slate-950 flex items-center justify-center min-h-[380px] sm:min-h-[440px] overflow-hidden">
                  {item.videoUrl ? (
                    item.videoUrl.endsWith('.mp4') ? (
                      <video
                        src={item.videoUrl}
                        controls
                        playsInline
                        preload="metadata"
                        poster={item.thumbnail || undefined}
                        className="w-full h-full max-h-[500px] object-contain"
                      />
                    ) : (
                      <iframe
                        src={item.videoUrl}
                        title={item.title}
                        className="w-full h-full border-0 aspect-video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-black/40 to-transparent" />
                      
                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setActiveVideo(item)}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white group"
                      >
                        <div className="w-16 h-16 rounded-full bg-blue-600/90 group-hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-600/40 group-hover:scale-110 transition-all border border-blue-300/40">
                          <Play className="w-7 h-7 fill-white translate-x-0.5" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                          Assistir Depoimento
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800">
                      {item.procedure}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.patientName}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading">
                    {item.title}
                  </h3>

                  <div className="flex items-start gap-2 pt-1 text-slate-300 text-xs italic bg-blue-950/40 p-3 rounded-xl border border-blue-900/50">
                    <MessageSquareQuote className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>"{item.quote}"</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 pb-5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-sky-300 text-xs font-bold border border-blue-800 hover:border-blue-500 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Quero ter resultados assim</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

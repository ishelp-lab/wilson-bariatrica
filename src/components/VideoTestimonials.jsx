import React, { useState } from 'react';
import { Video, Play, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function VideoTestimonials() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20cirurgia%20bari%C3%A1trica%20com%20o%20Dr.%20Wilson%20Paulo%20dos%20Santos.";

  // Lista de depoimentos em vídeo preparada para você inserir seus links de vídeo futuramente.
  // Pode usar URLs diretas do YouTube/Vimeo (com embed), reels ou arquivos de vídeo local/MP4.
  const videoTestimonials = [
    {
      id: 1,
      title: "Depoimento de Transformação #1",
      patientName: "Paciente Real",
      procedure: "Cirurgia Bariátrica",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      videoUrl: "", // Insira aqui a URL do seu vídeo embutido (ex: https://www.youtube.com/embed/SEU_VIDEO) ou caminho do mp4
      quote: "Mudança completa de hábitos, saúde restaurada e mais disposição para a rotina diária."
    },
    {
      id: 2,
      title: "Depoimento de Transformação #2",
      patientName: "Paciente Real",
      procedure: "Bypass Gástrico",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      videoUrl: "", // Insira aqui a URL do seu vídeo embutido
      quote: "Recuperação muito tranquila com a técnica videolaparoscópica do Dr. Wilson."
    },
    {
      id: 3,
      title: "Depoimento de Transformação #3",
      patientName: "Paciente Real",
      procedure: "Sleeve Gástrico",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      videoUrl: "", // Insira aqui a URL do seu vídeo embutido
      quote: "Suporte completo da equipe e excelente qualidade de vida pós-procedimento."
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((item) => (
            <div
              key={item.id}
              className="glass-panel-navy rounded-3xl overflow-hidden border border-blue-800/60 hover:border-blue-400/60 shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Video / Player Container */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  {item.videoUrl ? (
                    <iframe
                      src={item.videoUrl}
                      title={item.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
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
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800">
                      {item.procedure}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Paciente Real</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading">
                    {item.title}
                  </h3>

                  <div className="flex items-start gap-2 pt-1 text-slate-300 text-xs italic bg-blue-950/40 p-3 rounded-xl border border-blue-900/50">
                    <MessageSquareQuote className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>"{item.quote}"</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 pb-6 pt-2">
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

        {/* Helper Note for User */}
        <div className="mt-12 p-4 rounded-2xl bg-blue-950/40 border border-blue-900/60 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400">
            💡 <strong className="text-sky-300">Espaço preparado para vídeos:</strong> Os vídeos acima estão prontos para receber seus arquivos MP4 ou links incorporados do YouTube/Vimeo/Reels.
          </p>
        </div>

      </div>
    </section>
  );
}

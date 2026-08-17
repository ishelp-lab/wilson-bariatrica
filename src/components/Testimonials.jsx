import React, { useState } from 'react';
import { Star, MessageSquare, ArrowRight, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);

  // Transformations inspired by Instagram Post #1
  const transformations = [
    {
      id: 1,
      patientName: 'Paula Ramos',
      age: '34 anos',
      procedure: 'Bypass Gástrico por Videolaparoscopia',
      weightLoss: '-46 kg',
      timeframe: '12 meses',
      healthGains: 'Remissão total do Diabetes Tipo 2 e Hipertensão',
      antesImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
      testimonial: 'A cirurgia com o Dr. Wilson resgatou minha dignidade e saúde. Eu vivia refém de remédios e sem energia. Hoje me sinto leve, disposta e com exames perfeitos.',
    },
    {
      id: 2,
      patientName: 'Marcelo Oliveira',
      age: '42 anos',
      procedure: 'Sleeve Gástrico (Protocolo ERAS)',
      weightLoss: '-39 kg',
      timeframe: '9 meses',
      healthGains: 'Cura da Apneia do Sono & Alívio de Dores Articulares',
      antesImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
      testimonial: 'Operar por videolaparoscopia com furos milimétricos facilitou muito minha recuperação. Em 24 horas já estava em casa. Voltei a correr e praticar esportes com meus filhos.',
    },
    {
      id: 3,
      patientName: 'Camila Santos',
      age: '38 anos',
      procedure: 'Cirurgia Bariátrica & Correção de Diástase',
      weightLoss: '-41 kg',
      timeframe: '10 meses',
      healthGains: 'Restauração da Autoestima & Tônus Abdominal',
      antesImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      testimonial: 'O acompanhamento da equipe multidisciplinar do Dr. Wilson faz toda diferença. Tive suporte nutricional e psicológico contínuo durante todas as fases.',
    },
  ];

  const current = transformations[activeTab];

  return (
    <section id="transformacoes" className="py-24 relative overflow-hidden bg-slate-100 border-b border-slate-200">
      
      {/* Background Subtle Radial Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Watermark Background Text (Inspired by Instagram Post 4) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5">
        <span className="text-[18vw] font-black uppercase text-blue-950 tracking-widest font-heading whitespace-nowrap">
          TRANSFORMAÇÃO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-200/60 border border-blue-300 text-blue-900 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span>Casos Reais • Antes & Depois</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight">
            Histórias de <span className="text-blue-700">Superação & Saúde</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Inspire-se com os resultados de pacientes que passaram pelo protocolo cirúrgico do Dr. Wilson Paulo dos Santos.
          </p>
        </div>

        {/* Instagram Post #1 Inspired Main Showcase Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Before & After Split Image Frame (Matching Instagram Image 1) */}
            <div className="lg:col-span-7 relative">
              <div className="bg-[#050f21] p-3 sm:p-4 rounded-2xl border border-blue-900/80 shadow-2xl">
                
                {/* Header Labels (Antes & Depois) */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="py-2 text-center bg-[#091b3b] rounded-xl border border-blue-800/60 text-white font-heading font-extrabold text-lg sm:text-xl tracking-wide shadow-md">
                    Antes
                  </div>
                  <div className="py-2 text-center bg-blue-600 rounded-xl text-white font-heading font-extrabold text-lg sm:text-xl tracking-wide shadow-md">
                    Depois
                  </div>
                </div>

                {/* Split Photos */}
                <div className="grid grid-cols-2 gap-3 relative rounded-xl overflow-hidden">
                  
                  {/* Antes Photo Frame */}
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 group">
                    <img
                      src={current.antesImg}
                      alt={`Paciente ${current.patientName} Antes da Cirurgia`}
                      className="w-full h-full object-cover object-center filter contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 text-[11px] font-bold text-amber-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      Pré-Operatório
                    </span>
                  </div>

                  {/* Depois Photo Frame */}
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-blue-400/40 group">
                    <img
                      src={current.depoisImg}
                      alt={`Paciente ${current.patientName} Depois da Cirurgia`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 right-2.5 text-[11px] font-bold text-sky-200 bg-blue-600/80 px-2 py-0.5 rounded backdrop-blur-sm shadow-md">
                      {current.weightLoss} • {current.timeframe}
                    </span>
                  </div>

                </div>

                {/* Dr. Wilson Footer Logo Watermark (Matching Instagram Image 1 bottom watermark) */}
                <div className="mt-4 pt-3 border-t border-blue-900/60 flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/30 flex items-center justify-center text-sky-300">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="font-signature text-xl text-white">Dr. Wilson Paulo dos Santos</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-blue-300 uppercase tracking-widest">
                    Cirurgia Bariátrica
                  </span>
                </div>

              </div>
            </div>

            {/* Right Side: Details & Testimonial Text */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold mb-3">
                  {current.procedure}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {current.patientName} <span className="text-sm font-normal text-slate-500">({current.age})</span>
                </h3>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Eliminação de Peso</span>
                  <span className="text-2xl font-extrabold font-heading text-blue-700">{current.weightLoss}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Tempo de Evolução</span>
                  <span className="text-2xl font-extrabold font-heading text-slate-900">{current.timeframe}</span>
                </div>
              </div>

              {/* Health Gains Pill */}
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block">
                  Ganho Metabólico de Saúde
                </span>
                <p className="text-sm font-semibold text-slate-800">
                  {current.healthGains}
                </p>
              </div>

              {/* Patient Quote */}
              <p className="text-slate-700 text-sm leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-slate-200">
                "{current.testimonial}"
              </p>

              {/* Tab Selector Controls */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Caso {activeTab + 1} de {transformations.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab((prev) => (prev === 0 ? transformations.length - 1 : prev - 1))}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 transition-colors"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setActiveTab((prev) => (prev === transformations.length - 1 ? 0 : prev + 1))}
                    className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-colors"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

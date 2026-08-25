import React, { useState } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('all');

  const transformations = [
    {
      id: 1,
      patientName: 'Paula Ramos',
      age: '34 anos',
      category: 'bypass',
      procedure: 'Bypass Gástrico',
      weightLoss: '-46 kg',
      timeframe: '12 meses',
      antesImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      patientName: 'Marcelo Oliveira',
      age: '42 anos',
      category: 'sleeve',
      procedure: 'Sleeve Gástrico',
      weightLoss: '-39 kg',
      timeframe: '9 meses',
      antesImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      patientName: 'Camila Santos',
      age: '38 anos',
      category: 'bypass',
      procedure: 'Bypass Gástrico',
      weightLoss: '-41 kg',
      timeframe: '10 meses',
      antesImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      patientName: 'Rodrigo Mendonça',
      age: '45 anos',
      category: 'sleeve',
      procedure: 'Sleeve Gástrico',
      weightLoss: '-52 kg',
      timeframe: '14 meses',
      antesImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      patientName: 'Juliana Ferreira',
      age: '31 anos',
      category: 'bypass',
      procedure: 'Bypass Gástrico',
      weightLoss: '-37 kg',
      timeframe: '8 meses',
      antesImg: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      patientName: 'Eduardo Costa',
      age: '39 anos',
      category: 'sleeve',
      procedure: 'Sleeve Gástrico',
      weightLoss: '-48 kg',
      timeframe: '11 meses',
      antesImg: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 7,
      patientName: 'Mariana Lima',
      age: '36 anos',
      category: 'bypass',
      procedure: 'Bypass Gástrico',
      weightLoss: '-44 kg',
      timeframe: '13 meses',
      antesImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 8,
      patientName: 'Lucas Rocha',
      age: '41 anos',
      category: 'sleeve',
      procedure: 'Sleeve Gástrico',
      weightLoss: '-40 kg',
      timeframe: '9 meses',
      antesImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 9,
      patientName: 'Fernanda Alves',
      age: '33 anos',
      category: 'bypass',
      procedure: 'Bypass Gástrico',
      weightLoss: '-45 kg',
      timeframe: '12 meses',
      antesImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      depoisImg: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const filteredTransformations = activeTab === 'all'
    ? transformations
    : transformations.filter(item => item.category === activeTab);

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

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Todos os Casos (9)
            </button>
            <button
              onClick={() => setActiveTab('bypass')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'bypass'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Bypass Gástrico
            </button>
            <button
              onClick={() => setActiveTab('sleeve')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'sleeve'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Sleeve Gástrico
            </button>
          </div>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTransformations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group"
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
                      <span className="absolute bottom-2 right-2 text-[10px] font-bold text-sky-100 bg-blue-600/90 px-1.5 py-0.5 rounded backdrop-blur-sm shadow-sm">
                        {item.weightLoss}
                      </span>
                    </div>

                  </div>

                  {/* Doctor Seal Watermark */}
                  <div className="mt-2.5 pt-2 border-t border-blue-900/60 flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                      <span className="font-signature text-base text-white">Dr. Wilson Paulo</span>
                    </div>
                    <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider">
                      {item.timeframe}
                    </span>
                  </div>

                </div>

                {/* Patient Summary Header */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 font-heading">
                      {item.patientName} <span className="text-xs font-normal text-slate-500">({item.age})</span>
                    </h3>
                    <p className="text-xs font-semibold text-blue-700 mt-0.5">
                      {item.procedure}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black font-heading text-blue-700 block leading-none">
                      {item.weightLoss}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400 block mt-0.5">
                      {item.timeframe}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

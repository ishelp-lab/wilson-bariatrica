import React from 'react';
import { ShieldCheck, Sparkles, Quote, Award } from 'lucide-react';

export default function Testimonials() {
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
      testimonial: 'Operar por videolaparoscopia com furos milimétricos facilitou muito minha recuperação. Em 24 horas já estava em casa. Voltei a praticar esportes com meus filhos.',
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

  return (
    <section id="transformacoes" className="py-24 relative overflow-hidden bg-slate-100 border-b border-slate-200">
      
      {/* Background Subtle Radial Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Watermark Background Text */}
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
            Confira a evolução real e o ganho de qualidade de vida de pacientes tratados pelo Dr. Wilson Paulo dos Santos.
          </p>
        </div>

        {/* Grid Displaying All 3 Transformation Cards Simultaneously */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="space-y-5">
                
                {/* Dark Frame Container for Before & After Images */}
                <div className="bg-[#050f21] p-3 rounded-2xl border border-blue-900/80 shadow-lg">
                  
                  {/* Header Labels (Antes & Depois) */}
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="py-1.5 text-center bg-[#091b3b] rounded-lg border border-blue-800/60 text-white font-heading font-extrabold text-xs sm:text-sm tracking-wide">
                      Antes
                    </div>
                    <div className="py-1.5 text-center bg-blue-600 rounded-lg text-white font-heading font-extrabold text-xs sm:text-sm tracking-wide">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
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
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2 right-2 text-[10px] font-bold text-sky-100 bg-blue-600/90 px-1.5 py-0.5 rounded backdrop-blur-sm shadow-sm">
                        {item.weightLoss}
                      </span>
                    </div>

                  </div>

                  {/* Doctor Seal Watermark */}
                  <div className="mt-3 pt-2 border-t border-blue-900/60 flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                      <span className="font-signature text-base text-white">Dr. Wilson Paulo</span>
                    </div>
                    <span className="text-[9px] font-bold text-sky-300 uppercase tracking-wider">
                      {item.timeframe}
                    </span>
                  </div>

                </div>

                {/* Patient Information Header */}
                <div>
                  <span className="inline-block text-[11px] font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 mb-2">
                    {item.procedure}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                    {item.patientName} <span className="text-xs font-normal text-slate-500">({item.age})</span>
                  </h3>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Perda de Peso</span>
                    <span className="text-lg font-extrabold font-heading text-blue-700">{item.weightLoss}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Tempo de Evolução</span>
                    <span className="text-lg font-extrabold font-heading text-slate-900">{item.timeframe}</span>
                  </div>
                </div>

                {/* Metabolic Health Benefit */}
                <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-800 text-[10px] font-bold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-blue-700" />
                    <span>Ganho de Saúde</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800">
                    {item.healthGains}
                  </p>
                </div>

                {/* Patient Quote */}
                <div className="relative pt-2">
                  <Quote className="w-6 h-6 text-blue-200 absolute -top-1 left-0 opacity-40 pointer-events-none" />
                  <p className="text-slate-600 text-xs leading-relaxed italic bg-slate-50/80 p-3 rounded-xl border border-slate-200/80 pl-6">
                    "{item.testimonial}"
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


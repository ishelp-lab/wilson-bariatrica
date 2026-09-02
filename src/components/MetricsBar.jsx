import React from 'react';
import { Activity, Award, HeartHandshake, Zap } from 'lucide-react';

export default function MetricsBar() {
  const metrics = [
    {
      icon: Activity,
      value: '+15.000',
      label: 'Cirurgias Realizadas',
      sublabel: 'Videolaparoscopia avançada 3D',
    },
    {
      icon: Award,
      value: '30+ Anos',
      label: 'Experiência Médica',
      sublabel: 'Membro Titular SBCBM & IFSO',
    },
    {
      icon: HeartHandshake,
      value: '99,4%',
      label: 'Satisfação dos Pacientes',
      sublabel: 'Acompanhamento continuado 360°',
    },
    {
      icon: Zap,
      value: 'Protocolo ERAS',
      label: 'Recuperação Acelerada',
      sublabel: 'Alta hospitalar em 48h',
    },
  ];

  return (
    <section className="py-10 relative z-20 bg-[#040c18] border-b border-blue-950/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-blue-950/40 border border-blue-800/40 hover:border-blue-500/50 hover:bg-blue-900/30 transition-all duration-300 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left group backdrop-blur-sm shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-heading text-white tracking-tight">
                    {metric.value}
                  </div>
                  <h3 className="text-xs font-bold text-sky-300 uppercase tracking-wider mt-0.5">{metric.label}</h3>
                  <p className="text-[11px] text-slate-300 mt-0.5 font-medium">{metric.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

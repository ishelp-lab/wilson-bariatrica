import React from 'react';
import { Activity, Award, HeartHandshake, Zap } from 'lucide-react';

export default function MetricsBar() {
  const metrics = [
    {
      icon: Activity,
      value: '+3.500',
      label: 'Cirurgias Realizadas',
      sublabel: 'Videolaparoscopia avançada 3D',
    },
    {
      icon: Award,
      value: '15+ Anos',
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
      sublabel: 'Alta hospitalar em 24h a 48h',
    },
  ];

  return (
    <section className="py-14 relative z-20 bg-white border-b border-slate-200 shadow-sm text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left group"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                    {metric.value}
                  </div>
                  <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-0.5">{metric.label}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{metric.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

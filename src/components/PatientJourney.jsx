import React from 'react';
import { CalendarCheck, FileCheck, Stethoscope, HeartPulse, ArrowRight } from 'lucide-react';

export default function PatientJourney() {
  const steps = [
    {
      num: '01',
      icon: CalendarCheck,
      title: 'Consulta Inicial & Diagnóstico',
      desc: 'Atendimento presencial em São Paulo ou via Telemedicina para todo o Brasil. Avaliação minuciosa do seu histórico e metas de saúde.',
    },
    {
      num: '02',
      icon: FileCheck,
      title: 'Avaliação Multidisciplinar & Exames',
      desc: 'Preparo completo com endocrinologista, nutricionista e psicólogo. Solicitação e checagem de exames pré-operatórios de segurança.',
    },
    {
      num: '03',
      icon: Stethoscope,
      title: 'Cirurgia Minimamente Invasiva',
      desc: 'Procedimento por videolaparoscopia 3D em hospital de referência. Internação rápida de 24h a 48h com protocolo ERAS de recuperação.',
    },
    {
      num: '04',
      icon: HeartPulse,
      title: 'Acompanhamento Pós & Nova Vida',
      desc: 'Suporte continuado da equipe multidisciplinar para acompanhamento da perda de peso, remissão de exames e resgate da vitalidade.',
    },
  ];

  return (
    <section id="jornada" className="py-24 relative overflow-hidden bg-section-emerald-tint border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider shadow-lg">
            <HeartPulse className="w-4 h-4 text-teal-400" />
            <span>Como Funciona o Tratamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Sua Jornada em <span className="text-gradient-teal">4 Passos Claros</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Acompanhamos você antes, durante e após o procedimento com total segurança e transparência.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl glass-panel border border-slate-800 relative space-y-6 flex flex-col justify-between group hover:border-teal-500/50 bg-slate-900/90 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold font-heading text-slate-700 group-hover:text-teal-400/40 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-teal-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-teal-400">
                  <span>Passo {idx + 1} de 4</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl glass-panel border border-teal-500/40 bg-gradient-to-r from-slate-900 via-teal-950/60 to-slate-900 text-center max-w-4xl mx-auto space-y-4 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Pronto para dar o primeiro passo rumo à sua transformação?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Nossa equipe médica está pronta para tirar dúvidas sobre convênios, consultas presenciais ou telemedicina.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20dar%20o%20primeiro%20passo%20e%20agendar%20uma%20consulta%20com%20o%20Dr.%20Wilson."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-base shadow-xl shadow-teal-500/30 hover:-translate-y-0.5 transition-all"
            >
              <span>Iniciar Atendimento no WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { CalendarCheck, FileCheck, Stethoscope, HeartPulse, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function PatientJourney() {
  const steps = [
    {
      num: '01',
      icon: CalendarCheck,
      title: 'Consulta Inicial & Diagnóstico',
      tag: 'Acolhimento Humanizado',
      desc: 'Atendimento presencial em São Paulo ou via Telemedicina para todo o Brasil. Avaliação minuciosa do seu histórico de saúde, hábitos e objetivos.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
      badgeText: 'Presencial ou Online',
      keyPoint: 'Escuta atenta e plano personalizado',
    },
    {
      num: '02',
      icon: FileCheck,
      title: 'Avaliação Multidisciplinar',
      tag: 'Preparo Seguro 360°',
      desc: 'Acompanhamento integrado com endocrinologista, nutricionista e psicólogo, aliado aos exames pré-operatórios de segurança.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      badgeText: 'Suporte Completo',
      keyPoint: 'Nutrição, Psicologia & Cardiologia',
    },
    {
      num: '03',
      icon: Stethoscope,
      title: 'Cirurgia Minimamente Invasiva',
      tag: 'Videolaparoscopia 3D',
      desc: 'Procedimento cirúrgico preciso em hospital de referência em São Paulo. Furos milimétricos com alta hospitalar em 24h a 48h pelo Protocolo ERAS.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
      badgeText: 'Alta em 24h a 48h',
      keyPoint: 'Hospitais de Excelência em SP',
    },
    {
      num: '04',
      icon: HeartPulse,
      title: 'Acompanhamento Pós & Nova Vida',
      tag: 'Saúde Continuada',
      desc: 'Acompanhamento continuado por anos para garantir perda de peso saudável, manutenção de resultados e remissão de exames.',
      image: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=800',
      badgeText: 'Suporte para Toda Vida',
      keyPoint: 'Liberte-se com vitalidade e energia',
    },
  ];

  return (
    <section id="jornada" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <HeartPulse className="w-4 h-4 text-blue-700" />
            <span>Como Funciona o Tratamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Sua Jornada em <span className="text-blue-700">4 Passos Claros</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Conheça o caminho de transformação planejado com máxima segurança, acompanhamento humano e rigor científico.
          </p>
        </div>

        {/* Timeline Photo Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
              >
                <div>
                  {/* Photo Header Container with Gradient Overlay */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/30" />

                    {/* Step Number Pill */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-xl bg-blue-600/90 backdrop-blur-md border border-white/20 text-white font-extrabold text-xs font-heading shadow-md flex items-center gap-1.5">
                      <span className="text-sky-200 text-[10px]">PASSO</span>
                      <span>{step.num}</span>
                    </div>

                    {/* Icon Badge Top-Right */}
                    <div className="absolute top-3.5 right-3.5 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 flex items-center justify-center text-blue-700 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Image Footer Tag */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-sky-100 bg-slate-900/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                        {step.badgeText}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-2 border border-blue-100">
                        {step.tag}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{step.keyPoint}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Bar */}
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                  <span className="text-slate-500 font-medium text-[11px]">Etapa {idx + 1} de 4</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Humanized Call to Action Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/50 border border-slate-200/90 text-center max-w-4xl mx-auto space-y-6 shadow-xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Atendimento Humanizado & Personalizado</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Pronto para iniciar sua jornada de saúde com quem é especialista?
          </h3>
          
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
            Nossa equipe médica está pronta para acolher você, tirar dúvidas sobre convênios médicos, exames pré-operatórios e agendamento.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20dar%20o%20primeiro%20passo%20e%20agendar%20uma%20consulta%20com%20o%20Dr.%20Wilson."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 transition-all border border-blue-400/30"
            >
              <span>Iniciar Atendimento no WhatsApp</span>
              <ArrowRight className="w-5 h-5 text-sky-200" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}


import React from 'react';
import { Video, Zap, Users, Hospital, PhoneCall, ShieldCheck } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: Video,
      title: 'Videolaparoscopia 3D Minimamente Invasiva',
      desc: 'Tecnologia cirúrgica de ponta com incisões milimétricas de 5mm, sem necessidade de cortes grandes, reduzindo sangramentos.',
      tag: 'Precisão Cirúrgica',
    },
    {
      icon: Zap,
      title: 'Protocolo ERAS de Recuperação Acelerada',
      desc: 'Metodologia internacional que reduz dores pós-operatórias, descontinua o uso prolongado de soros e acelera a alta hospitalar em 24h a 48h.',
      tag: 'Alta Segura em 24h',
    },
    {
      icon: Users,
      title: 'Equipe Multidisciplinar 360° Dedicada',
      desc: 'Acompanhamento nutricional, psicológico e endocrinológico integrado antes, durante e no pós-operatório continuado por anos.',
      tag: 'Suporte Integral',
    },
    {
      icon: Hospital,
      title: 'Hospitais de Excelência em São Paulo',
      desc: 'Cirurgias realizadas exclusivamente em centros hospitalares de ponta com acreditação internacional e leitos de UTI de alta tecnologia.',
      tag: 'Segurança Máxima',
    },
    {
      icon: PhoneCall,
      title: 'Canal Direct 24/7 com Equipe Médica',
      desc: 'Comunicação direta para tirar dúvidas pós-operatórias rápidas e oferecer assistência continuada para sua total tranquilidade.',
      tag: 'Tranquilidade Total',
    },
    {
      icon: ShieldCheck,
      title: 'Transparência Ética & Suporte a Convênios',
      desc: 'Orientação completa para solicitação de coberturas junto aos planos de saúde (ANS) e clareza absoluta em cada fase.',
      tag: 'Compromisso com Você',
    },
  ];

  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-[#07152b] border-b border-blue-950/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-navy border-blue-500/40 text-sky-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Zap className="w-4 h-4 text-sky-400" />
            <span>Por que Escolher o Dr. Wilson</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Diferenciais de <span className="text-gradient-cyan">Segurança & Excelência</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Combinamos inovação científica, cirurgias minimamente invasivas e atenção humanizada para garantir uma jornada cirúrgica tranquila.
          </p>
        </div>

        {/* Differentials Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#081c3c] border border-blue-800/60 glass-card-hover space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-sky-300 bg-blue-950 px-3 py-1 rounded-full border border-blue-700/60">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

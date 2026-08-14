import React from 'react';
import { CheckCircle, GraduationCap, Stethoscope, Shield } from 'lucide-react';

export default function AboutDoctor() {
  const credentials = [
    {
      title: 'Membro Titular SBCBM',
      desc: 'Sociedade Brasileira de Cirurgia Bariátrica e Metabólica',
    },
    {
      title: 'Membro Internacional IFSO',
      desc: 'International Federation for the Surgery of Obesity',
    },
    {
      title: 'Registro RQE Ativo',
      desc: 'Qualificação de Especialista Cirúrgico (RQE 78.432 / CRM-SP 145.890)',
    },
    {
      title: 'Videolaparoscopia 3D Avançada',
      desc: 'Técnica com incisões de 5mm para rápida recuperação estética',
    },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-section-darker border-b border-slate-800">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-teal-400" />
            <span>Sobre o Cirurgião</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
            Conheça o <span className="text-gradient-teal">Dr. Wilson Paulo dos Santos</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Excelência técnica em Cirurgia Bariátrica e Metabólica por videolaparoscopia com rigores científicos internacionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Doctor Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-3xl opacity-20 blur-xl pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden glass-card border border-slate-700/80 shadow-2xl">
                <img
                  src="/assets/dr-wilson-about.png"
                  alt="Dr. Wilson Paulo dos Santos em atendimento cirúrgico"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                <div className="p-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold text-base">Dr. Wilson Paulo dos Santos</h4>
                      <p className="text-xs text-teal-400 font-medium">Cirurgia Bariátrica, Metabólica & Geral</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl p-4 border border-teal-500/40 shadow-xl hidden sm:flex items-center gap-3">
                <Shield className="w-8 h-8 text-teal-400" />
                <div>
                  <p className="text-xs text-slate-400 font-medium">Registro Profissional</p>
                  <p className="text-sm font-bold text-white">CRM-SP 145.890 / RQE 78.432</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bio & Credentials Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Cuidado Humanizado Unido à Tecnologia Cirúrgica 3D
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              O **Dr. Wilson Paulo dos Santos** atua há mais de 15 anos oferecendo aos seus pacientes uma abordagem integrada no tratamento cirúrgico da obesidade grave e doenças metabólicas. Sua filosofia se baseia no atendimento empático, seguro e sem julgamentos.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A cirurgia bariátrica é enxergada como um recomeço na qualidade de vida. Nossa estrutura conta com equipe multidisciplinar completa (cirurgião, nutricionista, endocrinologista e psicólogo) para acompanhamento pré e pós-operatório continuado.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {credentials.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl glass-card border border-slate-800 flex items-start gap-3 hover:border-teal-500/40 transition-colors">
                  <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

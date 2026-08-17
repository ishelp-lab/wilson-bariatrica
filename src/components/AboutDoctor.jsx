import React from 'react';
import { CheckCircle, GraduationCap, Stethoscope, Shield, Award } from 'lucide-react';

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
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#040c18] border-b border-blue-950/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Watermark Text */}
      <div className="absolute top-10 right-0 pointer-events-none opacity-5 overflow-hidden">
        <span className="text-[16vw] font-black uppercase text-white tracking-widest font-heading">
          MEDICINA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-navy border-blue-500/40 text-sky-300 text-xs font-extrabold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-sky-400" />
            <span>Sobre o Cirurgião</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
            Conheça o <span className="font-signature text-4xl sm:text-6xl text-sky-300 font-normal">Dr. Wilson Paulo dos Santos</span>
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
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl opacity-30 blur-xl pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden glass-panel-navy border border-blue-700/60 shadow-2xl">
                <img
                  src="/assets/dr-wilson-about.png"
                  alt="Dr. Wilson Paulo dos Santos em atendimento cirúrgico"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                <div className="p-6 bg-[#07162e] border-t border-blue-900/80">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-signature text-2xl text-white leading-none">Dr. Wilson Paulo dos Santos</h4>
                      <p className="text-xs text-sky-300 font-medium uppercase tracking-wider mt-1">Cirurgia Bariátrica & Metabólica</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute -bottom-6 -right-6 glass-panel-navy rounded-2xl p-4 border border-blue-400/40 shadow-xl hidden sm:flex items-center gap-3">
                <Shield className="w-8 h-8 text-sky-400" />
                <div>
                  <p className="text-xs text-slate-300 font-medium">Registro Profissional</p>
                  <p className="text-sm font-bold text-white">CRM-SP 145.890 / RQE 78.432</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bio & Credentials Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Instagram Style Sub-heading */}
            <div className="p-5 rounded-2xl bg-[#07162e] border border-blue-800/60 space-y-2">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
                Filosofia Cirúrgica
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                CUIDAR DA OBESIDADE É CUIDAR DA SUA SAÚDE.
              </h3>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              O <strong className="text-sky-300">Dr. Wilson Paulo dos Santos</strong> possui uma trajetória marcada pelo aperfeiçoamento constante e foco na segurança do paciente. Cada indivíduo possui uma história única e um tratamento cirúrgico individualizado.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Com o uso de tecnologia por videolaparoscopia 3D e o **Protocolo ERAS de Recuperação Acelerada**, os procedimentos são realizados através de pequenas incisões milimétricas, proporcionando menor dor pós-operatória e alta hospitalar precoce em 24h a 48h.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {credentials.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#081b38] border border-blue-900/80 flex items-start gap-3 hover:border-blue-500/50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5">{item.desc}</p>
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

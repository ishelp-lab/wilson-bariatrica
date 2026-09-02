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
      desc: 'Cirurgião Geral (RQE 12317 / RQE 12005 / CRM-PR 14.204)',
    },
    {
      title: 'Videolaparoscopia 3D Avançada',
      desc: 'Técnica com incisões de 5mm para rápida recuperação estética',
    },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Watermark Text */}
      <div className="absolute top-2 sm:top-4 inset-x-0 flex justify-center items-center pointer-events-none opacity-5 overflow-hidden select-none">
        <span className="text-[12vw] sm:text-[14vw] lg:text-[15vw] font-black uppercase text-blue-900 tracking-tight font-heading whitespace-nowrap leading-none">
          BARIÁTRICA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <GraduationCap className="w-4 h-4 text-blue-700" />
            <span>Sobre o Cirurgião</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight">
            Conheça o <span className="font-signature text-4xl sm:text-6xl text-blue-700 font-normal">Dr. Wilson Paulo dos Santos</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Excelência técnica em Cirurgia Bariátrica e Metabólica por videolaparoscopia com rigores científicos internacionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Doctor Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-3xl opacity-20 blur-xl pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[520px]">
                <img
                  src="/assets/dr-wilson-jaleco.jpg"
                  alt="Dr. Wilson Paulo dos Santos"
                  className="w-full h-full object-cover object-[center_25%] transform hover:scale-105 transition-transform duration-700"
                />
                
                <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800">
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
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 border border-blue-200 shadow-xl hidden sm:flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Registro Profissional</p>
                  <p className="text-sm font-bold text-slate-900">CRM-PR 14.204 / RQE 12317</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bio & Credentials Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Instagram Style Sub-heading */}
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                Filosofia Cirúrgica
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                CUIDAR DA OBESIDADE É CUIDAR DA SUA SAÚDE.
              </h3>
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              O <strong className="text-blue-900">Dr. Wilson Paulo dos Santos</strong> possui uma trajetória marcada pelo aperfeiçoamento constante e foco na segurança do paciente. Cada indivíduo possui uma história única e um tratamento cirúrgico individualizado.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Com o uso de tecnologia por videolaparoscopia 3D e o **Protocolo ERAS de Recuperação Acelerada**, os procedimentos são realizados através de pequenas incisões milimétricas, proporcionando menor dor pós-operatória e alta hospitalar precoce em 48h.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {credentials.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 hover:border-blue-300 transition-colors">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
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

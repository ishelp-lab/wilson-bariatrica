import React from 'react';
import { ShieldCheck, Award, Calendar, Calculator, CheckCircle2, Star, ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20cirurgia%20bari%C3%A1trica%20com%20o%20Dr.%20Wilson%20Paulo%20dos%20Santos.";

  return (
    <section id="inicio" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-section-darker overflow-hidden border-b border-slate-800/80">
      
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-teal-500/10 hover:border-teal-400/60 transition-all cursor-pointer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            <Award className="w-4 h-4 text-teal-400" />
            <span>Dr. Wilson Paulo dos Santos • Cirurgia Bariátrica & Metabólica</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-[1.1] tracking-tight">
              Recupere sua Saúde e Vitalidade com a <span className="text-gradient-teal">Bariátrica de Alta Precisão.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tratamento metabólico minimamente invasivo por videolaparoscopia com o Dr. Wilson Paulo dos Santos. Controle definitivo do peso, remissão de doenças crônicas e suporte multidisciplinar continuado.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-base shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Calendar className="w-5 h-5 text-teal-100 group-hover:scale-110 transition-transform" />
                <span>Agendar Avaliação no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-teal-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#calculadora"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4.5 rounded-2xl glass-card hover:bg-slate-800/90 text-slate-200 hover:text-teal-300 font-semibold text-base border border-slate-700/80 hover:border-teal-500/50 transition-all hover:-translate-y-0.5"
              >
                <Calculator className="w-5 h-5 text-teal-400" />
                <span>Calcular meu IMC Interativo</span>
              </a>
            </div>

            {/* Trust List Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Sem filas de espera</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Telemedicina para todo Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Equipe Multidisciplinar 360°</span>
              </div>
            </div>

            {/* Medical Credentials Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
                CRM-SP 145.890
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
                RQE 78.432
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-teal-500/30 text-xs font-semibold text-teal-300">
                Titular SBCBM & IFSO
              </span>
            </div>

          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-teal-500/30 via-emerald-500/20 to-teal-400/30 rounded-3xl opacity-60 blur-xl animate-pulse-slow pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden glass-card border border-slate-700/80 shadow-2xl bg-gradient-to-b from-slate-900 to-slate-950">
                <img
                  src="/assets/dr-wilson-hero.png"
                  alt="Dr. Wilson Paulo dos Santos - Cirurgião Bariátrico e Metabólico"
                  className="w-full h-auto object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-2xl border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <p className="text-white font-heading font-bold text-base sm:text-lg">Dr. Wilson Paulo dos Santos</p>
                    <p className="text-xs text-teal-400 font-medium">Cirurgião Bariátrico & Metabólico</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating Metric Badge 1 (Top Right) */}
              <div className="absolute -top-6 -right-4 sm:-right-6 glass-panel rounded-2xl p-4 shadow-2xl border border-teal-500/40 flex items-center gap-3.5 animate-float-slow hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-white">+3.500</div>
                  <div className="text-xs text-slate-400 font-medium">Cirurgias Realizadas</div>
                </div>
              </div>

              {/* Floating Metric Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-panel rounded-2xl p-4 shadow-2xl border border-amber-500/40 flex items-center gap-3.5 animate-float-delayed hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Star className="w-6 h-6 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-amber-400">99,4%</div>
                  <div className="text-xs text-slate-400 font-medium">Satisfação dos Pacientes</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

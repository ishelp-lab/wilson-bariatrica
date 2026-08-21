import React from 'react';
import { ShieldCheck, Award, Calendar, Calculator, CheckCircle2, Star, ArrowRight, Shield } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20cirurgia%20bari%C3%A1trica%20com%20o%20Dr.%20Wilson%20Paulo%20dos%20Santos.";

  return (
    <section id="inicio" className="relative pt-8 pb-24 md:pt-12 md:pb-36 bg-[#040c18] overflow-hidden border-b border-blue-950/80">
      
      {/* Radial Blue Glows (Instagram Accent Lighting) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Background Ascending Arrow Vector (Inspired by Instagram Image 3) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg className="w-full h-full text-blue-500/30" viewBox="0 0 1000 600" fill="none">
          <path
            d="M 50 500 L 250 450 L 400 350 L 600 380 L 900 100"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 820 100 L 900 100 L 900 180"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Grid Mesh Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Native Brand Logo Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-blue-900/30">
          <BrandLogo variant="white" className="scale-125 sm:scale-135 md:scale-150 origin-center sm:origin-left py-2 sm:py-0" />
          
          <div className="flex items-center gap-4">
            {/* Rating / Trust pill */}
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-amber-500/30 text-xs text-slate-200">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-amber-300">4.9/5</span>
              <span className="text-slate-400">| +500 avaliações</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all border border-blue-400/30"
            >
              <Calendar className="w-4 h-4 text-sky-200" />
              <span>Agendar Consulta</span>
            </a>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Headline (Inspired directly by Instagram Posts 3, 4 & 5) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-[1.08] tracking-tight">
              EMAGRECER <span className="underline decoration-blue-500 decoration-4 underline-offset-8">NÃO É</span> <span className="text-gradient-cyan">SÓ PERDER PESO.</span>
            </h1>

            {/* Fluid Subtext under Headline */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
              O objetivo principal da Cirurgia Bariátrica é proporcionar <strong className="text-white font-semibold">mais saúde, autonomia e qualidade de vida</strong>. Procedimentos modernos por videolaparoscopia com o <strong className="text-sky-300 font-semibold">Dr. Wilson Paulo dos Santos</strong>.
            </p>

            {/* CTA Buttons (Instagram Action Pill Style) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 group border border-blue-400/30"
              >
                <Calendar className="w-5 h-5 text-sky-200 group-hover:scale-110 transition-transform" />
                <span>Agendar Avaliação Médica</span>
                <ArrowRight className="w-4 h-4 text-sky-300 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#calculadora"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4.5 rounded-2xl glass-card-navy hover:bg-blue-950/80 text-slate-200 hover:text-sky-300 font-semibold text-base border border-blue-800/60 hover:border-blue-400/50 transition-all hover:-translate-y-0.5"
              >
                <Calculator className="w-5 h-5 text-sky-400" />
                <span>Calcular meu IMC</span>
              </a>
            </div>

            {/* Trust List Badges */}
            <div className="pt-6 border-t border-blue-950/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Videolaparoscopia 3D Minimamente Invasiva</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Telemedicina para todo Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Protocolo ERAS de Recuperação Acelerada</span>
              </div>
            </div>

            {/* Medical Credentials Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-blue-950/90 border border-blue-800/60 text-xs font-semibold text-slate-200">
                CRM-SP 145.890
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-950/90 border border-blue-800/60 text-xs font-semibold text-slate-200">
                RQE 78.432
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-900/40 border border-blue-500/40 text-xs font-semibold text-sky-300">
                Titular SBCBM & IFSO
              </span>
            </div>

          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/40 via-sky-500/20 to-indigo-600/40 rounded-3xl opacity-60 blur-xl animate-pulse-slow pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel-navy border border-blue-700/60 shadow-2xl bg-gradient-to-b from-[#081836] to-[#040c18] aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[520px]">
                <img
                  src="/assets/dr-wilson-real.jpg"
                  alt="Dr. Wilson Paulo dos Santos - Cirurgião Bariátrico e Metabólico"
                  className="w-full h-full object-cover object-[center_35%] transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-[#040c18]/30 to-transparent" />
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel-navy rounded-2xl border border-blue-500/40 flex items-center justify-between">
                  <div>
                    <p className="font-signature text-2xl text-white">Dr. Wilson Paulo dos Santos</p>
                    <p className="text-xs text-sky-300 font-medium">Cirurgião Bariátrico & Metabólico</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating Metric Badge 1 (Top Right) */}
              <div className="absolute -top-6 -right-4 sm:-right-6 glass-panel-navy rounded-2xl p-4 shadow-2xl border border-blue-400/40 flex items-center gap-3.5 animate-float-slow hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-white">+3.500</div>
                  <div className="text-xs text-slate-300 font-medium">Cirurgias Realizadas</div>
                </div>
              </div>

              {/* Floating Metric Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-panel-navy rounded-2xl p-4 shadow-2xl border border-amber-500/40 flex items-center gap-3.5 animate-float-delayed hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Star className="w-6 h-6 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-amber-400">99,4%</div>
                  <div className="text-xs text-slate-300 font-medium">Satisfação dos Pacientes</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

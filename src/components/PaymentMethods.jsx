import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ShieldCheck, Building2, CheckCircle2, ArrowRight, Smartphone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';


export default function PaymentMethods() {
  const whatsappBase = "https://wa.me/5541995245847?text=";

  return (
    <section id="formas-de-pagamento" className="py-20 relative overflow-hidden bg-[#051124] border-b border-blue-950/80 text-white">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-navy border-blue-500/40 text-sky-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <CreditCard className="w-4 h-4 text-sky-400" />
            <span>Condições Facilitadas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Formas de <span className="text-gradient-cyan">Pagamento</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Transparência e flexibilidade para viabilizar seu tratamento cirúrgico com total segurança e comodidade.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Particular com Parcelamento */}
          <div className="rounded-3xl bg-[#081c3c] border border-blue-700/50 hover:border-blue-500/70 p-7 sm:p-9 shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                  <CreditCard className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Cartão de Crédito
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black font-heading text-white mb-2">
                  Atendimento Particular
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Para pacientes particulares, oferecemos condições facilitadas com possibilidade de parcelamento no cartão de crédito.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-blue-900/60">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Parcelamento facilitado no cartão de crédito</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Orçamento transparente e sem custos ocultos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Condições personalizadas para o seu planejamento</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={`${whatsappBase}${encodeURIComponent('Olá! Gostaria de consultar valores e condições de parcelamento no cartão de crédito para a cirurgia com o Dr. Wilson.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all border border-blue-400/30"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Consultar Parcelamento no Cartão</span>
              </a>
            </div>
          </div>

          {/* Card 2: Convênio Médico */}
          <div className="rounded-3xl bg-[#081c3c] border border-blue-700/50 hover:border-blue-500/70 p-7 sm:p-9 shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-inner">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                  Cobertura ANS
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black font-heading text-white mb-2">
                  Convênios Médicos
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Aceitamos convênios médicos e oferecemos suporte integral na documentação para autorização junto ao seu plano de saúde.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-blue-900/60">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Suporte completo com laudos e relatórios médicos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Orientação personalizada sobre cobertura do plano (ANS)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Equipe dedicada para agilizar o processo de autorização</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={`${whatsappBase}${encodeURIComponent('Olá! Gostaria de verificar a cobertura do meu convênio médico para a cirurgia com o Dr. Wilson.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-950/80 hover:bg-blue-900 text-white font-bold text-sm shadow-md transition-all border border-blue-600/50 hover:border-blue-400"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Verificar Cobertura do Meu Convênio</span>
              </a>
            </div>
          </div>

          {/* Card 3: Cirurgia Programada – PIX Parcelado */}
          <div className="rounded-3xl bg-gradient-to-br from-[#071e18] to-[#081c3c] border border-emerald-600/40 hover:border-emerald-500/70 p-7 sm:p-9 shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group relative overflow-hidden">
            {/* Subtle glow accent */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  PIX Parcelado
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black font-heading text-white mb-2">
                  Cirurgia Programada
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Parcele sua cirurgia diretamente no PIX, no seu ritmo, sem cartão de crédito e sem análise de crédito. Você define o valor de cada depósito e agenda a data assim que atingir 10% do orçamento.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-emerald-900/50">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Sem análise de crédito ou avalista</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Você define o valor de cada depósito</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">Agende a cirurgia com apenas 10% pago</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                to="/cirurgia-programada"
                id="payment-btn-cirurgia-programada"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50 transition-all border border-emerald-300/30"
              >
                <span>Saiba como funciona</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </Link>
            </div>
          </div>

        </div>


        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-sky-400 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300">
              Dúvidas sobre formas de pagamento, parcelamento ou coberturas? Nossa secretária esclarece tudo no WhatsApp.
            </p>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre formas de pagamento e convênios.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-sky-300 hover:text-white inline-flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>Falar com a secretária</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

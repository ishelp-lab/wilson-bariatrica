import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Smartphone, CalendarCheck2, ShieldCheck,
  BadgePercent, Clock, Star, ChevronDown, Home, Sparkles, Landmark,
  Wallet, Users, TrendingUp, Lock
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import WhatsAppIcon from '../components/WhatsAppIcon';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const WHATSAPP_URL =
  'https://wa.me/5541995245847?text=Ol%C3%A1%21%20Vim%20pela%20campanha%20de%20Cirurgia%20Programada%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20pagamento%20antecipado%20parcelado.';

// ──────────────────────────────────────────────────────────
// NAVBAR
// ──────────────────────────────────────────────────────────
function CpNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040c18]/90 backdrop-blur-md py-3 shadow-2xl border-b border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <BrandLogo variant="white" />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-300 hover:text-sky-300 hover:bg-blue-900/30 border border-blue-800/40 text-sm font-medium transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Site Principal</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all border border-emerald-400/30"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>QUERO SABER MAIS</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ──────────────────────────────────────────────────────────
// HERO
// ──────────────────────────────────────────────────────────
function CpHero() {
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-40 bg-[#040c18] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-teal-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-emerald-600/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-sm font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Condição Especial · Cirurgia Programada</span>
          </div>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white font-heading leading-[1.05] tracking-tight mb-6">
            REALIZE SUA CIRURGIA{' '}
            <span className="text-gradient-pix">PARCELANDO ANTES</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-300">
              sem análise de crédito
            </span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-10">
            Com a <strong className="text-white">Cirurgia Programada</strong>, você deposita parcelas{' '}
            <strong className="text-emerald-300">antes da cirurgia, no seu ritmo</strong>, sem análise de crédito e sem cartão. Agende a data com apenas 10% pago e opere ao atingir a condição acordada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-programada"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-base shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1 group border border-emerald-300/30"
            >
              <WhatsAppIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              <span>QUERO COMEÇAR A PARCELAR ANTES DA CIRURGIA</span>
              <ArrowRight className="w-5 h-5 text-emerald-200 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-5 rounded-2xl glass-card-navy hover:bg-teal-950/60 text-slate-200 hover:text-emerald-300 font-semibold text-base border border-teal-800/60 hover:border-teal-400/50 transition-all hover:-translate-y-0.5"
            >
              <ChevronDown className="w-5 h-5 text-emerald-400" />
              <span>Como funciona?</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300">
            {[
              'Sem análise de crédito',
              'Sem avalista',
              'Você define o valor de cada depósito',
              'Agende com apenas 10% pago',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// COMO FUNCIONA – PASSO A PASSO
// ──────────────────────────────────────────────────────────
const STEPS = [
  {
    num: '01', icon: <Smartphone className="w-7 h-7" />, color: 'emerald',
    title: 'Entre em contato',
    desc: 'Fale com nossa equipe pelo WhatsApp. Apresentamos o orçamento completo e tiramos todas as dúvidas sem compromisso.',
  },
  {
    num: '02', icon: <BadgePercent className="w-7 h-7" />, color: 'teal',
    title: 'Faça o primeiro depósito',
    desc: 'Com uma pequena entrada, você inicia o processo. Não há valor mínimo mensal fixo — deposite conforme sua disponibilidade, pelo método de sua preferência.',
  },
  {
    num: '03', icon: <CalendarCheck2 className="w-7 h-7" />, color: 'sky',
    title: 'Agende sua data com 10%',
    desc: 'Com 10% do orçamento quitado, você já escolhe a data da cirurgia junto à equipe clínica do Dr. Wilson.',
  },
  {
    num: '04', icon: <TrendingUp className="w-7 h-7" />, color: 'blue',
    title: 'Continue depositando no seu ritmo',
    desc: 'Semanal, quinzenal ou mensal — do jeito que couber no seu bolso, sem pressão e sem cobrança.',
  },
  {
    num: '05', icon: <ShieldCheck className="w-7 h-7" />, color: 'emerald',
    title: 'Opere com 85% pago',
    desc: 'Ao atingir 85% do valor, sua cirurgia é realizada. O saldo restante pode ser quitado em até 12x no cartão de crédito.',
  },
];

const COLOR_MAP = {
  emerald: { ring: 'border-emerald-400/50', icon: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300', num: 'text-emerald-400', glow: 'bg-emerald-500/10' },
  teal: { ring: 'border-teal-400/50', icon: 'bg-teal-500/15 border-teal-400/40 text-teal-300', num: 'text-teal-400', glow: 'bg-teal-500/10' },
  sky: { ring: 'border-sky-400/50', icon: 'bg-sky-500/15 border-sky-400/40 text-sky-300', num: 'text-sky-400', glow: 'bg-sky-500/10' },
  blue: { ring: 'border-blue-400/50', icon: 'bg-blue-500/15 border-blue-400/40 text-blue-300', num: 'text-blue-400', glow: 'bg-blue-500/10' },
};

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#050f1e] relative overflow-hidden border-b border-blue-950/60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-navy border-emerald-500/40 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
            <Landmark className="w-4 h-4 text-emerald-400" />
            <span>Passo a Passo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Como funciona a <span className="text-gradient-pix">Cirurgia Programada</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Um processo simples, transparente e adaptado ao seu bolso — sem burocracia, sem surpresas.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500/40 via-blue-500/20 to-transparent" />
          <div className="space-y-5">
            {STEPS.map((step, idx) => {
              const c = COLOR_MAP[step.color];
              return (
                <div key={idx} className={`flex gap-6 items-start group`}>
                  <div className={`hidden lg:flex w-16 h-16 rounded-full ${c.glow} border-2 ${c.ring} items-center justify-center shadow-xl shrink-0 z-10 mt-1`}>
                    <span className={`text-xl font-black font-heading ${c.num}`}>{step.num}</span>
                  </div>
                  <div className={`flex-1 rounded-3xl bg-[#081c3c] border ${c.ring} hover:border-opacity-80 p-7 shadow-2xl transition-all duration-300 hover:-translate-y-0.5`}>
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${c.icon} group-hover:scale-110 transition-all duration-300`}>
                        {step.icon}
                      </div>
                      <div>
                        <div className={`text-xs font-black uppercase tracking-widest mb-1 ${c.num}`}>Passo {step.num}</div>
                        <h3 className="text-xl font-bold text-white font-heading mb-2">{step.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="how-it-works-cta"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-base shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1 group border border-emerald-300/30"
          >
            <WhatsAppIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            <span>Iniciar minha Cirurgia Programada</span>
            <ArrowRight className="w-5 h-5 text-emerald-200 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// VANTAGENS
// ──────────────────────────────────────────────────────────
const ADVANTAGES = [
  { icon: <Lock className="w-6 h-6" />, title: 'Sem análise de crédito', desc: 'Diferente de financeiras e cartões, a Cirurgia Programada não exige score de crédito ou CPF aprovado.' },
  { icon: <Users className="w-6 h-6" />, title: 'Sem avalista', desc: 'Não é necessário apresentar fiador. O compromisso é exclusivamente seu, com total autonomia.' },
  { icon: <Wallet className="w-6 h-6" />, title: 'Flexibilidade no pagamento', desc: 'O plano de depósitos é definido junto com nossa equipe, de forma personalizada e adaptada à sua realidade financeira.' },
  { icon: <CalendarCheck2 className="w-6 h-6" />, title: 'Data garantida com 10%', desc: 'Com apenas 10% pago, você agenda a data da cirurgia e tem a confirmação do procedimento.' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Segurança total', desc: 'Todos os valores depositados ficam registrados e alocados ao seu procedimento, com comprovante a cada depósito.' },
  { icon: <Star className="w-6 h-6" />, title: 'Mesmo padrão de excelência', desc: 'A modalidade de pagamento não altera em nada a qualidade do atendimento e do procedimento com o Dr. Wilson.' },
];

function Advantages() {
  return (
    <section id="vantagens" className="py-24 bg-[#040c18] relative overflow-hidden border-b border-blue-950/60">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-navy border-teal-500/40 text-teal-300 text-xs font-extrabold uppercase tracking-wider">
            <Star className="w-4 h-4 text-teal-400" />
            <span>Por que escolher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Vantagens da <span className="text-gradient-pix">Cirurgia Programada</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Uma solução pensada para quem quer realizar a cirurgia bariátrica mas precisa de flexibilidade real no pagamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, i) => (
            <div key={i} className="rounded-3xl bg-[#081c3c] border border-teal-700/30 hover:border-teal-500/60 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-400/40 flex items-center justify-center text-teal-300 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// FAQ
// ──────────────────────────────────────────────────────────
const FAQS = [
  { q: 'O que é a Cirurgia Programada?', a: 'É uma modalidade de pagamento antecipado: você parcela previamente o valor do procedimento — antes da cirurgia — no seu próprio ritmo, sem valor mínimo mensal fixo e sem necessidade de cartão de crédito ou aprovação de crédito.' },
  { q: 'Qual o valor mínimo para começar?', a: 'Não há um valor mínimo obrigatório para o primeiro depósito. O importante é dar o primeiro passo. Fale com nossa equipe para receber um orçamento e traçar seu plano personalizado.' },
  { q: 'Quando posso agendar a data da cirurgia?', a: 'Assim que 10% do orçamento total for pago, você já pode agendar a data do procedimento junto com a equipe da clínica do Dr. Wilson.' },
  { q: 'Com qual percentual realizo a cirurgia?', a: 'A cirurgia é realizada quando o saldo acumulado atingir 85% do orçamento combinado. O restante (15%) pode ser quitado em até 12x no cartão de crédito.' },
  { q: 'O valor do orçamento pode mudar?', a: 'O orçamento pode sofrer reajuste anual, geralmente uma vez por ano. Caso haja reajuste, ele é aplicado apenas sobre o saldo restante a pagar, nunca sobre o valor já depositado.' },
  { q: 'É seguro depositar valores antecipadamente?', a: 'Sim. Todos os depósitos são registrados e direcionados exclusivamente ao seu procedimento. Nossa equipe emite comprovantes a cada depósito recebido.' },
  { q: 'Posso desistir e pedir reembolso?', a: 'Sim. Em caso de desistência, os valores já depositados são devolvidos conforme as condições estabelecidas no contrato firmado com a clínica. Nossa equipe esclarece todos os detalhes antes de qualquer compromisso.' },
];

function FAQProgramada() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faq-programada" className="py-24 bg-[#050f1e] relative overflow-hidden border-b border-blue-950/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-navy border-blue-500/40 text-sky-300 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Perguntas sobre a <span className="text-gradient-pix">Cirurgia Programada</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIdx === i
                  ? 'bg-[#081c3c] border-emerald-500/50 shadow-xl shadow-emerald-500/10'
                  : 'bg-[#081428] border-blue-800/40 hover:border-teal-700/50'
                }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="text-base font-semibold text-white font-heading">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-300 text-sm leading-relaxed border-t border-blue-900/40 pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// CTA FINAL
// ──────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-28 bg-[#040c18] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[200px]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-navy border-emerald-500/40 text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-8">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>Vagas Limitadas · Campanha Especial</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-tight mb-6">
          Sua cirurgia começa <span className="text-gradient-pix">hoje</span>,<br />
          com o valor que você tem agora.
        </h2>

        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Não espere ter o valor total. Comece com o que pode hoje e construa o caminho para a sua saúde e qualidade de vida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-programada"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-lg shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-1 group border border-emerald-300/30"
          >
            <WhatsAppIcon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-6 h-6 text-emerald-200 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-5 rounded-2xl glass-card-navy hover:bg-blue-950/80 text-slate-200 hover:text-sky-300 font-semibold text-base border border-blue-800/60 hover:border-blue-400/50 transition-all hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5 text-sky-400" />
            <span>Ver o site principal</span>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-blue-950/90 border border-blue-800/60 text-xs font-semibold text-slate-200">CRM-PR 14.204</span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-950/90 border border-blue-800/60 text-xs font-semibold text-slate-200">RQE 12317 / RQE 12005</span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-900/40 border border-blue-500/40 text-xs font-semibold text-sky-300">Titular SBCBM &amp; IFSO</span>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-900/30 border border-emerald-600/40 text-xs font-semibold text-emerald-300">+15.000 Cirurgias Realizadas</span>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// FOOTER SIMPLIFICADO
// ──────────────────────────────────────────────────────────
function CpFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#030a16] border-t border-blue-950/80 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <Link to="/" className="inline-block">
          <BrandLogo variant="white" imgClassName="h-10 sm:h-12" />
        </Link>
        <div className="text-center sm:text-right space-y-1">
          <p>© {year} Dr. Wilson Paulo dos Santos - Cirurgia Bariátrica &amp; Metabólica.</p>
          <p className="text-slate-500">As informações têm caráter educativo, em conformidade com as diretrizes do CFM.</p>
        </div>
      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────
// PÁGINA PRINCIPAL
// ──────────────────────────────────────────────────────────
export default function CirurgiaProgramada() {
  return (
    <div className="min-h-screen bg-[#040c18] text-slate-100 font-sans selection:bg-teal-950 selection:text-white overflow-x-hidden">
      <CpNavbar />
      <main>
        <CpHero />
        <HowItWorks />
        <Advantages />
        <FAQProgramada />
        <FinalCTA />
      </main>
      <CpFooter />
      <FloatingWhatsApp />
    </div>
  );
}

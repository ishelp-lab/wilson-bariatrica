import React from 'react';
import { ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030a16] border-t border-blue-950/80 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-blue-900/40 items-center">
          
          {/* Col 1: Brand & Credentials */}
          <div className="md:col-span-7 space-y-4">
            <a href="#inicio" className="inline-block">
              <BrandLogo variant="white" />
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Dr. Wilson Paulo dos Santos — Especialista em Cirurgia Bariátrica, Metabólica e Videolaparoscópica de Alta Precisão. Atendimento presencial em São Paulo e Telemedicina para todo o Brasil.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200 pt-1">
              <span className="px-3 py-1.5 rounded-lg bg-blue-950 border border-blue-800 font-semibold">CRM-PR 14.204</span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-950 border border-blue-800 font-semibold">RQE 12317 / RQE 12005</span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-900/40 border border-blue-500/40 font-semibold text-sky-300">Membro Titular SBCBM & IFSO</span>
            </div>
          </div>

          {/* Col 2: Legal Disclaimers & CFM Compliance */}
          <div className="md:col-span-5 space-y-3 p-5 rounded-2xl bg-blue-950/40 border border-blue-900/50">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider font-heading">Aviso Ético & Regulatório (CFM)</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              As informações veiculadas possuem caráter informativo e educacional, em conformidade com as diretrizes éticas do Conselho Federal de Medicina (CFM). Nenhuma informação substitui a consulta médica presencial e a avaliação clínica individualizada.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Dr. Wilson Paulo dos Santos - Cirurgia Bariátrica & Metabólica. Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-sky-300 transition-colors text-xs font-semibold"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}

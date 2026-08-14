import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Credentials */}
          <div className="md:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block">
              <img 
                src="/assets/logo-white.png" 
                alt="Dr. Wilson Paulo dos Santos - Cirurgia Bariátrica" 
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dr. Wilson Paulo dos Santos — Especialista em Cirurgia Bariátrica, Metabólica e Videolaparoscópica de Alta Precisão. Atendimento presencial em São Paulo e Telemedicina para todo o Brasil.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-300 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 font-medium">CRM-SP 145.890</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 font-medium">RQE 78.432</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 font-medium text-teal-400">SBCBM / IFSO</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-teal-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-teal-400 transition-colors">Sobre o Médico</a></li>
              <li><a href="#calculadora" className="hover:text-teal-400 transition-colors">Calculadora IMC</a></li>
              <li><a href="#procedimentos" className="hover:text-teal-400 transition-colors">Procedimentos Cirúrgicos</a></li>
              <li><a href="#diferenciais" className="hover:text-teal-400 transition-colors">Diferenciais & ERAS</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Legal Disclaimers & CFM Compliance */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">Aviso Ético & Regulatório</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              As informações contidas neste site possuem caráter estritamente educativo e informativo, obedecendo às Resoluções do Conselho Federal de Medicina (CFM). Nenhuma informação aqui veiculada substitui a consulta médica presencial ou a avaliação técnica individualizada.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Dr. Wilson Paulo dos Santos - Cirurgia Bariátrica & Metabólica. Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors text-xs font-semibold"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { X, CheckCircle, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ProcedureModal({ procedure, onClose }) {
  if (!procedure) return null;

  const whatsappLink = `https://wa.me/5541995245847?text=Ol%C3%A1%20Dr.%20Wilson!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20procedimento:%20${encodeURIComponent(procedure.title)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030914]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#07162e] rounded-3xl border border-blue-700/60 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-blue-950/80 text-slate-400 hover:text-white hover:bg-blue-900 transition-colors"
          aria-label="Fechar Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-600/30 text-sky-300 border border-blue-400/40">
            {procedure.tag}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            {procedure.title}
          </h3>
          <p className="text-sm font-semibold text-sky-400">{procedure.subtitle}</p>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed border-y border-blue-900/60 py-4">
          <p>{procedure.text}</p>
          
          <div className="pt-2">
            <h4 className="text-white font-bold text-base mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
              <span>Destaques & Benefícios Clínicos</span>
            </h4>
            <div className="grid sm:grid-cols-1 gap-2.5">
              {procedure.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-950/60 border border-blue-900/80">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200 font-medium text-xs sm:text-sm">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>Internação média: 48h (Videolaparoscopia)</span>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-sm shadow-xl shadow-blue-600/30 border border-blue-400/30"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>Tirar Dúvidas no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}

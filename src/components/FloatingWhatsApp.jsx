import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Wilson.";

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-2xl shadow-emerald-500/50 hover:scale-105 transition-all duration-300 group border border-emerald-300/40"
        aria-label="Agendar via WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white stroke-emerald-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-500 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-500" />
        </div>
        <span className="font-heading tracking-wide">Agendar no WhatsApp</span>
      </a>

      {/* Mobile Sticky Bottom CTA Bar (Páginas de Alta Conversão) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#040c18]/95 backdrop-blur-lg border-t border-blue-900/60 p-3 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 active:scale-[0.98] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/30 transition-all border border-emerald-300/30"
        >
          <MessageCircle className="w-5 h-5 fill-white stroke-emerald-600" />
          <span>Falar no WhatsApp com o Dr. Wilson</span>
        </a>
      </div>
    </>
  );
}

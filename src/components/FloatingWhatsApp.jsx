import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Wilson.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all duration-300 group"
      aria-label="Agendar via WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-white stroke-emerald-600" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-500 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-500" />
      </div>
      <span className="hidden sm:inline font-heading">Agendar WhatsApp</span>
    </a>
  );
}

import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ChevronRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '#inicio' },
    { name: 'TRANSFORMAÇÕES', href: '#transformacoes' },
    { name: 'SOBRE MIM', href: '#sobre' },
    { name: 'CALCULADORA IMC', href: '#calculadora' },
    { name: 'PAGAMENTO & CONVÊNIOS', href: '#formas-de-pagamento' },
    { name: 'CONTATO', href: '#contato' },
  ];

  const whatsappLink = "https://wa.me/5541995245847?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Wilson%20Paulo%20dos%20Santos.";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-[#040c18]/90 backdrop-blur-md py-3 shadow-2xl border-b border-blue-900/40'
      : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Official Logo Brand */}
          <a href="#inicio" className="flex items-center">
            <BrandLogo variant="white" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium rounded-xl text-slate-200 hover:text-sky-300 hover:bg-blue-900/30 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5 border border-blue-400/30"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>AGENDAR AVALIAÇÃO</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-blue-950/80 text-slate-200 hover:text-sky-300 hover:bg-blue-900 border border-blue-800/80 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#040c18] border-b border-blue-900/50 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            <div className="mb-3 pb-3 border-b border-blue-900/40 flex justify-between items-center">
              <BrandLogo variant="white" />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-blue-900/40 hover:text-sky-300 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </a>
            ))}

            <div className="pt-4 border-t border-blue-900/40 flex flex-col gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-base shadow-xl shadow-blue-600/30"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                <span>Agendar Consulta no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight } from 'lucide-react';

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
    { name: 'Início', href: '#inicio' },
    { name: 'Calculadora IMC', href: '#calculadora' },
    { name: 'Procedimentos', href: '#procedimentos' },
    { name: 'Como Funciona', href: '#jornada' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Wilson%20Paulo%20dos%20Santos.";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-slate-200/80'
      : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Official Logo Brand */}
          <a href="#inicio" className="flex items-center group">
            <img
              src={isScrolled ? "/assets/logo-color.png" : "/assets/logo-white.png"}
              alt="Dr. Wilson Paulo dos Santos - Cirurgia Bariátrica"
              className="h-11 sm:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isScrolled
                  ? 'text-slate-700 hover:text-teal-600 hover:bg-teal-50/80'
                  : 'text-slate-300 hover:text-teal-400 hover:bg-slate-800/40'
                  }`}
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-colors ${isScrolled
                ? 'bg-slate-100 text-slate-700 hover:text-teal-600 hover:bg-slate-200 border border-slate-200'
                : 'bg-slate-800/80 text-slate-200 hover:text-teal-400 hover:bg-slate-800'
                }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 ${isScrolled
          ? 'bg-white border-slate-200'
          : 'bg-slate-950 border-slate-800'
          }`}>
          <div className="flex flex-col gap-2">
            <div className={`mb-2 pb-2 border-b flex justify-between items-center ${isScrolled ? 'border-slate-200' : 'border-slate-800'
              }`}>
              <img
                src={isScrolled ? "/assets/logo-color.png" : "/assets/logo-white.png"}
                alt="Dr. Wilson Paulo dos Santos"
                className="h-10 w-auto object-contain"
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${isScrolled
                  ? 'text-slate-700 hover:bg-teal-50 hover:text-teal-600'
                  : 'text-slate-200 hover:bg-teal-500/10 hover:text-teal-400'
                  }`}
              >
                <span>{link.name}</span>
                <ChevronRight className={`w-4 h-4 ${isScrolled ? 'text-slate-400' : 'text-slate-500'}`} />
              </a>
            ))}

            <div className={`pt-4 border-t flex flex-col gap-3 ${isScrolled ? 'border-slate-200' : 'border-slate-800/80'
              }`}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold text-base shadow-lg shadow-teal-500/20"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

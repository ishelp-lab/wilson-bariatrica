import React, { useState } from 'react';
import { MapPin, Phone, Clock, Calendar, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    procedure: 'Bariátrica / Metabólica',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const text = `Ol%C3%A1%20Dr.%20Wilson!%20Meu%20nome%20%C3%A9%20${encodeURIComponent(formData.name)}.%20Gostaria%20de%20agendar%20uma%20consulta.%20Interesse:%20${encodeURIComponent(formData.procedure)}.%20Telefone:%20${encodeURIComponent(formData.phone)}.%20Mensagem:%20${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-[#07152b] border-b border-blue-950/80">
      
      {/* Glow background */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-navy border-blue-500/40 text-sky-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Calendar className="w-4 h-4 text-sky-400" />
            <span>Agendamento de Consultas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Agende Sua <span className="text-gradient-cyan">Avaliação Médica</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Atendimento presencial em São Paulo e consultas por Telemedicina para pacientes de todo o Brasil.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#081c3c] border border-blue-800/60 shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">
                Canais de Atendimento
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Consultório Presencial</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                    <p className="text-xs text-sky-300 mt-1 font-semibold">Estacionamento e acesso PCD no local</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Central de WhatsApp</h4>
                    <p className="text-xs text-slate-300 mt-0.5">+55 (11) 99999-9999</p>
                    <p className="text-xs text-slate-400">Atendimento humanizado com a secretária</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Horário de Atendimento</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Segunda a Sexta: 08:00 às 19:00</p>
                    <p className="text-xs text-slate-300">Sábados (Telemedicina): 08:00 às 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white flex items-center justify-between gap-4 shadow-xl border border-blue-400/30">
              <div>
                <h4 className="font-bold text-sm font-heading">Falar direto pelo WhatsApp?</h4>
                <p className="text-xs text-sky-200 mt-0.5">Atendimento rápido em tempo real.</p>
              </div>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Wilson."
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white text-emerald-600 hover:bg-emerald-50 flex items-center justify-center shadow-md shrink-0 transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#081c3c] border border-blue-800/60 shadow-2xl space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Formulário de Pré-Agendamento
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Preencha os campos abaixo e nossa equipe retornará para confirmar seu atendimento.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-blue-950/80 border border-blue-600 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-sky-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Solicitação Enviada com Sucesso!</h4>
                  <p className="text-xs text-slate-300">
                    Você foi direcionado para a conversa no WhatsApp para selecionar a melhor data.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-sky-300 underline pt-2"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="nameInputNavy" className="text-xs font-bold text-slate-200">Nome Completo *</label>
                      <input
                        id="nameInputNavy"
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#051124] border border-blue-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phoneInputNavy" className="text-xs font-bold text-slate-200">WhatsApp / Telefone *</label>
                      <input
                        id="phoneInputNavy"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#051124] border border-blue-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="emailInputNavy" className="text-xs font-bold text-slate-200">E-mail</label>
                      <input
                        id="emailInputNavy"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#051124] border border-blue-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="procedureSelectNavy" className="text-xs font-bold text-slate-200">Interesse Cirúrgico</label>
                      <select
                        id="procedureSelectNavy"
                        value={formData.procedure}
                        onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#051124] border border-blue-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                      >
                        <option value="Bariátrica / Metabólica">Cirurgia Bariátrica / Metabólica</option>
                        <option value="Cirurgia de Vesícula">Colecistectomia (Vesícula)</option>
                        <option value="Cirurgia de Hérnia">Hérnia Abdominal / Inguinal</option>
                        <option value="Diástase Abdominal">Correção de Diástase</option>
                        <option value="Reganho de Peso">Tratamento para Reganho de Peso</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="messageTextareaNavy" className="text-xs font-bold text-slate-200">Mensagem ou Dúvidas</label>
                    <textarea
                      id="messageTextareaNavy"
                      rows={3}
                      placeholder="Descreva brevemente como podemos te ajudar..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#051124] border border-blue-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 border border-blue-400/30"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>Enviar Agendamento via WhatsApp</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

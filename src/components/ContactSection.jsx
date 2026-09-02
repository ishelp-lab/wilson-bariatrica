import React, { useState } from 'react';
import { MapPin, Phone, Clock, Calendar, MessageCircle, Send, CheckCircle2, CreditCard } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    procedure: 'Cirurgia Bariátrica (Bypass & Sleeve)',
    paymentType: 'Particular (com parcelamento no cartão)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const text = `Ol%C3%A1%20Dr.%20Wilson!%20Meu%20nome%20%C3%A9%20${encodeURIComponent(formData.name)}.%20Gostaria%20de%20agendar%20uma%20consulta.%20Interesse:%20${encodeURIComponent(formData.procedure)}.%20Forma%20de%20Pagamento:%20${encodeURIComponent(formData.paymentType)}.%20Telefone:%20${encodeURIComponent(formData.phone)}.%20Mensagem:%20${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/5541995245847?text=${text}`, '_blank');
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
            Atendimento presencial em Curitiba e consultas por Telemedicina para pacientes de todo o Brasil.
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
                    <p className="text-xs text-slate-300 mt-0.5">Av. Paraná, 202 - Cabral, Curitiba, PR, 80035-130</p>
                    <p className="text-xs text-sky-300 mt-1 font-semibold">Estacionamento e acesso PCD no local</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Central de WhatsApp</h4>
                    <p className="text-xs text-slate-300 mt-0.5">(41) 99524-5847</p>
                    <p className="text-xs text-slate-400">Atendimento humanizado com a secretária</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-600/20 border border-pink-400/40 flex items-center justify-center text-pink-400 shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Instagram Oficial</h4>
                    <a
                      href="https://www.instagram.com/dr.wilsonpaulodossantos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sky-300 hover:underline mt-0.5 block font-medium"
                    >
                      @dr.wilsonpaulodossantos
                    </a>
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

                <div className="flex items-start gap-4 pt-2 border-t border-blue-900/60">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Formas de Pagamento</h4>
                    <p className="text-xs text-slate-300 mt-0.5 font-medium">Particular e Convênios Médicos</p>
                    <p className="text-xs text-sky-300 mt-0.5 font-semibold">Parcelamento no cartão para particulares</p>
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
                href="https://wa.me/5541995245847?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Wilson."
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
                        placeholder="(41) 99524-5847"
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
                        <option value="Cirurgia Bariátrica (Bypass & Sleeve)">Cirurgia Bariátrica (Bypass & Sleeve)</option>
                        <option value="Cirurgia Metabólica para Diabetes">Cirurgia Metabólica para Diabetes</option>
                        <option value="Colecistectomia (Cirurgia de Vesícula)">Colecistectomia (Cirurgia de Vesícula)</option>
                        <option value="Avaliação Médica Geral">Outras Dúvidas / Avaliação Geral</option>
                      </select>
                    </div>
                  </div>

                  {/* Forma de Pagamento */}
                  <div className="space-y-1.5">
                    <label htmlFor="paymentTypeSelect" className="text-xs font-bold text-slate-200">
                      Forma de Pagamento Pretendida
                    </label>
                    <select
                      id="paymentTypeSelect"
                      value={formData.paymentType}
                      onChange={(e) => setFormData({ ...formData, paymentType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#051124] border border-blue-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
                    >
                      <option value="Particular (com parcelamento no cartão)">Particular (com parcelamento no cartão de crédito)</option>
                      <option value="Convênio Médico">Convênio Médico (Plano de Saúde)</option>
                    </select>
                    <p className="text-[11px] text-sky-300 font-medium">
                      * Para atendimentos particulares, disponibilizamos parcelamento no cartão de crédito.
                    </p>
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

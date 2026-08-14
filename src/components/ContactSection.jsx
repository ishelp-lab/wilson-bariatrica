import React, { useState } from 'react';
import { MapPin, Phone, Clock, Calendar, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

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
    <section id="contato" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Calendar className="w-4 h-4 text-teal-600" />
            <span>Agendamento de Consultas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Agende Sua <span className="text-gradient-emerald-dark">Avaliação Médica</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Atendimento presencial em São Paulo e consultas por Telemedicina para pacientes de todo o Brasil.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md space-y-6">
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Canais de Atendimento
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Consultório Presencial</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                    <p className="text-xs text-teal-700 mt-1 font-semibold">Estacionamento e acesso PCD no local</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Central de WhatsApp</h4>
                    <p className="text-xs text-slate-600 mt-0.5">+55 (11) 99999-9999</p>
                    <p className="text-xs text-slate-500">Atendimento humanizado com a secretária</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Horário de Atendimento</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Segunda a Sexta: 08:00 às 19:00</p>
                    <p className="text-xs text-slate-600">Sábados (Telemedicina): 08:00 às 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white flex items-center justify-between gap-4 shadow-xl">
              <div>
                <h4 className="font-bold text-sm font-heading">Falar direto pelo WhatsApp?</h4>
                <p className="text-xs text-teal-100 mt-0.5">Atendimento rápido em tempo real.</p>
              </div>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Wilson."
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white text-teal-700 hover:bg-teal-50 flex items-center justify-center shadow-md shrink-0 transition-transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Formulário de Pré-Agendamento
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Preencha os campos abaixo e nossa equipe retornará para confirmar seu atendimento.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Solicitação Enviada com Sucesso!</h4>
                  <p className="text-xs text-slate-600">
                    Você foi direcionado para a conversa no WhatsApp para selecionar a melhor data.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-teal-700 underline pt-2"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="nameInputLight" className="text-xs font-bold text-slate-700">Nome Completo *</label>
                      <input
                        id="nameInputLight"
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phoneInputLight" className="text-xs font-bold text-slate-700">WhatsApp / Telefone *</label>
                      <input
                        id="phoneInputLight"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="emailInputLight" className="text-xs font-bold text-slate-700">E-mail</label>
                      <input
                        id="emailInputLight"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="procedureSelectLight" className="text-xs font-bold text-slate-700">Interesse Cirúrgico</label>
                      <select
                        id="procedureSelectLight"
                        value={formData.procedure}
                        onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-sm"
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
                    <label htmlFor="messageTextareaLight" className="text-xs font-bold text-slate-700">Mensagem ou Dúvidas</label>
                    <textarea
                      id="messageTextareaLight"
                      rows={3}
                      placeholder="Descreva brevemente como podemos te ajudar..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-teal-600/20 transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
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

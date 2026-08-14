import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Como sei se tenho indicação para a Cirurgia Bariátrica ou Metabólica?',
      a: 'Segundo as diretrizes médicas (SBCBM e CFM), a cirurgia bariátrica é indicada para pacientes com IMC acima de 40 kg/m², ou IMC acima de 35 kg/m² com presença de doenças associadas (como diabetes, hipertensão, apneia do sono, dislipidemia). A cirurgia metabólica pode ser indicada a partir de IMC 30 kg/m² para controle severo do Diabetes Tipo 2.',
    },
    {
      q: 'Qual a diferença entre o Bypass Gástrico e o Sleeve Gástrico?',
      a: 'No Sleeve (Gastrectomia Vertical), reduzimos o volume do estômago em cerca de 80%, transformando-o em um tubo fino. No Bypass Gástrico, além da redução estomacal, é feito um desvio intestinal parcial que diminui a absorção de calorias e estimula hormônios da saciedade (GLP-1). A escolha é decidida em consulta médica individualizada.',
    },
    {
      q: 'O convênio ou plano de saúde cobre a cirurgia bariátrica?',
      a: 'Sim! A Cirurgia Bariátrica por videolaparoscopia consta no rol de procedimentos obrigatórios da ANS (Agência Nacional de Saúde Suplementar). Nossa equipe auxilia e fornece toda a documentação médica necessária para a solicitação de autorização junto ao seu plano.',
    },
    {
      q: 'Quanto tempo dura a internação hospitalar e a recuperação pós-operatória?',
      a: 'Graças à técnica por videolaparoscopia (com pequenos furos de 5mm) e ao Protocolo ERAS de recuperação rápida, a maioria dos pacientes recebe alta hospitalar entre 24h e 48h após o procedimento. O retorno a atividades de escritório costuma ocorrer em 7 a 14 dias.',
    },
    {
      q: 'Posso fazer o acompanhamento pré e pós-operatório por Telemedicina?',
      a: 'Sim! Atendemos pacientes de todo o Brasil e do exterior através de consultas de Telemedicina regulamentadas pelo CFM. As avaliações multidisciplinares (nutrição e psicologia) também podem ser realizadas online com total conforto.',
    },
    {
      q: 'O que é o Protocolo ERAS de recuperação acelerada?',
      a: 'O protocolo ERAS (Enhanced Recovery After Surgery) é um conjunto de condutas científicas para otimizar o preparo pré-operatório, minimizar o estresse cirúrgico e proporcionar analgesia moderna sem opióides, permitindo que o paciente caminhe e se alimente logo nas primeiras horas pós-cirurgia.',
    },
    {
      q: 'Como funciona a cirurgia de hérnia e vesícula por videolaparoscopia?',
      a: 'São cirurgias minimamente invasivas em que a remoção da vesícula ou o reparo da hérnia (com tela sintética de alta tecnologia) é feito através de 3 ou 4 incisões milimétricas. O paciente geralmente vai para casa no dia seguinte com recuperação estética e pouca dor.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-section-darker border-b border-slate-800">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider shadow-lg">
            <HelpCircle className="w-4 h-4 text-teal-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Perguntas <span className="text-gradient-teal">Frequentes</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Respostas transparentes sobre indicações, procedimentos, planos de saúde e recuperação pós-operatória.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel border border-slate-800 overflow-hidden transition-all duration-200 bg-slate-900/90"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-heading">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-teal-500/20 text-teal-300 border-teal-500/40' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Help Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-card border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/90">
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold text-base font-heading">Sua dúvida não está listada acima?</h4>
            <p className="text-xs text-slate-400">Nossa equipe de atendimento esclarece qualquer pergunta no WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20sobre%20a%20cirurgia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 font-semibold text-xs transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Atendimento</span>
          </a>
        </div>

      </div>
    </section>
  );
}

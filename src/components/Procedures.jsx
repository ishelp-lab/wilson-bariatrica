import React, { useState } from 'react';
import { Stethoscope, Activity, Sparkles, Flame, Shield, RefreshCw, ArrowRight } from 'lucide-react';
import ProcedureModal from './ProcedureModal';

export default function Procedures() {
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const procedures = [
    {
      id: 'bariatrica',
      icon: Stethoscope,
      title: 'Cirurgia Bariátrica (Bypass & Sleeve)',
      subtitle: 'Técnica Videolaparoscópica Minimamente Invasiva',
      tag: 'Mais Solicitada • Alta Eficácia',
      summary: 'Tratamento cirúrgico consagrado com perda média de 30% a 40% do peso corporal e remissão de doenças crônicas.',
      text: 'A Cirurgia Bariátrica é o tratamento de maior eficácia comprovada cientificamente para a obesidade grave e doenças metabólicas associadas. Realizada por videolaparoscopia (com pequenos furos de 5mm a 10mm), proporciona remissão expressiva do Diabetes Tipo 2, controle da pressão arterial e melhora substancial na qualidade de vida.',
      bullets: [
        'Perda média de 30% a 40% do peso corporal total',
        'Remissão imediata ou controle rigoroso do Diabetes Tipo 2',
        'Alta hospitalar precoce (geralmente entre 24h e 48h)',
        'Recuperação estética com cicatrizes imperceptíveis',
        'Acompanhamento continuado por equipe multidisciplinar'
      ]
    },
    {
      id: 'metabolica',
      icon: Activity,
      title: 'Cirurgia Metabólica para Diabetes',
      subtitle: 'Remissão do Diabetes Tipo 2 em Pacientes Selecionados',
      tag: 'Controle de Glicemia',
      summary: 'Focada no controle definitivo dos níveis glicêmicos e redução de medicações em diabéticos.',
      text: 'Indicada especialmente para pacientes com Diabetes Tipo 2 descompensado e IMC acima de 30. A cirurgia reconfigura hormônios gastrintestinais como o GLP-1, proporcionando normalização da glicemia em poucas semanas pós-procedimento.',
      bullets: [
        'Reversão ou redução drástica do uso de insulina e antidiabéticos',
        'Proteção contra complicações renais e cardiovasculares',
        'Protocolo cirúrgico seguro por laparoscopia 3D',
        'Acompanhamento endocrinológico dedicado'
      ]
    },
    {
      id: 'hernia',
      icon: Shield,
      title: 'Cirurgia de Hérnia Abdominal & Inguinal',
      subtitle: 'Correção Laparoscópica com Telas de Alta Tecnologia',
      tag: 'Músculos Abdominais',
      summary: 'Reparo seguro de hérnias umbilicais, inguinais e incisionais sem necessidade de grandes cortes.',
      text: 'A correção laparoscópica de hérnias utiliza pequenas incisões para posicionar uma tela de reforço sintética de alta biocompatibilidade por trás da parede muscular, eliminando o abaulamento com retorno rápido às atividades.',
      bullets: [
        'Incisões milimétricas com preservação estética',
        'Taxa de recidiva (retorno da hérnia) inferior a 1%',
        'Menor necessidade de analgésicos no pós-operatório',
        'Retorno rápido às atividades profissionais'
      ]
    },
    {
      id: 'vesicula',
      icon: Sparkles,
      title: 'Colecistectomia (Cirurgia de Vesícula)',
      subtitle: 'Remoção de Cálculos Biliares por Videolaparoscopia',
      tag: 'Internação de 24h',
      summary: 'Solução definitiva para cólicas biliares e pedra na vesícula com alta no dia seguinte.',
      text: 'A presença de pedras na vesícula biliar pode causar cólicas intensas, inflamação (colecistite) e complicações como pancreatite. A cirurgia por videolaparoscopia remove a vesícula doente com máxima segurança anatômica.',
      bullets: [
        'Procedimento rápido e amplamente consolidado',
        'Prevenção definitiva de crises de cólica biliar',
        'Internação de apenas 1 dia na maioria dos casos',
        'Retorno gradual à alimentação normal sem desconforto'
      ]
    },
    {
      id: 'diastase',
      icon: Flame,
      title: 'Correção de Diástase Abdominal',
      subtitle: 'Reaproximação Muscular Pós-Gestação ou Perda de Peso',
      tag: 'Funcional & Estético',
      summary: 'Restaurando o tônus abdominal, estabilidade da coluna e contorno corporal.',
      text: 'A diástase dos músculos retos abdominais (comum após a gestação ou grandes oscilações de peso) causa fraqueza no core, dores lombares e projeção abdominal persistente. A cirurgia restaura a anatomia muscular original.',
      bullets: [
        'Recuperação do tônus e estabilidade da parede abdominal',
        'Alívio efetivo de dores lombares crônicas associadas',
        'Associação possível com abdominoplastia quando indicada',
        'Resultado funcional e harmonioso'
      ]
    },
    {
      id: 'reganho',
      icon: RefreshCw,
      title: 'Revisão e Reganho de Peso Pós-Bariátrica',
      subtitle: 'Protocolo de Readequação Anatômica & Comportamental',
      tag: 'Suporte 360°',
      summary: 'Investigação acolhedora e tratamentos cirúrgicos ou endoscópicos para recuperar os resultados.',
      text: 'O reganho de peso pós-bariátrica exige uma abordagem sem julgamentos. Investigamos aspectos anatômicos (dilatação da sutura ou pouch) e metabólicos/comportamentais, oferecendo procedimentos revisionais cirúrgicos ou endoscópicos acompanhados por nutrição e psicologia.',
      bullets: [
        'Avaliação anatômica e metabólica minuciosa',
        'Opções revisionais por videolaparoscopia ou argônio',
        'Reeducação nutricional e acompanhamento psicológico',
        'Foco no resgate da autoestima e metas de saúde'
      ]
    }
  ];

  return (
    <section id="procedimentos" className="py-24 relative overflow-hidden bg-section-darker border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider shadow-lg">
            <Stethoscope className="w-4 h-4 text-teal-400" />
            <span>Especialidades Cirúrgicas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Procedimentos de <span className="text-gradient-teal">Alta Precisão</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Técnicas cirúrgicas modernas por videolaparoscopia projetadas para segurança máxima, cicatrizes imperceptíveis e rápida recuperação hospitalar.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((proc) => {
            const Icon = proc.icon;
            return (
              <div
                key={proc.id}
                className="p-8 rounded-3xl glass-panel glass-card-hover border border-slate-800 flex flex-col justify-between group bg-slate-900/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-300 border border-slate-700">
                      {proc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {proc.title}
                  </h3>

                  <p className="text-xs font-medium text-teal-400 mb-4">{proc.subtitle}</p>
                  
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {proc.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProcedure(proc)}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-teal-500/20 text-slate-200 hover:text-teal-300 text-xs font-bold transition-all border border-slate-700 hover:border-teal-500/40"
                  >
                    <span>Ver Detalhes do Procedimento</span>
                    <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Procedure Modal */}
      {selectedProcedure && (
        <ProcedureModal
          procedure={selectedProcedure}
          onClose={() => setSelectedProcedure(null)}
        />
      )}
    </section>
  );
}

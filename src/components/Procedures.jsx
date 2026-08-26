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
    <section id="procedimentos" className="py-24 relative overflow-hidden bg-[#040c18] border-b border-blue-950/80">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Stethoscope className="w-4 h-4 text-sky-400" />
            <span>Especialidades Cirúrgicas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Procedimentos de <span className="text-gradient-cyan">Alta Precisão</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Técnicas cirúrgicas modernas por videolaparoscopia projetadas para segurança máxima, recuperação confortável e resultados duradouros.
          </p>
        </div>

        {/* Procedures Soft Light Blue Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {procedures.map((proc) => {
            const Icon = proc.icon;
            return (
              <div
                key={proc.id}
                className="p-7 sm:p-8 rounded-3xl bg-[#eaf3fc] border border-sky-100 shadow-xl hover:shadow-2xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Color Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Larger & Prominent Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-white border border-blue-200/80 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
                      <Icon className="w-8 h-8 stroke-[2]" />
                    </div>

                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100/80 text-blue-800 border border-blue-200/90">
                      {proc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-1.5 font-heading group-hover:text-blue-700 transition-colors leading-snug">
                    {proc.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 mb-4">{proc.subtitle}</p>
                  
                  <p className="text-sm text-slate-700 leading-relaxed mb-6">
                    {proc.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-200/60">
                  <button
                    onClick={() => setSelectedProcedure(proc)}
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-blue-900 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md group/btn"
                  >
                    <span>Ver detalhes do procedimento</span>
                    <ArrowRight className="w-4 h-4 text-sky-300 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
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


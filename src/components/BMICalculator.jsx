import React, { useState } from 'react';
import { Calculator, CheckCircle2, AlertTriangle, Sparkles, MessageCircle } from 'lucide-react';

export default function BMICalculator() {
  const [weight, setWeight] = useState(98);
  const [height, setHeight] = useState(172);

  const heightMeters = height / 100;
  const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);

  const getBMICategory = (bmiValue) => {
    const val = parseFloat(bmiValue);
    if (val < 18.5) {
      return {
        label: 'Abaixo do Peso',
        color: 'text-sky-700',
        badgeBg: 'bg-sky-100 border-sky-300 text-sky-800',
        description: 'Massa corporal abaixo da faixa ideal. Recomendada consulta preventiva de orientação nutricional.',
        eligibleForBariatric: false,
      };
    } else if (val >= 18.5 && val <= 24.9) {
      return {
        label: 'Peso Normal / Saudável',
        color: 'text-emerald-700',
        badgeBg: 'bg-emerald-100 border-emerald-300 text-emerald-800',
        description: 'Seu IMC está na faixa ideal. Mantenha hábitos de alimentação saudável e acompanhamentos de rotina.',
        eligibleForBariatric: false,
      };
    } else if (val >= 25.0 && val <= 29.9) {
      return {
        label: 'Sobrepeso',
        color: 'text-amber-700',
        badgeBg: 'bg-amber-100 border-amber-300 text-amber-900',
        description: 'Sinal de atenção para ganho de peso. Indicado acompanhamento nutricional ou cirurgias gerais (hérnia, vesícula).',
        eligibleForBariatric: false,
      };
    } else if (val >= 30.0 && val <= 34.9) {
      return {
        label: 'Obesidade Grau I',
        color: 'text-orange-700',
        badgeBg: 'bg-orange-100 border-orange-300 text-orange-900',
        description: 'Elegível para Cirurgia Metabólica sob indicação caso haja comorbidades refratórias (Diabetes Tipo 2, Hipertensão grave).',
        eligibleForBariatric: true,
        criteria: 'Indicação para Cirurgia Metabólica (Diabetes Tipo 2 / Comorbidades)',
      };
    } else if (val >= 35.0 && val <= 39.9) {
      return {
        label: 'Obesidade Grau II (Severa)',
        color: 'text-rose-700',
        badgeBg: 'bg-rose-100 border-rose-300 text-rose-900',
        description: 'Forte indicação para Cirurgia Bariátrica (Bypass ou Sleeve) em presença de doenças associadas.',
        eligibleForBariatric: true,
        criteria: 'Elegível para Bariátrica (Bypass / Sleeve) com comorbidades',
      };
    } else {
      return {
        label: 'Obesidade Grau III (Mórbida)',
        color: 'text-purple-700',
        badgeBg: 'bg-purple-100 border-purple-300 text-purple-900',
        description: 'Indicação Formal Direta para Cirurgia Bariátrica por Videolaparoscopia para reversão metabólica e ganho de expectativa de vida.',
        eligibleForBariatric: true,
        criteria: 'Indicação Cirúrgica Formal Direta (SBCBM / CFM)',
      };
    }
  };

  const category = getBMICategory(bmi);

  const getWhatsAppMessage = () => {
    const text = `Ol%C3%A1%20Dr.%20Wilson!%20Calculei%20meu%20IMC%20no%20seu%20site.%20Peso:%20${weight}kg,%20Altura:%20${height}cm.%20Resultado:%20IMC%20${bmi}%20(${encodeURIComponent(category.label)}).%20Gostaria%20de%20agendar%20uma%20consulta.`;
    return `https://wa.me/5511999999999?text=${text}`;
  };

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Calculator className="w-4 h-4 text-teal-600" />
            <span>Ferramenta Diagnóstica Interativa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Calculadora de IMC & <span className="text-gradient-emerald-dark">Elegibilidade Bariátrica</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Ajuste os valores abaixo para descobrir seu IMC instantaneamente e saber se você atende aos critérios cirúrgicos oficiais.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Controls Box (Left) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Seus Dados Corporais</h3>
                  <p className="text-xs text-slate-500">Mova as barras para ajustar</p>
                </div>
              </div>

              {/* Weight Slider */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label htmlFor="weightSliderLight" className="text-slate-800">Peso Corporal</label>
                  <span className="text-teal-700 text-xl font-bold font-heading px-3 py-1 rounded-lg bg-teal-50 border border-teal-200">
                    {weight} kg
                  </span>
                </div>
                <input
                  id="weightSliderLight"
                  type="range"
                  min="40"
                  max="220"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>40 kg</span>
                  <span>130 kg</span>
                  <span>220 kg</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label htmlFor="heightSliderLight" className="text-slate-800">Altura</label>
                  <span className="text-teal-700 text-xl font-bold font-heading px-3 py-1 rounded-lg bg-teal-50 border border-teal-200">
                    {height} cm ({heightMeters.toFixed(2)} m)
                  </span>
                </div>
                <input
                  id="heightSliderLight"
                  type="range"
                  min="130"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>130 cm</span>
                  <span>175 cm</span>
                  <span>220 cm</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Diretrizes oficiais alinhadas com SBCBM e Organização Mundial da Saúde.</span>
            </div>
          </div>

          {/* Results Box (Right) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500">Classificação Atual</span>
                <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${category.badgeBg}`}>
                  {category.label}
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl sm:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">{bmi}</span>
                <span className="text-sm font-semibold text-slate-500">kg/m² (IMC)</span>
              </div>

              {/* Visual Meter Bar */}
              <div className="w-full bg-slate-200 h-3.5 rounded-full overflow-hidden flex mb-6 p-0.5 border border-slate-300">
                <div className="h-full bg-sky-400 w-[18.5%] rounded-l-full" title="Abaixo do peso" />
                <div className="h-full bg-emerald-500 w-[25%]" title="Peso normal" />
                <div className="h-full bg-amber-400 w-[20%]" title="Sobrepeso" />
                <div className="h-full bg-orange-400 w-[15%]" title="Obesidade I" />
                <div className="h-full bg-rose-500 w-[12%]" title="Obesidade II" />
                <div className="h-full bg-purple-600 w-[10%] rounded-r-full" title="Obesidade III" />
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {category.description}
              </p>

              {category.eligibleForBariatric && (
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-teal-900">Enquadramento nos Critérios Médicos</h4>
                    <p className="text-xs text-slate-700 mt-0.5">{category.criteria}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-4 border-t border-slate-100">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-teal-600/20 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar Resultado no WhatsApp para o Dr. Wilson</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

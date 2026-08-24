import React, { useState } from 'react';
import { Calculator, CheckCircle2, AlertTriangle, Sparkles, MoveHorizontal } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

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
        color: 'text-sky-400',
        hexColor: '#38bdf8',
        glowColor: 'rgba(56, 189, 248, 0.8)',
        badgeBg: 'bg-sky-950/80 border-sky-500 text-sky-300',
        cardBorder: 'border-sky-500/60 shadow-sky-950/30',
        description: 'Massa corporal abaixo da faixa ideal. Recomendada consulta preventiva de orientação nutricional.',
        eligibleForBariatric: false,
      };
    } else if (val >= 18.5 && val <= 24.9) {
      return {
        label: 'Peso Normal / Saudável',
        color: 'text-emerald-400',
        hexColor: '#10b981',
        glowColor: 'rgba(16, 185, 129, 0.8)',
        badgeBg: 'bg-emerald-950/80 border-emerald-500 text-emerald-300',
        cardBorder: 'border-emerald-500/60 shadow-emerald-950/30',
        description: 'Seu IMC está na faixa ideal. Mantenha hábitos de alimentação saudável e acompanhamentos de rotina.',
        eligibleForBariatric: false,
      };
    } else if (val >= 25.0 && val <= 29.9) {
      return {
        label: 'Sobrepeso',
        color: 'text-amber-400',
        hexColor: '#f59e0b',
        glowColor: 'rgba(245, 158, 11, 0.8)',
        badgeBg: 'bg-amber-950/80 border-amber-500 text-amber-300',
        cardBorder: 'border-amber-500/60 shadow-amber-950/30',
        description: 'Sinal de atenção para ganho de peso. Indicado acompanhamento nutricional ou cirurgias gerais (hérnia, vesícula).',
        eligibleForBariatric: false,
      };
    } else if (val >= 30.0 && val <= 34.9) {
      return {
        label: 'Obesidade Grau I',
        color: 'text-orange-400',
        hexColor: '#f97316',
        glowColor: 'rgba(249, 115, 22, 0.8)',
        badgeBg: 'bg-orange-950/80 border-orange-500 text-orange-300',
        cardBorder: 'border-orange-500/60 shadow-orange-950/30',
        description: 'Elegível para Cirurgia Metabólica sob indicação caso haja comorbidades refratórias (Diabetes Tipo 2, Hipertensão grave).',
        eligibleForBariatric: true,
        criteria: 'Indicação para Cirurgia Metabólica (Diabetes Tipo 2 / Comorbidades)',
      };
    } else if (val >= 35.0 && val <= 39.9) {
      return {
        label: 'Obesidade Grau II (Severa)',
        color: 'text-red-400',
        hexColor: '#ef4444',
        glowColor: 'rgba(239, 68, 68, 0.8)',
        badgeBg: 'bg-red-950/80 border-red-500 text-red-300',
        cardBorder: 'border-red-500/70 shadow-red-950/40',
        description: 'Forte indicação para Cirurgia Bariátrica (Bypass ou Sleeve) em presença de doenças associadas.',
        eligibleForBariatric: true,
        criteria: 'Elegível para Bariátrica (Bypass / Sleeve) com comorbidades',
      };
    } else {
      return {
        label: 'Obesidade Grau III (Mórbida)',
        color: 'text-red-500',
        hexColor: '#dc2626',
        glowColor: 'rgba(220, 38, 38, 0.9)',
        badgeBg: 'bg-red-950 border-red-600 text-red-200',
        cardBorder: 'border-red-600/80 shadow-red-950/50',
        description: 'Indicação Formal Direta para Cirurgia Bariátrica por Videolaparoscopia para reversão metabólica e ganho de expectativa de vida.',
        eligibleForBariatric: true,
        criteria: 'Indicação Cirúrgica Formal Direta (SBCBM / CFM)',
      };
    }
  };

  const category = getBMICategory(bmi);

  const weightPercent = Math.min(100, Math.max(0, ((weight - 40) / (220 - 40)) * 100));
  const heightPercent = Math.min(100, Math.max(0, ((height - 130) / (220 - 130)) * 100));

  const getWhatsAppMessage = () => {
    const text = `Ol%C3%A1%20Dr.%20Wilson!%20Calculei%20meu%20IMC%20no%20seu%20site.%20Peso:%20${weight}kg,%20Altura:%20${height}cm.%20Resultado:%20IMC%20${bmi}%20(${encodeURIComponent(category.label)}).%20Gostaria%20de%20agendar%20uma%20consulta.`;
    return `https://wa.me/5511999999999?text=${text}`;
  };

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden bg-[#07152b] border-b border-blue-950/80">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-navy border-blue-500/40 text-sky-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Calculator className="w-4 h-4 text-sky-400" />
            <span>Ferramenta Diagnóstica Interativa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Calculadora de IMC & <span className="text-gradient-cyan">Elegibilidade Bariátrica</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Ajuste os valores abaixo para descobrir seu IMC instantaneamente e saber se você atende aos critérios cirúrgicos oficiais.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Controls Box (Left) */}
          <div className={`lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#081c3c] border shadow-2xl flex flex-col justify-between space-y-8 transition-all duration-300 ${category.cardBorder}`}>
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-sky-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">Seus Dados Corporais</h3>
                    <p className="text-xs text-slate-300">Mova os cursores para ajustar</p>
                  </div>
                </div>

                {/* Instant Feedback Pill for Mobile */}
                <div className="flex items-center">
                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold border transition-all duration-300 shadow-md ${category.badgeBg}`}>
                    IMC {bmi} • {category.label}
                  </span>
                </div>
              </div>

              {/* Weight Slider */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label htmlFor="weightSliderNavy" className="text-slate-200 flex items-center gap-2 font-bold">
                    <span>Peso Corporal</span>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-blue-900/80 text-sky-300 border border-blue-600/50 flex items-center gap-1 animate-pulse">
                      <MoveHorizontal className="w-3 h-3" /> Arraste
                    </span>
                  </label>
                  <span className={`text-xl font-bold font-heading px-3.5 py-1 rounded-xl bg-blue-950 border transition-all duration-300 ${category.color} ${category.cardBorder}`}>
                    {weight} kg
                  </span>
                </div>
                <div className="relative flex items-center">
                  <input
                    id="weightSliderNavy"
                    type="range"
                    min="40"
                    max="220"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="custom-range-slider border border-blue-700/60 shadow-inner"
                    style={{
                      background: `linear-gradient(to right, ${category.hexColor} 0%, ${category.hexColor} ${weightPercent}%, #05142b ${weightPercent}%, #05142b 100%)`,
                      '--slider-thumb-color': category.hexColor,
                      '--slider-glow-color': category.glowColor,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-medium pt-1">
                  <span>40 kg</span>
                  <span>130 kg</span>
                  <span>220 kg</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label htmlFor="heightSliderNavy" className="text-slate-200 flex items-center gap-2 font-bold">
                    <span>Altura</span>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-blue-900/80 text-sky-300 border border-blue-600/50 flex items-center gap-1 animate-pulse">
                      <MoveHorizontal className="w-3 h-3" /> Arraste
                    </span>
                  </label>
                  <span className={`text-xl font-bold font-heading px-3.5 py-1 rounded-xl bg-blue-950 border transition-all duration-300 ${category.color} ${category.cardBorder}`}>
                    {height} cm ({heightMeters.toFixed(2)} m)
                  </span>
                </div>
                <div className="relative flex items-center">
                  <input
                    id="heightSliderNavy"
                    type="range"
                    min="130"
                    max="220"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="custom-range-slider border border-blue-700/60 shadow-inner"
                    style={{
                      background: `linear-gradient(to right, ${category.hexColor} 0%, ${category.hexColor} ${heightPercent}%, #05142b ${heightPercent}%, #05142b 100%)`,
                      '--slider-thumb-color': category.hexColor,
                      '--slider-glow-color': category.glowColor,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-medium pt-1">
                  <span>130 cm</span>
                  <span>175 cm</span>
                  <span>220 cm</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-900/60 text-xs text-slate-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Diretrizes oficiais alinhadas com SBCBM e CFM.</span>
            </div>
          </div>

          {/* Results Box (Right) */}
          <div className={`lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#081c3c] border shadow-2xl flex flex-col justify-between space-y-6 transition-all duration-300 ${category.cardBorder}`}>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-300">Classificação Médica</span>
                <span className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold border transition-all duration-300 ${category.badgeBg}`}>
                  {category.label}
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">{bmi}</span>
                <span className="text-sm font-semibold text-slate-300">kg/m² (IMC)</span>
              </div>

              {/* Visual Meter Bar */}
              <div className="w-full bg-blue-950 h-3.5 rounded-full overflow-hidden flex mb-6 p-0.5 border border-blue-800">
                <div className="h-full bg-sky-400 w-[18.5%] rounded-l-full" title="Abaixo do peso" />
                <div className="h-full bg-emerald-500 w-[25%]" title="Peso normal" />
                <div className="h-full bg-amber-400 w-[20%]" title="Sobrepeso" />
                <div className="h-full bg-orange-400 w-[15%]" title="Obesidade I" />
                <div className="h-full bg-red-500 w-[12%]" title="Obesidade II" />
                <div className="h-full bg-red-700 w-[10%] rounded-r-full" title="Obesidade III" />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {category.description}
              </p>

              {category.eligibleForBariatric && (
                <div className="p-4 rounded-2xl bg-blue-950/90 border border-blue-500/40 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Enquadramento nos Critérios Médicos</h4>
                    <p className="text-xs text-sky-200 mt-0.5">{category.criteria}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-4 border-t border-blue-900/60">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 border border-blue-400/30"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                <span>Enviar Resultado no WhatsApp para o Dr. Wilson</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

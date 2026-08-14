import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mariana S.',
      age: '38 anos',
      procedure: 'Bypass Gástrico por Laparoscopia',
      result: '-42 kg em 10 meses',
      text: 'Minha vida mudou por completo. Tinha diabetes descompensado e hoje meus exames estão absolutamente normais. O Dr. Wilson e sua equipe me deram suporte em cada etapa com um carinho inigualável.',
      rating: 5,
    },
    {
      name: 'Roberto V.',
      age: '45 anos',
      procedure: 'Sleeve Gástrico (Protocolo ERAS)',
      result: '-38 kg em 8 meses',
      text: 'Impressionante como a cirurgia por vídeo quase não teve dor. Em 24h eu já estava de alta e caminhando pelo quarto. Hoje voltei a correr e tenho uma energia renovada para brincar com meus filhos.',
      rating: 5,
    },
    {
      name: 'Camila P.',
      age: '32 anos',
      procedure: 'Cirurgia de Hérnia & Diástase Abdominal',
      result: 'Recuperação Muscular 100%',
      text: 'Fiz a correção de diástase pós-gestação com o Dr. Wilson. O resultado estético e funcional superou todas as minhas expectativas. Acabaram as dores nas costas que me incomodavam há anos!',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <MessageSquare className="w-4 h-4 text-teal-600" />
            <span>Depoimentos & Transformações</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Histórias Reais de <span className="text-gradient-emerald-dark">Superação & Saúde</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Veja o relato de pacientes que transformaram sua saúde e qualidade de vida com a equipe do Dr. Wilson.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-6 flex flex-col justify-between light-card-hover"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-slate-900 font-bold text-base font-heading">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.procedure} • {item.age}</p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                  {item.result}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

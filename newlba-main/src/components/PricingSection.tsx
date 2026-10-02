import { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';
import { Modality } from '../types';

interface PricingSectionProps {
  onSelectPlan: (planId: string, modality: Modality) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [selectedModality, setSelectedModality] = useState<Modality>('ead');

  const modalityNames: Record<Modality, string> = {
    ead: 'EAD (100% Online)',
    hibrido: 'Híbrido (Online + Polos)',
    integral: 'Integral (Imersão Diária)'
  };

  return (
    <section 
      id="planos" 
      className="py-20 bg-[#F8F9FC] dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 text-[#5B2C9E] dark:text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
            <span>Investimento em Você</span>
          </div>
          <h2 
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Planos e Preços Transparentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Acesso completo sem taxa de matrícula ou multas de cancelamento. Escolha a intensidade e a modalidade que cabem na sua rotina.
          </p>

          {/* Filter by Modality */}
          <div className="pt-4 flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Selecione a modalidade para ver os valores:
            </span>
            <div 
              role="radiogroup" 
              aria-label="Filtro de modalidade de ensino para preços"
              className="inline-flex p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              {(['ead', 'hibrido', 'integral'] as Modality[]).map((mod) => (
                <button
                  key={mod}
                  role="radio"
                  aria-checked={selectedModality === mod}
                  onClick={() => setSelectedModality(mod)}
                  className={`py-2.5 px-4 sm:px-6 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    selectedModality === mod
                      ? 'bg-[#5B2C9E] text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {modalityNames[mod]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-4">
          {PRICING_PLANS.map((plan) => {
            const price = plan.prices[selectedModality];
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-white dark:bg-slate-900 border-2 border-[#5B2C9E] dark:border-[#00C9A7] shadow-xl shadow-[#5B2C9E]/10 scale-100 md:-translate-y-2'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#5B2C9E] text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00C9A7]" />
                    <span>Mais Escolhido</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-500 dark:text-slate-400">R$</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#00897B] dark:text-[#00C9A7] font-semibold mt-1">
                      Modalidade {modalityNames[selectedModality].split(' ')[0]} inclusa
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Recursos incluídos:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <Check className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPlan(plan.id, selectedModality)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-[#5B2C9E] hover:bg-[#4A2382] text-white shadow-[#5B2C9E]/20 hover:scale-[1.02]'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2">
                    7 dias de garantia ou 100% de reembolso
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, UserCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { UserType } from '../types';

export default function TestimonialsSection() {
  const [filter, setFilter] = useState<'all' | UserType>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredList = filter === 'all' 
    ? TESTIMONIALS_DATA 
    : TESTIMONIALS_DATA.filter(item => item.type === filter);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredList.length - 1 ? 0 : prev + 1));
  };

  const current = filteredList[currentIndex] || filteredList[0];

  return (
    <section 
      id="sobre"
      className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 text-[#5B2C9E] dark:text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
              <span>Vozes da Comunidade</span>
            </div>
            <h2 
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
            >
              Histórias reais de alunos e professores
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Conheça quem aprende, ensina e constrói conexões plurais todos os dias na LínguaViva.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F8F9FC] dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-[#5B2C9E] dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('aluno')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filter === 'aluno'
                  ? 'bg-white dark:bg-slate-700 text-[#5B2C9E] dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Alunos
            </button>
            <button
              onClick={() => setFilter('professor')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filter === 'professor'
                  ? 'bg-white dark:bg-slate-700 text-[#5B2C9E] dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              Professores
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        {current && (
          <div className="relative bg-[#F8F9FC] dark:bg-slate-800/80 rounded-3xl p-8 sm:p-12 border border-slate-200/90 dark:border-slate-700 shadow-sm max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-[#5B2C9E]/20 dark:text-[#00C9A7]/20 absolute top-6 right-8 pointer-events-none" />

            <div className="space-y-6">
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-amber-400" aria-label="Avaliação 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-2">5.0 / 5.0</span>
              </div>

              {/* Quote text */}
              <p className="text-lg sm:text-2xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed italic">
                "{current.content}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0 border-2 border-white dark:border-slate-600 shadow-sm">
                    <img
                      src={current.avatar}
                      alt={`Foto de ${current.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{current.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-[#00C9A7]/15 text-[#00897B] dark:text-[#00C9A7] font-semibold">
                        Verificado
                      </span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {current.role} · {current.location}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Idioma: <span className="font-semibold text-[#5B2C9E] dark:text-[#00C9A7]">{current.language}</span> · Modalidade: <span className="font-semibold">{current.modality}</span>
                    </p>
                  </div>
                </div>

                {/* Nav buttons */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={handlePrev}
                    aria-label="Depoimento anterior"
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#00C9A7]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-bold text-slate-500 px-2 tabular-nums">
                    {currentIndex + 1} de {filteredList.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Próximo depoimento"
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#00C9A7]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

import { Hand, Sparkles, CheckCircle2, ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

interface HeroSectionProps {
  onSelectAction: (target: 'aluno' | 'professor') => void;
  onOpenQuiz: () => void;
}

export default function HeroSection({ onSelectAction, onOpenQuiz }: HeroSectionProps) {
  return (
    <section 
      id="inicio" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8F9FC] via-white to-[#F8F9FC] dark:from-[#0D0A1A] dark:via-slate-900 dark:to-[#0D0A1A]"
      aria-labelledby="hero-heading"
    >
      {/* Subtle organic decorative background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#5B2C9E]/10 via-[#00C9A7]/10 to-transparent blur-3xl pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Accessibility and inclusion lead */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 border border-[#5B2C9E]/20 text-[#5B2C9E] dark:text-[#00C9A7] text-xs font-bold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-[#00C9A7]" aria-hidden="true" />
              <span>Plataforma 100% Inclusiva & Acessível</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600 dark:text-slate-300 font-medium">Libras Oficial</span>
            </div>

            {/* Main Title */}
            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] font-display text-balance"
            >
              Aprenda sem limites.{' '}
              <span className="text-[#5B2C9E] dark:text-[#00C9A7]">
                Ensine sem fronteiras.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Libras, Espanhol e Inglês — nas modalidades <strong className="font-semibold text-slate-900 dark:text-white">EAD</strong>, <strong className="font-semibold text-slate-900 dark:text-white">Integral</strong> ou <strong className="font-semibold text-slate-900 dark:text-white">Híbrida</strong>. Uma comunidade bilíngue e acessível para quem quer aprender e para educadores que transformam vidas.
            </p>

            {/* Two Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onSelectAction('aluno')}
                className="w-full sm:w-auto px-8 py-4 bg-[#5B2C9E] hover:bg-[#4A2382] text-white font-bold text-base rounded-2xl shadow-xl shadow-[#5B2C9E]/20 hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 focus-visible:ring-4 focus-visible:ring-[#00C9A7]"
              >
                <span>Sou Aluno</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onSelectAction('professor')}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-[#5B2C9E] dark:text-[#00C9A7] hover:bg-slate-50 dark:hover:bg-slate-700/80 font-bold text-base rounded-2xl border-2 border-[#5B2C9E]/30 dark:border-[#00C9A7]/40 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 focus-visible:ring-4 focus-visible:ring-[#5B2C9E]"
              >
                <span>Sou Professor</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#00C9A7]/20 text-[#00C9A7]">Vagas Abertas</span>
              </button>
            </div>

            {/* Quick Placement Test prompt */}
            <div className="pt-2 flex items-center justify-center lg:justify-start">
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#5B2C9E] dark:hover:text-[#00C9A7] underline underline-offset-4 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
                <span>Não sabe seu nível? Faça o Teste de Nivelamento Rápido em 2 minutos</span>
              </button>
            </div>

            {/* Trust and Key Features row */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#5B2C9E] dark:text-white tabular-nums">
                  15.000+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Alunos formados
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00C9A7] tabular-nums">
                  480+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Professores nativos & surdos
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FF6B6B] tabular-nums">
                  98.6%
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Aprovação & fluência
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Soft decorative frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={APP_IMAGES.hero}
                  alt="Grupo diverso e alegre de estudantes e professores de idiomas, com mulher sinalizando em Libras com expressão acolhedora em ambiente moderno"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Accessible subtle scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Over-image highlight chip */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00C9A7]/20 text-[#00C9A7] flex items-center justify-center font-bold">
                      <Hand className="w-5 h-5 text-[#00C9A7]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">Libras como 1º Idioma</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Instrutores surdos e ouvintes certificados</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#5B2C9E] dark:text-[#00C9A7] bg-[#5B2C9E]/10 dark:bg-[#00C9A7]/20 px-2.5 py-1 rounded-lg">
                    Inclusivo
                  </span>
                </div>
              </div>

              {/* Float badge: Acessibilidade WCAG */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl py-2 px-3.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C9A7]" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Padrão WCAG 2.1 AA
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

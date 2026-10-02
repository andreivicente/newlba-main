import { useState } from 'react';
import { UserCheck, BookOpen, Sparkles, GraduationCap, FileText, ClipboardCheck, ArrowRight } from 'lucide-react';
import { UserType } from '../types';

interface HowItWorksSectionProps {
  onSelectAction: (target: UserType) => void;
  onOpenQuiz: () => void;
}

export default function HowItWorksSection({ onSelectAction, onOpenQuiz }: HowItWorksSectionProps) {
  const [activeTab, setActiveTab] = useState<UserType>('aluno');

  const studentSteps = [
    {
      step: '01',
      title: 'Cadastre-se na plataforma',
      description: 'Preencha seus dados básicos em menos de 1 minuto. Nosso cadastro é 100% acessível e gratuito para iniciar.',
      icon: UserCheck
    },
    {
      step: '02',
      title: 'Escolha idioma e modalidade',
      description: 'Selecione Libras, Espanhol ou Inglês e a modalidade que melhor combina com a sua rotina: EAD, Integral ou Híbrida.',
      icon: BookOpen
    },
    {
      step: '03',
      title: 'Faça o teste de nivelamento',
      description: 'Descubra sua turma ideal com nosso teste online rápido ou agende uma avaliação acolhedora com um professor.',
      icon: Sparkles
    },
    {
      step: '04',
      title: 'Comece a estudar e praticar',
      description: 'Receba seus acessos, entre na sala virtual ou polo presencial e inicie suas aulas ao vivo com metodologia inclusiva.',
      icon: GraduationCap
    }
  ];

  const teacherSteps = [
    {
      step: '01',
      title: 'Cadastre seu perfil docente',
      description: 'Informe sua formação, os idiomas que ensina (Libras, Espanhol ou Inglês) e suas preferências de modalidade de aula.',
      icon: UserCheck
    },
    {
      step: '02',
      title: 'Envie sua proposta e currículo',
      description: 'Anexe seu currículo (Lattes/LinkedIn) e nos conte sobre sua experiência pedagógica ou vivência nativa/surda.',
      icon: FileText
    },
    {
      step: '03',
      title: 'Passe pela avaliação pedagógica',
      description: 'Participe de um bate-papo acolhedor com nossa coordenação para alinhamento metodológico e capacitação em acessibilidade.',
      icon: ClipboardCheck
    },
    {
      step: '04',
      title: 'Comece a ensinar e faturar',
      description: 'Abra seus horários na plataforma, receba seus alunos e conte com remuneração transparente e suporte pedagógico contínuo.',
      icon: GraduationCap
    }
  ];

  const currentSteps = activeTab === 'aluno' ? studentSteps : teacherSteps;

  return (
    <section 
      id="como-funciona" 
      className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 text-[#5B2C9E] dark:text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
            <span>Passo a Passo Simples</span>
          </div>
          <h2 
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Como funciona a LínguaViva
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Processo transparente, desburocratizado e acolhedor para quem quer aprender e para quem deseja ensinar.
          </p>

          {/* Interactive Toggle Switcher */}
          <div className="pt-4 flex justify-center">
            <div 
              role="tablist" 
              aria-label="Escolha o fluxo de instruções"
              className="inline-flex p-1.5 bg-[#F8F9FC] dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner"
            >
              <button
                role="tab"
                id="tab-aluno"
                aria-selected={activeTab === 'aluno'}
                aria-controls="panel-steps"
                onClick={() => setActiveTab('aluno')}
                className={`py-3 px-6 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'aluno'
                    ? 'bg-[#5B2C9E] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Jornada do Aluno
              </button>
              <button
                role="tab"
                id="tab-professor"
                aria-selected={activeTab === 'professor'}
                aria-controls="panel-steps"
                onClick={() => setActiveTab('professor')}
                className={`py-3 px-6 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'professor'
                    ? 'bg-[#5B2C9E] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Jornada do Professor
              </button>
            </div>
          </div>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div 
          id="panel-steps" 
          role="tabpanel" 
          aria-labelledby={activeTab === 'aluno' ? 'tab-aluno' : 'tab-professor'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
        >
          {currentSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#F8F9FC] dark:bg-slate-800/80 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-[#5B2C9E] dark:text-[#00C9A7] font-display tabular-nums">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[#5B2C9E] dark:text-[#00C9A7] flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtitle helper or action hint */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Etapa {index + 1} de 4
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#5B2C9E]/10 via-[#00C9A7]/15 to-[#5B2C9E]/10 border border-[#5B2C9E]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              {activeTab === 'aluno' 
                ? 'Pronto para dar o primeiro passo no seu novo idioma?' 
                : 'Quer fazer parte do nosso corpo docente inclusivo?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {activeTab === 'aluno'
                ? 'Cadastre-se hoje mesmo e aproveite as condições especiais de lançamento com teste de nivelamento incluso.'
                : 'Cadastre-se gratuitamente, defina sua disponibilidade e comece a ministrar aulas online ou híbridas.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {activeTab === 'aluno' && (
              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto py-3 px-5 rounded-xl border border-[#5B2C9E] dark:border-[#00C9A7] text-[#5B2C9E] dark:text-[#00C9A7] hover:bg-white dark:hover:bg-slate-800 font-bold text-xs sm:text-sm transition-colors whitespace-nowrap shadow-sm"
              >
                Fazer Teste de Nivelamento
              </button>
            )}
            <button
              onClick={() => onSelectAction(activeTab)}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#5B2C9E] hover:bg-[#4A2382] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>{activeTab === 'aluno' ? 'Cadastre-se como Aluno' : 'Cadastre-se como Professor'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { Language, Modality } from '../types';

interface PlacementQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (language: Language, modality: Modality, level: string) => void;
}

export default function PlacementQuizModal({ isOpen, onClose, onSelectResult }: PlacementQuizModalProps) {
  const [step, setStep] = useState(1);
  const [selectedLang, setSelectedLang] = useState<Language | ''>('');
  const [experience, setExperience] = useState('');
  const [objective, setObjective] = useState('');
  const [availability, setAvailability] = useState<Modality | ''>('');

  if (!isOpen) return null;

  const handleFinish = () => {
    const lang = (selectedLang || 'libras') as Language;
    const mod = (availability || 'ead') as Modality;
    const level = experience === 'zero' ? 'Iniciante' : experience === 'basic' ? 'Básico' : 'Intermediário';
    onSelectResult(lang, mod, level);
    onClose();
  };

  const handleReset = () => {
    setStep(1);
    setSelectedLang('');
    setExperience('');
    setObjective('');
    setAvailability('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-labelledby="quiz-title"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FF6B6B]" />
            <h3 id="quiz-title" className="font-extrabold text-lg text-slate-900 dark:text-white font-display">
              Teste de Nivelamento Rápido
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Fechar teste de nivelamento"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-semibold text-slate-500">
            <span>Passo {step} de 3</span>
            <span>{step === 1 ? '33%' : step === 2 ? '66%' : '100%'}</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-[#5B2C9E] transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Idioma de Interesse */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              1. Qual idioma você deseja aprender agora?
            </h4>
            <div className="grid gap-3">
              {[
                { id: 'libras' as Language, title: 'Libras (Língua Brasileira de Sinais)', desc: 'Comunicação inclusiva, cidadania e mercado profissional' },
                { id: 'espanhol' as Language, title: 'Espanhol', desc: 'Comunicação latina e europeia com fluência espontânea' },
                { id: 'ingles' as Language, title: 'Inglês', desc: 'Carreira global, exames de proficiência e tecnologia' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedLang(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedLang === item.id
                      ? 'border-[#5B2C9E] bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/25 text-[#5B2C9E] dark:text-[#00C9A7] font-bold'
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 bg-white dark:bg-slate-800/60'
                  }`}
                >
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>

            <button
              disabled={!selectedLang}
              onClick={() => setStep(2)}
              className="w-full py-3.5 px-4 rounded-xl bg-[#5B2C9E] hover:bg-[#4A2382] disabled:opacity-40 text-white font-bold text-sm shadow transition-all flex items-center justify-center gap-2 mt-4"
            >
              <span>Próxima pergunta</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Contato prévio */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              2. Qual é o seu nível de contato prévio?
            </h4>
            <div className="grid gap-3">
              {[
                { id: 'zero', title: 'Nunca estudei / Do Zero absoluto', desc: 'Quero aprender as bases corretas desde os primeiros parâmetros e sons.' },
                { id: 'basic', title: 'Conheço palavras e expressões básicas', desc: 'Entendo termos soltos, mas tenho dificuldade em manter um diálogo contínuo.' },
                { id: 'intermediate', title: 'Já estudei antes e quero destravar a fluência', desc: 'Consigo me comunicar com pausas e quero ganhar segurança e vocabulário técnico.' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setExperience(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    experience === item.id
                      ? 'border-[#00C9A7] bg-[#00C9A7]/10 dark:bg-[#00C9A7]/20 text-[#00897B] dark:text-[#00C9A7] font-bold'
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 bg-white dark:bg-slate-800/60'
                  }`}
                >
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setStep(1)}
                className="py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300"
              >
                Voltar
              </button>
              <button
                disabled={!experience}
                onClick={() => setStep(3)}
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#5B2C9E] hover:bg-[#4A2382] disabled:opacity-40 text-white font-bold text-sm shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Próxima pergunta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Modalidade e Disponibilidade */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              3. Como você prefere estudar?
            </h4>
            <div className="grid gap-3">
              {[
                { id: 'ead' as Modality, title: 'EAD (100% Online)', desc: 'Estudo em casa com aulas ao vivo e flexibilidade de horários gravados.' },
                { id: 'hibrido' as Modality, title: 'Híbrido (Online + Encontros em Polos)', desc: 'Estudo a teoria online e participo de dinâmicas e cafés presenciais.' },
                { id: 'integral' as Modality, title: 'Integral (Imersão Intensiva)', desc: 'Quero evolução acelerada com prática diária e foco em resultados rápidos.' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setAvailability(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    availability === item.id
                      ? 'border-[#FF6B6B] bg-[#FF6B6B]/10 dark:bg-[#FF6B6B]/20 text-[#FA5252] font-bold'
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 bg-white dark:bg-slate-800/60'
                  }`}
                >
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setStep(2)}
                className="py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300"
              >
                Voltar
              </button>
              <button
                disabled={!availability}
                onClick={handleFinish}
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#00C9A7] hover:bg-[#00B395] text-slate-900 font-bold text-sm shadow transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Ver Minha Turma Recomendada</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

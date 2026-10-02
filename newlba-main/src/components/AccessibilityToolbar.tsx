import { useState, useEffect } from 'react';
import { 
  Eye, 
  ZoomIn, 
  ZoomOut, 
  Sun, 
  Moon, 
  Volume2, 
  Compass, 
  RotateCcw, 
  X, 
  Hand,
  Check
} from 'lucide-react';

interface AccessibilityProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  fontScale: number;
  setFontScale: (fn: (prev: number) => number) => void;
  readingGuide: boolean;
  setReadingGuide: (val: boolean) => void;
}

export default function AccessibilityToolbar({
  darkMode,
  setDarkMode,
  highContrast,
  setHighContrast,
  fontScale,
  setFontScale,
  readingGuide,
  setReadingGuide
}: AccessibilityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [vlibrasActive, setVlibrasActive] = useState(false);
  const [speechActive, setSpeechActive] = useState(false);
  const [speechStatus, setSpeechStatus] = useState<string | null>(null);

  // VLibras launcher trigger
  const triggerVLibras = () => {
    setVlibrasActive(true);
    // Find VLibras button in DOM if rendered
    const vlibrasBtn = document.querySelector('[vw-access-button]') as HTMLElement;
    if (vlibrasBtn) {
      vlibrasBtn.click();
    } else {
      // If external script not ready, notify
      alert('O assistente VLibras está disponível no canto direito da tela. Clique no ícone azul com as mãos!');
    }
  };

  // Text to speech feature for selected text or main summary
  const handleReadScreen = () => {
    if ('speechSynthesis' in window) {
      if (speechActive) {
        window.speechSynthesis.cancel();
        setSpeechActive(false);
        setSpeechStatus(null);
        return;
      }

      const selectedText = window.getSelection()?.toString();
      const textToRead = selectedText && selectedText.trim().length > 0 
        ? selectedText 
        : 'Bem-vindo ao LínguaViva. Plataforma inclusiva de ensino de Libras, Espanhol e Inglês nas modalidades EAD, Integral e Híbrida.';

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'pt-BR';
      utterance.rate = 1.0;

      utterance.onstart = () => {
        setSpeechActive(true);
        setSpeechStatus('Lendo conteúdo em voz alta...');
      };
      utterance.onend = () => {
        setSpeechActive(false);
        setSpeechStatus(null);
      };
      utterance.onerror = () => {
        setSpeechActive(false);
        setSpeechStatus(null);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Seu navegador não suporta a síntese de voz nativa.');
    }
  };

  // Reset accessibility settings
  const handleReset = () => {
    setFontScale(() => 1);
    setHighContrast(false);
    setReadingGuide(false);
    setDarkMode(false);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeechActive(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <aside aria-label="Menu de Acessibilidade" className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="accessibility-drawer"
          className="flex items-center gap-2 px-4 py-3 bg-[#5B2C9E] text-white rounded-full shadow-xl hover:bg-[#4A2382] transition-all hover:scale-105 focus-visible:ring-4 focus-visible:ring-[#00C9A7] font-semibold text-sm border-2 border-white/20"
          title="Abrir painel de acessibilidade (Alt + A)"
        >
          <div className="w-6 h-6 rounded-full bg-[#00C9A7] text-[#5B2C9E] flex items-center justify-center font-bold text-xs">
            ♿
          </div>
          <span className="hidden sm:inline">Acessibilidade</span>
        </button>

        {/* Drawer Panel */}
        {isOpen && (
          <div
            id="accessibility-drawer"
            role="dialog"
            aria-label="Opções de Acessibilidade LínguaViva"
            className="absolute bottom-16 left-0 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 text-slate-800 dark:text-slate-100 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">♿</span>
                <h3 className="font-bold text-base text-[#5B2C9E] dark:text-[#00C9A7]">
                  Recursos de Acessibilidade
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Fechar painel de acessibilidade"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Font Size Scaling */}
              <div>
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Tamanho do Texto
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFontScale(prev => Math.max(1, prev - 1))}
                    disabled={fontScale <= 1}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 text-sm font-medium transition-colors"
                    aria-label="Diminuir tamanho da fonte"
                  >
                    <ZoomOut className="w-4 h-4 text-[#5B2C9E] dark:text-[#00C9A7]" />
                    <span>Diminuir</span>
                  </button>
                  <span className="px-2 text-xs font-semibold tabular-nums text-slate-700 dark:text-slate-300">
                    {fontScale === 1 ? '100%' : fontScale === 2 ? '115%' : fontScale === 3 ? '130%' : '145%'}
                  </span>
                  <button
                    onClick={() => setFontScale(prev => Math.min(4, prev + 1))}
                    disabled={fontScale >= 4}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 text-sm font-medium transition-colors"
                    aria-label="Aumentar tamanho da fonte"
                  >
                    <ZoomIn className="w-4 h-4 text-[#5B2C9E] dark:text-[#00C9A7]" />
                    <span>Aumentar</span>
                  </button>
                </div>
              </div>

              {/* Contrast and Dark Mode */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-xs font-semibold transition-colors ${
                    highContrast
                      ? 'bg-yellow-400 text-black border-yellow-500'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                  }`}
                  aria-pressed={highContrast}
                >
                  <Eye className="w-4 h-4" />
                  <span>Alto Contraste</span>
                  {highContrast && <Check className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-xs font-semibold transition-colors ${
                    darkMode
                      ? 'bg-[#5B2C9E] text-white border-transparent'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                  }`}
                  aria-pressed={darkMode}
                >
                  {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#5B2C9E]" />}
                  <span>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
                </button>
              </div>

              {/* Reading Guide and Speech Reader */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setReadingGuide(!readingGuide)}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-xs font-semibold transition-colors ${
                    readingGuide
                      ? 'bg-[#00C9A7] text-slate-900 border-[#00C9A7]'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                  }`}
                  aria-pressed={readingGuide}
                >
                  <Compass className="w-4 h-4" />
                  <span>Guia de Leitura</span>
                  {readingGuide && <Check className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={handleReadScreen}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-xs font-semibold transition-colors ${
                    speechActive
                      ? 'bg-[#FF6B6B] text-white border-[#FF6B6B]'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                  }`}
                  aria-pressed={speechActive}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{speechActive ? 'Pausar Áudio' : 'Ler Tela'}</span>
                </button>
              </div>

              {/* Official VLibras Trigger */}
              <button
                onClick={triggerVLibras}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                    <Hand className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold">Ativar VLibras (Oficial)</p>
                    <p className="text-[11px] text-blue-700 dark:text-blue-300">Avatar tradutor oficial em Língua de Sinais</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Abrir →</span>
              </button>

              {speechStatus && (
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-emerald-800 dark:text-emerald-200 text-xs">
                  {speechStatus}
                </div>
              )}

              {/* Reset to Default */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-500">Padrão WCAG 2.1 AA</span>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restaurar padrão</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

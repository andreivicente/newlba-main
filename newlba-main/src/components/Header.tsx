import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Hand } from 'lucide-react';

interface HeaderProps {
  onSelectAction: (target: 'aluno' | 'professor') => void;
  onOpenAccessibility: () => void;
}

export default function Header({ onSelectAction, onOpenAccessibility }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a href="#conteudo-principal" className="skip-to-content">
        Pular para o conteúdo principal (Acessibilidade)
      </a>

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 py-3' 
            : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand title */}
          <a 
            href="#" 
            className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#00C9A7] rounded-lg p-1"
            aria-label="LínguaViva - Página Inicial"
          >
            <div className="w-10 h-10 rounded-xl bg-[#5B2C9E] text-white flex items-center justify-center font-extrabold text-xl shadow-md group-hover:bg-[#4A2382] transition-colors">
              <span className="text-[#00C9A7]">L</span>V
            </div>
            <span className="text-2xl font-black tracking-tight text-[#5B2C9E] dark:text-white font-display">
              Língua<span className="text-[#00C9A7]">Viva</span>
            </span>
          </a>

          {/* Zone 2: 4-6 Nav Links (Single line clean text) */}
          <nav 
            className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700 dark:text-slate-300"
            aria-label="Navegação Principal"
          >
            <a 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
              className="hover:text-[#5B2C9E] dark:hover:text-[#00C9A7] transition-colors"
            >
              Início
            </a>
            <a 
              href="#cursos" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#cursos'); }}
              className="hover:text-[#5B2C9E] dark:hover:text-[#00C9A7] transition-colors"
            >
              Cursos
            </a>
            <a 
              href="#modalidades" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#modalidades'); }}
              className="hover:text-[#5B2C9E] dark:hover:text-[#00C9A7] transition-colors"
            >
              Modalidades
            </a>
            <a 
              href="#seja-professor" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#seja-professor'); }}
              className="hover:text-[#5B2C9E] dark:hover:text-[#00C9A7] transition-colors"
            >
              Seja Professor
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#sobre'); }}
              className="hover:text-[#5B2C9E] dark:hover:text-[#00C9A7] transition-colors"
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}
              className="hover:text-[#5B2C9E] dark:hover:text-[#00C9A7] transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Zone 3: 2 Primary actions + Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectAction('aluno')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs md:text-sm font-bold text-white bg-[#5B2C9E] hover:bg-[#4A2382] rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#00C9A7]"
            >
              Quero Aprender
            </button>
            <button
              onClick={() => onSelectAction('professor')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs md:text-sm font-bold text-[#5B2C9E] dark:text-[#00C9A7] bg-[#00C9A7]/15 dark:bg-[#00C9A7]/20 hover:bg-[#00C9A7]/30 border border-[#00C9A7]/40 rounded-xl transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#5B2C9E]"
            >
              Quero Ensinar
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-[#00C9A7]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800 dark:text-slate-200">
              <a 
                href="#inicio" 
                onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Início
              </a>
              <a 
                href="#cursos" 
                onClick={(e) => { e.preventDefault(); handleNavClick('#cursos'); }}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cursos
              </a>
              <a 
                href="#modalidades" 
                onClick={(e) => { e.preventDefault(); handleNavClick('#modalidades'); }}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Modalidades
              </a>
              <a 
                href="#seja-professor" 
                onClick={(e) => { e.preventDefault(); handleNavClick('#seja-professor'); }}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Seja Professor
              </a>
              <a 
                href="#sobre" 
                onClick={(e) => { e.preventDefault(); handleNavClick('#sobre'); }}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Sobre
              </a>
              <a 
                href="#contato" 
                onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Contato
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectAction('aluno');
                }}
                className="w-full py-2.5 px-3 text-center text-sm font-bold text-white bg-[#5B2C9E] rounded-xl shadow"
              >
                Quero Aprender
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectAction('professor');
                }}
                className="w-full py-2.5 px-3 text-center text-sm font-bold text-[#5B2C9E] dark:text-[#00C9A7] bg-[#00C9A7]/15 rounded-xl border border-[#00C9A7]/40"
              >
                Quero Ensinar
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

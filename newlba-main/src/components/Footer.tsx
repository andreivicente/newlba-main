import { Hand, ShieldCheck, Heart, Award, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#5B2C9E] text-white flex items-center justify-center font-extrabold text-xl shadow-md">
                <span className="text-[#00C9A7]">L</span>V
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                Língua<span className="text-[#00C9A7]">Viva</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Plataforma inclusiva voltada para o aprendizado acolhedor de Libras, Espanhol e Inglês e para a valorização de educadores nas modalidades EAD, Integral e Híbrida.
            </p>

            {/* Accessibility Seals */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#00C9A7]" />
                <span>Selo W3C WCAG 2.1 AA</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                <Hand className="w-4 h-4 text-[#00C9A7]" />
                <span>Compatível com VLibras</span>
              </div>
            </div>
          </div>

          {/* Col: Idiomas & Cursos */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Cursos & Idiomas
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#cursos" className="hover:text-white transition-colors">Libras para Iniciantes</a></li>
              <li><a href="#cursos" className="hover:text-white transition-colors">Preparatório Prolibras</a></li>
              <li><a href="#cursos" className="hover:text-white transition-colors">Espanhol Conversação</a></li>
              <li><a href="#cursos" className="hover:text-white transition-colors">Inglês para Negócios</a></li>
              <li><a href="#cursos" className="hover:text-white transition-colors">Clube de Conversação</a></li>
            </ul>
          </div>

          {/* Col: Modalidades */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Modalidades
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#modalidades" className="hover:text-white transition-colors">EAD 100% Online</a></li>
              <li><a href="#modalidades" className="hover:text-white transition-colors">Integral (Imersão)</a></li>
              <li><a href="#modalidades" className="hover:text-white transition-colors">Híbrida (Online + Polos)</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Tabela de Preços</a></li>
            </ul>
          </div>

          {/* Col: Professores & Institucional */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Institucional
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#seja-professor" className="hover:text-white transition-colors">Seja um Professor</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Histórias & Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Central em Libras</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} LínguaViva Educação Inclusiva Ltda. CNPJ: 45.890.123/0001-90. Todos os direitos reservados.</p>
            <p className="mt-1 text-slate-500">
              Desenvolvido com foco total em acessibilidade, inclusão e usabilidade para todos.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacidade" onClick={(e) => { e.preventDefault(); alert('Política de Privacidade: Seus dados estão protegidos sob a LGPD (Lei nº 13.709/2018). Nunca vendemos ou compartilhamos suas informações.'); }} className="hover:text-white transition-colors">
              Privacidade
            </a>
            <a href="#termos" onClick={(e) => { e.preventDefault(); alert('Termos de Uso: Cursos livres de formação continuada com base na LDB (Lei 9.394/96).'); }} className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

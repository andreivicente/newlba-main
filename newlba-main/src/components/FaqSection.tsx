import { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'geral', label: 'Sobre a Plataforma' },
    { id: 'aluno', label: 'Para Alunos' },
    { id: 'professor', label: 'Para Professores' },
    { id: 'acessibilidade', label: 'Acessibilidade & Libras' }
  ];

  const filteredFaq = FAQ_DATA.filter(item => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesQuery = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="py-20 bg-[#F8F9FC] dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 text-[#5B2C9E] dark:text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Respostas transparentes sobre metodologia, certificação, pagamentos e acessibilidade.
          </p>

          {/* Search bar */}
          <div className="relative pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Digite uma palavra-chave (ex: certificado, libras, pagamento)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] shadow-sm"
              aria-label="Buscar nas perguntas frequentes"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#5B2C9E] text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-[#5B2C9E] dark:hover:text-[#00C9A7] transition-colors focus-visible:ring-2 focus-visible:ring-[#00C9A7]"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#5B2C9E] dark:text-[#00C9A7] shrink-0" />
                      <span>{item.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#5B2C9E] dark:text-[#00C9A7]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-200"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
              Nenhuma pergunta encontrada para sua busca. Deseja falar diretamente com nossa equipe?
              <div className="pt-3">
                <a href="#contato" className="font-bold text-[#5B2C9E] dark:text-[#00C9A7] underline">
                  Ir para a Central de Contato
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

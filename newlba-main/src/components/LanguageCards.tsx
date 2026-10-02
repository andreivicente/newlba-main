import { Hand, Globe, Sparkles, BookOpen, ArrowRight, Check } from 'lucide-react';
import { Language } from '../types';
import { APP_IMAGES } from '../assets/images';

interface LanguageCardsProps {
  onSelectLanguage: (lang: Language) => void;
  onExploreCourse: (courseId: string) => void;
}

export default function LanguageCards({ onSelectLanguage, onExploreCourse }: LanguageCardsProps) {
  const languageOptions = [
    {
      id: 'libras' as Language,
      name: 'Libras',
      title: 'Língua Brasileira de Sinais',
      tagline: 'Inclusão, Cidadania e Comunicação sem Barreiras',
      image: APP_IMAGES.libras,
      alt: 'Mãos expressivas realizando sinais em Libras com iluminação suave em estúdio educacional',
      icon: Hand,
      iconBg: 'bg-[#5B2C9E]',
      accentColor: '#5B2C9E',
      colorBadge: 'bg-[#5B2C9E]/10 text-[#5B2C9E] dark:bg-[#5B2C9E]/30 dark:text-[#00C9A7]',
      defaultCourseId: 'libras-iniciante-ead',
      description: 'Aprenda Libras com instrutores surdos e professores bilíngues certificados. Desenvolva fluência visual-espacial, parâmetros manuais e expressões para o dia a dia, trabalho ou certificação Prolibras.',
      features: [
        'Instrutores surdos e ouvintes com formação Prolibras/Letras-Libras',
        'Material com glossário em vídeo de alta definição',
        'Preparação para concursos públicos e área da saúde/educação',
        'Modalidades EAD, Integral e Híbrida disponíveis'
      ],
      culturalNote: 'Reconhecida oficialmente pela Lei Federal nº 10.436/2002 como meio legal de comunicação e expressão no Brasil.'
    },
    {
      id: 'espanhol' as Language,
      name: 'Espanhol',
      title: 'Espanhol Latino & Europeu',
      tagline: 'Cultura, Carreira e Conexão com mais de 500 Milhões de Falantes',
      image: APP_IMAGES.espanhol,
      alt: 'Mesa de estudos com livros de gramática e literatura em espanhol, caderno com notas e elementos culturais hispânicos',
      icon: Globe,
      iconBg: 'bg-[#FF6B6B]',
      accentColor: '#FF6B6B',
      colorBadge: 'bg-[#FF6B6B]/10 text-[#FF6B6B] dark:bg-[#FF6B6B]/20 dark:text-[#FF6B6B]',
      defaultCourseId: 'espanhol-conversacao-hibrido',
      description: 'Supere o "portunhol" e conquiste a fluência real. Mergulhe na riqueza sociocultural da Espanha e de toda a América Latina com aulas dinâmicas de conversação e foco profissional.',
      features: [
        'Professores nativos e especialistas na matriz comunicativa',
        'Clubes semanais de conversação com gastronomia e cinema',
        'Treinamento preparatório oficial para o exame DELE e SIELE',
        'Vocabulário focado em negócios para o mercado latino-americano'
      ],
      culturalNote: 'Segunda língua nativa mais falada no planeta e essencial para o comércio internacional do Brasil e Mercosul.'
    },
    {
      id: 'ingles' as Language,
      name: 'Inglês',
      title: 'Inglês Global Contemporâneo',
      tagline: 'Comunicação Global para Tecnologia, Carreira e Intercâmbio',
      image: APP_IMAGES.ingles,
      alt: 'Jovem estudante e profissional com fones modernos praticando conversação em inglês com laptop em estúdio colaborativo',
      icon: Sparkles,
      iconBg: 'bg-[#00C9A7]',
      accentColor: '#00C9A7',
      colorBadge: 'bg-[#00C9A7]/15 text-[#00897B] dark:bg-[#00C9A7]/25 dark:text-[#00C9A7]',
      defaultCourseId: 'ingles-global-ead',
      description: 'Desenvolva autonomia total para reuniões internacionais, viagens, exames acadêmicos e consumo de conteúdo sem travar. Metodologia ativa baseada em situações reais.',
      features: [
        'Aulas ao vivo em turmas reduzidas para máxima fala ativa',
        'Simulações corporativas: entrevistas, e-mails e apresentações',
        'Preparatórios direcionados: TOEFL, IELTS e exames de Cambridge',
        'Plataforma interativa com inteligência de pronúncia e escuta'
      ],
      culturalNote: 'A língua internacional dos negócios, da ciência e da tecnologia, falada em mais de 100 países.'
    }
  ];

  return (
    <section 
      id="cursos" 
      className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800"
      aria-labelledby="languages-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 text-[#5B2C9E] dark:text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
            <span>Catálogo Especializado</span>
          </div>
          <h2 
            id="languages-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Escolha seu idioma
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Formações completas estruturadas do nível básico ao avançado, ministradas por professores altamente capacitados e apaixonados pelo ensino acessível.
          </p>
        </div>

        {/* 3 Large Illustrated Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {languageOptions.map((item) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.id}
                className="group relative bg-[#F8F9FC] dark:bg-slate-800/80 rounded-3xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Area */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  
                  {/* Floating Flag/Icon Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl ${item.iconBg} text-white flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg">
                      {item.name}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold font-display drop-shadow-sm leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-1 mt-0.5">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 pt-2" aria-label={`Destaques do curso de ${item.name}`}>
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          <Check className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Cultural Note */}
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 italic">
                      {item.culturalNote}
                    </div>
                  </div>

                  {/* Button: Ver Cursos */}
                  <div className="pt-2">
                    <button
                      onClick={() => onExploreCourse(item.defaultCourseId)}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#5B2C9E] hover:bg-[#4A2382] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus-visible:ring-4 focus-visible:ring-[#00C9A7]"
                      aria-label={`Ver cursos de ${item.name}`}
                    >
                      <span>Ver cursos de {item.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

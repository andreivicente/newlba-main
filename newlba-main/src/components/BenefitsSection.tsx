import { 
  Award, 
  Users, 
  BookOpen, 
  Video, 
  CheckCircle, 
  Sparkles,
  Calendar,
  DollarSign,
  Headphones,
  TrendingUp,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';

interface BenefitsSectionProps {
  onSelectAction: (target: 'aluno' | 'professor') => void;
}

export default function BenefitsSection({ onSelectAction }: BenefitsSectionProps) {
  const studentBenefits = [
    {
      icon: Award,
      title: 'Professores Qualificados',
      description: 'Corpo docente formado por professores graduados, instrutores surdos certificados em Libras e falantes nativos de espanhol e inglês.'
    },
    {
      icon: ShieldCheck,
      title: 'Certificado Reconhecido',
      description: 'Certificados emitidos em conformidade com as diretrizes educacionais nacionais, válidos para horas acadêmicas e enriquecimento curricular.'
    },
    {
      icon: Users,
      title: 'Turmas Reduzidas',
      description: 'Salas com número estritamente limitado de alunos (máximo 6 a 8 pessoas) para garantir atenção individualizada e tempo real de fala.'
    },
    {
      icon: BookOpen,
      title: 'Material Didático Incluso',
      description: 'Apostilas digitais interativas, glossários em vídeo, exercícios práticos e ferramentas de acessibilidade sem custos extras de material.'
    },
    {
      icon: Video,
      title: 'Aulas ao Vivo & Gravadas',
      description: 'Participe dos encontros interativos em tempo real e reveja o conteúdo gravado sempre que quiser durante toda a duração do curso.'
    },
    {
      icon: Sparkles,
      title: 'Inclusão & Acessibilidade Real',
      description: 'Plataforma desenhada do zero para acessibilidade: suporte a leitores de tela, VLibras, audiodescrição e equipe fluente em língua de sinais.'
    }
  ];

  const teacherBenefits = [
    {
      icon: HeartHandshake,
      title: 'Cadastro 100% Gratuito',
      description: 'Sem taxa de adesão, mensalidade de plataforma ou cobrança escondida. Você cadastra seu perfil e começa a receber propostas.'
    },
    {
      icon: Calendar,
      title: 'Flexibilidade Total de Horários',
      description: 'Você define seus dias disponíveis, a carga horária que deseja cumprir e se prefere atuar em EAD, Integral ou turmas Híbridas.'
    },
    {
      icon: DollarSign,
      title: 'Recebimento por Aula Ministrada',
      description: 'Remuneração transparente, justa e pontual via PIX ou transferência com base nas horas/aulas efetivamente lecionadas.'
    },
    {
      icon: Headphones,
      title: 'Suporte Pedagógico Contínuo',
      description: 'Apoio de nossa equipe de coordenação, capacitação continuada em metodologias ativas e tecnologias assistivas de ensino.'
    },
    {
      icon: TrendingUp,
      title: 'Visibilidade Ampla na Plataforma',
      description: 'Divulgação do seu perfil profissional para milhares de novos alunos de todo o país interessados em aprender com você.'
    }
  ];

  return (
    <div className="space-y-24 py-20 bg-[#F8F9FC] dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      
      {/* SECTION 1: Para quem quer aprender */}
      <section 
        id="beneficios-alunos" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-labelledby="students-benefits-heading"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B2C9E] dark:text-[#00C9A7]">
              Vantagens Exclusivas
            </span>
            <h2 
              id="students-benefits-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
            >
              Para quem quer aprender
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Metodologia moderna focada na sua autonomia comunicativa com apoio contínuo de professores dedicados.
            </p>
          </div>

          <button
            onClick={() => onSelectAction('aluno')}
            className="py-3 px-6 rounded-xl bg-[#5B2C9E] hover:bg-[#4A2382] text-white font-bold text-xs sm:text-sm shadow-md transition-all self-start md:self-auto shrink-0"
          >
            Quero Ser Aluno
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 text-[#5B2C9E] dark:text-[#00C9A7] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Para quem quer ensinar */}
      <section 
        id="seja-professor" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-labelledby="teachers-benefits-heading"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C9A7] dark:text-[#00C9A7]">
              Oportunidade Docente
            </span>
            <h2 
              id="teachers-benefits-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
            >
              Para quem quer ensinar
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Valorizamos o talento dos educadores com liberdade, ferramentas intuitivas e remuneração respeitosa.
            </p>
          </div>

          <button
            onClick={() => onSelectAction('professor')}
            className="py-3 px-6 rounded-xl bg-[#00C9A7] hover:bg-[#00B395] text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all self-start md:self-auto shrink-0"
          >
            Quero Ensinar na LínguaViva
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teacherBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00C9A7]/15 dark:bg-[#00C9A7]/25 text-[#00897B] dark:text-[#00C9A7] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* Quick Highlight CTA card */}
          <div className="bg-gradient-to-br from-[#5B2C9E] to-[#4A2382] text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#00C9A7] uppercase tracking-wider">
                Comunidade Bilíngue
              </span>
              <h3 className="text-xl font-bold font-display">
                É professor surdo ou falante nativo?
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                Temos programas de acolhimento e turmas específicas esperando por você. O processo seletivo é rápido e humanizado.
              </p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => onSelectAction('professor')}
                className="w-full py-2.5 px-4 rounded-xl bg-white text-[#5B2C9E] hover:bg-slate-50 font-bold text-xs sm:text-sm transition-colors text-center"
              >
                Preencher Cadastro Docente
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

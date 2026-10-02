import { Course, Testimonial, PricingPlan, FaqItem } from '../types';
import { APP_IMAGES } from '../assets/images';

export const COURSES_DATA: Course[] = [
  {
    id: 'libras-iniciante-ead',
    title: 'Libras Prática e Inclusiva — Módulo Básico ao Intermediário',
    language: 'libras',
    languageName: 'Libras',
    modality: 'ead',
    modalityName: 'EAD',
    level: 'Iniciante',
    duration: '6 meses',
    hours: 80,
    description: 'Aprenda o alfabeto manual, parâmetros das mãos, expressões não-manuais e diálogos cotidianos com professores surdos e ouvintes bilíngues.',
    highlights: ['Professores instrutores surdos certificados', 'Vídeos em alta definição com múltiplos ângulos', 'Glossário em vídeo interativo', 'Certificado válido para horas complementares'],
    instructorCount: 14,
    rating: 4.96,
    reviewCount: 382,
    image: APP_IMAGES.libras,
    badge: 'Mais Procurado'
  },
  {
    id: 'libras-integral-imersao',
    title: 'Imersão Total em Cultura e Língua de Sinais (Prolibras)',
    language: 'libras',
    languageName: 'Libras',
    modality: 'integral',
    modalityName: 'Integral',
    level: 'Avançado',
    duration: '4 meses',
    hours: 160,
    description: 'Carga horária diária intensiva focada em interpretação, tradução e preparação oficial para exames Prolibras e concursos públicos.',
    highlights: ['Aulas diárias de conversação 100% em sinais', 'Oficinas de tradução simultânea', 'Simulados oficiais comentados', 'Mentoria de carreira com intérpretes seniores'],
    instructorCount: 8,
    rating: 4.98,
    reviewCount: 147,
    image: APP_IMAGES.libras,
    badge: 'Preparatório Prolibras'
  },
  {
    id: 'espanhol-conversacao-hibrido',
    title: 'Espanhol Latino e Europeu — Comunicação Ativa',
    language: 'espanhol',
    languageName: 'Espanhol',
    modality: 'hibrido',
    modalityName: 'Híbrido',
    level: 'Intermediário',
    duration: '8 meses',
    hours: 120,
    description: 'Encontros virtuais semanais complementados por cafés de conversação presenciais e imersão cultural no vocabulário de negócios e viagens.',
    highlights: ['Aulas online + encontros presenciais em polos parceiros', 'Professores nativos da América Latina e Espanha', 'Preparação opcional para o exame DELE', 'Foco 80% em conversação'],
    instructorCount: 19,
    rating: 4.92,
    reviewCount: 520,
    image: APP_IMAGES.espanhol,
    badge: 'Conversação Ativa'
  },
  {
    id: 'espanhol-ead-acelerado',
    title: 'Espanhol Essencial Online — Fluência Prática',
    language: 'espanhol',
    languageName: 'Espanhol',
    modality: 'ead',
    modalityName: 'EAD',
    level: 'Iniciante',
    duration: '5 meses',
    hours: 75,
    description: 'Metodologia direta e comunicativa para destravar a fala rápida, ideal para quem precisa de espanhol para carreira e viagens.',
    highlights: ['Flexibilidade de horários 24/7', 'Exercícios interativos com correção imediata', 'Plantão semanal de dúvidas com professores', 'Material didático digital incluso'],
    instructorCount: 12,
    rating: 4.89,
    reviewCount: 410,
    image: APP_IMAGES.espanhol,
  },
  {
    id: 'ingles-global-ead',
    title: 'Inglês Global para o Século XXI — Do Zero à Fluência',
    language: 'ingles',
    languageName: 'Inglês',
    modality: 'ead',
    modalityName: 'EAD',
    level: 'Todos os Níveis',
    duration: '12 meses',
    hours: 140,
    description: 'Construa vocabulário, pronúncia correta e compreensão auditiva com situações reais de trabalho, tecnologia e cotidiano internacional.',
    highlights: ['Micro-aulas diárias de 20 minutos', 'Aulas ao vivo em turmas de até 6 pessoas', 'Feedback de pronúncia inteligente', 'Preparação para entrevistas internacionais'],
    instructorCount: 26,
    rating: 4.94,
    reviewCount: 890,
    image: APP_IMAGES.ingles,
    badge: 'Recomendado'
  },
  {
    id: 'ingles-integral-business',
    title: 'Inglês Integral para Negócios & Carreira Global',
    language: 'ingles',
    languageName: 'Inglês',
    modality: 'integral',
    modalityName: 'Integral',
    level: 'Avançado',
    duration: '3 meses',
    hours: 150,
    description: 'Programa imersivo diário para profissionais que precisam liderar reuniões em inglês, negociar contratos e apresentar palestras internacionais.',
    highlights: ['Prática diária de simulações corporativas', 'Revisão individual de apresentações e relatórios', 'Networking com líderes globais convidados', 'Certificação corporativa internacional'],
    instructorCount: 10,
    rating: 4.97,
    reviewCount: 230,
    image: APP_IMAGES.ingles,
    badge: 'Executivo'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    type: 'aluno',
    name: 'Carolina Santos Mendes',
    role: 'Aluna de Libras (EAD) & Pedagoga',
    location: 'Belo Horizonte, MG',
    language: 'Libras',
    modality: 'EAD',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: 'Como pedagoga em escola pública, aprender Libras na LínguaViva foi transformador. Os professores surdos têm uma didática impecável e a plataforma tem legendas e recursos que facilitam o aprendizado mesmo na correria do dia a dia.',
    rating: 5
  },
  {
    id: '2',
    type: 'professor',
    name: 'Prof. Marcos Vinícius Alencar',
    role: 'Professor e Instrutor Surdo de Libras',
    location: 'Curitiba, PR',
    language: 'Libras',
    modality: 'Integral & EAD',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'Encontrei na LínguaViva o respeito genuíno pela comunidade surda e pela língua de sinais. O suporte pedagógico é formidável, a remuneração por hora/aula é justa e pontual, e tenho liberdade para montar minha grade de turmas.',
    rating: 5
  },
  {
    id: '3',
    type: 'aluno',
    name: 'Gabriel Ribeiro da Silva',
    role: 'Aluno de Espanhol Híbrido & Engenheiro',
    location: 'São Paulo, SP',
    language: 'Espanhol',
    modality: 'Híbrido',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'A modalidade híbrida foi a escolha perfeita para mim. Estudo a teoria online no meu ritmo durante a semana e aos sábados pratico no polo com colegas e professores nativos. Consegui uma vaga em multinacional em menos de 5 meses!',
    rating: 5
  },
  {
    id: '4',
    type: 'professor',
    name: 'Profa. Sofia Martínez',
    role: 'Professora de Espanhol (Nativa da Colômbia)',
    location: 'Florianópolis, SC',
    language: 'Espanhol',
    modality: 'EAD & Híbrido',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: 'Lecionar na LínguaViva me conectou com alunos dedicados de todas as partes do Brasil. A plataforma tecnológica é intuitiva, com ferramentas de acessibilidade que acolhem todos os perfis de alunos de verdade.',
    rating: 5
  },
  {
    id: '5',
    type: 'aluno',
    name: 'Beatriz Nogueira Duarte',
    role: 'Aluna de Inglês Integral & Desenvolvedora',
    location: 'Recife, PE',
    language: 'Inglês',
    modality: 'Integral',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    content: 'A imersão integral é intensa e objetiva. Todo dia praticava escuta e fala com professores qualificados. Acessibilidade de verdade: aulas com transcrição em tempo real e apoio audiovisual impecável.',
    rating: 5
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basico',
    name: 'Plano Essencial',
    popular: false,
    tagline: 'Ideal para quem busca flexibilidade e ritmo equilibrado.',
    prices: {
      ead: 129,
      hibrido: 189,
      integral: 279
    },
    period: '/mês',
    features: [
      '2 horas semanais de aulas ao vivo',
      'Acesso 24/7 a todo acervo gravado',
      'Material didático digital acessível incluso',
      'Comunidade de alunos para prática',
      'Certificado de conclusão reconhecido'
    ],
    cta: 'Escolher Essencial'
  },
  {
    id: 'intermediario',
    name: 'Plano Conexão Ativa',
    popular: true,
    tagline: 'A escolha mais popular para destravar a conversação rápida.',
    prices: {
      ead: 219,
      hibrido: 299,
      integral: 429
    },
    period: '/mês',
    features: [
      '4 a 6 horas semanais de aulas ao vivo',
      'Turmas reduzidas de no máximo 6 alunos',
      'Clube semanal de conversação e Libras',
      'Plantão individual com professores nativos e bilíngues',
      'Acesso a materiais complementares em vídeo e áudio',
      'Avaliação mensal individual de progresso'
    ],
    cta: 'Começar Agora'
  },
  {
    id: 'premium',
    name: 'Plano Imersão Total',
    popular: false,
    tagline: 'Imersão completa com mentoria individual e foco em metas.',
    prices: {
      ead: 389,
      hibrido: 499,
      integral: 689
    },
    period: '/mês',
    features: [
      'Carga horária diária ou ampliada (até 12h/semana)',
      '1 sessão semanal de mentoria 1-a-1 exclusiva',
      'Preparação para certificados internacionais e Prolibras',
      'Revisão personalizada de apresentações e currículos',
      'Acesso prioritário a workshops internacionais',
      'Garantia de evolução comunicativa'
    ],
    cta: 'Garantir Vaga Imersão'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'geral',
    question: 'O que diferencia a LínguaViva de outras escolas de idiomas?',
    answer: 'A LínguaViva nasceu com o propósito de unir idiomas globais (Inglês e Espanhol) e a Língua Brasileira de Sinais (Libras) sob a mesma filosofia pedagógica: acessibilidade radical, metodologia comunicativa ativa e valorização de professores surdos e ouvintes com igualdade e excelência.'
  },
  {
    id: 'faq-2',
    category: 'aluno',
    question: 'Como funciona o teste de nivelamento?',
    answer: 'Ao se cadastrar, você tem acesso ao nosso teste rápido de nivelamento online. O teste avalia compreensão auditiva/visual, vocabulário e estruturas. Se preferir, agendamos uma conversa de 15 minutos com um professor para avaliar conversação ou sinalização de forma calorosa e precisa.'
  },
  {
    id: 'faq-3',
    category: 'aluno',
    question: 'Os certificados emitidos são reconhecidos pelo mercado e MEC?',
    answer: 'Sim! Nossos certificados seguem as diretrizes da Lei nº 9.394/96 (LDB) para cursos livres de capacitação e formação continuada. Nossos cursos de Libras também são estruturados com base no Decreto nº 5.626/05 e preparam diretamente para o exame Prolibras.'
  },
  {
    id: 'faq-4',
    category: 'professor',
    question: 'Quais os requisitos para se cadastrar como professor na LínguaViva?',
    answer: 'Buscamos profissionais graduados em Letras (Língua Estrangeira ou Libras), pedagogos bilíngues, instrutores surdos com certificação ou profissionais nativos com experiência comprovada de ensino comunicativo. O cadastro é 100% gratuito e sem taxa de adesão.'
  },
  {
    id: 'faq-5',
    category: 'professor',
    question: 'Como e quando o professor recebe pelas aulas?',
    answer: 'Os repasses são feitos quinzenalmente ou mensalmente via PIX ou transferência bancária, com relatório detalhado de horas/aulas ministradas. O valor por hora é acordado no momento da aprovação do perfil, garantindo remuneração digna acima da média de mercado.'
  },
  {
    id: 'faq-6',
    category: 'acessibilidade',
    question: 'Como a plataforma atende alunos surdos, cegos ou com baixa visão?',
    answer: 'Toda a interface foi desenvolvida seguindo as diretrizes WCAG 2.1 nível AA. Disponibilizamos integração nativa com VLibras, leitor de tela otimizado, alto contraste, ajuste dinâmico de fonte, audiodescrição em materiais audiovisuais e aulas de Libras ministradas diretamente em língua de sinais.'
  },
  {
    id: 'faq-7',
    category: 'acessibilidade',
    question: 'Posso solicitar apoio ou atendimento em Libras?',
    answer: 'Sim! Nossa Central de Atendimento conta com atendentes fluentes em Libras disponíveis via videochamada direta, sem a necessidade de intermediários ou softwares complexos.'
  }
];

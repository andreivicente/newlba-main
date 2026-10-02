import { useState } from 'react';
import { Laptop, Clock, Layers, ArrowRight, CheckCircle2, Calendar, MapPin, X } from 'lucide-react';
import { Modality } from '../types';

interface ModalitiesSectionProps {
  onSelectModality: (modality: Modality) => void;
}

interface ModalityModalData {
  id: Modality;
  title: string;
  tagline: string;
  hoursInfo: string;
  schedule: string;
  targetAudience: string;
  methodology: string;
  features: string[];
}

export default function ModalitiesSection({ onSelectModality }: ModalitiesSectionProps) {
  const [activeModal, setActiveModal] = useState<ModalityModalData | null>(null);

  const modalitiesList = [
    {
      id: 'ead' as Modality,
      title: 'EAD (100% Online)',
      tagline: 'Flexibilidade total para estudar onde e quando você puder',
      icon: Laptop,
      iconBg: 'bg-[#5B2C9E]',
      badge: 'Flexibilidade Máxima',
      description: 'Aulas transmitidas ao vivo com gravação instantânea e acervo de videoaulas em alta resolução com acessibilidade completa (legendas, audiodescrição e Libras). Ideal para quem concilia trabalho e rotina corrida.',
      stats: '2h a 4h semanais',
      highlights: [
        'Acesso 24/7 à plataforma com videoaulas gravadas',
        'Aulas síncronas semanais com professores especializados',
        'Atividades interativas com feedback e correção imediata',
        'Plantão de dúvidas semanal via chat e videochamada'
      ],
      modalData: {
        id: 'ead' as Modality,
        title: 'Modalidade EAD — 100% Online Flexível',
        tagline: 'Aprenda no seu próprio ritmo sem abrir mão da interação com professores.',
        hoursInfo: '2 a 4 horas semanais de dedicação recomendada',
        schedule: 'Horários flexíveis para aulas gravadas + encontros ao vivo em múltiplos turnos (manhã, noite e sábados)',
        targetAudience: 'Profissionais com rotina dinâmica, moradores de cidades sem polos presenciais e pessoas que valorizam autonomia de estudos.',
        methodology: 'Metodologia micro-learning com vídeos curtos focados, simuladores de diálogo e aulas semanais em grupos pequenos para prática ativa da fala ou sinalização.',
        features: [
          'Plataforma compatível com leitor de telas e VLibras integrado',
          'Gravação de todas as aulas ao vivo com replay ilimitado durante o curso',
          'Comunidade virtual exclusiva para troca de áudios, vídeos e sinais',
          'Certificado idêntico ao presencial com validade nacional'
        ]
      }
    },
    {
      id: 'integral' as Modality,
      title: 'Integral (Imersão Total)',
      tagline: 'Imersão intensiva com carga horária ampliada e evolução rápida',
      icon: Clock,
      iconBg: 'bg-[#FF6B6B]',
      badge: 'Fluência Acelerada',
      description: 'Para quem tem urgência em falar fluentemente ou alcançar proficiência para seleções, concursos públicos, intercâmbios ou certificações Prolibras. Prática diária estruturada com mentoria.',
      stats: '10h a 15h semanais',
      highlights: [
        'Encontros diários ou intensivos com imersão comunicativa',
        'Mentoria individual semanal de 30 minutos',
        'Foco avançado em vocabulário profissional e fluência espontânea',
        'Simulados frequentes de certificações (Prolibras, DELE, TOEFL)'
      ],
      modalData: {
        id: 'integral' as Modality,
        title: 'Modalidade Integral — Imersão Intensiva',
        tagline: 'O caminho mais veloz para alcançar a fluência natural e profissional.',
        hoursInfo: '10 a 15 horas semanais (prática diária)',
        schedule: 'Aulas diárias de segunda a quinta ou finais de semana intensivos de imersão total',
        targetAudience: 'Estudantes que vão prestar exames oficiais, profissionais com promoção internacional à vista, tradutores/intérpretes em formação.',
        methodology: 'Baseada na abordagem comunicativa por imersão (Natural Approach). Durante o período da aula, 100% da interação ocorre na língua-alvo (sem português).',
        features: [
          'Mentoria 1-a-1 semanal com professor tutor dedicado',
          'Oficinas de redação técnica e interpretação simultânea',
          'Análise individual de dicção, pronúncia e sinalização',
          'Acesso antecipado aos clubes de networking executivo'
        ]
      }
    },
    {
      id: 'hibrido' as Modality,
      title: 'Híbrido (Online + Presencial)',
      tagline: 'O equilíbrio perfeito entre a praticidade online e o calor do contato presencial',
      icon: Layers,
      iconBg: 'bg-[#00C9A7]',
      badge: 'Mais Equilibrado',
      description: 'Combine o conforto das aulas teóricas no ambiente virtual com dinâmicas presenciais quinzenais em nossos polos parceiros: cafés de conversação, vivências culturais e saraus em Libras.',
      stats: '4h a 6h semanais',
      highlights: [
        'Aulas teóricas e gramaticais online no ambiente virtual',
        'Encontros práticos presenciais quinzenais nos polos parceiros',
        'Cafés culturais temáticos, gastronomia e vivências reais',
        'Interação humana para destravar a timidez em público'
      ],
      modalData: {
        id: 'hibrido' as Modality,
        title: 'Modalidade Híbrida — O Melhor dos Dois Mundos',
        tagline: 'Pratique cara a cara e estude a teoria no conforto da sua casa.',
        hoursInfo: '4 a 6 horas semanais combinadas',
        schedule: 'Teoria online durante a semana + 1 encontro presencial quinzenal aos sábados de manhã',
        targetAudience: 'Quem gosta do ambiente de sala de aula e de networking presencial, mas não dispõe de tempo para deslocamentos diários.',
        methodology: 'Flipped Classroom (Sala de Aula Invertida): você assiste aos conceitos antes e usa o momento presencial para dinâmicas de grupo, debates e encenações.',
        features: [
          'Polos modernos localizados em capitais e grandes centros parceiros',
          'Acessibilidade arquitetônica e banheiros adaptados em todos os polos',
          'Cafés e saraus com convidados surdos e falantes nativos',
          'Ambiente descontraído sem a rigidez da carteira tradicional'
        ]
      }
    }
  ];

  return (
    <section 
      id="modalidades" 
      className="py-20 bg-[#F8F9FC] dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800"
      aria-labelledby="modalities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C9A7]/15 text-[#00897B] dark:text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
            <span>Modelos de Aprendizagem</span>
          </div>
          <h2 
            id="modalities-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Modalidades de ensino
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Aprenda do seu jeito. Adaptamos nossa metodologia para o seu tempo, sua localização geográfica e suas metas de vida.
          </p>
        </div>

        {/* 3 Modality Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {modalitiesList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#5B2C9E] dark:text-[#00C9A7] mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                      O que está incluso:
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center gap-3">
                  <button
                    onClick={() => setActiveModal(item.modalData)}
                    className="flex-1 py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-xs sm:text-sm transition-colors text-center focus-visible:ring-2 focus-visible:ring-[#00C9A7]"
                  >
                    Saber mais
                  </button>
                  <button
                    onClick={() => onSelectModality(item.id)}
                    className="py-3 px-4 rounded-xl bg-[#5B2C9E] hover:bg-[#4A2382] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#00C9A7]"
                  >
                    Quero essa
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal: Saber Mais Detalhes da Modalidade */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Fechar detalhes da modalidade"
            >
              <X className="w-6 h-6" />
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B2C9E] dark:text-[#00C9A7]">
                Guia Detalhado
              </span>
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mt-1">
                {activeModal.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                {activeModal.tagline}
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="p-4 bg-[#F8F9FC] dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 space-y-2">
                <p className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#5B2C9E] dark:text-[#00C9A7]" />
                  <span>Carga e Horários</span>
                </p>
                <p>{activeModal.hoursInfo}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{activeModal.schedule}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                  Para quem é recomendada?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {activeModal.targetAudience}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                  Como funciona a dinâmica pedagógica:
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeModal.methodology}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Benefícios inclusos:
                </h4>
                <ul className="space-y-2">
                  {activeModal.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const targetId = activeModal.id;
                  setActiveModal(null);
                  onSelectModality(targetId);
                }}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#5B2C9E] hover:bg-[#4A2382] text-white font-bold text-sm shadow-md transition-all text-center"
              >
                Inscrever-se nesta modalidade
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="py-3.5 px-6 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm transition-colors text-center"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

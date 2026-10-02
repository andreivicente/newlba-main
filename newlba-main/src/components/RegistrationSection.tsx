import { useState, ChangeEvent, FormEvent } from 'react';
import { 
  UserCheck, 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Phone, 
  Mail, 
  User, 
  Link as LinkIcon, 
  DollarSign,
  Sparkles,
  Heart
} from 'lucide-react';
import { UserType, Language, Modality, StudentFormData, TeacherFormData } from '../types';

interface RegistrationSectionProps {
  initialTab?: UserType;
  selectedPlanInfo?: { planId: string; modality: Modality } | null;
}

export default function RegistrationSection({ initialTab = 'aluno', selectedPlanInfo }: RegistrationSectionProps) {
  const [activeTab, setActiveTab] = useState<UserType>(initialTab);

  // Student Form State
  const [studentData, setStudentData] = useState<StudentFormData>({
    name: '',
    email: '',
    phone: '',
    language: '',
    modality: selectedPlanInfo ? selectedPlanInfo.modality : '',
    level: 'Iniciante',
    needsAccessibility: false,
    accessibilityDetails: '',
    notes: '',
    lgpdAccepted: false
  });

  // Teacher Form State
  const [teacherData, setTeacherData] = useState<TeacherFormData>({
    name: '',
    email: '',
    phone: '',
    languages: [],
    modalities: [],
    education: '',
    curriculumUrl: '',
    hourlyRate: '',
    isNativeOrDeaf: false,
    experienceYears: '1 a 3 anos',
    bio: '',
    lgpdAccepted: false
  });

  // Validation errors
  const [studentErrors, setStudentErrors] = useState<Record<string, string>>({});
  const [teacherErrors, setTeacherErrors] = useState<Record<string, string>>({});

  // Submission States
  const [studentSuccess, setStudentSuccess] = useState(false);
  const [teacherSuccess, setTeacherSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Format Phone Mask: (XX) 9XXXX-XXXX
  const formatPhone = (value: string) => {
    const raw = value.replace(/\D/g, '').slice(0, 11);
    if (raw.length <= 2) return raw;
    if (raw.length <= 7) return `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    return `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`;
  };

  // Student Validation
  const validateStudent = (): boolean => {
    const errors: Record<string, string> = {};
    if (!studentData.name.trim() || studentData.name.trim().length < 3) {
      errors.name = 'Por favor, informe seu nome completo.';
    }
    if (!studentData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(studentData.email)) {
      errors.email = 'Informe um e-mail válido (ex: seu@email.com).';
    }
    if (!studentData.phone.trim() || studentData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Informe um telefone/WhatsApp válido com DDD.';
    }
    if (!studentData.language) {
      errors.language = 'Selecione o idioma que deseja aprender.';
    }
    if (!studentData.modality) {
      errors.modality = 'Selecione a modalidade de ensino pretendida.';
    }
    if (!studentData.lgpdAccepted) {
      errors.lgpdAccepted = 'É necessário concordar com os termos de privacidade para continuar.';
    }

    setStudentErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Teacher Validation
  const validateTeacher = (): boolean => {
    const errors: Record<string, string> = {};
    if (!teacherData.name.trim() || teacherData.name.trim().length < 3) {
      errors.name = 'Por favor, informe seu nome completo.';
    }
    if (!teacherData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(teacherData.email)) {
      errors.email = 'Informe um e-mail profissional válido.';
    }
    if (!teacherData.phone.trim() || teacherData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Informe um WhatsApp com DDD para contato.';
    }
    if (teacherData.languages.length === 0) {
      errors.languages = 'Selecione pelo menos um idioma que você ensina.';
    }
    if (teacherData.modalities.length === 0) {
      errors.modalities = 'Selecione pelo menos uma modalidade de aula.';
    }
    if (!teacherData.education.trim()) {
      errors.education = 'Informe sua formação acadêmica ou certificação.';
    }
    if (!teacherData.curriculumUrl.trim() || !teacherData.curriculumUrl.includes('.')) {
      errors.curriculumUrl = 'Insira o link do seu currículo Lattes, LinkedIn ou portfólio.';
    }
    if (!teacherData.hourlyRate.trim()) {
      errors.hourlyRate = 'Indique o valor pretendido por hora/aula (ex: R$ 60).';
    }
    if (!teacherData.lgpdAccepted) {
      errors.lgpdAccepted = 'É necessário aceitar os termos da plataforma.';
    }

    setTeacherErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit Aluno
  const handleStudentSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStudent()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStudentSuccess(true);
    }, 700);
  };

  // Submit Professor
  const handleTeacherSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateTeacher()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setTeacherSuccess(true);
    }, 700);
  };

  return (
    <section 
      id="cadastro" 
      className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800"
      aria-labelledby="registration-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 text-[#5B2C9E] dark:text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
            <span>Inscrição Rápida & Descomplicada</span>
          </div>
          <h2 
            id="registration-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Cadastro Rápido LínguaViva
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Preencha seus dados para iniciar suas aulas ou fazer parte do nosso time de docentes.
          </p>

          {/* Toggle Abas Aluno x Professor */}
          <div className="pt-4 flex justify-center">
            <div 
              role="tablist" 
              aria-label="Escolha o tipo de cadastro"
              className="grid grid-cols-2 p-1.5 bg-[#F8F9FC] dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 w-full max-w-md shadow-inner"
            >
              <button
                role="tab"
                id="cadastro-tab-aluno"
                aria-selected={activeTab === 'aluno'}
                aria-controls="cadastro-panel-aluno"
                onClick={() => setActiveTab('aluno')}
                className={`py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'aluno'
                    ? 'bg-[#5B2C9E] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Sou Aluno</span>
              </button>

              <button
                role="tab"
                id="cadastro-tab-professor"
                aria-selected={activeTab === 'professor'}
                aria-controls="cadastro-panel-professor"
                onClick={() => setActiveTab('professor')}
                className={`py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'professor'
                    ? 'bg-[#5B2C9E] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Sou Professor</span>
              </button>
            </div>
          </div>
        </div>

        {/* CONTAINER DOS FORMULÁRIOS */}
        <div className="bg-[#F8F9FC] dark:bg-slate-800/80 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-sm">
          
          {/* ================= FORMULÁRIO DO ALUNO ================= */}
          {activeTab === 'aluno' && (
            <div 
              id="cadastro-panel-aluno"
              role="tabpanel"
              aria-labelledby="cadastro-tab-aluno"
            >
              {studentSuccess ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    Parabéns, {studentData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Sua pré-matrícula para <strong className="text-[#5B2C9E] dark:text-[#00C9A7] uppercase">{studentData.language}</strong> ({studentData.modality.toUpperCase()}) foi confirmada com sucesso! Enviamos os detalhes de acesso e o link do teste de nivelamento para <strong>{studentData.email}</strong>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setStudentSuccess(false);
                        setStudentData({
                          name: '',
                          email: '',
                          phone: '',
                          language: '',
                          modality: '',
                          level: 'Iniciante',
                          needsAccessibility: false,
                          accessibilityDetails: '',
                          notes: '',
                          lgpdAccepted: false
                        });
                      }}
                      className="py-2.5 px-6 rounded-xl border border-slate-300 dark:border-slate-600 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700"
                    >
                      Cadastrar outro aluno
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleStudentSubmit} noValidate className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label htmlFor="student-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="student-name"
                          type="text"
                          value={studentData.name}
                          onChange={(e) => {
                            setStudentData({ ...studentData, name: e.target.value });
                            if (studentErrors.name) setStudentErrors({ ...studentErrors, name: '' });
                          }}
                          placeholder="Ex: Mariana Silva Costa"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                            studentErrors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                          }`}
                        />
                      </div>
                      {studentErrors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {studentErrors.name}
                        </p>
                      )}
                    </div>

                    {/* E-mail */}
                    <div>
                      <label htmlFor="student-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        E-mail de Contato *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="student-email"
                          type="email"
                          value={studentData.email}
                          onChange={(e) => {
                            setStudentData({ ...studentData, email: e.target.value });
                            if (studentErrors.email) setStudentErrors({ ...studentErrors, email: '' });
                          }}
                          placeholder="mariana@exemplo.com.br"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                            studentErrors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                          }`}
                        />
                      </div>
                      {studentErrors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {studentErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Telefone */}
                    <div>
                      <label htmlFor="student-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="student-phone"
                          type="tel"
                          value={studentData.phone}
                          onChange={(e) => {
                            setStudentData({ ...studentData, phone: formatPhone(e.target.value) });
                            if (studentErrors.phone) setStudentErrors({ ...studentErrors, phone: '' });
                          }}
                          placeholder="(11) 98765-4321"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                            studentErrors.phone ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                          }`}
                        />
                      </div>
                      {studentErrors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {studentErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Idioma de Interesse */}
                    <div>
                      <label htmlFor="student-language" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Idioma de Interesse *
                      </label>
                      <select
                        id="student-language"
                        value={studentData.language}
                        onChange={(e) => {
                          setStudentData({ ...studentData, language: e.target.value as Language });
                          if (studentErrors.language) setStudentErrors({ ...studentErrors, language: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                          studentErrors.language ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                        }`}
                      >
                        <option value="">Selecione o idioma...</option>
                        <option value="libras">Libras (Língua Brasileira de Sinais)</option>
                        <option value="espanhol">Espanhol (Latino & Europeu)</option>
                        <option value="ingles">Inglês (Global Contemporâneo)</option>
                      </select>
                      {studentErrors.language && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {studentErrors.language}
                        </p>
                      )}
                    </div>

                    {/* Modalidade */}
                    <div>
                      <label htmlFor="student-modality" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Modalidade Preferida *
                      </label>
                      <select
                        id="student-modality"
                        value={studentData.modality}
                        onChange={(e) => {
                          setStudentData({ ...studentData, modality: e.target.value as Modality });
                          if (studentErrors.modality) setStudentErrors({ ...studentErrors, modality: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                          studentErrors.modality ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                        }`}
                      >
                        <option value="">Selecione a modalidade...</option>
                        <option value="ead">EAD — 100% Online e Flexível</option>
                        <option value="integral">Integral — Imersão Total e Acelerada</option>
                        <option value="hibrido">Híbrido — Online + Encontros em Polos</option>
                      </select>
                      {studentErrors.modality && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {studentErrors.modality}
                        </p>
                      )}
                    </div>

                    {/* Nível Atual */}
                    <div>
                      <label htmlFor="student-level" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Nível Estimado Atual
                      </label>
                      <select
                        id="student-level"
                        value={studentData.level}
                        onChange={(e) => setStudentData({ ...studentData, level: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00C9A7]"
                      >
                        <option value="Iniciante">Iniciante (Nunca estudei / Do Zero)</option>
                        <option value="Básico">Básico (Conheço palavras soltas)</option>
                        <option value="Intermediário">Intermediário (Consigo formular frases)</option>
                        <option value="Avançado">Avançado (Busco fluência profissional)</option>
                      </select>
                    </div>
                  </div>

                  {/* Campo de Acessibilidade (Inclusivo) */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={studentData.needsAccessibility}
                        onChange={(e) => setStudentData({ ...studentData, needsAccessibility: e.target.checked })}
                        className="w-4 h-4 text-[#5B2C9E] rounded focus:ring-[#00C9A7]"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        Necessito de recursos específicos de acessibilidade (surdez, baixa visão, neurodivergência)
                      </span>
                    </label>

                    {studentData.needsAccessibility && (
                      <div className="pt-2">
                        <textarea
                          value={studentData.accessibilityDetails}
                          onChange={(e) => setStudentData({ ...studentData, accessibilityDetails: e.target.value })}
                          placeholder="Por favor, detalhe como podemos acolher melhor seu aprendizado (ex: sou surdo oralizado, utilizo leitor NVDA, prefiro legendas ampliadas, etc.)"
                          rows={2}
                          className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#F8F9FC] dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7]"
                        />
                      </div>
                    )}
                  </div>

                  {/* LGPD Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={studentData.lgpdAccepted}
                        onChange={(e) => {
                          setStudentData({ ...studentData, lgpdAccepted: e.target.checked });
                          if (studentErrors.lgpdAccepted) setStudentErrors({ ...studentErrors, lgpdAccepted: '' });
                        }}
                        className="w-4 h-4 text-[#5B2C9E] rounded focus:ring-[#00C9A7] mt-0.5"
                      />
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        Concordo com a <a href="#privacidade" className="underline text-[#5B2C9E] dark:text-[#00C9A7]">Política de Privacidade</a> e autorizo o contato da LínguaViva por WhatsApp ou e-mail com as instruções de matrícula e nivelamento.
                      </span>
                    </label>
                    {studentErrors.lgpdAccepted && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {studentErrors.lgpdAccepted}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-[#5B2C9E] hover:bg-[#4A2382] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#5B2C9E]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processando sua inscrição...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Finalizar Cadastro de Aluno</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ================= FORMULÁRIO DO PROFESSOR ================= */}
          {activeTab === 'professor' && (
            <div 
              id="cadastro-panel-professor"
              role="tabpanel"
              aria-labelledby="cadastro-tab-professor"
            >
              {teacherSuccess ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    Bem-vindo(a), Prof. {teacherData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Sua candidatura docente foi registrada com sucesso! Nossa coordenação pedagógica analisará seu currículo e entrará em contato via WhatsApp (<strong>{teacherData.phone}</strong>) em até 48 horas úteis para o alinhamento de horários e turmas.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setTeacherSuccess(false);
                        setTeacherData({
                          name: '',
                          email: '',
                          phone: '',
                          languages: [],
                          modalities: [],
                          education: '',
                          curriculumUrl: '',
                          hourlyRate: '',
                          isNativeOrDeaf: false,
                          experienceYears: '1 a 3 anos',
                          bio: '',
                          lgpdAccepted: false
                        });
                      }}
                      className="py-2.5 px-6 rounded-xl border border-slate-300 dark:border-slate-600 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700"
                    >
                      Enviar outra proposta docente
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleTeacherSubmit} noValidate className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label htmlFor="teacher-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="teacher-name"
                          type="text"
                          value={teacherData.name}
                          onChange={(e) => {
                            setTeacherData({ ...teacherData, name: e.target.value });
                            if (teacherErrors.name) setTeacherErrors({ ...teacherErrors, name: '' });
                          }}
                          placeholder="Ex: Prof. Carlos Eduardo Souza"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                            teacherErrors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                          }`}
                        />
                      </div>
                      {teacherErrors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {teacherErrors.name}
                        </p>
                      )}
                    </div>

                    {/* E-mail */}
                    <div>
                      <label htmlFor="teacher-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        E-mail Profissional *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="teacher-email"
                          type="email"
                          value={teacherData.email}
                          onChange={(e) => {
                            setTeacherData({ ...teacherData, email: e.target.value });
                            if (teacherErrors.email) setTeacherErrors({ ...teacherErrors, email: '' });
                          }}
                          placeholder="carlos.educador@gmail.com"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                            teacherErrors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                          }`}
                        />
                      </div>
                      {teacherErrors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {teacherErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Telefone */}
                    <div>
                      <label htmlFor="teacher-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="teacher-phone"
                          type="tel"
                          value={teacherData.phone}
                          onChange={(e) => {
                            setTeacherData({ ...teacherData, phone: formatPhone(e.target.value) });
                            if (teacherErrors.phone) setTeacherErrors({ ...teacherErrors, phone: '' });
                          }}
                          placeholder="(11) 99876-5432"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                            teacherErrors.phone ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                          }`}
                        />
                      </div>
                      {teacherErrors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {teacherErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Formação Acadêmica */}
                    <div>
                      <label htmlFor="teacher-education" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Formação Acadêmica / Certificação *
                      </label>
                      <input
                        id="teacher-education"
                        type="text"
                        value={teacherData.education}
                        onChange={(e) => {
                          setTeacherData({ ...teacherData, education: e.target.value });
                          if (teacherErrors.education) setTeacherErrors({ ...teacherErrors, education: '' });
                        }}
                        placeholder="Ex: Letras-Libras, Prolibras, Letras-Inglês, Nativo"
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                          teacherErrors.education ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                        }`}
                      />
                      {teacherErrors.education && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {teacherErrors.education}
                        </p>
                      )}
                    </div>

                    {/* Link do Currículo/Lattes */}
                    <div>
                      <label htmlFor="teacher-url" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Link do Currículo / Lattes / LinkedIn *
                      </label>
                      <div className="relative">
                        <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="teacher-url"
                          type="url"
                          value={teacherData.curriculumUrl}
                          onChange={(e) => {
                            setTeacherData({ ...teacherData, curriculumUrl: e.target.value });
                            if (teacherErrors.curriculumUrl) setTeacherErrors({ ...teacherErrors, curriculumUrl: '' });
                          }}
                          placeholder="https://lattes.cnpq.br/... ou linkedin.com/in/..."
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                            teacherErrors.curriculumUrl ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                          }`}
                        />
                      </div>
                      {teacherErrors.curriculumUrl && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {teacherErrors.curriculumUrl}
                        </p>
                      )}
                    </div>

                    {/* Valor da Hora/Aula Pretendida */}
                    <div>
                      <label htmlFor="teacher-rate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Valor da Hora/Aula Pretendida *
                      </label>
                      <div className="relative">
                        <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="teacher-rate"
                          type="text"
                          value={teacherData.hourlyRate}
                          onChange={(e) => {
                            setTeacherData({ ...teacherData, hourlyRate: e.target.value });
                            if (teacherErrors.hourlyRate) setTeacherErrors({ ...teacherErrors, hourlyRate: '' });
                          }}
                          placeholder="Ex: R$ 65,00 a R$ 90,00"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00C9A7] transition-all ${
                            teacherErrors.hourlyRate ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                          }`}
                        />
                      </div>
                      {teacherErrors.hourlyRate && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {teacherErrors.hourlyRate}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Idiomas que ensina (Multi-select pills) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Idiomas que você ensina *
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        { id: 'libras' as Language, label: 'Libras (Língua de Sinais)' },
                        { id: 'espanhol' as Language, label: 'Espanhol' },
                        { id: 'ingles' as Language, label: 'Inglês' }
                      ].map((item) => {
                        const isSelected = teacherData.languages.includes(item.id);
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => {
                              const next = isSelected
                                ? teacherData.languages.filter(l => l !== item.id)
                                : [...teacherData.languages, item.id];
                              setTeacherData({ ...teacherData, languages: next });
                              if (teacherErrors.languages) setTeacherErrors({ ...teacherErrors, languages: '' });
                            }}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                              isSelected
                                ? 'bg-[#5B2C9E] text-white border-[#5B2C9E] shadow-sm'
                                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-[#5B2C9E]'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}{item.label}
                          </button>
                        );
                      })}
                    </div>
                    {teacherErrors.languages && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {teacherErrors.languages}
                      </p>
                    )}
                  </div>

                  {/* Modalidades que prefere ministrar */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Modalidades com disponibilidade *
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        { id: 'ead' as Modality, label: 'EAD (100% Online)' },
                        { id: 'integral' as Modality, label: 'Integral (Imersão Intensiva)' },
                        { id: 'hibrido' as Modality, label: 'Híbrida (Polos Parceiros)' }
                      ].map((item) => {
                        const isSelected = teacherData.modalities.includes(item.id);
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => {
                              const next = isSelected
                                ? teacherData.modalities.filter(m => m !== item.id)
                                : [...teacherData.modalities, item.id];
                              setTeacherData({ ...teacherData, modalities: next });
                              if (teacherErrors.modalities) setTeacherErrors({ ...teacherErrors, modalities: '' });
                            }}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                              isSelected
                                ? 'bg-[#00C9A7] text-slate-900 border-[#00C9A7] shadow-sm'
                                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-[#00C9A7]'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}{item.label}
                          </button>
                        );
                      })}
                    </div>
                    {teacherErrors.modalities && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {teacherErrors.modalities}
                      </p>
                    )}
                  </div>

                  {/* Sou professor surdo ou nativo */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={teacherData.isNativeOrDeaf}
                        onChange={(e) => setTeacherData({ ...teacherData, isNativeOrDeaf: e.target.checked })}
                        className="w-4 h-4 text-[#5B2C9E] rounded focus:ring-[#00C9A7]"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        Sou educador(a) surdo(a) ou falante nativo(a) de país hispânico/anglófono
                      </span>
                    </label>
                  </div>

                  {/* LGPD Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={teacherData.lgpdAccepted}
                        onChange={(e) => {
                          setTeacherData({ ...teacherData, lgpdAccepted: e.target.checked });
                          if (teacherErrors.lgpdAccepted) setTeacherErrors({ ...teacherErrors, lgpdAccepted: '' });
                        }}
                        className="w-4 h-4 text-[#5B2C9E] rounded focus:ring-[#00C9A7] mt-0.5"
                      />
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        Declaro que as informações acima são verídicas e autorizo a análise de currículo pela equipe de Recursos Humanos e Coordenação da LínguaViva.
                      </span>
                    </label>
                    {teacherErrors.lgpdAccepted && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {teacherErrors.lgpdAccepted}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-[#00C9A7] hover:bg-[#00B395] text-slate-900 font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Enviando proposta docente...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Cadastro de Professor</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

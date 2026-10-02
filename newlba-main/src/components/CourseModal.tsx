import { X, CheckCircle2, Star, Clock, Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export default function CourseModal({ course, onClose, onEnroll }: CourseModalProps) {
  if (!course) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-labelledby="course-modal-title"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Fechar detalhes do curso"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Course Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 text-[#5B2C9E] dark:text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
              {course.languageName}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
              Modalidade {course.modalityName}
            </span>
            {course.badge && (
              <span className="px-3 py-1 rounded-full bg-[#00C9A7]/20 text-[#00897B] dark:text-[#00C9A7] text-xs font-bold">
                {course.badge}
              </span>
            )}
          </div>

          <h3 id="course-modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">
            {course.title}
          </h3>

          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{course.rating.toFixed(2)}</span>
              <span className="text-slate-400 font-normal">({course.reviewCount} avaliações)</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{course.hours} horas ({course.duration})</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-slate-400" />
              <span>{course.instructorCount} professores</span>
            </div>
          </div>
        </div>

        {/* Media Preview */}
        <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
            Nível: <strong className="text-[#00C9A7]">{course.level}</strong> · Certificação Oficial Inclusa
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
            Visão Geral do Curso
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {course.description}
          </p>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-2">
              Diferenciais Pedagógicos
            </h4>
            <ul className="space-y-2">
              {course.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F9FC] dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#5B2C9E] dark:text-[#00C9A7]" />
              <span>Certificado de Conclusão Acessível</span>
            </p>
            <p>
              Emissão digital verificável com código de autenticidade, em conformidade com as diretrizes do MEC e Decreto nº 5.626/05 para Libras.
            </p>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onEnroll(course);
              onClose();
            }}
            className="flex-1 py-3.5 px-6 rounded-xl bg-[#5B2C9E] hover:bg-[#4A2382] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Matricular-se neste Curso</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="py-3.5 px-6 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm transition-colors"
          >
            Voltar
          </button>
        </div>

      </div>
    </div>
  );
}

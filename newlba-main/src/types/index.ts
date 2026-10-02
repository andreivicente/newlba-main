export type Language = 'libras' | 'espanhol' | 'ingles';
export type Modality = 'ead' | 'integral' | 'hibrido';
export type UserType = 'aluno' | 'professor';

export interface Course {
  id: string;
  title: string;
  language: Language;
  languageName: string;
  modality: Modality;
  modalityName: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Todos os Níveis';
  duration: string;
  hours: number;
  description: string;
  highlights: string[];
  instructorCount: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  type: UserType;
  name: string;
  role: string;
  location: string;
  language: string;
  modality: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  popular?: boolean;
  tagline: string;
  prices: {
    ead: number;
    integral: number;
    hibrido: number;
  };
  period: string;
  features: string[];
  cta: string;
}

export interface FaqItem {
  id: string;
  category: 'geral' | 'aluno' | 'professor' | 'acessibilidade';
  question: string;
  answer: string;
}

export interface StudentFormData {
  name: string;
  email: string;
  phone: string;
  language: Language | '';
  modality: Modality | '';
  level: string;
  needsAccessibility: boolean;
  accessibilityDetails?: string;
  notes: string;
  lgpdAccepted: boolean;
}

export interface TeacherFormData {
  name: string;
  email: string;
  phone: string;
  languages: Language[];
  modalities: Modality[];
  education: string;
  curriculumUrl: string;
  hourlyRate: string;
  isNativeOrDeaf: boolean;
  experienceYears: string;
  bio: string;
  lgpdAccepted: boolean;
}

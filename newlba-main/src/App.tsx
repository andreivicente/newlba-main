import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LanguageCards from './components/LanguageCards';
import ModalitiesSection from './components/ModalitiesSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import RegistrationSection from './components/RegistrationSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import PlacementQuizModal from './components/PlacementQuizModal';
import CourseModal from './components/CourseModal';
import { COURSES_DATA } from './data/mockData';
import { UserType, Language, Modality, Course } from './types';

export default function App() {
  // Accessibility and Theme State
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [readingGuide, setReadingGuide] = useState(false);
  const [guideTop, setGuideTop] = useState<number>(200);

  // Navigation and Registration state
  const [activeRegistrationTab, setActiveRegistrationTab] = useState<UserType>('aluno');
  const [selectedPlanInfo, setSelectedPlanInfo] = useState<{ planId: string; modality: Modality } | null>(null);

  // Modals
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);

  // Sync HTML root classes for accessibility
  useEffect(() => {
    const root = document.documentElement;

    // Dark Mode
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // High Contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font Scale
    root.classList.remove('font-scale-1', 'font-scale-2', 'font-scale-3', 'font-scale-4');
    root.classList.add(`font-scale-${fontScale}`);
  }, [darkMode, highContrast, fontScale]);

  // Reading Guide mouse tracking
  useEffect(() => {
    if (!readingGuide) return;
    const handleMouseMove = (e: MouseEvent) => {
      setGuideTop(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [readingGuide]);

  // Handle CTA routing to Registration
  const handleSelectAction = (target: UserType) => {
    setActiveRegistrationTab(target);
    const element = document.querySelector('#cadastro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle selecting a plan from the pricing table
  const handleSelectPlan = (planId: string, modality: Modality) => {
    setSelectedPlanInfo({ planId, modality });
    setActiveRegistrationTab('aluno');
    const element = document.querySelector('#cadastro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle selecting a modality from the modalities section
  const handleSelectModality = (modality: Modality) => {
    setSelectedPlanInfo({ planId: 'intermediario', modality });
    setActiveRegistrationTab('aluno');
    const element = document.querySelector('#cadastro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle course exploration
  const handleExploreCourse = (courseId: string) => {
    const found = COURSES_DATA.find(c => c.id === courseId) || COURSES_DATA[0];
    setSelectedCourseForModal(found);
  };

  // Handle quiz recommendation result
  const handleQuizResult = (language: Language, modality: Modality, level: string) => {
    setActiveRegistrationTab('aluno');
    setSelectedPlanInfo({ planId: 'intermediario', modality });
    const element = document.querySelector('#cadastro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      
      {/* Visual Reading Guide line if enabled */}
      {readingGuide && (
        <div 
          className="reading-guide" 
          style={{ top: `${guideTop}px` }} 
          aria-hidden="true" 
        />
      )}

      {/* Floating Accessibility Toolbar */}
      <AccessibilityToolbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        fontScale={fontScale}
        setFontScale={setFontScale}
        readingGuide={readingGuide}
        setReadingGuide={setReadingGuide}
      />

      {/* 1. Cabeçalho Fixo */}
      <Header
        onSelectAction={handleSelectAction}
        onOpenAccessibility={() => {}}
      />

      {/* Main Content Landmark */}
      <main id="conteudo-principal" className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onSelectAction={handleSelectAction}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* 3. Seção "Escolha seu idioma" */}
        <LanguageCards
          onSelectLanguage={() => {}}
          onExploreCourse={handleExploreCourse}
        />

        {/* 4. Seção "Modalidades de ensino" */}
        <ModalitiesSection
          onSelectModality={handleSelectModality}
        />

        {/* 5. Seção "Como funciona" */}
        <HowItWorksSection
          onSelectAction={handleSelectAction}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* 6 e 7. Seções "Para quem quer aprender" e "Para quem quer ensinar" */}
        <BenefitsSection
          onSelectAction={handleSelectAction}
        />

        {/* 8. Seção "Depoimentos" */}
        <TestimonialsSection />

        {/* 9. Seção "Planos e preços" */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />

        {/* 10. Seção "Cadastro rápido" */}
        <RegistrationSection
          key={activeRegistrationTab}
          initialTab={activeRegistrationTab}
          selectedPlanInfo={selectedPlanInfo}
        />

        {/* 11. Seção "Perguntas frequentes" */}
        <FaqSection />

        {/* 12. Seção "Contato" */}
        <ContactSection />
      </main>

      {/* 13. Rodapé */}
      <Footer />

      {/* Modais Interativos */}
      <PlacementQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectResult={handleQuizResult}
      />

      <CourseModal
        course={selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
        onEnroll={(course) => {
          setSelectedPlanInfo({ planId: 'intermediario', modality: course.modality });
          setActiveRegistrationTab('aluno');
          const element = document.querySelector('#cadastro');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

    </div>
  );
}

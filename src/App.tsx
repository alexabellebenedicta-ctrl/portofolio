import { useState, useEffect } from 'react';
import { Language, Project } from './types/portfolio';
import { INITIAL_PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AddProjectModal } from './components/AddProjectModal';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  // Multilingual state (Default: Bahasa Indonesia as requested)
  const [language, setLanguage] = useState<Language>('id');

  // Projects state with local storage persistence
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('alexabelle_portfolio_projects_v7');
      if (saved) {
        const parsed: Project[] = JSON.parse(saved);
        // Exclude removed projects
        const filtered = parsed.filter(p => !['pjsk-our-song', 'lilit-artwear', 'hima-outreach-campaign'].includes(p.id));
        if (filtered.length > 0) return filtered;
      }
    } catch {
      // ignore
    }
    return INITIAL_PROJECTS;
  });

  // Selected project for modal detail
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Add project modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Lightbox image viewer
  const [lightboxData, setLightboxData] = useState<{ url: string; title: string } | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    try {
      localStorage.setItem('alexabelle_portfolio_projects_v7', JSON.stringify(projects));
    } catch {
      // ignore
    }
  }, [projects]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  };

  const handleAddProject = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
    showToast(language === 'id' ? 'Proyek baru berhasil ditambahkan!' : 'New project added successfully!');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBFE] text-[#1E1B2E] selection:bg-[#E9D5FF] selection:text-[#3B0764]">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2E1065] text-white px-5 py-3 rounded-2xl shadow-xl border border-purple-300/30 text-xs font-semibold animate-in slide-in-from-bottom-3 duration-200">
          {toastMessage}
        </div>
      )}

      {/* Clean 3-zone Sticky Top Navigation */}
      <Navbar
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          language={language}
          onExplorePortfolio={() => scrollTo('projects')}
          onLearnAboutMe={() => scrollTo('about')}
        />

        {/* 2. About Me Section */}
        <AboutSection
          language={language}
        />

        {/* 3. Featured & Core Projects Section */}
        <ProjectsSection
          projects={projects}
          language={language}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onOpenLightbox={(url, title) => setLightboxData({ url, title })}
        />

        {/* 4. Skills & Tools Section */}
        <SkillsSection
          language={language}
        />

        {/* 5. Experience Section (HIMA Pengembangan SDM & Projects) */}
        <ExperienceSection
          language={language}
        />

        {/* 6. Education Section (Politeknik Internasional Bali) */}
        <EducationSection
          language={language}
        />

        {/* 7. Connect & Contact Section */}
        <ContactSection
          language={language}
        />
      </main>

      {/* Minimalist Footer */}
      <Footer
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
        onOpenLightbox={(url, title) => setLightboxData({ url, title })}
      />

      {/* Add Project Modal for customization */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        language={language}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
      />

      {/* Image Lightbox Viewer */}
      <LightboxModal
        imageUrl={lightboxData?.url || null}
        title={lightboxData?.title || ''}
        onClose={() => setLightboxData(null)}
      />
    </div>
  );
}

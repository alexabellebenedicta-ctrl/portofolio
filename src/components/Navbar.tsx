import React, { useState, useEffect } from 'react';
import { Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = UI_TRANSLATIONS.nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.home[language] },
    { id: 'about', label: t.about[language] },
    { id: 'projects', label: t.projects[language] },
    { id: 'skills', label: t.skills[language] },
    { id: 'experience', label: t.experience[language] },
    { id: 'contact', label: t.contact[language] },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-purple-100/80 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => scrollTo('home')}
          className="group text-left text-lg font-bold tracking-tight text-[#2E1065] hover:text-[#581C87] transition-colors"
        >
          <span>Portfolio</span>
        </button>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4B5563]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative py-1 transition-colors hover:text-[#2E1065] ${
                activeSection === link.id
                  ? 'text-[#2E1065] font-semibold'
                  : 'text-[#5B556D]'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#7E22CE] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions (Language Toggle & CTA) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Segmented language toggle */}
          <div className="flex items-center p-1 bg-[#F3E8FF]/60 border border-purple-200/60 rounded-lg text-xs font-semibold text-[#581C87]">
            <button
              onClick={() => onLanguageChange('id')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                language === 'id'
                  ? 'bg-white text-[#3B0764] shadow-xs font-bold'
                  : 'text-[#6B7280] hover:text-[#3B0764]'
              }`}
              aria-label="Ubah ke Bahasa Indonesia"
            >
              ID
            </button>
            <span className="text-purple-300 px-0.5 font-normal">|</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                language === 'en'
                  ? 'bg-white text-[#3B0764] shadow-xs font-bold'
                  : 'text-[#6B7280] hover:text-[#3B0764]'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Quick CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#3B0764] hover:bg-[#581C87] rounded-lg transition-all duration-200 shadow-xs hover:shadow-sm"
          >
            <span>{t.connectCta[language]}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center p-0.5 bg-[#F3E8FF]/70 rounded-md text-xs font-semibold">
            <button
              onClick={() => onLanguageChange('id')}
              className={`px-2 py-0.5 rounded text-[11px] ${
                language === 'id' ? 'bg-white text-[#3B0764] font-bold shadow-xs' : 'text-gray-500'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded text-[11px] ${
                language === 'en' ? 'bg-white text-[#3B0764] font-bold shadow-xs' : 'text-gray-500'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#3B0764] hover:bg-purple-50 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-purple-100 px-6 py-4 shadow-lg transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-purple-50 text-[#3B0764] font-semibold'
                    : 'text-gray-600 hover:text-[#3B0764]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-purple-100 flex items-center justify-between">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-white bg-[#3B0764] rounded-lg"
              >
                {t.connectCta[language]}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

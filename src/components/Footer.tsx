import React from 'react';
import { Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/portfolioData';
import { ArrowUp, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onLanguageChange }) => {
  const t = UI_TRANSLATIONS.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8FE] border-t border-purple-100 py-12 md:py-16 text-[#4B5563]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-purple-100">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-[#2E1065] mb-1">
              Alexabelle Benedicta
            </h3>
            <p className="text-xs text-[#5B556D] font-medium">
              {t.role[language]} · {t.institution[language]}
            </p>
          </div>

          {/* Social links & Language Toggle */}
          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a
              href="https://instagram.com/alexbl__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#2E1065] hover:text-[#7E22CE] font-semibold transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#7E22CE]" />
              <span>Instagram (@alexbl__)</span>
            </a>

            <a
              href="https://www.linkedin.com/in/alexabelle-benedicta-0459603a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#2E1065] hover:text-[#0A66C2] font-semibold transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            {/* Language Switcher in Footer */}
            <div className="flex items-center p-1 bg-white border border-purple-200/80 rounded-lg text-xs font-semibold text-[#581C87]">
              <button
                onClick={() => onLanguageChange('id')}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === 'id' ? 'bg-[#3B0764] text-white font-bold' : 'text-gray-500 hover:text-[#3B0764]'
                }`}
              >
                ID
              </button>
              <span className="text-purple-300 px-0.5">/</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === 'en' ? 'bg-[#3B0764] text-white font-bold' : 'text-gray-500 hover:text-[#3B0764]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2 text-[#4B5563] hover:text-[#2E1065] bg-white border border-purple-100 rounded-xl hover:bg-purple-50 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© 2026 Alexabelle Benedicta. {t.rights[language]}</p>
          <p className="text-[11px] text-[#9CA3AF]">
            Digital Business · Product Ideation · Creative Strategy
          </p>
        </div>
      </div>
    </footer>
  );
};

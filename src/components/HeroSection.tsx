import React from 'react';
import { Language } from '../types/portfolio';
import { UI_TRANSLATIONS, PROFILE_PHOTO } from '../data/portfolioData';
import { ArrowDown, FolderGit2, User, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  language: Language;
  onExplorePortfolio: () => void;
  onLearnAboutMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExplorePortfolio,
  onLearnAboutMe
}) => {
  const t = UI_TRANSLATIONS.hero;

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle background ambient purple glow (restrained, soft editorial, not cyberpunk) */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Focus */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Student status indicator - exact requested phrasing */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wider text-[#6B21A8] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#9333EA]" />
              <span>{t.studentRole[language]}</span>
              <span aria-hidden="true" className="text-purple-300">·</span>
              <span className="text-[#3B0764]">{t.programBadge[language]}</span>
              <span aria-hidden="true" className="text-purple-300">·</span>
              <span className="text-[#64748B] font-semibold">{t.semesterBadge[language]}</span>
            </div>

            {/* Prominent Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#2E1065] leading-[1.08] mb-6">
              Alexabelle Benedicta
            </h1>

            {/* Clean unboxed descriptor with typographic separators */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm md:text-base font-medium text-[#581C87] mb-6">
              <span>Digital Business</span>
              <span className="text-purple-300" aria-hidden="true">·</span>
              <span>Product Development</span>
              <span className="text-purple-300" aria-hidden="true">·</span>
              <span>Business Innovation</span>
            </div>

            {/* Short introductory prose */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl mb-9">
              {t.intro[language]}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExplorePortfolio}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#3B0764] hover:bg-[#581C87] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>{t.ctaPortfolio[language]}</span>
              </button>

              <button
                onClick={onLearnAboutMe}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#3B0764] bg-white hover:bg-purple-50/80 border border-purple-200/80 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <User className="w-4 h-4 text-[#7E22CE]" />
                <span>{t.ctaAbout[language]}</span>
              </button>
            </div>

            {/* Micro academic highlights */}
            <div className="pt-6 border-t border-purple-100/80 flex flex-wrap items-center gap-3 text-xs text-[#6B7280]">
              <div className="flex items-center gap-1.5 font-semibold text-[#3B0764]">
                <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
                <span>Mahasiswa Politeknik Internasional Bali</span>
              </div>
              <span className="text-purple-200">/</span>
              <span className="font-medium text-[#2E1065]">D4 Bisnis Digital</span>
              <span className="text-purple-200">/</span>
              <span className="font-medium text-[#7E22CE]">Semester 3</span>
            </div>
          </div>

          {/* Right Column: Alexabelle's Authentic Portrait Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative subtle purple ambient frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-200 via-purple-100 to-white rounded-3xl opacity-75 blur-md -z-10" />

              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-3.5 border border-purple-100 shadow-xl overflow-hidden group">
                <div className="relative aspect-4/5 sm:aspect-1/1 rounded-2xl overflow-hidden bg-purple-50">
                  <img
                    src={PROFILE_PHOTO}
                    alt="Alexabelle Benedicta — Mahasiswa Politeknik Internasional Bali, D4 Bisnis Digital, Semester 3"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E1065]/75 via-[#2E1065]/15 to-transparent" />

                  {/* Caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] uppercase tracking-wider text-purple-200 font-semibold mb-0.5">
                      {language === 'id' ? 'Profil Mahasiswa' : 'Student Profile'}
                    </p>
                    <p className="text-base font-bold tracking-tight text-white">
                      Alexabelle Benedicta
                    </p>
                    <p className="text-xs text-purple-200 mt-0.5 font-medium">
                      Mahasiswa Politeknik Internasional Bali
                    </p>
                    <p className="text-[11px] text-purple-300">
                      D4 Bisnis Digital · Semester 3
                    </p>
                  </div>
                </div>

                {/* Subtext info */}
                <div className="px-3 pt-3.5 pb-1.5 flex items-center justify-between text-xs text-[#4B5563]">
                  <span className="font-semibold text-[#3B0764]">D4 Bisnis Digital</span>
                  <span className="text-[#6B7280]">Semester 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex items-center justify-center">
          <button
            onClick={onLearnAboutMe}
            className="group flex flex-col items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#3B0764] transition-colors"
          >
            <span className="tracking-wide">{t.scrollIndicator[language]}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#9333EA]" />
          </button>
        </div>
      </div>
    </section>
  );
};

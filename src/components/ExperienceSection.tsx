import React from 'react';
import { Language } from '../types/portfolio';
import { EXPERIENCE_ITEMS, UI_TRANSLATIONS } from '../data/portfolioData';
import { Users2, PlusCircle, Sparkles } from 'lucide-react';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS.experience;

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7E22CE] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7E22CE]" />
            <span>{t.badge[language]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2E1065] mb-3 text-balance">
            {t.title[language]}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Experience Items */}
          <div className="md:col-span-8 space-y-6">
            {EXPERIENCE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="p-8 bg-white rounded-3xl border border-purple-100 shadow-sm hover:border-purple-200 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-purple-100/70">
                  <div>
                    <span className="text-xs font-bold text-[#7E22CE] uppercase tracking-wider">
                      {item.organization}
                    </span>
                    <h3 className="text-xl font-bold text-[#2E1065] mt-0.5">
                      {item.role[language]}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-[#7E22CE] font-semibold bg-purple-50 px-3 py-1 rounded-xl self-start sm:self-auto">
                    <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
                    <span>{language === 'id' ? 'Proyek Studi' : 'Study Project'}</span>
                  </span>
                </div>

                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {item.description[language]}
                </p>

                {/* Clean unboxed skill tags with typographic separators */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#3B0764] font-medium">
                  <span className="text-[#6B7280] font-semibold">
                    {language === 'id' ? 'Fokus Keahlian:' : 'Competencies:'}
                  </span>
                  {item.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="hover:text-[#7E22CE] transition-colors">{skill}</span>
                      {sIdx < item.skills.length - 1 && (
                        <span className="text-purple-300" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}

            {/* Placeholder for future experiences */}
            <div className="p-6 bg-[#FAF8FE] border border-dashed border-purple-200/90 rounded-3xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white border border-purple-100 flex items-center justify-center shrink-0">
                  <PlusCircle className="w-5 h-5 text-[#9333EA]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2E1065]">
                    {language === 'id' ? 'Pengalaman Organisasi & Kepanitiaan Mendatang' : 'Upcoming Organization & Committee Roles'}
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    {language === 'id'
                      ? 'Slot terstruktur untuk menambahkan kepanitiaan atau program kampus berikutnya seiring perkuliahan semester 4.'
                      : 'Structured slot to append future committees or campus initiatives as semester 4 progresses.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Context info */}
          <div className="md:col-span-4">
            <div className="p-6 sm:p-7 bg-[#FAF8FE] rounded-3xl border border-purple-100/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#7E22CE] uppercase tracking-wider">
                <Users2 className="w-4 h-4" />
                <span>{language === 'id' ? 'Pendekatan Praktik' : 'Practical Approach'}</span>
              </div>

              <h4 className="text-base font-bold text-[#2E1065] leading-snug">
                {language === 'id' ? 'Eksplorasi Proyek Nyata' : 'Hands-on Project Exploration'}
              </h4>

              <p className="text-xs text-[#4B5563] leading-relaxed">
                {language === 'id'
                  ? 'Fokus mengasah kapabilitas melalui pembuatan purwarupa digital, perancangan antarmuka berorientasi pengguna, serta formulasi kanvas model bisnis terstruktur.'
                  : 'Focusing on building real competencies through digital prototyping, user-centered interface design, and structured business model canvas formulation.'}
              </p>

              <div className="pt-4 border-t border-purple-100 text-xs text-[#6B7280] space-y-1.5">
                <div className="flex justify-between">
                  <span>{language === 'id' ? 'Fokus Studi' : 'Study Focus'}</span>
                  <span className="font-semibold text-[#2E1065]">Digital Business</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'id' ? 'Institusi' : 'Institution'}</span>
                  <span className="font-semibold text-[#2E1065]">Politeknik Internasional Bali</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

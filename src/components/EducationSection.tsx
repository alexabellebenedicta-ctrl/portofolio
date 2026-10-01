import React from 'react';
import { Language } from '../types/portfolio';
import { EDUCATION_INFO, UI_TRANSLATIONS } from '../data/portfolioData';
import { GraduationCap, MapPin, Award, Calendar, CheckCircle2 } from 'lucide-react';

interface EducationSectionProps {
  language: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS.education;
  const edu = EDUCATION_INFO;

  return (
    <section id="education" className="py-20 md:py-28 bg-[#FAF8FE] border-t border-purple-100/60 relative">
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

        {/* Education Highlight Card */}
        <div className="bg-white rounded-3xl border border-purple-100 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Institution & Degree Main Information */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-100/70 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-[#7E22CE]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2E1065] tracking-tight">
                    {edu.institution[language]}
                  </h3>
                  <p className="text-base font-bold text-[#7E22CE] mt-0.5">
                    {edu.program[language]}
                  </p>
                </div>
              </div>

              {/* Status & Period Metadata */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#6B7280] pt-1">
                <span className="flex items-center gap-1.5 font-semibold text-[#2E1065]">
                  <Award className="w-4 h-4 text-[#9333EA]" />
                  <span>{edu.status[language]}</span>
                </span>
                <span className="text-purple-300">·</span>
                <span className="flex items-center gap-1.5 font-bold text-[#3B0764] bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                  <Calendar className="w-3.5 h-3.5 text-[#7E22CE]" />
                  <span>{edu.period}</span>
                </span>
                <span className="text-purple-300">·</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7E22CE]" />
                  <span>Bali, Indonesia</span>
                </span>
              </div>

              <p className="text-sm text-[#4B5563] leading-relaxed pt-1">
                {edu.description[language]}
              </p>
            </div>

            {/* Academic Highlights & Focus Card */}
            <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-purple-100 space-y-3.5">
              <div className="p-5 bg-[#FAF8FE] rounded-2xl border border-purple-100/80 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7E22CE] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    <strong className="text-[#2E1065]">{language === 'id' ? 'Integrasi Bisnis & Teknologi: ' : 'Business & Technology Integration: '}</strong>
                    {language === 'id'
                      ? 'Fokus pada strategi digital, perancangan model bisnis inovatif, dan manajemen solusi digital terapan.'
                      : 'Focused on digital strategy, innovative business model design, and applied digital product management.'}
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7E22CE] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    <strong className="text-[#2E1065]">{language === 'id' ? 'Proyek Praktis & Portofolio: ' : 'Hands-on Projects & Portfolio: '}</strong>
                    {language === 'id'
                      ? 'Mengembangkan studi kasus nyata seperti HOSPI AI, perancangan web app, dan eksplorasi kanvas bisnis.'
                      : 'Developing real-world case studies including HOSPI AI, web application prototypes, and business model frameworks.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

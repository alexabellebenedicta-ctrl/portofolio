import React from 'react';
import { Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/portfolioData';
import { CheckCircle2, GraduationCap, Compass, Lightbulb, Users } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS.about;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8FE] border-y border-purple-100/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7E22CE] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7E22CE]" />
            <span>{t.badge[language]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2E1065] text-balance">
            {t.title[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Statement (Editorial Emphasis) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-purple-100/90 shadow-sm relative overflow-hidden">
              {/* Decorative soft purple corner accent */}
              <div
                className="absolute -top-12 -right-12 w-36 h-36 bg-purple-100/60 rounded-full blur-xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="mb-6 pb-6 border-b border-purple-100/70">
                <h3 className="text-xl font-bold text-[#2E1065] tracking-tight">
                  Alexabelle Benedicta
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="text-xs text-[#7E22CE] font-bold">
                    Mahasiswa Politeknik Internasional Bali
                  </span>
                  <span className="text-purple-300">·</span>
                  <span className="text-xs text-[#3B0764] font-medium">
                    D4 Bisnis Digital · Semester 3
                  </span>
                </div>
              </div>

              <p className="font-serif-editorial italic text-2xl sm:text-3xl text-[#2E1065] leading-snug mb-8">
                &ldquo;{t.mainText[language]}&rdquo;
              </p>

              <div className="pt-6 border-t border-purple-100/80 flex flex-wrap items-center justify-between gap-4 text-xs text-[#4B5563]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#7E22CE]" />
                  <span className="font-semibold text-[#2E1065]">{t.studentCard.university[language]}</span>
                </div>
                <span className="text-[#6B7280]">{t.studentCard.cohort[language]}</span>
              </div>
            </div>

            {/* 3 Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {t.pillars.map((pillar, idx) => {
                const icons = [
                  <Compass className="w-5 h-5 text-[#7E22CE]" key="0" />,
                  <Lightbulb className="w-5 h-5 text-[#7E22CE]" key="1" />,
                  <Users className="w-5 h-5 text-[#7E22CE]" key="2" />
                ];

                return (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-2xl border border-purple-100/80 transition-all hover:border-purple-200 hover:shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
                      {icons[idx]}
                    </div>
                    <h3 className="text-sm font-semibold text-[#2E1065] mb-1.5">
                      {pillar.title[language]}
                    </h3>
                    <p className="text-xs text-[#5B556D] leading-relaxed">
                      {pillar.desc[language]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Academic & Exploration Profile */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Student Profile Card */}
            <div className="p-7 bg-white rounded-3xl border border-purple-100/90 shadow-sm">
              <h3 className="text-sm font-bold tracking-tight text-[#2E1065] uppercase text-xs mb-4 text-[#7E22CE]">
                {language === 'id' ? 'Karakteristik & Minat Studi' : 'Study Focus & Characteristics'}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7E22CE] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#2E1065]">
                      {language === 'id' ? 'Pemecahan Masalah Bisnis' : 'Business Problem Solving'}
                    </h4>
                    <p className="text-xs text-[#4B5563] mt-0.5">
                      {language === 'id'
                        ? 'Memanfaatkan metodologi design thinking untuk menerjemahkan kendala operasional menjadi konsep digital terstruktur.'
                        : 'Employing design thinking methodologies to translate operational bottlenecks into structured digital concepts.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7E22CE] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#2E1065]">
                      {language === 'id' ? 'Koordinasi Proyek & Tim' : 'Project & Team Coordination'}
                    </h4>
                    <p className="text-xs text-[#4B5563] mt-0.5">
                      {language === 'id'
                        ? 'Berpengalaman menyusun lembar pelacak (tracking sheet), memonitor linimasa tugas, dan menjaga ritme kerja tim.'
                        : 'Experienced in maintaining tracking sheets, monitoring milestone timelines, and coordinating team workflows.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7E22CE] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#2E1065]">
                      {language === 'id' ? 'Integrasi UI/UX & Produk' : 'UI/UX & Product Alignment'}
                    </h4>
                    <p className="text-xs text-[#4B5563] mt-0.5">
                      {language === 'id'
                        ? 'Menghubungkan rancangan antarmuka pengguna dengan kelayakan model bisnis dan kenyamanan interaksi.'
                        : 'Aligning user interface workflows with commercial business feasibility and frictionless interaction.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-5 border-t border-purple-100 flex items-center justify-between text-xs text-[#6B7280]">
                <span>{language === 'id' ? 'Status Akademik' : 'Academic Status'}</span>
                <span className="font-semibold text-[#3B0764]">
                  {language === 'id' ? 'Aktif — Semester 3' : 'Active — Semester 3'}
                </span>
              </div>
            </div>

            {/* Quick quote / personal stance */}
            <div className="p-6 bg-gradient-to-br from-[#3B0764] to-[#2E1065] text-white rounded-3xl shadow-sm">
              <p className="text-xs uppercase tracking-wider text-purple-300 font-semibold mb-2">
                {language === 'id' ? 'Filosofi Kerja' : 'Work Philosophy'}
              </p>
              <p className="text-sm font-medium leading-relaxed text-purple-50">
                {language === 'id'
                  ? 'Teknologi bernilai tinggi ketika mampu menyederhanakan alur kerja manusia dan menciptakan nilai nyata bagi bisnis.'
                  : 'Technology achieves its highest value when it simplifies human workflows and delivers tangible business value.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

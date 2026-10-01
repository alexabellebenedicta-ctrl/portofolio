import React from 'react';
import { Language } from '../types/portfolio';
import { CORE_SKILL_GROUPS, TOOLS, UI_TRANSLATIONS } from '../data/portfolioData';
import { Table, FileText, Layout, Palette, Sparkles, Wrench, Code2, Briefcase, Wand2 } from 'lucide-react';

interface SkillsSectionProps {
  language: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS.skills;

  const getCategoryIcon = (catName: string) => {
    if (catName.includes('DIGITAL')) {
      return <Code2 className="w-4 h-4 text-[#7E22CE]" />;
    }
    if (catName.includes('BUSINESS')) {
      return <Briefcase className="w-4 h-4 text-[#7E22CE]" />;
    }
    return <Wand2 className="w-4 h-4 text-[#7E22CE]" />;
  };

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Table':
        return <Table className="w-5 h-5 text-[#2563EB]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#4F46E5]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#9333EA]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#06B6D4]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#7E22CE]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAF8FE] border-t border-purple-100/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7E22CE] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7E22CE]" />
            <span>{t.badge[language]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2E1065] mb-3 text-balance">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            {t.subtitle[language]}
          </p>
        </div>

        {/* 1. CORE SKILLS & DIGITAL EXPERTISE (3 Categorized Groups) */}
        <div className="space-y-12 mb-16">
          {CORE_SKILL_GROUPS.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-purple-200/60">
                <div className="p-1.5 bg-purple-100/70 rounded-lg">
                  {getCategoryIcon(group.category[language])}
                </div>
                <h3 className="text-sm font-bold tracking-wider text-[#3B0764] uppercase">
                  {group.category[language]}
                </h3>
              </div>

              {/* Category Cards (3 columns per group) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-6 bg-white rounded-2xl border border-purple-100/90 shadow-xs hover:border-purple-300 hover:shadow-sm transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-[#9333EA] shrink-0" />
                        <h4 className="text-base font-bold text-[#2E1065] tracking-tight group-hover:text-[#7E22CE] transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                        {skill.description[language]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. TOOLS UTILIZED */}
        <div className="pt-8 border-t border-purple-200/60">
          <div className="flex items-center gap-2.5 mb-6">
            <Wrench className="w-4 h-4 text-[#7E22CE]" />
            <div>
              <h3 className="text-lg font-bold text-[#2E1065]">
                {t.toolsTab[language]}
              </h3>
              <p className="text-xs text-[#6B7280]">
                {t.toolsSubtitle[language]}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOOLS.map((tool, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-purple-100 shadow-xs hover:border-purple-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-purple-50/80 rounded-xl">
                    {getToolIcon(tool.icon)}
                  </div>
                  <span className="text-[11px] font-medium text-[#7E22CE] bg-purple-50 px-2 py-0.5 rounded-md">
                    {tool.category}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#2E1065] mb-2">
                  {tool.name}
                </h4>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {tool.academicUsage[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

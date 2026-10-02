import React, { useState } from 'react';
import { Project, Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/portfolioData';
import { ArrowUpRight, Plus, Eye, Sparkles, FolderKanban } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  language: Language;
  onSelectProject: (project: Project) => void;
  onOpenAddModal: () => void;
  onOpenLightbox?: (imageUrl: string, title: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  language,
  onSelectProject,
  onOpenAddModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = UI_TRANSLATIONS.projects;

  const filterTabs = [
    { id: 'all', label: t.allFilter[language] },
    { id: 'business', label: t.businessFilter[language] },
    { id: 'web', label: t.webFilter[language] },
    { id: 'creative', label: t.creativeFilter[language] },
    { id: 'marketing', label: t.marketingFilter[language] },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.categoryType === activeCategory;
  });

  // Separate featured project (HOSPI AI) when in "all" or "business" view
  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => {
    if (activeCategory === 'all') {
      return p.id !== 'hospi-ai';
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7E22CE] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E22CE]" />
              <span>{t.badge[language]}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2E1065] mb-3 text-balance">
              {t.title[language]}
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              {t.description[language]}
            </p>
          </div>

          {/* Add Project CTA button for portfolio owner */}
          <button
            onClick={onOpenAddModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#3B0764] bg-white border border-purple-200 hover:bg-purple-50 rounded-xl transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            <Plus className="w-3.5 h-3.5 text-[#7E22CE]" />
            <span>{t.addProjectBtn[language]}</span>
          </button>
        </div>

        {/* Interactive Filter Controls (Segmented Bar) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#FAF8FE] border border-purple-100 rounded-2xl overflow-x-auto max-w-full mb-12 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                activeCategory === tab.id
                  ? 'bg-white text-[#2E1065] shadow-xs'
                  : 'text-[#6B7280] hover:text-[#2E1065]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. PRIMARY FEATURED PROJECT: HOSPI AI (Oversized Card) */}
        {featuredProject && (activeCategory === 'all' || activeCategory === 'business') && (
          <div className="mb-14">
            <div className="relative bg-gradient-to-br from-white via-white to-purple-50/40 rounded-3xl border border-purple-200/90 shadow-lg p-6 sm:p-9 lg:p-10 overflow-hidden group hover:border-purple-300 transition-all duration-300">
              {/* Subtle top badge */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#7E22CE] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#9333EA]" />
                  <span>{t.featuredLabel[language]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#6B7280] font-medium">{featuredProject.category[language]}</span>
                </div>
                {featuredProject.links?.live && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Web</span>
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Visual / Mockup Preview */}
                <div className="lg:col-span-7">
                  <div
                    onClick={() => onSelectProject(featuredProject)}
                    className="relative rounded-2xl overflow-hidden bg-purple-100/50 aspect-16/10 cursor-pointer shadow-sm border border-purple-100 group/img"
                  >
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-104"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#2E1065]/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-xs font-bold text-[#2E1065] rounded-xl shadow-md flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-[#7E22CE]" />
                        <span>{t.viewProjectBtn[language]}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E1065] tracking-tight mb-2">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#6B21A8] mb-4">
                      {featuredProject.subtitle[language]}
                    </p>
                    <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                      {featuredProject.shortDescription[language]}
                    </p>

                    {/* Relevant Areas / Skills (Clean unboxed tags) */}
                    <div className="mb-8">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2.5">
                        {language === 'id' ? 'Bidang Relevan:' : 'Relevant Areas:'}
                      </p>
                      <div className="flex flex-wrap gap-1.5 text-xs">
                        {featuredProject.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-purple-50 text-[#3B0764] rounded-lg border border-purple-100 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                    <div className="text-xs text-[#6B7280]">
                      <span className="font-semibold text-[#2E1065]">Role:</span>{' '}
                      <span>{featuredProject.role[language]}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {featuredProject.links?.live && (
                        <a
                          href={featuredProject.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-50/80 hover:bg-blue-100 text-[#1D4ED8] border border-blue-200/80 text-xs font-semibold rounded-xl shadow-xs transition-all"
                        >
                          <span>Live Web</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <button
                        onClick={() => onSelectProject(featuredProject)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B0764] hover:bg-[#581C87] text-white text-xs font-semibold rounded-xl shadow-xs transition-all hover:shadow-md"
                      >
                        <span>{t.viewProjectBtn[language]}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. REGULAR PROJECTS GRID (3-Column Layout on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {regularProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => onSelectProject(project)}
                className="relative aspect-16/10 bg-purple-50 overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#2E1065]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 bg-white/90 backdrop-blur-md text-xs font-bold text-[#2E1065] rounded-xl shadow-xs flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#7E22CE]" />
                    <span>{t.viewProjectBtn[language]}</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed category label */}
                  <div className="flex items-center justify-between text-xs text-[#6B7280] mb-2.5">
                    <span className="font-semibold text-[#7E22CE]">{project.category[language]}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-[#2E1065] tracking-tight group-hover:text-[#6B21A8] transition-colors cursor-pointer mb-2"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#4B5563] line-clamp-3 leading-relaxed mb-4">
                    {project.shortDescription[language]}
                  </p>

                  {/* Skills unboxed tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-[#FAF8FE] border border-purple-100/90 text-[#3B0764] rounded-md text-[11px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[#6B7280] text-[11px]">
                        +{project.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-purple-50 flex items-center justify-between text-xs">
                  <span className="text-[#6B7280] truncate max-w-[140px]" title={project.role[language]}>
                    <strong className="text-[#2E1065]">Role:</strong> {project.role[language]}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.links?.figma && (
                      <a
                        href={project.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#7E22CE] hover:text-[#581C87] bg-purple-50/90 hover:bg-purple-100 border border-purple-200/70 px-2 py-0.5 rounded-lg transition-colors"
                        title={language === 'id' ? 'Buka Prototipe Figma' : 'Open Figma Prototype'}
                      >
                        <span>Figma</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.links?.live && !project.links?.figma && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] bg-blue-50/80 hover:bg-blue-100/70 border border-blue-200/60 px-2 py-0.5 rounded-lg transition-colors"
                        title={language === 'id' ? 'Buka Website Langsung' : 'Open Live Website'}
                      >
                        <span>Live</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#7E22CE] hover:text-[#3B0764] transition-colors"
                    >
                      <span>{t.viewProjectBtn[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filter yields zero */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#FAF8FE] rounded-3xl border border-purple-100">
            <FolderKanban className="w-8 h-8 text-[#7E22CE] mx-auto mb-3 opacity-60" />
            <p className="text-sm font-semibold text-[#2E1065]">
              {language === 'id' ? 'Belum ada proyek di kategori ini' : 'No projects found in this category'}
            </p>
            <p className="text-xs text-[#6B7280] mt-1">
              {language === 'id'
                ? 'Klik "+ Tambah Proyek Baru" untuk memasukkan proyek baru.'
                : 'Click "+ Add New Project" to insert a new exploration.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useEffect } from 'react';
import { Project, Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/portfolioData';
import { X, ExternalLink, Calendar, UserCheck, Layers, FileCheck, Info, Maximize2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
  onOpenLightbox?: (imageUrl: string, title: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  language,
  onClose,
  onOpenLightbox
}) => {
  const t = UI_TRANSLATIONS.projectModal;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1E1B2E]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-purple-100 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-white/95 backdrop-blur-md border-b border-purple-100">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7E22CE]">
            <span>{project.category[language]}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#4B5563] hover:text-[#2E1065] hover:bg-purple-50 rounded-full transition-colors"
            aria-label={t.close[language]}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold text-[#2E1065] tracking-tight mb-2"
            >
              {project.title}
            </h2>
            <p className="text-base text-[#5B556D] font-medium leading-relaxed">
              {project.subtitle[language]}
            </p>
          </div>

          {/* Visual Showcase / Header Image */}
          <div className="relative rounded-2xl overflow-hidden bg-purple-50 border border-purple-100 shadow-xs group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            {onOpenLightbox && (
              <button
                onClick={() => onOpenLightbox(project.image, project.title)}
                className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-medium text-[#2E1065] rounded-lg shadow-sm hover:bg-white flex items-center gap-1.5 transition-all opacity-90 hover:opacity-100"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{language === 'id' ? 'Perbesar Visual' : 'View Full Image'}</span>
              </button>
            )}
          </div>

          {/* Metadata Bar (Zero-Pill format: clean unboxed text with separators) */}
          <div className="p-4 bg-[#FAF8FE] rounded-2xl border border-purple-100/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#4B5563]">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[#7E22CE]" />
              <span className="font-semibold text-[#2E1065]">Role:</span>
              <span>{project.role[language]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E22CE]" />
              <span className="font-semibold text-[#2E1065]">{project.category[language]}</span>
            </div>
          </div>

          {/* 1. Overview */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#7E22CE] flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{t.overview[language]}</span>
            </h3>
            <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
              {project.details.overview[language]}
            </p>
          </section>

          {/* 2. My Role */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#7E22CE] flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span>{t.role[language]}</span>
            </h3>
            <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
              {project.details.myContribution[language]}
            </p>
          </section>

          {/* 3. Process */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#7E22CE] flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <span>{t.process[language]}</span>
            </h3>
            <div className="p-5 bg-purple-50/50 rounded-2xl border border-purple-100/60">
              <p className="text-sm sm:text-base text-[#374151] whitespace-pre-line leading-relaxed">
                {project.details.process[language]}
              </p>
            </div>
          </section>

          {/* 4. Skills Applied */}
          <section className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#7E22CE]">
              {t.skillsApplied[language]}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#3B0764]">
              {project.details.skillsApplied.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white border border-purple-200 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* 5. Output */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#7E22CE]">
              {t.output[language]}
            </h3>
            <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
              {project.details.output[language]}
            </p>
          </section>

          {/* 6. Evidence */}
          <section className="space-y-4 pt-4 border-t border-purple-100">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#7E22CE] flex items-center gap-2">
                <Info className="w-4 h-4" />
                <span>{t.evidence[language]}</span>
              </h3>
              <span className="text-xs font-semibold text-[#7E22CE] bg-purple-50 px-2.5 py-0.5 rounded-full">
                {project.details.evidence.status[language]}
              </span>
            </div>

            <p className="text-xs text-[#6B7280] italic">
              {project.details.evidence.note[language]}
            </p>

            {project.details.evidence.items && project.details.evidence.items.length > 0 && (
              <div className="space-y-3">
                {project.details.evidence.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-2xl border border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-[#2E1065]">
                        {item.title[language]}
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-0.5">
                        {item.description[language]}
                      </p>
                    </div>
                    <span className="text-[11px] font-medium text-[#7E22CE] bg-purple-50 px-2.5 py-1 rounded-md shrink-0 self-start sm:self-auto">
                      {item.status[language]}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Links / External references */}
          {project.links && (
            <section className="p-4 bg-purple-50/70 rounded-2xl border border-purple-100 text-xs text-[#4B5563] space-y-2">
              <h4 className="font-semibold text-[#2E1065]">{t.links[language]}</h4>
              {project.links.note && (
                <p className="text-[#5B556D]">{project.links.note[language]}</p>
              )}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.links.figma && (
                  <a
                    href={project.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#7E22CE] text-white rounded-lg font-medium hover:bg-[#6B21A8] transition-colors shadow-xs"
                  >
                    <span>Figma Prototype</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.links.live && project.links.live !== project.links.figma ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3B0764] text-white rounded-lg font-medium hover:bg-[#581C87] transition-colors"
                  >
                    <span>Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : !project.links.figma ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-purple-200 text-[#6B7280] rounded-lg font-medium">
                    <span>Live Website: {language === 'id' ? 'Dalam Pengembangan' : 'In Active Development'}</span>
                  </span>
                ) : null}

                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-purple-200 text-[#2E1065] rounded-lg font-medium hover:bg-purple-50 transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : !project.links.figma ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-purple-200 text-[#6B7280] rounded-lg font-medium">
                    <span>GitHub: {language === 'id' ? 'Repositori Internal' : 'Internal Repository'}</span>
                  </span>
                ) : null}
              </div>
            </section>
          )}

          {/* Anti-Hallucination Disclaimer */}
          <div className="p-3.5 bg-gray-50 rounded-xl text-[11px] text-[#6B7280] leading-normal flex items-start gap-2">
            <Info className="w-4 h-4 text-[#7E22CE] shrink-0 mt-0.5" />
            <span>{t.evidenceDisclaimer[language]}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-gray-50/80 border-t border-purple-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#2E1065] bg-white border border-purple-200 hover:bg-purple-50 rounded-xl transition-colors"
          >
            {t.close[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

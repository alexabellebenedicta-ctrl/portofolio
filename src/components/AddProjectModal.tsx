import React, { useState } from 'react';
import { Project, Language } from '../types/portfolio';
import { X, Plus, Sparkles } from 'lucide-react';

interface AddProjectModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onAddProject: (newProject: Project) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  language,
  onClose,
  onAddProject
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [categoryType, setCategoryType] = useState<'business' | 'web' | 'creative' | 'marketing'>('business');
  const [subtitle, setSubtitle] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [role, setRole] = useState('');
  const [skillsStr, setSkillsStr] = useState('');
  const [overview, setOverview] = useState('');
  const [contribution, setContribution] = useState('');
  const [process, setProcess] = useState('');
  const [output, setOutput] = useState('');
  const [evidenceNote, setEvidenceNote] = useState('');
  const [externalLink, setExternalLink] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const skillsArray = skillsStr
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const newProj: Project = {
      id: `custom-project-${Date.now()}`,
      title: title.trim(),
      category: {
        id: category || 'Eksplorasi Bisnis Digital',
        en: category || 'Digital Business Exploration'
      },
      categoryType,
      subtitle: {
        id: subtitle || title.trim(),
        en: subtitle || title.trim()
      },
      shortDescription: {
        id: shortDesc || 'Deskripsi proyek akademik/digital yang dikembangkan.',
        en: shortDesc || 'Description of the academic/digital project developed.'
      },
      role: {
        id: role || 'Project Lead & Contributor',
        en: role || 'Project Lead & Contributor'
      },
      skills: skillsArray.length > 0 ? skillsArray : ['Digital Business', 'Problem Solving'],
      image: '/images/foto.jpg',
      featured: false,
      links: externalLink ? {
        live: externalLink,
        note: {
          id: 'Tautan eksternal yang dilampirkan',
          en: 'Attached external link'
        }
      } : {
        note: {
          id: 'Dokumentasi proyek akademik tersimpan',
          en: 'Academic project documentation preserved'
        }
      },
      details: {
        overview: {
          id: overview || shortDesc || 'Detail overview proyek akan ditambahkan.',
          en: overview || shortDesc || 'Project overview details to be added.'
        },
        myContribution: {
          id: contribution || role || 'Kontribusi terperinci dalam proyek ini.',
          en: contribution || role || 'Detailed contributions within this project.'
        },
        process: {
          id: process || '1. Analisis masalah awal.\n2. Perancangan solusi dan pengujian.\n3. Evaluasi hasil kerja tim.',
          en: process || '1. Initial problem analysis.\n2. Solution design and validation.\n3. Evaluation of team outcomes.'
        },
        skillsApplied: skillsArray.length > 0 ? skillsArray : ['Digital Business Strategy'],
        output: {
          id: output || 'Laporan hasil kerja atau deliverable proyek.',
          en: output || 'Project deliverable or outcome reporting.'
        },
        evidence: {
          status: {
            id: 'Dokumentasi Mandiri',
            en: 'Self-Documented'
          },
          note: {
            id: evidenceNote || 'Evidence coming soon — tangkapan layar/dokumen akan dilampirkan.',
            en: evidenceNote || 'Evidence coming soon — screenshots and documents to be attached.'
          }
        }
      }
    };

    onAddProject(newProj);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1E1B2E]/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-purple-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-purple-100 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#7E22CE]" />
            <h3 className="text-lg font-bold text-[#2E1065]">
              {language === 'id' ? 'Tambah Proyek Baru' : 'Add New Project'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-[#2E1065] mb-1">
              {language === 'id' ? 'Nama Proyek (Project Name) *' : 'Project Name *'}
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Business Model Exploration: Retail App"
              className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-sm text-[#2E1065]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#2E1065] mb-1">
                {language === 'id' ? 'Kategori (Category)' : 'Category'}
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Business & Product Development"
                className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2E1065] mb-1">
                {language === 'id' ? 'Tipe Kategori Filter' : 'Filter Category Type'}
              </label>
              <select
                value={categoryType}
                onChange={(e) => setCategoryType(e.target.value as any)}
                className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065] bg-white"
              >
                <option value="business">Business & Strategy</option>
                <option value="web">Web & Digital Product</option>
                <option value="creative">Creative & Coordination</option>
                <option value="marketing">Marketing & Content</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#2E1065] mb-1">
              {language === 'id' ? 'Role Alexabelle' : "Alexabelle's Role"}
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Product Ideation, UI/UX Workflow"
              className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#2E1065] mb-1">
              {language === 'id' ? 'Keahlian Terkait (Skills, pisahkan dengan koma)' : 'Skills Applied (comma-separated)'}
            </label>
            <input
              type="text"
              value={skillsStr}
              onChange={(e) => setSkillsStr(e.target.value)}
              placeholder="e.g. Business Model, UI/UX, Google Sheets, Team Coordination"
              className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#2E1065] mb-1">
              {language === 'id' ? 'Deskripsi Singkat (Short Description)' : 'Short Description'}
            </label>
            <textarea
              rows={2}
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              placeholder="Penjelasan ringkas tentang proyek untuk kartu portfolio..."
              className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#2E1065] mb-1">
              {language === 'id' ? 'Overview Detail (Modal)' : 'Detailed Overview (Modal)'}
            </label>
            <textarea
              rows={2}
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
              placeholder="Penjelasan detail konteks proyek..."
              className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#2E1065] mb-1">
                {language === 'id' ? 'Kontribusi Pribadi (Contribution)' : 'My Contribution'}
              </label>
              <textarea
                rows={2}
                value={contribution}
                onChange={(e) => setContribution(e.target.value)}
                placeholder="Apa yang dikerjakan Alexabelle..."
                className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2E1065] mb-1">
                {language === 'id' ? 'Hasil / Deliverable (Output)' : 'Output / Deliverables'}
              </label>
              <textarea
                rows={2}
                value={output}
                onChange={(e) => setOutput(e.target.value)}
                placeholder="Dokumentasi, kanvas model bisnis, prototype..."
                className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#2E1065] mb-1">
              {language === 'id' ? 'Catatan Bukti / Evidence (Optional)' : 'Evidence Note (Optional)'}
            </label>
            <input
              type="text"
              value={evidenceNote}
              onChange={(e) => setEvidenceNote(e.target.value)}
              placeholder="e.g. Evidence coming soon / Tersimpan dalam arsip perkuliahan"
              className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065]"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-purple-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded-xl"
            >
              {language === 'id' ? 'Batal' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#3B0764] hover:bg-[#581C87] rounded-xl shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Simpan ke Portfolio' : 'Save to Portfolio'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

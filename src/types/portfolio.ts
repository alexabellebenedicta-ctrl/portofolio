export type Language = 'id' | 'en';

export interface LocalizedString {
  id: string;
  en: string;
}

export interface ProjectEvidenceItem {
  title: LocalizedString;
  type: string;
  description: LocalizedString;
  image?: string;
  status: LocalizedString;
}

export interface Project {
  id: string;
  title: string;
  category: LocalizedString;
  categoryType: 'business' | 'web' | 'creative' | 'marketing';
  subtitle: LocalizedString;
  shortDescription: LocalizedString;
  role: LocalizedString;
  skills: string[];
  year?: string;
  image: string;
  featured?: boolean;
  links?: {
    live?: string;
    github?: string;
    note?: LocalizedString;
  };
  details: {
    overview: LocalizedString;
    myContribution: LocalizedString;
    process: LocalizedString;
    skillsApplied: string[];
    output: LocalizedString;
    evidence: {
      status: LocalizedString;
      note: LocalizedString;
      image?: string;
      items?: ProjectEvidenceItem[];
    };
  };
}

export interface SkillItem {
  name: string;
  description: LocalizedString;
}

export interface SkillCategoryGroup {
  category: LocalizedString;
  skills: SkillItem[];
}

export interface ToolItem {
  name: string;
  category: string;
  icon: string;
  academicUsage: LocalizedString;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: LocalizedString;
  period?: LocalizedString;
  description: LocalizedString;
  skills: string[];
}

export interface EducationInfo {
  institution: LocalizedString;
  program: LocalizedString;
  status: LocalizedString;
  period: string;
  description: LocalizedString;
  coursework: string[];
}

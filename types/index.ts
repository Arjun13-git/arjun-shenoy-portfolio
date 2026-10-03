export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: ProjectCategory;
  featured: boolean;
  github?: string;
  demo?: string;
  date: string;
  highlights?: string[];
  /** Optional status shown on the project card. */
  status?: ResearchStatus;
  /** Also list this project in the Research section. */
  showInResearch?: boolean;
  researchDomain?: string;
  researchStatus?: ResearchStatus;
}

export type ProjectCategory = "ai" | "backend" | "research" | "frontend" | "tools";

export interface Experience {
  slug: string;
  company: string;
  role: string;
  type: ExperienceType;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export type ExperienceType = "internship" | "training" | "freelance" | "research";

export interface Research {
  slug: string;
  title: string;
  abstract: string;
  domain: string;
  status: ResearchStatus;
  tech: string[];
  date: string;
  collaborators?: string[];
  github?: string;
  paperUrl?: string;
  presentedAt?: string;
}

export type ResearchStatus = "active" | "published" | "completed" | "draft";

export interface Competition {
  event: string;
  date: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  published?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface NavItem {
  title: string;
  href: string;
}

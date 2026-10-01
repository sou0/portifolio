export interface Project {
  id: string;
  title: string;
  category: 'wordpress' | 'nextjs' | 'systems' | 'cms';
  type: string;
  badge?: string;
  description: string;
  highlights: string[];
  techs: string[];
  link?: string;
  github?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  activities: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

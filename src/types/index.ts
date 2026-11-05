export interface ProjectChallenge {
  title: string;
  solution: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Real-time" | "Data & Tools";
  tags: string[];
  technologies: string[];
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  role: string;
  timeline: string;
  architecture: string[];
  challenges: ProjectChallenge[];
  features: string[];
  image: string;
  images?: string[];
  stats?: ProjectStat[];
  order: number;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "file-text" | "globe" | "twitter";
  highlight?: boolean;
}

export interface TechItem {
  name: string;
  description: string;
  level: "Experto" | "Avanzado" | "Competente";
  highlight?: boolean;
}

export interface TechCategory {
  title: string;
  description: string;
  items: TechItem[];
}

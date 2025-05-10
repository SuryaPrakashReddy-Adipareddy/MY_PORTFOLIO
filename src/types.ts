export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}
export interface Certificate {
  id: number;
  title: string;
  link: string;
  description: string;
};
// src/types/hobby.ts

export interface Hobby {
  title: string;
  description: string;
};

// src/types.ts
export interface Achievement {
  title: string;
  description: string;
  certificateLink: string;
}


export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}


export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
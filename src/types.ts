export interface WorkExperience {
  id: number;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

export interface ResumeData {
  personalDetails: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
  };
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  skills: string[];
}
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
  skills: string[];
}
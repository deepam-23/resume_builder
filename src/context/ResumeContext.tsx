import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ResumeData } from '@/types';

const initialData: ResumeData = {
  personalDetails: {
    name: 'Jane Doe',
    email: 'jane.doe@email.com',
    phone: '123-456-7890',
    linkedin: 'linkedin.com/in/janedoe',
  },
  summary: 'A highly motivated and detail-oriented professional with over 5 years of experience in project management. Proven ability to lead cross-functional teams and deliver projects on time and within budget.',
  experience: [
    {
      id: 1,
      jobTitle: 'Senior Project Manager',
      company: 'Tech Solutions Inc.',
      startDate: 'Jan 2020',
      endDate: 'Present',
      responsibilities: '- Led a team of 10 engineers to develop and launch a new mobile application.\n- Managed project budgets exceeding $1M.\n- Improved project delivery efficiency by 20% through process optimization.',
    },
  ],
  education: [
    {
      id: 1,
      degree: 'B.S. in Computer Science',
      school: 'State University',
      startDate: 'Aug 2012',
      endDate: 'May 2016',
    },
  ],
  projects: [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Developed a full-stack e-commerce website using React and Node.js, resulting in a 30% increase in online sales.',
      link: 'github.com/janedoe/e-commerce'
    }
  ],
  certifications: [],
  skills: ['Project Management', 'Agile Methodologies', 'Scrum', 'JIRA', 'React', 'Node.js'],
};

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    try {
      const item = window.localStorage.getItem('resumeData');
      return item ? JSON.parse(item) : initialData;
    } catch (error) {
      console.error(error);
      return initialData;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('resumeData', JSON.stringify(resumeData));
    } catch (error) {
      console.error(error);
    }
  }, [resumeData]);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
import React, { useState, useRef } from 'react';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import { Button } from '@/components/ui/button';
import { useReactToPrint } from 'react-to-print';
import { Printer } from 'lucide-react';
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

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
    documentTitle: `${resumeData.personalDetails.name.replace(' ', '_')}_Resume`,
  });

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-screen-2xl mx-auto">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:order-1">
            <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
          </div>
          <div className="lg:order-2">
            <div className="sticky top-24">
              <div className="flex justify-end mb-4">
                <Button onClick={handlePrint}>
                  <Printer className="mr-2 h-4 w-4" />
                  Download / Print
                </Button>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-auto max-h-[calc(100vh-10rem)]">
                <ResumePreview ref={previewRef} data={resumeData} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
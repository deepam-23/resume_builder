import React, { useState, useRef } from 'react';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import { Button } from '@/components/ui/button';
import { useReactToPrint } from 'react-to-print';
import { Printer } from 'lucide-react';
import { ResumeData } from '@/types';
import { MadeWithDyad } from "@/components/made-with-dyad";

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8">
      <div className="max-w-screen-2xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">ATS-Friendly Resume Builder</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Create a professional, machine-readable resume in minutes.
          </p>
        </header>
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:order-1">
            <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
          </div>
          <div className="lg:order-2">
            <div className="sticky top-8">
              <div className="flex justify-end mb-4">
                <Button onClick={handlePrint}>
                  <Printer className="mr-2 h-4 w-4" />
                  Download / Print
                </Button>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-auto max-h-[80vh]">
                <ResumePreview ref={previewRef} data={resumeData} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;
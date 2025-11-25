import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ResumePreview from '@/components/ResumePreview';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';
import { Download, ArrowLeft } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';

const Preview = () => {
  const { resumeData } = useResume();
  const previewRef = useRef<HTMLDivElement>(null);

  const calculateATSScore = (data: ResumeData) => {
    let score = 0;
    // Contact Info: 20 points
    score += data.personalDetails.name ? 5 : 0;
    score += data.personalDetails.email ? 5 : 0;
    score += data.personalDetails.phone ? 5 : 0;
    score += data.personalDetails.linkedin ? 5 : 0;
    // Summary: 15 points
    score += data.summary ? 15 : 0;
    // Experience: 25 points
    score += data.experience.length > 0 ? 15 : 0;
    score += data.experience.length > 1 ? 10 : 0;
    // Education: 15 points
    score += data.education.length > 0 ? 15 : 0;
    // Skills: 15 points
    score += data.skills.length > 0 ? 10 : 0;
    score += data.skills.length > 5 ? 5 : 0;
    // Projects/Certifications: 10 points
    score += data.projects.length > 0 ? 5 : 0;
    score += data.certifications.length > 0 ? 5 : 0;
    return Math.min(score, 100);
  };

  const handleDownload = () => {
    if (previewRef.current) {
      const opt = {
        margin: 1,
        filename: `${resumeData.personalDetails.name.replace(/ /g, '_')}_Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      };
      html2pdf().set(opt).from(previewRef.current).save();
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Button asChild variant="outline">
            <Link to="/builder">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Edit
            </Link>
          </Button>
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
        <div className="text-center mb-4">
          ATS Score: {calculateATSScore(resumeData)}/100
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <ResumePreview ref={previewRef} data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
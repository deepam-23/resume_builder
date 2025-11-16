import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ResumePreview from '@/components/ResumePreview';
import { Button } from '@/components/ui/button';
import { useReactToPrint } from 'react-to-print';
import { Printer, ArrowLeft } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';

const Preview = () => {
  const { resumeData } = useResume();
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
    documentTitle: `${resumeData.personalDetails.name.replace(' ', '_')}_Resume`,
  });

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
          <Button onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Download / Print
          </Button>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <ResumePreview ref={previewRef} data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
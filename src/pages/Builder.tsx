import React from 'react';
import { Link } from 'react-router-dom';
import ResumeForm from '@/components/ResumeForm';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const Builder = () => {
  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-6">
          <Button asChild>
            <Link to="/preview">
              <Eye className="mr-2 h-4 w-4" />
              Preview Resume
            </Link>
          </Button>
        </div>
        <ResumeForm />
      </div>
    </div>
  );
};

export default Builder;
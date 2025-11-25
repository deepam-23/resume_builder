import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Shield, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <FileText className="mx-auto h-16 w-16 text-primary" />
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Build Your Professional Resume
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
        Create a clean, modern, and ATS-friendly resume in minutes. Our builder guides you through the process, ensuring you stand out to recruiters.
      </p>
      <div className="mt-4 text-green-600 font-semibold text-xl">
        🚀 Completely Free - No Sign-ups, No Limits, No Ads!
      </div>
      <div className="mt-2 text-muted-foreground">
        Build, download, and share your resume instantly. Start landing your dream job today!
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button asChild size="lg">
          <Link to="/builder">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/about">Learn More</Link>
        </Button>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <div className="flex flex-col items-center text-center">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold">Privacy First</h3>
          <p className="mt-2 text-muted-foreground">
            Your data is your own. We store everything in your browser, meaning your personal information never touches our servers. Read our <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link> for more details.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FileText className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold">ATS-Optimized</h3>
          <p className="mt-2 text-muted-foreground">
            Our templates are designed to be easily parsed by Applicant Tracking Systems, giving you a competitive edge in your job search. Focus on your content, and we'll handle the formatting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
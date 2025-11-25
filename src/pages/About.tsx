const About = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold mb-4 text-primary">About This Resume Builder</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>
          Welcome to the ATS-Friendly Resume Builder! This tool was created to help you craft a clean, professional, and machine-readable resume that can successfully pass through modern Applicant Tracking Systems (ATS).
        </p>
        <p>
          Many companies use ATS to filter candidates before a human ever sees a resume. These systems often struggle with complex layouts, graphics, and unconventional fonts. Our builder focuses on a simple, single-column format with clear headings and standard fonts to ensure maximum compatibility.
        </p>
        <h2 className="text-2xl font-semibold text-foreground pt-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Live Preview:</strong> See your resume update in real-time as you type.</li>
          <li><strong>Simple & Clean Design:</strong> A minimalist layout designed for readability by both humans and machines.</li>
          <li><strong>Download as PDF:</strong> Easily print or download your resume to send to employers.</li>
          <li><strong>Privacy-Focused:</strong> All data is stored in your browser. Nothing is saved on our servers.</li>
        </ul>
        <p>
          Our goal is to give you the best possible chance of getting your resume into the right hands. Good luck with your job search!
        </p>
      </div>
    </div>
  );
};

export default About;
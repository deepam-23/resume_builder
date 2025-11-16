import React from "react";
import { ResumeData } from "@/types";

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = React.forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="p-8 bg-white text-black font-sans text-sm w-full"
      >
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-wider uppercase">
            {data.personalDetails.name || "Your Name"}
          </h1>
          <div className="flex justify-center items-center space-x-4 text-xs mt-2 flex-wrap">
            <span>{data.personalDetails.email || "your.email@example.com"}</span>
            <span>{data.personalDetails.phone || "(123) 456-7890"}</span>
            <span>{data.personalDetails.linkedin || "linkedin.com/in/yourprofile"}</span>
          </div>
        </header>

        {/* Summary */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 mb-2">
            Summary
          </h2>
          <p className="text-xs">{data.summary || "A brief professional summary about yourself."}</p>
        </section>

        {/* Experience */}
        <section className="mt-4">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 mb-2">
            Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-3">
              <h3 className="font-bold">{exp.jobTitle || "Job Title"}</h3>
              <div className="flex justify-between text-xs">
                <p className="italic">{exp.company || "Company Name"}</p>
                <p>
                  {exp.startDate || "Start Date"} - {exp.endDate || "End Date"}
                </p>
              </div>
              <ul className="list-disc list-inside mt-1 text-xs space-y-1">
                {exp.responsibilities.split('\n').map((line, i) => line && <li key={i}>{line}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mt-4">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 mb-2">
            Education
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <h3 className="font-bold">{edu.degree || "Degree or Certificate"}</h3>
              <div className="flex justify-between text-xs">
                <p className="italic">{edu.school || "School Name"}</p>
                <p>
                  {edu.startDate || "Start Date"} - {edu.endDate || "End Date"}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mt-4">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 mb-2">
            Skills
          </h2>
          <p className="text-xs">{data.skills.join(", ")}</p>
        </section>
      </div>
    );
  }
);

export default ResumePreview;
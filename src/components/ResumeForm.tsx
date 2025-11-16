import React, { useState } from "react";
import { ResumeData } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ResumeFormProps {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ resumeData, setResumeData }) => {
  const [skillInput, setSkillInput] = useState("");

  const handleChange = (section: keyof ResumeData, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeData(prev => ({ ...prev, summary: e.target.value }));
  };

  const handleArrayChange = (section: 'experience' | 'education' | 'projects' | 'certifications', index: number, field: string, value: string) => {
    setResumeData(prev => {
      const newArray = [...prev[section]];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [section]: newArray };
    });
  };

  const addArrayItem = (section: 'experience' | 'education' | 'projects' | 'certifications') => {
    let newItem;
    switch (section) {
      case 'experience':
        newItem = { id: Date.now(), jobTitle: "", company: "", startDate: "", endDate: "", responsibilities: "- Achieved X\n- Managed Y" };
        break;
      case 'education':
        newItem = { id: Date.now(), degree: "", school: "", startDate: "", endDate: "" };
        break;
      case 'projects':
        newItem = { id: Date.now(), name: "", description: "", link: "" };
        break;
      case 'certifications':
        newItem = { id: Date.now(), name: "", issuer: "", date: "" };
        break;
    }
    setResumeData(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
  };

  const removeArrayItem = (section: 'experience' | 'education' | 'projects' | 'certifications', id: number) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id),
    }));
  };

  const addSkill = () => {
    if (skillInput && !resumeData.skills.includes(skillInput)) {
      setResumeData(prev => ({ ...prev, skills: [...prev.skills, skillInput] }));
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove),
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Personal Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2"><Label htmlFor="name">Full Name</Label><Input id="name" value={resumeData.personalDetails.name} onChange={e => handleChange('personalDetails', 'name', e.target.value)} /></div>
          <div className="grid gap-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" value={resumeData.personalDetails.email} onChange={e => handleChange('personalDetails', 'email', e.target.value)} /></div>
          <div className="grid gap-2"><Label htmlFor="phone">Phone</Label><Input id="phone" value={resumeData.personalDetails.phone} onChange={e => handleChange('personalDetails', 'phone', e.target.value)} /></div>
          <div className="grid gap-2"><Label htmlFor="linkedin">LinkedIn</Label><Input id="linkedin" value={resumeData.personalDetails.linkedin} onChange={e => handleChange('personalDetails', 'linkedin', e.target.value)} /></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Professional Summary</CardTitle></CardHeader>
        <CardContent><Textarea placeholder="Write a brief summary..." value={resumeData.summary} onChange={handleSummaryChange} /></CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Work Experience</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {resumeData.experience.map((exp, index) => (
            <div key={exp.id} className="p-4 border rounded-md space-y-3 relative">
              <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => removeArrayItem('experience', exp.id)}><Trash2 className="h-4 w-4" /></Button>
              <div className="grid gap-2"><Label>Job Title</Label><Input placeholder="e.g. Software Engineer" value={exp.jobTitle} onChange={e => handleArrayChange('experience', index, 'jobTitle', e.target.value)} /></div>
              <div className="grid gap-2"><Label>Company</Label><Input placeholder="e.g. Google" value={exp.company} onChange={e => handleArrayChange('experience', index, 'company', e.target.value)} /></div>
              <div className="grid grid-cols-2 gap-4"><div className="grid gap-2"><Label>Start Date</Label><Input placeholder="e.g. Jan 2020" value={exp.startDate} onChange={e => handleArrayChange('experience', index, 'startDate', e.target.value)} /></div><div className="grid gap-2"><Label>End Date</Label><Input placeholder="e.g. Present" value={exp.endDate} onChange={e => handleArrayChange('experience', index, 'endDate', e.target.value)} /></div></div>
              <div className="grid gap-2"><Label>Responsibilities</Label><Textarea placeholder="Describe your key achievements..." value={exp.responsibilities} onChange={e => handleArrayChange('experience', index, 'responsibilities', e.target.value)} /></div>
            </div>
          ))}
          <Button variant="outline" onClick={() => addArrayItem('experience')}><PlusCircle className="mr-2 h-4 w-4" /> Add Experience</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Projects</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {resumeData.projects.map((proj, index) => (
            <div key={proj.id} className="p-4 border rounded-md space-y-3 relative">
              <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => removeArrayItem('projects', proj.id)}><Trash2 className="h-4 w-4" /></Button>
              <div className="grid gap-2"><Label>Project Name</Label><Input placeholder="e.g. Personal Portfolio" value={proj.name} onChange={e => handleArrayChange('projects', index, 'name', e.target.value)} /></div>
              <div className="grid gap-2"><Label>Link</Label><Input placeholder="e.g. github.com/user/repo" value={proj.link} onChange={e => handleArrayChange('projects', index, 'link', e.target.value)} /></div>
              <div className="grid gap-2"><Label>Description</Label><Textarea placeholder="Describe the project and your role..." value={proj.description} onChange={e => handleArrayChange('projects', index, 'description', e.target.value)} /></div>
            </div>
          ))}
          <Button variant="outline" onClick={() => addArrayItem('projects')}><PlusCircle className="mr-2 h-4 w-4" /> Add Project</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Education</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {resumeData.education.map((edu, index) => (
            <div key={edu.id} className="p-4 border rounded-md space-y-3 relative">
              <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => removeArrayItem('education', edu.id)}><Trash2 className="h-4 w-4" /></Button>
              <div className="grid gap-2"><Label>Degree / Certificate</Label><Input placeholder="e.g. B.S. in Computer Science" value={edu.degree} onChange={e => handleArrayChange('education', index, 'degree', e.target.value)} /></div>
              <div className="grid gap-2"><Label>School / Institution</Label><Input placeholder="e.g. State University" value={edu.school} onChange={e => handleArrayChange('education', index, 'school', e.target.value)} /></div>
              <div className="grid grid-cols-2 gap-4"><div className="grid gap-2"><Label>Start Date</Label><Input placeholder="e.g. Aug 2016" value={edu.startDate} onChange={e => handleArrayChange('education', index, 'startDate', e.target.value)} /></div><div className="grid gap-2"><Label>End Date</Label><Input placeholder="e.g. May 2020" value={edu.endDate} onChange={e => handleArrayChange('education', index, 'endDate', e.target.value)} /></div></div>
            </div>
          ))}
          <Button variant="outline" onClick={() => addArrayItem('education')}><PlusCircle className="mr-2 h-4 w-4" /> Add Education</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Certifications</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {resumeData.certifications.map((cert, index) => (
            <div key={cert.id} className="p-4 border rounded-md space-y-3 relative">
              <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => removeArrayItem('certifications', cert.id)}><Trash2 className="h-4 w-4" /></Button>
              <div className="grid gap-2"><Label>Certification Name</Label><Input placeholder="e.g. AWS Certified Cloud Practitioner" value={cert.name} onChange={e => handleArrayChange('certifications', index, 'name', e.target.value)} /></div>
              <div className="grid gap-2"><Label>Issuing Organization</Label><Input placeholder="e.g. Amazon Web Services" value={cert.issuer} onChange={e => handleArrayChange('certifications', index, 'issuer', e.target.value)} /></div>
              <div className="grid gap-2"><Label>Date Issued</Label><Input placeholder="e.g. June 2021" value={cert.date} onChange={e => handleArrayChange('certifications', index, 'date', e.target.value)} /></div>
            </div>
          ))}
          <Button variant="outline" onClick={() => addArrayItem('certifications')}><PlusCircle className="mr-2 h-4 w-4" /> Add Certification</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Skills</CardTitle></CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-2">
            <Input placeholder="Add a skill" value={skillInput} onChange={e => setSkillInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addSkill()} />
            <Button onClick={addSkill}>Add</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map(skill => <Badge key={skill} variant="secondary" onClick={() => removeSkill(skill)} className="cursor-pointer">{skill} &times;</Badge>)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeForm;
import { forwardRef } from 'react';
import { User, Info, Mail, Phone, MapPin, Cake, Facebook, Globe, BadgeCheck, GraduationCap, Briefcase } from 'lucide-react';
import formalImage from '@assets/FORMAL_1756878480562.png';

const ResumePreview = forwardRef<HTMLDivElement>((props, ref) => {
  const personalInfo = {
    name: 'Vincent V. Vila',
    title: 'Traditional & Digital/Graphic Artist | Software Developer',
    bio: 'I am a freelance Software Developer and Traditional & Digital Artist. I create interactive and user-friendly software, including web and desktop applications. As an artist, I focus on realistic acrylic and charcoal portraits, as well as canvas and mural paintings, mostly working on commissioned projects.',
    age: '24 years old',
    birthday: 'August 5, 2001',
    gender: 'Male',
    address: 'Pangil, Laguna',
    contact: '09669085642',
    email: 'vincent.vila@gmail.com',
    facebook: 'facebook.com/vncntvv',
  portfolio: 'penzero00.github.io/vincent-vila-portfolio'
  };

  const skillsData = {
    design: [
      { name: 'Adobe Photoshop', level: 85 },
      { name: 'Adobe Illustrator', level: 85 },
      { name: 'Canva', level: 90 },
      { name: 'Blender', level: 75 },
      { name: 'Acrylic Painting', level: 100 },
      { name: 'Charcoal Drawing', level: 100 }
    ],
    development: [
      { name: 'Node.js', level: 80 },
      { name: 'React', level: 80 },
      { name: 'JavaScript/TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'Database Management', level: 85 },
      { name: 'Web Development', level: 90 },
      { name: 'C#', level: 90 },
      { name: 'Java', level: 90 }
    ]
  };

  const education = {
    degree: 'Bachelor of Science in Information Technology',
    major: 'Major in Animation and Motion Graphics',
    period: '2022 - Present'
  };

  const experience = [
    {
      title: 'Freelance Traditional Artist',
      company: 'Self-Employed',
      period: '2016 - Present',
      description: 'Creating realistic acrylic and charcoal portraits, canvas paintings, and custom mural works for commissioned projects.'
    },
    {
      title: 'Freelance Graphic Designer and Digital Artist',
      company: 'Self-Employed',
      period: '2024 - Present',
      description: 'Designing logos, branding materials, digital artwork, and creative graphics for various clients and projects.'
    },
    {
      title: 'Freelance Software Developer',
      company: 'Self-Employed',
      period: '2022 - Present',
      description: 'Developing and designing interactive and user-friendly web application and desktop software'
    }
  ];

  return (
  <div ref={ref} className="resume-container bg-white text-gray-900 p-5 max-w-4xl mx-auto text-[11px] rounded-2xl shadow-xl border border-gray-200">
      {/* Header Section with Profile */}
  <div className="flex items-start gap-4 mb-6 pb-2 border-b-4 border-accent">
        <div className="flex-1 pt-2">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1 tracking-tight">{personalInfo.name}</h1>
          <p className="text-base text-gray-700 mb-2 font-semibold">{personalInfo.title}</p>
          <p className="text-sm text-gray-600 leading-tight italic">{personalInfo.bio}</p>
        </div>
      </div>

      {/* Personal Information */}
  <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 border-l-4 border-accent pl-3 bg-gray-50 py-1 rounded">
          Personal Information
        </h2>
  <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
            <div><span className="font-semibold">Age:</span> {personalInfo.age}</div>
            <div><span className="font-semibold">Birthday:</span> {personalInfo.birthday}</div>
            <div><span className="font-semibold">Gender:</span> {personalInfo.gender}</div>
            <div><span className="font-semibold">Address:</span> {personalInfo.address}</div>
            <div><span className="font-semibold">Contact:</span> {personalInfo.contact}</div>
            <div><span className="font-semibold">Email:</span> {personalInfo.email}</div>
            <div><span className="font-semibold">Facebook:</span> {personalInfo.facebook}</div>
            <div><span className="font-semibold">Portfolio:</span> {personalInfo.portfolio}</div>
          </div>
        </div>
      </div>

      {/* Skills and Expertise */}
  <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 border-l-4 border-accent pl-3 bg-gray-50 py-1 rounded">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <h3 className="text-xs font-semibold mb-1 bg-gray-900 text-white px-2 py-1 rounded flex items-center gap-1">
              <User className="inline-block w-4 h-4 text-white" /> Design & Creative
            </h3>
            <div className="space-y-0.5">
              {skillsData.design.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-xs font-medium">{skill.name}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-12 h-1 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-gray-900 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 w-6">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold mb-1 bg-gray-900 text-white px-2 py-1 rounded flex items-center gap-1">
              <BadgeCheck className="inline-block w-4 h-4 text-white" /> Development
            </h3>
            <div className="space-y-0.5">
              {skillsData.development.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-xs font-medium">{skill.name}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-12 h-1 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-gray-900 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 w-6">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 border-l-4 border-accent pl-3 bg-gray-50 py-1 rounded">
          Education
        </h2>
  <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xs font-semibold text-gray-800">{education.degree}</h3>
          <p className="text-xs text-gray-700 font-medium">{education.major}</p>
          <p className="text-xs text-gray-600">{education.period}</p>
        </div>
      </div>

      {/* Experience */}
  <div className="mb-2">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 border-l-4 border-accent pl-3 bg-gray-50 py-1 rounded">
          Work Experience
        </h2>
  <div className="space-y-2.5">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xs font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-xs text-gray-700 font-medium">{exp.company}</p>
              <p className="text-xs text-gray-600">{exp.period}</p>
              <p className="text-xs text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
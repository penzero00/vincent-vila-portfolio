import { forwardRef } from 'react';
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
    portfolio: 'https://www.upwork.com/freelancers/~01517ad1fcc09da4c4?mp_source=share'
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
      { name: 'Web Development', level: 90 }
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
    <div ref={ref} className="bg-white text-gray-900 p-6 max-w-4xl mx-auto">
      {/* Header Section with Profile */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 pb-4 border-b-2 border-gray-900">
        <img
          src={formalImage}
          alt="Vincent V. Vila"
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-900"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{personalInfo.name}</h1>
          <p className="text-lg text-gray-700 mb-2">{personalInfo.title}</p>
          <p className="text-xs text-gray-600 leading-relaxed">{personalInfo.bio}</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 mb-3 pb-1 border-b border-gray-900">Personal Information</h2>
        <div className="grid md:grid-cols-2 gap-2 text-xs">
          <div><strong>Age:</strong> {personalInfo.age}</div>
          <div><strong>Birthday:</strong> {personalInfo.birthday}</div>
          <div><strong>Gender:</strong> {personalInfo.gender}</div>
          <div><strong>Address:</strong> {personalInfo.address}</div>
          <div><strong>Contact:</strong> {personalInfo.contact}</div>
          <div><strong>Email:</strong> {personalInfo.email}</div>
          <div className="md:col-span-2"><strong>Facebook:</strong> {personalInfo.facebook}</div>
          <div className="md:col-span-2"><strong>Portfolio:</strong> {personalInfo.portfolio}</div>
        </div>
      </div>

      {/* Skills and Expertise */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 mb-3 pb-1 border-b border-gray-900">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 bg-gray-900 text-white px-2 py-1 rounded">Design & Creative</h3>
            <div className="space-y-1">
              {skillsData.design.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-xs font-medium">{skill.name}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-gray-900 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 w-8">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 bg-gray-900 text-white px-2 py-1 rounded">Development</h3>
            <div className="space-y-1">
              {skillsData.development.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-xs font-medium">{skill.name}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-gray-900 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 w-8">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-900">Education</h2>
        <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-900">
          <h3 className="text-sm font-semibold text-gray-800">{education.degree}</h3>
          <p className="text-xs text-gray-700 font-medium">{education.major}</p>
          <p className="text-xs text-gray-600">{education.period}</p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b border-gray-900">Professional Experience</h2>
        <div className="space-y-3">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-900">
              <h3 className="text-sm font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-xs text-gray-700 font-medium">{exp.company}</p>
              <p className="text-xs text-gray-600 mb-1">{exp.period}</p>
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
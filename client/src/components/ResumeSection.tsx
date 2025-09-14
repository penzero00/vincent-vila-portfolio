import { useState } from 'react';
import { Download } from 'lucide-react';
import ResumeModal from './ResumeModal';

export default function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="resume" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resume
          </h2>
          
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-accent">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-semibold" data-testid="text-degree">
                      Bachelor of Science in Information Technology
                    </h4>
                    <p className="text-accent" data-testid="text-major">
                      Major in Animation and Motion Graphics
                    </p>
                    <p className="text-muted-foreground text-sm" data-testid="text-education-period">
                      2022 - Present
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-accent">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-semibold" data-testid="text-job-title-1">
                      Freelance Traditional Artist
                    </h4>
                    <p className="text-accent" data-testid="text-company-1">
                      Self-Employed
                    </p>
                    <p className="text-muted-foreground text-sm" data-testid="text-job-period-1">
                      2016 - Present
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-semibold" data-testid="text-job-title-2">
                      Freelance Graphic Designer and Digital Artist
                    </h4>
                    <p className="text-accent" data-testid="text-company-2">
                      Self-Employed
                    </p>
                    <p className="text-muted-foreground text-sm" data-testid="text-job-period-2">
                      2024 - Present
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-semibold" data-testid="text-job-title-3">
                      Freelance Software Developer
                    </h4>
                    <p className="text-accent" data-testid="text-company-3">
                      Self-Employed
                    </p>
                    <p className="text-muted-foreground text-sm" data-testid="text-job-period-3">
                      2022 - Present
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              data-testid="button-download-resume"
            >
              <Download size={20} className="inline mr-2" />
              Download Full Resume
            </button>
          </div>
          
          <ResumeModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </div>
      </div>
    </section>
  );
}

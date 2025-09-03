import { Download } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Resume
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
                      2019 - 2023
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-accent">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-semibold" data-testid="text-job-title">
                      Freelance Software Developer & Artist
                    </h4>
                    <p className="text-accent" data-testid="text-company">
                      Self-Employed
                    </p>
                    <p className="text-muted-foreground text-sm" data-testid="text-job-period">
                      2021 - Present
                    </p>
                    <p className="text-sm mt-2" data-testid="text-job-description">
                      Creating interactive web applications and traditional artwork for commissioned projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              data-testid="button-download-resume"
            >
              <Download size={20} className="inline mr-2" />
              Download Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import FloatingNav from '@/components/FloatingNav';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Three.js Background */}
      <ThreeBackground className="fixed inset-0 z-0 pointer-events-none" />
      
      {/* Floating Navigation */}
      <FloatingNav activeSection={activeSection} onNavigate={scrollToSection} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection onExplore={() => scrollToSection('about')} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Vincent V. Vila. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

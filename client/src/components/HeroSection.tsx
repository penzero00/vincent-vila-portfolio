import { Facebook, Instagram, Github, Briefcase, MessageCircle } from 'lucide-react';
import formalImage from '@assets/FORMAL_1756878480562.png';

interface HeroSectionProps {
  onExplore: () => void;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/vncntvv', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/vncnt_vv/', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://discord.com/channels/@pen_zero', label: 'Discord' },
    { icon: Github, href: 'https://github.com/penzero00', label: 'GitHub' },
    { icon: Briefcase, href: 'https://www.upwork.com/freelancers/~01517ad1fcc09da4c4?mp_source=share', label: 'Upwork' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
          {/* Profile Image */}
          <img
            src={formalImage}
            alt="Vincent V. Vila - Professional Photo"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-accent shadow-glow animate-float object-cover"
            data-testid="img-profile"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vincent V. Vila
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Traditional & Digital/Graphic Artist | Software Developer
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-3xl text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-125"
                data-testid={`link-${social.label.toLowerCase()}`}
                aria-label={social.label}
              >
                <social.icon size={32} />
              </a>
            ))}
          </div>
          
          <button
            onClick={onExplore}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
            data-testid="button-explore"
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
}

import { Facebook, Instagram, Github, Briefcase, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/vncntvv', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/vncnt_vv/', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://discord.com/channels/@pen_zero', label: 'Discord' },
    { icon: Github, href: 'https://github.com/penzero00', label: 'GitHub' },
    { icon: Briefcase, href: 'https://www.upwork.com/freelancers/~01517ad1fcc09da4c4?mp_source=share', label: 'Upwork' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Ready to bring your ideas to life? Whether you need software development or artistic services, I'm here to help.
          </p>
          
          <div className="glass-effect rounded-2xl p-8">
            <div className="flex justify-center space-x-8 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-4xl text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-125"
                  data-testid={`link-contact-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon size={48} />
                </a>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              Connect with me on any platform or check out my work on Upwork for professional collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

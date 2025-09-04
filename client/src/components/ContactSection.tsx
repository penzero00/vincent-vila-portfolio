import { Facebook, Instagram, Github, Mail, MessageCircle, Briefcase } from 'lucide-react';

// Custom Discord icon component
const DiscordIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// Custom Upwork icon component
const UpworkIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06c1.492 0 2.703 1.212 2.703 2.703c-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548c-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3.002-2.439-5.453-5.439-5.453z"/>
  </svg>
);

export default function ContactSection() {
  // Handle Gmail click with fallback
  const handleGmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Try to open email client
    const mailtoLink = 'mailto:vincent.vila00@gmail.com';
    const gmailWebLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=vincent.vila00@gmail.com';
    
    // Create a temporary link to test mailto
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    
    // Try to click the mailto link
    tempLink.click();
    document.body.removeChild(tempLink);
    
    // Set a timeout to open Gmail web interface as fallback
    // This gives the email client time to open, if available
    setTimeout(() => {
      // Check if the page is still focused (email client might not have opened)
      if (document.hasFocus()) {
        window.open(gmailWebLink, '_blank', 'noopener,noreferrer');
      }
    }, 500);
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/vncntvv', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/vncnt_vv/', label: 'Instagram' },
    { icon: DiscordIcon, href: 'https://discord.com/channels/@pen_zero', label: 'Discord' },
    { icon: Github, href: 'https://github.com/penzero00', label: 'GitHub' },
    { icon: UpworkIcon, href: 'https://www.upwork.com/freelancers/~01517ad1fcc09da4c4?mp_source=share', label: 'Upwork' },
    { icon: Mail, href: 'mailto:vincent.vila00@gmail.com', label: 'Gmail', onClick: handleGmailClick },
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
                  target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  onClick={social.onClick}
                  className="social-icon text-4xl text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-125"
                  data-testid={`link-contact-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon size={48} />
                </a>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              Connect with me on any of these platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

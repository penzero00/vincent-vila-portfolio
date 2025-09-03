interface FloatingNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function FloatingNav({ activeSection, onNavigate }: FloatingNavProps) {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-accent shadow-glow scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            data-testid={`nav-${section.id}`}
            title={section.label}
          />
        ))}
      </div>
    </nav>
  );
}

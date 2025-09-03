export default function SkillsSection() {
  const designSkills = [
    { name: 'Adobe Photoshop', level: 85 },
    { name: 'Adobe Illustrator', level: 85 },
    { name: 'Canva', level: 90 },
    { name: 'Blender', level: 75 },
  ];

  const developmentSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'React', level: 80 },
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium" data-testid={`text-skill-${skill.name.toLowerCase().replace(/[.\s]/g, '-')}`}>
          {skill.name}
        </span>
        <span className="text-accent" data-testid={`text-level-${skill.name.toLowerCase().replace(/[.\s]/g, '-')}`}>
          {skill.level}%
        </span>
      </div>
      <div className="bg-muted rounded-full h-2">
        <div 
          className="skill-bar rounded-full h-full"
          style={{ width: `${skill.level}%` }}
          data-testid={`bar-skill-${skill.name.toLowerCase().replace(/[.\s]/g, '-')}`}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8 text-accent">Design & Creative</h3>
              <div className="space-y-6">
                {designSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8 text-accent">Development</h3>
              <div className="space-y-6">
                {developmentSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

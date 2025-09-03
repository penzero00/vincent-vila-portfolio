export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Personal Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex justify-between">
                  <span className="font-medium">Name:</span>
                  <span data-testid="text-name">Vincent V. Vila</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Age:</span>
                  <span data-testid="text-age">24 years old</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Birthday:</span>
                  <span data-testid="text-birthday">August 5, 2001</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Gender:</span>
                  <span data-testid="text-gender">Male</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <span className="font-medium block mb-2">Education:</span>
                  <span className="text-sm" data-testid="text-education">
                    Bachelor of Science in Information Technology, Major in Animation and Motion Graphics
                  </span>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">My Story</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bio">
                I am a freelance Software Developer and Traditional & Digital Artist. I create interactive and user-friendly software, including web and desktop applications. As an artist, I focus on realistic acrylic and charcoal portraits, as well as canvas and mural paintings, mostly working on commissioned projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Code, Palette, PaintBucket, Image, Box, Brush, X } from 'lucide-react';
import { type ProjectFile, type ProjectData } from '@shared/schema';

interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: any;
  files: ProjectFile[];
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: projectData, isLoading } = useQuery<ProjectData>({
    queryKey: ['/api/projects'],
    enabled: true,
  });

  const categories: Omit<ProjectCategory, 'files'>[] = [
    {
      id: 'web-applications',
      name: 'Web Applications',
      description: 'Interactive web applications built with modern frameworks and technologies.',
      icon: Code,
    },
    {
      id: 'digital-designs',
      name: 'Graphic Designs',
      description: 'Logos, branding, and traditional graphic design projects.',
      icon: Palette,
    },
    {
      id: 'digital-art',
      name: 'Digital Art',
      description: 'Creative digital artwork and illustrations created using digital tools.',
      icon: Brush,
    },
    {
      id: 'portraits',
      name: 'Acrylic & Charcoal Portraits',
      description: 'Realistic portrait artwork using traditional acrylic and charcoal mediums.',
      icon: PaintBucket,
    },
    {
      id: 'murals',
      name: 'Canvas & Mural Paintings',
      description: 'Large-scale canvas works and mural paintings for various spaces.',
      icon: Image,
    },
    {
      id: '3d-models',
      name: '3D Modeling',
      description: '3D models, animations, and renders created with Blender and other tools.',
      icon: Box,
    },
  ];

  const getProjectCount = (categoryId: string): number => {
    if (!projectData) return 0;
    return projectData[categoryId]?.length || 0;
  };

  const getCategoryFiles = (categoryId: string): ProjectFile[] => {
    if (!projectData) return [];
    return projectData[categoryId] || [];
  };

  const selectedCategoryData = selectedCategory 
    ? categories.find(cat => cat.id === selectedCategory)
    : null;

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Project Categories
        </h2>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const projectCount = getProjectCount(category.id);
            
            return (
              <div
                key={category.id}
                className="project-card glass-effect rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20"
                onClick={() => setSelectedCategory(category.id)}
                data-testid={`card-category-${category.id}`}
              >
                <div className="text-accent text-4xl mb-6">
                  <IconComponent size={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <div className="text-sm text-accent font-mono">
                  <span data-testid={`count-${category.id}`}>
                    {isLoading ? 'Loading...' : `${projectCount} projects`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Project Showcase Modal */}
        {selectedCategory && selectedCategoryData && (
          <div className="mt-16">
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-accent">
                  {selectedCategoryData.name}
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-close-category"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6" data-testid="grid-projects">
                {getCategoryFiles(selectedCategory).length > 0 ? (
                  getCategoryFiles(selectedCategory).map((file, index) => (
                    <div key={index} className="glass-effect rounded-xl p-6">
                      <div className="bg-muted rounded-lg h-48 mb-4 flex items-center justify-center">
                        {file.type.startsWith('image/') ? (
                          <img
                            src={file.path}
                            alt={file.name}
                            className="w-full h-full object-cover rounded-lg"
                            data-testid={`img-project-${index}`}
                          />
                        ) : (
                          <Image size={48} className="text-muted-foreground" />
                        )}
                      </div>
                      <h4 className="font-semibold mb-2" data-testid={`title-project-${index}`}>
                        {file.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {file.type}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No projects available in this category yet.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Projects will appear here automatically when added to the assets folder.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

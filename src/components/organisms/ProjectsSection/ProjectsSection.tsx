import { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { ProjectCard, type Project } from '@/components/organisms/ProjectCard';
import { Icon } from '@/components/atoms/Icon';

export interface ProjectsSectionProps {
  projects: (Project & { category?: string })[];
  className?: string;
}

export const ProjectsSection = ({ projects, className = '' }: ProjectsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories from projects
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category).filter((cat): cat is string => Boolean(cat))))];

  // Filter projects by category
  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className={`py-16 px-8 bg-base-100 ${className}`} id="projects">
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-4">
          My Projects
        </Typography>
        <Typography variant="p" className="text-center text-base-content/70 mb-8">
          A collection of real-world projects showcasing my technical skills
        </Typography>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter projects by category">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              aria-label={`Filter projects by ${category}`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredProjects.map((project) => (
              <ProjectCard key={`${project.title}-${project.githubUrl}`} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon name="FaFolderOpen" size={48} className="mx-auto text-base-content/30 mb-4" />
            <Typography variant="h3" className="text-base-content/70 mb-2">
              No projects found
            </Typography>
            <Typography variant="p" className="text-base-content/50">
              Try selecting a different category
            </Typography>
          </div>
        )}
      </div>
    </section>
  );
};

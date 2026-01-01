import { Card, CardBody, CardTitle, CardActions } from '@/components/atoms/Card';
import { Typography } from '@/components/atoms/Typography';
import { ProjectTag } from '@/components/molecules/ProjectTag';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  return (
    <Card className={`relative group overflow-hidden w-full max-w-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${className}`}>
      <figure className="h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </figure>
      <CardBody>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <Typography variant="p" className="text-base-content/70">
          {project.description}
        </Typography>
        <div className="flex flex-wrap gap-2 mt-4 mb-2">
          {project.technologies.map((tech, index) => (
            <ProjectTag key={index} label={tech} />
          ))}
        </div>
        <CardActions className="mt-4">
          {project.liveUrl && (
            <Button variant="primary" size="sm" onClick={() => window.open(project.liveUrl, '_blank')}>
              <Icon name="FaExternalLinkAlt" /> Live Demo
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={() => window.open(project.githubUrl, '_blank')}>
            <Icon name="FaGithub" /> GitHub
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  );
};
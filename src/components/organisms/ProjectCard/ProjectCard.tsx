import React from 'react';
import PropTypes from 'prop-types';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-card__image" />
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <div className="project-card__links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

export default ProjectCard;
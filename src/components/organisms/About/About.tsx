import React from 'react';
import { Avatar } from '@/components/atoms/Avatar';
import { Typography } from '@/components/atoms/Typography';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import { StatCard } from '@/components/molecules/StatCard';
import { Badge } from '@/components/atoms/Badge';
import { Icon } from '@/components/atoms/Icon';

export interface AboutProps {
  name: string;
  title: string;
  bio: string[];
  image: string;
  techStack: string[];
  stats: {
    projects: number;
    technologies: number;
    achievements: number;
    problemsSolved: number;
  };
  socialLinks: { platform: string; url: string; iconName: string }[];
  className?: string;
}

export const About = ({
  name,
  title,
  bio,
  image,
  techStack,
  stats,
  socialLinks,
  className = '',
}: AboutProps) => {
  return (
    <section id="about" className={`py-16 px-8 bg-base-200 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-12">
          About Me
        </Typography>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Left Column: Avatar & Social Links */}
          <div className="flex flex-col items-center lg:w-1/3">
            <Avatar src={image} alt={name} size="xl" shape="circle" className="mb-6 ring ring-primary ring-offset-base-100 ring-offset-2" />
            <Typography variant="h3" className="mb-2">{name}</Typography>
            <Typography variant="p" className="text-base-content/70 mb-6">{title}</Typography>
            <SocialLinks links={socialLinks} size="md" />
          </div>

          {/* Right Column: Bio & Tech Stack */}
          <div className="lg:w-2/3">
            {bio.map((paragraph, index) => (
              <Typography key={index} variant="p" className="mb-4 text-justify">
                {paragraph}
              </Typography>
            ))}

            <div className="mt-8">
              <Typography variant="h4" className="mb-4">
                My Tech Stack
              </Typography>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <Badge key={index} variant="primary" outline>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Projects Completed" value={stats.projects} iconName="FaFolder" />
          <StatCard label="Technologies Mastered" value={stats.technologies} iconName="FaLaptopCode" color="secondary" />
          <StatCard label="Achievements Unlocked" value={stats.achievements} iconName="FaTrophy" color="accent" />
          <StatCard label="Problems Solved" value={stats.problemsSolved} iconName="FaPuzzlePiece" color="neutral" />
        </div>
      </div>
    </section>
  );
};

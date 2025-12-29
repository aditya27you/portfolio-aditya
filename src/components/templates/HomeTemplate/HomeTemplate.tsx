import React, { ReactNode } from 'react';

export interface HomeTemplateProps {
  navbar: ReactNode;
  hero: ReactNode;
  about: ReactNode;
  skills: ReactNode;
  projects: ReactNode;
  experience: ReactNode;
  blog: ReactNode;
  contact: ReactNode;
  footer: ReactNode;
  className?: string;
}

export const HomeTemplate = ({
  navbar,
  hero,
  about,
  skills,
  projects,
  experience,
  blog,
  contact,
  footer,
  className = '',
}: HomeTemplateProps) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      {navbar}
      <main className="flex-1">
        {hero}
        {about}
        {skills}
        {projects}
        {experience}
        {blog}
        {contact}
      </main>
      {footer}
    </div>
  );
};

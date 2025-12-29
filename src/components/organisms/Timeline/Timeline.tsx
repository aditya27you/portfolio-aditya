import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';

export interface TimelineEntry {
  date: string;
  title: string;
  subtitle: string;
  description: string | string[];
  iconName?: string;
  link?: {
    href: string;
    text: string;
  };
}

export interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

export const Timeline = ({ entries, className = '' }: TimelineProps) => {
  return (
    <section id="experience" className={`py-16 px-8 bg-base-200 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-12">
          My Journey
        </Typography>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {entries.map((entry, index) => (
            <li key={index}>
              <div className="timeline-middle">
                <Icon name={entry.iconName || 'FaRegCircle'} className="text-primary" />
              </div>
              <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} md:text-end mb-10`}>
                <div className="text-lg font-black">{entry.date}</div>
                <Typography variant="h3" className="text-primary text-xl">{entry.title}</Typography>
                <Typography variant="h4" className="text-base-content/80 text-lg">{entry.subtitle}</Typography>
                {Array.isArray(entry.description) ? (
                  entry.description.map((desc, i) => (
                    <Typography key={i} variant="p" className="text-base-content/70">
                      {desc}
                    </Typography>
                  ))
                ) : (
                  <Typography variant="p" className="text-base-content/70">
                    {entry.description}
                  </Typography>
                )}
                {entry.link && (
                  <Button variant="link" size="sm" onClick={() => window.open(entry.link?.href, '_blank')} className="px-0">
                    {entry.link.text} <Icon name="FaExternalLinkAlt" className="ml-1 text-xs" />
                  </Button>
                )}
              </div>
              {index < entries.length - 1 && <hr />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

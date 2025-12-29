import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';

export interface Interest {
  name: string;
  description: string;
  iconName: string;
}

export interface InterestsProps {
  interests: Interest[];
  className?: string;
}

export const Interests = ({ interests, className = '' }: InterestsProps) => {
  return (
    <section id="interests" className={`py-16 px-8 bg-base-100 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-12">
          Beyond Coding
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
                  <Icon name={interest.iconName} size={40} />
                </div>
                <Typography variant="h3" className="card-title mb-2">
                  {interest.name}
                </Typography>
                <Typography variant="p" className="text-base-content/70">
                  {interest.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

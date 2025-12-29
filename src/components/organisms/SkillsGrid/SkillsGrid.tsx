import React, { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { SkillCard, SkillCardProps } from '@/components/molecules/SkillCard';
import { Button } from '@/components/atoms/Button';

export interface SkillsGridProps {
  skills: SkillCardProps[];
  className?: string;
}

export const SkillsGrid = ({ skills, className = '' }: SkillsGridProps) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];

  const filteredSkills = skills.filter(skill => 
    activeCategory === 'All' || skill.category === activeCategory
  );

  return (
    <section id="skills" className={`py-16 px-8 bg-base-100 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-12">
          My Skills
        </Typography>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

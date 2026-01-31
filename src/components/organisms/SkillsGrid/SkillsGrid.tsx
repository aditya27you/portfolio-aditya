import React from 'react';
import Typography from '@material-ui/core/Typography';
import SkillCard from './SkillCard';

const SkillsGrid = ({ skills }) => {
  return (
    <div className="skills-grid">
      <Typography variant="h6" gutterBottom>This is an honest snapshot of what I use in my projects.</Typography>
      <div className="grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            className={`${
              skill.category === 'Frontend' ? 'lg:col-span-2 row-span-2' : 
              skill.category === 'Backend' ? 'lg:col-span-1 row-span-1' : 
              'md:col-span-1 row-span-1'
            } hover:tooltip`}
            onMouseEnter={() => setHoverSkill(skill)}
            onMouseLeave={() => setHoverSkill(null)}
          />
        ))}
      </div>
      {hoverSkill && <div className="tooltip">{`${hoverSkill.name} → ${hoverSkill.insight}`}</div>}
    </div>
  );
};

export default SkillsGrid;

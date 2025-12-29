import React from 'react';
import { Card, CardBody } from '@/components/atoms/Card';
import { Icon } from '@/components/atoms/Icon';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/atoms/Badge';

export interface SkillCardProps {
  name: string;
  iconName: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced';
  className?: string;
}

export const SkillCard = ({ name, iconName, proficiency, className = '' }: SkillCardProps) => {
  const badgeVariant = {
    Beginner: 'info',
    Intermediate: 'warning',
    Advanced: 'success',
  }[proficiency] as any;

  return (
    <Card 
      variant="bordered" 
      className={`hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-primary w-full max-w-[200px] ${className}`}
    >
      <CardBody className="items-center text-center p-6">
        <Icon name={iconName} size={48} className="text-primary mb-2" />
        <Typography variant="h4" className="mb-2">{name}</Typography>
        <Badge variant={badgeVariant} outline size="sm">
          {proficiency}
        </Badge>
      </CardBody>
    </Card>
  );
};

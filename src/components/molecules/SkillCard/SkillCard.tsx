import { Card, CardBody } from '@/components/atoms/Card';
import { Icon } from '@/components/atoms/Icon';
import { Typography } from '@/components/atoms/Typography';

export interface SkillCardProps {
  name: string;
  iconName: string;
  category: string;
  className?: string;
}

export const SkillCard = ({ name, iconName, className = '' }: SkillCardProps) => {
  return (
    <Card
      variant="bordered"
      className={`hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-primary w-full max-w-[200px] ${className}`}
    >
      <CardBody className="items-center text-center p-6">
        <Icon name={iconName} size={48} className="text-primary mb-2" />
        <Typography variant="h4" className="mb-2">{name}</Typography>
      </CardBody>
    </Card>
  );
};

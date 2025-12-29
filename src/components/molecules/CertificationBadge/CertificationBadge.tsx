import { Icon } from '@/components/atoms/Icon';
import { Card, CardBody } from '@/components/atoms/Card';

export interface CertificationBadgeProps {
  title: string;
  issuer: string;
  date: string;
  iconName?: string;
  verifyUrl?: string;
  className?: string;
}

// TODO: The Badge component is not used. Implement it later.
export const CertificationBadge = ({
  title,
  issuer,
  date,
  iconName = 'FaCertificate',
  verifyUrl,
  className = '',
}: CertificationBadgeProps) => {
  return (
    <Card variant="bordered" className={`hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardBody className="flex flex-row items-center gap-4 p-4">
        <div className="bg-primary/10 p-3 rounded-full text-primary">
          <Icon name={iconName} size={24} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-base">{title}</h4>
          <p className="text-sm text-base-content/70">{issuer} • {date}</p>
        </div>
        {verifyUrl && (
          <a href={verifyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle btn-sm">
            <Icon name="FaExternalLinkAlt" size={14} />
          </a>
        )}
      </CardBody>
    </Card>
  );
};

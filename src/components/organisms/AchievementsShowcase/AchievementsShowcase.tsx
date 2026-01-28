import { Typography } from '@/components/atoms/Typography';
import { Card, CardBody } from '@/components/atoms/Card';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';
import type { Certification } from '@/data/certificationsData';

export interface AchievementsShowcaseProps {
  certifications: Certification[];
  className?: string;
}

export const AchievementsShowcase = ({ certifications, className = '' }: AchievementsShowcaseProps) => {
  return (
    <section id="achievements" className={`py-16 px-8 bg-base-200 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-4">
          Certifications & Achievements
        </Typography>
        <Typography variant="p" className="text-center text-base-content/70 mb-12">
          Professional certifications and notable achievements
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardBody className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={cert.icon || 'FaCertificate'} size={24} className="text-primary" />
                  </div>
                  <Badge variant="neutral" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                
                <div>
                  <Typography variant="h3" className="text-lg font-bold mb-1">
                    {cert.title}
                  </Typography>
                  <Typography variant="p" className="text-sm text-primary font-medium mb-2">
                    {cert.issuer}
                  </Typography>
                  {cert.description && (
                    <Typography variant="p" className="text-sm text-base-content/70">
                      {cert.description}
                    </Typography>
                  )}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1 mt-auto"
                  >
                    View Credential <Icon name="FaExternalLinkAlt" size={12} />
                  </a>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Badge } from '@/components/atoms/Badge';

export interface ProjectTagProps {
  label: string;
  className?: string;
}

export const ProjectTag = ({ label, className = '' }: ProjectTagProps) => {
  // Simple color mapping based on common tech names (optional, can be expanded)
  const getColor = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('react') || lower.includes('typescript')) return 'primary';
    if (lower.includes('node') || lower.includes('mongo')) return 'secondary';
    if (lower.includes('python') || lower.includes('django')) return 'accent';
    return 'neutral';
  };

  return (
    <Badge variant={getColor(label)} outline className={`font-mono text-xs ${className}`}>
      {label}
    </Badge>
  );
};

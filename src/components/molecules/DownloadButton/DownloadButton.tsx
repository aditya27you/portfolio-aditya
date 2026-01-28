import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export interface DownloadButtonProps {
  resumeUrl: string;
  fileName?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const DownloadButton = ({
  resumeUrl,
  fileName = 'Resume.pdf',
  variant = 'primary',
  size = 'md',
  className = '',
}: DownloadButtonProps) => {
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      className={className}
    >
      <Icon name="FaDownload" />
      Download Resume
    </Button>
  );
};

import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const SocialLinks = ({ links, className = '', size = 'md' }: SocialLinksProps) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link) => (
        <a 
          key={link.platform} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={link.platform}
        >
          <Button variant="ghost" size={size} className="btn-circle">
            <Icon name={link.iconName} size="1.5em" />
          </Button>
        </a>
      ))}
    </div>
  );
};

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { SocialLinks } from '@/components/molecules/SocialLinks';

export interface FooterProps {
  socialLinks: { platform: string; url: string; iconName: string }[];
  copyrightText: string;
  className?: string;
}

export const Footer = ({ socialLinks, copyrightText, className = '' }: FooterProps) => {
  return (
    <footer className={`footer footer-center p-10 bg-base-300 text-base-content ${className}`}>
      <aside>
        <Typography variant="h3" className="text-3xl font-bold">AS.</Typography>
        <Typography variant="p" className="text-base-content/70">
          {copyrightText}
        </Typography>
      </aside>
      <nav>
        <SocialLinks links={socialLinks} size="lg" className="grid-flow-col gap-4" />
      </nav>
    </footer>
  );
};

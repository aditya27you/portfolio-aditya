import React, { useEffect, useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { CTAButton } from '@/components/molecules/CTAButton';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import { Icon } from '@/components/atoms/Icon';
// GSAP imports will be added when actual scrolling behavior is implemented
// import { gsap } from 'gsap';
// import { TextPlugin } from 'gsap/TextPlugin';
// gsap.registerPlugin(TextPlugin);

export interface HeroProps {
  name: string;
  roles: string[];
  tagline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  socialLinks: { platform: string; url: string; iconName: string }[];
  className?: string;
}

export const Hero = ({
  name,
  roles,
  tagline,
  primaryCtaText,
  secondaryCtaText,
  socialLinks,
  className = '',
}: HeroProps) => {
  const [displayedRole, setDisplayedRole] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    // This is a simple placeholder for the typing effect
    // GSAP TextPlugin will be integrated later for a smoother animation
    setDisplayedRole(roles[roleIndex]);
  }, [roleIndex, roles]);

  return (
    <section id="home" className={`relative min-h-screen flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white ${className}`}>
      <div className="max-w-4xl z-10">
        <Typography variant="h1" className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm {name}
        </Typography>
        <Typography variant="h2" className="text-3xl md:text-5xl font-semibold mb-6">
          <span className="text-accent">{displayedRole}</span>
        </Typography>
        <Typography variant="p" className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {tagline}
        </Typography>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <CTAButton>{primaryCtaText}</CTAButton>
          <CTAButton variant="outline">{secondaryCtaText}</CTAButton>
        </div>

        <SocialLinks links={socialLinks} size="lg" className="justify-center mb-16" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="FaChevronDown" size={32} />
        </div>
      </div>
    </section>
  );
};

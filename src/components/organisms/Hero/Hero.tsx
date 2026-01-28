import { useEffect, useRef } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { CTAButton } from '@/components/molecules/CTAButton';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import { Icon } from '@/components/atoms/Icon';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export interface HeroProps {
  name: string;
  roles: string[];
  tagline:string;
  primaryCtaText: string;
  secondaryCtaText: string;
  primaryCtaLink?: string;
  secondaryCtaLink?: string;
  socialLinks: { platform: string; url: string; iconName: string }[];
  className?: string;
}

export const Hero = ({
  name,
  roles,
  tagline,
  primaryCtaText,
  secondaryCtaText,
  primaryCtaLink,
  secondaryCtaLink,
  socialLinks,
  className = '',
}: HeroProps) => {
  const roleRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !roleRef.current) return;
    
    const timeline = gsap.timeline({ repeat: -1 });
    roles.forEach(role => {
      timeline.to(roleRef.current, { duration: 2, text: role, ease: "none" }).to(roleRef.current, { duration: 1, text: "", ease: "none" });
    });

    const heroElements = heroRef.current.children;
    gsap.from(heroElements, {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, [roles]);

  return (
    <section id="home" className={`relative min-h-screen flex flex-col justify-center items-center text-center p-8 bg-base-100 text-base-content ${className}`}>
      <div className="max-w-4xl z-10" ref={heroRef}>
        <Typography variant="h1" className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm {name}
        </Typography>
        <Typography variant="h2" className="text-3xl md:text-5xl font-semibold mb-6">
          <span className="text-accent" ref={roleRef}></span>
        </Typography>
        <Typography variant="p" className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {tagline}
        </Typography>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <CTAButton href={primaryCtaLink}>{primaryCtaText}</CTAButton>
          <CTAButton variant="outline" href={secondaryCtaLink} target={secondaryCtaLink?.endsWith('.pdf') ? "_blank" : undefined}>{secondaryCtaText}</CTAButton>
        </div>

        <SocialLinks links={socialLinks} size="lg" className="justify-center mb-16" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="FaChevronDown" size={32} />
        </div>
      </div>
    </section>
  );
};
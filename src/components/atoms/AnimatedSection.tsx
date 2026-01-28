import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in ${isIntersecting ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
};

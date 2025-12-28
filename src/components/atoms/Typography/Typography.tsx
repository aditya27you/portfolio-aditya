import React, { ElementType } from 'react';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'code';
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({ variant = 'p', className = '', children }: TypographyProps) => {
  const Tag = variant as ElementType;
  return <Tag className={`type-${variant} ${className}`}>{children}</Tag>;
};

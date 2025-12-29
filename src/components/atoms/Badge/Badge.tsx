import React from 'react';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Badge = ({ 
  variant = 'neutral', 
  size = 'md', 
  outline = false, 
  className = '', 
  children 
}: BadgeProps) => {
  const variantClass = variant === 'ghost' ? 'badge-ghost' : `badge-${variant}`;
  const sizeClass = `badge-${size}`;
  const outlineClass = outline ? 'badge-outline' : '';

  return (
    <div className={`badge ${variantClass} ${sizeClass} ${outlineClass} ${className}`}>
      {children}
    </div>
  );
};

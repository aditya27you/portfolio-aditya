import React, { ProgressHTMLAttributes } from 'react';

export interface ProgressProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

export const Progress = ({
  variant,
  className = '',
  ...props
}: ProgressProps) => {
  const variantClass = variant ? `progress-${variant}` : '';

  return (
    <progress 
      className={`progress ${variantClass} ${className}`} 
      {...props} 
    />
  );
};

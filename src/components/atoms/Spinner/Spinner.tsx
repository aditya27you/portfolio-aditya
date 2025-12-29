import type { HTMLAttributes } from 'react';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

export const Spinner = ({
  variant = 'spinner',
  size = 'md',
  color,
  className = '',
  ...props
}: SpinnerProps) => {
  const variantClass = `loading-${variant}`;
  const sizeClass = `loading-${size}`;
  const colorClass = color ? `text-${color}` : '';

  return (
    <span className={`loading ${variantClass} ${sizeClass} ${colorClass} ${className}`} {...props}></span>
  );
};

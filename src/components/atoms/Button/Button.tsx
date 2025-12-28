import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  wide?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  wide = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) => {
  // Base DaisyUI class
  const baseClass = 'btn';
  
  // Dynamic classes based on props
  const variantClass = variant === 'outline' ? 'btn-outline' : `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const wideClass = wide ? 'btn-wide' : '';
  
  // Combine all classes
  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    wideClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classes} 
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {!loading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </button>
  );
};

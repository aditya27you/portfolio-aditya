import React, { AnchorHTMLAttributes } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
  hover?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Link = ({
  variant,
  hover = true,
  className = '',
  children,
  ...props
}: LinkProps) => {
  const variantClass = variant ? `link-${variant}` : '';
  const hoverClass = hover ? 'link-hover' : '';

  return (
    <a className={`link ${variantClass} ${hoverClass} ${className}`} {...props}>
      {children}
    </a>
  );
};

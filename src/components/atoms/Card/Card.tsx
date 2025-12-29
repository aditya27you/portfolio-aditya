import React, { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'base' | 'bordered' | 'compact' | 'side' | 'image-full';
  className?: string;
  children: React.ReactNode;
}

export const Card = ({
  variant = 'base',
  className = '',
  children,
  ...props
}: CardProps) => {
  const variantClass = variant === 'base' ? '' : `card-${variant}`;

  return (
    <div className={`card bg-base-100 shadow-xl ${variantClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardBody = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`card-body ${className}`} {...props}>{children}</div>
);

export const CardTitle = ({ className = '', children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={`card-title ${className}`} {...props}>{children}</h2>
);

export const CardActions = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`card-actions justify-end ${className}`} {...props}>{children}</div>
);

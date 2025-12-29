import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonOrAnchorProps = ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export interface ButtonProps extends Partial<ButtonOrAnchorProps> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  wide?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
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
  href,
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

  const content = (
    <>
      {loading && <span className="loading loading-spinner"></span>}
      {!loading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button 
      className={classes} 
      disabled={disabled || loading}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

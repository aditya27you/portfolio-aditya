import React, { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  className?: string;
}

export const Input = ({
  variant = 'bordered',
  size = 'md',
  label,
  error,
  leftIcon,
  className = '',
  ...props
}: InputProps) => {
  const variantClass = `input-${variant}`;
  const sizeClass = `input-${size}`;
  const errorClass = error ? 'input-error' : '';

  return (
    <div className="form-control w-full max-w-xs">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
            {leftIcon}
          </div>
        )}
        <input
          className={`input ${variantClass} ${sizeClass} ${errorClass} w-full ${leftIcon ? 'pl-10' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

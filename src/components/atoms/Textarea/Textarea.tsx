import type { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
  className?: string;
}

export const Textarea = ({
  variant = 'bordered',
  size = 'md',
  label,
  error,
  className = '',
  ...props
}: TextareaProps) => {
  const variantClass = `textarea-${variant}`;
  const sizeClass = `textarea-${size}`;
  const errorClass = error ? 'textarea-error' : '';

  return (
    <div className="form-control w-full max-w-xs">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <textarea
        className={`textarea ${variantClass} ${sizeClass} ${errorClass} h-24 w-full ${className}`}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

import { forwardRef, type TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  variant = 'bordered',
  size = 'md',
  label,
  error,
  className = '',
  ...props
}, ref) => {
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
        ref={ref}
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
});

Textarea.displayName = 'Textarea';

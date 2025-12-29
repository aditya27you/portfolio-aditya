import React from 'react';
import { Label } from '@/components/atoms/Label';

export interface FormFieldProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField = ({ label, error, children, className = '' }: FormFieldProps) => {
  return (
    <div className={`form-control w-full max-w-xs ${className}`}>
      {label && <Label text={label} />}
      {children}
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

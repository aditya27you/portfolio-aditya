import React, { InputHTMLAttributes } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export const Switch = ({
  variant = 'primary',
  size = 'md',
  label,
  className = '',
  ...props
}: SwitchProps) => {
  const variantClass = `toggle-${variant}`;
  const sizeClass = `toggle-${size}`;

  return (
    <div className="form-control w-fit">
      <label className="label cursor-pointer gap-2">
        {label && <span className="label-text">{label}</span>}
        <input 
          type="checkbox" 
          className={`toggle ${variantClass} ${sizeClass} ${className}`} 
          {...props} 
        />
      </label>
    </div>
  );
};

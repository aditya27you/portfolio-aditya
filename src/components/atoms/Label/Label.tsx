import React, { LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  altText?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Label = ({ text, altText, className = '', children, ...props }: LabelProps) => {
  return (
    <label className={`label ${className}`} {...props}>
      {text && <span className="label-text">{text}</span>}
      {children}
      {altText && <span className="label-text-alt">{altText}</span>}
    </label>
  );
};

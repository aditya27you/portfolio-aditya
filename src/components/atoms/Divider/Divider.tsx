import type { HTMLAttributes } from 'react';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
  className?: string;
  children?: React.ReactNode;
}

export const Divider = ({
  vertical = false,
  color,
  className = '',
  children,
  ...props
}: DividerProps) => {
  const directionClass = vertical ? 'divider-horizontal' : 'divider-vertical';
  const colorClass = color ? `divider-${color}` : '';

  return (
    <div className={`divider ${directionClass} ${colorClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

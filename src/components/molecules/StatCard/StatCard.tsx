import React from 'react';
import { Icon } from '@/components/atoms/Icon';

export interface StatCardProps {
  label: string;
  value: string | number;
  description?: string;
  iconName?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'neutral';
  className?: string;
}

export const StatCard = ({
  label,
  value,
  description,
  iconName,
  color = 'primary',
  className = '',
}: StatCardProps) => {
  const textClass = `text-${color}`;

  return (
    <div className={`stats shadow w-full ${className}`}>
      <div className="stat">
        {iconName && (
          <div className={`stat-figure ${textClass}`}>
            <Icon name={iconName} size={32} />
          </div>
        )}
        <div className="stat-title">{label}</div>
        <div className={`stat-value ${textClass}`}>{value}</div>
        {description && <div className="stat-desc">{description}</div>}
      </div>
    </div>
  );
};

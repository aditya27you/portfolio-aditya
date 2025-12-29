import React from 'react';
import { Button, ButtonProps } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

// Omit variant and class from ButtonProps as we'll set them internally
export interface CTAButtonProps extends Omit<ButtonProps, 'variant' | 'className'> {
  iconName?: string;
  children: React.ReactNode;
}

export const CTAButton = ({ iconName, children, ...props }: CTAButtonProps) => {
  return (
    <Button
      variant="primary" // Enforce primary variant for CTA
      className="molecule-cta-gradient" // Apply gradient styling
      leftIcon={iconName ? <Icon name={iconName} size="1em" /> : undefined}
      {...props}
    >
      {children}
    </Button>
  );
};

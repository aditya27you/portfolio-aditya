import { Button, type ButtonProps } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import React from 'react';


export interface CTAButtonProps extends Omit<ButtonProps, 'className'> {
  iconName?: string;
  children: React.ReactNode;
  href?: string;
}

export const CTAButton = ({ iconName, children, href, ...props }: CTAButtonProps) => {
  const isOutline = props.variant === 'outline';
  return (
    <Button
      className={isOutline ? '' : 'molecule-cta-gradient'} // Apply gradient only if not outline
      leftIcon={iconName ? <Icon name={iconName} size="1em" /> : undefined}
      href={href}
      {...props}
    >
      {children}
    </Button>
  );
};

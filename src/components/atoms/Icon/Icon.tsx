import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';

// Combine all icons into one object for dynamic lookup
const Icons = { ...FaIcons, ...SiIcons, ...MdIcons, ...VscIcons };

export interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon = ({ name, size = '1em', color, className = '' }: IconProps) => {
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <span className={`atom-icon ${className}`} style={{ fontSize: size, color }}>
      <IconComponent />
    </span>
  );
};

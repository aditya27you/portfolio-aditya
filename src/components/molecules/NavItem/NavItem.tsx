
export interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavItem = ({ label, href, active, onClick, className = '' }: NavItemProps) => {
  return (
    <li>
      <a 
        href={href} 
        onClick={onClick}
        className={`${active ? 'active font-bold text-primary' : ''} ${className}`}
      >
        {label}
      </a>
    </li>
  );
};

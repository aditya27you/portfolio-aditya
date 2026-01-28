import { forwardRef, type InputHTMLAttributes } from 'react';
import { Icon } from '@/components/atoms/Icon';
import { Input } from '@/components/atoms/Input';

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({
  onSearch,
  placeholder = 'Search...',
  className = '',
  ...props
}, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
    props.onChange?.(e);
  };

  return (
    <div className={`relative ${className}`}>
      <Input
        ref={ref}
        type="text"
        placeholder={placeholder}
        leftIcon={<Icon name="FaSearch" size={18} />}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

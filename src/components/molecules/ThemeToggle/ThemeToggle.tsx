import React, { useEffect, useState } from 'react';
import { Icon } from '@/components/atoms/Icon';

export interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const [theme, setTheme] = useState('light');

  // Sync with system or localStorage on mount
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'light';
    setTheme(localTheme);
    document.documentElement.setAttribute('data-theme', localTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <label className={`swap swap-rotate ${className}`}>
      {/* this hidden checkbox controls the state */}
      <input 
        type="checkbox" 
        onChange={toggleTheme} 
        checked={theme === 'dark'}
      />
      
      {/* sun icon */}
      <Icon name="FaSun" className="swap-on fill-current w-6 h-6" />
      
      {/* moon icon */}
      <Icon name="FaMoon" className="swap-off fill-current w-6 h-6" />
    </label>
  );
};

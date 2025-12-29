import { useState, useEffect } from 'react';
import { NavItem } from '@/components/molecules/NavItem';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon'; // Keep this import
// GSAP imports will be added when actual scrolling behavior is implemented
// import { gsap } from 'gsap';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simplified scroll handling for now, will integrate GSAP later
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActive = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // Offset for fixed navbar
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    // This will be replaced by GSAP smooth scroll
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-md">
      <div className="navbar-start">
        <Typography variant="h3" className="text-xl font-bold p-2 cursor-pointer">
          AS.
        </Typography>
      </div>
      
      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              active={activeSection === item.id}
              onClick={() => handleNavClick(item.href, item.id)}
            />
          ))}
        </ul>
      </div>
      
      {/* Mobile Navigation */}
      <div className="navbar-end gap-2">
        <ThemeToggle />
        <div className="lg:hidden">
          <Button variant="ghost" className="btn-circle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Icon name={isMenuOpen ? 'FaTimes' : 'FaBars'} size="1.5em" />
          </Button>
          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0 absolute">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  {...item}
                  active={activeSection === item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                />
              ))}
            </ul>
          )}
        </div>
        <Button variant="primary" className="hidden md:flex">
          Download Resume
        </Button>
      </div>
    </nav>
  );
};
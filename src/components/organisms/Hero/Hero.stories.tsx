import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Organisms/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    name: 'Arjun Sharma',
    roles: ['Full-Stack Developer', 'Competitive Programmer', 'Problem Solver'],
    tagline: '3rd Year CS Undergrad | MERN Stack Developer | Passionate about building scalable products.',
    primaryCtaText: 'View Projects',
    secondaryCtaText: 'Download Resume',
    socialLinks: [
      { platform: 'GitHub', url: '#', iconName: 'FaGithub' },
      { platform: 'LinkedIn', url: '#', iconName: 'FaLinkedin' },
      { platform: 'Twitter', url: '#', iconName: 'FaTwitter' },
      { platform: 'LeetCode', url: '#', iconName: 'FaCode' },
    ],
  },
};

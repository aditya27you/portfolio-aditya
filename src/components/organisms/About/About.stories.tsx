import type { Meta, StoryObj } from '@storybook/react';
import { About } from './About';

const meta: Meta<typeof About> = {
  title: 'Organisms/About',
  component: About,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {
  args: {
    name: 'Arjun Sharma',
    title: 'Full-Stack Developer',
    bio: [
      "I am a passionate 3rd-year Computer Science undergraduate specializing in full-stack web development and competitive programming.",
      "My journey in tech began with Java, but I soon fell in love with the dynamic React ecosystem. I thrive on building scalable and user-friendly applications that solve real-world problems.",
      "Beyond coding, I am an avid learner, always exploring new technologies and contributing to open-source projects. My goal is to leverage technology to create impactful solutions and drive innovation."
    ],
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    techStack: ['React', 'Node.js', 'Python', 'MongoDB', 'Express', 'Java', 'TypeScript', 'TailwindCSS'],
    stats: {
      projects: 15,
      technologies: 7,
      achievements: 3,
      problemsSolved: 500,
    },
    socialLinks: [
      { platform: 'GitHub', url: '#', iconName: 'FaGithub' },
      { platform: 'LinkedIn', url: '#', iconName: 'FaLinkedin' },
      { platform: 'Twitter', url: '#', iconName: 'FaTwitter' },
    ],
  },
};

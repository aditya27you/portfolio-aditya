import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Organisms/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

const sampleProject = {
  title: 'E-Commerce Platform',
  description: 'Full-stack shopping site with cart, payments, and admin panel.',
  image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  liveUrl: 'https://example.com/live',
  githubUrl: 'https://github.com/example/repo',
};

export const Default: Story = {
  args: {
    project: sampleProject,
    className: 'max-w-md',
  },
};

export const NoLiveDemo: Story = {
  args: {
    project: {
      ...sampleProject,
      liveUrl: undefined,
      title: 'DSA Problem Tracker',
      description: 'Track competitive programming progress with detailed stats.',
      technologies: ['React', 'Chart.js', 'LocalStorage'],
    },
    className: 'max-w-md',
  },
};

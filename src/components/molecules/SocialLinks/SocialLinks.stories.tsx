import type { Meta, StoryObj } from '@storybook/react';
import { SocialLinks } from './SocialLinks';

const meta: Meta<typeof SocialLinks> = {
  title: 'Molecules/SocialLinks',
  component: SocialLinks,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialLinks>;

const sampleLinks = [
  { platform: 'GitHub', url: 'https://github.com', iconName: 'FaGithub' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', iconName: 'FaLinkedin' },
  { platform: 'Twitter', url: 'https://twitter.com', iconName: 'FaTwitter' },
];

export const Default: Story = {
  args: {
    links: sampleLinks,
  },
};

export const Large: Story = {
  args: {
    links: sampleLinks,
    size: 'lg',
  },
};

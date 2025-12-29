import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const sampleSocialLinks = [
  { platform: 'GitHub', url: '#', iconName: 'FaGithub' },
  { platform: 'LinkedIn', url: '#', iconName: 'FaLinkedin' },
  { platform: 'Twitter', url: '#', iconName: 'FaTwitter' },
];

export const Default: Story = {
  args: {
    socialLinks: sampleSocialLinks,
    copyrightText: `Copyright © ${new Date().getFullYear()} - All right reserved by Arjun Sharma`,
  },
};

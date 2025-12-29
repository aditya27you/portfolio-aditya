import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'FaReact',
    size: 40,
    color: '#61DAFB',
  },
};

export const Socials: Story = {
  render: () => (
    <div className="flex gap-4 text-2xl">
      <Icon name="FaGithub" />
      <Icon name="FaLinkedin" color="#0077b5" />
      <Icon name="FaTwitter" color="#1DA1F2" />
    </div>
  ),
};

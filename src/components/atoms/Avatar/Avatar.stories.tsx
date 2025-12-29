import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar size="xs" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar size="sm" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar size="md" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar shape="circle" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar shape="square" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar shape="squircle" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar shape="hexagon" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  ),
};

export const Placeholder: Story = {
  args: {
    placeholder: 'A',
    className: 'bg-neutral text-neutral-content',
  },
};

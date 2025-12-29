import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'I am a simple link',
    href: '#',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#" variant="primary">Primary Link</Link>
      <Link href="#" variant="secondary">Secondary Link</Link>
      <Link href="#" variant="accent">Accent Link</Link>
      <Link href="#" variant="neutral">Neutral Link</Link>
    </div>
  ),
};

export const NoHover: Story = {
  args: {
    children: 'No hover effect',
    href: '#',
    hover: false,
  },
};

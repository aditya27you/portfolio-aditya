import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'lg',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Spinner variant="spinner" size="lg" />
      <Spinner variant="dots" size="lg" />
      <Spinner variant="ring" size="lg" />
      <Spinner variant="ball" size="lg" />
      <Spinner variant="bars" size="lg" />
      <Spinner variant="infinity" size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Spinner variant="spinner" size="lg" color="primary" />
      <Spinner variant="spinner" size="lg" color="secondary" />
      <Spinner variant="spinner" size="lg" color="accent" />
      <Spinner variant="spinner" size="lg" color="success" />
      <Spinner variant="spinner" size="lg" color="warning" />
      <Spinner variant="spinner" size="lg" color="error" />
    </div>
  ),
};

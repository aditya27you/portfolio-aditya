import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 40,
    max: 100,
    className: 'w-56',
  },
};

export const Indeterminate: Story = {
  args: {
    className: 'w-56',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-56">
      <Progress value={10} max={100} variant="primary" />
      <Progress value={40} max={100} variant="secondary" />
      <Progress value={70} max={100} variant="accent" />
      <Progress value={100} max={100} variant="success" />
    </div>
  ),
};

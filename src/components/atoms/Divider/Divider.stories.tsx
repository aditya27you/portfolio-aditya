import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      <Divider />
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      <Divider>OR</Divider>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="flex w-full">
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
      <Divider vertical />
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
    </div>
  ),
};

export const Colored: Story = {
  render: () => (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      <Divider color="primary">Primary</Divider>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
  ),
};

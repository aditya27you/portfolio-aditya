import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Bio',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Biography',
    placeholder: 'Tell us about yourself',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    error: 'Message is too short',
    variant: 'error',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Textarea size="xs" placeholder="Extra Small" />
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
    </div>
  ),
};

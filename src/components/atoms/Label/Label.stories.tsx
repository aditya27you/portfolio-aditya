import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'What is your name?',
  },
};

export const WithAltText: Story = {
  args: {
    text: 'Password',
    altText: 'Forgot password?',
  },
};

export const CustomChildren: Story = {
  args: {
    children: <span className="label-text text-primary font-bold">Custom Label Content</span>,
  },
};

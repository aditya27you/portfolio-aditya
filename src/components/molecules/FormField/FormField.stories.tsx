import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from '@/components/atoms/Input';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <FormField label="Username">
      <Input placeholder="Enter username" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField label="Email" error="Invalid email address">
      <Input placeholder="email@example.com" variant="error" />
    </FormField>
  ),
};

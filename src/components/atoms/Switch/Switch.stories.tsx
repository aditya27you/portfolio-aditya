import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Enable Notifications',
    defaultChecked: true,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Switch label="Primary" variant="primary" defaultChecked />
      <Switch label="Secondary" variant="secondary" defaultChecked />
      <Switch label="Accent" variant="accent" defaultChecked />
      <Switch label="Success" variant="success" defaultChecked />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Switch label="Extra Small" size="xs" defaultChecked />
      <Switch label="Small" size="sm" defaultChecked />
      <Switch label="Medium" size="md" defaultChecked />
      <Switch label="Large" size="lg" defaultChecked />
    </div>
  ),
};

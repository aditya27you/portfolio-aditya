import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Molecules/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  decorators: [(Story) => <ul className="menu menu-horizontal bg-base-200 rounded-box"><Story /></ul>],
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    label: 'Home',
    href: '#home',
  },
};

export const Active: Story = {
  args: {
    label: 'Projects',
    href: '#projects',
    active: true,
  },
};

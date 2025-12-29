import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Molecules/StatCard',
  component: StatCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    label: 'Total Projects',
    value: '31K',
    description: 'Jan 1st - Feb 1st',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Downloads',
    value: '31,000',
    iconName: 'FaDownload',
    color: 'secondary',
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard label="Followers" value="4,200" iconName="FaUsers" color="primary" />
      <StatCard label="Likes" value="1,200" iconName="FaHeart" color="secondary" />
      <StatCard label="Comments" value="300" iconName="FaComment" color="accent" />
    </div>
  ),
};
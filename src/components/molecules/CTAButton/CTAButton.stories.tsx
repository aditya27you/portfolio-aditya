import type { Meta, StoryObj } from '@storybook/react';
import { CTAButton } from './CTAButton';

const meta: Meta<typeof CTAButton> = {
  title: 'Molecules/CTAButton',
  component: CTAButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CTAButton>;

export const Default: Story = {
  args: {
    children: 'Get Started',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Download Now',
    iconName: 'FaDownload',
  },
};

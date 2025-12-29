import type { Meta, StoryObj } from '@storybook/react';
import { CertificationBadge } from './CertificationBadge';

const meta: Meta<typeof CertificationBadge> = {
  title: 'Molecules/CertificationBadge',
  component: CertificationBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CertificationBadge>;

export const Default: Story = {
  args: {
    title: 'Google Cloud Associate Engineer',
    issuer: 'Google Cloud',
    date: 'May 2024',
    iconName: 'FaCloud',
    verifyUrl: 'https://google.com',
  },
};

export const AWSCert: Story = {
  args: {
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    iconName: 'FaAws',
  },
};

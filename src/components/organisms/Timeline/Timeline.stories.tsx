import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Organisms/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const sampleEntries = [
  {
    date: 'June 2024 - August 2024',
    title: 'Full-Stack Development Intern',
    subtitle: 'TechStartup Innovations Pvt. Ltd.',
    description: [
      'Built RESTful APIs serving 10,000+ requests/day.',
      'Optimized React components reducing load time by 40%.'
    ],
    iconName: 'FaBriefcase',
  },
  {
    date: 'May 2024',
    title: 'Google Cloud Certified',
    subtitle: 'Associate Cloud Engineer',
    description: 'Demonstrated proficiency in deploying and operating applications on Google Cloud Platform.',
    iconName: 'FaCloud',
    link: { href: '#', text: 'Verify Credential' },
  },
  {
    date: 'March 2024',
    title: 'Smart India Hackathon Winner',
    subtitle: '1st Place - Software Edition',
    description: 'Developed an AI-powered agriculture advisory system.',
    iconName: 'FaTrophy',
  },
  {
    date: '2022 - Present',
    title: 'B.Tech Computer Science',
    subtitle: 'Indian Institute of Technology (Example)',
    description: 'Currently maintaining a CGPA of 8.5/10, focusing on DSA and Web Development.',
    iconName: 'FaGraduationCap',
  },
];

export const Default: Story = {
  args: {
    entries: sampleEntries,
  },
};

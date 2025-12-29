import type { Meta, StoryObj } from '@storybook/react';
import { SkillCard } from './SkillCard';

const meta: Meta<typeof SkillCard> = {
  title: 'Molecules/SkillCard',
  component: SkillCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkillCard>;

export const React: Story = {
  args: {
    name: 'React',
    iconName: 'FaReact',
    proficiency: 'Advanced',
  },
};

export const NodeJs: Story = {
  args: {
    name: 'Node.js',
    iconName: 'FaNodeJs',
    proficiency: 'Intermediate',
  },
};

export const Python: Story = {
  args: {
    name: 'Python',
    iconName: 'FaPython',
    proficiency: 'Beginner',
  },
};

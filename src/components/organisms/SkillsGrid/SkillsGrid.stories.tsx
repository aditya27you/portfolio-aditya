import type { Meta, StoryObj } from '@storybook/react';
import { SkillsGrid } from './SkillsGrid';

const meta: Meta<typeof SkillsGrid> = {
  title: 'Organisms/SkillsGrid',
  component: SkillsGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SkillsGrid>;

const sampleSkills = [
  { name: 'React', iconName: 'FaReact', proficiency: 'Advanced', category: 'Frontend' },
  { name: 'TypeScript', iconName: 'FaJs', proficiency: 'Advanced', category: 'Frontend' }, // Using FaJs as generic for TS
  { name: 'TailwindCSS', iconName: 'SiTailwindcss', proficiency: 'Advanced', category: 'Frontend' },
  { name: 'Node.js', iconName: 'FaNodeJs', proficiency: 'Advanced', category: 'Backend' },
  { name: 'Express.js', iconName: 'SiExpress', proficiency: 'Advanced', category: 'Backend' },
  { name: 'MongoDB', iconName: 'SiMongodb', proficiency: 'Intermediate', category: 'Backend' },
  { name: 'Python', iconName: 'FaPython', proficiency: 'Intermediate', category: 'Languages' },
  { name: 'Java', iconName: 'FaJava', proficiency: 'Intermediate', category: 'Languages' },
  { name: 'Git', iconName: 'FaGitAlt', proficiency: 'Advanced', category: 'Tools' },
  { name: 'Docker', iconName: 'FaDocker', proficiency: 'Beginner', category: 'Tools' },
];

export const Default: Story = {
  args: {
    skills: sampleSkills,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ProjectTag } from './ProjectTag';

const meta: Meta<typeof ProjectTag> = {
  title: 'Molecules/ProjectTag',
  component: ProjectTag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectTag>;

export const Default: Story = {
  args: {
    label: 'React',
  },
};

export const List: Story = {
  render: () => (
    <div className="flex gap-2">
      <ProjectTag label="React" />
      <ProjectTag label="TypeScript" />
      <ProjectTag label="Node.js" />
      <ProjectTag label="MongoDB" />
      <ProjectTag label="Python" />
      <ProjectTag label="Docker" />
    </div>
  ),
};

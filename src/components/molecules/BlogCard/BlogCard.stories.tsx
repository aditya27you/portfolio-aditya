import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'Molecules/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    post: {
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'Learn the best practices for designing and implementing RESTful APIs that can handle high traffic loads efficiently.',
      coverImage: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      category: 'Backend',
      readTime: '8 min read',
      date: 'Dec 28, 2025',
      slug: 'building-scalable-apis',
    },
    className: 'max-w-md',
  },
};

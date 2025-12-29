import type { Meta, StoryObj } from '@storybook/react';
import { HomeTemplate } from './HomeTemplate';
import { Navbar } from '@/components/organisms/Navbar';
import { Hero } from '@/components/organisms/Hero';
import { About } from '@/components/organisms/About';
import { SkillsGrid } from '@/components/organisms/SkillsGrid';
import { ProjectCard } from '@/components/organisms/ProjectCard';
import { Timeline } from '@/components/organisms/Timeline';
import { BlogSection } from '@/components/organisms/BlogSection';
import { ContactForm } from '@/components/organisms/ContactForm';
import { Footer } from '@/components/organisms/Footer';

const meta: Meta<typeof HomeTemplate> = {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HomeTemplate>;

// Mock data for organisms (should be replaced by actual data from src/data later)
const mockHeroProps = {
  name: 'Arjun Sharma',
  roles: ['Full-Stack Developer'],
  tagline: 'Building awesome web applications.',
  primaryCtaText: 'View Work',
  secondaryCtaText: 'Contact Me',
  socialLinks: [{ platform: 'GitHub', url: '#', iconName: 'FaGithub' }],
};

const mockAboutProps = {
  name: 'Arjun Sharma',
  title: 'Full-Stack Developer',
  bio: ['Short bio paragraph.'],
  image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
  techStack: ['React', 'Node.js'],
  stats: { projects: 10, technologies: 5, achievements: 2, problemsSolved: 100 },
  socialLinks: [{ platform: 'LinkedIn', url: '#', iconName: 'FaLinkedin' }],
};

const mockSkills = [
  { name: 'React', iconName: 'FaReact', proficiency: 'Advanced', category: 'Frontend' },
];

const mockProject = {
  title: 'Mock Project',
  description: 'A brief description.',
  image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
  technologies: ['React'],
  githubUrl: '#',
};

const mockTimelineEntry = {
  date: '2023',
  title: 'Event',
  subtitle: 'Description',
  description: 'Details of event.',
  iconName: 'FaCalendar',
};

const mockBlogPost = {
  title: 'Mock Post',
  excerpt: 'Excerpt.',
  coverImage: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
  category: 'Tech',
  readTime: '5 min',
  date: 'Jan 1, 2023',
  slug: 'mock-post',
};

export const Default: Story = {
  args: {
    navbar: <Navbar />,
    hero: <Hero {...mockHeroProps} />,
    about: <About {...mockAboutProps} />,
    skills: <SkillsGrid skills={mockSkills} />,
    projects: (
      <section className="py-16 px-8 bg-base-100" id="projects">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard project={mockProject} />
          </div>
        </div>
      </section>
    ),
    experience: <Timeline entries={[mockTimelineEntry]} />,
    blog: <BlogSection posts={[mockBlogPost]} />,
    contact: <ContactForm />,
    footer: <Footer socialLinks={mockHeroProps.socialLinks} copyrightText="Mock Copyright" />,
  },
};

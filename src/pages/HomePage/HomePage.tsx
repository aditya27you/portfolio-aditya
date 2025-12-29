import { HomeTemplate } from '@/components/templates/HomeTemplate';
import { Navbar } from '@/components/organisms/Navbar';
import { Hero } from '@/components/organisms/Hero';
import { About } from '@/components/organisms/About';
import { SkillsGrid } from '@/components/organisms/SkillsGrid';
import { ProjectCard } from '@/components/organisms/ProjectCard';
import { Timeline } from '@/components/organisms/Timeline';
import { BlogSection } from '@/components/organisms/BlogSection';
import { ContactForm } from '@/components/organisms/ContactForm';
import { Footer } from '@/components/organisms/Footer';
import { Interests } from '@/components/organisms/Interests';

// Data imports
import { socialLinksData } from '@/data/socialLinks';
import { heroData } from '@/data/heroData';
import { aboutData } from '@/data/aboutData';
import { skillsData } from '@/data/skillsData';
import { projectsData } from '@/data/projectsData';
import { timelineData } from '@/data/timelineData';
import { blogPostsData } from '@/data/blogPostsData';

export const HomePage = () => {
  return (
    <HomeTemplate
      navbar={<Navbar />}
      hero={<Hero {...heroData} socialLinks={socialLinksData} />}
      about={<About {...aboutData} socialLinks={socialLinksData} />}
      skills={<SkillsGrid skills={skillsData} />}
      projects={
        <section className="py-16 px-8 bg-base-100" id="projects">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-center text-4xl font-bold mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      }
      experience={<Timeline entries={timelineData} />}
      blog={<BlogSection posts={blogPostsData} />}
      interests={aboutData.interests ? <Interests interests={aboutData.interests} /> : null}
      contact={<ContactForm />}
      footer={<Footer socialLinks={socialLinksData} copyrightText={`Copyright © ${new Date().getFullYear()} - All right reserved by Aditya Shah`} />}
    />
  );
};
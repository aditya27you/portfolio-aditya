import { HomeTemplate } from '@/components/templates/HomeTemplate';
import { Navbar } from '@/components/organisms/Navbar';
import { Hero } from '@/components/organisms/Hero';
import { About } from '@/components/organisms/About';
import { SkillsGrid } from '@/components/organisms/SkillsGrid';
import { ProjectsSection } from '@/components/organisms/ProjectsSection';
import { Timeline } from '@/components/organisms/Timeline';
import { AchievementsShowcase } from '@/components/organisms/AchievementsShowcase';
import { BlogSection } from '@/components/organisms/BlogSection';
import { ContactForm } from '@/components/organisms/ContactForm';
import { Footer } from '@/components/organisms/Footer';
import { Interests } from '@/components/organisms/Interests';
import { AnimatedSection } from '@/components/atoms/AnimatedSection';

// Data imports
import { socialLinksData } from '@/data/socialLinks';
import { heroData } from '@/data/heroData';
import { aboutData } from '@/data/aboutData';
import { skillsData } from '@/data/skillsData';
import { projectsData } from '@/data/projectsData';
import { timelineData } from '@/data/timelineData';
import { certificationsData } from '@/data/certificationsData';
import { blogPostsData } from '@/data/blogPostsData';

export const HomePage = () => {
  return (
    <HomeTemplate
      navbar={<Navbar />}
      hero={<Hero {...heroData} socialLinks={socialLinksData} />}
      about={
        <AnimatedSection>
          <About {...aboutData} socialLinks={socialLinksData} />
        </AnimatedSection>
      }
      skills={
        <AnimatedSection>
          <SkillsGrid skills={skillsData} />
        </AnimatedSection>
      }
      projects={
        <AnimatedSection>
          <ProjectsSection projects={projectsData} />
        </AnimatedSection>
      }
      experience={
        <AnimatedSection>
          <Timeline entries={timelineData} />
        </AnimatedSection>
      }
      achievements={
        <AnimatedSection>
          <AchievementsShowcase certifications={certificationsData} />
        </AnimatedSection>
      }
      blog={
        <AnimatedSection>
          <BlogSection posts={blogPostsData} />
        </AnimatedSection>
      }
      interests={
        aboutData.interests ? (
          <AnimatedSection>
            <Interests interests={aboutData.interests} />
          </AnimatedSection>
        ) : null
      }
      contact={
        <AnimatedSection>
          <ContactForm />
        </AnimatedSection>
      }
      footer={<Footer socialLinks={socialLinksData} copyrightText={`Copyright © ${new Date().getFullYear()} - All right reserved by Aditya Shah`} />}
    />
  );
};

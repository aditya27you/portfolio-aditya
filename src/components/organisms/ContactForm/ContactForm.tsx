import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { FormField } from '@/components/molecules/FormField';
import { Input } from '@/components/atoms/Input';
import { Textarea } from '@/components/atoms/Textarea';
import { Button } from '@/components/atoms/Button';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import { Icon } from '@/components/atoms/Icon';

export interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className = '' }: ContactFormProps) => {
  const socialLinks = [
    { platform: 'GitHub', url: '#', iconName: 'FaGithub' },
    { platform: 'LinkedIn', url: '#', iconName: 'FaLinkedin' },
    { platform: 'Twitter', url: '#', iconName: 'FaTwitter' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration will go here in a later task
    console.log('Form submitted!');
  };

  return (
    <section id="contact" className={`py-16 px-8 bg-base-200 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-4">
          Get In Touch
        </Typography>
        <Typography variant="p" className="text-center text-base-content/70 max-w-2xl mx-auto mb-12">
          Have a project in mind? Let's build something amazing together!
        </Typography>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Name">
                  <Input type="text" placeholder="Your Name" />
                </FormField>
                <FormField label="Email">
                  <Input type="email" placeholder="your@email.com" />
                </FormField>
              </div>
              <div className="mt-4">
                <FormField label="Subject">
                  <Input type="text" placeholder="Project Inquiry, Collaboration, etc." />
                </FormField>
              </div>
              <div className="mt-4">
                <FormField label="Message">
                  <Textarea placeholder="Your message here..." rows={6} />
                </FormField>
              </div>
              <div className="mt-6">
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Typography variant="h3" className="mb-4">
              Let's Connect
            </Typography>
            <div className="flex items-center gap-4 mb-4">
              <Icon name="FaEnvelope" size={24} className="text-primary" />
              <Typography variant="p">arjun.sharma@example.com</Typography>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Icon name="FaPhone" size={24} className="text-primary" />
              <Typography variant="p">+91 98765 43210</Typography>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <Icon name="FaMapMarkerAlt" size={24} className="text-primary" />
              <Typography variant="p">Mumbai, Maharashtra, India</Typography>
            </div>
            <SocialLinks links={socialLinks} size="lg" className="lg:justify-start" />
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { Typography } from '@/components/atoms/Typography';
import { FormField } from '@/components/molecules/FormField';
import { Input } from '@/components/atoms/Input';
import { Textarea } from '@/components/atoms/Textarea';
import { Button } from '@/components/atoms/Button';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import { Icon } from '@/components/atoms/Icon';
import { contactData } from '@/data/contactData';
import { socialLinksData } from '@/data/socialLinks';

export interface ContactFormProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Must be a valid email'),
  subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
}).required();

export const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      // Note: These are public keys - in production, set up environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_demo';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_demo';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'demo_public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Aditya Shah',
        },
        publicKey
      );

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
            <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 shadow-xl p-8">
              {submitStatus === 'success' && (
                <div className="alert alert-success mb-4">
                  <Icon name="FaCheckCircle" size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-error mb-4">
                  <Icon name="FaExclamationCircle" size={20} />
                  <span>Failed to send message. Please try again or email me directly.</span>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Name" error={errors.name?.message}>
                  <Input 
                    type="text" 
                    placeholder="Your Name" 
                    {...register('name')}
                    className={errors.name ? 'input-error' : ''}
                  />
                </FormField>
                <FormField label="Email" error={errors.email?.message}>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    {...register('email')}
                    className={errors.email ? 'input-error' : ''}
                  />
                </FormField>
              </div>
              <div className="mt-4">
                <FormField label="Subject" error={errors.subject?.message}>
                  <Input 
                    type="text" 
                    placeholder="Project Inquiry, Collaboration, etc." 
                    {...register('subject')}
                    className={errors.subject ? 'input-error' : ''}
                  />
                </FormField>
              </div>
              <div className="mt-4">
                <FormField label="Message" error={errors.message?.message}>
                  <Textarea 
                    placeholder="Your message here..." 
                    rows={6} 
                    {...register('message')}
                    className={errors.message ? 'textarea-error' : ''}
                  />
                </FormField>
              </div>
              <div className="mt-6">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
              <Typography variant="p">{contactData.email}</Typography>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Icon name="FaPhone" size={24} className="text-primary" />
              <Typography variant="p">{contactData.phone}</Typography>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <Icon name="FaMapMarkerAlt" size={24} className="text-primary" />
              <Typography variant="p">{contactData.location}</Typography>
            </div>
            <SocialLinks links={socialLinksData} size="lg" className="lg:justify-start" />
          </div>
        </div>
      </div>
    </section>
  );
};

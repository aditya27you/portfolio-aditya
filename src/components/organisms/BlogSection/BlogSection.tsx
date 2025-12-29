import React, { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { BlogCard, type BlogPost } from '@/components/molecules/BlogCard';
import { Modal } from '@/components/molecules/Modal';
import { Icon } from '@/components/atoms/Icon';

export interface BlogSectionProps {
  posts: BlogPost[];
  className?: string;
}

export const BlogSection = ({ posts, className = '' }: BlogSectionProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className={`py-16 px-8 bg-base-100 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-12">
          Latest Insights
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} onReadMore={handleReadMore} />
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedPost} 
        onClose={handleCloseModal} 
        title={selectedPost?.title || ''}
      >
        {selectedPost && (
          <div className="space-y-4">
            <img 
              src={selectedPost.coverImage} 
              alt={selectedPost.title} 
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <div className="flex items-center gap-4 text-sm text-base-content/70 mb-4">
               <span className="flex items-center gap-1"><Icon name="FaCalendar" /> {selectedPost.date}</span>
               <span className="flex items-center gap-1"><Icon name="FaClock" /> {selectedPost.readTime}</span>
               <span className="badge badge-secondary badge-outline">{selectedPost.category}</span>
            </div>
            
            {/* Render HTML content safely since it's from our own data file */}
            <div 
              className="prose prose-lg max-w-none text-base-content"
              dangerouslySetInnerHTML={{ __html: selectedPost.content || '' }} 
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

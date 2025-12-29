import React, { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Input } from '@/components/atoms/Input';
import { Badge } from '@/components/atoms/Badge';
import { BlogCard, BlogPost } from '@/components/molecules/BlogCard';

export interface BlogSectionProps {
  posts: BlogPost[];
  className?: string;
}

export const BlogSection = ({ posts, className = '' }: BlogSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className={`py-16 px-8 bg-base-100 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-12">
          Latest Articles
        </Typography>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-auto flex-grow"
          />
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map(category => (
              <Badge
                key={category}
                variant={activeCategory === category ? 'primary' : 'outline'}
                className="cursor-pointer"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <Typography variant="p" className="text-center text-base-content/70 mt-8">
            No articles found matching your criteria.
          </Typography>
        )}
      </div>
    </section>
  );
};

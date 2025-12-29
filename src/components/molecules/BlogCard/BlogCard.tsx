import React from 'react';
import { Card, CardBody, CardTitle, CardActions } from '@/components/atoms/Card';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export interface BlogPost {
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard = ({ post, className = '' }: BlogCardProps) => {
  return (
    <Card className={`w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}>
      <figure className="relative h-48 overflow-hidden">
        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        <Badge variant="secondary" className="absolute top-4 right-4">
          {post.category}
        </Badge>
      </figure>
      <CardBody>
        <div className="flex items-center gap-2 text-sm text-base-content/70 mb-2">
          <Icon name="FaCalendar" /> <span>{post.date}</span>
          <span>•</span>
          <Icon name="FaClock" /> <span>{post.readTime}</span>
        </div>
        <CardTitle className="hover:text-primary transition-colors cursor-pointer">
          {post.title}
        </CardTitle>
        <p className="text-base-content/80 line-clamp-3">
          {post.excerpt}
        </p>
        <CardActions className="mt-4">
          <Button variant="link" className="px-0 no-underline hover:underline group">
            Read Article 
            <Icon name="FaArrowRight" className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  );
};

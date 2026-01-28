import { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { BlogCard, type BlogPost } from '@/components/molecules/BlogCard';
import { Modal } from '@/components/molecules/Modal';
import { SearchBar } from '@/components/molecules/SearchBar';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export interface BlogSectionProps {
  posts: BlogPost[];
  className?: string;
}

export const BlogSection = ({ posts, className = '' }: BlogSectionProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories from posts
  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];

  // Filter posts by category and search query
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className={`py-16 px-8 bg-base-100 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <Typography variant="h2" className="text-center mb-4">
          Latest Insights
        </Typography>
        <Typography variant="p" className="text-center text-base-content/70 mb-8">
          Explore articles on web development, data science, and tech trends
        </Typography>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <SearchBar
              placeholder="Search articles..."
              onSearch={setSearchQuery}
              className="w-full"
            />
          </div>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter articles by category">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                aria-label={`Filter articles by ${category}`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} onReadMore={handleReadMore} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon name="FaSearch" size={48} className="mx-auto text-base-content/30 mb-4" />
            <Typography variant="h3" className="text-base-content/70 mb-2">
              No articles found
            </Typography>
            <Typography variant="p" className="text-base-content/50">
              Try adjusting your search or filter criteria
            </Typography>
          </div>
        )}
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

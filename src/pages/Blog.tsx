import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';

const Blog = () => {
  useSEO(
    'Healthcare Credentialing Blog | Credifide Insights',
    'Read expert articles on provider enrollment, medical billing, RCM optimization, and healthcare credentialing trends from the Credifide team.',
    '/resources/blog',
    undefined,
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'The Credifide Journal',
      'description': 'Strategic intelligence for modern healthcare leaders and practice owners.',
      'url': 'https://credifide.com/resources/blog',
      'publisher': {
        '@type': 'Organization',
        'name': 'Credifide',
        'logo': 'https://credifide.com/logo.png'
      }
    }
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Credentialing', 'Case Study', 'RCM', 'Strategy', 'Billing'];

  const filteredPosts = blogPosts.filter(post =>
    (activeCategory === 'All' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="pt-12 pb-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-brand-deep/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brand-light bg-brand-light/30 text-brand-deep text-sm font-black uppercase tracking-[0.2em] mb-10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-deep animate-pulse shadow-[0_0_8px_rgba(11,107,87,0.4)]" />
            The Credifide Journal
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 mb-6 tracking-tighter leading-tight">
            Enterprise RCM Insights
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Strategic intelligence for modern healthcare leaders and practice owners.
          </p>
        </motion.div>

        {/* Search & Filter */}
        {blogPosts.length > 0 && (
          <div className="mb-12 space-y-6">
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-white shadow-xl shadow-slate-200/50 pr-14 font-medium"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={20} />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-xl text-xs font-bold tracking-tight transition-all ${
                    activeCategory === cat
                    ? 'bg-brand-deep text-white shadow-lg shadow-brand-deep/20'
                    : 'bg-white text-slate-500 border border-slate-100 hover:border-brand-deep hover:text-brand-deep'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl text-slate-500 font-medium">
              {blogPosts.length === 0 
                ? "New Insights & Intelligence Coming Soon." 
                : "No articles found matching your criteria."}
            </p>
          </div>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <Link
              to={`/resources/blog/${featuredPost.slug}`}
              className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-100 shadow-2xl shadow-brand-deep/5 hover:border-brand-accent/30 hover:shadow-brand-deep/10 transition-all duration-700 bg-white"
            >
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 bg-brand-deep text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                  {featuredPost.date}
                </p>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-5 group-hover:text-brand-deep transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center gap-2 text-brand-deep font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Article
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Blog Grid */}
        {gridPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/resources/blog/${post.slug}`}
                  className="saas-card h-full group flex flex-col bg-white border-brand-light/30 shadow-2xl shadow-brand-deep/5 hover:border-brand-accent transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden relative rounded-t-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-deep text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{post.date}</p>
                      <span className="flex items-center gap-1 text-slate-400 text-[10px] font-medium">
                        <Clock size={10} />{post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-deep transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed font-medium">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-brand-deep font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      Read Article
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;


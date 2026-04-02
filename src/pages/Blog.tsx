import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ASSETS, IconRenderer } from '../constants';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Credentialing', 'Billing', 'Compliance', 'Practice Growth'];

  const posts = [
    {
      id: 1,
      title: 'Top 5 Payer Enrollment Challenges in 2024',
      excerpt: 'Avoid the common pitfalls that cause delays in credentialing and revenue leakage for new practices.',
      category: 'Credentialing',
      date: 'May 15, 2024',
      image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Maximizing RCM Efficiency with AI Tools',
      excerpt: 'Discover how modern healthcare providers are leveraging automation to speed up their billing cycles.',
      category: 'Billing',
      date: 'May 10, 2024',
      image: 'https://images.unsplash.com/photo-1504868584819-f8eec74/61690?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Navigating Medicare Compliance Changes',
      excerpt: 'Your guide to the latest regulatory updates and what they mean for your reimbursement rates.',
      category: 'Compliance',
      date: 'May 5, 2024',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'The Future of Telehealth Reimbursement',
      excerpt: 'How to ensure your virtual care services are coded and billed correctly for maximum revenue.',
      category: 'Practice Growth',
      date: 'Apr 28, 2024',
      image: 'https://images.unsplash.com/photo-1576091160550-2173599/21ad?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  const filteredPosts = posts.filter(post => 
    (activeCategory === 'All' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-12 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Credifide Blog</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Insights, updates, and expert advice for healthcare professionals.</p>
        </motion.div>

        {/* Search & Filter */}
        <div className="mb-12 space-y-6">
           <div className="max-w-2xl mx-auto relative">
              <input
                 type="text"
                 placeholder="Search articles..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-white shadow-lg shadow-slate-200/50 pr-12"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                 <IconRenderer icon={ASSETS.ui.search} size={24} />
              </div>
           </div>

           <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                 <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                       activeCategory === cat 
                       ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30' 
                       : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-500 hover:text-brand-500'
                    }`}
                 >
                    {cat}
                 </button>
              ))}
           </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
           {filteredPosts.map((post, i) => (
              <motion.div
                 key={post.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="saas-card h-full group flex flex-col bg-white border-slate-100"
              >
                 <div className="aspect-[16/9] overflow-hidden relative">
                    <img 
                       src={post.image} 
                       alt={post.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                       <span className="px-4 py-1.5 bg-brand-deep/90 text-white text-xs font-bold rounded-lg backdrop-blur-sm">
                          {post.category}
                       </span>
                    </div>
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                       <div className="flex items-center gap-1.5">
                          <IconRenderer icon={ASSETS.features.clock} size={14} />
                          {post.date}
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-500 transition-colors leading-tight">{post.title}</h3>
                    <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-brand-500 font-bold group-hover:gap-4 transition-all">
                       Read Full Article
                       <IconRenderer icon={ASSETS.nav.arrowRight} size={18} />
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>

        {filteredPosts.length === 0 && (
           <div className="text-center py-24">
              <p className="text-xl text-slate-500">No articles found matching your criteria.</p>
           </div>
        )}

        {/* Pagination Placeholder */}
        <div className="mt-20 flex justify-center gap-4">
           <button className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 text-slate-400 hover:border-brand-500 hover:text-brand-500 transition-all">
              <IconRenderer icon={ASSETS.nav.chevronLeft} size={20} />
           </button>
           <button className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-500 text-white font-bold shadow-lg shadow-brand-500/25">1</button>
           <button className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 text-slate-600 font-medium hover:border-brand-500 hover:text-brand-500 transition-all">2</button>
           <button className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 text-slate-600 font-medium hover:border-brand-500 hover:text-brand-500 transition-all">3</button>
           <button className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 text-slate-600 font-medium hover:border-brand-500 hover:text-brand-500 transition-all">
              <IconRenderer icon={ASSETS.nav.chevronRight} size={20} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

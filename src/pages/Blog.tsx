import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Credentialing', 'Case Study', 'RCM', 'Strategy'];

  const posts = [
    {
      id: 1,
      title: 'The Real Cost of a Credentialing Error: What One Missed Document Does to Your RCM',
      excerpt: 'One overlooked document can stop your revenue cycle in its tracks. Learn how to prevent these costly errors.',
      category: 'RCM',
      date: 'March 30, 2026',
      image: 'https://credifide.com/wp-content/uploads/2026/03/The-Real-Cost-of-a-Credentialing-Error-What-One-Missed-Document-Does-to-Your-RCM-1-1024x683.png',
      link: 'https://credifide.com/credentialing-errors-rcm-cost/'
    },
    {
      id: 2,
      title: 'How Credifide Helped a Physician Group Cut Enrollment Time from 90 Days to 30',
      excerpt: 'A deep dive into how our automated systems slash enrollment timelines by 66% for high-growth medical groups.',
      category: 'Case Study',
      date: 'March 25, 2026',
      image: 'https://credifide.com/wp-content/uploads/2026/03/stop-delay-1024x683.png',
      link: 'https://credifide.com/physician-enrollment-time-reduction-case-study/'
    },
    {
      id: 3,
      title: 'Why Provider Credentialing Delays Are Silently Draining Your Hospital’s Revenue',
      excerpt: 'Unidentified delays in payer enrollment cost hospitals millions every year. Discover the hidden drainage points.',
      category: 'Credentialing',
      date: 'March 19, 2026',
      image: 'https://credifide.com/wp-content/uploads/2026/03/Why-Provider-Credentialing-Delays-Are-Silently-Draining-Your-Hospitals-Revenue.png',
      link: 'https://credifide.com/provider-credentialing-delays-hospital-revenue/'
    },
    {
      id: 4,
      title: 'Insurance Credentialing: The Complete 2026 Guide for Healthcare Providers',
      excerpt: 'The ultimate roadmap to navigating the evolving landscape of payer enrollment and compliance in 2026.',
      category: 'Credentialing',
      date: 'March 13, 2026',
      image: 'https://credifide.com/wp-content/uploads/2025/03/Copy-of-Why-Most-Diets-Fail-The-Missing-Link-Between-Metabolism-Hormones-and-Sustainable-Fat-Loss-4-1024x683.png',
      link: 'https://credifide.com/insurance-credentialing-the-complete-2026-guide-for-healthcare-providers/'
    },
    {
      id: 5,
      title: 'How to Cut RCM Errors by 50%',
      excerpt: 'Proven strategies to reduce claim denials and improve clean claim rates through proactive management.',
      category: 'Strategy',
      date: 'March 6, 2026',
      image: 'https://credifide.com/wp-content/uploads/2025/03/Copy-of-Why-Most-Diets-Fail-The-Missing-Link-Between-Metabolism-Hormones-and-Sustainable-Fat-Loss-5-1024x683.png',
      link: 'https://credifide.com/how-to-cut-rcm-errors-by-50-revenue-cycle-management-strategies-to-reduce-claim-denials/'
    }
  ];

  const filteredPosts = posts.filter(post => 
    (activeCategory === 'All' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-12 pb-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-brand-deep rounded-full blur-[120px]" />
         <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-brand-accent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12 lg:mb-16"
        >
          {/* Refined Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-light bg-brand-light/20 text-brand-deep text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-deep animate-pulse" />
             The Credifide Journal
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Enterprise RCM Insights</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Strategic intelligence for modern healthcare leaders and practice owners.</p>
        </motion.div>

        {/* Search & Filter */}
        <div className="mb-12 space-y-6">
           <div className="max-w-2xl mx-auto relative">
              <input
                 type="text"
                 placeholder="Search articles..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-deep/5 focus:border-brand-deep transition-all bg-white shadow-xl shadow-slate-200/50 pr-12 font-medium"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
                 <IconRenderer icon={ASSETS.ui.search} size={20} />
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

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredPosts.map((post, i) => (
              <motion.a
                 key={post.id}
                 href={post.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="saas-card h-full group flex flex-col bg-white border-brand-light/30 shadow-2xl shadow-brand-deep/5 hover:border-brand-accent transition-all duration-500"
              >
                 <div className="aspect-[16/10] overflow-hidden relative">
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
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">{post.date}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-deep transition-colors leading-tight">{post.title}</h3>
                    <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed font-medium">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-brand-deep font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                       Read Full Story
                       <IconRenderer icon={ASSETS.nav.arrowRight} size={14} />
                    </div>
                 </div>
              </motion.a>
           ))}
        </div>

        {filteredPosts.length === 0 && (
           <div className="text-center py-24">
              <p className="text-xl text-slate-500 font-medium">No articles found matching your criteria.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

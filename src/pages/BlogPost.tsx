import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);

  // Suggested posts logic
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post?.category)
    .slice(0, 3);

  const otherPosts = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3 - relatedPosts.length);

  const suggestedPosts = [...relatedPosts, ...otherPosts].slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Post not found</h2>
        <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
        <Link to="/resources/blog" className="px-6 py-3 bg-brand-deep text-white font-bold rounded-xl">
          Back to Blog
        </Link>
      </div>
    );
  }

  useSEO(`${post.title} | Credifide Journal`, post.excerpt);

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <header className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-brand-deep/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Link 
            to="/resources/blog" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-deep font-bold text-sm mb-12 transition-all hover:-translate-x-1"
          >
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-brand-deep text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                {post.category}
              </span>
              <span className="text-slate-400 text-sm font-medium flex items-center gap-1.5">
                <Clock size={16} /> {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 py-8 border-y border-slate-100 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-deep font-bold text-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-none mb-1">{post.author}</p>
                  <p className="text-xs text-slate-400 font-medium">Author at Credifide</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                 <button className="p-2.5 rounded-full border border-slate-200 text-slate-400 hover:text-brand-deep hover:border-brand-deep transition-all">
                   <Share2 size={18} />
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 lg:-mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border border-white"
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
         <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-a:text-brand-deep prose-strong:text-slate-900">
           {post.content.split('\n\n').map((paragraph, idx) => (
             <p key={idx} className="text-slate-600 leading-relaxed font-medium mb-6">
               {paragraph}
             </p>
           ))}
         </div>
      </article>

      {/* Suggested Reading */}
      {suggestedPosts.length > 0 && (
        <section className="bg-slate-50 py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight">Suggested Reading</h2>
              <Link to="/resources/blog" className="text-brand-deep font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                View All Blog Posts <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {suggestedPosts.map((suggested, i) => (
                <motion.div
                  key={suggested.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/resources/blog/${suggested.slug}`}
                    className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-accent/30 transition-all flex flex-col h-full group"
                  >
                     <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                       <img 
                         src={suggested.image} 
                         alt={suggested.title}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">{suggested.date}</p>
                     <h3 className="text-xl font-bold text-slate-900 mb-4 flex-grow group-hover:text-brand-deep transition-colors">
                       {suggested.title}
                     </h3>
                     <div className="flex items-center gap-2 text-brand-deep font-black text-[10px] uppercase tracking-widest">
                       Read Post <ArrowRight size={12} />
                     </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ASSETS, IconRenderer } from '../constants';

const Resources = () => {
  const categories = [
    {
      title: 'Our Blog',
      desc: 'Expert insights on healthcare RCM, credentialing, and billing trends to help your practice grow.',
      link: '/resources/blog',
      icon: ASSETS.ui.fileText,
      gradient: 'saas-card-gradient-1'
    },
    {
      title: 'White Papers',
      desc: 'In-depth research and strategic guides for healthcare executives and practice managers.',
      link: '/resources/white-papers',
      icon: ASSETS.features.shield,
      gradient: 'saas-card-gradient-2'
    }
  ];

  return (
    <div className="pt-12 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 lg:mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight">
            Insights That Drive <br />
            <span className="text-brand-500">Healthcare Growth</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest industry knowledge, strategic guides, and practical tips from the experts at Credifide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
             <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                suppressHydrationWarning
             >
                <Link to={cat.link} className="block group">
                  <div className={`saas-card p-12 h-full flex flex-col items-center text-center relative overflow-hidden group-hover:-translate-y-4 transition-all duration-700 bg-white border-brand-100`}>
                     {/* Gradient Background */}
                     <div className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity ${cat.gradient}`} />
                     
                     <div className="relative z-10">
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-brand-500 mb-10 shadow-xl shadow-brand-500/10 group-hover:scale-110 transition-transform duration-500 mx-auto border border-brand-100">
                           <IconRenderer icon={cat.icon} size={36} />
                        </div>
                        <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">{cat.title}</h3>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">{cat.desc}</p>
                        <div className="flex items-center justify-center gap-3 text-brand-500 font-bold text-lg group-hover:gap-5 transition-all">
                           Explore Resources
                           <IconRenderer icon={ASSETS.nav.arrowRight} size={20} />
                        </div>
                     </div>
                  </div>
                </Link>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;

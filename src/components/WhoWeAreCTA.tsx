import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ASSETS, IconRenderer } from '../constants';

export const WhoWeAreCTA: React.FC = () => {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden mx-4 lg:mx-8 rounded-[40px] lg:rounded-[56px] mb-20">
      {/* High-Tech Background Stack */}
      <div className="absolute inset-0 bg-[#06332d] z-0" />
      
      {/* Animated Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] z-1" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Dynamic Digital Orbs - Scaled Down for Compactness */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/2 -left-1/4 w-[400px] h-[400px] bg-brand-400 rounded-full blur-[100px] z-2"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0],
          opacity: [0.05, 0.1, 0.05] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-1/2 -right-1/4 w-[350px] h-[350px] bg-white rounded-full blur-[80px] z-2"
      />

      {/* Content Container - Horizontal on Desktop */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-3xl"
        >
          {/* Compact Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-400/30 bg-brand-400/10 text-brand-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-[0_0_20px_rgba(163,189,106,0.15)]">
            <IconRenderer icon={ASSETS.features.shield} size={12} />
            Who We Are
          </div>

          {/* Scaled Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white leading-tight tracking-tight mb-5">
            Providers Deserved <span className="text-brand-400">Better.</span><br />
            We're Building It.
          </h2>

          {/* Subtext */}
          <p className="text-white/60 text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Discover the mission behind Credifide and why we're obsessed with human-centric healthcare technology.
          </p>
        </motion.div>

        {/* Button Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/about"
              className="group relative flex items-center gap-4 px-10 py-5 bg-white rounded-2xl text-brand-deep font-black text-lg shadow-xl hover:shadow-brand-400/20 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Discover Our Story</span>
              <div className="relative z-10 w-7 h-7 rounded-full bg-brand-deep/5 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-500">
                <IconRenderer icon={ASSETS.nav.arrowRight} size={18} />
              </div>
              <div className="absolute inset-0 bg-brand-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

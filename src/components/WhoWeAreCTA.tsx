import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ASSETS, IconRenderer } from '../constants';

export const WhoWeAreCTA: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden mx-4 lg:mx-8 rounded-[48px] lg:rounded-[64px] mb-[10vh]">
      {/* High-Tech Background Stack */}
      <div className="absolute inset-0 bg-[#06332d] z-0" />
      
      {/* Animated Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] z-1" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Dynamic Digital Orbs */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-400 rounded-full blur-[140px] z-2"
      />
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[120px] z-2"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-block px-5 py-1.5 rounded-full border border-brand-400/30 bg-brand-400/10 text-brand-400 text-xs font-black uppercase tracking-[0.3em] mb-10 shadow-[0_0_20px_rgba(163,189,106,0.15)]">
            Who We Are
          </div>

          {/* Heading */}
          <h2 className="text-[2.2rem] sm:text-5xl lg:text-8xl font-display font-bold text-white leading-[1.05] tracking-tight mb-8">
            Providers Deserved <span className="text-brand-400 italic">Better.</span><br />
            We're Building It.
          </h2>

          {/* Subtext */}
          <p className="text-white/60 text-lg lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
            Discover the vision behind Credifide and why we're obsessed with human-centric healthcare technology.
          </p>

          {/* High-Tech Magnetic Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              to="/about"
              className="group relative flex items-center gap-4 px-12 py-6 bg-white rounded-2xl text-brand-deep font-black text-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-brand-400/20 transition-all duration-500 overflow-hidden"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-brand-400/0 group-hover:bg-brand-400/5 transition-colors duration-500" />
              
              <span className="relative z-10">Discover Our Story</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-brand-deep/5 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-500">
                <IconRenderer icon={ASSETS.nav.arrowRight} size={20} />
              </div>

              {/* High-tech border glow */}
              <div className="absolute inset-0 border border-white/20 rounded-2xl" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating UI Elements for 'Techy' Feel */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-10 opacity-20 hidden lg:block"
      >
        <div className="w-40 h-40 border border-white/10 rounded-full border-dashed" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-20 opacity-10 hidden lg:block"
      >
        <IconRenderer icon={ASSETS.features.zap} size={100} className="text-white" />
      </motion.div>
    </section>
  );
};

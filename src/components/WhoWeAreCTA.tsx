import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ASSETS, IconRenderer } from '../constants';

export const WhoWeAreCTA: React.FC = () => {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden mx-4 lg:mx-8 rounded-[40px] lg:rounded-[56px] mb-20 group shadow-2xl">
      {/* Deep Forest Background */}
      <div className="absolute inset-0 bg-[#06241f] z-0" />
      
      {/* High-Density Vertical Scanning Lines */}
      <div 
        className="absolute inset-0 opacity-[0.04] z-1" 
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '15px 100%',
        }}
      />
      
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 shadow-[inner_0_0_100px_rgba(163,189,106,0.05)] z-1 pointer-events-none" />

      {/* Dynamic Digital Orbs */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/2 -left-1/4 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-[100px] z-2"
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

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-3xl"
        >
          {/* Pulsing Reference-Style Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brand-accent/40 bg-brand-accent/15 text-brand-accent text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_30px_rgba(163,189,106,0.1)] relative overflow-hidden group/badge">
            <span className="relative z-10 flex items-center gap-2">
               <motion.div 
                 animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(163,189,106,1)]"
               />
               Who We Are
            </span>
            <div className="absolute inset-0 bg-brand-accent/5 animate-pulse" />
          </div>

          {/* Bolder, High-Impact Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tighter mb-6">
            Providers Deserved <br />
            <span className="text-brand-accent">Better.</span> We're Building It.
          </h2>

          {/* Subtext */}
          <p className="text-white/40 text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold uppercase tracking-widest">
            Strategic Infrastructure for Human-Centric Care.
          </p>
        </motion.div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shrink-0 w-full lg:w-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group/btn"
          >
            {/* The Reference-Style Green Button */}
            <Link
              to="/about-credifide/"
              className="flex items-center justify-center gap-4 px-10 py-6 bg-brand-accent text-[#06241f] rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_-15px_rgba(163,189,106,0.3)] hover:bg-white transition-all duration-500 relative overflow-hidden group-hover:shadow-[0_25px_50px_-12px_rgba(163,189,106,0.5)]"
            >
              <span className="relative z-10">Discover Our Story</span>
              <div className="relative z-10 w-6 h-6 rounded-full bg-black/5 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-500">
                <IconRenderer icon={ASSETS.nav.arrowRight} size={20} />
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


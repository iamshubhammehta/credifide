import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ASSETS, IconRenderer } from '../constants';
import { useSEO } from '../hooks/useSEO';

const ServicesHub: React.FC = () => {
  useSEO(
    'Services & Solutions | Credifide',
    'Explore Credifide\'s core services: Provider Enrollment, Medical Billing, and complete Revenue Cycle Management infrastructure for clinical success.'
  );

  const services = [
    {
      title: "Insurance Credentialing",
      desc: "Comprehensive provider enrollment, CAQH management, and proactive re-credentialing infrastructure.",
      link: "/services/insurance-credentialing",
      icon: ASSETS.features.shield,
      color: "bg-brand-deep",
      badge: "Enrollment"
    },
    {
      title: "Medical Billing",
      desc: "End-to-end revenue cycle management focused on claim recovery, denial reduction, and cashflow stability.",
      link: "/services/medical-billing",
      icon: ASSETS.ui.dollar,
      color: "bg-brand-deep",
      badge: "Revenue"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-6 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-deep/5" />
         <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-accent/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brand-500/20 bg-brand-500/10 text-brand-deep text-sm font-black uppercase tracking-widest mb-10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-deep animate-pulse" />
            Service Ecosystem
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl lg:text-8xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.05] mb-8"
          >
            A Specialized <br />
            Core For <br />
            <span className="text-brand-deep whitespace-nowrap">Clinical Success</span>
          </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-slate-500 leading-relaxed font-medium mb-12"
           >
             Credifide manages the operational complexity of healthcare so you can focus on patient outcomes.
           </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -16 }}
              className="group"
            >
              <Link to={service.link} className="block relative">
                  <div className="bg-white rounded-[44px] p-10 lg:p-14 border border-brand-light shadow-2xl shadow-brand-deep/5 transition-all duration-500 hover:border-brand-accent hover:shadow-brand-deep/10 h-full relative overflow-hidden">
                     {/* Hover Glow */}
                     <div className={`absolute -top-20 -right-20 w-40 h-40 ${service.color}/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity`} />
                     
                     <div className="mb-10 flex justify-between items-start">
                        <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center shadow-2xl`}>
                           <IconRenderer icon={service.icon} size={32} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border border-brand-light px-3 py-1 rounded-full">{service.badge}</span>
                     </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-950 mb-6 group-hover:text-brand-deep transition-colors">
                       {service.title}
                    </h2>
                    
                    <p className="text-slate-500 leading-relaxed mb-10 text-lg">
                       {service.desc}
                    </p>
                    
                    <div className="flex items-center gap-3 text-brand-deep font-bold text-lg group/link">
                       Explore Solution
                       <IconRenderer icon={ASSETS.nav.arrowRight} className="group-hover/link:translate-x-2 transition-transform" />
                    </div>
                 </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Minimal Bottom CTA placeholder removed as per request */}
      </div>
    </div>
  );
};

export default ServicesHub;

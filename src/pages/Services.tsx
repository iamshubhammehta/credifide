import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ASSETS, IconRenderer } from '../constants';

const ServicesHub: React.FC = () => {
  const services = [
    {
      title: "Payor Credentialing",
      desc: "Comprehensive provider enrollment, CAQH management, and proactive re-credentialing infrastructure.",
      link: "/services/insurance-credentialing",
      icon: ASSETS.features.shield,
      color: "bg-brand-deep",
      badge: "Infrastructure"
    },
    {
      title: "Medical Billing",
      desc: "End-to-end revenue cycle management focused on claim recovery, denial reduction, and cashflow stability.",
      link: "/services/medical-billing",
      icon: ASSETS.ui.dollar,
      color: "bg-brand-accent",
      badge: "Revenue"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-deep/5" />
         <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-brand-accent/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="text-5xl lg:text-8xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.05] mb-8"
           >
             A Specialized Core For <br />
             <span className="text-brand-deep">Clinical Success.</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-slate-500 leading-relaxed font-medium"
           >
             Credifide manages the operational complexity of healthcare so you can focus on modern patient outcomes.
           </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
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

        {/* Minimal Bottom CTA placeholder */}
        <div className="mt-32 pt-24 border-t border-slate-100 flex flex-col md:row items-center justify-between gap-8 opacity-60">
           <div className="text-slate-400 font-medium">Looking for something else?</div>
           <div className="flex gap-12 text-slate-500 font-bold text-sm">
              <span className="hover:text-brand-deep cursor-pointer transition-colors">Case Studies</span>
              <span className="hover:text-brand-deep cursor-pointer transition-colors">Provider Portal</span>
              <span className="hover:text-brand-deep cursor-pointer transition-colors">Strategic Advisory</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHub;

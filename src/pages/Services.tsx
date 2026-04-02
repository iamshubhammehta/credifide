import React from 'react';
import { motion } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-full blur-[140px]" 
               style={{ background: 'radial-gradient(ellipse, rgba(127,191,127,0.08) 0%, transparent 70%)' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/20 bg-brand-50 text-brand-600 text-xs font-bold mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Our Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-6 leading-tight"
          >
            Solutions for <span className="text-brand-500">Modern Healthcare</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Credifide combines AI-powered automation with deep domain expertise to streamline provider operations and maximize revenue.
          </motion.p>
        </div>
      </section>

      {/* Insurance Credentialing Section */}
      <section id="credentialing" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Service 01</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">Insurance Credentialing & Payer Enrollment</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Insurance Credentialing is one of the most critical parts of healthcare operations. A single missed detail can delay approvals or disrupt patient access. 
              Credifide provides credentialing services designed to work reliably over time, getting you contracted accurately and staying compliant.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Primary Source Verification",
                "Payer Enrollment",
                "CAQH Profile Management",
                "Initial Provider Credentialing",
                "Recredentialing Management",
                "Contract Rate Negotiation",
                "NPI Registration",
                "Contracting Coordination"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-brand-200 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <IconRenderer icon={ASSETS.ui.check} size={14} className="stroke-[3px]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center gap-2 group">
              Speak with a Specialist
              <IconRenderer icon={ASSETS.nav.arrowRight} size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square bg-brand-50 rounded-[48px] overflow-hidden flex items-center justify-center relative">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: 'radial-gradient(circle, #7FBF7F 1px, transparent 1px)', backgroundSize: '24px 24px' }}
               />
               <motion.div
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="w-4/5 h-4/5 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 relative flex flex-col justify-between"
               >
                 <div className="flex justify-between items-center mb-6">
                   <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-white">
                     <IconRenderer icon={ASSETS.features.shield} size={28} />
                   </div>
                   <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">Verified</div>
                 </div>
                 <div className="space-y-4">
                   <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                   <div className="h-2 w-full bg-slate-100 rounded-full" />
                   <div className="h-2 w-5/6 bg-slate-100 rounded-full" />
                 </div>
                 <div className="mt-8 pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100" />
                      <div>
                        <div className="h-2 w-24 bg-slate-200 rounded-full mb-2" />
                        <div className="h-2 w-16 bg-slate-100 rounded-full" />
                      </div>
                    </div>
                 </div>
                 {/* Floating badge */}
                 <motion.div
                   animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
                 >
                   <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                      <IconRenderer icon={ASSETS.ui.fileText} size={18} />
                   </div>
                   <span className="text-xs font-bold text-slate-700">Payer Enrollment</span>
                 </motion.div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Billing Section */}
      <section id="billing" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-square bg-slate-900 rounded-[48px] overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                <motion.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="w-4/5 h-3/5 bg-white rounded-3xl shadow-2xl p-6 flex items-end gap-3"
                >
                  {[45, 75, 60, 95, 110, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: 0.1 * i, duration: 1 }}
                      className="flex-1 bg-gradient-to-t from-brand-500 to-brand-400 rounded-t-lg"
                    />
                  ))}
                </motion.div>
                
                <motion.div
                   animate={{ scale: [1, 1.1, 1] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute top-1/4 right-1/4 w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-brand-500/30"
                >
                  <IconRenderer icon={ASSETS.ui.dollar} size={32} />
                </motion.div>
             </div>
          </div>

          <div>
            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Service 02</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">Medical Billing & Revenue Management</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Revenue cycle management is about ensuring that every step, from credentialing to payment posting, works together without breakdowns. 
              Credifide provides RCM services designed to reduce friction, prevent avoidable errors, and create predictable reimbursement for healthcare providers.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                { title: "Claims Submission", desc: "Digital scrubbing and submission to all major payers." },
                { title: "Denial Management", desc: "Automated tracking and proactive appeals for denied claims." },
                { title: "Payment Reconciliation", desc: "Accurate posting and reconciliation of payments." },
                { title: "AR Recovery", desc: "Focused strategy to collect outstanding patient and payer balances." }
              ].map((service) => (
                <div key={service.title} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <IconRenderer icon={ASSETS.ui.trendingUp} size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-slate-500">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-brand-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20 flex items-center gap-2 group">
              Optimize Your Revenue
              <IconRenderer icon={ASSETS.nav.arrowRight} size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Common Footer CTA */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #7FBF7F 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-8">Ready to modernize your operations?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Schedule a strategy call with our healthcare experts to see how Credifide can transform your practice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="px-8 py-4 bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all">Book a Consultation</button>
               <button className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10">View Resources</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Services;

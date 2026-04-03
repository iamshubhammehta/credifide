import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const InsuranceCredentialing: React.FC = () => {
  useSEO(
    'Insurance & Payer Credentialing Services | Credifide',
    'Stop losing revenue to enrollment delays. Our proactive credentialing infrastructure builds direct payer pathways for faster reimbursements.'
  );

  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-brand-light selection:text-brand-deep overflow-x-hidden pt-0">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[70vh] flex flex-col justify-start pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <motion.div 
             animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
             transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
             className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full blur-[120px] bg-brand-light" 
           />
           <motion.div 
             animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
             transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
             className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full blur-[140px] bg-brand-light/50" 
           />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brand-deep/20 bg-brand-deep/5 text-brand-deep text-sm font-black uppercase tracking-widest mb-10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-deep animate-pulse" />
            Insurance Enrollment
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-7xl lg:text-8xl font-display font-extrabold text-slate-950 leading-tight tracking-tighter mb-8"
          >
            Credentialing That <br />
            <span className="text-brand-deep">Actually Works.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg lg:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Credifide eliminates the invisible friction keeping providers away from patients. We don't just manage processes—we replace them with structured automation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link to="/contact" className="px-10 py-5 bg-brand-deep text-white rounded-2xl font-bold text-lg shadow-2xl shadow-brand-deep/20 hover:scale-[1.03] transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              Start Your Enrollment
              <IconRenderer icon={ASSETS.nav.arrowRight} size={20} />
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-white text-brand-deep border border-brand-deep/20 rounded-2xl font-bold text-lg shadow-sm hover:bg-brand-light transition-all w-full sm:w-auto justify-center flex items-center">
              Book a Free Consultation
            </Link>
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 flex flex-wrap justify-center items-center gap-8 sm:gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            {['Medicare', 'BlueCross', 'Aetna', 'Humana', 'Cigna'].map((payer) => (
              <span key={payer} className="text-lg sm:text-xl font-display font-black text-slate-900 tracking-tighter">{payer}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROBLEM SECTION ─── */}
      <section className="py-20 lg:py-24 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
             <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-slate-950 mb-6 leading-tight">Credentialing is Broken.</h2>
             <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
               For most providers, credentialing is a fragmented nightmare of portals, paperwork, and manual follow-ups.
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {[
              { icon: ASSETS.features.clock, title: "Revenue Delays", desc: "Missing provider data costs groups thousands in daily lost revenue." },
              { icon: ASSETS.ui.alert, title: "Process Churn", desc: "Fragmented systems lead to stalled applications and missed deadlines." },
              { icon: ASSETS.ui.target, title: "Zero Visibility", desc: "Most providers don't know where their applications stand until they fail." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 sm:p-10 rounded-[32px] border border-brand-light shadow-xl shadow-brand-deep/5 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                   <IconRenderer icon={item.icon} size={120} />
                </div>
                <div className="w-14 h-14 bg-brand-light text-brand-deep rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                   <IconRenderer icon={item.icon} size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION SECTION ─── */}
      <section className="py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <span className="text-brand-deep/60 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">The Solution</span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-slate-950 mb-8 leading-tight">
                We Build Operational <span className="text-brand-deep">Infrastructure</span>, Not Paperwork.
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 mb-10 leading-relaxed">
                Credifide treats credentialing as a governed system. Every workflow is structured, monitored, and automated from start to finish.
              </p>
              
              <div className="space-y-10 sm:space-y-12 relative">
                {/* Visual Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-brand-light" />
                
                {[
                  { step: "01", title: "Smart Onboarding", desc: "Collect data once. Our system validates every field instantly." },
                  { step: "02", title: "Automated Validation", desc: "AI-assisted checks identify inconsistencies before submission." },
                  { step: "03", title: "Governed Submission", desc: "Direct integration with payer portals to eliminate manual error." },
                  { step: "04", title: "Proactive Monitoring", desc: "Live tracking with automated follow-ups every 72 hours." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 sm:gap-8 relative z-10"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-brand-light rounded-full flex items-center justify-center text-brand-deep font-bold shrink-0 shadow-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative mt-12 lg:mt-0">
               <div className="aspect-[4/5] bg-brand-deep rounded-[48px] overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                  {/* Mock UI Element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%]">
                     <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                           <div className="font-bold text-slate-900 text-sm sm:text-base">Application Progress</div>
                           <div className="text-brand-deep text-xs sm:text-sm font-bold">84% Complete</div>
                        </div>
                        <div className="space-y-4">
                           {[90, 65, 80, 40].map((w, i) => (
                             <div key={i} className="h-1.5 sm:h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                                  className="h-full bg-brand-deep origin-left rounded-full" 
                                  style={{ width: `${w}%` }} 
                                />
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  {/* Glow element */}
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES BREAKDOWN ─── */}
      <section className="py-20 lg:py-24 bg-brand-light/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-6 text-slate-900 leading-tight">End-to-End Coverage</h2>
            <p className="text-base sm:text-lg text-slate-500">We handle the complexity so you can focus on care.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {[
              { title: "Payer Enrollment", icon: ASSETS.features.shield, desc: "Fast-tracked initial enrollment for all major commercial & government payers." },
              { title: "CAQH Profile", icon: ASSETS.ui.fileText, desc: "Regular maintenance and data attestation to ensure continuous compliance." },
              { title: "Re-Credentialing", icon: ASSETS.features.clock, desc: "Early renewal triggers to prevent any disruption in provider participation." },
              { title: "NPI Registration", icon: ASSETS.ui.check, desc: "Organization and individual NPI creation, updates, and taxonomy management." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-light shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-light/50 rounded-2xl flex items-center justify-center text-brand-deep mb-6 shadow-inner">
                   <IconRenderer icon={item.icon} size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS SECTION ─── */}
      <section className="py-16 bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { val: "35%", label: "Faster Approvals" },
            { val: "99.8%", label: "Accuracy Rate" },
            { val: "14 Days", label: "Average Setup" },
            { val: "5000+", label: "Providers Managed" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black mb-2">{stat.val}</div>
              <div className="text-brand-light/60 font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-20 lg:py-24 bg-white flex items-center justify-center text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-10 sm:p-16 lg:p-24 bg-brand-deep rounded-[48px] sm:rounded-[64px] relative overflow-hidden shadow-2xl shadow-brand-deep/20">
             {/* Decorative blobs */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-light/10 rounded-full blur-[100px]" />
             
             <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">Ready to Optimize Your Enrollment?</h2>
                <p className="text-lg sm:text-xl text-brand-light/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                   Join hundreds of medical groups using Credifide to reduce overhead and focus on patient care.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                   <Link to="/contact" className="px-10 py-5 bg-brand-accent text-brand-deep rounded-2xl font-bold hover:scale-[1.05] transition-all shadow-xl shadow-black/10 w-full sm:w-auto">
                      Request a Strategy Call
                   </Link>
                   <Link to="/contact" className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all w-full sm:w-auto">
                      Book Free Consultation
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsuranceCredentialing;

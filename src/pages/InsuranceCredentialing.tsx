import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';

const InsuranceCredentialing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-brand-deep/10 selection:text-brand-deep overflow-x-hidden">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <motion.div 
             animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
             transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
             className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full blur-[120px] bg-brand-deep/5" 
           />
           <motion.div 
             animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
             transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
             className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full blur-[140px] bg-brand-blue/5" 
           />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-deep/20 bg-brand-deep/5 text-brand-deep text-sm font-bold mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-brand-deep animate-pulse" />
            Infrastructure for Clinical Success
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-display font-extrabold text-slate-950 leading-[1.05] tracking-tight mb-8"
          >
            Credentialing That <br />
            <span className="text-brand-deep">Actually Works.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Credifide eliminates the invisible friction keeping providers away from patients. We don't just manage processes—we replace them with structured automation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button className="px-10 py-5 bg-brand-deep text-white rounded-2xl font-bold text-lg shadow-2xl shadow-brand-deep/20 hover:scale-[1.03] transition-all flex items-center gap-2">
              Start Your Enrollment
              <IconRenderer icon={ASSETS.nav.arrowRight} size={20} />
            </button>
            <button className="px-10 py-5 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg shadow-sm hover:bg-slate-50 transition-all">
              Book a Free Consultation
            </button>
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            {/* Minimalist Logo placeholders */}
            {['Medicare', 'BlueCross', 'Aetna', 'Humana', 'Cigna'].map((payer) => (
              <span key={payer} className="text-xl font-display font-black text-slate-900 tracking-tighter">{payer}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROBLEM SECTION ─── */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-950 mb-6">Credentialing is Broken.</h2>
             <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
               For most providers, credentialing is a fragmented nightmare of portals, paperwork, and manual follow-ups.
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <IconRenderer icon={item.icon} size={120} />
                </div>
                <div className="w-14 h-14 bg-brand-deep/10 text-brand-deep rounded-2xl flex items-center justify-center mb-8">
                  <IconRenderer icon={item.icon} size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION SECTION (Timeline UI) ─── */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">The Solution</span>
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-950 mb-8 leading-tight">
                We Build Operational <span className="text-brand-deep">Infrastructure</span>, Not Paperwork.
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                Credifide treats credentialing as a governed system. Every workflow is structured, monitored, and automated from start to finish.
              </p>
              
              <div className="space-y-12 relative">
                {/* Visual Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-100" />
                
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
                    className="flex gap-8 relative z-10"
                  >
                    <div className="w-14 h-14 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-slate-900 font-bold shrink-0 shadow-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-950 rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative">
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #7FBF7F 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                 {/* Mock UI Element */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                       <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                          <div className="font-bold text-slate-900">Application Progress</div>
                          <div className="text-brand-deep text-sm font-bold">84% Complete</div>
                       </div>
                       <div className="space-y-3">
                          {[90, 65, 80, 40].map((w, i) => (
                            <div key={i} className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
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
                 <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-deep/30 rounded-full blur-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES BREAKDOWN (Cards) ─── */}
      <section className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">End-to-End Coverage</h2>
            <p className="text-lg text-slate-500">We handle the complexity so you can focus on care.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Payer Enrollment", icon: ASSETS.features.shield, desc: "Fast-tracked initial enrollment for all major commercial & government payers." },
              { title: "CAQH Profile", icon: ASSETS.ui.fileText, desc: "Regular maintenance and data attestation to ensure continuous compliance." },
              { title: "Re-Credentialing", icon: ASSETS.features.clock, desc: "Early renewal triggers to prevent any disruption in provider participation." },
              { title: "NPI Registration", icon: ASSETS.ui.check, desc: "Organization and individual NPI creation, updates, and taxonomy management." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-deep mb-8">
                  <IconRenderer icon={item.icon} size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS SECTION (Metrics) ─── */}
      <section className="py-32 bg-brand-deep text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
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
              <div className="text-5xl lg:text-7xl font-display font-black mb-4">{stat.val}</div>
              <div className="text-brand-100/60 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-32 bg-white flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 lg:p-20 bg-slate-950 rounded-[64px] relative overflow-hidden">
             {/* Decorative blobs */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-brand-deep/20 rounded-full blur-[100px]" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px]" />
             
             <div className="relative z-10">
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8">Ready to Optimize Your Enrollment?</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of medical groups using Credifide to reduce overhead and focus on patient care.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="px-10 py-5 bg-brand-deep text-white rounded-2xl font-bold hover:scale-[1.05] transition-all shadow-xl shadow-brand-deep/30">
                     Request a Strategy Call
                  </button>
                  <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
                     View Case Studies
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Footer Placeholder matching existing */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center text-slate-400 text-sm">
        © 2026 Credifide. All rights reserved.
      </footer>
    </div>
  );
};

export default InsuranceCredentialing;

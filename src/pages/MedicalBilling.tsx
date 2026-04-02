import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ASSETS, IconRenderer } from '../constants';

const MedicalBilling: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-brand-blue/10 selection:text-brand-blue overflow-x-hidden">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Animated Background Gradients & Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <motion.div 
             animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
             transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
             className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[160px] bg-brand-blue/5" 
           />
           <motion.div 
             animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
             transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
             className="absolute bottom-[-15%] left-[-10%] w-[65%] h-[65%] rounded-full blur-[140px] bg-brand-deep/5" 
           />
           {/* Abstract Floating SVG Shapes */}
           <motion.svg animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-10 w-24 h-24 opacity-10 text-brand-blue" fill="currentColor" viewBox="0 0 200 200">
             <path d="M40 40 L160 40 L100 160 Z" />
           </motion.svg>
           <motion.svg animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} transition={{ duration: 12, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 right-20 w-32 h-32 opacity-10 text-brand-deep" fill="currentColor" viewBox="0 0 200 200">
             <circle cx="100" cy="100" r="80" />
           </motion.svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-blue text-sm font-bold mb-10 overflow-hidden relative"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
            Predictable Revenue Cycle Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-8xl font-display font-extrabold text-slate-950 leading-[1.05] tracking-tight mb-8"
          >
            Maximize Recovery. <br />
            <span className="text-brand-blue">Eliminate Friction.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Medical billing isn't just about submitting claims. It's about building a stable operation that prevents avoidable errors and creates predictable cash flow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-bold text-lg shadow-2xl shadow-brand-blue/20 hover:scale-[1.03] transition-all flex items-center gap-2 group">
              Optimize Your Billing
              <IconRenderer icon={ASSETS.nav.arrowRight} size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg shadow-sm hover:bg-slate-50 transition-all">
              Book RCM Strategy Call
            </button>
          </motion.div>
          
          {/* Animated Stats in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-20 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-100 pt-16"
          >
             <div className="text-center">
                <div className="text-4xl font-display font-bold text-slate-950 mb-2">98.5%</div>
                <div className="text-slate-400 font-bold tracking-widest text-xs uppercase">First-Pass Yield</div>
             </div>
             <div className="text-center border-x border-slate-100 px-8">
                <div className="text-4xl font-display font-bold text-slate-950 mb-2">24h</div>
                <div className="text-slate-400 font-bold tracking-widest text-xs uppercase">Claim Scrubbing</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-display font-bold text-slate-950 mb-2">&lt;35 Days</div>
                <div className="text-slate-400 font-bold tracking-widest text-xs uppercase">Days in A/R</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PAIN POINTS SECTION ─── */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
             <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-950 mb-8 leading-tight">
               Where Revenue Cycles Break Down
             </h2>
             <p className="text-xl text-slate-500 leading-relaxed">
               Most RCM issues don't start with billing. They begin with incomplete credentialing, outdated payer info, or inconsistent data.
             </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
             <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/5 rounded-full blur-[80px]" />
                <h3 className="text-3xl font-display font-bold text-slate-950 mb-6">Revenue Leakage</h3>
                <p className="text-slate-500 mb-10 leading-relaxed text-lg">
                  Uncollected patient balances, ignored denials, and inefficient follow-up can drain up to 15% of your clinical revenue.
                </p>
                <div className="flex gap-4 items-center text-red-500 font-bold bg-red-50 px-6 py-4 rounded-2xl w-fit">
                   <div className="w-12 h-1 bg-red-200 rounded-full overflow-hidden">
                      <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-red-500" />
                   </div>
                   Average 12% Revenue Loss
                </div>
             </div>
             <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-deep/5 rounded-full blur-[80px]" />
                <h3 className="text-3xl font-display font-bold text-slate-950 mb-6">Process Opaque</h3>
                <p className="text-slate-500 mb-10 leading-relaxed text-lg">
                  Most providers only find out about billing problems after the payment fails. We provide 100% transparency at every step.
                </p>
                <div className="flex gap-4 items-center text-emerald-500 font-bold bg-emerald-50 px-6 py-4 rounded-2xl w-fit">
                   <IconRenderer icon={ASSETS.ui.target} size={20} />
                   Live Dashboard Visibility
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES BREAKDOWN (Cards) ─── */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-950 mb-6">Built for Accuracy</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
               We use advanced technology to prevent problems before they occur, rather than chasing them afterward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ASSETS.ui.clipboard, title: "Charge Entry", desc: "Digital scrubbing and entry of patient encounters within 24 hours." },
              { icon: ASSETS.ui.fileText, title: "Precision Coding", desc: "Certified coders ensure ICD-10, CPT, and modifier accuracy." },
              { icon: ASSETS.ui.trendingUp, title: "A/R Follow-up", desc: "Aggressive, automated tracking of every claim over 15 days old." },
              { icon: ASSETS.features.shield, title: "Denial Mgmt", desc: "Strategic appeals and root-cause analysis to stop repeat denials." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md transition-all hover:shadow-2xl h-full border-b-4 border-b-transparent hover:border-b-brand-blue"
              >
                <div className="w-14 h-14 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
                  <IconRenderer icon={item.icon} size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISUAL FLOW SECTION (Billing Cycle) ─── */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #1E90FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="text-center mb-24">
             <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">The Unified Billing Cycle</h2>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">A structured, automated workflow from encounter to payment posting.</p>
          </div>
          
          <div className="relative flex flex-col lg:flex-row justify-between gap-8 items-center lg:items-start group">
             {/* Dynamic connector line (Desktop) */}
             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue/0 via-brand-blue/40 to-brand-blue/0 hidden lg:block" />
             
             {[
               { icon: ASSETS.ui.fileText, label: "Scrubbing", desc: "Claims are validated against thousands of specific payer rules." },
               { icon: ASSETS.features.shield, label: "Submission", desc: "Digital submission to clearinghouses with instant confirmation." },
               { icon: ASSETS.features.clock, label: "Tracking", desc: "Real-time adjudication updates directly in your portal." },
               { icon: ASSETS.ui.dollar, label: "Posting", desc: "Automated ERA/EOB reconciliation with 99.8% precision." }
             ].map((node, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="relative z-10 flex flex-col items-center text-center max-w-[220px]"
               >
                 <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-[32px] flex items-center justify-center text-brand-blue mb-8 shadow-[0_0_40px_rgba(30,144,255,0.1)] group-hover:shadow-[0_0_60px_rgba(30,144,255,0.2)] transition-shadow duration-700">
                    <IconRenderer icon={node.icon} size={36} />
                 </div>
                 <h4 className="text-xl font-bold mb-4">{node.label}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed">{node.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ─── REVENUE IMPACT SECTION ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-950 mb-8 leading-tight">
                   Impact You Can <br /><span className="text-brand-blue">Measure.</span>
                </h2>
                <div className="space-y-8">
                   <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                         <IconRenderer icon={ASSETS.ui.trendingUp} size={24} className="text-emerald-500" />
                      </div>
                      <div>
                         <div className="text-2xl font-bold text-slate-950 mb-2">+14% Average</div>
                         <p className="text-slate-500 text-sm">Monthly revenue increase within the first 90 days of transition.</p>
                      </div>
                   </div>
                   <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                         <IconRenderer icon={ASSETS.features.clock} size={24} className="text-brand-blue" />
                      </div>
                      <div>
                         <div className="text-2xl font-bold text-slate-950 mb-2">-22 Days</div>
                         <p className="text-slate-500 text-sm">Reduction in average payment wait times from all major commercial payers.</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="relative">
                <div className="bg-slate-50 p-1 rounded-[48px] overflow-hidden shadow-inner border border-slate-200/50">
                    <div className="bg-white rounded-[44px] p-12 shadow-2xl relative">
                       {/* Simplified Metric Visualization */}
                       <div className="flex items-end gap-3 h-64 mb-10">
                          <div className="flex-1 flex flex-col justify-end gap-3 h-full">
                             <div className="bg-slate-100 rounded-xl h-[40%]" />
                             <div className="text-center text-slate-400 font-bold text-xs">Standard Billing</div>
                          </div>
                          <div className="flex-1 flex flex-col justify-end gap-3 h-full">
                             <motion.div 
                               initial={{ height: 0 }}
                               whileInView={{ height: '95%' }}
                               transition={{ duration: 1.5 }}
                               className="bg-brand-blue rounded-xl relative overflow-hidden" 
                             >
                                <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10" />
                             </motion.div>
                             <div className="text-center text-brand-blue font-bold text-xs uppercase tracking-widest">Credifide RCM</div>
                          </div>
                       </div>
                       <div className="flex items-center justify-between p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                          <div className="text-slate-700 font-bold">Revenue Efficiency</div>
                          <div className="text-brand-blue font-black text-xl">99.2%</div>
                       </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-brand-blue rounded-[56px] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(30,144,255,0.4)]">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-white/5 rounded-[48%] blur-[80px]" />
               
               <div className="relative z-10">
                  <h2 className="text-4xl lg:text-7xl font-display font-bold mb-10 leading-tight">Ready to Stabilize <br />Your Cash Flow?</h2>
                  <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed mb-16 opacity-80">
                     We don't rely on shortcuts or reactive fixes. We design billing systems that hold up under real-world complexity.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                     <button className="px-12 py-6 bg-slate-950 text-white rounded-[24px] font-bold text-lg hover:scale-[1.05] transition-all shadow-xl">
                        Optimize Your RCM Today
                     </button>
                     <button className="px-8 font-bold text-blue-50 border-b-2 border-blue-500/30 hover:border-blue-50 transition-all py-2">
                        Talk to a Specialist
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <footer className="py-12 bg-white border-t border-slate-100 text-center text-slate-400 text-sm">
        © 2026 Credifide. All rights reserved.
      </footer>
    </div>
  );
};

export default MedicalBilling;

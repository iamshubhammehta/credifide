import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  BarChart3, 
  ArrowRight,
  Shield,
  Activity,
  Layers,
  Sparkles,
  MousePointer2
} from 'lucide-react';
import { ASSETS, IconRenderer } from '../constants';

const PremiumSaaS = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-deep selection:text-white">
      {/* MINIMAL NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-12 md:py-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-brand-deep flex items-center justify-center text-white rotate-0 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-brand-deep/20">
              <IconRenderer icon={ASSETS.features.shield} size={20} />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-slate-900">Credifide.</span>
          </Link>
          
          <div className="flex items-center gap-4">
             <Link to="/contact" className="hidden md:block text-slate-500 font-bold hover:text-brand-deep transition-colors px-4 py-2">Log In</Link>
             <Link to="/contact" className="bg-brand-deep text-white px-8 py-4 rounded-2xl font-black text-sm shadow-2xl shadow-brand-deep/20 hover:scale-105 active:scale-95 transition-all">Get Started</Link>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION: THE EXPERIENCE */}
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
          {/* Layered Animated Background */}
          <div className="absolute inset-0 pointer-events-none select-none">
             <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-light/20 rounded-full blur-[150px] animate-pulse" />
             <div className="absolute -bottom-1/4 -left-20 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] animate-soft-pulse" />
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#11332E 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-light/50 bg-brand-light/20 text-brand-deep text-xs font-bold uppercase tracking-widest mb-8">
                 <span className="status-pulse w-2 h-2 rounded-full bg-brand-deep" />
                 Next-Gen RCM Technology
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black text-slate-950 leading-[0.95] mb-8">
                 The Future of <span className="text-brand-deep">Credentialing</span> is Flow.
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                 Experience the most intuitive, motion-first revenue cycle platform. Automated payer enrollment with human-grade intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto bg-brand-deep text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-brand-deep/30 flex items-center justify-center gap-2 group overflow-hidden relative">
                   <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <span className="relative z-10">Start Your Trial</span>
                   <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
                <Link to="/services" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 text-slate-500 font-bold hover:text-brand-deep transition-all group">
                   Watch Demo
                   <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-light/40 group-hover:border-brand-light transition-all">
                      <Zap size={18} />
                   </div>
                </Link>
              </div>
            </motion.div>

            {/* Right Dashboard Mockup (ANIMATED) */}
            <div className="relative h-[600px] hidden lg:block">
               {/* Base Mesh */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[400px] border border-slate-100 rounded-[3rem] bg-slate-50/50 backdrop-blur-md -rotate-6 scale-110 shadow-2xl" />

               {/* LAYERED FLOATING CARDS */}
               <motion.div 
                 className="absolute top-[10%] right-0 w-64 glass-card p-6 floating-1 z-30"
                 style={{ transformStyle: 'preserve-3d' }}
               >
                  <div className="flex items-center justify-between mb-4">
                     <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                        <CheckCircle2 size={16} />
                     </div>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active</span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Aetna Enrollment</div>
                  <div className="text-[10px] text-slate-500">Processing... 92% Complete</div>
                  <div className="mt-3 w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[92%]" />
                  </div>
               </motion.div>

               <motion.div className="absolute bottom-[20%] -left-10 w-72 glass-card p-6 floating-2 z-20">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-2xl bg-brand-deep flex items-center justify-center text-white shadow-xl shadow-brand-deep/20">
                        <BarChart3 size={20} />
                     </div>
                     <div>
                        <div className="text-xs font-black text-slate-400 uppercase tracking-tight">Net Collections</div>
                        <div className="text-xl font-bold text-slate-900">$248,500.20</div>
                     </div>
                  </div>
                  <div className="grid grid-cols-5 gap-1 items-end h-16">
                     {[30, 60, 45, 80, 50].map((h, i) => (
                        <div key={i} className="bg-brand-deep/20 rounded-t-md hover:bg-brand-deep transition-colors w-full" style={{ height: `${h}%` }} />
                     ))}
                  </div>
               </motion.div>

               <motion.div className="absolute top-[40%] left-[20%] w-56 glass-card p-6 floating-3 z-10">
                  <div className="space-y-4">
                     <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-deep">
                           <Shield size={16} />
                        </div>
                        <div className="h-4 w-24 bg-slate-100 rounded-full self-center" />
                     </div>
                     <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                           <Clock size={16} />
                        </div>
                        <div className="h-4 w-32 bg-slate-100 rounded-full self-center" />
                     </div>
                  </div>
               </motion.div>

               {/* Decorative dots/lines */}
               <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[20%] left-0 w-2 h-2 rounded-full bg-brand-deep/20" />
                  <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-brand-accent/20 animate-ping" />
               </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW VISUAL SECTION */}
        <section className="py-32 bg-white relative">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1">
                    <div className="relative h-[500px]">
                       {/* Animated Flow Nodes */}
                       {[
                         { id: 1, top: '10%', left: '50%', label: 'Application Data', icon: Layers },
                         { id: 2, top: '40%', left: '20%', label: 'Verification', icon: ShieldCheck },
                         { id: 3, top: '40%', left: '80%', label: 'Compliance Audit', icon: Activity },
                         { id: 4, top: '80%', left: '50%', label: 'Final Approval', icon: Sparkles },
                       ].map((item, idx) => (
                         <motion.div 
                           key={idx}
                           initial={{ opacity: 0, scale: 0.8 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           transition={{ delay: idx * 0.2 }}
                           className="absolute flex flex-col items-center gap-3 -translate-x-1/2 -translate-y-1/2"
                           style={{ top: item.top, left: item.left }}
                         >
                            <div className="w-20 h-20 rounded-[2rem] bg-white shadow-2xl border border-slate-100 flex items-center justify-center text-brand-deep hover:scale-110 transition-transform duration-500">
                               <item.icon size={32} />
                            </div>
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest text-center max-w-[100px]">{item.label}</span>
                         </motion.div>
                       ))}
                       
                       {/* SVG Connecting Lines (Simplified) */}
                       <svg className="absolute inset-0 w-full h-full -z-10 opacity-10 pointer-events-none" viewBox="0 0 400 400">
                          <path d="M200 60 L100 180 L200 320 L300 180 Z" fill="none" stroke="#11332E" strokeWidth="2" strokeDasharray="5 5" />
                       </svg>
                    </div>
                 </div>

                 <div className="order-1 lg:order-2">
                    <h2 className="text-5xl font-display font-black text-slate-900 mb-8 leading-tight">
                       Workflow that <span className="text-brand-deep italic">Breathes.</span>
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                       Our system doesn't just process tasks; it orchestrates them. From the moment data enters the platform, our automated flow ensures compliance and speed at every junction.
                    </p>
                    <div className="space-y-6">
                       <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-light transition-all">
                          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-deep shrink-0">
                             <MousePointer2 size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 mb-1">Low Friction Onboarding</h4>
                             <p className="text-sm text-slate-500">Drag and drop provider files to start high-priority enrollments instantly.</p>
                          </div>
                       </div>
                       <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-light transition-all">
                          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-deep shrink-0">
                             <Activity size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 mb-1">Real-Time Sync</h4>
                             <p className="text-sm text-slate-500">Direct integration with CAQH and major payer portals for 24/7 status updates.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ULTRA PREMIUM CTA */}
        <section className="py-24 px-6 md:px-12">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-7xl mx-auto rounded-[3rem] bg-[#11332E] p-12 md:p-24 overflow-hidden relative"
           >
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent opacity-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 text-center">
                 <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8">
                    Elevate Your Practice Efficiency.
                 </h2>
                 <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12">
                    Join over 500 healthcare facilities scaling their revenue cycle with Credifide's premium orchestration platform.
                 </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/contact" className="w-full sm:w-auto bg-[#A3BD6A] text-[#11332E] px-12 py-6 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                       Get Started Now
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto px-8 py-5 text-white font-bold border border-white/20 rounded-2xl hover:bg-white/5 transition-all">
                       Schedule a Demo
                    </Link>
                 </div>
              </div>
           </motion.div>
        </section>
      </main>
    </div>
  );
};

export default PremiumSaaS;

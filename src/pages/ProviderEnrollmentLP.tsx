import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Shield, 
  Zap, 
  Activity, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Fingerprint,
  Mail,
  Phone,
  Layers,
  Sparkles,
  Users,
  Search,
  FileText,
  Gavel,
  Scale
} from 'lucide-react';
import { ASSETS, IconRenderer } from '../constants';

const ProviderEnrollmentLP = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-deep selection:text-white">
      {/* MINIMAL NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-brand-deep flex items-center justify-center text-white transition-all group-hover:rotate-12">
              <IconRenderer icon={ASSETS.features.shield} size={20} />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter">Credifide.</span>
          </Link>
          <a 
            href="#form" 
            className="bg-brand-deep text-white px-8 py-3 rounded-full font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-deep/20"
          >
            Start Enrollment
          </a>
        </div>
      </header>

      <main>
        {/* HERO: COMMAND CENTER EXPERIENCE */}
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
          {/* Dynamic Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-light/10 rounded-full blur-[160px] animate-pulse" />
             <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px]" />
             <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#11332E 1px, transparent 1px), linear-gradient(90deg, #11332E 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-light/50 bg-brand-light/20 text-brand-deep text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                   <Zap size={14} />
                   AI-Powered Enrollment Platform
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-black text-slate-950 leading-[0.9] mb-8">
                   Payer & Provider <br />
                   <span className="text-brand-deep underline decoration-brand-accent/20 decoration-8 underline-offset-8">Enrollment.</span>
                </h1>
                <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
                   Experience 98% first-submission accuracy and 30% faster turnaround times. We treat credentialing as infrastructure, not administrative paperwork.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                   <a href="#form" className="w-full sm:w-auto bg-brand-deep text-white px-12 py-6 rounded-3xl font-black text-xl shadow-2xl shadow-brand-deep/30 hover:shadow-brand-deep/50 transition-all flex items-center justify-center gap-4 group">
                      Book A Strategy Call
                      <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                   </a>
                   <div className="flex items-center gap-3 text-slate-400 font-bold">
                      <span className="flex">
                         {[1,2,3,4,5].map(i => <Sparkles key={i} size={14} className="text-brand-accent" />)}
                      </span>
                      Trusted by 500+ Facilities
                   </div>
                </div>
              </motion.div>

              {/* Advanced Dashboard Mockup */}
              <div className="relative h-[600px] group/dash">
                 {/* Main Base */}
                 <div className="absolute inset-0 bg-slate-50/50 backdrop-blur-2xl border border-slate-100 rounded-[4rem] rounded-tr-[2rem] rotate-1 shadow-2xl transition-transform duration-1000 group-hover/dash:rotate-0" />
                 
                 {/* Internal Floating Cards */}
                 <motion.div className="absolute -top-10 -right-10 w-72 glass-card p-8 floating-1 shadow-brand-deep/5 border-brand-light/20 z-40">
                    <div className="flex items-center justify-between mb-6">
                       <div className="w-10 h-10 rounded-2xl bg-brand-deep flex items-center justify-center text-white">
                          <Activity size={20} />
                       </div>
                       <div className="text-[10px] font-black uppercase text-brand-deep bg-brand-light px-3 py-1 rounded-full">Automated</div>
                    </div>
                    <div className="text-lg font-black text-slate-900 mb-1 leading-tight">CAQH Profile Check</div>
                    <div className="text-xs text-slate-500 font-bold mb-4">Verification Layer Active</div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 2 }} className="h-full bg-brand-deep" />
                    </div>
                 </motion.div>

                 <motion.div className="absolute bottom-[15%] -left-12 w-64 asymmetric-card p-8 floating-2 shadow-brand-accent/10 z-30">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-8 h-8 rounded-full bg-brand-accent shadow-lg shadow-brand-accent/20" />
                       <div className="text-sm font-black text-slate-400">STATUS.LIVE</div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                          <span className="text-[10px] font-bold text-slate-500">Medicare Enroll</span>
                          <span className="w-2 h-2 rounded-full bg-green-500 status-pulse" />
                       </div>
                       <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100 opacity-60">
                          <span className="text-[10px] font-bold text-slate-500">BCBS Contract</span>
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                       </div>
                    </div>
                 </motion.div>

                 <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-light/30 rounded-full blur-[80px] -z-10 floating-3" />
              </div>
            </div>
          </div>
        </section>

        {/* METRICS SECTION: GRID OF ADVANTAGE */}
        <section className="py-24 bg-slate-50/50 relative">
           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
              {[
                { label: 'Submission Accuracy', value: '98%', icon: Shield, color: 'text-brand-deep' },
                { label: 'Turnaround Time', value: '30%', sub: 'Faster', icon: Zap, color: 'text-brand-accent' },
                { label: 'Real-Time Visibility', value: '100%', icon: Search, color: 'text-brand-deep' },
                { label: 'Expert Support', value: '24/7', icon: Users, color: 'text-brand-accent' },
              ].map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 text-center flex flex-col items-center group"
                >
                   <div className={`${m.color} bg-slate-50 w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <m.icon size={28} />
                   </div>
                   <div className="text-4xl font-display font-black text-slate-900 mb-2">{m.value}</div>
                   {m.sub && <div className="text-brand-deep font-bold text-sm mb-1">{m.sub}</div>}
                   <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{m.label}</div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* SERVICES: THE INFRASTRUCTURE */}
        <section className="py-32 bg-white flex flex-col items-center">
           <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                 <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-slate-950 mb-6 leading-tight">
                       Operational Infrastructure <br />
                       <span className="text-brand-deep italic">Not Admin Paperwork.</span>
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                       Credifide treats Insurance Credentialing as the foundation of your revenue stream. We apply validation checks before every submission.
                    </p>
                 </div>
                 <Link to="/services" className="px-8 py-4 rounded-2xl bg-brand-light/30 text-brand-deep border border-brand-light font-black flex items-center gap-3 hover:bg-brand-light transition-all">
                    View Full Ecosystem
                    <ChevronRight size={18} />
                 </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: 'Primary Source Verification', desc: 'Secure, multi-layered verification for total compliance.', icon: Fingerprint },
                   { title: 'Payer Enrollment', desc: 'End-to-end management for individual and group payers.', icon: FileText },
                   { title: 'CAQH Profile Management', desc: 'Automated updates and 100% profile accuracy maintenance.', icon: Layers },
                   { title: 'Contracting Support', desc: 'Negotiation support for optimal medical reimbursement rates.', icon: Scale },
                   { title: 'Initial Credentialing', desc: 'Fast-track onboarding for solo and group providers.', icon: TrendingUp },
                   { title: 'Ongoing Support', desc: 'Dedicated recredentialing and maintenance beyond launch.', icon: CheckCircle2 },
                 ].map((s, i) => (
                   <div key={i} className="p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-light group hover:bg-slate-50/50 transition-all duration-700">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-deep mb-8 group-hover:bg-brand-deep group-hover:text-white transition-all duration-700 shadow-sm">
                         <s.icon size={24} />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-brand-deep transition-colors">{s.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{s.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* PROCESS: THE FLOW GRID */}
        <section className="py-32 bg-brand-deep relative overflow-hidden">
           <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">Structured To <span className="text-brand-accent italic">Win.</span></h2>
                 <p className="text-white/60 text-lg max-w-xl mx-auto uppercase tracking-widest font-black text-[10px]">The Credifide Lifecycle</p>
              </div>

              <div className="grid md:grid-cols-4 gap-1 transform cursor-default">
                 {[
                   { step: '01', title: 'Review', content: 'We analyze your data for gaps and misalignments.', icon: Search },
                   { step: '02', title: 'Submission', content: 'Handled entirely by us, adhering to health plan specs.', icon: FileText },
                   { step: '03', title: 'Contracting', content: 'Assisting in optimal reimbursement rate negotiation.', icon: Gavel },
                   { step: '04', title: 'Ongoing', content: ' assistance with billing and ongoing credentialing.', icon: CheckCircle2 },
                 ].map((p, i) => (
                   <div key={i} className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-all duration-500 group border-r-0 last:border-r">
                      <div className="text-brand-accent font-black text-5xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity italic tracking-tighter">{p.step}</div>
                      <h4 className="text-2xl font-black text-white mb-6 tracking-tight">{p.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{p.content}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* SPECIALTIES: THE UNIVERSE */}
        <section className="py-32 bg-white">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                 <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">Expertise Across <span className="text-brand-deep">Specialties.</span></h2>
                 <p className="text-slate-500 font-medium">From Orthopedics to Mental Health, we navigate the specific nuances of your field.</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                 {[
                   'Physicians', 'Specialty Providers', 'Medical Groups', 'Clinics', 'Behavioral Health', 'Telehealth Organizations', 'Multi-Provider Practices', 'Healthcare Startups', 'Orthopedic', 'Mental Health', 'Internal Medicine', 'Urgent Care'
                 ].map((spec, idx) => (
                   <div key={idx} className="px-8 py-4 rounded-full border border-slate-100 text-slate-500 font-bold text-sm bg-slate-50/50 hover:bg-brand-deep hover:text-white transition-all duration-500 cursor-default">
                      {spec}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* LEAD CAPTURE FORM */}
        <section id="form" className="py-32 bg-slate-50 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-light/30 rounded-full blur-[160px] opacity-50 -z-10" />
           <div className="max-w-4xl mx-auto px-6">
              <div className="asymmetric-card p-8 md:p-20 relative overflow-hidden group">
                 {/* Internal Glow */}
                 <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />
                 
                 <div className="relative z-10">
                    <div className="text-center mb-16">
                       <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 mb-6 tracking-tight">Scale Your <span className="text-brand-deep italic">Onboarding.</span></h2>
                       <p className="text-slate-500 text-lg font-medium">Select a time that works best for your team or submit your details below.</p>
                    </div>

                    <form className="space-y-8">
                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Full Legal Name</label>
                             <input type="text" placeholder="Dr. Sarah Johnson" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-deep/5 transition-all text-sm font-bold" />
                          </div>
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Email Workspace</label>
                             <input type="email" placeholder="sarah@healthlink.com" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-deep/5 transition-all text-sm font-bold" />
                          </div>
                       </div>
                       
                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Practice Type</label>
                             <select className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-deep/5 transition-all text-sm font-bold appearance-none cursor-pointer">
                                <option>Solo Provider</option>
                                <option>Group Practice</option>
                                <option>Organization / Clinic</option>
                                <option>Telehealth Startup</option>
                             </select>
                          </div>
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Phone Contact</label>
                             <input type="tel" placeholder="+1 (321) 524-0606" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-deep/5 transition-all text-sm font-bold" />
                          </div>
                       </div>

                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Enrollment Challenges</label>
                          <textarea rows={4} placeholder="Describe your current payer enrollment or recredentialing needs..." className="w-full px-8 py-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-deep/5 transition-all text-sm font-bold resize-none"></textarea>
                       </div>

                       <button className="w-full bg-brand-deep text-white py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl shadow-brand-deep/20 hover:shadow-brand-deep/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group">
                          Call Our Experts
                          <Phone size={24} className="group-hover:rotate-[15deg] transition-transform" />
                       </button>
                    </form>

                    <div className="mt-12 flex justify-center items-center gap-10">
                       <div className="flex flex-col items-center gap-2">
                          <div className="text-2xl font-black text-slate-900 leading-none">90</div>
                          <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Day Goal</div>
                       </div>
                       <div className="h-10 w-[1px] bg-slate-100" />
                       <div className="flex flex-col items-center gap-2">
                          <div className="text-2xl font-black text-slate-900 leading-none">35%</div>
                          <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Efficiency</div>
                       </div>
                       <div className="h-10 w-[1px] bg-slate-100" />
                       <div className="flex flex-col items-center gap-2">
                          <div className="text-2xl font-black text-slate-900 leading-none">HIPAA</div>
                          <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Compliant</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* MINIMAL PREMIUM FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-16">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-12 border-b border-slate-50">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                     <IconRenderer icon={ASSETS.features.shield} size={20} />
                  </div>
                  <span className="text-xl font-black tracking-tight text-slate-900">Credifide RCM</span>
               </div>
               
               <div className="flex items-center gap-12 text-sm font-bold text-slate-400">
                  <Link to="/about" className="hover:text-brand-deep transition-colors">About</Link>
                  <Link to="/resources/blog" className="hover:text-brand-deep transition-colors">Blog</Link>
                  <Link to="/privacy" className="hover:text-brand-deep transition-colors">Privacy</Link>
                  <Link to="/terms" className="hover:text-brand-deep transition-colors">Terms</Link>
               </div>

               <div className="flex items-center gap-6">
                   <a href="#" className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-brand-deep transition-colors">
                      <IconRenderer icon={ASSETS.social.linkedin} size={20} />
                   </a>
                   <a href="#" className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-brand-deep transition-colors">
                      <IconRenderer icon={ASSETS.social.facebook} size={20} />
                   </a>
               </div>
            </div>

            <div className="pt-12 text-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] leading-loose">
                  High Precision Healthcare Operations <br />
                  © 2026 Credifide - All Insights Protected
               </p>
            </div>
         </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60]">
        <a 
          href="#form" 
          className="w-full bg-brand-deep text-white py-4 rounded-3xl font-black flex items-center justify-center gap-3 shadow-2xl shadow-brand-deep/40 active:scale-95 transition-transform"
        >
          <Zap size={18} className="text-brand-accent" />
          Talk To An Expert
        </a>
      </div>
    </div>
  );
};

export default ProviderEnrollmentLP;

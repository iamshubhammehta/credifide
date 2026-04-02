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

              {/* Right Dashboard Mockup (DETAILED & POSITIONED RIGHT) */}
              <div className="relative h-[650px] group/dash md:translate-x-12 lg:translate-x-20">
                 {/* Main Base Card - Glassmorphism */}
                 <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl border border-slate-100 rounded-[4rem] rounded-tr-[1.5rem] rotate-1 shadow-[0_50px_100px_-20px_rgba(17,51,46,0.12)] transition-transform duration-1000 group-hover/dash:rotate-0" />
                 
                 {/* Floating Card: Live Payer Feed (NEW DETAIL) */}
                 <motion.div className="absolute top-[5%] -left-8 w-60 glass-card p-5 floating-3 z-50 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                          <Activity size={16} />
                       </div>
                       <span className="text-[10px] font-black uppercase text-slate-400">Payer Feed</span>
                    </div>
                    <div className="space-y-3">
                       <div className="h-1.5 w-full bg-slate-100 rounded-full">
                          <motion.div animate={{ width: ['20%', '90%', '70%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-blue-500" />
                       </div>
                       <div className="text-[9px] font-bold text-slate-500">Syncing with Medicaid...</div>
                    </div>
                 </motion.div>

                 {/* Internal Floating Cards - Re-positioned */}
                 <motion.div className="absolute top-[25%] -right-8 w-72 glass-card p-8 floating-1 shadow-brand-deep/5 border-brand-light/20 z-40">
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

                 <motion.div className="absolute bottom-[20%] -left-12 w-64 asymmetric-card p-8 floating-2 shadow-brand-accent/10 z-30">
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

                 <motion.div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-brand-light/40 rounded-full blur-[100px] -z-10 floating-3" />
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

        {/* PROCESS: THE FLOW GRID (COOL COLOR CORRECTION) */}
        <section className="py-32 bg-[#0f3d3a] relative overflow-hidden">
           <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
           {/* Cool animated data flow lines */}
           <div className="absolute inset-0 opacity-[0.1] -z-10 bg-[radial-gradient(circle_at_center,_#A3BD6A_1px,_transparent_1px)] bg-[length:32px_32px]" />

           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">Structured To <span className="text-brand-accent italic">Win.</span></h2>
                 <p className="text-[#A3BD6A] text-lg max-w-xl mx-auto uppercase tracking-[0.5em] font-black text-[10px]">The Credifide Lifecycle</p>
              </div>

              <div className="grid md:grid-cols-4 gap-0 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
                 {[
                   { step: '01', title: 'Review', content: 'We analyze your data for gaps and misalignments.', icon: Search },
                   { step: '02', title: 'Submission', content: 'Handled entirely by us, adhering to health plan specs.', icon: FileText },
                   { step: '03', title: 'Contracting', content: 'Assisting in optimal reimbursement rate negotiation.', icon: Gavel },
                   { step: '04', title: 'Ongoing', content: ' assistance with billing and ongoing credentialing.', icon: CheckCircle2 },
                 ].map((p, i) => (
                   <motion.div 
                     key={i} 
                     whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                     className="bg-white/5 p-12 transition-all duration-500 group border-r border-white/10 last:border-r-0 relative"
                   >
                      <div className="text-[#A3BD6A] font-black text-5xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity italic tracking-tighter">{p.step}</div>
                      <h4 className="text-2xl font-black text-white mb-6 tracking-tight flex items-center gap-3">
                         {p.title}
                         <ArrowRight size={20} className="text-[#A3BD6A] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{p.content}</p>
                      
                      {/* Cool Bottom Accent */}
                      <div className="absolute bottom-0 left-0 h-1 bg-[#A3BD6A] w-0 group-hover:w-full transition-all duration-700" />
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* SPECIALTIES: ANIMATED EXPERIENCE (COOLER) */}
        <section className="py-32 bg-white relative overflow-hidden">
           <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brand-light/20 rounded-full blur-[100px] -z-10" />
           
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 tracking-tighter">
                    Expertise Across <br />
                    <span className="text-brand-deep italic">Every Specialty.</span>
                 </h2>
                 <p className="text-slate-500 font-medium max-w-xl mx-auto">From high-stakes Internal Medicine to specialized Mental Health services, we speak your clinical language.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                 {[
                   { name: 'Physicians', icon: Users }, 
                   { name: 'Dental', icon: Shield }, 
                   { name: 'Behavioral', icon: Activity }, 
                   { name: 'Urgent Care', icon: Clock }, 
                   { name: 'Telehealth', icon: Zap }, 
                   { name: 'Radiology', icon: Search },
                   { name: 'Pediatrics', icon: Users },
                   { name: 'Cardiology', icon: Activity },
                   { name: 'Orthopedic', icon: Shield },
                   { name: 'Laboratory', icon: Layers },
                   { name: 'Home Care', icon: Clock },
                   { name: 'Neurology', icon: Zap }
                 ].map((spec, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: idx * 0.05 }}
                     whileHover={{ y: -10, borderColor: '#0B6B57' }}
                     className="p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 flex flex-col items-center justify-center text-center gap-4 group transition-all duration-500 cursor-default shadow-sm hover:shadow-2xl hover:shadow-brand-deep/5"
                   >
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-brand-deep group-hover:text-white transition-all duration-500">
                         <spec.icon size={24} />
                      </div>
                      <span className="text-sm font-black text-slate-900 tracking-tight">{spec.name}</span>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* LEAD CAPTURE FORM - ULTRA MODERN ANIMATED */}
        <section id="form" className="py-32 bg-[#0a1f1c] relative overflow-hidden">
           {/* Dynamic Animated Background Mesh */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] opacity-30 select-none pointer-events-none">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A3BD6A]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
              <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-deep/40 rounded-full blur-[150px] mix-blend-screen" />
           </div>
           
           <div className="max-w-5xl mx-auto px-6 relative z-10">
              <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="relative bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-8 md:p-20 overflow-hidden shadow-[0_0_100px_rgba(11,107,87,0.1)]"
              >
                 {/* Sweep effect on card */}
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#A3BD6A] to-transparent opacity-50" />
                 
                 <div className="text-center mb-16 relative">
                    <motion.div 
                       initial={{ scale: 0.8, opacity: 0 }}
                       whileInView={{ scale: 1, opacity: 1 }}
                       transition={{ duration: 0.8, delay: 0.2 }}
                       className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-[10px] uppercase font-black tracking-[0.3em] mb-8"
                    >
                       <span className="w-2 h-2 rounded-full bg-[#A3BD6A] animate-ping" />
                       Priority Access
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
                       Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3BD6A] to-brand-light italic">Sequence.</span>
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                       Drop your coordinates below. Our system will analyze your practice matrix and initiate the onboarding protocol.
                    </p>
                 </div>

                 <form className="max-w-3xl mx-auto space-y-12">
                    <div className="grid md:grid-cols-2 gap-12">
                       {/* Animated Input Field 1 */}
                       <motion.div 
                          className="relative group"
                          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                       >
                          <input type="text" id="name" required className="w-full bg-transparent border-0 border-b-2 border-white/10 px-0 py-4 text-white text-xl font-bold focus:ring-0 focus:outline-none focus:border-[#A3BD6A] transition-colors peer placeholder-transparent" placeholder="Name" />
                          <label htmlFor="name" className="absolute left-0 top-4 text-white/30 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#A3BD6A] peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/50 uppercase tracking-widest cursor-text">Provider / Group Name</label>
                          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A3BD6A] transition-all duration-500 ease-out peer-focus:w-full" />
                       </motion.div>

                       {/* Animated Input Field 2 */}
                       <motion.div 
                          className="relative group"
                          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                       >
                          <input type="email" id="email" required className="w-full bg-transparent border-0 border-b-2 border-white/10 px-0 py-4 text-white text-xl font-bold focus:ring-0 focus:outline-none focus:border-[#A3BD6A] transition-colors peer placeholder-transparent" placeholder="Email" />
                          <label htmlFor="email" className="absolute left-0 top-4 text-white/30 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#A3BD6A] peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/50 uppercase tracking-widest cursor-text">Secure Email</label>
                          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A3BD6A] transition-all duration-500 ease-out peer-focus:w-full" />
                       </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                       {/* Custom Animated Select */}
                       <motion.div 
                          className="relative group"
                          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                       >
                          <select id="type" required className="w-full bg-transparent border-0 border-b-2 border-white/10 px-0 py-4 text-white text-xl font-bold focus:ring-0 focus:outline-none focus:border-[#A3BD6A] transition-colors peer appearance-none cursor-pointer">
                             <option value="" disabled selected hidden></option>
                             <option className="bg-[#0f3d3a] text-white">Solo Practitioner</option>
                             <option className="bg-[#0f3d3a] text-white">Group Practice</option>
                             <option className="bg-[#0f3d3a] text-white">Enterprise / Hospital</option>
                             <option className="bg-[#0f3d3a] text-white">Digital Health Startup</option>
                          </select>
                          <label htmlFor="type" className="absolute left-0 top-4 text-white/30 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#A3BD6A] peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/50 uppercase tracking-widest pointer-events-none">Practice Architecture</label>
                          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A3BD6A] transition-all duration-500 ease-out peer-focus:w-full pointer-events-none" />
                          <div className="absolute right-0 top-6 w-3 h-3 border-r-2 border-b-2 border-white/30 transform rotate-45 pointer-events-none group-hover:border-[#A3BD6A] transition-colors" />
                       </motion.div>

                       {/* Animated Input Field 4 */}
                       <motion.div 
                          className="relative group"
                          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                       >
                          <input type="tel" id="mobile" required className="w-full bg-transparent border-0 border-b-2 border-white/10 px-0 py-4 text-white text-xl font-bold focus:ring-0 focus:outline-none focus:border-[#A3BD6A] transition-colors peer placeholder-transparent" placeholder="Phone" />
                          <label htmlFor="mobile" className="absolute left-0 top-4 text-white/30 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#A3BD6A] peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/50 uppercase tracking-widest cursor-text">Direct Comms (Phone)</label>
                          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A3BD6A] transition-all duration-500 ease-out peer-focus:w-full" />
                       </motion.div>
                    </div>

                    <motion.div 
                       className="relative pt-6"
                       initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                    >
                       <button 
                          type="button" 
                          className="w-full py-8 rounded-[2rem] bg-white/5 border border-white/10 relative overflow-hidden group hover:border-[#A3BD6A]/50 transition-colors"
                       >
                          {/* Animated Button Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A3BD6A]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#A3BD6A]/10 transition-opacity duration-500 blur-xl" />
                          
                          <div className="relative z-10 flex items-center justify-center gap-4">
                             <span className="text-2xl font-black text-white tracking-widest uppercase group-hover:text-[#A3BD6A] transition-colors">
                                Authenticate & Connect
                             </span>
                             <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#A3BD6A] transition-colors duration-500 text-white group-hover:text-[#0f3d3a]">
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                             </div>
                          </div>
                       </button>
                    </motion.div>
                 </form>

                 {/* High-tech Footer Stats */}
                 <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }}
                    className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 md:gap-20"
                 >
                    {[
                       { v: '256-BIT', l: 'Encryption' },
                       { v: 'HIPAA', l: 'Compliant' },
                       { v: '0.0s', l: 'Latency' }
                    ].map((st, i) => (
                       <div key={i} className="flex flex-col items-center gap-2">
                          <div className="text-xl md:text-3xl font-black text-white/80 font-mono tracking-tighter">{st.v}</div>
                          <div className="text-[10px] font-black text-[#A3BD6A] uppercase tracking-[0.3em]">{st.l}</div>
                       </div>
                    ))}
                 </motion.div>
              </motion.div>
           </div>
        </section>
      </main>

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

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
  Layers,
  Sparkles,
  Users,
  Search,
  FileText,
  Gavel,
  Scale,
  Lock,
  Check,
  UserPlus,
  Award,
  RefreshCw,
  FileBarChart,
  Handshake,
  ClipboardList,
  FileCheck
} from 'lucide-react';
import { ASSETS, IconRenderer } from '../constants';
import { useSEO } from '../hooks/useSEO';

const ProviderEnrollmentLP: React.FC = () => {
  useSEO(
    'Provider Enrollment Excellence | Credifide',
    'Experience 98% first-submission accuracy and 30% faster provider enrollment turnaround times. We treat credentialing as infrastructure.'
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-deep selection:text-white">
      <main>
        {/* HERO: COMMAND CENTER EXPERIENCE */}
        <section className="relative pt-12 pb-0 lg:pt-16 lg:pb-0 overflow-hidden flex flex-col justify-center gap-12 lg:gap-16">
          {/* Dynamic Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-light/5 rounded-full blur-[160px]" />
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
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-black text-slate-950 leading-[1.05] mb-8">
                   Payer & Provider <br />
                   <span className="relative inline-block pl-0 py-2 mt-2">
                      <span className="relative z-10">Enrollment.</span>
                      <motion.div 
                         initial={{ scaleX: 0 }}
                         whileInView={{ scaleX: 1 }}
                         transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
                         className="absolute -bottom-1 left-0 right-10 h-3 bg-brand-accent/40 -z-0 origin-left rounded-full"
                      />
                   </span>
                </h1>
                <p className="text-[clamp(1rem,1.5vw+0.5rem,1.25rem)] text-slate-500 mb-10 max-w-lg leading-relaxed font-bold">
                   Experience 98% first-submission accuracy and 30% faster turnaround times. We treat credentialing as infrastructure, not administrative paperwork.
                </p>
                
                <div className="hidden lg:flex flex-wrap gap-4 mt-8">
                   {[
                      { icon: Shield, text: 'HIPAA Compliant' },
                      { icon: Clock, text: '30% Faster approvals' },
                      { icon: Zap, text: 'AI Validation' }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black uppercase text-slate-500 tracking-widest">
                         <item.icon size={12} className="text-brand-deep" />
                         {item.text}
                      </div>
                   ))}
                </div>
              </motion.div>

              {/* HERO FORM: REVERTED TO CLEAN PLACEMENT WITH NO SCROLLING */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20 w-full"
                id="form"
              >
                     <iframe 
                        aria-label='Book a Consultation With Our Experts' 
                        frameBorder="0" 
                        style={{ height: '1050px', width: '100%', border: 'none', overflow: 'hidden' }} 
                        scrolling="no"
                        src='https://forms.zohopublic.com/credifide1/form/BookaConsultationwithourexperts1/formperma/RIFpP_m9bbkkzpYAcOVv811Nx32ooYsAE17hBbEAdVU'
                     ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES: THE INFRASTRUCTURE */}
        <section className="pt-0 pb-12 md:pb-32 bg-white flex flex-col items-center">
           <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="text-center mb-10 md:mb-20 text-slate-900">
                 <h2 className="text-3xl md:text-6xl font-display font-black leading-tight">
                    Our Services
                 </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
                 {[
                    { title: 'Primary Source Verification', icon: FileCheck },
                    { title: 'Payer Enrollment', icon: UserPlus },
                    { title: 'CAQH Profile Management', icon: Layers },
                    { title: 'Initial Provider Credentialing', icon: Award },
                    { title: 'Recredentialing Management', icon: RefreshCw },
                    { title: 'Insurance Contracting Coordination', icon: FileBarChart },
                    { title: 'Contract Rate Negotiation', icon: Handshake },
                    { title: 'NPI Registration', icon: ClipboardList },
                 ].map((s, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.05 }}
                       whileHover={{ y: -10 }}
                       className="p-6 md:p-8 sm:p-10 rounded-3xl md:rounded-[2.5rem] bg-white border border-slate-100 hover:border-brand-deep/20 hover:shadow-[0_40px_70px_-15px_rgba(11,107,87,0.12)] group transition-all duration-700 flex flex-col items-start relative overflow-hidden cursor-default h-full"
                    >
                       {/* Subtle hover gradient */}
                       <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-deep/5 transition-colors duration-1000" />
                       
                       <div className="w-14 h-14 rounded-2xl bg-brand-light/20 flex items-center justify-center text-brand-deep mb-8 group-hover:scale-110 transition-transform duration-700 shadow-sm shrink-0">
                          <s.icon size={26} />
                       </div>
                       
                       <h4 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-brand-deep transition-colors mb-4">{s.title}</h4>
                       
                       {/* Creative Accent Bar */}
                       <div className="mt-auto flex items-center gap-2">
                          <div className="w-8 h-1 bg-brand-light/30 rounded-full group-hover:w-12 group-hover:bg-brand-accent transition-all duration-700" />
                          <div className="w-1 h-1 bg-brand-light/30 rounded-full group-hover:bg-brand-accent transition-all duration-700" />
                       </div>
                    </motion.div>
                 ))}
              </div>

              {/* MODERN SERVICE CTA CENTER */}
              <div className="mt-16">
                 <div className="bg-[#0f2e2a] rounded-[3.5rem] p-10 md:p-16 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(15,46,42,0.3)] group cursor-default">
                    {/* Animated Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] -mr-100 -mt-100 group-hover:opacity-40 transition-opacity duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-light/5 rounded-full blur-[100px] -ml-40 -mb-40 group-hover:opacity-40 transition-opacity duration-1000" />
                       <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000" 
                            style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 15px, #fff 15px, #fff 16px)" }} />
                       
                       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
                          <div className="max-w-xl">
                             <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-brand-accent/20 text-brand-accent text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mb-6 md:mb-8 border border-brand-accent/30 animate-pulse">
                                <Sparkles size={12} className="md:w-[14px] md:h-[14px]" />
                                Instant Enrollment Support
                             </div>
                             <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] mb-4 md:mb-6">
                                Schedule a Direct <br className="hidden md:block" />
                                <span className="text-brand-accent">Consultation.</span>
                             </h3>
                             <p className="text-white/40 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">Strategic Revenue Infrastructure</p>
                          </div>

                          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 shrink-0 w-full sm:w-auto">
                             <div className="flex flex-col items-center lg:items-end p-4 md:p-4 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm shadow-xl w-full sm:w-auto">
                                <div className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest md:tracking-[0.4em] mb-1">Direct Priority Access</div>
                                <div className="text-xl md:text-2xl font-black text-white">(321) 524-0606</div>
                             </div>
                             
                             <Link to="/contact" className="w-full sm:w-auto justify-center bg-[#A3BD6A] text-[#0f2e2a] px-6 md:px-10 py-5 md:py-7 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] flex items-center gap-2 md:gap-3 hover:bg-white hover:scale-105 transition-all shadow-xl shadow-brand-deep/30 group/btn relative overflow-hidden">
                                <span className="relative z-10">Book Strategy Call</span>
                                <ArrowRight size={18} className="md:w-[20px] md:h-[20px] relative z-10 group-hover/btn:translate-x-1 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                             </Link>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
        </section>

        {/* METRICS SECTION */}
        <section className="py-12 md:py-24 bg-slate-50/50 relative">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              {[
                { label: 'Submission Accuracy', value: '98%', icon: Shield, color: 'text-brand-deep' },
                { label: 'Faster Turnaround', value: '30%', icon: Zap, color: 'text-brand-accent' },
                { label: 'Real-Time Visibility', value: '100%', icon: Search, color: 'text-brand-deep' },
                { label: 'Expert Support', value: '24/7', icon: Users, color: 'text-brand-accent' },
              ].map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 sm:p-10 rounded-3xl md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col items-center group cursor-default h-full justify-center"
                >
                   <div className={`${m.color} bg-slate-50 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                      <m.icon size={20} className="md:w-[28px] md:h-[28px]" />
                   </div>
                   <div className="text-2xl md:text-4xl font-display font-black text-slate-900 mb-1 md:mb-2">{m.value}</div>
                   <div className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest md:tracking-[0.2em]">{m.label}</div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* SPECIALTIES: ANIMATED EXPERIENCE (COOLER) */}
        <section id="specialties-lp" className="py-32 bg-white relative overflow-hidden">
           <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brand-light/20 rounded-full blur-[100px] -z-10" />
           
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 tracking-tighter">
                    Expertise Across <br />
                    <span className="text-brand-deep font-black">Every Specialty.</span>
                 </h2>
                 <p className="text-slate-500 font-medium max-w-xl mx-auto">From high-stakes Internal Medicine to specialized Mental Health services, we speak your clinical language.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                 {[
                   { name: 'Orthopedic', icon: Shield },
                   { name: 'Mental Health', icon: Activity },
                   { name: 'Tele Health', icon: Zap },
                   { name: 'Physical Therapy', icon: Activity },
                   { name: 'Cardiology', icon: Activity },
                   { name: 'Internal Medicine', icon: Search },
                   { name: 'Dentistry', icon: Shield },
                   { name: 'Laboratory', icon: Layers },
                   { name: 'Urology', icon: Search },
                   { name: 'Neurology', icon: Zap },
                   { name: 'Lactation Consultant', icon: Users },
                   { name: 'Home Care', icon: Clock },
                   { name: 'Medical Equipment', icon: Layers },
                   { name: 'OBGYN', icon: Users },
                   { name: 'Urgent Care', icon: Clock }
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

        {/* PROCESS: THE FLOW GRID */}
        <section id="how-it-works" className="py-32 bg-[#0f3d3a] relative overflow-hidden">
           <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
           {/* Animated flow backdrop */}
           <div className="absolute inset-0 opacity-[0.1] -z-10 bg-[radial-gradient(circle_at_center,_#A3BD6A_1px,_transparent_1px)] bg-[length:32px_32px]" />

           <div className="max-w-7xl mx-auto px-6 relative z-10 text-slate-50">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">Structured To <span className="text-brand-accent font-black">Win.</span></h2>
                 <p className="text-[#A3BD6A] text-lg max-w-xl mx-auto uppercase tracking-[0.5em] font-black text-[10px]">The Credifide Lifecycle</p>
              </div>

              <div className="grid md:grid-cols-4 gap-0 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
                 {[
                    { step: '01', title: 'Review', content: 'We analyze your data for gaps and misalignments.', icon: Search },
                    { step: '02', title: 'Submission', content: 'Handled entirely by us, adhering to health plan specs.', icon: FileText },
                    { step: '03', title: 'Contracting', content: 'Assisting in optimal reimbursement rate negotiation.', icon: Gavel },
                    { step: '04', title: 'Ongoing', content: 'Assistance with billing and ongoing credentialing.', icon: CheckCircle2 },
                 ].map((p, i) => (
                    <motion.div 
                       key={i} 
                       whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                       className="bg-white/5 p-8 sm:p-12 transition-all duration-500 group border-b sm:border-b-0 sm:border-r border-white/10 last:border-b-0 last:border-r-0 relative"
                    >
                       <div className="text-[#A3BD6A] font-black text-5xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity tracking-tighter">{p.step}</div>
                       <h4 className="text-2xl font-black text-white mb-6 tracking-tight flex items-center gap-3">
                          {p.title}
                          <ArrowRight size={20} className="text-[#A3BD6A] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                       </h4>
                       <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors font-bold">{p.content}</p>
                      
                      {/* Cool Bottom Accent */}
                      <div className="absolute bottom-0 left-0 h-1 bg-[#A3BD6A] w-0 group-hover:w-full transition-all duration-700" />
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* WHY CREDIFIDE: THE TECH-CENTRIC ADVANTAGE (THEME SYNCED) */}
        <section className="py-32 bg-white relative overflow-hidden">
           {/* Floating Theme Accents */}
           <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div 
                 animate={{ 
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-brand-light/20 rounded-full blur-[140px]" 
              />
              <motion.div 
                 animate={{ 
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="absolute -bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px]" 
              />
              <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: "linear-gradient(#0B6B57 1px, transparent 1px), linear-gradient(90deg, #0B6B57 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
           </div>

           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
                 <div className="max-w-2xl text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-light/30 border border-brand-light text-brand-deep text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                       <Zap size={14} className="text-brand-accent" />
                       The Credifide Advantage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 leading-[1.05]">
                       Why Systems Choose <br />
                       <span className="text-brand-deep">The Credifide Core.</span>
                    </h2>
                 </div>
                 <p className="text-slate-500 font-bold max-w-sm text-sm leading-relaxed border-l-2 border-brand-accent/20 pl-8 mb-4 tracking-wider">
                    Clinical administrative excellence, powered by proprietary AI workflows and overseen by veteran specialists.
                 </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {[
                    { 
                       title: 'AI-Driven Precision', 
                       desc: 'Proprietary automated workflows designed to minimize human error and validate data pre-submission.',
                       icon: Sparkles,
                       tag: 'SMART CORE'
                    },
                    { 
                       title: 'Elite Specialists', 
                       desc: 'Dedicated oversight by veteran Insurance Credentialing experts who navigate payer nuances manually.',
                       icon: Users,
                       tag: 'EXPERT LAYER'
                    },
                    { 
                       title: 'Radical Transparency', 
                       desc: 'Real-time visibility into every application stage with clear timelines and integrated communication.',
                       icon: Search,
                       tag: 'GLASS FLOW'
                    },
                    { 
                       title: 'Architectural Scale', 
                       desc: 'Elastic solutions that scale from solo practitioners to large multi-state healthcare organizations.',
                       icon: Layers,
                       tag: 'SCALABLE'
                    },
                    { 
                       title: 'Zero-Trust Security', 
                       desc: 'HIPAA-compliant, military-grade secure systems built specifically for clinical data governance.',
                       icon: Lock,
                       tag: 'SECURE'
                    },
                    { 
                       title: 'RCM Integration', 
                       desc: 'Seamless architectural bridge between enrollment and high-velocity revenue cycle performance.',
                       icon: Activity,
                       tag: 'PERFORMANCE'
                    }
                 ].map((w, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       whileHover={{ y: -12, scale: 1.02 }}
                       className="group p-10 rounded-[3rem] bg-white border border-slate-100/80 hover:border-brand-deep/30 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(11,107,87,0.1)] transition-all duration-700 relative overflow-hidden"
                    >
                       {/* Subtle Background Glow */}
                       <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-light/10 transition-colors duration-1000" />
                       
                       <div className="text-brand-deep/40 text-[9px] font-black uppercase tracking-[0.5em] mb-6 block group-hover:text-brand-accent transition-colors">{w.tag}</div>
                       
                       <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-deep mb-8 group-hover:bg-brand-deep group-hover:text-white transition-all duration-700 shadow-sm">
                          <w.icon size={24} />
                       </div>
                       
                       <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-deep transition-colors">{w.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed font-bold group-hover:text-slate-600 transition-colors">{w.desc}</p>
                       
                       {/* Interactive Bottom Glow */}
                       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* PAYER NETWORK: THE INTEGRATION HUB EXPERIENCE */}
        <section className="py-32 bg-white relative overflow-hidden">
           {/* Modern Hub Lines Animation */}
           <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 1440 800" fill="none">
                 <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M1440 200L720 400L0 200" stroke="#0B6B57" strokeWidth="2" 
                 />
                 <motion.circle 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    cx="720" cy="400" r="10" fill="#0B6B57" 
                 />
              </svg>
           </div>

           <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="mb-24"
              >
                 <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-100 bg-slate-50 text-brand-deep text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                    <Layers size={14} />
                    Verified Global Network
                 </div>
                 <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 mb-8 tracking-tighter">
                   Get Credentialed with Leading <br />
                   <span className="text-brand-deep">Payers Nationwide.</span>
                 </h2>
                 <p className="text-slate-500 font-bold max-w-2xl mx-auto uppercase tracking-[0.4em] text-[10px]">Strategic Enrollment Infrastructure</p>
              </motion.div>

              {/* Modern Squircle Logo Grid - Optimized for attractiveness */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                 {[
                    { name: 'United Health', logo: 'https://credifide.com/wp-content/uploads/2026/03/2-1-150x150.png', color: '#002677' },
                    { name: 'Medicare', logo: 'https://credifide.com/wp-content/uploads/2026/03/3-1-150x150.png', color: '#004A99' },
                    { name: 'Carelon', logo: 'https://credifide.com/wp-content/uploads/2026/03/4-1-150x150.png', color: '#007DA3' },
                    { name: 'Tricare', logo: 'https://credifide.com/wp-content/uploads/2026/03/5-1-150x150.png', color: '#003366' },
                    { name: 'Aetna', logo: 'https://credifide.com/wp-content/uploads/2026/03/6-1-150x150.png', color: '#9D2235' },
                    { name: 'Medicaid', logo: 'https://credifide.com/wp-content/uploads/2026/03/7-1-150x150.png', color: '#00833E' },
                    { name: 'Wellcare', logo: 'https://credifide.com/wp-content/uploads/2026/03/8-1-150x150.png', color: '#0079C1' },
                    { name: 'Molina', logo: 'https://credifide.com/wp-content/uploads/2026/03/9-1-150x150.png', color: '#F15D22' },
                    { name: 'TriWest', logo: 'https://credifide.com/wp-content/uploads/2026/03/10-1-150x150.png', color: '#D21034' },
                    { name: 'Cigna', logo: 'https://credifide.com/wp-content/uploads/2026/03/11-1-150x150.png', color: '#007DA3' },
                    { name: 'Humana', logo: 'https://credifide.com/wp-content/uploads/2026/03/12-1-150x150.png', color: '#77BC1F' },
                    { name: 'Optum', logo: 'https://credifide.com/wp-content/uploads/2026/03/13-150x150.png', color: '#E87722' }
                 ].map((payer, idx) => (
                    <motion.div
                       key={idx}
                       initial={{ opacity: 0, scale: 0.8, y: 20 }}
                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
                       transition={{ delay: idx * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                       whileHover={{ 
                          y: -12, 
                          scale: 1.05,
                          boxShadow: '0 40px 80px -20px rgba(11, 107, 87, 0.15)'
                       }}
                       className="group relative bg-white aspect-square md:aspect-auto md:h-full py-8 md:min-h-[160px] rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center p-6 gap-4 transition-all duration-700 cursor-default shadow-sm overflow-hidden"
                    >
                       {/* Subtle Inner Glow */}
                       <div 
                         className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" 
                         style={{ background: `radial-gradient(circle at center, ${payer.color}, transparent 70%)` }} 
                       />
                       
                       <img 
                          src={payer.logo} 
                          alt={payer.name} 
                          className="h-20 w-auto object-contain transition-transform group-hover:scale-105 duration-700 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100" 
                       />
                       
                       <span className="text-xs font-black text-slate-700 uppercase tracking-widest leading-none group-hover:text-slate-900 transition-colors">
                          {payer.name}
                       </span>

                       {/* Interactive Badge */}
                       <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-brand-accent transition-colors" />
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* FINAL CONVERSION: GOOGLE CALENDAR BOOKING */}
        <section id="footer-form" className="py-16 md:py-32 bg-[#0f2e2a] relative overflow-hidden">
          {/* Background accents */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-light/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 30px, #A3BD6A 30px, #A3BD6A 31px)" }} />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[9px] font-black uppercase tracking-[0.3em] mb-6 animate-pulse">
                <Sparkles size={12} />
                Book Your Strategy Call
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 leading-tight">
                Schedule a Direct <br className="hidden sm:block" />
                <span className="text-brand-accent">Consultation.</span>
              </h2>
              <p className="text-white/50 font-bold max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Pick a time that works for you. Our enrollment specialists will walk you through a personalized credentialing strategy.
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8 md:mb-10"
            >
              {[
                { icon: Shield, text: 'HIPAA Compliant' },
                { icon: Clock, text: 'Same-Day Response' },
                { icon: CheckCircle2, text: 'No Obligation' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest">
                  <item.icon size={12} className="text-brand-accent" />
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* Calendar iframe wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] bg-white"
            >
              {/* Top bar decoration */}
              <div className="flex items-center gap-2 px-5 py-3 bg-slate-50 border-b border-slate-100">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
                <span className="ml-3 text-xs font-bold text-slate-400 tracking-widest uppercase">Book a Consultation — Credifide</span>
              </div>

              {/* Responsive iframe container */}
              <div className="w-full" style={{ minHeight: '600px' }}>
                <iframe
                  src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3D5F20SvOKXIzMYIX4OP8KS6otyzOJSPro24KB_w5wuJmSGCyxElRRb581nJaPooOzcfb8CAnm?gv=true"
                  title="Book a Consultation with Credifide"
                  frameBorder="0"
                  scrolling="yes"
                  style={{
                    width: '100%',
                    minHeight: '600px',
                    height: '700px',
                    border: 'none',
                    display: 'block',
                  }}
                  className="w-full"
                  allow="camera; microphone; fullscreen"
                />
              </div>
            </motion.div>

            {/* Bottom CTA line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center text-white/30 text-xs font-bold uppercase tracking-widest mt-8"
            >
              Prefer to call? Reach us directly at{' '}
              <a href="tel:+13215240606" className="text-brand-accent hover:text-white transition-colors">
                (321) 524-0606
              </a>
            </motion.p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProviderEnrollmentLP;

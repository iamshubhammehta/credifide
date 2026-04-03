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
  Scale,
  Lock,
  Check
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
      {/* MINIMAL NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
               src="https://credifide.com/wp-content/uploads/2025/03/Final-Logo2-3-26.png" 
               alt="Credifide" 
               className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
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
                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-[1.05] mb-8">
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
                <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-bold">
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

              {/* HERO FORM: REPLACED ANIMATION WITH FORM */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20"
                id="form"
              >
                  {/* Glass-styled Form Container */}
                  <div className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(11,51,46,0.15)] border border-slate-100 overflow-hidden">
                     {/* Form Header */}
                     <div className="bg-[#0f3d3a] px-8 py-5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <span className="w-2.5 h-2.5 rounded-full bg-brand-light" />
                           <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Direct Application</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-[9px] font-black uppercase tracking-widest">
                           <Lock size={12} className="text-brand-accent" />
                           256-Bit Encrypted
                        </div>
                     </div>

                     <div className="p-8">
                        <h2 className="text-2xl font-black text-slate-900 mb-2">Create Profile.</h2>
                        <p className="text-xs text-slate-400 font-bold mb-8 uppercase tracking-widest">Immediate Response Enrollment</p>
                        
                        <form className="space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="relative">
                                 <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                                 <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3.5 text-slate-900 font-bold text-sm focus:ring-2 focus:ring-brand-deep/20 focus:border-brand-deep outline-none transition-all" placeholder="John Doe" />
                              </div>
                              <div className="relative">
                                 <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Practice Name</label>
                                 <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3.5 text-slate-900 font-bold text-sm focus:ring-2 focus:ring-brand-deep/20 focus:border-brand-deep outline-none transition-all" placeholder="Clinic Name" />
                              </div>
                           </div>

                           <div className="relative">
                              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                              <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3.5 text-slate-900 font-bold text-sm focus:ring-2 focus:ring-brand-deep/20 focus:border-brand-deep outline-none transition-all" placeholder="connect@example.com" />
                           </div>

                           <div className="relative">
                              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                              <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3.5 text-slate-900 font-bold text-sm focus:ring-2 focus:ring-brand-deep/20 focus:border-brand-deep outline-none transition-all" placeholder="(555) 000-0000" />
                           </div>

                           {/* TMC Checkbox */}
                           <div className="space-y-4 pt-2">
                              <label className="flex items-start gap-3 cursor-pointer group">
                                 <div className="relative flex items-center justify-center mt-1">
                                    <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-md checked:bg-brand-deep checked:border-brand-deep transition-all cursor-pointer" />
                                    <Check size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                                 </div>
                                 <span className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-wider group-hover:text-slate-700 transition-colors">
                                    I accept the <Link to="/terms" className="text-brand-deep underline">Terms</Link> and <Link to="/privacy" className="text-brand-deep underline">Privacy Policy</Link>.
                                 </span>
                              </label>
                           </div>

                           <div className="pt-2">
                              <button type="submit" className="w-full bg-brand-deep text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#0f3d3a] hover:shadow-xl transition-all active:scale-95 group">
                                 Submit Application
                                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* METRICS SECTION */}
        <section className="py-24 bg-slate-50/50 relative">
           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
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
                  className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col items-center group cursor-default"
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
                       className="group relative bg-white aspect-[7/5] rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center p-6 gap-4 transition-all duration-700 cursor-default shadow-sm overflow-hidden"
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
                       
                       <span className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none group-hover:text-slate-800 transition-colors">
                          {payer.name}
                       </span>

                       {/* Interactive Badge */}
                       <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-brand-accent transition-colors" />
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* SERVICES: THE INFRASTRUCTURE */}
        <section className="py-32 bg-white flex flex-col items-center">
           <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-slate-900">
                 <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight">
                       Operational Infrastructure <br />
                       <span className="text-brand-deep font-black">Not Admin Paperwork.</span>
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed font-bold">
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
                       <p className="text-sm text-slate-500 leading-relaxed font-bold">{s.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* PROCESS: THE FLOW GRID */}
        <section className="py-32 bg-[#0f3d3a] relative overflow-hidden">
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
                       className="bg-white/5 p-12 transition-all duration-500 group border-r border-white/10 last:border-r-0 relative"
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

        {/* SPECIALTIES: ANIMATED EXPERIENCE (COOLER) */}
        <section className="py-32 bg-white relative overflow-hidden">
           <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brand-light/20 rounded-full blur-[100px] -z-10" />
           
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 tracking-tighter">
                    Expertise Across <br />
                    <span className="text-brand-deep font-black">Every Specialty.</span>
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

        {/* FINAL CONVERSION: THE BOTTOM FORM */}
        <section id="footer-form" className="py-32 bg-slate-50 relative overflow-hidden">
           <div className="max-w-4xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                 <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-light/30 border border-brand-light/50 text-brand-deep text-[10px] font-black uppercase tracking-widest mb-6">
                    <Sparkles size={14} />
                    Final Step to Clinical Success
                 </div>
                 <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4">Start Your Enrollment.</h2>
                 <p className="text-slate-500 font-bold max-w-xl mx-auto">Fill out the form below and our team will be in touch within 24 hours.</p>
              </div>

              <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
                 <div className="p-8 md:p-16">
                    <form className="space-y-8">
                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="relative">
                             <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Full Name</label>
                             <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-brand-deep/20 outline-none transition-all" placeholder="John Doe" />
                          </div>
                          <div className="relative">
                             <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Practice Name</label>
                             <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-brand-deep/20 outline-none transition-all" placeholder="Practice Name" />
                          </div>
                       </div>

                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="relative">
                             <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Email Address</label>
                             <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-brand-deep/20 outline-none transition-all" placeholder="john@example.com" />
                          </div>
                          <div className="relative">
                             <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Phone Number</label>
                             <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-brand-deep/20 outline-none transition-all" placeholder="(555) 000-0000" />
                          </div>
                       </div>

                       <div className="space-y-6">
                          <label className="flex items-start gap-4 cursor-pointer group">
                             <div className="relative flex items-center justify-center mt-1">
                                <input type="checkbox" required className="peer appearance-none w-6 h-6 border-2 border-slate-200 rounded-lg checked:bg-brand-deep checked:border-brand-deep transition-all cursor-pointer" />
                                <Check size={16} className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                             </div>
                             <span className="text-xs font-bold text-slate-500 leading-relaxed group-hover:text-slate-800 transition-colors">
                                I accept the <Link to="/terms" className="text-brand-deep underline">Terms & Conditions</Link> and agree to receive follow-up communication regarding my enrollment request.
                             </span>
                          </label>
                       </div>

                       <button type="submit" className="w-full bg-brand-deep text-white py-6 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-[#0f1f1d] hover:shadow-2xl transition-all active:scale-[0.98] group">
                          Complete Application
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                    </form>
                 </div>
              </div>
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

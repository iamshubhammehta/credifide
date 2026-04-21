import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FileCheck,
  Bone,
  Brain,
  Video,
  Accessibility,
  HeartPulse,
  Plus,
  Smile,
  FlaskConical,
  Stethoscope,
  Baby,
  Home,
  User,
  Heart
} from 'lucide-react';
import { ASSETS, IconRenderer } from '../constants';
import defaultLogo from '../assets/logo_main.png';
import { PAYERS } from '../data/payers';
import { useSEO } from '../hooks/useSEO';

// Responsive Zoho Form: TOTAL CENTERING & NO-BOX DESKTOP
// Renders form at a safe width (680px) and shrinks it to fit, while keeping it perfectly in the middle.
const ResponsiveZohoForm = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = React.useState(680);
    const [isMobileViewport, setIsMobileViewport] = React.useState(window.innerWidth < 768);
    const BASE_WIDTH = 680;
    const BASE_HEIGHT = 790; // Tightened height to remove bottom white gap

    React.useEffect(() => {
        const el = containerRef.current;

        const update = () => {
            setIsMobileViewport(window.innerWidth < 768);
            if (!el) return;
            // Subtract a small buffer (40px) on mobile to ensure it doesn't touch screen edges
            const w = el.offsetWidth;
            const availableWidth = window.innerWidth < 768 ? w - 20 : w;
            if (availableWidth > 0) setContainerWidth(availableWidth);
        };
        
        update();
        const obs = new ResizeObserver(update);
        if (el) obs.observe(el);
        window.addEventListener('resize', update);
        return () => { obs.disconnect(); window.removeEventListener('resize', update); };
    }, []);

    // MOBILE VIEW: Straight vertical, 100% width, no scaling
    if (isMobileViewport) {
        return (
            <div className="w-full">
                <iframe
                    aria-label="Book a Consultation With Our Experts"
                    frameBorder="0"
                    scrolling="no"
                    src="https://forms.zohopublic.com/credifide1/form/BookaConsultationwithourexperts1/formperma/RIFpP_m9bbkkzpYAcOVv811Nx32ooYsAE17hBbEAdVU"
                    title="Zoho Contact Form"
                    style={{
                        width: '100%',
                        height: '950px', 
                        border: 'none',
                        backgroundColor: 'transparent'
                    }}
                />
            </div>
        );
    }

    // DESKTOP VIEW: Locked-in Perfect Centering
    const scale = Math.min(1, containerWidth / BASE_WIDTH);
    const isDesktop = scale === 1;

    return (
        <div ref={containerRef} className="w-full flex justify-center items-start overflow-visible">
            <div
                style={{
                    width: BASE_WIDTH * scale,
                    height: BASE_HEIGHT * scale,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: isDesktop ? '0' : '1.5rem',
                    backgroundColor: isDesktop ? 'transparent' : 'white',
                    boxShadow: isDesktop ? 'none' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-out'
                }}
            >
                <iframe
                    aria-label="Book a Consultation With Our Experts"
                    frameBorder="0"
                    scrolling="no"
                    src="https://forms.zohopublic.com/credifide1/form/BookaConsultationwithourexperts1/formperma/RIFpP_m9bbkkzpYAcOVv811Nx32ooYsAE17hBbEAdVU"
                    title="Zoho Contact Form"
                    style={{
                        width: BASE_WIDTH,
                        height: BASE_HEIGHT,
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: `translateX(-50%) scale(${scale})`,
                        transformOrigin: 'top center',
                        border: 'none',
                        backgroundColor: 'transparent'
                    }}
                />
            </div>
        </div>
    );
};

const SERVICES_LIST = [
  { title: 'Primary Source Verification', icon: FileCheck },
  { title: 'Payer Enrollment', icon: UserPlus },
  { title: 'CAQH Profile Management', icon: Layers },
  { title: 'Initial Provider Credentialing', icon: Award },
  { title: 'Recredentialing Management', icon: RefreshCw },
  { title: 'Insurance Contracting Coordination', icon: FileBarChart },
  { title: 'Contract Rate Negotiation', icon: Handshake },
  { title: 'NPI Registration', icon: ClipboardList },
];

const ProviderEnrollmentLP: React.FC = () => {
  const [isServicesPaused, setIsServicesPaused] = React.useState(false);
  const [servicePage, setServicePage] = React.useState(0);
  const [isWhyChoosePaused, setIsWhyChoosePaused] = React.useState(false);
  const [activePausedSpecRows, setActivePausedSpecRows] = React.useState<number[]>([]);
  const servicesScrollRef = React.useRef<HTMLDivElement>(null);
  const whyChooseScrollRef = React.useRef<HTMLDivElement>(null);
  const specScrollRefs = [
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null)
  ];

  // Auto-flip for Services Grid (Mobile Only)
  React.useEffect(() => {
    if (window.innerWidth >= 640 || isServicesPaused) return;
    const interval = setInterval(() => {
      setServicePage(prev => (prev === 0 ? 1 : 0));
    }, 4000); 
    return () => clearInterval(interval);
  }, [isServicesPaused]);

  // Auto-swipe for Why Choose Carousel (Mobile Only)
  React.useEffect(() => {
    if (window.innerWidth >= 640 || isWhyChoosePaused) return;
    const interval = setInterval(() => {
       const el = whyChooseScrollRef.current;
       if (!el) return;
       const { scrollLeft, scrollWidth, clientWidth } = el;
       
       if (scrollLeft >= scrollWidth - clientWidth - 20) {
         el.scrollTo({ left: 0, behavior: 'smooth' });
       } else {
         const moveAmount = clientWidth * 0.85 + 16;
         el.scrollBy({ left: moveAmount, behavior: 'smooth' });
       }
    }, 2800); // Slightly slower for readability
    return () => clearInterval(interval);
  }, [isWhyChoosePaused]);

  // Auto-swipe for Specialties Rows (Mobile Only)
  React.useEffect(() => {
    if (window.innerWidth >= 640) return;

    const interval = setInterval(() => {
      specScrollRefs.forEach((ref, idx) => {
        if (activePausedSpecRows.includes(idx)) return;
        const el = ref.current;
        if (!el) return;
        
        const { scrollLeft, scrollWidth, clientWidth } = el;
        
        // LOOP LOGIC: 
        // If we're near the end, reset to the beginning.
        if (scrollLeft >= scrollWidth - clientWidth - 20) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: clientWidth * 0.7 + 12, behavior: 'smooth' });
        }
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [activePausedSpecRows]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useSEO(
    'Healthcare Provider Enrollment & Payer Credentialing | Credifide',
    'Experience 98% first-submission accuracy and 30% faster provider enrollment turnaround times. Credifide treats credentialing as mission-critical infrastructure for healthcare practices.',
    '/provider-enrollment/',
    undefined,
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Healthcare Provider Enrollment & Insurance Credentialing',
      'description': 'End-to-end provider enrollment services, including primary source verification, payer application management, and CAQH maintenance with 98% first-submission accuracy.',
      'provider': {
        '@type': 'Organization',
        'name': 'Credifide',
        'url': 'https://credifide.com'
      },
      'serviceType': 'Healthcare Administrative Services',
      'areaServed': 'US',
      'offers': {
        '@type': 'Offer',
        'description': 'Expert provider enrollment and payer contracting coordination.'
      }
    }
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-deep selection:text-white">
      <main>
        {/* HERO: COMMAND CENTER EXPERIENCE */}
        <section className="relative pt-8 lg:pt-12 pb-0 overflow-x-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-light/5 rounded-full blur-[160px]" />
             <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px]" />
             <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#11332E 1px, transparent 1px), linear-gradient(90deg, #11332E 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-6 md:mb-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center min-h-[auto] lg:min-h-[calc(100vh-120px)]">
              {/* Text Side - Vertically Centered */}
              <div className="flex flex-col justify-center lg:sticky lg:top-24 sm:py-12 lg:py-0 order-2 lg:order-1">
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
                  <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-black text-slate-950 leading-[1.05] mb-4 md:mb-8">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-2">
                     {[
                        { icon: Shield, text: '98% First-Submission Accuracy' },
                        { icon: Search, text: '100% Real-Time Visibility' },
                        { icon: Sparkles, text: 'AI-Powered Precision' },
                        { icon: Clock, text: '30% Faster Turnaround Times' },
                        { icon: Users, text: 'Dedicated Credentialing Specialist' },
                        { icon: Lock, text: 'HIPAA-Compliant & Secure' },
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 py-2">
                           <div className="w-5 h-5 rounded-full bg-brand-deep/10 flex items-center justify-center shrink-0">
                              <item.icon size={12} className="text-brand-deep" />
                           </div>
                           <span className="text-sm font-bold text-slate-700 leading-tight">{item.text}</span>
                        </div>
                     ))}
                  </div>
                </motion.div>
              </div>

              {/* HERO FORM: CLEAN FLOATING LOOK */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20 w-full order-1 lg:order-2"
                id="form"
              >
                  <ResponsiveZohoForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES: THE INFRASTRUCTURE */}
        <section className="pt-2 md:pt-10 pb-6 md:pb-20 bg-white flex flex-col items-center">
           <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="text-center mb-4 md:mb-10 text-slate-900">
                 <h2 className="text-3xl md:text-6xl font-display font-black leading-tight">
                    Our Services
                 </h2>
              </div>

               <div className="w-full">
                {/* UNIFIED VIEW: Static Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
                  {SERVICES_LIST.map((s, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="p-8 rounded-[2.5rem] bg-white border border-slate-100 md:hover:-translate-y-2 md:hover:border-brand-deep/20 md:hover:shadow-[0_40px_70px_-15px_rgba(11,107,87,0.12)] group transition-all duration-700 flex flex-col items-start relative overflow-hidden cursor-default h-full"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/5 rounded-full blur-3xl -mr-16 -mt-16 md:group-hover:bg-brand-deep/5 transition-colors duration-1000" />
                      <div className="w-14 h-14 rounded-2xl bg-brand-light/20 flex items-center justify-center text-brand-deep mb-8 md:group-hover:scale-110 transition-transform duration-700 shadow-sm shrink-0">
                        <s.icon size={26} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 leading-tight md:group-hover:text-brand-deep transition-colors mb-4">{s.title}</h4>
                      <div className="mt-auto flex items-center gap-2">
                        <div className="w-8 h-1 bg-brand-light/30 rounded-full md:group-hover:w-12 md:group-hover:bg-brand-accent transition-all duration-700" />
                        <div className="w-1 h-1 bg-brand-light/30 rounded-full md:group-hover:bg-brand-accent transition-all duration-700" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* GOOGLE CALENDAR EMBED (Replaces Modern CTA) */}
              <div className="mt-8 md:mt-14 w-full bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 p-2 md:p-4">
                 <iframe
                   src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3D5F20SvOKXIzMYIX4OP8KS6otyzOJSPro24KB_w5wuJmSGCyxElRRb581nJaPooOzcfb8CAnm?gv=true"
                   title="Book a Consultation with Credifide"
                   frameBorder="0"
                   scrolling="yes"
                   style={{
                     width: '100%',
                     minHeight: '650px',
                     height: '100%',
                     border: 'none',
                     display: 'block',
                   }}
                   allow="camera; microphone; fullscreen"
                 />
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
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 sm:p-10 rounded-3xl md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col items-center group cursor-default h-full justify-center"
                >
                   <div className={`${m.color} bg-slate-50 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center mb-2 md:mb-6 group-hover:scale-110 transition-transform`}>
                      <m.icon size={20} className="md:w-[28px] md:h-[28px]" />
                   </div>
                   <div className="text-2xl md:text-4xl font-display font-black text-slate-900 mb-1 md:mb-2">{m.value}</div>
                   <div className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest md:tracking-[0.2em]">{m.label}</div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* SPECIALTIES: ANIMATED EXPERIENCE (COOLER) */}
        <section id="specialties-lp" className="py-10 md:py-32 bg-white relative overflow-hidden">
           <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brand-light/20 rounded-full blur-[100px] -z-10" />
           
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-8 md:mb-24">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-4 md:mb-8 tracking-tighter">
                    Expertise Across <br />
                    <span className="text-brand-deep font-black">Every Specialty.</span>
                 </h2>
                 <p className="text-slate-500 font-medium max-w-xl mx-auto">From high-stakes Internal Medicine to specialized Mental Health services, we speak your clinical language.</p>
              </div>

               {/* SPECIALTIES GRID: UNIFIED */}
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    { name: 'Orthopedic', icon: Bone },
                    { name: 'Mental Health', icon: Brain },
                    { name: 'Tele Health', icon: Video },
                    { name: 'Physical Therapy', icon: Accessibility },
                    { name: 'Cardiology', icon: HeartPulse },
                    { name: 'Internal Medicine', icon: Plus },
                    { name: 'Dentistry', icon: Smile },
                    { name: 'Laboratory', icon: FlaskConical },
                    { name: 'Urology', icon: Stethoscope },
                    { name: 'Neurology', icon: Brain },
                    { name: 'Lactation Consultant', icon: Baby },
                    { name: 'Home Care', icon: Home },
                    { name: 'Medical Equipment', icon: Stethoscope },
                    { name: 'OBGYN', icon: User },
                    { name: 'Urgent Care', icon: Heart }
                  ].map((spec, idx) => (
                     <motion.div 
                       key={idx}
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.05 }}
                       className="p-4 md:p-5 rounded-2xl border border-slate-100 bg-white flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-3 md:gap-4 group transition-all duration-500 cursor-default shadow-sm md:hover:-translate-y-1 md:hover:border-[#0B6B57] md:hover:shadow-[0_20px_40px_-15px_rgba(11,107,87,0.1)]"
                     >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-deep md:group-hover:bg-brand-deep md:group-hover:text-white transition-all duration-500 shrink-0">
                           <spec.icon className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                        </div>
                        <span className="text-[12px] md:text-[13px] font-black text-slate-800 tracking-tight leading-tight">{spec.name}</span>
                     </motion.div>
                  ))}
               </div>
           </div>
        </section>

        {/* PROCESS: THE FLOW GRID */}
        <section id="how-it-works" className="py-10 md:py-32 bg-[#0f3d3a] relative overflow-hidden">
           <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
           {/* Animated flow backdrop */}
           <div className="absolute inset-0 opacity-[0.1] -z-10 bg-[radial-gradient(circle_at_center,_#A3BD6A_1px,_transparent_1px)] bg-[length:32px_32px]" />

           <div className="max-w-7xl mx-auto px-6 relative z-10 text-slate-50">
              <div className="text-center mb-10 md:mb-24">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-3 md:mb-6">Structured To <span className="text-brand-accent font-black">Win.</span></h2>
                 <p className="text-[#A3BD6A] text-lg max-w-xl mx-auto uppercase tracking-[0.5em] font-black text-[10px]">The Credifide Lifecycle</p>
              </div>

              <div className="grid md:grid-cols-4 gap-0 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
                 {[
                    { title: 'Review', content: 'We analyze your data for gaps and misalignments.', icon: Search },
                    { title: 'Submission', content: 'Handled entirely by us, adhering to health plan specs.', icon: FileText },
                    { title: 'Contracting', content: 'Assisting in optimal reimbursement rate negotiation.', icon: Gavel },
                    { title: 'Ongoing', content: 'Assistance with billing and ongoing credentialing.', icon: CheckCircle2 },
                 ].map((p, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       className="bg-white/5 md:hover:bg-white/10 p-8 sm:p-12 transition-all duration-500 group border-b sm:border-b-0 sm:border-r border-white/10 last:border-b-0 last:border-r-0 relative"
                    >
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
        <section className="py-10 md:py-32 bg-white relative overflow-hidden">
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
              <div className="flex flex-col lg:flex-row items-end justify-between mb-10 md:mb-24 gap-8">
                 <div className="max-w-2xl text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-light/30 border border-brand-light text-brand-deep text-[10px] font-black uppercase tracking-[0.4em] mb-4 md:mb-8">
                       <Zap size={14} className="text-brand-accent" />
                       The Credifide Advantage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 leading-[1.05]">
                       Why Practices Choose <br />
                       <span className="text-brand-deep">The Credifide Core.</span>
                    </h2>
                 </div>
                 <p className="text-slate-500 font-bold max-w-sm text-sm leading-relaxed border-l-0 md:border-l-2 border-brand-accent/20 pl-0 md:pl-8 mt-4 md:mt-0 mb-4 tracking-wider">
                    Clinical administrative excellence, powered by proprietary AI workflows and overseen by veteran specialists.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-visible">
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
                       className="group p-8 sm:p-10 rounded-[3rem] bg-white border border-slate-100/80 md:hover:-translate-y-3 md:hover:scale-[1.02] md:hover:border-brand-deep/30 shadow-sm md:hover:shadow-[0_40px_80px_-20px_rgba(11,107,87,0.1)] transition-all duration-700 relative overflow-hidden flex flex-col h-full cursor-default"
                    >
                       {/* Subtle Background Glow */}
                       <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/5 rounded-full blur-3xl -mr-16 -mt-16 md:group-hover:bg-brand-light/10 transition-colors duration-1000" />
                       
                       <div className="text-brand-deep/40 text-[9px] font-black uppercase tracking-[0.5em] mb-6 block md:group-hover:text-brand-accent transition-colors">{w.tag}</div>
                       
                       <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-deep mb-8 md:group-hover:bg-brand-deep md:group-hover:text-white transition-all duration-700 shadow-sm">
                          <w.icon size={24} />
                       </div>
                       
                       <h4 className="text-xl font-bold text-slate-900 mb-4 md:group-hover:text-brand-deep transition-colors">{w.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed font-bold md:group-hover:text-slate-600 transition-colors">{w.desc}</p>
                       
                       {/* Interactive Bottom Glow */}
                       <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-deep/5 md:group-hover:bg-brand-accent transition-colors duration-700" />
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* PAYER NETWORK: THE INTEGRATION HUB EXPERIENCE */}
        <section className="py-10 md:py-32 bg-white relative overflow-hidden">
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
                 className="mb-10 md:mb-24"
              >
                 <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-100 bg-slate-50 text-brand-deep text-[10px] font-black uppercase tracking-[0.3em] mb-4 md:mb-8">
                    <Layers size={14} />
                    Verified Payer Network
                 </div>
                 <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 mb-4 md:mb-8 tracking-tighter">
                   Get Credentialed with Leading <br />
                   <span className="text-brand-deep">Payers Nationwide.</span>
                 </h2>
                 <p className="text-slate-500 font-bold max-w-2xl mx-auto uppercase tracking-[0.4em] text-[10px]">Strategic Enrollment Infrastructure</p>
              </motion.div>

              {/* Premium Static Logo Grid - Optimized for clarity and elegance */}
               <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto py-8 md:py-12 px-2 md:px-0">
                  {PAYERS.map((payer, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative bg-white aspect-square md:aspect-auto md:h-full py-4 md:py-8 md:min-h-[160px] rounded-2xl md:rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center p-3 md:p-6 gap-2 md:gap-4 hover:border-brand-deep/20 transition-all duration-700 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(11,107,87,0.1)] overflow-hidden"
                     >
                        <div className="relative w-full h-12 md:h-20 flex items-center justify-center overflow-hidden">
                           <img 
                              src={payer.logo} 
                              alt={payer.name} 
                              className="h-full w-auto object-contain transition-transform group-hover:scale-110 duration-700 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" 
                              onError={(e) => { e.currentTarget.src = defaultLogo; }}
                           />
                        </div>
                        <span className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.1em] md:tracking-[0.2em] group-hover:text-slate-900 transition-colors text-center px-1">
                           {payer.name}
                        </span>
                     </motion.div>
                  ))}
               </div>
           </div>
        </section>

        {/* FINAL CONVERSION: MODERN SERVICE CTA CENTER (Moved to Bottom) */}
        <section className="py-12 md:py-24 bg-white flex flex-col items-center">
           <div className="max-w-7xl mx-auto px-6 w-full">
                 <div className="bg-[#0f2e2a] rounded-[3.5rem] p-6 md:p-16 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(15,46,42,0.3)] group cursor-default">
                    {/* Animated Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] -mr-100 -mt-100 group-hover:opacity-40 transition-opacity duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-light/5 rounded-full blur-[100px] -ml-40 -mb-40 group-hover:opacity-40 transition-opacity duration-1000" />
                       <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000" 
                            style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 15px, #fff 15px, #fff 16px)" }} />
                       
                       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
                          <div className="max-w-xl">
                             <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-brand-accent/20 text-brand-accent text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mb-4 md:mb-8 border border-brand-accent/30 animate-pulse">
                                <Sparkles size={12} className="md:w-[14px] md:h-[14px]" />
                                Instant Enrollment Support
                             </div>
                             <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] mb-2 md:mb-6">
                                Schedule a Direct <br className="hidden md:block" />
                                <span className="text-brand-accent">Consultation.</span>
                             </h3>
                             <p className="text-white/40 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">Strategic Revenue Infrastructure</p>
                          </div>

                          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 shrink-0 w-full sm:w-auto">
                             <div className="flex flex-col items-center lg:items-end p-4 md:p-4 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm shadow-xl w-full sm:w-auto">
                                <div className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest md:tracking-[0.4em] mb-1">Direct Priority Access</div>
                                <a href="tel:3215240606" className="text-xl md:text-2xl font-black text-white hover:text-brand-accent transition-colors">
                                  (321) 524-0606
                                </a>
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
        </section>
    </div>
  );
};

export default ProviderEnrollmentLP;






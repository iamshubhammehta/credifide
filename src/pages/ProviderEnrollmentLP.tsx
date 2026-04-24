import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Activity, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Sparkles,
  Users,
  Search,
  FileText,
  Gavel,
  Lock,
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
import defaultLogo from '../assets/logo_main.png';
import { PAYERS } from '../data/payers';
import { useSEO } from '../hooks/useSEO';

// Responsive Zoho Form: TOTAL CENTERING & NO-BOX DESKTOP
// Renders form at a safe width (680px) and shrinks it to fit, while keeping it perfectly in the middle.
const ResponsiveZohoForm = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = React.useState(680);
    const [isMobileViewport, setIsMobileViewport] = React.useState(window.innerWidth < 768);
    const BASE_WIDTH = 540;
    const BASE_HEIGHT = 540; // Reduced height to match top spacing at the bottom

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
                        height: '780px', 
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
                    borderRadius: '1.5rem',
                    backgroundColor: 'white',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
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

const ProviderEnrollmentLP: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [servicePage, setServicePage] = React.useState(0);
  const [serviceFlipping, setServiceFlipping] = React.useState(false);
  const [isServicesPaused, setIsServicesPaused] = React.useState(false);
  const [isWhyChoosePaused, setIsWhyChoosePaused] = React.useState(false);
  const [activePausedSpecRows, setActivePausedSpecRows] = React.useState<number[]>([]);
  const whyChooseScrollRef = React.useRef<HTMLDivElement>(null);
  const specScrollRefs = [
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null)
  ];

  // SEO Optimization
  useSEO(
    "Provider Enrollment Excellence | Credifide",
    "Expert healthcare provider enrollment and insurance credentialing services. Maximize practice revenue and eliminate administrative friction with Credifide's AI-powered enrollment core.",
    "/provider-enrollment/",
    undefined,
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Healthcare Provider Enrollment",
      "provider": {
        "@type": "Organization",
        "name": "Credifide"
      },
      "description": "Professional managed provider enrollment and insurance credentialing for medical practices.",
      "areaServed": "US",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Enrollment Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Insurance Credentialing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medicare/Medicaid Enrollment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CAQH Profile Management" } }
        ]
      }
    }
  );

  // Auto-flip for Services (Mobile Only)
  React.useEffect(() => {
    if (window.innerWidth >= 640 || isServicesPaused) return;
    const interval = setInterval(() => {
      setServiceFlipping(true);
      setTimeout(() => {
        setServicePage(prev => (prev === 0 ? 1 : 0));
        setServiceFlipping(false);
      }, 600);
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
    'Provider Enrollment Excellence | Credifide',
    'Experience 98% first-submission accuracy and 30% faster provider enrollment turnaround times. We treat credentialing as infrastructure.'
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-deep selection:text-white">
      {/* 3D Flip Styles & iPhone Flicker Fix */}
      <style>{`
        .perspective-1000 { perspective: 1000px; -webkit-perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; }
        .backface-hidden { 
          backface-visibility: hidden; 
          -webkit-backface-visibility: hidden; 
          transform: translate3d(0,0,0);
          -webkit-transform: translate3d(0,0,0);
        }
        .rotate-y-180 { transform: rotateY(180deg); -webkit-transform: rotateY(180deg); }
        .no-tap-highlight { -webkit-tap-highlight-color: transparent; }
        .will-change-transform { will-change: transform; }
      `}</style>
      <main>
        {/* HERO: COMMAND CENTER EXPERIENCE */}
        <section className="relative pt-4 lg:pt-6 pb-4 md:pb-6 overflow-x-hidden bg-slate-50/80 shadow-sm">
          {/* Dynamic Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-light/5 rounded-full blur-[160px]" />
             <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px]" />
             <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#11332E 1px, transparent 1px), linear-gradient(90deg, #11332E 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-4 md:mb-6">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start min-h-[auto] lg:min-h-[calc(100vh-160px)] pt-2 lg:pt-4">
              {/* Text Side - Vertically Centered */}
              <div className="flex flex-col justify-start lg:sticky lg:top-24 sm:py-12 lg:py-0 order-1 lg:order-1">
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-light/50 bg-brand-light/20 text-brand-deep text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                     <Zap size={14} />
                     Unified Healthcare Provider Enrollment
                  </div>
                  <h1 className="text-[clamp(1.6rem,3.6vw,2.6rem)] font-display font-black text-slate-950 leading-[1.1] mb-6 md:mb-10">
                     <span className="block md:whitespace-nowrap">Your Partner for</span>
                     <span className="block md:whitespace-nowrap">Fast and Reliable</span>
                     <span className="block md:whitespace-nowrap">Provider Enrollment.</span>
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mt-2">
                     {[
                        { icon: Shield, text: '98% First-Submission Accuracy' },
                        { icon: Search, text: '100% Real-Time Visibility' },
                        { icon: Sparkles, text: 'AI-Powered Precision' },
                        { icon: Clock, text: '30% Faster Turnaround Times' },
                        { icon: Users, text: 'Dedicated Enrollment Specialist' },
                        { icon: Lock, text: 'HIPAA-Compliant & Secure' },
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 py-1">
                           <div className="w-6 h-6 rounded-full bg-brand-deep/10 flex items-center justify-center shrink-0">
                              <item.icon size={13} className="text-brand-deep" />
                           </div>
                            <span className="text-sm font-bold text-slate-700 leading-tight">{item.text}</span>
                        </div>
                     ))}
                  </div>
                </div>
              </div>

              {/* HERO FORM: CLEAN FLOATING LOOK */}
                <div 
                  className="relative z-20 w-full order-2 lg:order-2"
                  id="form"
                >
                  <ResponsiveZohoForm />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES: THE INFRASTRUCTURE */}
        <section className="pt-6 md:pt-8 pb-6 md:pb-10 bg-white flex flex-col items-center">
           <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="text-center mb-4 md:mb-10 text-slate-900">
                 <h2 className="text-3xl md:text-6xl font-display font-black leading-tight">
                    Our Services
                 </h2>
              </div>

               {/* MOBILE: Flip Grid (4x4) */}
               <div className="block sm:hidden w-full px-2 mb-8 h-[520px] perspective-1000 no-tap-highlight">
                  <div
                    className="relative w-full h-full preserve-3d will-change-transform"
                  >
                    {/* Front Side (First 4) */}
                    <div className="absolute inset-0 backface-hidden grid grid-cols-2 gap-3">
                      {[
                        { title: 'Primary Source Verification', icon: FileCheck },
                        { title: 'Payer Enrollment', icon: UserPlus },
                        { title: 'CAQH Profile Management', icon: Layers },
                        { title: 'Initial Provider Credentialing', icon: Award },
                      ].map((s, i) => (
                        <div 
                          key={i}
                          className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col items-start h-[200px] backface-hidden"
                        >
                           <div className="w-10 h-10 rounded-xl bg-brand-light/20 flex items-center justify-center text-brand-deep mb-4 shrink-0">
                              <s.icon size={20} />
                           </div>
                           <h4 className="text-[15px] font-bold text-slate-900 leading-tight mb-2">{s.title}</h4>
                        </div>
                      ))}
                    </div>

                    {/* Back Side (Next 4) */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 grid grid-cols-2 gap-3">
                      {[
                        { title: 'Recredentialing Management', icon: RefreshCw },
                        { title: 'Insurance Contracting Coordination', icon: FileBarChart },
                        { title: 'Contract Rate Negotiation', icon: Handshake },
                        { title: 'NPI Registration', icon: ClipboardList },
                      ].map((s, i) => (
                        <div 
                          key={i}
                          className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col items-start h-[200px] backface-hidden"
                        >
                           <div className="w-10 h-10 rounded-xl bg-brand-light/20 flex items-center justify-center text-brand-deep mb-4 shrink-0">
                              <s.icon size={20} />
                           </div>
                           <h4 className="text-[15px] font-bold text-slate-900 leading-tight mb-2">{s.title}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Page Indicator */}
                  <div className="flex justify-center gap-2 mt-4">
                    <div className={`w-8 h-1 rounded-full transition-all duration-300 ${servicePage === 0 ? 'bg-brand-deep w-12' : 'bg-slate-200'}`} />
                    <div className={`w-8 h-1 rounded-full transition-all duration-300 ${servicePage === 1 ? 'bg-brand-deep w-12' : 'bg-slate-200'}`} />
                  </div>
               </div>

               {/* DESKTOP: Static Grid */}
               <div 
                className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-10 items-stretch"
              >
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
                    <div 
                       key={i} 
                       className="p-5 md:p-6 rounded-3xl bg-white border border-slate-100 hover:border-brand-deep/20 hover:shadow-[0_30px_60px_-12px_rgba(11,107,87,0.1)] group transition-all duration-500 flex flex-col items-start relative overflow-hidden cursor-default"
                    >
                       <div className="absolute top-0 right-0 w-20 h-20 bg-brand-light/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-brand-deep/5 transition-colors duration-1000" />
                       <div className="w-11 h-11 rounded-xl bg-brand-light/15 flex items-center justify-center text-brand-deep mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm shrink-0">
                          <s.icon size={20} />
                       </div>
                       <h4 className="text-[17px] font-bold text-slate-900 leading-tight group-hover:text-brand-deep transition-colors">{s.title}</h4>
                    </div>
                 ))}
              </div>

              {/* MODERN SERVICE CTA CENTER */}
              <div className="mt-8">
                 <div className="bg-[#0f2e2a] rounded-[3.5rem] p-6 md:p-16 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(15,46,42,0.3)] group cursor-default">
                    {/* Animated Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] -mr-100 -mt-100 group-hover:opacity-40 transition-opacity duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-light/5 rounded-full blur-[100px] -ml-40 -mb-40 group-hover:opacity-40 transition-opacity duration-1000" />
                       <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000" 
                            style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 15px, #fff 15px, #fff 16px)" }} />
                       
                       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
                          <div className="max-w-xl">
                             <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-brand-accent/20 text-brand-accent text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mb-3 md:mb-6 border border-brand-accent/30 animate-pulse">
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
        <section className="py-6 md:py-12 bg-slate-50/50 relative">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              {[
                { label: 'Submission Accuracy', value: '98%', icon: Shield, color: 'text-brand-deep' },
                { label: 'Faster Turnaround', value: '30%', icon: Zap, color: 'text-brand-accent' },
                { label: 'Real-Time Visibility', value: '100%', icon: Search, color: 'text-brand-deep' },
                { label: 'Expert Support', value: '24/7', icon: Users, color: 'text-brand-accent' },
              ].map((m, i) => (
                <div 
                   key={i}
                   style={{ willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
                   className="bg-white p-6 sm:p-10 rounded-3xl md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col items-center group cursor-default h-full justify-center"
                >
                   <div className={`${m.color} bg-slate-50 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center mb-2 md:mb-6 group-hover:scale-110 transition-transform`}>
                      <m.icon size={20} className="md:w-[28px] md:h-[28px]" />
                   </div>
                   <div className="text-2xl md:text-4xl font-display font-black text-slate-900 mb-1 md:mb-2">{m.value}</div>
                   <div className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest md:tracking-[0.2em]">{m.label}</div>
               </div>
              ))}
           </div>
        </section>

        {/* SPECIALTIES: ANIMATED EXPERIENCE (COOLER) */}
        <section id="specialties-lp" className="py-6 md:py-12 bg-white relative overflow-hidden">
           <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brand-light/20 rounded-full blur-[100px] -z-10" />
           
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-4 md:mb-12">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-4 md:mb-8 tracking-tighter">
                    Expertise Across <br />
                    <span className="text-brand-deep font-black">Every Specialty.</span>
                 </h2>
                 <p className="text-slate-500 font-medium max-w-xl mx-auto">From high-stakes Internal Medicine to specialized Mental Health services, we speak your clinical language.</p>
              </div>

               {/* SPECIALTIES GRID: DESKTOP */}
               <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
                     <div 
                       key={idx}
                       style={{ willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
                       className="p-5 rounded-2xl border border-slate-100 bg-white flex items-center gap-4 group transition-all duration-500 cursor-default shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#0B6B57]"
                     >
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-deep group-hover:bg-brand-deep group-hover:text-white transition-all duration-500 shrink-0">
                           <spec.icon size={22} />
                        </div>
                        <span className="text-[13px] font-black text-slate-800 tracking-tight leading-tight">{spec.name}</span>
                     </div>
                  ))}
               </div>

               {/* SPECIALTIES CAROUSEL: MOBILE (3 ROWS x 5 ITEMS) */}
               <div className="flex flex-col gap-4 sm:hidden -mx-6">
                   {[
                    [
                      { name: 'Orthopedic', icon: Bone },
                      { name: 'Mental Health', icon: Brain },
                      { name: 'Tele Health', icon: Video },
                      { name: 'Physical Therapy', icon: Accessibility },
                      { name: 'Cardiology', icon: HeartPulse }
                    ],
                    [
                      { name: 'Internal Medicine', icon: Plus },
                      { name: 'Dentistry', icon: Smile },
                      { name: 'Laboratory', icon: FlaskConical },
                      { name: 'Urology', icon: Stethoscope },
                      { name: 'Neurology', icon: Brain }
                    ],
                    [
                      { name: 'Lactation Consultant', icon: Baby },
                      { name: 'Home Care', icon: Home },
                      { name: 'Medical Equipment', icon: Stethoscope },
                      { name: 'OBGYN', icon: User },
                      { name: 'Urgent Care', icon: Heart }
                    ]
                  ].map((row, rowIdx) => (
                    <div 
                      key={rowIdx}
                      ref={specScrollRefs[rowIdx]}
                      onMouseEnter={() => setActivePausedSpecRows(prev => [...prev, rowIdx])}
                      onMouseLeave={() => setActivePausedSpecRows(prev => prev.filter(i => i !== rowIdx))}
                      onTouchStart={() => setActivePausedSpecRows(prev => [...prev, rowIdx])}
                      onTouchEnd={() => setActivePausedSpecRows(prev => prev.filter(i => i !== rowIdx))}
                      className="flex flex-nowrap gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 scroll-smooth"
                    >
                      {row.map((spec, idx) => (
                        <div 
                          key={idx}
                          className="min-w-[70vw] min-h-[84px] snap-center p-5 rounded-2xl border border-slate-100 bg-white flex items-center gap-4 shadow-sm"
                        >
                          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-deep shrink-0">
                            <spec.icon size={22} />
                          </div>
                          <span className="text-[13px] font-black text-slate-800 tracking-tight leading-tight">{spec.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
               </div>
           </div>
        </section>

        {/* PROCESS: THE FLOW GRID */}
        <section id="how-it-works" className="py-6 md:py-12 bg-[#0f3d3a] relative overflow-hidden">
           <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
           {/* Animated flow backdrop */}
           <div className="absolute inset-0 opacity-[0.1] -z-10 bg-[radial-gradient(circle_at_center,_#A3BD6A_1px,_transparent_1px)] bg-[length:32px_32px]" />

           <div className="max-w-7xl mx-auto px-6 relative z-10 text-slate-50">
              <div className="text-center mb-6 md:mb-12">
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
                    <div 
                       key={i} 
                       className="bg-white/5 p-8 sm:p-12 transition-all duration-500 group border-b sm:border-b-0 sm:border-r border-white/10 last:border-b-0 last:border-r-0 relative hover:bg-white/10"
                    >
                       <h4 className="text-2xl font-black text-white mb-6 tracking-tight flex items-center justify-between">
                          {p.title}
                          <ArrowRight size={20} className="text-[#A3BD6A] transition-all group-hover:translate-x-1" />
                       </h4>
                       <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors font-bold">{p.content}</p>
                      
                      {/* Cool Bottom Accent */}
                      <div className="absolute bottom-0 left-0 h-1 bg-[#A3BD6A] w-0 group-hover:w-full transition-all duration-700" />
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* WHY CREDIFIDE: THE TECH-CENTRIC ADVANTAGE (THEME SYNCED) */}
        <section className="py-6 md:py-12 bg-white relative overflow-hidden">
           {/* Floating Theme Accents */}
           <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                 className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-brand-light/20 rounded-full blur-[140px]" 
              />
              <div
                 className="absolute -bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px]" 
              />
              <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: "linear-gradient(#0B6B57 1px, transparent 1px), linear-gradient(90deg, #0B6B57 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
           </div>
 
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row items-end justify-between mb-6 md:mb-12 gap-8">
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

              <div 
                ref={whyChooseScrollRef}
                onMouseEnter={() => setIsWhyChoosePaused(true)}
                onMouseLeave={() => setIsWhyChoosePaused(false)}
                onTouchStart={() => setIsWhyChoosePaused(true)}
                onTouchEnd={() => setIsWhyChoosePaused(false)}
                className="flex md:grid flex-nowrap md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 items-stretch"
              >
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
                       title: 'End-to-End Encryption', 
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
                    <div 
                       key={i}
                       style={{ willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
                       className="min-w-[85vw] md:min-w-0 min-h-[280px] md:min-h-0 snap-center group p-8 sm:p-10 rounded-[3rem] bg-white border border-slate-100/80 hover:border-brand-deep/30 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(11,107,87,0.1)] transition-all duration-700 relative overflow-hidden flex flex-col h-full hover:-translate-y-3"
                    >
                       {/* Subtle Background Glow */}
                       <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-light/10 transition-colors duration-1000" />
                       
                       <div className="text-brand-deep/40 text-[9px] font-black uppercase tracking-[0.5em] mb-6 block group-hover:text-brand-accent transition-colors">{w.tag}</div>
                       
                       <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-deep mb-8 group-hover:bg-brand-deep group-hover:text-white transition-all duration-700 shadow-sm">
                          <w.icon size={24} />
                       </div>
                       
                       <h4 className="text-xl font-bold text-slate-900 mb-0 group-hover:text-brand-deep transition-colors">{w.title}</h4>

                       
                       {/* Interactive Bottom Glow */}
                       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* PAYER NETWORK: THE INTEGRATION HUB EXPERIENCE */}
        <section className="py-6 md:py-12 bg-white relative overflow-hidden">
           {/* Modern Hub Lines Animation */}
           <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 1440 800" fill="none">
                 <path 
                    d="M1440 200L720 400L0 200" stroke="#0B6B57" strokeWidth="2" 
                 />
                 <circle 
                    cx="720" cy="400" r="10" fill="#0B6B57" 
                 />
              </svg>
           </div>
 
           <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div
                 className="mb-6 md:mb-12"
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
              </div>

              {/* Premium Static Logo Grid - Optimized for clarity and elegance */}
               <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto py-8 md:py-12 px-2 md:px-0">
                  {PAYERS.map((payer, idx) => (
                     <div
                        key={idx}
                        style={{ willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
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
                     </div>
                  ))}
               </div>
           </div>
        </section>

        {/* FINAL CONVERSION: GOOGLE CALENDAR BOOKING */}
        <section id="footer-form" className="py-6 md:py-12 bg-[#0f2e2a] relative overflow-hidden">
          {/* Background accents */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-light/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 30px, #A3BD6A 30px, #A3BD6A 31px)" }} />
 
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Header */}
            <div
              style={{ willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
              className="text-center mb-6 md:mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[9px] font-black uppercase tracking-[0.3em] mb-4 sm:mb-6 animate-pulse">
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
            </div>

            {/* Trust badges */}
            <div
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
            </div>

            {/* CTA Button replacing iframe */}
            <div
              className="flex justify-center"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto justify-center bg-[#A3BD6A] text-[#0f2e2a] px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-white hover:scale-105 transition-all shadow-xl shadow-brand-deep/30 group"
              >
                Open Scheduling Calendar
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom CTA line */}
            <p className="text-[#A3BD6A]/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] mt-4 md:mt-8">
               Credentialing Excellence At Scale
            </p>      
            <a href="tel:+13215240606" className="text-brand-accent hover:text-white transition-colors text-sm font-bold mt-2 block">
                (321) 524-0606
            </a>
          </div>
        </section>
      </main>

      {/* Calendar Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0f2e2a]/80 backdrop-blur-sm">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsModalOpen(false)} />
          <div className="relative z-10 w-full max-w-3xl bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] flex flex-col" onClick={(e) => e.stopPropagation()} style={{ maxHeight: '90vh' }}>
            {/* Top bar decoration */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-b border-slate-100 shrink-0">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" onClick={() => setIsModalOpen(false)} style={{ cursor: 'pointer' }} />
                 <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                 <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
               </div>
               <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm w-[60%] sm:w-1/2 justify-center">
                 <Lock size={10} className="text-slate-400" />
                 <span className="text-[10px] font-bold text-slate-400 tracking-wider truncate">credifide.com/consultation</span>
               </div>
               <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors text-slate-500 font-bold text-xl leading-none">
                  &times;
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-white" style={{ minHeight: '600px' }}>
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
                {/* Bottom integration bar */}
                <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-white flex items-center justify-center px-6 border-t border-slate-50 z-20 pointer-events-none">
                   <div className="flex items-center gap-2 opacity-30">
                      <Zap size={10} />
                      <span className="text-[8px] font-black uppercase tracking-[0.4em]">Powered by Credifide Secure Scheduler</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderEnrollmentLP;





